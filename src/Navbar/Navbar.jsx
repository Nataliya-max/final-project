// Navbar.jsx
import React, { useState } from 'react';
import NavLinks from './NavLinks';
import './navbar.css';

const Navbar = () => {
  const [burgerClass, setBurgerClass] = useState('burger-bar unclicked');
  const [menuClass, setMenuClass] = useState('menu hidden');
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    setBurgerClass(isMenuClicked ? 'burger-bar unclicked' : 'burger-bar clicked');
    setMenuClass(isMenuClicked ? 'menu hidden' : 'menu visible');
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <nav className="navbar">
      <div className="logo">LOGO</div>

      {/* Menú para escritorio */}
      <div className="nav-desktop">
        <NavLinks />
      </div>

      {/* Icono del menú hamburguesa */}
      <div className="burger-menu" onClick={updateMenu}>
        {[1, 2, 3].map((_, index) => (
          <div key={index} className={burgerClass}></div>
        ))}
      </div>

      {/* Menú móvil */}
      <div className={menuClass}>
        <NavLinks onClick={updateMenu} />
      </div>
    </nav>
  );
};

export default Navbar;
