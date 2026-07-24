import { Link } from 'react-router-dom';
import { Code2, Network, Gamepad2, Palette, Settings, Laptop, ArrowRight } from 'lucide-react';
import cursos from '../data/cursos';

const iconMap = { Code2, Network, Gamepad2, Palette, Settings, Laptop, Code: Code2 };

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-hero">
        <div className="home-hero-content">
          <img className="home-logo"
            src="https://www.sp.senac.br/o/senac-theme/images/logo_senac_default.png"
            alt="Senac"
          />
          <h1 className="home-title">Informações dos Cursos Técnicos e Livres</h1>
          <p className="home-subtitle">Senac Limeira</p>
          <div className="home-stats">{cursos.length} cursos disponíveis</div>
        </div>
      </div>

      <div className="home-body">
        <div className="container">
          <p className="home-section-label">Escolha seu curso</p>
          <div className="row g-4 justify-content-center">
            {cursos.map(curso => {
              const Icon = iconMap[curso.icone] || Code2;
              return (
                <div className="col-md-6 col-lg-4" key={curso.id}>
                  <div className="course-card">
                    <div
                      className="course-card-header"
                      style={{
                        background: `linear-gradient(135deg, ${curso.cor}ee 0%, ${curso.cor}99 100%)`,
                      }}
                    >
                      <div className="course-card-icon">
                        <Icon size={34} color="white" strokeWidth={1.75} />
                      </div>
                      <span className="course-card-type">Curso Técnico</span>
                    </div>
                    <div className="course-card-body">
                      <h5 className="course-card-title">{curso.nome}</h5>
                      <p className="course-card-desc">{curso.descricao}</p>
                      <Link
                        to={`/${curso.slug}/ucs`}
                        className="course-card-btn"
                        style={{ '--c': curso.cor }}
                      >
                        Ver curso <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="home-footer">
            Desenvolvido com JavaScript, React e Bootstrap
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
