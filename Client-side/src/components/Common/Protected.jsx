import { Outlet, Navigate } from 'react-router-dom';

function authUser() {
  const User = { Login: true };
  return User.Login;
}

const Protected = () => {
  const isAuthUser = authUser();
  return isAuthUser ? <Outlet /> : <Navigate to="/" />;
}

export default Protected;
