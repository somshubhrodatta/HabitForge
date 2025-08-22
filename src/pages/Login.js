import { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

function Login() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.length !== 10 || password.length !== 4) {
      alert('Phone must be 10 digits, password 4 digits.');
      return;
    }
    login(phone, password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <form onSubmit={handleSubmit} className="p-8 bg-white rounded shadow-md">
        <h2 className="mb-4 text-2xl font-bold">Login / Sign Up</h2>
        <input
          type="tel"
          placeholder="Mobile Number (10 digits)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        /><br></br>
        <input
          type="password"
          placeholder="4-Digit Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <br></br>
        <button type="submit" className="w-full p-2 text-white bg-blue-500 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;