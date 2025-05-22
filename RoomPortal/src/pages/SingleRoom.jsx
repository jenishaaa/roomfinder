import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SingleRoom = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/api/rooms/${id}`);
        setRoom(res.data);
      } catch (err) {
        console.error('Error fetching room:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRoom();
  }, [id]);

  if (loading) return <div className="p-4">Loading room details...</div>;
  if (!room) return <div className="p-4 text-red-600">Room not found.</div>;

  return (
    <div className='max-w-6xl mx-auto px-4 my-10'>
      <div className='flex gap-10'>
        <div className='basis-3/5'>
          <div className='p-6 rounded-lg shadow-md'>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {room.images?.map((img, idx) => (
                <img 
                  key={idx}
                  src={`/${img}`} 
                  alt={`${room.name} ${idx + 1}`} 
                  className='w-full h-64 object-cover rounded-md'
                />
              ))}
            </div>


            <h1 className='text-gray-500 mb-4'>Available</h1>
            <h3 className='text-3xl font-bold mb-4'>{room.name}</h3>
            <p className='text-orange-700'>{room.location}</p>
          </div>

          <div className='p-6 rounded-lg shadow-md mt-6'>
            <h2 className='text-2xl font-bold mb-4'>Room Details</h2>
            <p className='mb-4'>{room.description}</p>
            <p className='text-lg font-semibold mb-4'>Amenities:</p>
            <ul className='list-disc list-inside mb-4'>
              {room.amenities?.map((amenity, idx) => (
                <li key={idx}>{amenity}</li>
              ))}
            </ul>
            <p className='text-indigo-800 text-xl font-bold'>{room.price} / month</p>
          </div>
        </div>

        <div className='basis-2/5'>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-bold mb-6'>Contact Information</h3>
            <p className='my-2 bg-indigo-100 p-2 font-bold'>example@mail.com</p>
            <p className='my-2 bg-indigo-100 p-2 font-bold'>+977 1234567890</p>
          </div>

          <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
            <h3 className='text-xl font-bold mb-6'>Room Location</h3>
            <p>{room.location}</p>
          </div>

          <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
            <h3 className='text-xl font-bold mb-6'>Additional Information</h3>
            <p>This room is suitable for {room.preferredTenants} tenants.</p>
            <p className='mt-4'>Size: {room.size} sq ft</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRoom;



// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const SingleRoom = () => {
//   const { id } = useParams(); // get the room id from URL
//   const [room, setRoom] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchRoom = async () => {
//       try {
//         const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/rooms/${id}`);
//         setRoom(response.data);
//       } catch (err) {
//         setError('Failed to load room details.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRoom();
//   }, [id]);

//   if (loading) return <p className="text-center mt-10">Loading room details...</p>;
//   if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;
//   if (!room) return <p className="text-center mt-10">Room not found.</p>;

//   return (
//     <div className="max-w-6xl mx-auto px-4 my-10">
//       <div className="flex gap-10">
//         {/* Main Room Details Section */}
//         <div className="basis-3/5">
//           <div className="p-6 rounded-lg shadow-md">
//             <img 
//               src={room.image || 'https://floorplanforrealestate.com/wp-content/uploads/2018/02/3D-Exterior-Home-House-Design-Services-Sample.jpg'} 
//               alt={room.title || 'Room Image'} 
//               className="w-full h-64 object-cover rounded-md mb-4"
//             />
//             <h1 className="text-gray-500 mb-4">{room.status || 'Available'}</h1>
//             <h3 className="text-3xl font-bold mb-4">{room.title}</h3>
//             <p className="text-orange-700">{room.location}</p>
//           </div>

//           {/* Room Details and Price */}
//           <div className="p-6 rounded-lg shadow-md mt-6">
//             <h2 className="text-2xl font-bold mb-4">Room Details</h2>
//             <p className="mb-4">{room.description}</p>
//             <p className="text-lg font-semibold mb-4">Amenities:</p>
//             <ul className="list-disc list-inside mb-4">
//               {room.amenities && room.amenities.length > 0 ? (
//                 room.amenities.map((amenity, idx) => <li key={idx}>{amenity}</li>)
//               ) : (
//                 <li>No amenities listed.</li>
//               )}
//             </ul>
//             <p className="text-indigo-800 text-xl font-bold">{room.price} /month</p>
//           </div>
//         </div>

//         {/* Contact Information Section */}
//         <div className="basis-2/5">
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-xl font-bold mb-6">Contact Information</h3>
//             <div className="my-4">
//               <h4 className="text-lg font-semibold">Contact Email:</h4>
//               <p className="my-2 bg-indigo-100 p-2 font-bold">{room.contactEmail || 'example@mail.com'}</p>
//             </div>
//             <div className="my-4">
//               <h4 className="text-lg font-semibold">Contact Phone:</h4>
//               <p className="my-2 bg-indigo-100 p-2 font-bold">{room.contactPhone || '+977 1234567890'}</p>
//             </div>
//           </div>

//           {/* Room Location Section */}
//           <div className="bg-white p-6 rounded-lg shadow-md mt-6">
//             <h3 className="text-xl font-bold mb-6">Room Location</h3>
//             <p>{room.location}</p>
//             {/* Optional: Add a map or further location details here */}
//           </div>

//           {/* Additional Information Section */}
//           <div className="bg-white p-6 rounded-lg shadow-md mt-6">
//             <h3 className="text-xl font-bold mb-6">Additional Information</h3>
//             <p>{room.additionalInfo || 'No additional information provided.'}</p>
//             {room.availableFrom && <p className="mt-4">Available from: {new Date(room.availableFrom).toLocaleDateString()}</p>}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SingleRoom;
