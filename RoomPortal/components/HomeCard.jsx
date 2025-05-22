import React from 'react';
import { Link } from 'react-router-dom';

const HomeCard = () => {
  return (
    <div className='grid gap-4 grid-cols-1 md:grid-cols-2'>
      
      <div className='border rounded-xl shadow-md p-4 bg-gray-100 space-y-4'>
        <h1 className='text-2xl font-bold'>Explore Rooms</h1>
        <p>Browse through a variety of available rooms and apartments that match your preferences.</p>
        <Link to="/rooms"> 
          <button className='bg-slate-900 
            hover:bg-slate-700 
            hover:scale-110 duration-300 ease-in-out
            text-white p-2 rounded-lg 
            font-semibold'>
              View Listings
          </button>
        </Link>
      </div>
      
      {/* 
      <div className='border rounded-xl shadow-md p-4 bg-indigo-100 space-y-4'>
        <h1 className='text-2xl font-bold'>Tailored Search</h1>
        <p>Use our advanced search filters to find the perfect room based on your location and needs.</p>
        <button className='bg-purple-950 hover:bg-purple-800 hover:scale-110 duration-300 ease-in-out text-white p-2 rounded-lg font-semibold'>
          Start Searching
        </button>
      </div>
      */}

    </div>
  )
}

export default HomeCard;
