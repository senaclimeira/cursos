import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Layers, ArrowRight } from 'lucide-react';
import cursos from '../../data/cursos';

const ItemList = ({ items }) => (
  <>
    {items.map((item, i) => (
      <span key={i}>
        <ArrowRight className="ms-2 text-primary" size={18} /> {item} <br />
      </span>
    ))}
  </>
);

const variantColors = {
  primary: null, // será substituído pela cor do curso
  success: '#10b981',
  warning: '#f59e0b',
  danger: '#ef4444',
  dark: '#212529',
}

const AccordionSection = ({ id, titulo, atividades, linguagens, ferramentas, conhecimentos, habilidades, atitudes, descricao, obs, cor }) => (
  <div className="accordion-item" style={{ borderLeft: `6px solid ${cor}` }}>
    <h2 className="accordion-header">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#${id}`}
      >
        <Layers size={20} className="me-2 text-primary" />
        {titulo}
      </button>
    </h2>
    <div id={id} className="accordion-collapse collapse" data-bs-parent="#accordionUcs">
      <div className="accordion-body">
        {descricao && <p>{descricao}</p>}
        {obs && <p>{obs}</p>}

        {atividades && atividades.length > 0 && (
          <>
            <strong>Atividades principais:</strong><br />
            <ItemList items={atividades} /><br />
          </>
        )}

        {linguagens && linguagens.length > 0 && (
          <>
            <strong>Linguagens/tecnologias:</strong><br />
            {linguagens.map((l, i) => (
              <span key={i}>
                <ArrowRight className="ms-2 text-primary" size={18} /> <strong>{l.nome}:</strong> {l.desc} <br />
              </span>
            ))}
            <br />
          </>
        )}

        {ferramentas && ferramentas.length > 0 && (
          <>
            <strong>Ferramentas utilizadas:</strong><br />
            {ferramentas.map((f, i) => (
              <span key={i}>
                <ArrowRight className="ms-2 text-primary" size={18} /> <strong>{f.nome}:</strong> {f.desc} <br />
              </span>
            ))}
          </>
        )}

        {conhecimentos && conhecimentos.length > 0 && (
          <>
            <strong>Conhecimentos:</strong><br />
            <ItemList items={conhecimentos} /><br />
          </>
        )}

        {habilidades && habilidades.length > 0 && (
          <>
            <strong>Habilidades:</strong><br />
            <ItemList items={habilidades} /><br />
          </>
        )}

        {atitudes && atitudes.length > 0 && (
          <>
            <strong>Atitudes/Valores:</strong><br />
            <ItemList items={atitudes} />
          </>
        )}
      </div>
    </div>
  </div>
)

const Ucs = () => {
  const { cursoSlug } = useParams()
  const [ucs, setUcs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const curso = cursos.find(c => c.slug === cursoSlug)

  const getBadgeColor = (modulo) => {
    if (!curso?.badges || modulo === undefined) return curso?.cor ?? '#6366f1'
    const badge = curso.badges[modulo]
    if (!badge) return curso?.cor ?? '#6366f1'
    if (badge.variant === 'primary') return curso?.cor ?? '#6366f1'
    return variantColors[badge.variant] ?? curso?.cor ?? '#6366f1'
  }

  useEffect(() => {
    setLoading(true)
    fetch(`${import.meta.env.BASE_URL}cursos/${cursoSlug}/ucs.json`)
      .then(r => {
        if (!r.ok) throw new Error('Dados não encontrados')
        return r.json()
      })
      .then(data => { setUcs(data); setLoading(false); })
      .catch(err => { setError(err.message); setLoading(false); })
  }, [cursoSlug])

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
                Unidades Curriculares
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
              <div className="accordion custom-accordion" id="accordionUcs">
                {ucs.map(uc => (
                  <AccordionSection key={uc.id} {...uc} cor={getBadgeColor(uc.modulo)} />
                ))}
              </div>
            )}

            {curso?.badges?.length > 0 && (
              <div className="mt-3 d-flex flex-wrap align-items-center">
                {curso.badges.map((b, i) => (
                  <span key={i} className={`badge text-bg-${b.variant} p-2 me-2 mb-2`}>{b.label}</span>
                ))}
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

export default Ucs;
