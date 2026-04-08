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
            titulo: "Análise e projeto de sistemas",
            autores: "DENNIS, A.; WIXON, B. H.; ROTH, R. M.",
            editora: "LTC, 2014",
            tipo: "Básica",
            ucs: [1, 2]
        },
        {
            titulo: "Sistemas de informação",
            autores: "BATISTA, E. de O.",
            editora: "Saraiva, 2017",
            tipo: "Complementar",
            ucs: [1, 2]
        },
        {
            titulo: "Uml: guia do usuário",
            autores: "BOOCH, G.; JACOBSON, I.; RUMBAUGH, J.",
            editora: "Campus, 2017",
            tipo: "Complementar",
            ucs: [1, 2]
        },
        {
            titulo: "Projeto e modelagem de banco de dados",
            autores: "NADEU, T.; JAGADISH, H. V.",
            editora: "Alta Books, 2014",
            tipo: "Mista (Básica/Comp.)",
            ucs: [3, 4]
        },
        {
            titulo: "Projeto de banco de dados: uma visão prática",
            autores: "MACHADO, F. N. R.; ABREU, M. P. de.",
            editora: "Érica: Saraiva, 2018",
            tipo: "Mista (Básica/Comp.)",
            ucs: [3, 4]
        },
        {
            titulo: "Introdução à linguagem SQL: abordagem prática",
            autores: "NIELD, T.",
            editora: "Novatec, 2019",
            tipo: "Complementar",
            ucs: [3, 4, 7]
        },
        {
            titulo: "Orientação a objetos em C#",
            autores: "ARAUJO, E. C.",
            editora: "Casa do Código, 2020",
            tipo: "Básica",
            ucs: [5]
        },
        {
            titulo: "Entendendo algoritmos: um guia ilustrado",
            autores: "BHARGAVA, A. Y.",
            editora: "Novatec, 2017",
            tipo: "Complementar",
            ucs: [5]
        },
        {
            titulo: "Análise orientada a objetos",
            autores: "CORREIA, C. H.; TAFNER, M. A.",
            editora: "Visual books, 2018",
            tipo: "Complementar",
            ucs: [5, 6]
        },
        {
            titulo: "C# e visual studio desenvolvimento desktop",
            autores: "ARAUJO, E. C.",
            editora: "Casa do Código, 2020",
            tipo: "Básica",
            ucs: [6, 7]
        },
        {
            titulo: "Programação em C# para iniciantes",
            autores: "DIMES, T.",
            editora: "Babelcube Books, 2016",
            tipo: "Complementar",
            ucs: [6, 7]
        },
        {
            titulo: "Arquitetura limpa",
            autores: "MARTIN, R. C.",
            editora: "Alta Books, 2019",
            tipo: "Básica",
            ucs: [8, 10, 11, 14]
        },
        {
            titulo: "Test-driven development (TDD) com .NET",
            autores: "ANICHE, M.",
            editora: "Casa do Código, 2013",
            tipo: "Complementar",
            ucs: [8]
        },
        {
            titulo: "Qualidade de software na prática",
            autores: "SAMPAIO, C.",
            editora: "Ciência Moderna, 2014",
            tipo: "Complementar",
            ucs: [8, 11, 14]
        },
        {
            titulo: "Front-End: curso completo de html, css e js",
            autores: "Gabriel, P. A.",
            editora: "Tech Stuff House, 2022",
            tipo: "Básica",
            ucs: [9]
        },
        {
            titulo: "Ergodesign e arquitetura de informação",
            autores: "AGNER, L.",
            editora: "Senac, 2018",
            tipo: "Complementar",
            ucs: [9]
        },
        {
            titulo: "Introdução e boas práticas em UX Design",
            autores: "TEIXEIRA, F.",
            editora: "Casa do Código, 2014",
            tipo: "Complementar",
            ucs: [9]
        },
        {
            titulo: "ASP.NET Core MVC e Entity Framework",
            autores: "ARAUJO, E. C.",
            editora: "Casa do Código, 2020",
            tipo: "Básica",
            ucs: [10]
        },
        {
            titulo: "Web Services REST com ASP .NET Web API",
            autores: "SIÉCOLA, P.",
            editora: "Casa do Código, 2021",
            tipo: "Complementar",
            ucs: [10]
        },
        {
            titulo: "Produtividade em C#",
            autores: "RALHA, C.",
            editora: "Casa do Código, 2021",
            tipo: "Básica",
            ucs: [11]
        },
        {
            titulo: "Design de aplicativos",
            autores: "Cardoso, L. C.",
            editora: "InterSaberes, 2022",
            tipo: "Básica",
            ucs: [12]
        },
        {
            titulo: "Ergonomia e usabilidade",
            autores: "CYBIS, W.; BETIOL, A. H.; FAUST, R.",
            editora: "Novatec, 2015",
            tipo: "Complementar",
            ucs: [12]
        },
        {
            titulo: "Internet das coisas para desenvolvedores",
            autores: "OGLIARI, S. R.",
            editora: "Novatec, 2019",
            tipo: "Complementar",
            ucs: [12, 13]
        },
        {
            titulo: "Xamarin Forms e MVVM",
            autores: "ARAUJO, E. C.",
            editora: "Casa do Código, 2021",
            tipo: "Básica",
            ucs: [13]
        },
        {
            titulo: "Modernização de aplicação no Microsoft Azure",
            autores: "MICROSOFT",
            editora: "Casa do Código, 2021",
            tipo: "Complementar",
            ucs: [13]
        },
        {
            titulo: "Testes de aplicações mobile",
            autores: "MOLINARI, L.",
            editora: "Senac, 2018",
            tipo: "Básica",
            ucs: [14]
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
                                Curso Técnico em <span className="fw-bold2">Desenvolvimento de Sistemas</span>
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