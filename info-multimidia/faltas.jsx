import React from 'react';
import {
    Layers,
    Network, // Substituindo o Sitemap que causou o erro
    Image as ImageIcon,
    CheckSquare,
    Code,
    List,
    Table as TableIcon,
    Terminal, Bookmark, ArrowRight
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

const Faltas = () => {
    const navLinks = ["HTML5", "CSS3", "Bootstrap", "JavaScript", "React", "SQL", "Node.js", "Terminal"];

    const unidadesCurriculares = [
        { uc: 1, nome: "Desenvolver layout", aulas: 18, ch: "72h", falta25: "18h", qtdeDias: "4 dias" },
        { uc: 2, nome: "Criar projetos gráficos para marketing digital", aulas: 9, ch: "36h", falta25: "9h", qtdeDias: "2 dias" },
        { uc: 3, nome: "Planejar produtos para web", aulas: 9, ch: "36h", falta25: "9h", qtdeDias: "2 dias" },
        { uc: 4, nome: "Desenvolver produtos para web", aulas: 27, ch: "108h", falta25: "27h", qtdeDias: "6 dias" },
        { uc: 5, nome: "Editar vídeo para web", aulas: 9, ch: "36h", falta25: "9h", qtdeDias: "2 dias" },
        { uc: 6, nome: "Projeto integrador produção e design para web", aulas: 6, ch: "24h", falta25: "6h", qtdeDias: "1 dias" },
        { uc: 7, nome: "Criar motion graphics", aulas: 12, ch: "48h", falta25: "12h", qtdeDias: "3 dias" },
        { uc: 8, nome: "Criar ilustração digital 2D", aulas: 9, ch: "36h", falta25: "9h", qtdeDias: "2 dias" },
        { uc: 9, nome: "Criar concept art para animação 2D", aulas: 9, ch: "36h", falta25: "9h", qtdeDias: "2 dias" },
        { uc: 10, nome: "Criar animação digital 2D ", aulas: 27, ch: "108h", falta25: "27h", qtdeDias: "6 dias" },
        { uc: 11, nome: "Projeto integrador criação e produção de animações", aulas: 6, ch: "24h", falta25: "16h", qtdeDias: "1 dias" },
        { uc: 12, nome: "Desenvolver game design", aulas: 12, ch: "48h", falta25: "12h", qtdeDias: "3 dias" },
        { uc: 13, nome: "Criar concept art para webgame 2D", aulas: 9, ch: "36h", falta25: "9h", qtdeDias: "2 dias" },
        { uc: 14, nome: "Criar interface para webgame 2D", aulas: 9, ch: "36h", falta25: "9h", qtdeDias: "2 dias" },
        { uc: 15, nome: "Produzir webgame 2D", aulas: 24, ch: "96h", falta25: "24h", qtdeDias: "6 dias" },
        { uc: 16, nome: "Projeto integrador produção e design para webgames", aulas: 5, ch: "20h", falta25: "5h", qtdeDias: "1 dias" },
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


                        <div className="table-responsive shadow-sm rounded">
                            <table className="table table-hover table-bordered mb-0 align-middle">
                                <thead className="table-light">
                                    <tr className="text-center text-uppercase">
                                        <th style={{ width: '50px' }}>UC</th>
                                        <th>Unidade Curricular</th>
                                        <th>Qtde Aula</th>
                                        <th>CH</th>
                                        <th className="bg-warning-subtle text-warning-emphasis">25% Falta</th>
                                        <th className="bg-warning-subtle text-warning-emphasis">Qtde Aula (Dias)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {unidadesCurriculares.map((item) => (
                                        <tr key={item.uc}>
                                            <td className="text-center fw-bold">{item.uc}</td>
                                            <td>{item.nome}</td>
                                            <td className="text-center">{item.aulas}</td>
                                            <td className="text-center">{item.ch}</td>
                                            <td className="text-center fw-bold bg-danger text-white">{item.falta25}</td>
                                            <td className="text-center fw-bold text-dark bg-warning">{item.qtdeDias}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <footer className="mt-5 p-4 bg-white rounded shadow-sm">

                            <strong>Pontos de atenção:</strong> <br />
                            <ArrowRight className="ms-2 text-primary" size={18} /> Acompanhamento de faltas <br />
                            <ArrowRight className="ms-2 text-primary" size={18} /> Atestado Médico <br />
                            <ArrowRight className="ms-2 text-primary" size={18} /> Reprovação por falta <br />

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

export default Faltas;