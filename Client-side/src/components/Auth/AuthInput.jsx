export { default as AuthInput } from './AuthInput';

const AuthInput = ({ label, type, name, value, onChange, error }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 mt-1 border rounded-md focus:ring-red-500 focus:border-red-500"
      />
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default AuthInput;
