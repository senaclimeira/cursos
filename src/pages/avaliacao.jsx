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


const Avaliacao = () => {
    const navLinks = ["HTML5", "CSS3", "Bootstrap", "JavaScript", "React", "SQL", "Node.js", "Terminal"];

    return (
        <div className="bg-body-tertiary min-vh-100">

            <div className="container pt-4 pb-5 mt-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10 ">

                        <header className="page-header text-center mb-5">
                            {/* <span className="badge-html">Senac Limeira</span> */}
                            <img className="logo" src="https://www.sp.senac.br/o/senac-theme/images/logo_senac_default.png" alt="" />
                            <h1 className="display-6 ">
                                Curso Técnico em <span className="_text-primary fw-bold2">Desenvolvimento de Sistemas</span>
                            </h1>
                            <span className="badge-html">Senac Limeira</span>
                            {/* <p className="text-muted fs-2 fw-bold">Curso Técnico em Desenvolvimento de Sistemas.</p> */}
                        </header>

                        <div className="">

                            <div className="card mt-5">
                                <div className="card-header fw-bold fs-4">Avaliação</div>

                                <div className="card-body">

                                    <h5>Menção por indicador </h5>
                                    <div className="alert alert-info" role="alert">
                                        <strong>Durante o processo:</strong> <br />
                                        <ArrowRight className="ms-2 text-primary" size={18} /> Atendido - A <br />
                                        <ArrowRight className="ms-2 text-primary" size={18} /> Parcialmente Atendido - PA <br />
                                        <ArrowRight className="ms-2 text-primary" size={18} /> Não Atendido - NA <br />
                                    </div>
                                    <div className="alert alert-info" role="alert">
                                        <strong>Ao final da Unidade Curricular no Indicador:</strong> <br />
                                        <ArrowRight className="ms-2 text-primary" size={18} /> Atendido - A <br />
                                        <ArrowRight className="ms-2 text-primary" size={18} /> Não Atendido - NA <br />
                                    </div>
                                    <br />
                                    <h5>Menção por Unidade Curricular </h5>
                                    <div className="alert alert-info" role="alert">
                                        <ArrowRight className="ms-2 text-primary" size={18} /> Desenvolvida - D <br />
                                        <ArrowRight className="ms-2 text-primary" size={18} /> Não Desenvolvida - ND <br />
                                    </div>
                                    <br />
                                    <h5>Menção para Aprovação no Curso</h5>
                                    <div className="alert alert-info" role="alert">
                                        <ArrowRight className="ms-2 text-primary" size={18} /> Aprovado - AP <br />
                                        <ArrowRight className="ms-2 text-primary" size={18} /> Reprovado - RP <br />
                                    </div>
                                </div>
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

export default Avaliacao;