import React from 'react';
import { 
  Layers, 
  Network, // Substituindo o Sitemap que causou o erro
  Image as ImageIcon, 
  CheckSquare, 
  Code, 
  List, 
  Table as TableIcon, 
  Terminal,
  ArrowRight, ExternalLink 
} from 'lucide-react';

// Subcomponente para organizar as linhas de tags
const TagItem = ({ code, desc }) => (
  <div className="tag-item">
    <code>{code}</code>
    <span className="tag-desc">{desc}</span>
  </div>
);

const ferramentas = [
  {
    nome: "Trello",
    desc: "Organização de tarefas em cartões e colunas.",
    link: "https://trello.com/"
  },
  {
    nome: "Google Forms",
    desc: "Criação de formulários e pesquisas online.",
    link: "https://forms.google.com/"
  },
  {
    nome: "MindMeister",
    desc: "Criação de mapas mentais para organizar ideias.",
    link: "https://www.mindmeister.com/"
  },
  {
    nome: "Excel",
    desc: "Planilhas para cálculos, tabelas e organização de dados.",
    link: "https://www.microsoft.com/pt-br/microsoft-365/excel"
  },
  {
    nome: "Office 365 / Teams",
    desc: "Ferramentas de escritório e comunicação em equipe.",
    link: "https://www.microsoft.com/pt-br/microsoft-365"
  },
  {
    nome: "Lucidchart",
    desc: "Diagramas, fluxogramas e mapas de sistemas.",
    link: "https://www.lucidchart.com/"
  },
  {
    nome: "Git / GitHub",
    desc: "Controle de versões e hospedagem de código.",
    link: "https://github.com/"
  },
  {
    nome: "Canva",
    desc: "Design gráfico e apresentações.",
    link: "https://www.canva.com/pt_br/"
  },
  {
    nome: "MySQL Workbench",
    desc: "Gerenciamento de bancos MySQL.",
    link: "https://dev.mysql.com/downloads/workbench/"
  },
  {
    nome: "PostgreSQL / pgAdmin",
    desc: "Banco de dados avançado e interface administrativa.",
    link: "https://www.postgresql.org/download/"
  },
  {
    nome: "VirtualBox",
    desc: "Criação de máquinas virtuais.",
    link: "https://www.virtualbox.org/wiki/Downloads"
  },
  {
    nome: "VisualG",
    desc: "Algoritmos em português para aprendizagem.",
    link: "https://visualg3.com.br/"
  },
  {
    nome: "VS Code",
    desc: "Editor de código moderno.",
    link: "https://code.visualstudio.com/"
  },
  {
    nome: "Node.js",
    desc: "Execução JavaScript no backend.",
    link: "https://nodejs.org/pt-br"
  },
  {
    nome: "Insomnia",
    desc: "Testes de APIs.",
    link: "https://insomnia.rest/download"
  },
  {
    nome: "Visual Studio",
    desc: "IDE profissional para desenvolvimento.",
    link: "https://visualstudio.microsoft.com/pt-br/"
  },
    {
    nome: "Figma",
    desc: "Design de interfaces e prototipagem.",
    link: "https://figma.com/"
  }
];


const Downloads = () => {

  return (
    <div className="bg-body-tertiary min-vh-100">

      <div className="container pt-4 pb-5 mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            
            <header className="page-header text-center mb-5">
              {/* <span className="badge-html">Senac Limeira</span> */}
              <img className="logo" src="https://www.sp.senac.br/o/senac-theme/images/logo_senac_default.png" alt="" />
              <h1 className="display-6 ">
                Curso Técnico em <span className="_text-primary fw-bold2">Desenvolvimento de Sistemas</span>
              </h1>
              <span className="badge-html">Senac Limeira</span>
              {/* <p className="text-muted fs-2 fw-bold">Curso Técnico em Desenvolvimento de Sistemas.</p> */}
            </header>

{/* transforme o código abaixo em card bootstrap e elimine as repetições */}

<div className="card shadow-sm mb-4">
  <div className="card-header bg-light d-flex align-items-center">
    <Layers className="me-2 text-primary" />
    <strong>Links de acesso e downloads das ferramentas</strong>
  </div>

  <div className="card-body">
    <ul className="list-unstyled mb-0">
      {ferramentas.map((item, index) => (
        <li key={index} className="mb-2 d-flex align-items-start">
          <ArrowRight className="me-2 text-primary mt-1" size={18} />

          <span>
            <strong>{item.nome}:</strong> {item.desc}{" "}
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="ms-1 text-decoration-none"
            >
              Acessar <ExternalLink size={14} />
            </a>
          </span>
        </li>
      ))}
    </ul>
  </div>
</div>


            <footer className="text-center mt-5">
              <p className="small text-muted">Desenvolvido por Luis Ribeiro com React, JS e Bootstrap</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Downloads;