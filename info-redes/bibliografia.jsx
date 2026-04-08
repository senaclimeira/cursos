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
                titulo: "Redes de computadores: guia total",
                autores: "SOUSA, L. B.",
                editora: "Érica, 2014",
                tipo: "Básica",
                ucs: [1, 9]
            },
            {
                titulo: "Redes de computadores e internet",
                autores: "COMER, D. E.",
                editora: "Bookman, 2016",
                tipo: "Básica",
                ucs: [2]
            },
            {
                titulo: "Cabeamento estruturado: desvendando cada passo: do projeto à instalação",
                autores: "MARIN, P. S.",
                editora: "Érica, 2013",
                tipo: "Complementar",
                ucs: [1, 8]
            },
            {
                titulo: "Montagem de redes locais: prático e didático",
                autores: "HAYAMA, M. M.",
                editora: "Érica, 2011",
                tipo: "Complementar",
                ucs: [2]
            },
            {
                titulo: "Segurança em redes sem fio",
                autores: "RUFINO, N. M. de O.",
                editora: "Novatec, 2015",
                tipo: "Básica",
                ucs: [12]
            },
            {
                titulo: "Microsoft Windows Server 2016: fundamentos",
                autores: "THOMPSON, M. A.",
                editora: "Érika, 2017",
                tipo: "Básica",
                ucs: [3]
            },
            {
                titulo: "Linux para servidores: da instalação à virtualização",
                autores: "MARTINI, L. A.; MAIEVES, G. T.",
                editora: "Viena, 2013",
                tipo: "Complementar",
                ucs: [3, 14]
            },
            {
                titulo: "CCNA 6.0: guia completo de estudo",
                autores: "FILIPPETTI, M. A.",
                editora: "Alta Books, 2019",
                tipo: "Básica",
                ucs: [5, 6]
            },
            {
                titulo: "Laboratórios de tecnologias Cisco em infraestrutura de redes",
                autores: "BRITO, S. H. B.",
                editora: "Novatec, 2014",
                tipo: "Complementar",
                ucs: [5, 6]
            },
            {
                titulo: "Análise de tráfego em redes TCP/IP",
                autores: "FILHO, J. E. M.",
                editora: "Novatec, 2013",
                tipo: "Básica",
                ucs: [9]
            },
            {
                titulo: "Técnicas de invasão: aprenda as técnicas usadas por hackers em invasões reais",
                autores: "FRAGA, B.",
                editora: "Labrador, 2019",
                tipo: "Básica",
                ucs: [11]
            },
            {
                titulo: "Segurança de computadores e teste de invasão",
                autores: "BASTA, A.; BASTA, N.; BROWN, M.",
                editora: "Cengage Learning, 2014",
                tipo: "Complementar",
                ucs: [11, 12, 14]
            },
            {
                titulo: "Criptografia e segurança de redes: princípios e práticas",
                autores: "STALLINGS, W.",
                editora: "Pearson Universidades, 2014",
                tipo: "Básica",
                ucs: [13]
            },
            {
                titulo: "Implantando a governança de TI: da estratégia à gestão de processos e serviços",
                autores: "FERNANDES, A. A.",
                editora: "Brasport, 2014",
                tipo: "Básica",
                ucs: [15]
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
                                Curso Técnico em <span className="fw-bold2">Redes de Computdores</span>
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