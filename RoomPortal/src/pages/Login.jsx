import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');

  try {
    const response = await axios.post(`${API_BASE_URL}/api/auth/login`, {
      email,
      password,
    });

    if (response.status === 200) {
      const { _id, username, email, role } = response.data.user;
      localStorage.setItem('user', JSON.stringify({ _id, username, email, role }));
      navigate('/profile');
    }


  } catch (err) {
    setError(
      err.response?.data?.message || 'Login failed. Please try again.'
    );
  }
};


return (
  <div className='h-[90vh] flex justify-center items-center px-4'>
    <div className='border shadow-md p-4 rounded-xl max-w-sm w-full'>
      <h1 className='text-blue-900 text-4xl font-medium text-center'>LOGIN</h1>
      <form className='space-y-3' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
          />
        </div>
        <div>
          <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
            Password
          </label>
          <input
            type='password'
            id='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
          />
        </div>
        {error && <p className='text-red-500 text-sm'>{error}</p>}
        <button
          type='submit'
          className='bg-blue-900 text-white p-2 w-full rounded-md hover:bg-blue-800'
        >
          Login
        </button>
      </form>

      {/* Register link */}
      <p className="text-sm text-center mt-4">
        Don&apos;t have an account?{" "}
        <a
          href="/register"
          className="text-blue-700 hover:underline font-medium"
        >
          Register now
        </a>
      </p>
    </div>
  </div>
);

};

export default Login;