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
    "nome": "Figma",
    "desc": "Prototipagem de interfaces de usuário.",
    "link": "https://figma.com"
  },
  {
    "nome": "HTML",
    "desc": "Linguagem de marcação para estruturação de páginas web (documentação oficial).",
    "link": "https://developer.mozilla.org/pt-BR/docs/Web/HTML"
  },
  {
    "nome": "CSS",
    "desc": "Linguagem de estilos para definição visual de páginas web (documentação oficial).",
    "link": "https://developer.mozilla.org/pt-BR/docs/Web/CSS"
  },
  {
    "nome": "Adobe Photoshop",
    "desc": "Software de edição e manipulação de imagens.",
    "link": "https://www.adobe.com/br/products/photoshop.html"
  },
  {
    "nome": "Adobe Illustrator",
    "desc": "Software de criação e edição de gráficos vetoriais.",
    "link": "https://www.adobe.com/br/products/illustrator.html"
  },
  {
    "nome": "Adobe Premiere Pro",
    "desc": "Software de edição profissional de vídeo.",
    "link": "https://www.adobe.com/br/products/premiere.html"
  },
  {
    "nome": "Adobe After Effects",
    "desc": "Software de motion graphics, animação e efeitos visuais.",
    "link": "https://www.adobe.com/br/products/aftereffects.html"
  },
  {
    "nome": "Adobe Express",
    "desc": "Ferramenta da Adobe para criação rápida de designs, posts, vídeos e páginas web.",
    "link": "https://www.adobe.com/express/"
  },
  {
    "nome": "Canva",
    "desc": "Plataforma de design gráfico para criação de imagens, apresentações e conteúdos visuais.",
    "link": "https://www.canva.com/"
  },
  {
    "nome": "Freepik",
    "desc": "Banco de recursos gráficos e vetoriais, como ícones, ilustrações e fotos gratuitas e pagas.",
    "link": "https://www.freepik.com/"
  },
  {
    "nome": "Favicons",
    "desc": "Ferramenta para criar e gerar ícones de sites (favicon) em diferentes formatos e tamanhos.",
    "link": "https://favicon.io/"
  },
  {
    "nome": "Pexels",
    "desc": "Banco de imagens e vídeos gratuitos, com alta qualidade, para uso pessoal e comercial.",
    "link": "https://www.pexels.com/"
  },
  {
    "nome": "Pixabay",
    "desc": "Plataforma de imagens, vídeos e vetores gratuitos, livres de direitos autorais.",
    "link": "https://pixabay.com/"
  },

  {
    "nome": "Copilot",
    "desc": "Assistente de codificação baseado em IA, integrado ao Visual Studio Code, para sugestão de códigos.",
    "link": "https://github.com/features/copilot"
  },
    {
    "nome": "Construct",
    "desc": "Plataforma para desenvolvimento de jogos 2D sem necessidade de programação avançada.",
    "link": "https://www.construct.net"
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
                Curso Técnico em <span className="_text-primary fw-bold2">Multimídia</span>
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