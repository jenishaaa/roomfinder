import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Use environment variable or fallback to localhost
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors on submit
    try {
      const response = await axios.post(`${API_BASE_URL}/api/auth/register`, {
        username,
        email,
        password,
      });
      if (response.status === 201) {
        // Redirect to login page on successful registration
        navigate('/login');
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
          'Registration failed. Please check your details and try again.'
      );
    }
  };

  return (
    <div className='min-h-[90vh] flex flex-col justify-center items-center px-4 bg-gray-50'>

      {/* Intro Section */}
      <div className="max-w-md text-center mb-6">
        <h2 className="text-3xl font-bold text-blue-900">Join Us Now!</h2>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Be part of a growing community. Sign up to discover, compare, and connect with landlords instantly. 🚀
        </p>
      </div>

      {/* Register Box */}
      <div className='border shadow-md p-6 rounded-xl max-w-sm w-full bg-white'>
        <h1 className='text-blue-900 text-3xl font-semibold text-center mb-4'>REGISTER</h1>

        <form className='space-y-3' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='username' className='block text-sm font-medium text-gray-700'>
              Username
            </label>
            <input
              type='text'
              id='username'
              name='username'
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setError('');
              }}
              required
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
            />
          </div>

          <div>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError('');
              }}
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
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              required
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
            />
          </div>

          {error && <p className='text-red-500 text-sm'>{error}</p>}

          <button
            type='submit'
            className='bg-blue-900 text-white p-2 w-full rounded-md hover:bg-blue-800'
          >
            Register
          </button>
        </form>

        {/* Login Redirect */}
        <p className='mt-4 text-center text-sm text-gray-600'>
          Already have an account?{' '}
          <button
            onClick={() => navigate('/login')}
            className='text-blue-700 hover:underline font-medium cursor-pointer'
          >
            Log in
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
