import { useParams } from 'react-router-dom';
import MarkdownPage from '../../components/MarkdownPage';
import cursos from '../../data/cursos';

const Informacoes = () => {
  const { cursoSlug } = useParams();
  const curso = cursos.find(c => c.slug === cursoSlug);
  const mdPath = `${import.meta.env.BASE_URL}cursos/${cursoSlug}/informacoes.md`;

  return (
    <div className="page-wrapper">
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-10">

            <div className="page-doc-header" style={{ borderColor: curso?.cor ?? 'var(--primary)' }}>
              <span
                className="page-doc-category"
                style={{ color: curso?.cor ?? 'var(--primary)', background: `${curso?.cor ?? '#6366f1'}14` }}
              >
                Informações
              </span>
              <h1 className="page-doc-title">
                {curso?.nome}
              </h1>
              <p className="page-doc-subtitle">Senac Limeira</p>
            </div>

            <div className="page-doc-card">
              <MarkdownPage path={mdPath} />
            </div>

            <p className="page-doc-footer">Desenvolvido com JavaScript, React e Bootstrap</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Informacoes;
