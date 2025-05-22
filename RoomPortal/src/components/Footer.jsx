// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-black text-white p-6 mt-4'>
      <div className='max-w-6xl mx-auto text-center'>
        <p className='text-lg'>&copy; 2025 RoomSeeker Portal. All rights reserved.</p>

        <ul className='flex flex-wrap justify-center gap-6 mt-3 text-sm'>
          <li>
            <Link to="/faq" className='hover:underline'>FAQ</Link>
          </li>
          <li>
            <Link to="/about" className='hover:underline'>Terms and Conditions</Link>
          </li>
          <li>
            <Link to="/about" className='hover:underline'>Privacy Policy</Link>
          </li>
          <li>
            <Link to="/contact" className='hover:underline'>Contact Us</Link>
          </li>
        </ul>

        <div className='mt-2 text-sm'>
          <p>roomseekerportal@gmail.com | +977 9800008888</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
