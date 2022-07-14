import { Link } from 'react-router-dom';
import '../assets/sass/components/navbar.scss';

const Navbar = () => (
  <nav className="navbar">
    <Link className="navbar__link navbar__link--active" to="/">Books</Link>
    <Link className="navbar__link" to="/categories">Categories</Link>
  </nav>
);

export default Navbar;
