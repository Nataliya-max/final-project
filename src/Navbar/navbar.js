import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

  const links = [
    { to: '/home', label: 'HOME' },
    { to: '/shop', label: 'SHOP' },
    { to: '/service', label: 'SERVICE' },
    { to: '/cart', label: 'CART' }
  ];

  return (
    <nav className="navbar">
      <div className="logo">LOGO</div>

      {/* Menú para escritorio */}
      <ul className="nav-links">
        {links.map(link => (
          <li key={link.to}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>

      {/* Icono del menú hamburguesa */}
      <div className="burger-menu" onClick={updateMenu}>
        {[1, 2, 3].map((_, index) => (
          <div key={index} className={burgerClass}></div>
        ))}
      </div>

      {/* Menú móvil */}
      <div className={menuClass}>
        <ul>
          {links.map(link => (
            <li key={link.to} onClick={updateMenu}>
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;