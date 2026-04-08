import { useLocation, NavLink, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import cursos from '../data/cursos';

const Navbar = () => {
  const location = useLocation();
  const pathParts = location.pathname.split('/').filter(Boolean);
  const cursoSlug = pathParts.length > 0 ? pathParts[0] : null;
  const curso = cursos.find(c => c.slug === cursoSlug);

  if (!curso) return null;

  const fecharMenu = () => {
    const menu = document.getElementById('siteNavLinks');
    if (menu && menu.classList.contains('show')) {
      menu.classList.remove('show');
    }
  };

  const navLinks = [
    { to: `/${cursoSlug}/ucs`, label: 'UCs' },
    { to: `/${cursoSlug}/avaliacao`, label: 'Avaliação' },
    { to: `/${cursoSlug}/faltas`, label: 'Faltas' },
    { to: `/${cursoSlug}/informacoes`, label: 'Informações' },
    { to: `/${cursoSlug}/bibliografia`, label: 'Bibliografia' },
    { to: `/${cursoSlug}/downloads`, label: 'Downloads' },
  ];

  return (
    <header className="site-nav">
      <div className="site-nav-inner">
        <Link to="/" className="site-nav-back">
          <ArrowLeft size={13} strokeWidth={2.5} />
          Cursos
        </Link>
        <span className="site-nav-sep" />
        <span className="site-nav-title">{curso.nome}</span>

        <button
          className="site-nav-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#siteNavLinks"
          aria-controls="siteNavLinks"
          aria-expanded="false"
        >
          <span /><span /><span />
        </button>

        <div className="site-nav-links collapse" id="siteNavLinks">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={fecharMenu}
              className={({ isActive }) => `site-nav-link${isActive ? ' active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
