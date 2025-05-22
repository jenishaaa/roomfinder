import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export const Navbar = () => {
  const [user, setUser] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const storedImage = localStorage.getItem('profileImage');
    setUser(storedUser);
    setProfileImage(storedImage);
  }, []);

  return (
    <nav className='border shadow-md p-4 top-0 z-50 bg-purple-200'>
      <div className='flex flex-wrap justify-between items-center max-w-6xl mx-auto'>

        {/* Logo and Title */}
        <Link to='/' className='flex items-center cursor-pointer'>
          <img src={logo} alt="RoomSeeker Logo" className='w-14 h-14 mr-2 rounded-full' />
          <span className='text-2xl font-bold text-gray-800'>RoomSeeker Portal</span>
        </Link>

        {/* Navigation Links */}
        <ul className='flex flex-wrap gap-6 text-lg font-medium text-gray-700'>
          <li><Link to='/' className='hover:text-purple-700'>Home</Link></li>
          <li><Link to='/rooms' className='hover:text-purple-700'>Browse Rooms</Link></li>
          <li><Link to='/about' className='hover:text-purple-700'>About Us</Link></li>
          <li><Link to='/faq' className='hover:text-purple-700'>FAQ</Link></li>
          <li><Link to='/contact' className='hover:text-purple-700'>Contact Us</Link></li>
        </ul>

        {/* Profile Icon or Register/Login */}
        <div>
          {user ? (
            <Link to='/profile'>
              <img
                src={profileImage || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'}
                alt='Profile'
                className='w-10 h-10 rounded-full object-cover cursor-pointer border border-purple-500'
              />
            </Link>
          ) : (
            <Link to='/register'>
              <button className='hover:text-purple-700'>Register/Login</button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;







// import React from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../assets/logo.png';

// export const Navbar = () => {
//   const user = false;

//   return (
//     <nav className='border shadow-md p-4 top-0 z-50 bg-purple-200'>
//       <div className='flex flex-wrap justify-between items-center max-w-6xl mx-auto'>

//         {/* Left - Logo and Title */}
//         <Link to='/' className='flex items-center cursor-pointer'>
//           <img src={logo} alt="RoomSeeker Logo" className='w-14 h-14 mr-2 rounded-full' />
//           <span className='text-2xl font-bold text-gray-800'>RoomSeeker Portal</span>
//         </Link>

//         {/* Middle - Navigation Links */}
//         <ul className='flex flex-wrap gap-6 text-lg font-medium text-gray-700'>
//           <li>
//             <Link to='/' className='hover:text-purple-700'>Home</Link>
//           </li>
//           <li>
//             <Link to='/rooms' className='hover:text-purple-700'>Browse Rooms</Link>
//           </li>
//           <li>
//             <Link to='/about' className='hover:text-purple-700'>About Us</Link>
//           </li>
//           <li>
//             <Link to='/faq' className='hover:text-purple-700'>FAQ</Link>
//           </li>
//           <li>
//             <Link to='/contact' className='hover:text-purple-700'>Contact Us</Link>
//           </li>
//         </ul>

//         {/* Right - Auth Buttons */}
//         <div className='flex gap-4 text-lg font-medium'>
//           {user ? (
//             <button className='text-red-600 hover:underline'>Logout</button>
//           ) : (
//             <>
//               <Link to='/register'>
//                 <button className='hover:text-purple-700'>Register/Login</button>
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
