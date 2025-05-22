// Footer.js
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black text-white p-4 mt-4'>
      <div className='max-w-6xl mx-auto text-center'>
        <p className='text-lg'>&copy; 2024 RoomSeeker Portal. All rights reserved.</p>
        <ul className='flex justify-center gap-4 mt-2'>
          <li>Terms and Conditions</li>
          <li>Privacy Policy</li>
        </ul>
        <ul>
            <li>roomseekerportal@gmail.com</li>
            <li>+977 9800008888</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer