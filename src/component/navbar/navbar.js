import React, { useState, useEffect } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navActive, setNavActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleBurgerClick = () => {
    setNavActive(!navActive);
  };

  return (
    <nav className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className="logo">SMART HOME</div>
      <ul className={navActive ? 'nav-links nav-active' : 'nav-links'}>
        <li><a href="/">Home</a></li>
        <li><a href="/Product">Product</a></li>
        <li><a href="/About">AboutUs</a></li>
        <li><a href="/Contact">Contact</a></li>
      </ul>
      <div className={navActive ? 'burger toggle' : 'burger'} onClick={handleBurgerClick}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Navbar;
