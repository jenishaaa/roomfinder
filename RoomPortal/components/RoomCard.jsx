import React from 'react';
import { Link } from 'react-router-dom';

const RoomCard = ({ room }) => {
  return (
    <div className='bg-white rounded-xl border shadow-lg p-5'>
      <div className='relative'>
        <img 
          src={room.images[0]} // Use the first image from the database
          alt={room.name} 
          className='w-full h-60 object-cover rounded-md mb-4'
        />
        <div className='absolute top-2 right-2 bg-teal-600 text-white px-3 py-1 rounded-md text-xs'>
          Available
        </div>
      </div>
      <h3 className='text-2xl font-bold mb-2'>{room.name}</h3>
      <p className='text-indigo-500 text-xl mb-3'>Rs. {room.price} / month</p>
      <p className='text-orange-700 text-lg mb-3'>{room.location}</p>
      
      <Link to={`/room/${room._id}`}>
        <button className='bg-teal-600 text-white p-2 rounded-md'>Read More</button>
      </Link>
    </div>
  );
};

export default RoomCard;



// import React from 'react';
// import { Link } from 'react-router-dom';

// const RoomCard = ({ room }) => {
//   return (
//     <div className='bg-white rounded-xl border p-5'>
//         <div className='pb-3'>
//             <img 
//                 src='https://floorplanforrealestate.com/wp-content/uploads/2018/02/3D-Exterior-Home-House-Design-Services-Sample.jpg' 
//                 alt='Sample Room' 
//                 className='w-full h-40 object-cover rounded-md mb-4'
//             />
//             <h1 className='text-gray-600 my-2'>Available</h1>
//             <h3 className='text-xl font-bold truncate'>
//                 Location: {room.name}
//             </h3>
//             <p>{room.description}</p>
//             <p className='text-indigo-500 mt-5'>Rs. {room.price} / month</p>
//         </div>
//         <div className='border border-gray-100 mb-5'></div>
//         <div className='flex justify-between items-center'>
//             <p className='text-orange-700 mb-3'>
//                 {room.location}
//             </p>

//             <Link to={`/room/${room.id}`}>
//                 <button className='bg-teal-600 text-white p-2 rounded-md'>Read More</button>
//             </Link>
//         </div>
//     </div>
//   );
// };

// export default RoomCard;