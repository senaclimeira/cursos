/**
 * importar-curso.js
 *
 * Lê uma planilha Excel (.xlsx) com as informações de um curso e gera:
 *   - public/cursos/{slug}/ucs.json
 *   - public/cursos/{slug}/faltas.json
 *   - public/cursos/{slug}/avaliacao.md
 *   - public/cursos/{slug}/informacoes.md
 *   - public/cursos/{slug}/bibliografia.json
 *   - public/cursos/{slug}/downloads.json
 *
 * Também atualiza src/data/cursos.js com a entrada do novo curso (se não existir).
 *
 * Uso:
 *   node scripts/importar-curso.js <caminho-da-planilha.xlsx>
 */

import { createRequire } from 'module'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const require = createRequire(import.meta.url)
const XLSX = require('xlsx')

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

// ─────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────

function lerAba(wb, nome) {
  const ws = wb.Sheets[nome]
  if (!ws) throw new Error(`Aba "${nome}" não encontrada na planilha.`)
  return XLSX.utils.sheet_to_json(ws, { defval: '' })
}

/** Converte linhas {tipo, conteudo} em Markdown */
function linhasParaMarkdown(linhas) {
  return linhas
    .filter(r => r.tipo && r.conteudo)
    .map(r => {
      switch (r.tipo.trim().toLowerCase()) {
        case 'h1':    return `# ${r.conteudo}`
        case 'h2':    return `\n## ${r.conteudo}`
        case 'h3':    return `\n### ${r.conteudo}`
        case 'item':  return `- ${r.conteudo}`
        case 'texto': return `${r.conteudo}`
        case 'negrito': return `**${r.conteudo}**`
        default:      return r.conteudo
      }
    })
    .join('\n')
    + '\n'
}

function escreverArquivo(caminho, conteudo) {
  fs.mkdirSync(path.dirname(caminho), { recursive: true })
  fs.writeFileSync(caminho, conteudo, 'utf-8')
  console.log(`  ✔ ${path.relative(ROOT, caminho)}`)
}

// ─────────────────────────────────────────────
// Main
// ─────────────────────────────────────────────

const args = process.argv.slice(2)
if (!args[0]) {
  console.error('Uso: node scripts/importar-curso.js <planilha.xlsx>')
  process.exit(1)
}

const xlsxPath = path.resolve(args[0])
if (!fs.existsSync(xlsxPath)) {
  console.error(`Arquivo não encontrado: ${xlsxPath}`)
  process.exit(1)
}

console.log(`\nLendo planilha: ${xlsxPath}\n`)
const wb = XLSX.readFile(xlsxPath)

// ── 1. Curso (metadados) ──────────────────────
const [curso] = lerAba(wb, 'Curso')
if (!curso?.slug) throw new Error('Aba "Curso": campo "slug" é obrigatório.')

const slug = curso.slug.trim()
const destDir = path.join(ROOT, 'public', 'cursos', slug)

console.log(`Curso: ${curso.nome} (${slug})`)
console.log(`Destino: ${path.relative(ROOT, destDir)}\n`)

// ── 2. Badges ────────────────────────────────
const badgesRows = lerAba(wb, 'Badges')
const badges = badgesRows
  .filter(r => r.label)
  .map(r => ({ label: r.label.trim(), variant: (r.variant || 'primary').trim() }))

// ── 3. UCs ───────────────────────────────────
const ucsBase = lerAba(wb, 'UCs')
const atividadesRows = lerAba(wb, 'UC_Atividades')
const linguagensRows = lerAba(wb, 'UC_Linguagens')
const ferramentasRows = lerAba(wb, 'UC_Ferramentas')

const ucs = ucsBase
  .filter(r => r.id && r.titulo)
  .map(r => {
    const id = r.id.trim()
    const obj = { id, titulo: r.titulo.trim() }

    const atividades = atividadesRows
      .filter(a => a.uc_id?.trim() === id && a.atividade)
      .map(a => a.atividade.trim())
    if (atividades.length) obj.atividades = atividades

    const linguagens = linguagensRows
      .filter(l => l.uc_id?.trim() === id && l.nome)
      .map(l => ({ nome: l.nome.trim(), desc: l.desc.trim() }))
    if (linguagens.length) obj.linguagens = linguagens

    const ferramentas = ferramentasRows
      .filter(f => f.uc_id?.trim() === id && f.nome)
      .map(f => ({ nome: f.nome.trim(), desc: f.desc.trim() }))
    if (ferramentas.length) obj.ferramentas = ferramentas

    return obj
  })

// ── 4. Faltas ────────────────────────────────
const faltasRows = lerAba(wb, 'Faltas')
const faltas = faltasRows
  .filter(r => r.uc && r.nome)
  .map(r => ({
    uc: Number(r.uc),
    nome: r.nome.trim(),
    aulas: Number(r.aulas),
    ch: String(r.ch).trim(),
    falta25: String(r.falta25).trim(),
    qtdeDias: String(r.qtdeDias).trim(),
  }))

// ── 5. Avaliação (Markdown) ──────────────────
const avaliacaoRows = lerAba(wb, 'Avaliacao')
const avaliacaoMd = linhasParaMarkdown(avaliacaoRows)

// ── 6. Informações (Markdown) ────────────────
const informacoesRows = lerAba(wb, 'Informacoes')
const informacoesMd = linhasParaMarkdown(informacoesRows)

// ── 7. Bibliografia ──────────────────────────
const bibliografiaRows = lerAba(wb, 'Bibliografia')
const bibliografia = bibliografiaRows
  .filter(r => r.titulo)
  .map(r => ({
    titulo: r.titulo.trim(),
    autores: r.autores.trim(),
    editora: r.editora.trim(),
    tipo: r.tipo.trim(),
    ucs: String(r.ucs)
      .split(',')
      .map(u => Number(u.trim()))
      .filter(n => !isNaN(n) && n > 0),
  }))

// ── 8. Downloads ─────────────────────────────
const downloadsRows = lerAba(wb, 'Downloads')
const downloads = downloadsRows
  .filter(r => r.nome)
  .map(r => ({
    nome: r.nome.trim(),
    desc: r.desc.trim(),
    link: r.link.trim(),
  }))

// ── Escrever arquivos ─────────────────────────
console.log('Gerando arquivos:')
escreverArquivo(path.join(destDir, 'ucs.json'), JSON.stringify(ucs, null, 2))
escreverArquivo(path.join(destDir, 'faltas.json'), JSON.stringify(faltas, null, 2))
escreverArquivo(path.join(destDir, 'avaliacao.md'), avaliacaoMd)
escreverArquivo(path.join(destDir, 'informacoes.md'), informacoesMd)
escreverArquivo(path.join(destDir, 'bibliografia.json'), JSON.stringify(bibliografia, null, 2))
escreverArquivo(path.join(destDir, 'downloads.json'), JSON.stringify(downloads, null, 2))

// ── Atualizar src/data/cursos.js ─────────────
const cursosJsPath = path.join(ROOT, 'src', 'data', 'cursos.js')
let cursosJs = fs.readFileSync(cursosJsPath, 'utf-8')

if (cursosJs.includes(`slug: '${slug}'`)) {
  console.log(`\n⚠  Curso "${slug}" já existe em src/data/cursos.js — não foi alterado.`)
  console.log('   Edite manualmente se precisar atualizar os metadados.\n')
} else {
  const novaEntrada = `  {
    id: '${slug}',
    slug: '${slug}',
    nome: '${curso.nome.replace(/'/g, "\\'")}',
    descricao: '${curso.descricao.replace(/'/g, "\\'")}',
    icone: '${curso.icone || 'BookOpen'}',
    cor: '${curso.cor || '#6366f1'}',
    badges: ${JSON.stringify(badges, null, 2).replace(/^/gm, '    ').trimStart()},
  },`

  cursosJs = cursosJs.replace(
    /^(const cursos = \[)/m,
    `$1\n${novaEntrada}`
  )
  fs.writeFileSync(cursosJsPath, cursosJs, 'utf-8')
  console.log(`\n  ✔ src/data/cursos.js atualizado com "${slug}"`)
}

console.log('\n✅ Importação concluída!\n')
