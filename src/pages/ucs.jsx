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
  ArrowRight
} from 'lucide-react';

// Subcomponente para organizar as linhas de tags
const TagItem = ({ code, desc }) => (
  <div className="tag-item">
    <code>{code}</code>
    <span className="tag-desc">{desc}</span>
  </div>
);

// Subcomponente para as seções do acordeão
const AccordionSection = ({ id, title, icon: Icon, children, isFirst = false }) => (
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button 
        className={`accordion-button ${!isFirst ? 'collapsed' : ''}`} 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target={`#${id}`}
      >
        {Icon && <Icon size={20} className="me-2 text-primary" />}
        {title}
      </button>
    </h2>
    <div 
      id={id} 
      className={`accordion-collapse collapse ${isFirst ? 'show' : ''}`} 
      data-bs-parent="#accordionHtml5"
    >
      <div className="accordion-body">
        {children}
      </div>
    </div>
  </div>
);

const Ucs = () => {
  const navLinks = ["HTML5", "CSS3", "Bootstrap", "Javascript", "React", "SQL", "Node.js", "Terminal"];

  return (
    <div className="bg-body-tertiary min-vh-100">
      {/* Navegação */}
      {/* <div className="nav-container text-center py-4 bg-white border-bottom">
        <div className="container d-flex flex-wrap justify-content-center gap-2">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              className={`btn-tech ${link === 'HTML5' ? 'active' : ''}`}
            >
              {link}
            </a>
          ))}
        </div>
      </div> */}

      <div className="container pt-4 pb-5 mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            
            <header className="page-header text-center mb-5">
              
              <img className="logo" src="https://www.sp.senac.br/o/senac-theme/images/logo_senac_default.png" alt="" />
              <h1 className="display-6 ">
                Curso Técnico em <span className="_text-primary fw-bold2">Desenvolvimento de Sistemas</span>
              </h1>
              <span className="badge-html">Senac Limeira</span>
              {/* <p className="text-muted fs-2 fw-bold">Curso Técnico em Desenvolvimento de Sistemas.</p> */}
            </header>

            <div className="accordion custom-accordion" id="accordionHtml5">
              
              {/* <AccordionSection id="uc1" title="UC1 - Elaborar projetos de sistemas" icon={Layers} isFirst> */}
              <AccordionSection id="uc1" title="UC1 - Elaborar projetos de sistemas" icon={Layers} className="border border-start border-primary border-4">
                <strong>Atividades principais:</strong> <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Pesquisas <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Estudos de casos <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Criar diagramas e fluxogramas <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Elaboração de textos e geração de tabelas <br/><br/>

                <strong>Ferramentas utilizadas:</strong> <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Trello: Organização de tarefas em cartões e colunas. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Google Forms: Criação de formulários e pesquisas online. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Mindmeister: Criação de mapas mentais para organizar ideias. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Excel: Planilhas para cálculos, tabelas e organização de dados. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Office 365 / Teams: Ferramentas de escritório e comunicação em equipe. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Lucidchart: Desenho de diagramas, fluxogramas e mapas de sistemas. <br/>
              </AccordionSection>

              <AccordionSection id="uc2" title="UC2 - Elaborar documentação de sistemas" icon={Layers} >
                <strong>Atividades principais:</strong> <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Pesquisas <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Estudos de casos <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Criar diagramas e fluxogramas <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Elaboração de textos e geração de tabelas <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Fazer versionamento de software <br/><br/>

                <strong>Ferramentas utilizadas:</strong> <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Git / GitHub: Controle de versões de código e salvamento de projetos na nuvem. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Canva: Criação de designs gráficos e apresentações visuais. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Excel: Planilhas para cálculos, tabelas e organização de dados. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Office 365 / Teams: Ferramentas de escritório e comunicação em equipe. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Lucidchart: Desenho de diagramas, fluxogramas e mapas de sistemas. <br/>
              </AccordionSection>

              <AccordionSection id="uc3" title="UC3 - Modelar e estruturar banco de dados" icon={Layers} >
                <strong>Atividades principais:</strong> <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Pesquisas <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Estudos de casos <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Criar diagramas e fluxogramas <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Elaboração de textos e geração de tabelas <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Fazer versionamento de software <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Codificação em linguagem SQL <br/><br/>

                <strong>Linguagens/tecnologias:</strong> <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> SQL: Linguagem padrão universal utilizada para interagir com bancos de dados relacionais. <br/><br/>

                <strong>Ferramentas utilizadas:</strong> <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Git / GitHub: Controle de versões de código e salvamento de projetos na nuvem. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> MySQL Workbench / Wamp / Xamp: Ferramenta para gerenciar bancos de dados MySQL e criar servidores locais. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> PostgreSQL / pgAdmin: Banco de dados avançado e sua interface de administração. <br/>
              </AccordionSection>

              <AccordionSection id="uc4" title="UC4 - Administrar e implantar servidores de banco de dados" icon={Layers} >
                <strong>Atividades principais:</strong> <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Pesquisas <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Estudos de casos <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Criar diagramas e fluxogramas <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Elaboração de textos e geração de tabelas <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Fazer versionamento de software <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Codificação em linguagem SQL <br/><br/>

                <strong>Linguagens/tecnologias:</strong> <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> SQL: Linguagem padrão universal utilizada para interagir com bancos de dados relacionais. <br/><br/>

                <strong>Ferramentas utilizadas:</strong> <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Git / GitHub: Controle de versões de código e salvamento de projetos na nuvem. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> MySQL Workbench / Wamp / Xamp: Ferramenta para gerenciar bancos de dados MySQL e criar servidores locais. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> PostgreSQL / pgAdmin: Banco de dados avançado e sua interface de administração. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> VirtualBox: Criação de "computadores virtuais" dentro do seu próprio PC. <br/>
              </AccordionSection>

              <AccordionSection id="uc5" title="UC5 - Desenvolver algoritmos e linguagem orientada a objetos" icon={Layers} >
                <strong>Atividades principais:</strong> <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Pesquisas <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Estudos de casos <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Documentação de código <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Desenvolver lógica de programação computacional <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Fazer versionamento de software <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Codificação em linguagem de programação <br/><br/>

                <strong>Linguagens/tecnologias:</strong> <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Portugol: Pseudolinguagem que se aproxima da fala humana para facilitar o entendimento da lógica de programação. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Javascript, C# ou Python: Linguagens de programação de sistemas <br/><br/>

                <strong>Ferramentas utilizadas:</strong> <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Git / GitHub: Controle de versões de código e salvamento de projetos na nuvem. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> VisualG: Ferramenta para escrita e execução de algoritmos em português. Usado em ambiente de aprendizagem. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Trello: Organização de tarefas em cartões e colunas. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Excel: Planilhas para cálculos, tabelas e organização de dados. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Visual Studio / VS Code: Editores para escrever e editar códigos de software. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Node.js: Tecnologia para executar códigos Javascript no servidor (backend). <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Insomnia: Ferramenta para teste de comunicação entre diferentes partes de um sistema (APIs). <br/>
                
              </AccordionSection>

              <AccordionSection id="uc6" title="UC6 - Desenvolver interface de usuário e usabilidade de aplicação desktop" icon={Layers} >
                <strong>Atividades principais:</strong> <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Pesquisas <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Estudos de casos <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Documentação de código <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Criação de interfaces <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Fazer versionamento de software <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Codificação em linguagem de programação <br/><br/>

                <strong>Linguagens/tecnologias:</strong> <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> C#: Linguagens de programação de sistemas <br/>

                <strong>Ferramentas utilizadas:</strong> <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Git / GitHub: Controle de versões de código e salvamento de projetos na nuvem. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Trello: Organização de tarefas em cartões e colunas. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Excel: Planilhas para cálculos, tabelas e organização de dados. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Visual Studio: IDE profissional para criação de software. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Insomnia: Ferramenta para teste de comunicação entre diferentes partes de um sistema (APIs). <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Figma: Ferramenta de design para criação de interfaces de usuário. <br/>
                
              </AccordionSection>


              <AccordionSection id="uc7" title="UC7 - Programar aplicação desktop com integração em servidores de banco de dados" icon={Layers} >
                <strong>Atividades principais:</strong> <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Pesquisas <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Estudos de casos <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Documentação de código <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Desenvolver lógica de programação computacional <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Fazer versionamento de software <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Codificação em linguagem de programação <br/><br/>

                <strong>Linguagens/tecnologias:</strong> <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> C#: Linguagens de programação de sistemas <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> SQL: Linguagem padrão universal utilizada para interagir com bancos de dados relacionais. <br/><br/>

                <strong>Ferramentas utilizadas:</strong> <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Git / GitHub: Controle de versões de código e salvamento de projetos na nuvem. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Trello: Organização de tarefas em cartões e colunas. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Excel: Planilhas para cálculos, tabelas e organização de dados. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Visual Studio: IDE profissional para criação de software. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Insomnia: Ferramenta para teste de comunicação entre diferentes partes de um sistema (APIs). <br/>
                
              </AccordionSection>
              <AccordionSection id="uc8" title="UC8 - Executar testes, melhorias e versionamento de aplicativo desktop" icon={Layers} >
                <strong>Atividades principais:</strong> <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Pesquisas <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Estudos de casos <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Documentação de código <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Desenvolver lógica de programação computacional <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Fazer versionamento de software <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Codificação em linguagem de programação <br/><br/>

                <strong>Linguagens/tecnologias:</strong> <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> C#: Linguagens de programação de sistemas <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> SQL: Linguagem padrão universal utilizada para interagir com bancos de dados relacionais. <br/><br/>

                <strong>Ferramentas utilizadas:</strong> <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Git / GitHub: Controle de versões de código e salvamento de projetos na nuvem. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Trello: Organização de tarefas em cartões e colunas. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Excel: Planilhas para cálculos, tabelas e organização de dados. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Visual Studio: IDE profissional para criação de software. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Insomnia: Ferramenta para teste de comunicação entre diferentes partes de um sistema (APIs). <br/>
                
              </AccordionSection>


              <AccordionSection id="uc9" title="UC9 - Desenvolver interface de usuário e usabilidade de aplicação web" icon={Layers} >
                <strong>Atividades principais:</strong> <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Pesquisas <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Estudos de casos <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Documentação de código <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Criação de interfaces <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Fazer versionamento de software <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Codificação em linguagem de marcação e estilos <br/><br/>

                <strong>Linguagens/tecnologias:</strong> <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> HTML: Linguagem de marcação para estruturação de páginas web <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> CSS: Linguagem de estilo para design e layout de páginas web <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Javascript: Linguagem de programação para interatividade em páginas web <br/><br/>

                <strong>Ferramentas utilizadas:</strong> <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Git / GitHub: Controle de versões de código e salvamento de projetos na nuvem. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Trello: Organização de tarefas em cartões e colunas. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Excel: Planilhas para cálculos, tabelas e organização de dados. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Visual Studio Code: IDE profissional para criação de software. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Figma: Ferramenta de design para criação de interfaces de usuário. <br/>
                
              </AccordionSection>            
              <AccordionSection id="uc10" title="UC10 - Programar aplicação web com integração em servidores de banco de dados" icon={Layers} >
                <strong>Atividades principais:</strong> <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Pesquisas <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Estudos de casos <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Documentação de código <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Criação de interfaces <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Fazer versionamento de software <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Codificação em linguagem de programação, linguagem de marcação e estilos <br/><br/>

                <strong>Linguagens/tecnologias:</strong> <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> HTML: Linguagem de marcação para estruturação de páginas web <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> CSS: Linguagem de estilo para design e layout de páginas web <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Node.js ou PHP: Linguagem de programação para back-end <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> SQL: Linguagem padrão universal utilizada para interagir com bancos de dados relacionais. <br/><br/>

                <strong>Ferramentas utilizadas:</strong> <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Git / GitHub: Controle de versões de código e salvamento de projetos na nuvem. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Trello: Organização de tarefas em cartões e colunas. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Excel: Planilhas para cálculos, tabelas e organização de dados. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Visual Studio Code: IDE profissional para criação de software. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Figma: Ferramenta de design para criação de interfaces de usuário. <br/>
                
              </AccordionSection>            
              <AccordionSection id="uc11" title="UC11 - Executar testes, melhoria e versionamento de aplicativo web" icon={Layers} >
                <strong>Atividades principais:</strong> <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Pesquisas <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Estudos de casos <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Documentação de código <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Criação de interfaces <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Fazer versionamento de software <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Codificação em linguagem de programação, linguagem de marcação e estilos <br/><br/>

                <strong>Linguagens/tecnologias:</strong> <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> HTML: Linguagem de marcação para estruturação de páginas web <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> CSS: Linguagem de estilo para design e layout de páginas web <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Javascript: Linguagem de programação para interatividade em páginas web <br/><br/>

                <strong>Ferramentas utilizadas:</strong> <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Git / GitHub: Controle de versões de código e salvamento de projetos na nuvem. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Trello: Organização de tarefas em cartões e colunas. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Excel: Planilhas para cálculos, tabelas e organização de dados. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Visual Studio Code: IDE profissional para criação de software. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Figma: Ferramenta de design para criação de interfaces de usuário. <br/>
                
              </AccordionSection>            

              <AccordionSection id="uc12" title="UC12 - Desenvolver elementos visuais, interface de usuário e usabilidade de aplicação mobile" icon={Layers} >
                <strong>Atividades principais:</strong> <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Pesquisas <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Estudos de casos <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Documentação de código <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Criação de interfaces <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Fazer versionamento de software <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Codificação em linguagem de marcação e estilos <br/><br/>

                <strong>Linguagens/tecnologias:</strong> <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> HTML: Linguagem de marcação para estruturação de páginas web <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> CSS: Linguagem de estilo para design e layout de páginas web <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Javascript: Linguagem de programação para interatividade em páginas web <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> React Native: Framework para desenvolvimento de aplicativos móveis <br/><br/>

                <strong>Ferramentas utilizadas:</strong> <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Git / GitHub: Controle de versões de código e salvamento de projetos na nuvem. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Trello: Organização de tarefas em cartões e colunas. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Excel: Planilhas para cálculos, tabelas e organização de dados. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Visual Studio Code: IDE profissional para criação de software. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Figma: Ferramenta de design para criação de interfaces de usuário. <br/>
                
              </AccordionSection>            
              <AccordionSection id="uc13" title="UC13 - Programar aplicativo mobile com integração de banco de dados embarcado e serviços em nuvem" icon={Layers} >
                <strong>Atividades principais:</strong> <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Pesquisas <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Estudos de casos <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Documentação de código <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Criação de interfaces <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Fazer versionamento de software <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Codificação em linguagem de programação, linguagem de marcação e estilos <br/><br/>

                <strong>Linguagens/tecnologias:</strong> <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> HTML: Linguagem de marcação para estruturação de páginas web <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> CSS: Linguagem de estilo para design e layout de páginas web <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Javascript: Linguagem de programação para interatividade em páginas web <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> React Native: Framework para desenvolvimento de aplicativos móveis <br/><br/>

                <strong>Ferramentas utilizadas:</strong> <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Git / GitHub: Controle de versões de código e salvamento de projetos na nuvem. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Trello: Organização de tarefas em cartões e colunas. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Excel: Planilhas para cálculos, tabelas e organização de dados. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Visual Studio Code: IDE profissional para criação de software. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Figma: Ferramenta de design para criação de interfaces de usuário. <br/>
                
              </AccordionSection>            
              <AccordionSection id="uc14" title="UC14 - Executar testes, melhorias e versionamento de aplicativo mobile" icon={Layers} >
                <strong>Atividades principais:</strong> <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Pesquisas <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Estudos de casos <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Documentação de código <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Criação de interfaces <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Fazer versionamento de software <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Codificação em linguagem de programação, linguagem de marcação e estilos <br/><br/>

                <strong>Linguagens/tecnologias:</strong> <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> HTML: Linguagem de marcação para estruturação de páginas web <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> CSS: Linguagem de estilo para design e layout de páginas web <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Javascript: Linguagem de programação para interatividade em páginas web <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> React Native: Framework para desenvolvimento de aplicativos móveis <br/><br/>

                <strong>Ferramentas utilizadas:</strong> <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Git / GitHub: Controle de versões de código e salvamento de projetos na nuvem. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Trello: Organização de tarefas em cartões e colunas. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Excel: Planilhas para cálculos, tabelas e organização de dados. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Visual Studio Code: IDE profissional para criação de software. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Figma: Ferramenta de design para criação de interfaces de usuário. <br/>
                
              </AccordionSection>   
              <AccordionSection id="uc15" title="UC15 - Projeto Integrador Técnico em Desenvolvimento de Sistemas" icon={Layers} >

                <p>Na UC15, os alunos desenvolvem um projeto integrador que abrange todos os conhecimentos adquiridos ao longo do curso. O projeto é conduzido em equipes multidisciplinares e visa a criação de um sistema completo, desde o planejamento até a implementação final.</p>
                <p>Logo, serão usadas todas as linguagens e tecnologias vistas ao longo do curso.</p>

              </AccordionSection> 

              <span className="badge text-bg-primary p-2 me-2 mb-2">Projeto e Banco de Dados</span>  
              <span className="badge text-bg-success p-2 me-2 mb-2">Aplicação Desktop</span>  
              <span className="badge text-bg-warning p-2 me-2 mb-2">Aplicação Web</span>  
              <span className="badge text-bg-danger p-2 me-2 mb-2">Aplicação Mobile</span>  
              <span className="badge text-bg-dark p-2 me-2 mb-2">Projeto Integrador</span>  
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

export default Ucs;