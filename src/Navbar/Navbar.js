import { useState } from 'react';
import './navbar.css';
import NavLinks from './NavLinks';


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
      <div className="title">
        <h1>DigiDrive</h1>
      </div>

      <div className="nav-desktop">
        <NavLinks />
      </div>

      <div className="burger-menu" onClick={updateMenu}>
        {[1, 2, 3].map((_, index) => (
          <div key={index} className={burgerClass}></div>
        ))}
      </div>

      <div className={menuClass}>
        <NavLinks onClick={updateMenu} />
      </div>
    </nav>
  );
};

export default Navbar;