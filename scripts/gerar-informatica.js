/**
 * gerar-informatica.js
 *
 * Gera template-curso.xlsx preenchido com os dados do
 * Técnico em Informática (PC nº 297), extraídos do PDF do plano de curso.
 *
 * Uso:
 *   node scripts/gerar-informatica.js
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
    slug: 'informatica',
    nome: 'Técnico em Informática',
    descricao: 'Aprenda a montar e manter computadores, configurar redes locais com servidores e desenvolver aplicativos para desktop e web.',
    icone: 'Monitor',
    cor: '#0ea5e9',
  },
]

// ─────────────────────────────────────────────
// BADGES
// ─────────────────────────────────────────────
const abaBadges = [
  { label: 'Suporte e Manutenção', variant: 'primary' },
  { label: 'Redes de Computadores', variant: 'success' },
  { label: 'Desenvolvimento de Aplicativos', variant: 'warning' },
  { label: 'Projeto Integrador', variant: 'dark' },
]

// ─────────────────────────────────────────────
// UCs
// ─────────────────────────────────────────────
const abaUCs = [
  { id: 'uc1',  titulo: 'UC1 - Planejar e executar a montagem de computadores' },
  { id: 'uc2',  titulo: 'UC2 - Planejar e executar a instalação de hardware e software para computadores' },
  { id: 'uc3',  titulo: 'UC3 - Planejar e executar a manutenção de computadores' },
  { id: 'uc4',  titulo: 'UC4 - Projeto Integrador: Assistente de Suporte e Manutenção de Computadores' },
  { id: 'uc5',  titulo: 'UC5 - Planejar e executar a instalação de redes locais de computadores' },
  { id: 'uc6',  titulo: 'UC6 - Planejar e executar a manutenção de redes locais de computadores' },
  { id: 'uc7',  titulo: 'UC7 - Planejar e executar a instalação, a configuração e o monitoramento de sistemas operacionais de redes locais (servidores)' },
  { id: 'uc8',  titulo: 'UC8 - Projeto Integrador: Assistente de Operação de Redes de Computadores' },
  { id: 'uc9',  titulo: 'UC9 - Desenvolver Algoritmos' },
  { id: 'uc10', titulo: 'UC10 - Desenvolver banco de dados' },
  { id: 'uc11', titulo: 'UC11 - Executar teste e implantação de aplicativos computacionais' },
  { id: 'uc12', titulo: 'UC12 - Executar os processos de codificação, manutenção e documentação de aplicativos computacionais para desktop' },
  { id: 'uc13', titulo: 'UC13 - Executar os processos de codificação, manutenção e documentação de aplicativos computacionais para internet' },
  { id: 'uc14', titulo: 'UC14 - Manipular e otimizar imagens vetoriais, bitmaps gráficos e elementos visuais de navegação para web' },
  { id: 'uc15', titulo: 'UC15 - Desenvolver e organizar elementos estruturais de sites' },
  { id: 'uc16', titulo: 'UC16 - Projeto Integrador: Assistente de Desenvolvimento de Aplicativos Computacionais' },
]

// ─────────────────────────────────────────────
// UC_ATIVIDADES
// ─────────────────────────────────────────────
const abaAtividades = [
  // UC1
  { uc_id: 'uc1', atividade: 'Montagem de computadores com componentes reais' },
  { uc_id: 'uc1', atividade: 'Testes de hardware e periféricos' },
  { uc_id: 'uc1', atividade: 'Configuração de BIOS/Setup' },
  { uc_id: 'uc1', atividade: 'Medições com multímetro' },
  // UC2
  { uc_id: 'uc2', atividade: 'Instalação e configuração de sistemas operacionais' },
  { uc_id: 'uc2', atividade: 'Instalação de drivers, firmware e aplicativos' },
  { uc_id: 'uc2', atividade: 'Configuração de redes SOHO e dispositivos móveis' },
  { uc_id: 'uc2', atividade: 'Testes de conectividade' },
  // UC3
  { uc_id: 'uc3', atividade: 'Diagnóstico de falhas em hardware e software' },
  { uc_id: 'uc3', atividade: 'Backup e restore de dados' },
  { uc_id: 'uc3', atividade: 'Atualização de sistema operacional e aplicativos' },
  { uc_id: 'uc3', atividade: 'Elaboração de relatório de manutenção' },
  // UC4
  { uc_id: 'uc4', atividade: 'Projeto integrador: montagem, instalação e manutenção de computadores' },
  // UC5
  { uc_id: 'uc5', atividade: 'Planejamento e projeto de rede local' },
  { uc_id: 'uc5', atividade: 'Crimpagem e cabeamento estruturado' },
  { uc_id: 'uc5', atividade: 'Configuração de equipamentos de rede (switch, roteador)' },
  { uc_id: 'uc5', atividade: 'Testes e diagnóstico de conectividade' },
  // UC6
  { uc_id: 'uc6', atividade: 'Diagnóstico de falhas em redes locais' },
  { uc_id: 'uc6', atividade: 'Substituição de componentes de rede' },
  { uc_id: 'uc6', atividade: 'Reparo de cabeamento' },
  { uc_id: 'uc6', atividade: 'Monitoramento de tráfego e segurança' },
  // UC7
  { uc_id: 'uc7', atividade: 'Instalação e configuração de servidor' },
  { uc_id: 'uc7', atividade: 'Configuração de máquinas virtuais' },
  { uc_id: 'uc7', atividade: 'Monitoramento de rede com software de segurança' },
  { uc_id: 'uc7', atividade: 'Elaboração de relatórios de atividades' },
  // UC8
  { uc_id: 'uc8', atividade: 'Projeto integrador: instalação e configuração de rede local cliente/servidor' },
  // UC9
  { uc_id: 'uc9', atividade: 'Desenvolvimento de algoritmos e lógica de programação' },
  { uc_id: 'uc9', atividade: 'Testes e validação de algoritmos' },
  { uc_id: 'uc9', atividade: 'Representação em fluxogramas e pseudocódigo' },
  // UC10
  { uc_id: 'uc10', atividade: 'Modelagem de banco de dados (entidade-relacionamento)' },
  { uc_id: 'uc10', atividade: 'Criação e manipulação com scripts SQL' },
  { uc_id: 'uc10', atividade: 'Importação e exportação de dados' },
  { uc_id: 'uc10', atividade: 'Rotinas de backup e restore de banco de dados' },
  // UC11
  { uc_id: 'uc11', atividade: 'Elaboração de plano de testes' },
  { uc_id: 'uc11', atividade: 'Execução de testes funcionais e de desempenho' },
  { uc_id: 'uc11', atividade: 'Documentação de resultados de testes' },
  { uc_id: 'uc11', atividade: 'Implantação de aplicativo em ambiente de teste' },
  // UC12
  { uc_id: 'uc12', atividade: 'Desenvolvimento de aplicativo desktop com integração a banco de dados' },
  { uc_id: 'uc12', atividade: 'Compilação, depuração e versionamento de código' },
  { uc_id: 'uc12', atividade: 'Elaboração de manual de utilização' },
  // UC13
  { uc_id: 'uc13', atividade: 'Desenvolvimento de aplicativo web com integração a banco de dados' },
  { uc_id: 'uc13', atividade: 'Compilação, depuração e versionamento de código web' },
  { uc_id: 'uc13', atividade: 'Elaboração de manual do projeto web' },
  // UC14
  { uc_id: 'uc14', atividade: 'Criação de wireframes e mapas de site' },
  { uc_id: 'uc14', atividade: 'Edição e otimização de imagens para web' },
  { uc_id: 'uc14', atividade: 'Desenvolvimento de leiaute responsivo' },
  // UC15
  { uc_id: 'uc15', atividade: 'Desenvolvimento de páginas web com HTML5 e CSS3' },
  { uc_id: 'uc15', atividade: 'Customização de site com CMS (WordPress)' },
  { uc_id: 'uc15', atividade: 'Publicação em servidores locais e remotos' },
  { uc_id: 'uc15', atividade: 'Elaboração de manual de uso do projeto web' },
  // UC16
  { uc_id: 'uc16', atividade: 'Projeto integrador: desenvolvimento de software comercial desktop e web' },
]

// ─────────────────────────────────────────────
// UC_LINGUAGENS
// ─────────────────────────────────────────────
const abaLinguagens = [
  { uc_id: 'uc9',  nome: 'Algoritmos / Portugol', desc: 'Linguagem algorítmica em português estruturado para aprendizagem de lógica de programação.' },
  { uc_id: 'uc10', nome: 'SQL', desc: 'Linguagem padrão para criação, manipulação e consulta de bancos de dados relacionais.' },
  { uc_id: 'uc12', nome: 'C# / Java', desc: 'Linguagens orientadas a objetos utilizadas no desenvolvimento de aplicativos desktop.' },
  { uc_id: 'uc13', nome: 'HTML5', desc: 'Linguagem de marcação para estruturação de páginas web.' },
  { uc_id: 'uc13', nome: 'CSS3', desc: 'Linguagem de estilo para apresentação visual de páginas web.' },
  { uc_id: 'uc13', nome: 'JavaScript / PHP', desc: 'Linguagens de programação para desenvolvimento de aplicações web dinâmicas.' },
  { uc_id: 'uc14', nome: 'HTML5 / CSS3', desc: 'Utilizados na criação e otimização de leiautes e imagens para web.' },
  { uc_id: 'uc15', nome: 'HTML5', desc: 'Linguagem de marcação e semântica do HTML5, padrões W3C.' },
  { uc_id: 'uc15', nome: 'CSS3 / JavaScript', desc: 'Folhas de estilo, responsividade e scripts para interatividade em sites.' },
]

// ─────────────────────────────────────────────
// UC_FERRAMENTAS
// ─────────────────────────────────────────────
const abaFerramentas = [
  // UC1 - Hardware
  { uc_id: 'uc1', nome: 'Multímetro', desc: 'Medição de tensão, corrente e teste de componentes eletrônicos.' },
  { uc_id: 'uc1', nome: 'Kit de ferramentas (chaves, alicates)', desc: 'Montagem e manutenção física de computadores.' },
  { uc_id: 'uc1', nome: 'Pulseira antiestática ESD', desc: 'Proteção contra descargas eletrostáticas durante a manipulação de componentes.' },
  // UC2 - Software
  { uc_id: 'uc2', nome: 'Windows / Linux', desc: 'Sistemas operacionais instalados e configurados conforme recomendação técnica.' },
  { uc_id: 'uc2', nome: 'Antivírus / Utilitários de segurança', desc: 'Proteção e manutenção do sistema operacional.' },
  { uc_id: 'uc2', nome: 'Pacote Office', desc: 'Conjunto de aplicativos de escritório para produtividade.' },
  // UC3
  { uc_id: 'uc3', nome: 'Ferramentas de diagnóstico de hardware', desc: 'Software de detecção de erros e testes de componentes.' },
  { uc_id: 'uc3', nome: 'Ferramentas de backup e restore', desc: 'Recuperação de dados e imagem de sistemas.' },
  // UC5
  { uc_id: 'uc5', nome: 'Switch / Roteador', desc: 'Equipamentos de rede configurados para redes locais.' },
  { uc_id: 'uc5', nome: 'Alicate de crimpagem / Testador de cabos', desc: 'Crimpagem e teste de cabeamento UTP.' },
  { uc_id: 'uc5', nome: 'Cisco Packet Tracer / GNS3', desc: 'Simuladores de redes para projeto e teste de topologias.' },
  // UC6
  { uc_id: 'uc6', nome: 'Wireshark', desc: 'Analisador de protocolos para monitoramento de tráfego de rede.' },
  { uc_id: 'uc6', nome: 'Firewall / Antivírus de rede', desc: 'Ferramentas de segurança para redes locais.' },
  // UC7
  { uc_id: 'uc7', nome: 'Windows Server / Linux Server', desc: 'Sistemas operacionais de servidor instalados e configurados.' },
  { uc_id: 'uc7', nome: 'VirtualBox / VMware', desc: 'Ferramentas de virtualização para configuração de máquinas virtuais.' },
  // UC9
  { uc_id: 'uc9', nome: 'VisualG / Flowgorithm', desc: 'Ferramentas para desenvolvimento e teste de algoritmos em português.' },
  { uc_id: 'uc9', nome: 'VS Code', desc: 'Editor de código moderno e extensível.' },
  // UC10
  { uc_id: 'uc10', nome: 'MySQL Workbench / pgAdmin', desc: 'Ferramentas gráficas para modelagem e administração de banco de dados.' },
  { uc_id: 'uc10', nome: 'MySQL / PostgreSQL', desc: 'Sistemas gerenciadores de banco de dados relacionais.' },
  // UC11
  { uc_id: 'uc11', nome: 'TestLink / Mantis', desc: 'Ferramentas de gestão de testes e controle de defeitos.' },
  { uc_id: 'uc11', nome: 'Selenium / JUnit', desc: 'Ferramentas de automação e execução de testes de software.' },
  // UC12
  { uc_id: 'uc12', nome: 'Visual Studio / VS Code', desc: 'IDEs para desenvolvimento de aplicativos desktop.' },
  { uc_id: 'uc12', nome: 'Git / GitHub', desc: 'Controle de versão e hospedagem de código-fonte.' },
  // UC13
  { uc_id: 'uc13', nome: 'VS Code', desc: 'Editor de código com suporte a HTML, CSS e JavaScript.' },
  { uc_id: 'uc13', nome: 'XAMPP / Wamp', desc: 'Emulador de servidor local para desenvolvimento web com PHP e MySQL.' },
  { uc_id: 'uc13', nome: 'Git / GitHub', desc: 'Controle de versão de software web.' },
  // UC14
  { uc_id: 'uc14', nome: 'Adobe Photoshop / GIMP', desc: 'Edição e retoque de imagens bitmap para web.' },
  { uc_id: 'uc14', nome: 'Figma / Adobe XD', desc: 'Design de interfaces e criação de wireframes e protótipos interativos.' },
  { uc_id: 'uc14', nome: 'CorelDRAW / Inkscape', desc: 'Criação e edição de imagens vetoriais.' },
  // UC15
  { uc_id: 'uc15', nome: 'VS Code', desc: 'Editor para desenvolvimento de HTML, CSS e JavaScript.' },
  { uc_id: 'uc15', nome: 'WordPress (CMS)', desc: 'Plataforma de gerenciamento de conteúdo para publicação de sites.' },
  { uc_id: 'uc15', nome: 'Bootstrap / Tailwind', desc: 'Frameworks CSS para construção de sites responsivos.' },
]

// ─────────────────────────────────────────────
// FALTAS
// falta25 = CH * 0.25 | qtdeDias ≈ falta25 / 3.75h por dia
// aulas estimadas (CH / 3h por aula)
// ─────────────────────────────────────────────
const abaFaltas = [
  { uc: 1,  nome: 'Planejar e executar a montagem de computadores',                                                                             aulas: 28, ch: '84h',  falta25: '21h', qtdeDias: '6 dias' },
  { uc: 2,  nome: 'Planejar e executar a instalação de hardware e software para computadores',                                                   aulas: 32, ch: '96h',  falta25: '24h', qtdeDias: '6 dias' },
  { uc: 3,  nome: 'Planejar e executar a manutenção de computadores',                                                                            aulas: 24, ch: '72h',  falta25: '18h', qtdeDias: '5 dias' },
  { uc: 4,  nome: 'Projeto Integrador: Assistente de Suporte e Manutenção de Computadores',                                                      aulas: 7,  ch: '20h',  falta25: '5h',  qtdeDias: '1 dia'  },
  { uc: 5,  nome: 'Planejar e executar a instalação de redes locais de computadores',                                                            aulas: 32, ch: '96h',  falta25: '24h', qtdeDias: '6 dias' },
  { uc: 6,  nome: 'Planejar e executar a manutenção de redes locais de computadores',                                                            aulas: 32, ch: '96h',  falta25: '24h', qtdeDias: '6 dias' },
  { uc: 7,  nome: 'Planejar e executar a instalação, configuração e monitoramento de sistemas operacionais de redes locais (servidores)',         aulas: 32, ch: '96h',  falta25: '24h', qtdeDias: '6 dias' },
  { uc: 8,  nome: 'Projeto Integrador: Assistente de Operação de Redes de Computadores',                                                         aulas: 7,  ch: '20h',  falta25: '5h',  qtdeDias: '1 dia'  },
  { uc: 9,  nome: 'Desenvolver Algoritmos',                                                                                                      aulas: 36, ch: '108h', falta25: '27h', qtdeDias: '7 dias' },
  { uc: 10, nome: 'Desenvolver banco de dados',                                                                                                  aulas: 24, ch: '72h',  falta25: '18h', qtdeDias: '5 dias' },
  { uc: 11, nome: 'Executar teste e implantação de aplicativos computacionais',                                                                  aulas: 20, ch: '60h',  falta25: '15h', qtdeDias: '4 dias' },
  { uc: 12, nome: 'Executar os processos de codificação, manutenção e documentação de aplicativos computacionais para desktop',                  aulas: 32, ch: '96h',  falta25: '24h', qtdeDias: '6 dias' },
  { uc: 13, nome: 'Executar os processos de codificação, manutenção e documentação de aplicativos computacionais para internet',                 aulas: 32, ch: '96h',  falta25: '24h', qtdeDias: '6 dias' },
  { uc: 14, nome: 'Manipular e otimizar imagens vetoriais, bitmaps gráficos e elementos visuais de navegação para web',                         aulas: 16, ch: '48h',  falta25: '12h', qtdeDias: '3 dias' },
  { uc: 15, nome: 'Desenvolver e organizar elementos estruturais de sites',                                                                      aulas: 36, ch: '108h', falta25: '27h', qtdeDias: '7 dias' },
  { uc: 16, nome: 'Projeto Integrador: Assistente de Desenvolvimento de Aplicativos Computacionais',                                             aulas: 11, ch: '32h',  falta25: '8h',  qtdeDias: '2 dias' },
]

// ─────────────────────────────────────────────
// AVALIAÇÃO (padrão Senac)
// ─────────────────────────────────────────────
const abaAvaliacao = [
  { tipo: 'h1',     conteudo: 'Avaliação' },
  { tipo: 'h2',     conteudo: 'Menção por indicador' },
  { tipo: 'negrito',conteudo: 'Durante o processo:' },
  { tipo: 'item',   conteudo: 'Atendido — A' },
  { tipo: 'item',   conteudo: 'Parcialmente Atendido — PA' },
  { tipo: 'item',   conteudo: 'Não Atendido — NA' },
  { tipo: 'negrito',conteudo: 'Ao final da Unidade Curricular no Indicador:' },
  { tipo: 'item',   conteudo: 'Atendido — A' },
  { tipo: 'item',   conteudo: 'Não Atendido — NA' },
  { tipo: 'h2',     conteudo: 'Menção por Unidade Curricular' },
  { tipo: 'item',   conteudo: 'Desenvolvida — D' },
  { tipo: 'item',   conteudo: 'Não Desenvolvida — ND' },
  { tipo: 'h2',     conteudo: 'Menção para Aprovação no Curso' },
  { tipo: 'item',   conteudo: 'Aprovado — AP' },
  { tipo: 'item',   conteudo: 'Reprovado — RP' },
]

// ─────────────────────────────────────────────
// INFORMAÇÕES GERAIS
// ─────────────────────────────────────────────
const abaInformacoes = [
  { tipo: 'h1',  conteudo: 'Informações Gerais' },
  { tipo: 'h2',  conteudo: 'Uniforme' },
  { tipo: 'item',conteudo: 'Não temos uniforme padrão.' },
  { tipo: 'item',conteudo: 'A turma pode elaborar uma camiseta, sujeita à aprovação da instituição quanto ao uso da logomarca do SENAC.' },
  { tipo: 'h2',  conteudo: 'Biblioteca Virtual do Senac' },
  { tipo: 'item',conteudo: 'Disponível 24 horas com coleções de e-books, jornais, periódicos e normas técnicas.' },
  { tipo: 'h2',  conteudo: 'Estágio' },
  { tipo: 'item',conteudo: 'Não obrigatório.' },
  { tipo: 'item',conteudo: 'Pode ser realizado como atividade opcional; a carga horária é apostilada ao histórico escolar.' },
  { tipo: 'h2',  conteudo: 'Requisitos de Acesso' },
  { tipo: 'item',conteudo: 'Para a Habilitação Profissional Técnica: estar cursando, no mínimo, o 2º ano do Ensino Médio.' },
  { tipo: 'item',conteudo: 'Para as Qualificações Profissionais (de forma independente): Ensino Fundamental completo.' },
  { tipo: 'h2',  conteudo: 'Representante de sala' },
  { tipo: 'item',conteudo: 'Eleito pelos próprios alunos no início do curso.' },
  { tipo: 'item',conteudo: 'Responsável por representar a turma em reuniões e eventos.' },
  { tipo: 'item',conteudo: 'Canal de comunicação entre alunos e instituição.' },
  { tipo: 'h2',  conteudo: 'Características do mercado de informática' },
  { tipo: 'item',conteudo: 'Setor em constante transformação e crescimento.' },
  { tipo: 'item',conteudo: 'Alta demanda por profissionais qualificados com visão sistêmica e perfil empreendedor.' },
  { tipo: 'item',conteudo: 'Atuação em organizações públicas e privadas de qualquer segmento (comércio, serviços, indústria, consultoria, ensino e pesquisa).' },
  { tipo: 'item',conteudo: 'Possibilidade de prestação de serviços autônomos, temporários ou com contrato efetivo.' },
  { tipo: 'item',conteudo: 'Domínio técnico-científico e atitude empreendedora são marcas formativas valorizadas pelo mercado.' },
]

// ─────────────────────────────────────────────
// BIBLIOGRAFIA
// ─────────────────────────────────────────────
const abaBibliografia = [
  // UC1, 2, 3
  { titulo: 'Manutenção de microcomputadores na prática',                                              autores: 'SCHORSCH, M.; LACERDA, I. M.',                    editora: 'Senac São Paulo, 2016', tipo: 'Básica',               ucs: '1,2,3' },
  { titulo: 'Montagem e manutenção de computadores, PCs',                                              autores: 'PAIXÃO, R. R.',                                    editora: 'Érica, 2014',          tipo: 'Complementar',          ucs: '1,2' },
  { titulo: 'Hardware na Prática',                                                                     autores: 'VASCONCELOS, L.',                                  editora: 'Ciência Moderna, 2017',tipo: 'Complementar',          ucs: '1,2,3' },
  { titulo: 'Rede de computadores: um guia para instalação e reparação',                               autores: 'LACERDA, I. M. F; OLIVEIRA, J. de B.',             editora: 'Senac Nacional, 2013', tipo: 'Complementar',          ucs: '3' },
  // UC5, 6
  { titulo: 'Redes de computadores: guia total',                                                       autores: 'SOUSA, L. B.',                                     editora: 'Érica, 2014',          tipo: 'Básica',                ucs: '5' },
  { titulo: 'Redes de computadores e internet',                                                        autores: 'COMER, D. E.',                                     editora: 'Bookman, 2016',        tipo: 'Mista (Básica/Comp.)',   ucs: '5,6' },
  { titulo: 'Cabeamento estruturado: desvendando cada passo: do projeto à instalação',                 autores: 'MARIN, P. S.',                                     editora: 'Érica, 2013',          tipo: 'Complementar',          ucs: '5' },
  { titulo: 'Montagem de redes locais: prático e didático',                                            autores: 'HAYAMA, M. M.',                                    editora: 'Érica, 2011',          tipo: 'Complementar',          ucs: '6' },
  { titulo: 'Segurança em redes sem fio',                                                              autores: 'RUFINO, N. M. de O.',                              editora: 'Novatec, 2015',        tipo: 'Complementar',          ucs: '6' },
  // UC7
  { titulo: 'Microsoft Windows Server 2016: fundamentos',                                              autores: 'THOMPSON, M. A.',                                  editora: 'Érika, 2017',          tipo: 'Básica',                ucs: '7' },
  { titulo: 'Solucionando Problemas de Comunicação em Redes Lan e Wan',                                autores: 'FEY, A. F.; GAUER, R. R.',                         editora: 'Clube dos Autores, 2016', tipo: 'Complementar',       ucs: '7' },
  { titulo: 'Linux para servidores: instalação à virtualização',                                       autores: 'MARTINI, L. A; MAIEVES, G. T.',                    editora: 'Viena, 2013',          tipo: 'Complementar',          ucs: '7' },
  // UC9
  { titulo: 'Aprenda lógica de programação e algoritmos',                                              autores: 'OLIVEIRA, C. O.; LÜHMANN, A. C de O.',             editora: 'Ciência Moderna, 2016',tipo: 'Básica',                ucs: '9' },
  { titulo: 'Princípios de análise e projetos de sistemas com UML',                                    autores: 'BEZERRA, E.',                                      editora: 'Elsevier, 2015',       tipo: 'Complementar',          ucs: '9' },
  { titulo: 'Sistemas Orientados a Objetos: Teoria e Prática com UML e Java',                          autores: 'RANGEL, P.; JUNIOR, J. G. de C.',                  editora: 'Brasport, 2022',       tipo: 'Complementar',          ucs: '9' },
  // UC10
  { titulo: 'Banco de dados: Teoria e Desenvolvimento',                                                autores: 'ALVES, W. P.',                                     editora: 'Érica, 2020',          tipo: 'Básica',                ucs: '10' },
  { titulo: 'Sistemas de banco de dados',                                                              autores: 'ELMASRI, R.; NAVATHE, S. B.',                      editora: 'Pearson, 2019',        tipo: 'Complementar',          ucs: '10,11' },
  { titulo: 'Sistema de banco de dados',                                                               autores: 'KORTH, H. F.; SILBERSCHATZ, A.; SUDARSHAN, S.',    editora: 'Campus, 2012',         tipo: 'Complementar',          ucs: '10' },
  // UC11
  { titulo: 'Qualidade de Software na Prática',                                                        autores: 'SAMPAIO, C.',                                      editora: 'Ciência Moderna, 2020',tipo: 'Básica',                ucs: '11' },
  { titulo: 'Documentação em Projetos de Teste de Software',                                           autores: 'RIOS, E.',                                         editora: 'Clube dos Autores, 2020', tipo: 'Complementar',       ucs: '11' },
  // UC12
  { titulo: 'Use a cabeça! Aprenda a programar',                                                       autores: 'FREEMAN, E.',                                      editora: 'Alta Books, 2019',     tipo: 'Básica',                ucs: '12' },
  { titulo: 'C#: como programar',                                                                      autores: 'DEITEL, H M.',                                     editora: 'Pearson, 2003',        tipo: 'Complementar',          ucs: '12' },
  { titulo: 'Java para iniciantes: crie, compile e execute programas Java rapidamente',                 autores: 'SCHILDT, H.',                                      editora: 'Bookman, 2015',        tipo: 'Complementar',          ucs: '12' },
  // UC13
  { titulo: 'Fundamentos de HTML5 e CSS3',                                                             autores: 'SILVA, M. S.',                                     editora: 'Novatec, 2015',        tipo: 'Básica',                ucs: '13' },
  { titulo: 'Html5 e Css3: guia prático e visual',                                                     autores: 'CASTRO, E.; HYSLOP, B.',                           editora: 'Altabooks, 2013',      tipo: 'Complementar',          ucs: '13' },
  { titulo: 'Desenvolvimento de software II: introdução ao desenvolvimento web com HTML, CSS, JS e PHP',autores: 'MILETTO, E. M.; BERTAGNOLLI, S. de C.',            editora: 'Bookman, 2014',        tipo: 'Complementar',          ucs: '13' },
  // UC14
  { titulo: 'Adobe Photoshop CC',                                                                      autores: 'ANDRADE, M. S. de.',                               editora: 'Senac São Paulo, 2018',tipo: 'Básica',                ucs: '14' },
  { titulo: 'Princípios da web design maravilhoso',                                                    autores: 'BEAIRD, J.',                                       editora: 'Alta Books, 2012',     tipo: 'Complementar',          ucs: '14' },
  { titulo: 'Web design responsivo',                                                                   autores: 'SILVA, M. S.',                                     editora: 'Novatec, 2014',        tipo: 'Complementar',          ucs: '14' },
  // UC15
  { titulo: 'Estruturas de dados e algoritmos em JavaScript',                                          autores: 'GRONER, L.',                                       editora: 'Novatec, 2017',        tipo: 'Básica',                ucs: '15' },
  { titulo: 'CSS3: o manual que faltava',                                                              autores: 'MCFARLAND, D. S.',                                 editora: 'Altabooks, 2015',      tipo: 'Complementar',          ucs: '15' },
  { titulo: 'HTML5: a linguagem de marcação que revolucionou a web',                                   autores: 'SILVA, M. S.',                                     editora: 'Novatec, 2014',        tipo: 'Complementar',          ucs: '15' },
]

// ─────────────────────────────────────────────
// DOWNLOADS (softwares da seção 10.1 do PC)
// ─────────────────────────────────────────────
const abaDownloads = [
  { nome: 'VS Code',              desc: 'Editor de código moderno para desenvolvimento desktop e web.',                              link: 'https://code.visualstudio.com/' },
  { nome: 'Visual Studio',        desc: 'IDE profissional da Microsoft para desenvolvimento em C# e .NET.',                          link: 'https://visualstudio.microsoft.com/pt-br/downloads/' },
  { nome: 'Git / GitHub',         desc: 'Controle de versões de código e hospedagem de projetos na nuvem.',                          link: 'https://github.com/' },
  { nome: 'MySQL / XAMPP',        desc: 'Banco de dados MySQL com servidor local Apache e PHP.',                                     link: 'https://www.apachefriends.org/pt_br/index.html' },
  { nome: 'MySQL Workbench',      desc: 'Ferramenta gráfica para modelagem e administração de bancos MySQL.',                        link: 'https://dev.mysql.com/downloads/workbench/' },
  { nome: 'PostgreSQL / pgAdmin', desc: 'Banco de dados avançado e sua interface de administração.',                                 link: 'https://www.postgresql.org/download/' },
  { nome: 'VirtualBox',           desc: 'Criação e gerenciamento de máquinas virtuais.',                                             link: 'https://www.virtualbox.org/wiki/Downloads' },
  { nome: 'Cisco Packet Tracer',  desc: 'Simulador de redes para projeto e configuração de topologias de rede.',                     link: 'https://www.netacad.com/courses/packet-tracer' },
  { nome: 'Wireshark',            desc: 'Analisador de protocolos para monitoramento de tráfego de rede.',                           link: 'https://www.wireshark.org/download.html' },
  { nome: 'VisualG',              desc: 'Interpretador de algoritmos em português para aprendizagem de lógica de programação.',       link: 'https://visualg3.com.br/' },
  { nome: 'Figma',                desc: 'Design de interfaces, wireframes e prototipagem colaborativa.',                             link: 'https://www.figma.com/' },
  { nome: 'GIMP',                 desc: 'Editor de imagens bitmap gratuito (alternativa ao Photoshop).',                             link: 'https://www.gimp.org/downloads/' },
  { nome: 'Inkscape',             desc: 'Editor de gráficos vetoriais gratuito (alternativa ao CorelDRAW).',                        link: 'https://inkscape.org/pt-br/releases/' },
  { nome: 'WordPress',            desc: 'Sistema de gerenciamento de conteúdo (CMS) para criação de sites.',                         link: 'https://br.wordpress.org/download/' },
  { nome: 'Pacote Office / LibreOffice', desc: 'Aplicativos de escritório para edição de textos, planilhas e apresentações.',       link: 'https://www.libreoffice.org/download/download-libreoffice/' },
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
console.log(`\n✅ template-curso.xlsx gerado com dados do Técnico em Informática`)
console.log(`   Arquivo: ${saida}`)
console.log(`\n   16 UCs | ${abaFaltas.length} faltas | ${abaBibliografia.length} livros | ${abaDownloads.length} downloads`)
console.log(`\n⚠️  Verifique os campos de faltas (aulas e qtdeDias) — são estimativas calculadas.`)
console.log(`   Para importar: npm run importar -- template-curso.xlsx\n`)
