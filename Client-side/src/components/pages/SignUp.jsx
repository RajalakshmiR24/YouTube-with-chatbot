import { useForm } from '../../hooks/useForm';
import { validateSignUp } from '../../utils/validation';
import { AuthForm } from '../Auth/AuthForm';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'; 

const SignUp = () => {
  const initialData = { name: '', email: '', password: '', phone: '' };
  const { formData, errors, handleChange, handleSubmit } = useForm(initialData, validateSignUp);
  const navigate = useNavigate();
  const apiUrl = 'http://localhost:4000';

  const onSubmit = (formData) => {
    fetch(`${apiUrl}/auth/sign-up`, {
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
        console.log('Response:', data);
        navigate('/');
      })
      .catch((err) => console.error('Error submitting form:', err));
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex w-full max-w-4xl rounded-lg shadow-lg overflow-hidden">
        <div className="w-1/2 bg-red-500 p-8 flex flex-col justify-center">
          <img src={logo} alt="Destiny Logo" className="mx-auto mb-4" /> 
          <h2 className="text-white text-3xl font-bold mb-2">Welcome to Destiny</h2>
          <p className="text-white text-lg">Your journey to seamless experience starts here.</p>
          <p className="text-white text-sm">Join us in under 30 seconds and explore the possibilities.</p>
        </div>
        <div className="w-1/2 bg-white p-8">
          <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
          <AuthForm
            formData={formData}
            errors={errors}
            handleChange={handleChange}
            handleSubmit={(e) => handleSubmit(e, onSubmit)}
            isSignUp={true}
          />
          <div className="text-center mt-4">
            <p>Already have an account? <Link to="/" className="text-red-500 hover:underline">Sign In</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
