import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { navLinks } from '../../config/navLinks';
import './BottomBar.css';

const BottomBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Filtriamo solo i link abilitati come definito nella config
  const items = navLinks.filter(link => link.enabled);

  const currentPath = location.pathname;
  let activeIndex = items.findIndex(item => item.path === currentPath);
  if (activeIndex === -1) activeIndex = 0;

  return (
    <div className="barContainer">
      <div
        className="buttonsContainer"
        style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${items.length}, 1fr)`,
            maxWidth: `${items.length * 120}px`,
            width: '100%',
            margin: '0 auto'
          }}
      >
        {items.map((item, index) => (
          <button
            key={index}
            className={`navButton ${activeIndex === index ? 'active' : ''}`}
            onClick={() => {
              if (item.path) navigate(item.path);
            }}
            aria-label={item.label}
          >
            {item.icon}
          </button>
        ))}
        <div
          className="activeIndicator"
          style={{
            transform: `translateX(${activeIndex * 100}%)`,
            width: `${100 / items.length}%`
          }}
        />
      </div>
    </div>
  );
};

export default BottomBar;
