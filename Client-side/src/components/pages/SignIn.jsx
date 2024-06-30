import { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { validateSignIn } from '../../utils/validation';
import { AuthForm } from '../Auth/AuthForm';
import { useNavigate, Link } from 'react-router-dom';

const SignIn = () => {
  const initialData = { email: '', password: '' };
  const { formData, errors, handleChange, handleSubmit } = useForm(initialData, validateSignIn);
  const navigate = useNavigate();
  const apiUrl = 'http://localhost:4000';

  // State to manage error message display
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = (formData) => {
    fetch(`${apiUrl}/auth/sign-in`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        console.log('Sign in successful:', data); // Replace with appropriate success message
        navigate('/home');
      })
      .catch((err) => {
        console.error('Sign in error:', err.message);
        setErrorMessage('Your email or password is mismatched. Please try again.');
      });
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex w-full max-w-4xl rounded-lg shadow-lg overflow-hidden">
        <div className="w-1/2 bg-red-500 p-8 flex flex-col justify-center">
          <h2 className="text-white text-3xl font-bold mb-2">Welcome back</h2>
          <p className="text-white text-lg">Your journey to a seamless experience starts here.</p>
          <p className="text-white text-sm">Join us in under 30 seconds and explore the possibilities.</p>
        </div>
        <div className="w-1/2 bg-white p-8">
          <h2 className="text-2xl font-bold text-center mb-4">Sign In</h2>
          {errorMessage && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline"> {errorMessage}</span>
            </div>
          )}
          <AuthForm
            formData={formData}
            errors={errors}
            handleChange={handleChange}
            handleSubmit={(e) => handleSubmit(e, onSubmit)}
            isSignUp={false}
          />
          <div className="text-center mt-4">
            <p>
              Don&apos;t have an account? <Link to="/signup" className="text-red-500 hover:underline">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
