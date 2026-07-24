/**
 * gerar-design-grafico.js
 *
 * Gera template-curso.xlsx preenchido com os dados do
 * Técnico em Design Gráfico (PC nº 306).
 *
 * Uso:
 *   node scripts/gerar-design-grafico.js
 */

import { createRequire } from 'module'
import path from 'path'
import { fileURLToPath } from 'url'

const require = createRequire(import.meta.url)
const XLSX = require('xlsx')

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const saida = path.join(ROOT, 'template-curso.xlsx')

// ─────────────────────────────────────────────
// CURSO
// ─────────────────────────────────────────────
const abaCurso = [
  {
    slug: 'design-grafico',
    nome: 'Técnico em Design Gráfico',
    descricao: 'Aprenda a criar projetos gráficos impressos e digitais, tratar imagens, diagramar publicações, desenvolver identidade visual, embalagens e interfaces para mídias digitais.',
    icone: 'Palette',
    cor: '#8b5cf6',
  },
]

// ─────────────────────────────────────────────
// BADGES
// ─────────────────────────────────────────────
const abaBadges = [
  { label: 'Design Gráfico', variant: 'primary' },
  { label: 'Identidade Visual', variant: 'success' },
  { label: 'Produção Gráfica', variant: 'warning' },
  { label: 'Design Digital', variant: 'danger' },
  { label: 'Projeto Integrador', variant: 'dark' },
]

// ─────────────────────────────────────────────
// UCs
// 22 UCs | Total: 1.000 horas
// ─────────────────────────────────────────────
const abaUCs = [
  // Qualificação 1 — Assistente de Arte (200h)
  { id: 'uc1',  titulo: 'UC1 - Planejar projetos gráficos impressos' },
  { id: 'uc2',  titulo: 'UC2 - Compor e tratar imagens digitais' },
  { id: 'uc3',  titulo: 'UC3 - Desenvolver ilustrações vetoriais' },
  { id: 'uc4',  titulo: 'UC4 - Planejar produção gráfica' },
  { id: 'uc5',  titulo: 'UC5 - Projeto Integrador: Assistente de Arte' },
  // Qualificação 2 — Programação Visual de Design Editorial (200h)
  { id: 'uc6',  titulo: 'UC6 - Diagramar livros impressos e e-books' },
  { id: 'uc7',  titulo: 'UC7 - Diagramar revistas impressa e digital' },
  { id: 'uc8',  titulo: 'UC8 - Produzir infográfico' },
  { id: 'uc9',  titulo: 'UC9 - Projeto Integrador: Programação Visual de Design Editorial' },
  // Qualificação 3 — Assistente de Design de Marcas e Identidade Visual (200h)
  { id: 'uc10', titulo: 'UC10 - Criar identidade visual' },
  { id: 'uc11', titulo: 'UC11 - Desenvolver Manual de Identidade Visual' },
  { id: 'uc12', titulo: 'UC12 - Desenvolver projeto gráfico para expografia' },
  { id: 'uc13', titulo: 'UC13 - Projeto Integrador: Assistente de Design de Marcas e Identidade Visual' },
  // Qualificação 4 — Assistente de Design de Embalagens (200h)
  { id: 'uc14', titulo: 'UC14 - Criar embalagens cartotécnicas' },
  { id: 'uc15', titulo: 'UC15 - Desenvolver materiais de ponto de venda' },
  { id: 'uc16', titulo: 'UC16 - Criar mockups impressos e digitais' },
  { id: 'uc17', titulo: 'UC17 - Projeto Integrador: Assistente de Design de Embalagens' },
  // Qualificação 5 — Assistente de Design Gráfico para Interfaces Digitais (200h)
  { id: 'uc18', titulo: 'UC18 - Planejar projetos gráficos digitais' },
  { id: 'uc19', titulo: 'UC19 - Desenvolver interface e guia de estilos gráficos para mídias digitais' },
  { id: 'uc20', titulo: 'UC20 - Desenvolver projeto de design em movimento' },
  { id: 'uc21', titulo: 'UC21 - Criar portfólio digital' },
  { id: 'uc22', titulo: 'UC22 - Projeto Integrador: Assistente de Design Gráfico para Interfaces Digitais' },
]

// ─────────────────────────────────────────────
// UC_ATIVIDADES
// ─────────────────────────────────────────────
const abaAtividades = [
  // UC1
  { uc_id: 'uc1', atividade: 'Desenvolvimento de painel semântico a partir de briefing de design' },
  { uc_id: 'uc1', atividade: 'Composição de layouts aplicando fundamentos do design gráfico (equilíbrio, hierarquia, tipografia, cor)' },
  { uc_id: 'uc1', atividade: 'Criação de apresentação com as etapas e justificativas do projeto gráfico' },
  // UC2
  { uc_id: 'uc2', atividade: 'Edição de imagens digitais com técnicas de seleção, camadas, máscaras e filtros (Adobe Photoshop)' },
  { uc_id: 'uc2', atividade: 'Composição e tratamento de imagens conforme especificações técnicas (resolução, modelo de cor, formato)' },
  { uc_id: 'uc2', atividade: 'Restauração de imagens com ajustes de luz, tom, cor e saturação' },
  // UC3
  { uc_id: 'uc3', atividade: 'Criação de arquivos vetoriais com formas, caminhos compostos e edição de texto (Adobe Illustrator)' },
  { uc_id: 'uc3', atividade: 'Desenvolvimento de peças gráficas vetoriais (cartão-postal, cartaz, folder)' },
  { uc_id: 'uc3', atividade: 'Preparação de arquivos digitais para impressão (AI, EPS, PDF)' },
  // UC4
  { uc_id: 'uc4', atividade: 'Seleção de sistema de impressão e determinação de acabamentos gráficos conforme o projeto' },
  { uc_id: 'uc4', atividade: 'Realização de orçamento gráfico e pesquisa de fornecedores' },
  { uc_id: 'uc4', atividade: 'Preparação e fechamento de arquivos PDF para impressão (pré-impressão, sangria, marcas)' },
  // UC5
  { uc_id: 'uc5', atividade: 'Projeto integrador: criação de projeto gráfico completo integrando arte, design e técnicas de produção gráfica' },
  // UC6
  { uc_id: 'uc6', atividade: 'Desenvolvimento de projeto editorial de livro (formato, capa, mancha gráfica, tipografia)' },
  { uc_id: 'uc6', atividade: 'Diagramação de páginas com editoração eletrônica (Adobe InDesign)' },
  { uc_id: 'uc6', atividade: 'Desenvolvimento de e-book (EPUB fixo e refluível, PDF interativo)' },
  { uc_id: 'uc6', atividade: 'Encadernação manual de protótipo e fechamento de arquivo para impressão' },
  // UC7
  { uc_id: 'uc7', atividade: 'Desenvolvimento de projeto editorial de revista (capa, miolo, grid, diagramação modular)' },
  { uc_id: 'uc7', atividade: 'Diagramação de páginas e criação de linha editorial (Adobe InDesign)' },
  { uc_id: 'uc7', atividade: 'Desenvolvimento de revista digital interativa (ePub fixo, PDF interativo)' },
  // UC8
  { uc_id: 'uc8', atividade: 'Elaboração de roteiro e coleta de dados para infográfico' },
  { uc_id: 'uc8', atividade: 'Criação de infográfico combinando ilustração, tipografia e hierarquia visual' },
  { uc_id: 'uc8', atividade: 'Finalização de arquivo para publicação impressa ou digital' },
  // UC9
  { uc_id: 'uc9', atividade: 'Projeto integrador: desenvolvimento de publicação editorial impressa e/ou digital (livro ou revista)' },
  // UC10
  { uc_id: 'uc10', atividade: 'Criação de logotipo com malha construtiva, cor, proporção e tipografia (Adobe Illustrator)' },
  { uc_id: 'uc10', atividade: 'Desenvolvimento de tipografia e lettering de acordo com o conceito da marca' },
  { uc_id: 'uc10', atividade: 'Desenvolvimento de imagens vetoriais para composição da identidade visual' },
  // UC11
  { uc_id: 'uc11', atividade: 'Criação de regras de aplicação do logotipo (assinaturas, área de segurança, modulações)' },
  { uc_id: 'uc11', atividade: 'Desenvolvimento de materiais gráficos e digitais aplicando o manual de identidade visual' },
  { uc_id: 'uc11', atividade: 'Criação de sinalização gráfica para ambientes e comunicação visual para produtos' },
  // UC12
  { uc_id: 'uc12', atividade: 'Desenvolvimento da identidade visual do evento conforme conceito expográfico' },
  { uc_id: 'uc12', atividade: 'Planejamento de materiais impressos (plotagem, gigantografia, adesivagem) e apresentação do projeto' },
  // UC13
  { uc_id: 'uc13', atividade: 'Projeto integrador: desenvolvimento completo de identidade visual e manual para organização real ou fictícia' },
  // UC14
  { uc_id: 'uc14', atividade: 'Planificação de embalagens cartotécnicas conforme normas técnicas (faca de corte)' },
  { uc_id: 'uc14', atividade: 'Criação de layout e imagens digitais conforme especificações da embalagem' },
  { uc_id: 'uc14', atividade: 'Fechamento de arquivo digital para impressão gráfica' },
  // UC15
  { uc_id: 'uc15', atividade: 'Planificação e criação de layout de materiais de ponto de venda (PDV) conforme briefing' },
  { uc_id: 'uc15', atividade: 'Fechamento de arquivo digital para impressão de materiais de PDV' },
  // UC16
  { uc_id: 'uc16', atividade: 'Desenvolvimento de protótipo impresso (mockup físico) da embalagem' },
  { uc_id: 'uc16', atividade: 'Execução de mockup digital 3D da embalagem com software de modelagem' },
  // UC17
  { uc_id: 'uc17', atividade: 'Projeto integrador: redesign de embalagem cartotécnica sustentável com materiais de PDV' },
  // UC18
  { uc_id: 'uc18', atividade: 'Elaboração de briefing e definição de estrutura do projeto de interface digital' },
  { uc_id: 'uc18', atividade: 'Criação de wireframes e arquitetura da informação para produto digital' },
  { uc_id: 'uc18', atividade: 'Apresentação das etapas do projeto com metodologia Design Thinking' },
  // UC19
  { uc_id: 'uc19', atividade: 'Desenvolvimento de interface gráfica para site responsivo e produtos para mídias digitais (Figma)' },
  { uc_id: 'uc19', atividade: 'Criação de guia de estilos gráficos (paleta de cores, tipografia, iconografia, estados de botão)' },
  // UC20
  { uc_id: 'uc20', atividade: 'Planejamento de animação e desenvolvimento de elementos gráficos para motion graphics (Adobe After Effects)' },
  { uc_id: 'uc20', atividade: 'Finalização e renderização da animação nos formatos requeridos (AVI, MPEG, MOV)' },
  // UC21
  { uc_id: 'uc21', atividade: 'Desenvolvimento de narrativa/storytelling para apresentação do portfólio profissional' },
  { uc_id: 'uc21', atividade: 'Publicação do portfólio em plataformas digitais profissionais (Behance, Wix, etc.)' },
  // UC22
  { uc_id: 'uc22', atividade: 'Projeto integrador: criação de projeto gráfico digital completo para interfaces (planejamento, interface, estilos e animação)' },
]

// ─────────────────────────────────────────────
// UC_LINGUAGENS (softwares / formatos principais)
// ─────────────────────────────────────────────
const abaLinguagens = [
  { uc_id: 'uc2',  nome: 'Adobe Photoshop',      desc: 'Software de edição e composição de imagens digitais em bitmap (raster).' },
  { uc_id: 'uc3',  nome: 'Adobe Illustrator',    desc: 'Software de criação e edição de imagens vetoriais e peças gráficas.' },
  { uc_id: 'uc6',  nome: 'Adobe InDesign',        desc: 'Software de editoração eletrônica para diagramação de livros, revistas e publicações.' },
  { uc_id: 'uc6',  nome: 'EPUB / PDF Interativo', desc: 'Formatos para publicação de e-books e documentos digitais interativos.' },
  { uc_id: 'uc14', nome: 'PDF/X',                 desc: 'Padrão de fechamento de arquivos PDF para impressão gráfica de alta qualidade.' },
  { uc_id: 'uc19', nome: 'Figma',                 desc: 'Ferramenta de design de interfaces, wireframes e prototipagem colaborativa baseada em nuvem.' },
  { uc_id: 'uc20', nome: 'Adobe After Effects',  desc: 'Software de composição de vídeo e criação de animações e motion graphics.' },
]

// ─────────────────────────────────────────────
// UC_FERRAMENTAS
// ─────────────────────────────────────────────
const abaFerramentas = [
  // UC1 - Fundamentos
  { uc_id: 'uc1', nome: 'Adobe Photoshop / Illustrator',   desc: 'Criação de painéis semânticos, composição e layout de projetos gráficos.' },
  { uc_id: 'uc1', nome: 'Coolors / Adobe Color',           desc: 'Ferramentas para criação e seleção de paletas de cores harmônicas.' },
  { uc_id: 'uc1', nome: 'Google Fonts / Adobe Fonts',      desc: 'Bibliotecas de tipografias para uso em projetos gráficos.' },
  // UC2 - Imagens digitais
  { uc_id: 'uc2', nome: 'Adobe Photoshop',                 desc: 'Edição, composição e tratamento profissional de imagens digitais.' },
  // UC3 - Vetorial
  { uc_id: 'uc3', nome: 'Adobe Illustrator',               desc: 'Criação de ilustrações vetoriais e peças gráficas para impressão e digital.' },
  // UC4 - Produção gráfica
  { uc_id: 'uc4', nome: 'Adobe Acrobat',                   desc: 'Criação, revisão e fechamento de arquivos PDF para impressão.' },
  { uc_id: 'uc4', nome: 'Preflight (InDesign / Acrobat)',  desc: 'Verificação de conformidade de arquivos antes do envio para impressão.' },
  // UC6, UC7 - Editoração
  { uc_id: 'uc6', nome: 'Adobe InDesign',                  desc: 'Editoração eletrônica para diagramação de livros, revistas e publicações digitais.' },
  { uc_id: 'uc7', nome: 'Adobe InDesign',                  desc: 'Diagramação de revistas impressas e desenvolvimento de publicações digitais interativas.' },
  // UC8 - Infográfico
  { uc_id: 'uc8', nome: 'Adobe Illustrator / InDesign',    desc: 'Ferramentas para criação visual e diagramação de infográficos.' },
  // UC10 - Identidade visual
  { uc_id: 'uc10', nome: 'Adobe Illustrator',              desc: 'Criação de logotipos, ilustrações vetoriais e composição da identidade visual.' },
  // UC11 - Manual
  { uc_id: 'uc11', nome: 'Adobe Illustrator / InDesign',   desc: 'Diagramação do manual de identidade visual e materiais de aplicação.' },
  // UC12 - Expografia
  { uc_id: 'uc12', nome: 'Adobe Illustrator / Photoshop',  desc: 'Desenvolvimento da identidade visual de eventos e materiais de expografia.' },
  // UC14 - Embalagens
  { uc_id: 'uc14', nome: 'Adobe Illustrator',              desc: 'Planificação de embalagens cartotécnicas e fechamento de arquivos para impressão.' },
  // UC15 - PDV
  { uc_id: 'uc15', nome: 'Adobe Illustrator / Photoshop',  desc: 'Criação de layouts e materiais de ponto de venda (PDV).' },
  // UC16 - Mockup
  { uc_id: 'uc16', nome: 'Adobe Illustrator / Dimension',  desc: 'Criação de mockups digitais 3D de embalagens e materiais gráficos.' },
  { uc_id: 'uc16', nome: 'Blender',                        desc: 'Software gratuito de modelagem e renderização 3D para mockups.' },
  // UC18 - UX/UI
  { uc_id: 'uc18', nome: 'Figma',                          desc: 'Design de interfaces, wireframes, prototipagem e apresentação de projetos digitais.' },
  // UC19 - Interface
  { uc_id: 'uc19', nome: 'Figma / Adobe XD',               desc: 'Desenvolvimento de interfaces responsivas, guia de estilos e componentes de UI.' },
  // UC20 - Motion
  { uc_id: 'uc20', nome: 'Adobe After Effects',            desc: 'Criação de motion graphics, animações e composição de vídeo.' },
  // UC21 - Portfólio
  { uc_id: 'uc21', nome: 'Behance / Wix / WordPress',      desc: 'Plataformas para publicação e divulgação de portfólio profissional online.' },
]

// ─────────────────────────────────────────────
// FALTAS
// falta25 = CH * 0.25 | qtdeDias ≈ falta25 / 3.75h por dia
// ─────────────────────────────────────────────
const abaFaltas = [
  { uc: 1,  nome: 'Planejar projetos gráficos impressos',                                          aulas: 16, ch: '48h',  falta25: '12h', qtdeDias: '3 dias' },
  { uc: 2,  nome: 'Compor e tratar imagens digitais',                                              aulas: 16, ch: '48h',  falta25: '12h', qtdeDias: '3 dias' },
  { uc: 3,  nome: 'Desenvolver ilustrações vetoriais',                                             aulas: 16, ch: '48h',  falta25: '12h', qtdeDias: '3 dias' },
  { uc: 4,  nome: 'Planejar produção gráfica',                                                     aulas: 12, ch: '36h',  falta25: '9h',  qtdeDias: '2 dias' },
  { uc: 5,  nome: 'Projeto Integrador: Assistente de Arte',                                        aulas: 7,  ch: '20h',  falta25: '5h',  qtdeDias: '1 dia'  },
  { uc: 6,  nome: 'Diagramar livros impressos e e-books',                                          aulas: 24, ch: '72h',  falta25: '18h', qtdeDias: '5 dias' },
  { uc: 7,  nome: 'Diagramar revistas impressa e digital',                                         aulas: 24, ch: '72h',  falta25: '18h', qtdeDias: '5 dias' },
  { uc: 8,  nome: 'Produzir infográfico',                                                          aulas: 12, ch: '36h',  falta25: '9h',  qtdeDias: '2 dias' },
  { uc: 9,  nome: 'Projeto Integrador: Programação Visual de Design Editorial',                    aulas: 7,  ch: '20h',  falta25: '5h',  qtdeDias: '1 dia'  },
  { uc: 10, nome: 'Criar identidade visual',                                                       aulas: 24, ch: '72h',  falta25: '18h', qtdeDias: '5 dias' },
  { uc: 11, nome: 'Desenvolver Manual de Identidade Visual',                                       aulas: 20, ch: '60h',  falta25: '15h', qtdeDias: '4 dias' },
  { uc: 12, nome: 'Desenvolver projeto gráfico para expografia',                                   aulas: 16, ch: '48h',  falta25: '12h', qtdeDias: '3 dias' },
  { uc: 13, nome: 'Projeto Integrador: Assistente de Design de Marcas e Identidade Visual',        aulas: 7,  ch: '20h',  falta25: '5h',  qtdeDias: '1 dia'  },
  { uc: 14, nome: 'Criar embalagens cartotécnicas',                                                aulas: 24, ch: '72h',  falta25: '18h', qtdeDias: '5 dias' },
  { uc: 15, nome: 'Desenvolver materiais de ponto de venda',                                       aulas: 20, ch: '60h',  falta25: '15h', qtdeDias: '4 dias' },
  { uc: 16, nome: 'Criar mockups impressos e digitais',                                            aulas: 16, ch: '48h',  falta25: '12h', qtdeDias: '3 dias' },
  { uc: 17, nome: 'Projeto Integrador: Assistente de Design de Embalagens',                        aulas: 7,  ch: '20h',  falta25: '5h',  qtdeDias: '1 dia'  },
  { uc: 18, nome: 'Planejar projetos gráficos digitais',                                           aulas: 12, ch: '36h',  falta25: '9h',  qtdeDias: '2 dias' },
  { uc: 19, nome: 'Desenvolver interface e guia de estilos gráficos para mídias digitais',         aulas: 20, ch: '60h',  falta25: '15h', qtdeDias: '4 dias' },
  { uc: 20, nome: 'Desenvolver projeto de design em movimento',                                    aulas: 16, ch: '48h',  falta25: '12h', qtdeDias: '3 dias' },
  { uc: 21, nome: 'Criar portfólio digital',                                                       aulas: 12, ch: '36h',  falta25: '9h',  qtdeDias: '2 dias' },
  { uc: 22, nome: 'Projeto Integrador: Assistente de Design Gráfico para Interfaces Digitais',     aulas: 7,  ch: '20h',  falta25: '5h',  qtdeDias: '1 dia'  },
]

// ─────────────────────────────────────────────
// AVALIAÇÃO (padrão Senac — PC nº 306)
// ─────────────────────────────────────────────
const abaAvaliacao = [
  { tipo: 'h1',      conteudo: 'Avaliação' },
  { tipo: 'texto',   conteudo: 'A avaliação tem caráter diagnóstico e formativo, permeando todo o processo educativo, com foco no desenvolvimento das competências previstas no perfil profissional de conclusão.' },
  { tipo: 'h2',      conteudo: 'Menção por Indicador' },
  { tipo: 'negrito', conteudo: 'Durante o processo:' },
  { tipo: 'item',    conteudo: 'Atendido — A' },
  { tipo: 'item',    conteudo: 'Parcialmente Atendido — PA' },
  { tipo: 'item',    conteudo: 'Não Atendido — NA' },
  { tipo: 'negrito', conteudo: 'Ao final da Unidade Curricular no Indicador:' },
  { tipo: 'item',    conteudo: 'Atendido — A' },
  { tipo: 'item',    conteudo: 'Não Atendido — NA' },
  { tipo: 'h2',      conteudo: 'Menção por Unidade Curricular' },
  { tipo: 'item',    conteudo: 'Desenvolvida — D' },
  { tipo: 'item',    conteudo: 'Não Desenvolvida — ND' },
  { tipo: 'h2',      conteudo: 'Menção para Aprovação no Curso' },
  { tipo: 'item',    conteudo: 'Aprovado — AP' },
  { tipo: 'item',    conteudo: 'Reprovado — RP' },
  { tipo: 'h2',      conteudo: 'Frequência Mínima' },
  { tipo: 'texto',   conteudo: 'O aluno deve ter frequência mínima de 75% em cada Unidade Curricular. Os Projetos Integradores (UCs 5, 9, 13, 17 e 22) têm como critério apenas a Menção D (desenvolvida), sem exigência de frequência mínima.' },
  { tipo: 'h2',      conteudo: 'Recuperação' },
  { tipo: 'texto',   conteudo: 'A recuperação é imediata à constatação das dificuldades, por meio de situações-problema, estudos dirigidos e outras estratégias que contribuam para o desenvolvimento da competência.' },
]

// ─────────────────────────────────────────────
// INFORMAÇÕES GERAIS
// ─────────────────────────────────────────────
const abaInformacoes = [
  { tipo: 'h1',      conteudo: 'Informações Gerais' },
  { tipo: 'h2',      conteudo: 'Sobre o Curso' },
  { tipo: 'texto',   conteudo: 'Habilitação Profissional Técnica de Nível Médio em Design Gráfico — PC nº 306. Carga horária total: 1.000 horas. Eixo Tecnológico: Produção Cultural e Design.' },
  { tipo: 'h2',      conteudo: 'Requisitos de Acesso' },
  { tipo: 'item',    conteudo: 'Para a Habilitação Profissional Técnica: estar cursando, no mínimo, o 2º ano do Ensino Médio.' },
  { tipo: 'item',    conteudo: 'Para as Qualificações Profissionais (de forma independente): Ensino Fundamental completo.' },
  { tipo: 'h2',      conteudo: 'Qualificações Intermediárias (cada uma com 200h)' },
  { tipo: 'item',    conteudo: 'Assistente de Arte — UCs 1, 2, 3, 4 e 5.' },
  { tipo: 'item',    conteudo: 'Programador Visual de Design Editorial — UCs 6, 7, 8 e 9.' },
  { tipo: 'item',    conteudo: 'Assistente de Design de Marcas e Identidade Visual — UCs 10, 11, 12 e 13.' },
  { tipo: 'item',    conteudo: 'Assistente de Design de Embalagens — UCs 14, 15, 16 e 17.' },
  { tipo: 'item',    conteudo: 'Assistente de Design Gráfico para Interfaces Digitais — UCs 18, 19, 20, 21 e 22.' },
  { tipo: 'h2',      conteudo: 'Área de Atuação' },
  { tipo: 'texto',   conteudo: 'O Técnico em Design Gráfico pode atuar em estúdios de design gráfico, birôs de criação, agências de publicidade e propaganda, editoras, gráficas, departamentos de comunicação e marketing, de forma autônoma ou com vínculo empregatício.' },
  { tipo: 'h2',      conteudo: 'Estágio' },
  { tipo: 'item',    conteudo: 'Não obrigatório.' },
  { tipo: 'item',    conteudo: 'Pode ser realizado como atividade opcional; a carga horária é apostilada ao histórico escolar.' },
  { tipo: 'h2',      conteudo: 'Uniforme' },
  { tipo: 'item',    conteudo: 'Não temos uniforme padrão.' },
  { tipo: 'item',    conteudo: 'A turma pode elaborar uma camiseta, sujeita à aprovação da instituição quanto ao uso da logomarca do SENAC.' },
  { tipo: 'h2',      conteudo: 'Biblioteca Virtual do Senac' },
  { tipo: 'item',    conteudo: 'Disponível 24 horas com coleções de e-books, jornais, periódicos e normas técnicas.' },
  { tipo: 'h2',      conteudo: 'Representante de Sala' },
  { tipo: 'item',    conteudo: 'Eleito pelos próprios alunos no início do curso.' },
  { tipo: 'item',    conteudo: 'Canal de comunicação entre alunos e instituição.' },
  { tipo: 'h2',      conteudo: 'Mercado de Trabalho' },
  { tipo: 'item',    conteudo: 'Design gráfico inserido na economia criativa, setor em crescimento global.' },
  { tipo: 'item',    conteudo: 'Alta demanda em múltiplos segmentos: impresso, digital, embalagens, identidade visual e interfaces.' },
  { tipo: 'item',    conteudo: 'Possibilidade de atuação como freelancer, em agências, gráficas, editoras e startups de tecnologia.' },
]

// ─────────────────────────────────────────────
// BIBLIOGRAFIA (extraída do PC nº 306)
// ─────────────────────────────────────────────
const abaBibliografia = [
  // UC1
  { titulo: 'Layout [série design básico]',                                                         autores: 'AMBROSE, G.; HARRIS, P.',              editora: 'Bookman, 2012. E-book',       tipo: 'Básica',      ucs: '1,7' },
  { titulo: 'Psicodinâmica das cores em comunicação',                                               autores: 'BASTOS, D.; FARINA, M.; PEREZ.',       editora: 'Blucher, 2011',               tipo: 'Complementar', ucs: '1'   },
  { titulo: 'Desenho gráfico: um dicionário visual de termos para um design global',                autores: 'WOLF, P. J.',                          editora: 'Blucher, 2010',               tipo: 'Complementar', ucs: '1'   },
  // UC2
  { titulo: 'Adobe Photoshop',                                                                      autores: 'ANDRADE, M. S. de.',                   editora: 'Senac, 2020',                 tipo: 'Básica',      ucs: '2'   },
  { titulo: 'Fotografia contemporânea: entre o cinema, o vídeo e as novas mídias',                 autores: 'FATORELLI, A.',                        editora: 'Senac, 2020. E-book',         tipo: 'Complementar', ucs: '2'   },
  { titulo: 'Diagramação e layout',                                                                 autores: 'PERUYERA, M.',                         editora: 'InterSaberes, 2018. E-book',  tipo: 'Complementar', ucs: '2,3,7' },
  // UC3
  { titulo: 'Adobe Illustrator',                                                                    autores: 'ANDRADE, M. S. de.',                   editora: 'Senac, 2019',                 tipo: 'Básica',      ucs: '3'   },
  { titulo: 'Fundamentos de ilustração',                                                            autores: 'ZEEGEN, L.',                           editora: 'Bookman, 2009',               tipo: 'Complementar', ucs: '3,8' },
  // UC4
  { titulo: 'Produção gráfica para designers',                                                      autores: 'GATTER, M.',                           editora: 'Ateliê Editorial, 2016',      tipo: 'Básica',      ucs: '4,15,16' },
  { titulo: 'Produção gráfica',                                                                     autores: 'GLÜER, L. M.',                         editora: 'Sagah, 2019. E-book',         tipo: 'Complementar', ucs: '4'   },
  { titulo: 'Conceitos fundamentais de planejamento e produção gráfica',                            autores: 'RIBEIRO, A.',                          editora: 'InterSaberes, 2020. E-book',  tipo: 'Complementar', ucs: '4'   },
  // UC6
  { titulo: 'Elementos do estilo tipográfico. Versão 4.0',                                          autores: 'BRINGHURST, R.',                       editora: 'Ubu, 2021',                   tipo: 'Básica',      ucs: '6'   },
  { titulo: 'Adobe InDesign',                                                                       autores: 'ANDRADE, M. S. de.',                   editora: 'Senac, 2019. E-book',         tipo: 'Complementar', ucs: '6'   },
  { titulo: 'Livro digital etc.',                                                                   autores: 'FLATSCHART, F.',                       editora: 'Brasport, 2014. E-book',      tipo: 'Complementar', ucs: '6'   },
  // UC7
  { titulo: 'Pensar com tipos',                                                                     autores: 'LUPTON, E.',                           editora: 'Olhares, 2021',               tipo: 'Básica',      ucs: '7'   },
  // UC8
  { titulo: 'Infografia',                                                                           autores: 'FERREIRA, L. T.',                      editora: 'InterSaberes, 2021. E-book',  tipo: 'Básica',      ucs: '8'   },
  { titulo: 'Infografia: história e projeto',                                                       autores: 'MORAES, A.',                           editora: 'Bluscher, 2013',              tipo: 'Complementar', ucs: '8'   },
  // UC10
  { titulo: 'Branding e comunicação: a comunicação e sua importância para a construção de marcas', autores: 'DANTAS, E. B.',                        editora: 'Senac, 2019',                 tipo: 'Básica',      ucs: '10'  },
  { titulo: 'Branding + design: a estratégia na criação de identidades de marca',                  autores: 'CAMEIRA, S. R.',                       editora: 'Senac, 2016. E-book',         tipo: 'Complementar', ucs: '10'  },
  { titulo: 'Design de identidade da marca: guia essencial para toda a equipe de gestão de marcas', autores: 'WHEELER, A.',                         editora: 'Bookman, 2019. E-book',       tipo: 'Complementar', ucs: '10,11' },
  // UC11
  { titulo: 'Manual de identidade visual: guia para construção de manuais',                        autores: 'MUNHOZ, D. M.',                        editora: '2AB, 2013',                   tipo: 'Básica',      ucs: '11'  },
  { titulo: 'Marcas & sinalização: práticas em design corporativo',                                 autores: 'CHAMMA, N.; PASTORELO, P. D.',         editora: 'Senac, 2019. E-book',         tipo: 'Complementar', ucs: '11'  },
  // UC12
  { titulo: 'Design e comunicação visual',                                                          autores: 'MUNARI, B.',                           editora: 'Martins Fontes, 2020',        tipo: 'Básica',      ucs: '12'  },
  { titulo: 'Fundamentos de design criativo',                                                       autores: 'AMBROSE, G.; HARRIS, P.',              editora: 'Bookman, 2012. E-book',       tipo: 'Complementar', ucs: '12,19,20,21' },
  { titulo: 'Pesquisa visual: introdução às metodologias de pesquisa em design gráfico',           autores: 'NOBLE, I.',                            editora: 'Bookman, 2013. E-book',       tipo: 'Complementar', ucs: '12'  },
  // UC14
  { titulo: 'Design de embalagem: 100 fundamentos de projeto e aplicação',                         autores: 'RONCARELLI, S.; ELLICOTT, C.',         editora: 'Blucher, 2010',               tipo: 'Básica',      ucs: '14,16' },
  { titulo: 'Gestão estratégica de embalagem',                                                     autores: 'MEISTRINER, F.',                       editora: 'Pearson, 2007. E-book',       tipo: 'Complementar', ucs: '14,15,16' },
  { titulo: 'Design de embalagens e PDV',                                                           autores: 'SILVA, A.',                            editora: 'InterSaberes, 2021. E-book',  tipo: 'Básica',      ucs: '15'  },
  // UC18, UC19, UC20
  { titulo: 'Design digital: conceitos e aplicações para websites, animações, vídeo e webgames',   autores: 'GUERRA, F.; TERCE, M. L.',             editora: 'Senac, 2019. E-book',         tipo: 'Básica',      ucs: '18,19,20' },
  { titulo: 'Usabilidade e interface homem-máquina',                                               autores: 'BELMIRO, J.',                          editora: 'Pearson, 2017. E-book',       tipo: 'Complementar', ucs: '18'  },
  { titulo: 'Briefing a gestão do projeto de design',                                              autores: 'PHILLIPS, P. L.',                      editora: 'Blucher, 2015. E-book',       tipo: 'Complementar', ucs: '18'  },
  { titulo: 'Design de navegação web: otimizando a experiência do usuário',                        autores: 'KALBACH, J.',                          editora: 'Bookman, 2009',               tipo: 'Complementar', ucs: '19'  },
  { titulo: 'Produção audiovisual',                                                                 autores: 'JESUS, A. M. V.; CÉ, O. A.',           editora: 'Sagah, 2019. E-book',         tipo: 'Complementar', ucs: '20'  },
  // UC21
  { titulo: 'Portfólio digital de design: um guia prático para apresentar seus trabalhos online',  autores: 'CLAZIE, I.',                           editora: 'Blucher, 2011. E-book',       tipo: 'Básica',      ucs: '21'  },
]

// ─────────────────────────────────────────────
// DOWNLOADS (softwares da seção 10.1 do PC nº 306)
// ─────────────────────────────────────────────
const abaDownloads = [
  { nome: 'Adobe Creative Cloud (trial)',  desc: 'Suite com Photoshop, Illustrator, InDesign, After Effects, Acrobat e mais — plano individual ou estudantil.', link: 'https://www.adobe.com/br/creativecloud/plans.html' },
  { nome: 'CorelDRAW (trial)',             desc: 'Software de design vetorial e gráfico com ferramentas avançadas para impressão e web.',                        link: 'https://www.coreldraw.com/br/product/coreldraw/' },
  { nome: 'Figma',                         desc: 'Ferramenta gratuita online para design de interfaces, wireframes, prototipagem e colaboração em tempo real.',  link: 'https://www.figma.com/' },
  { nome: 'GIMP',                          desc: 'Editor de imagens bitmap gratuito e open source — alternativa ao Adobe Photoshop.',                            link: 'https://www.gimp.org/downloads/' },
  { nome: 'Inkscape',                      desc: 'Editor de gráficos vetoriais gratuito e open source — alternativa ao Adobe Illustrator.',                      link: 'https://inkscape.org/pt-br/releases/' },
  { nome: 'Blender',                       desc: 'Software gratuito de modelagem, animação e renderização 3D para criação de mockups digitais.',                 link: 'https://www.blender.org/download/' },
  { nome: 'Canva',                         desc: 'Ferramenta online de design gráfico com templates prontos para redes sociais, apresentações e materiais.',     link: 'https://www.canva.com/' },
  { nome: 'Behance',                       desc: 'Plataforma profissional da Adobe para publicação e divulgação de portfólio de design.',                        link: 'https://www.behance.net/' },
  { nome: 'Google Fonts',                  desc: 'Biblioteca gratuita de fontes tipográficas para uso em projetos gráficos e web.',                              link: 'https://fonts.google.com/' },
  { nome: 'Coolors',                       desc: 'Gerador de paletas de cores harmônicas para uso em projetos de design gráfico.',                               link: 'https://coolors.co/' },
  { nome: 'Scribus',                       desc: 'Software gratuito de editoração eletrônica — alternativa ao Adobe InDesign.',                                  link: 'https://www.scribus.net/downloads/' },
  { nome: 'DaVinci Resolve',               desc: 'Software gratuito de edição de vídeo e composição visual — alternativa ao Adobe Premiere/After Effects.',     link: 'https://www.blackmagicdesign.com/br/products/davinciresolve' },
  { nome: 'LibreOffice',                   desc: 'Suite de escritório gratuita para edição de documentos, planilhas e apresentações.',                          link: 'https://www.libreoffice.org/download/download-libreoffice/' },
  { nome: 'Wix / WordPress',               desc: 'Plataformas para criação de sites e publicação de portfólio digital profissional.',                            link: 'https://www.wix.com/' },
]

// ─────────────────────────────────────────────
// Montar workbook e salvar
// ─────────────────────────────────────────────
const wb = XLSX.utils.book_new()

function addSheet(wb, nome, dados) {
  const ws = XLSX.utils.json_to_sheet(dados)
  XLSX.utils.book_append_sheet(wb, ws, nome)
}

addSheet(wb, 'Curso',          abaCurso)
addSheet(wb, 'Badges',         abaBadges)
addSheet(wb, 'UCs',            abaUCs)
addSheet(wb, 'UC_Atividades',  abaAtividades)
addSheet(wb, 'UC_Linguagens',  abaLinguagens)
addSheet(wb, 'UC_Ferramentas', abaFerramentas)
addSheet(wb, 'Faltas',         abaFaltas)
addSheet(wb, 'Avaliacao',      abaAvaliacao)
addSheet(wb, 'Informacoes',    abaInformacoes)
addSheet(wb, 'Bibliografia',   abaBibliografia)
addSheet(wb, 'Downloads',      abaDownloads)

XLSX.writeFile(wb, saida)
console.log(`\n✅ template-curso.xlsx gerado com dados do Técnico em Design Gráfico (PC nº 306)`)
console.log(`   Arquivo: ${saida}`)
console.log(`\n   22 UCs | ${abaFaltas.length} faltas | ${abaBibliografia.length} livros | ${abaDownloads.length} downloads`)
console.log(`\n⚠️  Verifique os campos de faltas (aulas e qtdeDias) — são estimativas calculadas.`)
console.log(`   Para importar: npm run importar -- template-curso.xlsx\n`)
