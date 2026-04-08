import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import cursos from '../../data/cursos';

const Faltas = () => {
  const { cursoSlug } = useParams();
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const curso = cursos.find(c => c.slug === cursoSlug);

  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.BASE_URL}cursos/${cursoSlug}/faltas.json`)
      .then(r => {
        if (!r.ok) throw new Error('Dados não encontrados');
        return r.json();
      })
      .then(data => { setDados(data); setLoading(false); })
      .catch(err => { setError(err.message); setLoading(false); });
  }, [cursoSlug]);

  return (
    <div className="page-wrapper">
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-lg-12">

            <div className="page-doc-header" style={{ borderColor: curso?.cor ?? 'var(--primary)' }}>
              <span
                className="page-doc-category"
                style={{ color: curso?.cor ?? 'var(--primary)', background: `${curso?.cor ?? '#6366f1'}14` }}
              >
                Faltas
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
                    {dados.map(item => (
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
            )}

            <footer className="mt-5 p-4 bg-white rounded shadow-sm">
              <strong>Pontos de atenção:</strong> <br />
              <ArrowRight className="ms-2 text-primary" size={18} /> Acompanhamento de faltas <br />
              <ArrowRight className="ms-2 text-primary" size={18} /> Atestado Médico <br />
              <ArrowRight className="ms-2 text-primary" size={18} /> Reprovação por falta <br />
            </footer>

            <footer className="text-center mt-5">
              <p className="small text-muted">Desenvolvido com JavaScript, React e Bootstrap</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faltas;
