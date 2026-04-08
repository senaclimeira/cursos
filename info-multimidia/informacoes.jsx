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





const Informacoes = () => {
    const navLinks = ["HTML5", "CSS3", "Bootstrap", "JavaScript", "React", "SQL", "Node.js", "Terminal"];

    return (
        <div className="bg-body-tertiary min-vh-100">

            <div className="container pt-4 pb-5 mt-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10">

                        <header className="page-header text-center mb-5">
                            {/* <span className="badge-html">Senac Limeira</span> */}
                            <img className="logo" src="https://www.sp.senac.br/o/senac-theme/images/logo_senac_default.png" alt="" />
                            <h1 className="display-6 ">
                                Curso Técnico em <span className="_text-primary fw-bold2">Multimídia </span>
                            </h1>
                            <span className="badge-html">Senac Limeira</span>
                            {/* <p className="text-muted fs-2 fw-bold">Curso Técnico em Desenvolvimento de Sistemas.</p> */}
                        </header>

                        <div className="">

                            <div className="list-group">
                                <a href="#" className="list-group-item list-group-item-action"><strong>Uniforme:</strong> <br />
                                    <ArrowRight className="ms-2 text-primary" size={18} /> Não temos uniforme padrão. <br />
                                    <ArrowRight className="ms-2 text-primary" size={18} /> A turma pode elaborar uma camiseta. <br />
                                    <ArrowRight className="ms-2 text-primary" size={18} /> A camiseta será avaliada pela instituição devido a normas com relação a logomarca do SENAC.</a>
                                <a href="#" className="list-group-item list-group-item-action"><strong>Biblioteca Virtual do Senac:</strong> <br />
                                    <ArrowRight className="ms-2 text-primary" size={18} /> (Disponível 24 horas com coleções de e-books, jornais, periódicos e normas técnicas).
                                </a>
                                <a href="#" className="list-group-item list-group-item-action"><strong>Estágio:</strong> <br />
                                    <ArrowRight className="ms-2 text-primary" size={18} /> Não obrigatório. <br />
                                </a>
                                <a href="#" className="list-group-item list-group-item-action"><strong>Representante de sala:</strong> <br />
                                    <ArrowRight className="ms-2 text-primary" size={18} /> Eleito pelos próprios alunos no início do curso. <br />
                                    <ArrowRight className="ms-2 text-primary" size={18} /> Responsável por representar a turma em reuniões e eventos. <br />
                                    <ArrowRight className="ms-2 text-primary" size={18} /> Canal de comunicação entre alunos e instituição.
                                </a>
                                <a href="#" className="list-group-item list-group-item-action"><strong>Característica do mercado de Multimídia:</strong> <br />
                                    <ArrowRight className="ms-2 text-primary" size={18} />Agências de marketing digital e publicidade <br />
                                    <ArrowRight className="ms-2 text-primary" size={18} /> Produtoras de audiovisual, filmes e games <br />
                                    <ArrowRight className="ms-2 text-primary" size={18} /> Empresas de comunicação (TV, rádio, jornais online)<br />
                                    <ArrowRight className="ms-2 text-primary" size={18} /> Freelancer - produzindo conteúdos para redes sociais <br/>
                                    <ArrowRight className="ms-2 text-primary" size={18} /> Domínio do inglês como grande diferencial
                                </a>
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

export default Informacoes;