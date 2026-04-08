import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Ucs from './pages/curso/Ucs';
import Avaliacao from './pages/curso/Avaliacao';
import Faltas from './pages/curso/Faltas';
import Informacoes from './pages/curso/Informacoes';
import Bibliografia from './pages/curso/Bibliografia';
import Downloads from './pages/curso/Downloads';
import './App.css';

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <>
      <Navbar />
      <div className={isHome ? '' : 'topo'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:cursoSlug/ucs" element={<Ucs />} />
          <Route path="/:cursoSlug/avaliacao" element={<Avaliacao />} />
          <Route path="/:cursoSlug/faltas" element={<Faltas />} />
          <Route path="/:cursoSlug/informacoes" element={<Informacoes />} />
          <Route path="/:cursoSlug/bibliografia" element={<Bibliografia />} />
          <Route path="/:cursoSlug/downloads" element={<Downloads />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
