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
    Book, Bookmark, GraduationCap,
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

const Bibliografia = () => {
    const navLinks = ["HTML5", "CSS3", "Bootstrap", "JavaScript", "React", "SQL", "Node.js", "Terminal"];

    // Dados consolidados para evitar repetição
    const acervo = [
 {
        "titulo": "Design digital: conceitos e aplicações para websites, animações, vídeo e webgames",
        "autores": "GUERRA, F.; TERCE, M. L.",
        "editora": "Senac, 2019",
        "tipo": "Básica",
        "ucs": [1, 3, 9, 10, 12, 14]
    },
    {
        "titulo": "Pensar com Tipos: guia para designers, escritores, editores e estudantes",
        "autores": "LUPTON, E.",
        "editora": "Olhares, 2021",
        "tipo": "Complementar",
        "ucs": [1]
    },
    {
        "titulo": "Layout e edição de imagens para web",
        "autores": "VENANCIO JÚNIOR, S. J.",
        "editora": "Senac, 2020",
        "tipo": "Complementar",
        "ucs": [1]
    },
    {
        "titulo": "Socialholic: tudo o que você precisa saber sobre marketing nas mídias sociais",
        "autores": "POLO, F.; POLO, J. L.",
        "editora": "Senac, 2016",
        "tipo": "Básica",
        "ucs": [2]
    },
    {
        "titulo": "Portfólio digital de design: um guia prático para apresentar seus trabalhos online",
        "autores": "CLAZIE, I.",
        "editora": "Blucher, 2011",
        "tipo": "Complementar",
        "ucs": [2]
    },
    {
        "titulo": "Marketing Digital",
        "autores": "NOMURA, J. M.",
        "editora": "Senac, 2020",
        "tipo": "Complementar",
        "ucs": [2]
    },
    {
        "titulo": "Design de navegação web: otimizando a experiência do usuário",
        "autores": "KALBACH, J.",
        "editora": "Bookman, 2009",
        "tipo": "Complementar",
        "ucs": [3]
    },
    {
        "titulo": "Briefing: a gestão do projeto de design",
        "autores": "PHILLIPS, P. L.",
        "editora": "Blucher, 2009",
        "tipo": "Complementar",
        "ucs": [3]
    },
    {
        "titulo": "Desenvolvimento de aplicações para Internet",
        "autores": "MARINHO, A. L.; CRUZ, J. L. (Org.)",
        "editora": "Pearson Education, 2020",
        "tipo": "Básica",
        "ucs": [4]
    },
    {
        "titulo": "Aplicações gráficas para web",
        "autores": "BORGES, I. O.",
        "editora": "Senac, 2021",
        "tipo": "Complementar",
        "ucs": [4]
    },
    {
        "titulo": "Programador web: um guia para programação e manipulação de banco de dados",
        "autores": "LACERDA, I. M. F.; OLIVEIRA, A. L. S.",
        "editora": "Senac, 2019",
        "tipo": "Complementar",
        "ucs": [4]
    },
    {
        "titulo": "Você na tela: criação audiovisual para internet",
        "autores": "MOLETTA, A.",
        "editora": "Summus, 2019",
        "tipo": "Básica",
        "ucs": [5]
    },
    {
        "titulo": "A linguagem do cinema",
        "autores": "EDGAR-HUNT, R.; MARLAND, J.; RAWLE, S.",
        "editora": "Bookman, 2013",
        "tipo": "Complementar",
        "ucs": [5]
    },
    {
        "titulo": "Edição de áudio e vídeo",
        "autores": "FAXINA, E. (Org.)",
        "editora": "InterSaberes, 2018",
        "tipo": "Complementar",
        "ucs": [5]
    },
    {
        "titulo": "Adobe After Effects: O essencial em Motion Graphics e VFX",
        "autores": "AFFONSO, A.",
        "editora": "Editora Senac, 2022",
        "tipo": "Básica",
        "ucs": [7]
    },
    {
        "titulo": "Fundamentos de Design Criativo",
        "autores": "AMBROSE, G.; HARRIS, P.",
        "editora": "Bookman, 2012",
        "tipo": "Complementar",
        "ucs": [7, 9]
    },
    {
        "titulo": "Arte da animação: técnica e estética através da história",
        "autores": "LUCENA JÚNIOR, A.",
        "editora": "Senac, 2019",
        "tipo": "Complementar",
        "ucs": [7]
    },
    {
        "titulo": "Desenho de animação",
        "autores": "WELLS, P.; QUINN, J.; MILLS, L.",
        "editora": "Bookman, 2012",
        "tipo": "Básica",
        "ucs": [8]
    },
    {
        "titulo": "Como criar personagens",
        "autores": "CAVELAGNA, C.",
        "editora": "Europa, 2012",
        "tipo": "Complementar",
        "ucs": [8]
    },
    {
        "titulo": "Ilustração digital",
        "autores": "VIGNA, C.",
        "editora": "Senac, 2023",
        "tipo": "Complementar",
        "ucs": [8]
    },
    {
        "titulo": "Concept art e design de personagens",
        "autores": "RODRIGUES, L.",
        "editora": "Senac, 2023",
        "tipo": "Básica",
        "ucs": [9]
    },
    {
        "titulo": "Animação digital",
        "autores": "CHONG, A.",
        "editora": "Bookman, 2011",
        "tipo": "Básica",
        "ucs": [10]
    },
    {
        "titulo": "Stop Motion",
        "autores": "CARVALHO, A. L. P.",
        "editora": "InterSaberes, 2022",
        "tipo": "Complementar",
        "ucs": [10]
    },
    {
        "titulo": "Introdução ao game design",
        "autores": "CAVALEIRO, A.",
        "editora": "Senac, 2023",
        "tipo": "Básica",
        "ucs": [12]
    },
    {
        "titulo": "Level up: um guia para o design de grandes jogos",
        "autores": "LUZ, A. R.; ROGERS, S.",
        "editora": "Blucher, 2018",
        "tipo": "Complementar",
        "ucs": [12]
    },
    {
        "titulo": "Design de personagens",
        "autores": "TAVARES, L. M.",
        "editora": "InterSaberes, 2022",
        "tipo": "Básica",
        "ucs": [13]
    },
    {
        "titulo": "Narrativas e personagens para jogos",
        "autores": "NETO, E. A. G.; LIMA, L. S. D.",
        "editora": "Saraiva, 2017",
        "tipo": "Complementar",
        "ucs": [13]
    },
    {
        "titulo": "Usabilidade e interface homem-máquina",
        "autores": "BELMIRO, J. (Org.)",
        "editora": "Pearson Education, 2017",
        "tipo": "Complementar",
        "ucs": [14]
    },
    {
        "titulo": "Teoria dos jogos",
        "autores": "FERNANDEZ, B. P. M.; BÊRNI, D. D. A.",
        "editora": "Saraiva, 2014",
        "tipo": "Complementar",
        "ucs": [14]
    },
    {
        "titulo": "Desenvolvimento de jogos em HTML5",
        "autores": "BONATTI, D.",
        "editora": "Brasport, 2014",
        "tipo": "Básica",
        "ucs": [15]
    },
    {
        "titulo": "Desenvolvimento de games",
        "autores": "NOVAK, J.",
        "editora": "Cengage Learning, 2017",
        "tipo": "Complementar",
        "ucs": [15]
    },
    {
        "titulo": "Jogos digitais",
        "autores": "ZABOT, D.; MATOS, E.",
        "editora": "Érica, 2018",
        "tipo": "Complementar",
        "ucs": [15]
    }
       
       
    ];
    return (
        <div className="bg-body-tertiary min-vh-100">

            <div className="container pt-4 pb-5 mt-5">
                <div className="row justify-content-center">
                    <div className="col-lg-12">

                        <header className="page-header text-center mb-5">
                            <img className="logo" src="https://www.sp.senac.br/o/senac-theme/images/logo_senac_default.png" alt="" />
                            <h1 className="display-6 ">
                                Curso Técnico em <span className="fw-bold2">Multimídia</span>
                            </h1>
                            <span className="badge-html">Senac Limeira</span>
                        </header>


                        <div className="row g-4">
                            {acervo.map((livro, index) => (
                                <div className="col-md-6 col-xl-6" key={index}>
                                    <div className="card h-100 border-0 shadow-sm hover-shadow transition">
                                        <div className="card-body">
                                            {/* <div className="d-flex align-items-start justify-content-between mb-3">
                                                <div className="p-2 bg-light rounded text-primary">
                                                    <Book size={24} />
                                                </div>
                                                <span className={`badge ${livro.tipo === 'Básica' ? 'bg-success-subtle text-success' : 'bg-info-subtle text-info'}`}>
                                                    {livro.tipo}
                                                </span>
                                            </div> */}

                                            <h5 className="card-title fw-bold text-primary mb-1">{livro.titulo}</h5>
                                            <p className="small text-muted mb-3">{livro.autores} | {livro.editora}</p>

                                            <hr className="my-3 opacity-10" />

                                            <div className="d-flex flex-wrap gap-1 justify-content-between">
                                                <div className="d-flex flex-wrap gap-1">
                                                    {livro.ucs.map(uc => ( 
                                                        <span key={uc} className="badge rounded-pill bg-success" style={{ fontSize: '0.7rem' }}>
                                                            UC {uc}
                                                        </span>
                                                    ))}
                                                </div>
                                                <span className={`badge ${livro.tipo === 'Básica' ? 'bg-success-subtle text-success' : 'bg-info-subtle text-info'}`}>
                                                    {livro.tipo}
                                                </span>                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <footer className="mt-5 p-4 bg-white rounded shadow-sm text-center">
                            <div className="d-flex justify-content-center gap-4 text-muted small">
                                <span><Bookmark size={14} className="me-1" /> Básica: Essencial</span>
                                <span><Layers size={14} className="me-1" /> Complementar: Aprofundamento</span>
                            </div>
                        </footer>


                        <footer className="text-center mt-5">
                            <p className="small text-muted">Desenvolvido por Luis Ribeiro com React, JS e Bootstrap</p>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bibliografia;