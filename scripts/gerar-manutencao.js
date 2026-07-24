/**
 * gerar-manutencao.js
 *
 * Gera template-curso.xlsx preenchido com os dados do
 * Técnico em Manutenção e Suporte em Informática (PC nº 299).
 *
 * Uso:
 *   node scripts/gerar-manutencao.js
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
    slug: 'manutencao-suporte',
    nome: 'Técnico em Manutenção e Suporte em Informática',
    descricao: 'Aprenda a montar, instalar e manter computadores, configurar redes locais, servidores e prestar suporte técnico com foco em governança e atendimento ao cliente.',
    icone: 'Wrench',
    cor: '#f97316',
  },
]

// ─────────────────────────────────────────────
// BADGES
// ─────────────────────────────────────────────
const abaBadges = [
  { label: 'Suporte e Manutenção', variant: 'primary' },
  { label: 'Redes de Computadores', variant: 'success' },
  { label: 'Infraestrutura de TI', variant: 'warning' },
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
  { id: 'uc9',  titulo: 'UC9 - Implementar cabeamento estruturado e telefonia IP' },
  { id: 'uc10', titulo: 'UC10 - Planejar e executar a instalação de redes sem fio' },
  { id: 'uc11', titulo: 'UC11 - Planejar e executar a manutenção de notebooks e manutenção preventiva de impressoras' },
  { id: 'uc12', titulo: 'UC12 - Monitorar sistemas, aplicativos e equipamentos' },
  { id: 'uc13', titulo: 'UC13 - Realizar a gestão dos projetos e governança de processos em operações de suporte' },
  { id: 'uc14', titulo: 'UC14 - Atender clientes em serviços de manutenção e suporte de informática' },
  { id: 'uc15', titulo: 'UC15 - Projeto Integrador: Técnico em Manutenção e Suporte em Informática' },
]

// ─────────────────────────────────────────────
// UC_ATIVIDADES
// ─────────────────────────────────────────────
const abaAtividades = [
  // UC1
  { uc_id: 'uc1', atividade: 'Montagem de computadores com componentes reais' },
  { uc_id: 'uc1', atividade: 'Identificação e teste de componentes de hardware e periféricos' },
  { uc_id: 'uc1', atividade: 'Uso de medidas de proteção contra descargas eletrostáticas' },
  { uc_id: 'uc1', atividade: 'Configuração de BIOS/Setup e parâmetros de inicialização' },
  { uc_id: 'uc1', atividade: 'Medições com multímetro e inspeção final do equipamento' },
  // UC2
  { uc_id: 'uc2', atividade: 'Instalação e configuração de sistemas operacionais (Windows e Linux)' },
  { uc_id: 'uc2', atividade: 'Instalação de drivers, firmware, BIOS e aplicativos de segurança' },
  { uc_id: 'uc2', atividade: 'Configuração de redes SOHO e dispositivos móveis' },
  { uc_id: 'uc2', atividade: 'Testes de conectividade e homologação do equipamento' },
  // UC3
  { uc_id: 'uc3', atividade: 'Diagnóstico de falhas em hardware e software' },
  { uc_id: 'uc3', atividade: 'Realização de backup e restore de dados' },
  { uc_id: 'uc3', atividade: 'Correção de problemas físicos, lógicos e de conectividade' },
  { uc_id: 'uc3', atividade: 'Atualização de sistema operacional e elaboração de relatório de manutenção' },
  // UC4
  { uc_id: 'uc4', atividade: 'Projeto integrador: montagem, instalação e manutenção de computadores para uma organização' },
  // UC5
  { uc_id: 'uc5', atividade: 'Planejamento e projeto de rede local (LAN)' },
  { uc_id: 'uc5', atividade: 'Crimpagem de cabos e cabeamento estruturado' },
  { uc_id: 'uc5', atividade: 'Configuração de switch, roteador e equipamentos de rede' },
  { uc_id: 'uc5', atividade: 'Configuração de segurança e testes de conectividade' },
  // UC6
  { uc_id: 'uc6', atividade: 'Diagnóstico de falhas em redes locais com software de monitoramento' },
  { uc_id: 'uc6', atividade: 'Substituição de componentes e reparo de cabeamento' },
  { uc_id: 'uc6', atividade: 'Monitoramento de tráfego, segurança e homologação da rede' },
  // UC7
  { uc_id: 'uc7', atividade: 'Elaboração de plano de trabalho para instalação de servidor' },
  { uc_id: 'uc7', atividade: 'Instalação e configuração de sistema operacional de servidor (Windows Server / Linux)' },
  { uc_id: 'uc7', atividade: 'Configuração de máquinas virtuais com VirtualBox / VMware' },
  { uc_id: 'uc7', atividade: 'Monitoramento de rede e geração de relatórios de atividades' },
  // UC8
  { uc_id: 'uc8', atividade: 'Projeto integrador: instalação e configuração de rede local cliente/servidor' },
  // UC9
  { uc_id: 'uc9', atividade: 'Planejamento e instalação física de cabeamento estruturado' },
  { uc_id: 'uc9', atividade: 'Configuração de serviços de telefonia IP em redes convergentes' },
  { uc_id: 'uc9', atividade: 'Diagnóstico e reparo de serviços de telefonia IP' },
  // UC10
  { uc_id: 'uc10', atividade: 'Interligação de redes sem fio e configuração de Access Point' },
  { uc_id: 'uc10', atividade: 'Configuração de estações de trabalho em redes WLAN' },
  { uc_id: 'uc10', atividade: 'Diagnóstico de funcionamento e qualidade de sinal da rede sem fio' },
  // UC11
  { uc_id: 'uc11', atividade: 'Manutenção de hardware e software de notebooks' },
  { uc_id: 'uc11', atividade: 'Backup, restore e correção de problemas físicos e lógicos' },
  { uc_id: 'uc11', atividade: 'Montagem, instalação e configuração de impressoras' },
  // UC12
  { uc_id: 'uc12', atividade: 'Seleção e instalação de ferramentas de monitoramento de redes (Zabbix, Nagios, Cacti)' },
  { uc_id: 'uc12', atividade: 'Configuração de alertas, dashboards e relatórios de monitoramento' },
  { uc_id: 'uc12', atividade: 'Execução de regras de monitoramento de sistemas e equipamentos' },
  // UC13
  { uc_id: 'uc13', atividade: 'Planejamento de gerenciamento de projetos (PMI/AGIL) em operações de suporte' },
  { uc_id: 'uc13', atividade: 'Aplicação de práticas de governança (ITIL, COBIT, Green IT)' },
  { uc_id: 'uc13', atividade: 'Elaboração de documentação e mapeamento de processos de suporte' },
  // UC14
  { uc_id: 'uc14', atividade: 'Categorização e atendimento de chamados técnicos (Help Desk / SLA)' },
  { uc_id: 'uc14', atividade: 'Atendimento remoto e presencial ao cliente' },
  { uc_id: 'uc14', atividade: 'Registro de métricas e processos de administração do ambiente de TI' },
  // UC15
  { uc_id: 'uc15', atividade: 'Projeto integrador: implementação de rede Wi-Fi com telefonia IP e modelos de serviços de TI' },
]

// ─────────────────────────────────────────────
// UC_LINGUAGENS (protocolos e tecnologias)
// ─────────────────────────────────────────────
const abaLinguagens = [
  { uc_id: 'uc5',  nome: 'TCP/IP',          desc: 'Conjunto de protocolos para comunicação em redes locais e internet.' },
  { uc_id: 'uc5',  nome: 'IPv4 / IPv6',     desc: 'Protocolos de endereçamento lógico de redes.' },
  { uc_id: 'uc7',  nome: 'Windows Server',  desc: 'Sistema operacional de servidor da Microsoft para gestão de redes locais.' },
  { uc_id: 'uc7',  nome: 'Linux Server',    desc: 'Sistemas operacionais livres para servidores (Ubuntu Server, Debian, CentOS).' },
  { uc_id: 'uc9',  nome: 'SIP / H.323',    desc: 'Protocolos de sinalização para configuração de serviços de telefonia IP (VoIP).' },
  { uc_id: 'uc12', nome: 'SNMP',            desc: 'Protocolo para monitoramento e gestão de dispositivos em redes IP.' },
  { uc_id: 'uc12', nome: 'SSH / Telnet',    desc: 'Protocolos de acesso remoto para administração de servidores e equipamentos.' },
]

// ─────────────────────────────────────────────
// UC_FERRAMENTAS
// ─────────────────────────────────────────────
const abaFerramentas = [
  // UC1 - Hardware
  { uc_id: 'uc1', nome: 'Multímetro',                         desc: 'Medição de tensão, corrente e teste de componentes eletrônicos.' },
  { uc_id: 'uc1', nome: 'Kit de ferramentas (chaves, alicates)', desc: 'Montagem e manutenção física de computadores.' },
  { uc_id: 'uc1', nome: 'Pulseira antiestática ESD',          desc: 'Proteção contra descargas eletrostáticas durante a manipulação de componentes.' },
  // UC2 - Software
  { uc_id: 'uc2', nome: 'Windows / Linux',                    desc: 'Sistemas operacionais instalados e configurados conforme recomendação técnica.' },
  { uc_id: 'uc2', nome: 'Antivírus / Utilitários de segurança', desc: 'Proteção e manutenção do sistema operacional.' },
  { uc_id: 'uc2', nome: 'Pacote Office',                      desc: 'Conjunto de aplicativos de escritório para produtividade.' },
  // UC3
  { uc_id: 'uc3', nome: 'Ferramentas de diagnóstico de hardware', desc: 'Software de detecção de erros e testes de componentes (HWiNFO, CPU-Z).' },
  { uc_id: 'uc3', nome: 'Ferramentas de backup e restore',    desc: 'Recuperação de dados e imagem de sistemas.' },
  // UC5
  { uc_id: 'uc5', nome: 'Switch / Roteador',                  desc: 'Equipamentos de rede configurados para redes locais.' },
  { uc_id: 'uc5', nome: 'Alicate de crimpagem / Testador de cabos', desc: 'Crimpagem e teste de cabeamento UTP.' },
  { uc_id: 'uc5', nome: 'Cisco Packet Tracer / GNS3',         desc: 'Simuladores de redes para projeto e teste de topologias.' },
  // UC6
  { uc_id: 'uc6', nome: 'Wireshark',                          desc: 'Analisador de protocolos para monitoramento de tráfego de rede.' },
  { uc_id: 'uc6', nome: 'Firewall / Antivírus de rede',       desc: 'Ferramentas de segurança para redes locais.' },
  // UC7
  { uc_id: 'uc7', nome: 'Windows Server / Linux Server',      desc: 'Sistemas operacionais de servidor instalados e configurados.' },
  { uc_id: 'uc7', nome: 'VirtualBox / VMware',                desc: 'Ferramentas de virtualização para configuração de máquinas virtuais.' },
  // UC9
  { uc_id: 'uc9', nome: 'Ferramenta punchdown / Crimpadora',  desc: 'Terminação de cabos de rede e cabeamento estruturado.' },
  { uc_id: 'uc9', nome: 'Testador de cabos',                  desc: 'Verificação de continuidade e qualidade do cabeamento instalado.' },
  // UC10
  { uc_id: 'uc10', nome: 'Access Point',                      desc: 'Equipamento para criação de redes sem fio e configuração de WLAN.' },
  { uc_id: 'uc10', nome: 'Software de análise de sinal Wi-Fi', desc: 'Monitoramento de qualidade de sinal e diagnóstico de redes sem fio.' },
  // UC11
  { uc_id: 'uc11', nome: 'Placa de diagnóstico (POST card)',   desc: 'Identificação de falhas durante o processo de inicialização do computador.' },
  { uc_id: 'uc11', nome: 'Kit de ferramentas para notebooks',  desc: 'Ferramentas específicas para desmontagem e manutenção de notebooks.' },
  // UC12
  { uc_id: 'uc12', nome: 'Zabbix / Nagios / Cacti',           desc: 'Plataformas de monitoramento de redes, servidores e aplicações.' },
  { uc_id: 'uc12', nome: 'Wireshark',                          desc: 'Análise de protocolos e monitoramento de tráfego de rede.' },
  // UC13
  { uc_id: 'uc13', nome: 'Ferramentas de gestão de projetos',  desc: 'Software para planejamento e controle de projetos (MS Project, Trello, Jira).' },
  { uc_id: 'uc13', nome: 'GLPI / OTRS',                        desc: 'Sistemas de gestão de chamados e inventário de TI.' },
  // UC14
  { uc_id: 'uc14', nome: 'TeamViewer / AnyDesk',              desc: 'Ferramentas de acesso remoto para atendimento ao cliente.' },
  { uc_id: 'uc14', nome: 'Software de Help Desk',             desc: 'Sistema de abertura e gestão de chamados técnicos.' },
]

// ─────────────────────────────────────────────
// FALTAS
// falta25 = CH * 0.25 | qtdeDias ≈ falta25 / 3.75h por dia
// ─────────────────────────────────────────────
const abaFaltas = [
  { uc: 1,  nome: 'Planejar e executar a montagem de computadores',                                                                                aulas: 28, ch: '84h',  falta25: '21h', qtdeDias: '6 dias' },
  { uc: 2,  nome: 'Planejar e executar a instalação de hardware e software para computadores',                                                      aulas: 32, ch: '96h',  falta25: '24h', qtdeDias: '6 dias' },
  { uc: 3,  nome: 'Planejar e executar a manutenção de computadores',                                                                               aulas: 24, ch: '72h',  falta25: '18h', qtdeDias: '5 dias' },
  { uc: 4,  nome: 'Projeto Integrador: Assistente de Suporte e Manutenção de Computadores',                                                         aulas: 7,  ch: '20h',  falta25: '5h',  qtdeDias: '1 dia'  },
  { uc: 5,  nome: 'Planejar e executar a instalação de redes locais de computadores',                                                               aulas: 32, ch: '96h',  falta25: '24h', qtdeDias: '6 dias' },
  { uc: 6,  nome: 'Planejar e executar a manutenção de redes locais de computadores',                                                               aulas: 32, ch: '96h',  falta25: '24h', qtdeDias: '6 dias' },
  { uc: 7,  nome: 'Planejar e executar a instalação, configuração e monitoramento de sistemas operacionais de redes locais (servidores)',            aulas: 32, ch: '96h',  falta25: '24h', qtdeDias: '6 dias' },
  { uc: 8,  nome: 'Projeto Integrador: Assistente de Operação de Redes de Computadores',                                                            aulas: 7,  ch: '20h',  falta25: '5h',  qtdeDias: '1 dia'  },
  { uc: 9,  nome: 'Implementar cabeamento estruturado e telefonia IP',                                                                              aulas: 24, ch: '72h',  falta25: '18h', qtdeDias: '5 dias' },
  { uc: 10, nome: 'Planejar e executar a instalação de redes sem fio',                                                                              aulas: 20, ch: '60h',  falta25: '15h', qtdeDias: '4 dias' },
  { uc: 11, nome: 'Planejar e executar a manutenção de notebooks e manutenção preventiva de impressoras',                                           aulas: 16, ch: '48h',  falta25: '12h', qtdeDias: '3 dias' },
  { uc: 12, nome: 'Monitorar sistemas, aplicativos e equipamentos',                                                                                  aulas: 12, ch: '36h',  falta25: '9h',  qtdeDias: '2 dias' },
  { uc: 13, nome: 'Realizar a gestão dos projetos e governança de processos em operações de suporte',                                                aulas: 28, ch: '84h',  falta25: '21h', qtdeDias: '6 dias' },
  { uc: 14, nome: 'Atender clientes em serviços de manutenção e suporte de informática',                                                             aulas: 28, ch: '84h',  falta25: '21h', qtdeDias: '6 dias' },
  { uc: 15, nome: 'Projeto Integrador: Técnico em Manutenção e Suporte em Informática',                                                             aulas: 12, ch: '36h',  falta25: '9h',  qtdeDias: '2 dias' },
]

// ─────────────────────────────────────────────
// AVALIAÇÃO (padrão Senac — PC nº 299)
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
  { tipo: 'texto',   conteudo: 'O aluno deve ter frequência mínima de 75% em cada Unidade Curricular. O Projeto Integrador tem como critério apenas a Menção D (desenvolvida), sem exigência de frequência mínima.' },
  { tipo: 'h2',      conteudo: 'Recuperação' },
  { tipo: 'texto',   conteudo: 'A recuperação é imediata à constatação das dificuldades, por meio de situações-problema, estudos dirigidos e outras estratégias que contribuam para o desenvolvimento da competência.' },
]

// ─────────────────────────────────────────────
// INFORMAÇÕES GERAIS
// ─────────────────────────────────────────────
const abaInformacoes = [
  { tipo: 'h1',      conteudo: 'Informações Gerais' },
  { tipo: 'h2',      conteudo: 'Sobre o Curso' },
  { tipo: 'texto',   conteudo: 'Habilitação Profissional Técnica de Nível Médio em Manutenção e Suporte em Informática — PC nº 299. Carga horária total: 1.000 horas.' },
  { tipo: 'h2',      conteudo: 'Requisitos de Acesso' },
  { tipo: 'item',    conteudo: 'Para a Habilitação Profissional Técnica: estar cursando, no mínimo, o 2º ano do Ensino Médio.' },
  { tipo: 'item',    conteudo: 'Para as Qualificações Profissionais (de forma independente): Ensino Fundamental completo.' },
  { tipo: 'h2',      conteudo: 'Qualificações Intermediárias' },
  { tipo: 'item',    conteudo: 'Assistente de Suporte e Manutenção de Computadores — 272 horas (UCs 1, 2, 3 e 4).' },
  { tipo: 'item',    conteudo: 'Assistente de Operação de Redes de Computadores — 308 horas (UCs 5, 6, 7 e 8).' },
  { tipo: 'h2',      conteudo: 'Área de Atuação' },
  { tipo: 'texto',   conteudo: 'O Técnico em Manutenção e Suporte em Informática atua em organizações públicas e privadas de qualquer segmento — comércio, serviços, indústria, consultoria, ensino e pesquisa — por meio da prestação de serviços autônomos, temporários ou contrato efetivo.' },
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
  { tipo: 'item',    conteudo: 'Responsável por representar a turma em reuniões e eventos.' },
  { tipo: 'item',    conteudo: 'Canal de comunicação entre alunos e instituição.' },
  { tipo: 'h2',      conteudo: 'Mercado de Trabalho' },
  { tipo: 'item',    conteudo: 'Setor de TI em constante crescimento e transformação tecnológica.' },
  { tipo: 'item',    conteudo: 'Alta demanda por profissionais com domínio técnico-científico e perfil empreendedor.' },
  { tipo: 'item',    conteudo: 'Possibilidade de atuação como técnico autônomo, em empresas de manutenção, suporte e redes.' },
]

// ─────────────────────────────────────────────
// BIBLIOGRAFIA (extraída do PC nº 299)
// ─────────────────────────────────────────────
const abaBibliografia = [
  // UC1, 2, 3
  { titulo: 'Manutenção de microcomputadores na prática',                                 autores: 'SCHORSCH, M.; LACERDA, I. M.',        editora: 'Senac São Paulo, 2016', tipo: 'Básica',      ucs: '1,2,3' },
  { titulo: 'Montagem e manutenção de computadores, PCs',                                 autores: 'PAIXÃO, R. R.',                       editora: 'Érica, 2014',           tipo: 'Complementar', ucs: '1,2'   },
  { titulo: 'Hardware na Prática',                                                         autores: 'VASCONCELOS, L.',                     editora: 'Ciência Moderna, 2017', tipo: 'Complementar', ucs: '1,2,3' },
  { titulo: 'Rede de computadores: um guia para instalação e reparação',                  autores: 'LACERDA, I. M. F.; OLIVEIRA, J. de B.', editora: 'Senac Nacional, 2013', tipo: 'Complementar', ucs: '3'   },
  // UC5, 6
  { titulo: 'Redes de computadores: guia total',                                           autores: 'SOUSA, L. B.',                        editora: 'Érica, 2014',           tipo: 'Básica',       ucs: '5,10'  },
  { titulo: 'Redes de computadores e internet',                                            autores: 'COMER, D. E.',                        editora: 'Bookman, 2016',         tipo: 'Básica',       ucs: '6'     },
  { titulo: 'Cabeamento estruturado: desvendando cada passo: do projeto à instalação',    autores: 'MARIN, P. S.',                        editora: 'Érica, 2013',           tipo: 'Complementar', ucs: '5'     },
  { titulo: 'Montagem de redes locais: prático e didático',                                autores: 'HAYAMA, M. M.',                       editora: 'Érica, 2011',           tipo: 'Complementar', ucs: '6'     },
  { titulo: 'Segurança em redes sem fio',                                                  autores: 'RUFINO, N. M. de O.',                 editora: 'Novatec, 2015',         tipo: 'Complementar', ucs: '6'     },
  // UC7
  { titulo: 'Microsoft Windows Server 2016: fundamentos',                                  autores: 'THOMPSON, M. A.',                     editora: 'Érika, 2017',           tipo: 'Básica',       ucs: '7'     },
  { titulo: 'Solucionando Problemas de Comunicação em Redes Lan e Wan',                   autores: 'FEY, A. F.; GAUER, R. R.',            editora: 'Clube dos Autores, 2016', tipo: 'Complementar', ucs: '7'  },
  { titulo: 'Linux para servidores: instalação à virtualização',                           autores: 'MARTINI, L. A.; MAIEVES, G. T.',      editora: 'Viena, 2013',           tipo: 'Complementar', ucs: '7'     },
  // UC9
  { titulo: 'Cabeamento estruturado',                                                      autores: 'MARIN, P. S.',                        editora: 'Érica, 2014',           tipo: 'Básica',       ucs: '9'     },
  { titulo: 'Sistemas de telefonia: fundamentos, tecnologias e funcionamento de redes',   autores: 'NETO, V. S.',                         editora: 'Érica, 2014',           tipo: 'Complementar', ucs: '9'     },
  // UC10
  { titulo: 'Sistemas de comunicação sem fio: conceitos e aplicações',                    autores: 'ROCHOL, J.',                          editora: 'Bookman, 2018',         tipo: 'Complementar', ucs: '10'    },
  { titulo: 'Segurança de redes sem fio',                                                  autores: 'WRIGHTSON, T.',                       editora: 'Bookman, 2014',         tipo: 'Complementar', ucs: '10'    },
  // UC11
  { titulo: 'Guia prático de manutenção de impressora a jato de tinta',                   autores: 'SCHORSCH, M.',                        editora: 'Senac, 2015',           tipo: 'Básica',       ucs: '11'    },
  { titulo: 'Manutenção em Notebooks',                                                     autores: 'ROSSINI, E. D. J.',                   editora: 'Viena, 2014',           tipo: 'Complementar', ucs: '11'    },
  // UC12
  { titulo: 'Gerenciamento de servidores',                                                 autores: 'PONTUAL, R. A.; WANDERLEY, A. R. M. C.', editora: 'Érica, 2019 (Série Eixos)', tipo: 'Básica', ucs: '12'  },
  { titulo: 'Análise de tráfego em redes TCP/IP',                                          autores: 'FILHO, J. E. M.',                     editora: 'Novatec, 2013',         tipo: 'Complementar', ucs: '12'    },
  { titulo: 'Exploração de vulnerabilidades em redes TCP/IP',                              autores: 'MELO, S.',                            editora: 'Alta Books, 2017',      tipo: 'Complementar', ucs: '12'    },
  // UC13
  { titulo: 'Implantando a governança de TI: da estratégia à gestão de processos e serviços', autores: 'FERNANDES, A. A.; ABREU, V. F. de.', editora: 'Brasport, 2014',    tipo: 'Básica',       ucs: '13'    },
  { titulo: 'Gamification em help desk e service desk',                                    autores: 'COHEN, R.',                           editora: 'Novatec, 2017',         tipo: 'Complementar', ucs: '13'    },
  // UC14
  { titulo: 'Gestão do conhecimento em serviços de TI: guia prático',                     autores: 'STATDLOBER, J.',                      editora: 'Brasport, 2016',        tipo: 'Básica',       ucs: '14'    },
  { titulo: 'Sistemas de informações gerenciais',                                           autores: 'LAUDON, K.; LAUDON, J.',              editora: 'Pearson, 2014',         tipo: 'Complementar', ucs: '14'    },
  { titulo: 'Métodos ágeis e gestão de serviços de TI',                                   autores: 'OLIVEIRA, B. S. de.',                 editora: 'Brasport, 2018',        tipo: 'Complementar', ucs: '14'    },
]

// ─────────────────────────────────────────────
// DOWNLOADS (softwares da seção 10.1 do PC nº 299)
// ─────────────────────────────────────────────
const abaDownloads = [
  { nome: 'VirtualBox',                desc: 'Criação e gerenciamento de máquinas virtuais para prática de servidores e virtualização.',       link: 'https://www.virtualbox.org/wiki/Downloads' },
  { nome: 'Cisco Packet Tracer',       desc: 'Simulador de redes para projeto, configuração e testes de topologias de rede.',                  link: 'https://www.netacad.com/courses/packet-tracer' },
  { nome: 'GNS3',                      desc: 'Emulador de redes para simulação de roteadores e switches em ambiente virtual.',                   link: 'https://www.gns3.com/software/download' },
  { nome: 'Wireshark',                 desc: 'Analisador de protocolos para monitoramento e análise de tráfego de rede.',                       link: 'https://www.wireshark.org/download.html' },
  { nome: 'Zabbix',                    desc: 'Plataforma open source para monitoramento de redes, servidores e aplicações.',                    link: 'https://www.zabbix.com/download' },
  { nome: 'Ubuntu Server / Debian',    desc: 'Sistemas operacionais Linux para servidores de rede (instalação e configuração).',                link: 'https://ubuntu.com/download/server' },
  { nome: 'Windows Server (trial)',    desc: 'Sistema operacional de servidor da Microsoft para prática de gestão de redes locais.',            link: 'https://www.microsoft.com/pt-br/evalcenter/evaluate-windows-server-2022' },
  { nome: 'TeamViewer',                desc: 'Ferramenta de acesso remoto para atendimento e suporte ao cliente.',                              link: 'https://www.teamviewer.com/pt-br/download/' },
  { nome: 'AnyDesk',                   desc: 'Solução de acesso remoto leve e rápida para suporte técnico.',                                    link: 'https://anydesk.com/pt/downloads' },
  { nome: 'HWiNFO',                    desc: 'Software de diagnóstico e monitoramento detalhado de hardware de computadores.',                  link: 'https://www.hwinfo.com/download/' },
  { nome: 'CPU-Z',                     desc: 'Utilitário de informações sobre processador, memória e placa-mãe.',                               link: 'https://www.cpuid.com/softwares/cpu-z.html' },
  { nome: 'Pacote Office / LibreOffice', desc: 'Aplicativos de escritório para edição de documentos, planilhas e apresentações.',              link: 'https://www.libreoffice.org/download/download-libreoffice/' },
  { nome: 'GLPI',                      desc: 'Sistema de gestão de chamados, inventário e suporte técnico (Help Desk).',                        link: 'https://glpi-project.org/downloads/' },
  { nome: 'Nmap',                      desc: 'Ferramenta de port scanner para descoberta de hosts e serviços em redes.',                        link: 'https://nmap.org/download' },
  { nome: 'Bitvise SSH Client',        desc: 'Cliente SSH para acesso seguro a servidores Linux e administração remota.',                       link: 'https://www.bitvise.com/ssh-client-download' },
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
console.log(`\n✅ template-curso.xlsx gerado com dados do Técnico em Manutenção e Suporte em Informática (PC nº 299)`)
console.log(`   Arquivo: ${saida}`)
console.log(`\n   15 UCs | ${abaFaltas.length} faltas | ${abaBibliografia.length} livros | ${abaDownloads.length} downloads`)
console.log(`\n⚠️  Verifique os campos de faltas (aulas e qtdeDias) — são estimativas calculadas.`)
console.log(`   Para importar: npm run importar -- template-curso.xlsx\n`)
