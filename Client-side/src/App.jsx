// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import Home from './components/pages/Home';
import AuthenticatedLayout from './components/Auth/AuthenticatedLayout';
import Trend from './components/pages/Trend';

const App = () => {
  return (
    <AuthProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
         
          <Route element={<AuthenticatedLayout />}>
            <Route path="/trending" element={<Trend />} />
            <Route path="/home" element={<Home />} />

          </Route>
        </Routes>
    </AuthProvider>
  );
};

export default App;
