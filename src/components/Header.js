import { UserIcon } from '@heroicons/react/solid';
import Navbar from './Navbar';
import '../assets/sass/components/header.scss';

const Header = () => (
  <header className="header">
    <div className="header__body container mx-auto px-4">
      <div className="header__logo">Bookstore CMS</div>
      <Navbar />
      <div className="header__user-icon">
        <UserIcon className="h-5 w-5" fill="#0290ff" />
      </div>
    </div>
  </header>
);

export default Header;
