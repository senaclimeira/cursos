import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BookOpen, BookMarked } from 'lucide-react';
import cursos from '../../data/cursos';

const Bibliografia = () => {
  const { cursoSlug } = useParams();
  const [acervo, setAcervo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const curso = cursos.find(c => c.slug === cursoSlug);

  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.BASE_URL}cursos/${cursoSlug}/bibliografia.json`)
      .then(r => {
        if (!r.ok) throw new Error('Dados não encontrados');
        return r.json();
      })
      .then(data => { setAcervo(data); setLoading(false); })
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
                Bibliografia
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
              <div className="row g-3">
                {acervo.map((livro, index) => {
                  const isBasica = livro.tipo === 'Básica';
                  return (
                    <div className="col-md-6" key={index}>
                      <div className="bib-card">
                        <div
                          className="bib-card-spine"
                          style={{ background: isBasica ? '#10b981' : '#6366f1' }}
                        />
                        <div className="bib-card-inner">
                          <div className="bib-card-top">
                            <span className={`bib-type-badge ${isBasica ? 'basica' : 'complementar'}`}>
                              {livro.tipo}
                            </span>
                          </div>
                          <h5 className="bib-card-title">{livro.titulo}</h5>
                          <p className="bib-card-authors">{livro.autores}</p>
                          <p className="bib-card-publisher">{livro.editora}</p>
                          <div className="bib-card-ucs">
                            {livro.ucs.map(uc => (
                              <span key={uc} className="bib-uc-badge">UC {uc}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            <div className="mt-4 px-1 d-flex gap-4 small" style={{ color: '#94a3b8' }}>
              <span className="d-flex align-items-center gap-2">
                <span style={{ width: 4, height: 16, background: '#10b981', borderRadius: 2, display: 'inline-block' }} />
                <BookOpen size={13} /> Básica: leitura essencial
              </span>
              <span className="d-flex align-items-center gap-2">
                <span style={{ width: 4, height: 16, background: '#6366f1', borderRadius: 2, display: 'inline-block' }} />
                <BookMarked size={13} /> Complementar: aprofundamento
              </span>
            </div>

            <footer className="text-center mt-5">
              <p className="small text-muted">Desenvolvido com JavaScript, React e Bootstrap</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bibliografia;
