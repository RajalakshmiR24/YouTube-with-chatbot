import { Outlet } from 'react-router-dom';
import Sidebar from '../Common/Sidebar';
import Navbar from '../Common/Navbar';

const AuthenticatedLayout = () => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  </div>
);

export default AuthenticatedLayout;
