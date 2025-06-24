import { Link } from 'react-router-dom';
import { navLinksdata } from './navLinksdata';
 

const NavLinks = ({ onClick }) => (
  <ul className="nav-links">
    {navLinksdata.map((link) => (
      <li key={link.to} onClick={onClick}>
        <Link to={link.to}>{link.label}</Link>
      </li>
    ))}
  </ul>
);

export default NavLinks;
