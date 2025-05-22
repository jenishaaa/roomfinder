import React, { useState } from 'react';
import RoomLists from '../components/RoomLists';

const Rooms = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Add logic to handle search (e.g., pass to RoomLists via props or context)
    console.log('Search for:', searchQuery);
  };

  return (
    <div className='max-w-6xl mx-auto px-4 my-10'>
      {/* Header */}
      <div className='text-center mb-8'>
        <h1 className='text-4xl font-bold text-blue-900'>Browse Available Rooms</h1>
        <p className='text-gray-600 mt-2'>
          Find your ideal space by searching for location, type, or features.
        </p>
      </div>

      {/* Search Bar */}
      <form
        onSubmit={handleSearch}
        className='flex items-center justify-center gap-3 w-full mb-6'
      >
        <input
          type='text'
          placeholder='Search rooms by location or type...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='w-full sm:w-2/3 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        <button
          type='submit'
          className='px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition'
        >
          Search
        </button>
      </form>

      <div className='border-b border-gray-300 mb-6'></div>

      {/* Room Listings */}
      <RoomLists search={searchQuery} />
    </div>
  );
};

export default Rooms;
