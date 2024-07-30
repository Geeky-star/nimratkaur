import './Navbar.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import logo from './assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    // Apply the appropriate class to the body based on the theme
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkMode]);

  return (
    <div className={`navbar ${isDarkMode ? 'dark' : 'light'}`}>
      <Link to={'/'} onClick={scrollToTop}>
        <img src={logo} alt="Logo" className='navbar-logo' />
      </Link>
      <div className='navbar-container'>
        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <Link to={'/projects'} onClick={toggleMenu}>Projects</Link>
          <Link to={'/skills'} onClick={toggleMenu}>Skills</Link>
          <Link to={'/experience'} onClick={toggleMenu}>Experience</Link>
          <Link to={'/education'} onClick={toggleMenu}>Education</Link>
        </nav>
      </div>
      <i className={`bi ${isDarkMode ? 'bi-sun-fill' : 'bi-moon-fill'}`} onClick={toggleTheme}></i>
    </div>
  );
}
