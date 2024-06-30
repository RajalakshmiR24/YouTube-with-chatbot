
import PropTypes from 'prop-types';
import logo from '../../assets/images/logo.png';
import SearchBar from '../Search/SearchBar';

const Navbar = ({ toggleSidebar, isSidebarVisible }) => {
  return (
    <div className="bg-white flex items-center justify-between px-4 py-2">
      <div className="flex items-center space-x-4">
        <button className="text-red-700 text-2xl" onClick={toggleSidebar}>
          {isSidebarVisible ? '' : '☰'}
        </button>
        <div className="flex items-center space-x-2">
          <img src={logo} alt="YouTube Logo" className="h-8" />
          <span className="text-xl font-bold hidden md:block">YouTube</span>
          <div className="flex items-center">
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  isSidebarVisible: PropTypes.bool.isRequired,
};

export default Navbar;
