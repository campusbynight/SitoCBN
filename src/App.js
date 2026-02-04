import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import BottomBar from './components/BottomBar/BottomBar';
import Home from './pages/Home/Home';
import Info from './pages/Info/Info';
import Food from './pages/Food/Food';
import Gallery from './pages/Gallery/Gallery';
import Lottery from './pages/Lottery/Lottery';
import Footer from './components/Footer/Footer';
import "./styles/swipe.css";
import './styles/App.css';
import logoAnimato from './files/animazione_logo_CBN26.webm';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
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

  const handleSetActiveIndex = (index) => {
    setActiveIndex(index);
    // (opzionale) scroll animato quando si clicca il pulsante
    // window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

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
              <Route path="/" element={<Home />} />
            {/*
              <Route path="/info" element={<Info />} />
              <Route path="/food" element={<Food />} />
              <Route path="/lottery" element={<Lottery />} />
            */}
              <Route path="/images" element={<Gallery />} />
            </Routes>
          </div>
          <BottomBar activeIndex={activeIndex} setActiveIndex={handleSetActiveIndex} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
