import React, { useState } from 'react';
import HomeImage from './HomeImage.png';
import Education from './Education';
import Skills from './Skills';
import About from './About';
import Projects from './Projects';
import Statistics from './Statistics';
import Contact from './Contact';

const DrowerManu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSlider = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
  
      <button className="menu-btn" onClick={toggleSlider}>
        {isOpen ? 'Close Menu'  : 'Menu'}
      </button>
      <div className={`slider ${isOpen ? 'open' : ''}`}>
        <ul className="links-list">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/skills">Skills</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/statistics">Statistics</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default DrowerManu;
