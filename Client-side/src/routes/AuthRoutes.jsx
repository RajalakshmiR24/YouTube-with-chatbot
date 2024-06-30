import { Routes, Route } from 'react-router-dom';
import SignIn from '../components/pages/SignIn';
import SignUp from '../components/pages/SignUp';

const AuthRoutes = () => (
  <Routes>
    <Route path="/" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />
  </Routes>
);

export default AuthRoutes;
