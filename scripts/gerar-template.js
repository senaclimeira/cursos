/**
 * gerar-template.js
 *
 * Gera uma planilha Excel modelo (template-curso.xlsx) com todas as abas
 * necessárias, preenchida com dados de exemplo baseados no curso
 * "Técnico em Desenvolvimento de Sistemas".
 *
 * Uso:
 *   node scripts/gerar-template.js [nome-do-arquivo.xlsx]
 */

import { createRequire } from 'module'
import path from 'path'
import { fileURLToPath } from 'url'

const require = createRequire(import.meta.url)
const XLSX = require('xlsx')

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

const saida = process.argv[2]
  ? path.resolve(process.argv[2])
  : path.join(ROOT, 'template-curso.xlsx')

// ─────────────────────────────────────────────
// Dados de exemplo
// ─────────────────────────────────────────────

const abaCurso = [
  { slug: 'novo-curso', nome: 'Técnico em Novo Curso', descricao: 'Descrição curta do curso (aparece no card da home).', icone: 'BookOpen', cor: '#6366f1' },
]

const abaBadges = [
  { label: 'Módulo 1', variant: 'primary' },
  { label: 'Módulo 2', variant: 'success' },
  { label: 'Projeto Integrador', variant: 'dark' },
]

const abaUCs = [
  { id: 'uc1', titulo: 'UC1 - Título da primeira unidade curricular' },
  { id: 'uc2', titulo: 'UC2 - Título da segunda unidade curricular' },
  { id: 'uc3', titulo: 'UC3 - Título da terceira unidade curricular' },
]

const abaAtividades = [
  { uc_id: 'uc1', atividade: 'Pesquisas' },
  { uc_id: 'uc1', atividade: 'Estudos de casos' },
  { uc_id: 'uc2', atividade: 'Elaboração de textos' },
  { uc_id: 'uc2', atividade: 'Apresentações' },
  { uc_id: 'uc3', atividade: 'Prática em laboratório' },
]

const abaLinguagens = [
  { uc_id: 'uc3', nome: 'Python', desc: 'Linguagem de programação de alto nível.' },
]

const abaFerramentas = [
  { uc_id: 'uc1', nome: 'Trello', desc: 'Organização de tarefas em cartões e colunas.' },
  { uc_id: 'uc2', nome: 'Google Docs', desc: 'Edição colaborativa de documentos.' },
  { uc_id: 'uc3', nome: 'VS Code', desc: 'Editor de código moderno e extensível.' },
]

const abaFaltas = [
  { uc: 1, nome: 'Título da primeira UC', aulas: 18, ch: '60h', falta25: '15h', qtdeDias: '4 dias' },
  { uc: 2, nome: 'Título da segunda UC', aulas: 11, ch: '36h', falta25: '9h', qtdeDias: '2 dias' },
  { uc: 3, nome: 'Título da terceira UC', aulas: 18, ch: '60h', falta25: '15h', qtdeDias: '4 dias' },
]

// tipo: h1, h2, h3, negrito, item, texto
const abaAvaliacao = [
  { tipo: 'h1', conteudo: 'Avaliação' },
  { tipo: 'h2', conteudo: 'Menção por indicador' },
  { tipo: 'negrito', conteudo: 'Durante o processo:' },
  { tipo: 'item', conteudo: 'Atendido — A' },
  { tipo: 'item', conteudo: 'Parcialmente Atendido — PA' },
  { tipo: 'item', conteudo: 'Não Atendido — NA' },
  { tipo: 'negrito', conteudo: 'Ao final da Unidade Curricular no Indicador:' },
  { tipo: 'item', conteudo: 'Atendido — A' },
  { tipo: 'item', conteudo: 'Não Atendido — NA' },
  { tipo: 'h2', conteudo: 'Menção por Unidade Curricular' },
  { tipo: 'item', conteudo: 'Desenvolvida — D' },
  { tipo: 'item', conteudo: 'Não Desenvolvida — ND' },
  { tipo: 'h2', conteudo: 'Menção para Aprovação no Curso' },
  { tipo: 'item', conteudo: 'Aprovado — AP' },
  { tipo: 'item', conteudo: 'Reprovado — RP' },
]

const abaInformacoes = [
  { tipo: 'h1', conteudo: 'Informações Gerais' },
  { tipo: 'h2', conteudo: 'Uniforme' },
  { tipo: 'item', conteudo: 'Não temos uniforme padrão.' },
  { tipo: 'h2', conteudo: 'Estágio' },
  { tipo: 'item', conteudo: 'Não obrigatório.' },
  { tipo: 'h2', conteudo: 'Representante de sala' },
  { tipo: 'item', conteudo: 'Eleito pelos próprios alunos no início do curso.' },
]

const abaBibliografia = [
  { titulo: 'Título do Livro 1', autores: 'SOBRENOME, A.; SOBRENOME, B.', editora: 'Editora, 2023', tipo: 'Básica', ucs: '1,2' },
  { titulo: 'Título do Livro 2', autores: 'SOBRENOME, C.', editora: 'Outra Editora, 2022', tipo: 'Complementar', ucs: '1' },
  { titulo: 'Título do Livro 3', autores: 'SOBRENOME, D.; SOBRENOME, E.', editora: 'Editora, 2021', tipo: 'Mista (Básica/Comp.)', ucs: '2,3' },
]
// tipo: Básica | Complementar | Mista (Básica/Comp.)

const abaDownloads = [
  { nome: 'VS Code', desc: 'Editor de código moderno.', link: 'https://code.visualstudio.com/' },
  { nome: 'Git / GitHub', desc: 'Controle de versões e hospedagem de código.', link: 'https://github.com/' },
]

// ─────────────────────────────────────────────
// Montar workbook
// ─────────────────────────────────────────────

const wb = XLSX.utils.book_new()

function addSheet(wb, nome, dados) {
  const ws = XLSX.utils.json_to_sheet(dados)
  XLSX.utils.book_append_sheet(wb, ws, nome)
}

addSheet(wb, 'Curso', abaCurso)
addSheet(wb, 'Badges', abaBadges)
addSheet(wb, 'UCs', abaUCs)
addSheet(wb, 'UC_Atividades', abaAtividades)
addSheet(wb, 'UC_Linguagens', abaLinguagens)
addSheet(wb, 'UC_Ferramentas', abaFerramentas)
addSheet(wb, 'Faltas', abaFaltas)
addSheet(wb, 'Avaliacao', abaAvaliacao)
addSheet(wb, 'Informacoes', abaInformacoes)
addSheet(wb, 'Bibliografia', abaBibliografia)
addSheet(wb, 'Downloads', abaDownloads)

XLSX.writeFile(wb, saida)
console.log(`\n✅ Template gerado: ${saida}\n`)
console.log('Abas criadas:')
console.log('  Curso          → slug, nome, descricao, icone, cor')
console.log('  Badges         → label, variant')
console.log('  UCs            → id, titulo')
console.log('  UC_Atividades  → uc_id, atividade')
console.log('  UC_Linguagens  → uc_id, nome, desc')
console.log('  UC_Ferramentas → uc_id, nome, desc')
console.log('  Faltas         → uc, nome, aulas, ch, falta25, qtdeDias')
console.log('  Avaliacao      → tipo (h1/h2/h3/negrito/item/texto), conteudo')
console.log('  Informacoes    → tipo (h1/h2/h3/negrito/item/texto), conteudo')
console.log('  Bibliografia   → titulo, autores, editora, tipo, ucs')
console.log('  Downloads      → nome, desc, link')
console.log('')
console.log('Após preencher, execute:')
console.log('  node scripts/importar-curso.js <planilha.xlsx>\n')
