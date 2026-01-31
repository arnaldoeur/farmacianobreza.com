import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './src/components/Navbar';
import Footer from './src/components/Footer';
import Home from './src/pages/Home';
import About from './src/pages/About';
import Services from './src/pages/Services';
import Plans from './src/pages/Plans';
import Gallery from './src/pages/Gallery';
import Contacts from './src/pages/Contacts';
import Privacy from './src/pages/Privacy';
import Terms from './src/pages/Terms';

const App: React.FC = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/planos" element={<Plans />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/contactos" element={<Contacts />} />
          <Route path="/privacidade" element={<Privacy />} />
          <Route path="/termos" element={<Terms />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
