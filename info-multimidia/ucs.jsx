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
                Curso Técnico em <span className="_text-primary fw-bold2">Multimídia</span>
              </h1>
              <span className="badge-html">Senac Limeira</span>
              {/* <p className="text-muted fs-2 fw-bold">Curso Técnico em Desenvolvimento de Sistemas.</p> */}
            </header>

            <div className="accordion custom-accordion" id="accordionHtml5">
              
              {/* <AccordionSection id="uc1" title="UC1 - Elaborar projetos de sistemas" icon={Layers} isFirst> */}
        
              <AccordionSection id="uc1" title="UC1 - Desenvolver layout." icon={Layers} className="border border-start border-primary border-4">
                
                <strong>Conhecimentos:</strong> <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Elementos e fundamentos do design (forma, cor, equilíbrio, composição e hierarquia). <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Técnicas visuais (contraste, simetria, profundidade e complexidade). <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Tipografia, textura, padronagem e metodologia de design. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Imagem digital: vetorial e bitmap, modos de cor (RGB, CMYK) e resolução. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Softwares gráficos: ferramentas, camadas, edição, tratamento e exportação. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Criação de interfaces e aplicação de identidade visual. <br/><br/>

                <strong>Habilidades:</strong> <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Criar composições visuais, layouts e ilustrações vetoriais. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Editar e tratar imagens digitais. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Combinar cores, tipografias e elementos gráficos. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Adaptar layouts para diferentes plataformas. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Utilizar softwares gráficos e exportar arquivos adequadamente. <br/><br/>

                <strong>Atitudes/Valores:</strong> <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Trabalho em equipe e comunicação assertiva. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Responsabilidade com prazos e ética profissional. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Organização e zelo pelos equipamentos e dados. <br/>

              </AccordionSection>

              <AccordionSection id="uc2" title="UC2 - Criar projetos gráficos para marketing digital." icon={Layers}>              
              <strong>Conhecimentos:</strong> <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Fundamentos de marketing e estratégias digitais. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Produtos do marketing digital: conteúdo, mídias sociais, e-mail marketing e publicidade on-line. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Midiatização e comunicação em redes sociais. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Design digital aplicado à criação de interfaces e conteúdos. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Softwares gráficos e ferramentas de monitoramento on-line. <br/><br/>

              <strong>Habilidades:</strong> <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Desenvolver layouts e composições visuais estratégicas. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Adaptar narrativas ao público-alvo. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Identificar necessidades do cliente e definir estratégias de marketing. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Analisar dados e resultados on-line. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Utilizar linguagem técnica na comunicação profissional. <br/><br/>

              <strong>Atitudes/Valores:</strong> <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Trabalho em equipe e postura colaborativa. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Respeito à propriedade intelectual e ética profissional. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Responsabilidade com prazos e sigilo de informações. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Organização e zelo pelos equipamentos. <br/>

            </AccordionSection>

            <AccordionSection id="uc3" title="UC3 - Planejar produtos para web." icon={Layers}>
              
              <strong>Conhecimentos:</strong> <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Evolução da web (1.0, 2.0 e 3.0) e tendências de mercado. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Briefing, contratos, orçamentos e aspectos de direito digital. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Arquitetura da informação, acessibilidade, navegabilidade e usabilidade. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Sites responsivos e estrutura semântica. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Etapas de produção: fluxograma, wireframe e prototipagem. <br/><br/>

              <strong>Habilidades:</strong> <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Interpretar briefing e identificar necessidades do cliente. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Aplicar princípios de arquitetura, acessibilidade e usabilidade. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Produzir fluxogramas, wireframes e documentação de projetos web. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Elaborar contratos e orçamentos. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Comunicar ideias com clareza e utilizar termos técnicos. <br/><br/>

              <strong>Atitudes/Valores:</strong> <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Trabalho colaborativo em equipe. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Respeito à propriedade intelectual e ética profissional. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Sigilo e responsabilidade no tratamento de informações. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Zelo pelo uso adequado de equipamentos. <br/>

            </AccordionSection>
            <AccordionSection id="uc4" title="UC4 - Desenvolver produtos para web." icon={Layers}>
              
              <strong>Conhecimentos:</strong> <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Lógica de programação: algoritmos, variáveis, operadores e estruturas condicionais. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Linguagens web: HTML5 e CSS3. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Interatividade com JavaScript e jQuery. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> CMS: WordPress, Blogger ou similares. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Produção, testes e publicação de websites. <br/><br/>

              <strong>Habilidades:</strong> <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Estruturar e formatar páginas web (HTML e CSS). <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Implementar interatividade em sites. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Criar blogs e gerenciar conteúdos multimídia. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Adaptar layouts considerando acessibilidade e público-alvo. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Publicar e testar websites. <br/><br/>

              <strong>Atitudes/Valores:</strong> <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Trabalho em equipe e flexibilidade profissional. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Respeito à propriedade intelectual e ética profissional. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Responsabilidade e sigilo no tratamento de informações. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Zelo pelo uso adequado de equipamentos. <br/>

            </AccordionSection>
              <AccordionSection id="uc5" title="UC5 - Editar vídeo para web." icon={Layers}>
                
                <strong>Conhecimentos:</strong> <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Linguagem audiovisual: enquadramentos, ângulos, movimentos de câmera e tipos de cortes. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Tipos de vídeo: documentário, institucional, promocional, social e cinematográfico. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Roteiro: conceito e estrutura. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Edição de vídeo: timeline, efeitos, transições, correção de cor e inserção de áudio. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Resolução, formatos de arquivo, codecs e exportação (render). <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Composição gráfica e aplicação de trilhas sonoras e locuções. <br/><br/>

                <strong>Habilidades:</strong> <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Analisar roteiro e necessidades do cliente. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Editar vídeos conforme proposta e aplicar conceitos audiovisuais. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Inserir e sincronizar áudio ao vídeo. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Criar composições gráficas e aplicar tratamento de cor. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Operar software de edição e exportar vídeos corretamente. <br/><br/>

                <strong>Atitudes/Valores:</strong> <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Trabalho colaborativo e respeito à equipe. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Respeito à propriedade intelectual e ética profissional. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Responsabilidade no cumprimento de prazos e sigilo de informações. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Zelo pelo uso adequado de equipamentos. <br/>

              </AccordionSection>

              <AccordionSection id="uc6" title="UC6 - Projeto Integrador Produção e Design para Web" icon={Layers} >

                <p>Na UC6, os alunos desenvolvem um projeto integrador que abrange a linguagem front end com todos os conhecimentos adquiridos ao longo das UCs. 
                  O projeto é conduzido visando o planejamento, prototipagem, testes até a implementação final.</p>
              

              </AccordionSection> 
              <AccordionSection id="uc7" title="UC7 -  Criar motion graphics." icon={Layers}>
                
                <strong>Conhecimentos:</strong> <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Motion graphics: aplicações, cases e mercado. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Storyboard, princípios de animação e organização de tempo. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Elementos e fundamentos do design gráfico aplicados ao vídeo. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Técnicas visuais, cor, textura e composição animada. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Videográficos, simulação 3D e identidade visual. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Softwares de vetorização, edição de imagem e composição de vídeo. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Sonoplastia, formatos, codecs e exportação de vídeo (render). <br/><br/>

                <strong>Habilidades:</strong> <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Aplicar storyboard e animar conforme roteiro. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Criar videográficos e composições animadas. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Inserir e sincronizar sons e efeitos na animação. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Operar softwares gráficos e de composição audiovisual. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Simular elementos 3D e exportar projetos finalizados. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Interpretar dados e aplicar conceitos de design na animação. <br/><br/>

                <strong>Atitudes/Valores:</strong> <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Trabalho colaborativo e postura profissional. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Respeito à propriedade intelectual. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Sigilo e responsabilidade no tratamento de informações. <br/>
                <ArrowRight className="ms-2 text-primary" size={18} /> Zelo pelo uso adequado de equipamentos. <br/>

              </AccordionSection>

                <AccordionSection id="uc8" title="UC8 -  Criar ilustração digital 2D." icon={Layers}>
                  
                  <strong>Conhecimentos:</strong> <br/>
                  <ArrowRight className="ms-2 text-primary" size={18} /> Repertório de ilustração: artistas, movimentos e estilos. <br/>
                  <ArrowRight className="ms-2 text-primary" size={18} /> Fundamentos do desenho: luz, sombra, perspectiva, proporção e composição. <br/>
                  <ArrowRight className="ms-2 text-primary" size={18} /> Técnicas tradicionais: lápis, aquarela, acrílico, nanquim, carvão e gravura. <br/>
                  <ArrowRight className="ms-2 text-primary" size={18} /> Ilustração e pintura digital em softwares gráficos. <br/>
                  <ArrowRight className="ms-2 text-primary" size={18} /> Cor: aplicação, tratamento e criação de paletas. <br/>
                  <ArrowRight className="ms-2 text-primary" size={18} /> Desenvolvimento de ilustração vetorial. <br/><br/>

                  <strong>Habilidades:</strong> <br/>
                  <ArrowRight className="ms-2 text-primary" size={18} /> Aplicar princípios de desenho na criação de ilustrações. <br/>
                  <ArrowRight className="ms-2 text-primary" size={18} /> Criar ilustrações digitais e vetoriais. <br/>
                  <ArrowRight className="ms-2 text-primary" size={18} /> Desenvolver composições e paletas de cores. <br/>
                  <ArrowRight className="ms-2 text-primary" size={18} /> Operar softwares de ilustração digital. <br/>
                  <ArrowRight className="ms-2 text-primary" size={18} /> Identificar referências artísticas e necessidades do cliente. <br/>
                  <ArrowRight className="ms-2 text-primary" size={18} /> Revisar e finalizar ilustrações. <br/><br/>

                  <strong>Atitudes/Valores:</strong> <br/>
                  <ArrowRight className="ms-2 text-primary" size={18} /> Trabalho colaborativo e postura profissional. <br/>
                  <ArrowRight className="ms-2 text-primary" size={18} /> Respeito à propriedade intelectual. <br/>
                  <ArrowRight className="ms-2 text-primary" size={18} /> Sigilo e responsabilidade no tratamento de informações. <br/>
                  <ArrowRight className="ms-2 text-primary" size={18} /> Zelo pelo uso adequado de equipamentos. <br/>
                </AccordionSection>   

                <AccordionSection id="uc9" title="UC9 - Criar concept art para animação 2D." icon={Layers}>
                  
                  <strong>Conhecimentos:</strong> <br/>
                  <ArrowRight className="ms-2 text-primary" size={18} /> Etapas de produção de animação: pré-produção, layout, storyboard e animatic. <br/>
                  <ArrowRight className="ms-2 text-primary" size={18} /> Pesquisa visual e painel semântico: referências de estilo, cores e animação. <br/>
                  <ArrowRight className="ms-2 text-primary" size={18} /> Criação de personagens: ficha técnica, posing e expressões faciais. <br/>
                  <ArrowRight className="ms-2 text-primary" size={18} /> Ilustração digital de cenários, objetos e personagens. <br/>
                  <ArrowRight className="ms-2 text-primary" size={18} /> Cor: aspectos físicos e psicológicos aplicados à animação. <br/>
                  <ArrowRight className="ms-2 text-primary" size={18} /> Linguagem audiovisual: enquadramentos, ângulos, movimentos de câmera e tipos de cortes. <br/>
                  <ArrowRight className="ms-2 text-primary" size={18} /> Argumento e roteiro: desenvolvimento e estrutura. <br/><br/>

                  <strong>Habilidades:</strong> <br/>
                  <ArrowRight className="ms-2 text-primary" size={18} /> Criar storyboard, layout e animatic. <br/>
                  <ArrowRight className="ms-2 text-primary" size={18} /> Desenvolver personagens e ilustrações digitais para animação. <br/>
                  <ArrowRight className="ms-2 text-primary" size={18} /> Criar painel semântico e paleta de cores. <br/>
                  <ArrowRight className="ms-2 text-primary" size={18} /> Atribuir ritmo, continuidade e composição de cenas. <br/>
                  <ArrowRight className="ms-2 text-primary" size={18} /> Operar software de ilustração digital e revisar acabamentos. <br/><br/>

                  <strong>Atitudes/Valores:</strong> <br/>
                  <ArrowRight className="ms-2 text-primary" size={18} /> Trabalho colaborativo e postura profissional. <br/>
                  <ArrowRight className="ms-2 text-primary" size={18} /> Respeito à propriedade intelectual. <br/>
                  <ArrowRight className="ms-2 text-primary" size={18} /> Sigilo e responsabilidade no tratamento de informações. <br/>
                  <ArrowRight className="ms-2 text-primary" size={18} /> Zelo pelo uso adequado de equipamentos. <br/>

                </AccordionSection>          
             <AccordionSection id="uc10" title="UC10 -  Criar animação digital 2D." icon={Layers}>
  
              <strong>Conhecimentos:</strong> <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Conceitos de animação: FPS, quadros e quadros-chave. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Doze princípios da animação: compressão, antecipação, encenação, continuidade, arco, exagero e apelo. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Tipos de animação: clássica, 2D e 3D. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Movimentos de câmera e métodos de animação: quadro a quadro e interpolação. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Software de animação vetorial: timeline, camadas, símbolos, cenas, máscaras, hierarquia, integração e exportação. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Building: preparação e organização de arquivos para animação. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Software de áudio: edição, composição, lipsync e sincronização com a animação. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Formatos de vídeo, codecs e exportação (vídeo, sequência de imagens e GIF). <br/><br/>

              <strong>Habilidades:</strong> <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Animar câmera, cenários, objetos e personagens. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Aplicar e sincronizar áudio na animação. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Operar softwares de animação vetorial e edição de áudio. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Organizar arquivos e cenas, revisar acabamento e exportar animações. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Aplicar princípios e métodos da animação e comunicar visualmente conceitos criativos. <br/><br/>

              <strong>Atitudes/Valores:</strong> <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Trabalho colaborativo e postura profissional. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Respeito à propriedade intelectual. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Sigilo e responsabilidade no tratamento de informações. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Zelo pelo uso adequado de equipamentos. <br/>

            </AccordionSection>

            <AccordionSection id="uc11" title="UC11 -Projeto Integrador Criação e Produção de Animações" icon={Layers} >

                <p>Na UC11, os alunos  alunos a criação de uma animação autoral que evidencie a criatividade e o uso das técnicas e todos os conhecimentos adquiridos ao longo das UCs. 
                  considerando a compreensão de uma lógica narrativa e que esteja de acordo com o mercado.</p>
              

              </AccordionSection> 

                    <AccordionSection id="uc12" title="UC12 -  Desenvolver game design." icon={Layers}>
                      
                      <strong>Conhecimentos:</strong> <br/>
                      <ArrowRight className="ms-2 text-primary" size={18} /> Contexto histórico e conceitos de games: jogo x diversão. <br/>
                      <ArrowRight className="ms-2 text-primary" size={18} /> Gêneros de jogos digitais: ação, aventura, plataforma, RPG, simulação, esportes, quebra-cabeça e outros. <br/>
                      <ArrowRight className="ms-2 text-primary" size={18} /> Estilos de games: diversão, educação, simulação e publicidade. <br/>
                      <ArrowRight className="ms-2 text-primary" size={18} /> Regras e estruturas formais: limites, obrigatoriedade, repetição, objetos, personagens e interface. <br/>
                      <ArrowRight className="ms-2 text-primary" size={18} /> Sistemas de jogos eletrônicos e complexidade. <br/>
                      <ArrowRight className="ms-2 text-primary" size={18} /> Narrativas digitais: resumo, roteiro e fluxos do gameplay. <br/>
                      <ArrowRight className="ms-2 text-primary" size={18} /> Documento de game design: visão geral, regras, AI, controles e variações. <br/>
                      <ArrowRight className="ms-2 text-primary" size={18} /> Lógica de programação aplicada a games. <br/><br/>

                      <strong>Habilidades:</strong> <br/>
                      <ArrowRight className="ms-2 text-primary" size={18} /> Criar regras, narrativas e roteiros para games. <br/>
                      <ArrowRight className="ms-2 text-primary" size={18} /> Elaborar documento de game design e fluxo do gameplay. <br/>
                      <ArrowRight className="ms-2 text-primary" size={18} /> Identificar gêneros, estilos, estruturas formais e sistemas de games. <br/>
                      <ArrowRight className="ms-2 text-primary" size={18} /> Aplicar raciocínio lógico na criação de jogos. <br/><br/>

                      <strong>Atitudes/Valores:</strong> <br/>
                      <ArrowRight className="ms-2 text-primary" size={18} /> Trabalho colaborativo e postura ética. <br/>
                      <ArrowRight className="ms-2 text-primary" size={18} /> Respeito à propriedade intelectual. <br/>
                      <ArrowRight className="ms-2 text-primary" size={18} /> Sigilo e responsabilidade no tratamento de informações. <br/>
                      <ArrowRight className="ms-2 text-primary" size={18} /> Zelo pelo uso adequado de equipamentos. <br/>

                    </AccordionSection>        

                    <AccordionSection id="uc13" title="UC13 - Criar concept art para webgame 2D." icon={Layers}>
                      
                      <strong>Conhecimentos:</strong> <br/>
                      <ArrowRight className="ms-2 text-primary" size={18} /> Pesquisa visual e painel semântico: referências de estilo, cores e animação. <br/>
                      <ArrowRight className="ms-2 text-primary" size={18} /> Linguagem audiovisual: enquadramentos, ângulos e movimentos de câmera. <br/>
                      <ArrowRight className="ms-2 text-primary" size={18} /> Criação de personagens: ficha técnica e ilustrações. <br/>
                      <ArrowRight className="ms-2 text-primary" size={18} /> Criação de objetos e itens de cena. <br/>
                      <ArrowRight className="ms-2 text-primary" size={18} /> Criação de cenários: fases e ambientações. <br/>
                      <ArrowRight className="ms-2 text-primary" size={18} /> Desenvolvimento de roteiro e storyboard. <br/>
                      <ArrowRight className="ms-2 text-primary" size={18} /> Pintura digital e ilustração vetorial. <br/><br/>

                      <strong>Habilidades:</strong> <br/>
                      <ArrowRight className="ms-2 text-primary" size={18} /> Criar personagens, objetos e cenários para webgames. <br/>
                      <ArrowRight className="ms-2 text-primary" size={18} /> Elaborar painel semântico, ficha técnica e roteiro de projeto. <br/>
                      <ArrowRight className="ms-2 text-primary" size={18} /> Operar softwares de ilustração vetorial e pintura digital. <br/>
                      <ArrowRight className="ms-2 text-primary" size={18} /> Comunicar visualmente conceitos criativos e aplicar raciocínio lógico. <br/><br/>

                      <strong>Atitudes/Valores:</strong> <br/>
                      <ArrowRight className="ms-2 text-primary" size={18} /> Trabalho colaborativo e postura ética. <br/>
                      <ArrowRight className="ms-2 text-primary" size={18} /> Respeito à propriedade intelectual e aos limites profissionais. <br/>
                      <ArrowRight className="ms-2 text-primary" size={18} /> Responsabilidade com prazos, sigilo e uso adequado de equipamentos. <br/>

                    </AccordionSection>         
                    <AccordionSection id="uc14" title="UC14 - Criar interface para webgame 2D." icon={Layers}>
                      
                      <strong>Conhecimentos:</strong> <br/>
                      <ArrowRight className="ms-2 text-primary" size={18} /> Elementos da interface: pontuação, vidas, regras, itens e tempo. <br/>
                      <ArrowRight className="ms-2 text-primary" size={18} /> Telas: formatos e resolução. <br/>
                      <ArrowRight className="ms-2 text-primary" size={18} /> Desenho de ícones e símbolos. <br/>
                      <ArrowRight className="ms-2 text-primary" size={18} /> Usabilidade e experiência do usuário. <br/>
                      <ArrowRight className="ms-2 text-primary" size={18} /> Fundamentos do design gráfico: equilíbrio, hierarquia, composição e contrastes. <br/>
                      <ArrowRight className="ms-2 text-primary" size={18} /> Técnicas visuais: profundidade, sutileza x ousadia, simetria x assimetria. <br/>
                      <ArrowRight className="ms-2 text-primary" size={18} /> Cor, textura e padronagem. <br/>
                      <ArrowRight className="ms-2 text-primary" size={18} /> Criação de interface: grid, paleta de cores, tipografia e diagramação. <br/><br/>

                      <strong>Habilidades:</strong> <br/>
                      <ArrowRight className="ms-2 text-primary" size={18} /> Criar interfaces e grid para webgames. <br/>
                      <ArrowRight className="ms-2 text-primary" size={18} /> Desenhar ícones e símbolos. <br/>
                      <ArrowRight className="ms-2 text-primary" size={18} /> Elaborar wireframe e proposta de usabilidade. <br/>
                      <ArrowRight className="ms-2 text-primary" size={18} /> Operar softwares de ilustração vetorial e tratamento de imagem. <br/>
                      <ArrowRight className="ms-2 text-primary" size={18} /> Comunicar visualmente conceitos e aplicar raciocínio lógico. <br/><br/>

                      <strong>Atitudes/Valores:</strong> <br/>
                      <ArrowRight className="ms-2 text-primary" size={18} /> Trabalho colaborativo e postura ética. <br/>
                      <ArrowRight className="ms-2 text-primary" size={18} /> Respeito à propriedade intelectual e sigilo na informação. <br/>
                      <ArrowRight className="ms-2 text-primary" size={18} /> Zelo pelo uso de equipamentos e limites profissionais. <br/>

                    </AccordionSection>  
              <AccordionSection id="uc15" title="UC15 - Produzir webgame 2D." icon={Layers}>
              
              <strong>Conhecimentos:</strong> <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Raciocínio lógico aplicado à produção de webgames. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Software de criação de jogos 2D: game engine e linguagem de marcação. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Ações e comportamentos interativos. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Cutscenes e animações para narrativa. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Sonoplastia: ruídos, efeitos, músicas e locuções. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Testes, correções e critérios de análise de experiência. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Exportação de webgames e aspectos técnicos. <br/><br/>

              <strong>Habilidades:</strong> <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Criar ações, comportamentos e animações para webgames. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Inserir áudio e efeitos sonoros. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Testar e aplicar critérios de análise de experiência. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Exportar webgames e operar software de criação 2D. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Aplicar raciocínio lógico e comunicar conceitos criativos. <br/><br/>

              <strong>Atitudes/Valores:</strong> <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Trabalho em equipe e postura ética. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Respeito à propriedade intelectual e sigilo de informações. <br/>
              <ArrowRight className="ms-2 text-primary" size={18} /> Cumprimento de prazos e zelo pelo uso de equipamentos. <br/>

            </AccordionSection>
              <AccordionSection id="uc16" title="UC16 - Projeto Integrador Produção e Design para Webgames" icon={Layers} >

                <p>Na UC16, os alunos desenvolve de um projeto de web game 2D, que se adeque às linguagens do mercado aplicando os conhecimentos adquiridos ao longo das UCs.                  
               Adequando os grandes clássicos dos jogos por meio de uma releitura que os insira no cotidiano e no meio atuais.  </p>

              </AccordionSection> 

              <span className="badge text-bg-primary p-2 me-2 mb-2">Produção e Design para Web</span>  
              <span className="badge text-bg-success p-2 me-2 mb-2">Criação e Produção de Animações </span>     
              <span className="badge text-bg-dark p-2 me-2 mb-2">Produção e Design para Webgames</span>  
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