import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FiHome, FiCalendar, FiFolder } from 'react-icons/fi';
import { IoFastFoodOutline } from "react-icons/io5";
import { TbListNumbers } from "react-icons/tb";


import './BottomBar.css';

const BottomBar = ({ setActiveIndex }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    { icon: <FiHome size={24} />, label: 'Home', path: '/' },
  //  { icon: <FiCalendar size={24} />, label: 'Info', path: '/info' },
  //  { icon: <IoFastFoodOutline size={24} />, label: 'Food', path: '/food' },
  //  { icon: <TbListNumbers size={24} />, label: 'Lotteria', path: '/lottery' },
    { icon: <FiFolder size={24} />, label: 'Immagini', path: '/images' }
  ];

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
              setActiveIndex(index);
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
            width: `${100 / items.length}%` // Dynamic width based on items count
          }}
        />
      </div>
    </div>
  );
};

export default BottomBar;
