import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Layers, ArrowRight, ExternalLink } from 'lucide-react';
import cursos from '../../data/cursos';

const Downloads = () => {
  const { cursoSlug } = useParams();
  const [ferramentas, setFerramentas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const curso = cursos.find(c => c.slug === cursoSlug);

  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.BASE_URL}cursos/${cursoSlug}/downloads.json`)
      .then(r => {
        if (!r.ok) throw new Error('Dados não encontrados');
        return r.json();
      })
      .then(data => { setFerramentas(data); setLoading(false); })
      .catch(err => { setError(err.message); setLoading(false); });
  }, [cursoSlug]);

  return (
    <div className="page-wrapper">
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="page-doc-header" style={{ borderColor: curso?.cor ?? 'var(--primary)' }}>
              <span
                className="page-doc-category"
                style={{ color: curso?.cor ?? 'var(--primary)', background: `${curso?.cor ?? '#6366f1'}14` }}
              >
                Downloads
              </span>
              <h1 className="page-doc-title">
                {curso?.nome}
              </h1>
              <p className="page-doc-subtitle">Senac Limeira</p>
            </div>

            {loading && (
              <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Carregando...</span>
                </div>
              </div>
            )}
            {error && <div className="alert alert-danger">{error}</div>}

            {!loading && !error && (
              <div className="card shadow-sm mb-4">
                <div className="card-header bg-light d-flex align-items-center">
                  <Layers className="me-2 text-primary" />
                  <strong>Links de acesso e downloads das ferramentas</strong>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled mb-0">
                    {ferramentas.map((item, index) => (
                      <li key={index} className="mb-2 d-flex align-items-start">
                        <ArrowRight className="me-2 text-primary mt-1" size={18} />
                        <span>
                          <strong>{item.nome}:</strong> {item.desc}{' '}
                          <a href={item.link} target="_blank" rel="noopener noreferrer" className="ms-1 text-decoration-none">
                            Acessar <ExternalLink size={14} />
                          </a>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            <footer className="text-center mt-5">
              <p className="small text-muted">Desenvolvido com JavaScript, React e Bootstrap</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Downloads;
