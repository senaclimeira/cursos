import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownPage = ({ path }) => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(path)
      .then(r => {
        if (!r.ok) throw new Error('Arquivo não encontrado');
        return r.text();
      })
      .then(text => {
        setContent(text);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [path]);

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Carregando...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return <ReactMarkdown>{content}</ReactMarkdown>;
};

export default MarkdownPage;
