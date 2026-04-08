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
        { uc: 1, nome: "Planejar e executar a instalação de redes locais de computadores", aulas: 28, ch: "96h", falta25: "24h", qtdeDias: "6 dias" },
        { uc: 2, nome: "Planejar e executar a manutenção de redes locais de computadores", aulas: 28, ch: "96h", falta25: "24h", qtdeDias: "6 dias" },
        { uc: 3, nome: "Planejar e executar a instalação, a configuração e o monitoramento de sistemas operacionais de redes locais (servidores)", aulas: 28, ch: "96h", falta25: "24h", qtdeDias: "6 dias" },
        { uc: 4, nome: "Projeto integrador assistente de operação de redes de computadores", aulas: 6, ch: "20h", falta25: "05h", qtdeDias: "1 dia" },
        { uc: 5, nome: "Implementar protocolos de rede em roteadores e switches", aulas: 28, ch: "96h", falta25: "24h", qtdeDias: "6 dias" },
        { uc: 6, nome: "Implementar roteamento e switching", aulas: 28, ch: "96h", falta25: "24h", qtdeDias: "6 dias" },
        { uc: 7, nome: "Planejar e executar a manutenção de servidores", aulas: 14, ch: "48h", falta25: "12h", qtdeDias: "3 dias" },
        { uc: 8, nome: "Implementar cabeamento estruturado e telefonia IP", aulas: 21, ch: "72h", falta25: "18h", qtdeDias: "5 dias" },
        { uc: 9, nome: "Implementar política de administração de redes e serviços", aulas: 18, ch: "60h", falta25: "15h", qtdeDias: "4 dias" },
        { uc: 10, nome: "Projeto Integrador Assistente de Implantação e Administração de Infraestrutura de Redes de Computadores", aulas: 9, ch: "30h", falta25: "7,5h", qtdeDias: "2 dias" },
        { uc: 11, nome: "Planejar e implementar a segurança física e lógica em redes de computadores", aulas: 21, ch: "72h", falta25: "18h", qtdeDias: "5 dias" },
        { uc: 12, nome: "Planejar e implementar a segurança em redes sem fio", aulas: 11, ch: "36h", falta25: "09h", qtdeDias: "2 dias" },
        { uc: 13, nome: "Planejar e implementar a criptografia de dados e certificados digitais", aulas: 13, ch: "44h", falta25: "11h", qtdeDias: "3 dias" },
        { uc: 14, nome: "Planejar e implementar a segurança em servidores Windows e Linux", aulas: 21, ch: "72h", falta25: "18h", qtdeDias: "5 dias" },
        { uc: 15, nome: "Implantar etapas de gerenciamento de projetos e governança de processos em TI", aulas: 11, ch: "36h", falta25: "09h", qtdeDias: "2 dias" },
        { uc: 16, nome: "Projeto Integrador Assistente de Segurança em Redes de Computadores", aulas: 9, ch: "30h", falta25: "7,5h", qtdeDias: "2 dias" }
    ];
    return (
        <div className="bg-body-tertiary min-vh-100">

            <div className="container pt-4 pb-5 mt-5">
                <div className="row justify-content-center">
                    <div className="col-lg-12">

                        <header className="page-header text-center mb-5">
                            <img className="logo" src="https://www.sp.senac.br/o/senac-theme/images/logo_senac_default.png" alt="" />
                            <h1 className="display-6 ">
                                Curso Técnico em <span className="fw-bold2">Redes de Computadores</span>
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