import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  faHome,
  faFire,
  faTv,
  faVideo,
  faHistory,
  faClock,
  faThumbsUp,
  faQuestionCircle,
  faUserCircle,
  faAngleDown
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const navItems = [
  { id: 1, text: 'Home', path: '/home', icon: faHome },
  { id: 2, text: 'Trending', path: '/trending', icon: faFire },
  { id: 3, text: 'Subscriptions', path: '/subscriptions', icon: faTv },
  { id: 4, text: 'Library', path: '/library', icon: faVideo },
  { id: 5, text: 'History', path: '/history', icon: faHistory },
  { id: 6, text: 'Watch later', path: '/watch-later', icon: faClock },
  { id: 7, text: 'Liked Videos', path: '/liked-videos', icon: faThumbsUp },
  { id: 8, text: 'Help & Support', path: '/help-support', icon: faQuestionCircle }
];

const subscriptions = [
  { id: 1, name: 'Channel 1', icon: 'path/to/icon1.jpg' },
  { id: 2, name: 'Channel 2', icon: 'path/to/icon2.jpg' },
  { id: 3, name: 'Channel 3', icon: 'path/to/icon3.jpg' },
  { id: 4, name: 'Channel 4', icon: 'path/to/icon4.jpg' },
  { id: 5, name: 'Channel 5', icon: 'path/to/icon5.jpg' },
  { id: 6, name: 'Channel 6', icon: 'path/to/icon6.jpg' },
];

const Sidebar = ({ isVisible, toggleSidebar }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (id) => {
    setActiveMenu(activeMenu === id ? null : id);
  };

  const handleNavItemClick = () => {
    toggleSidebar();
  };

  return (
    <div className={`w-64 h-screen bg-white shadow-md ${isVisible ? '' : 'hidden'}`}>
      <div className="px-4 py-2">
        <ul>
          {navItems.map(item => (
            <li key={item.id} className="mb-2">
              {item.submenu ? (
                <>
                  <div
                    className="flex items-center p-2 cursor-pointer hover:bg-red-200 rounded"
                    onClick={() => handleMenuClick(item.id)}
                  >
                    <FontAwesomeIcon icon={item.icon} className="text-red-700" />
                    {item.text}
                    <FontAwesomeIcon icon={faAngleDown} className={`ml-auto transition-transform ${activeMenu === item.id ? 'rotate-180' : ''}`} />
                  </div>
                  {activeMenu === item.id && (
                    <ul className="ml-2 mt-2">
                      {item.submenu.map(subitem => (
                        <li key={subitem.id} className="mb-2">
                          <NavLink
                            to={subitem.path}
                            className={({ isActive }) =>
                              isActive ? 'block p-2 bg-red-200 rounded' : 'block p-2 hover:bg-red-200 rounded'
                            }
                            onClick={handleNavItemClick}
                          >
                            {subitem.text}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? 'flex items-center p-2 bg-red-200 rounded' : 'flex items-center p-2 hover:bg-red-200 rounded'
                  }
                  onClick={handleNavItemClick}
                >
                  <FontAwesomeIcon icon={item.icon} className="text-red-700 mr-2" />
                  {item.text}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <div className="text-sm font-semibold text-gray-600">Subscriptions</div>
          <div className="mt-2 flex flex-wrap">
            {subscriptions.map(sub => (
              <div key={sub.id} className="w-10 h-10 mr-2 mb-2">
                <img src={sub.icon} alt={sub.name} className="w-full h-full rounded-full" />
              </div>
            ))}
            <div className="w-44 h-10 flex items-center justify-center bg-gray-200 rounded-full cursor-pointer">
              <FontAwesomeIcon icon={faUserCircle} className="text-gray-600" />
            </div>
          </div>
        </div>
        <div className="text-sm text-gray-500 mt-4">
          &copy; 2024 YouTube, LLC
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
