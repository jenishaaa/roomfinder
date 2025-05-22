import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/auth/login', { email, password });
      if (response.status === 200) {
        // Redirect to the desired route on successful login
        navigate('/home');
      }
    } catch (err) {
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className='h-[90vh] flex justify-center items-center px-4'>
      <div className='border shadow-md p-4 rounded-xl max-w-sm w-full'>
        <h1 className='text-blue-900 text-4xl font-medium text-center'>LOGIN</h1>
        <form className='space-y-3' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
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
            <label htmlFor='password' className='block text-sm font-medium text-gray-700'>Password</label>
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
      </div>
    </div>
  );
};

export default Login;



// import React from 'react'

// const Login = () => {
//   return (
//     <div className='h-[90vh] flex justify-center items-center px-4'>
//     <div className='border shadow-md p-4 rounded-xl max-w-sm w-full'>
//         <h1 className='text-blue-900 text-4xl font-medium text-center'>
//             LOGIN
//         </h1>
//         <form className='space-y-3'>
//       <div>
//         <label htmlFor='username'>Username</label>
//         <input type='text' name='username' id='username'></input>
//       </div>

//       <div>
//         <label htmlFor='password'>Password</label>
//         <input type='password' name='password' id='password'></input>
//       </div>
//       <button className='bg-blue-900 text-white p-2 w-full rounded-md hover:bg-blue-800'>Login</button>
//     </form>
//     </div>
//         </div>
//   )
// }

// export default Login