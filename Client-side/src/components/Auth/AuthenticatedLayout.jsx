import { useState, useEffect, useRef } from 'react';
import Sidebar from '../Common/Sidebar';
import Navbar from '../Common/Navbar';
import Categories from '../Common/Categories';
import { Outlet } from 'react-router-dom';

const AuthenticatedLayout = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setSidebarVisible(false);
    }
  };

  useEffect(() => {
    if (isSidebarVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarVisible]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar toggleSidebar={toggleSidebar} isSidebarVisible={isSidebarVisible} />
      <div className="flex flex-1" ref={sidebarRef}>
        <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
        <div className="flex flex-col flex-1">
          <Categories
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthenticatedLayout;
