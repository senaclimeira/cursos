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
        { uc: 1, nome: "Elaborar projetos de sistemas", aulas: 18, ch: "60h", falta25: "15h", qtdeDias: "4 dias" },
        { uc: 2, nome: "Elaborar documentação de sistemas", aulas: 11, ch: "36h", falta25: "9h", qtdeDias: "2 dias" },
        { uc: 3, nome: "Modelar e estruturar banco de dados", aulas: 18, ch: "60h", falta25: "15h", qtdeDias: "4 dias" },
        { uc: 4, nome: "Administrar e implantar servidores de banco de dados", aulas: 24, ch: "84h", falta25: "21h", qtdeDias: "6 dias" },
        { uc: 5, nome: "Desenvolver algoritmos e linguagem orientada a objetos", aulas: 31, ch: "108h", falta25: "27h", qtdeDias: "7 dias" },
        { uc: 6, nome: "Desenvolver interface de usuário e usabilidade de aplicação desktop", aulas: 28, ch: "96h", falta25: "24h", qtdeDias: "6 dias" },
        { uc: 7, nome: "Programar aplicação desktop com integração em servidores de banco de dados", aulas: 31, ch: "108h", falta25: "27h", qtdeDias: "7 dias" },
        { uc: 8, nome: "Executar testes, melhorias e versionamento de aplicativo desktop", aulas: 18, ch: "60h", falta25: "15h", qtdeDias: "4 dias" },
        { uc: 9, nome: "Desenvolver interface de usuário e usabilidade de aplicação web", aulas: 28, ch: "96h", falta25: "24h", qtdeDias: "6 dias" },
        { uc: 10, nome: "Programar aplicação web com integração em servidores de banco de dados", aulas: 31, ch: "108h", falta25: "27h", qtdeDias: "7 dias" },
        { uc: 11, nome: "Executar testes, melhoria e versionamento de aplicativo web", aulas: 18, ch: "60h", falta25: "15h", qtdeDias: "4 dias" },
        { uc: 12, nome: "Desenvolver elementos visuais, interface de usuário e usabilidade de aplicação mobile", aulas: 28, ch: "96h", falta25: "24h", qtdeDias: "6 dias" },
        { uc: 13, nome: "Programar aplicativo mobile com integração de banco de dados embarcado e serviços em nuvem", aulas: 31, ch: "108h", falta25: "27h", qtdeDias: "7 dias" },
        { uc: 14, nome: "Executar testes, melhorias e versionamento de aplicativo mobile.", aulas: 18, ch: "60h", falta25: "15h", qtdeDias: "4 dias" },
        { uc: 15, nome: "Projeto Integrador Técnico em Desenvolvimento de Sistemas", aulas: 18, ch: "60h", falta25: "15h", qtdeDias: "4 dias" },
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