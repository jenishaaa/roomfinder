import React from 'react';

const SingleRoom = () => {
  return (
    <div className='max-w-6xl mx-auto px-4 my-10'>
      <div className='flex gap-10'>
        {/* Main Room Details Section */}
        <div className='basis-3/5'>
          <div className='p-6 rounded-lg shadow-md'>
            <img 
              src='https://floorplanforrealestate.com/wp-content/uploads/2018/02/3D-Exterior-Home-House-Design-Services-Sample.jpg' 
              alt='Sample Room' 
              className='w-full h-64 object-cover rounded-md mb-4'
            />
            <h1 className='text-gray-500 mb-4'>Available</h1>
            <h3 className='text-3xl font-bold mb-4'>4 rooms flat</h3>
            <p className='text-orange-700'>Kathmandu, Nepal</p>
          </div>

          {/* Room Details and Price */}
          <div className='p-6 rounded-lg shadow-md mt-6'>
            <h2 className='text-2xl font-bold mb-4'>Room Details</h2>
            <p className='mb-4'>
              A spacious 4-room flat available in Kathmandu with amenities such as parking, high-speed internet, and more.
            </p>
            <p className='text-lg font-semibold mb-4'>Amenities:</p>
            <ul className='list-disc list-inside mb-4'>
              <li>Parking</li>
              <li>Internet</li>
              <li>24/7 Security</li>
              <li>Furnished Kitchen</li>
            </ul>
            <p className='text-indigo-800 text-xl font-bold'>30-40k /month</p>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className='basis-2/5'>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-bold mb-6'>Contact Information</h3>
            <div className='my-4'>
              <h4 className='text-lg font-semibold'>Contact Email:</h4>
              <p className='my-2 bg-indigo-100 p-2 font-bold'>example@mail.com</p>
            </div>
            <div className='my-4'>
              <h4 className='text-lg font-semibold'>Contact Phone:</h4>
              <p className='my-2 bg-indigo-100 p-2 font-bold'>+977 1234567890</p>
            </div>
          </div>

          {/* Room Location Section */}
          <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
            <h3 className='text-xl font-bold mb-6'>Room Location</h3>
            <p>Kathmandu, Nepal</p>
            {/* Optional: Add a map or further location details here */}
          </div>

          {/* Additional Information Section */}
          <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
            <h3 className='text-xl font-bold mb-6'>Additional Information</h3>
            <p>This flat is located in a peaceful neighborhood, ideal for students and working professionals.</p>
            <p className='mt-4'>Available from: October 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleRoom;
