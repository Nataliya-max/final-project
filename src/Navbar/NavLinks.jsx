import React from 'react'; 
import { Link } from 'react-router-dom';
import navLinks from './navLinks';

const NavLinks = ({ onClick }) => (
  <ul className="nav-links">
    {navLinks.map((link) => (
      <li key={link.to} onClick={onClick}>
        <Link to={link.to}>{link.label}</Link>
      </li>
    ))}
  </ul>
);

export default NavLinks;

