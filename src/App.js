import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import BottomBar from './components/BottomBar/BottomBar';
import Footer from './components/Footer/Footer';
import { navLinks } from './config/navLinks';
import "./styles/swipe.css";
import './styles/App.css';
import logoAnimato from './files/animazione_logo_CBN26.webm';

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  const handleVideoUpdate = (e) => {
    // Fai partire l'apertura 0.5 secondi PRIMA della fine del video
    // Modifica '0.5' per anticipare o ritardare l'apertura
    const timeLeft = e.target.duration - e.target.currentTime;
    if (timeLeft < 0.2) {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Torna in cima alla pagina ad ogni cambio di rotta
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

  return (
    <div>
       {/* Preloader */}
       <div className={`preloader ${loading ? '' : 'hidden'}`}>
        <div className="preloader-backdrop"></div>
        <div className="loader-content">
           <video 
             src={logoAnimato} 
             autoPlay 
             muted 
             playsInline 
             preload="auto"
             style={{ width: '700px', height: 'auto' }}
             onTimeUpdate={handleVideoUpdate}
           />
        </div>
      </div>

      {/* Contenuto del sito */}
      <div className={`site-content ${loading ? '' : 'visible'}`}>
        <div className="appContainer">
          <div className="swipePage">
            <Routes>
              {navLinks
                .filter(link => link.enabled)
                .map((link, index) => (
                  <Route key={index} path={link.path} element={link.component} />
                ))
              }
            </Routes>
          </div>
          <BottomBar />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
