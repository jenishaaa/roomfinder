import React, { useEffect, useState } from 'react';
import RoomCard from './RoomCard'; // Make sure RoomCard is correctly implemented

const RoomLists = () => {
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/rooms'); 
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setRooms(data);
    } catch (error) {
      setError('Error fetching rooms');
      console.error('Error fetching rooms:', error);
    }
  };

  return (
    <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
      {error && <p>{error}</p>}
      {rooms.length > 0 ? (
        rooms.map(room => (
          <RoomCard key={room._id} room={room} /> 
        ))
      ) : (
        <p>No rooms available</p>
      )}
    </div>
  );
};

export default RoomLists;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import SearchBar from './SearchBar';
// import { Link } from 'react-router-dom';

// const RoomList = () => {
//   const [rooms, setRooms] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchRooms();
//   }, []);

//   const fetchRooms = async () => {
//     try {
//       const response = await axios.get('http://localhost:3001/rooms');
//       setRooms(response.data);
//     } catch (err) {
//       setError('Error fetching rooms');
//       console.error('Error fetching rooms:', err);
//     }
//   };

//   const handleSearchResults = (results) => {
//     setRooms(results);
//   };

//   return (
//     <div>
//       <h1>Room List</h1>
//       <SearchBar onSearchResults={handleSearchResults} />
//       {error && <p>{error}</p>}
//       <ul>
//         {rooms.length > 0 ? (
//           rooms.map(room => (
//             <li key={room._id}>
//               <Link to={`/rooms/${room._id}`}>
//                 <strong>{room.name}</strong> - {room.location} - Capacity: {room.capacity}
//               </Link>
//             </li>
//           ))
//         ) : (
//           <p>No rooms available</p>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default RoomLists;



// // import React, { useEffect, useState } from 'react';
// // import RoomCard from './RoomCard';

// // const RoomLists = () => {
// //   const [rooms, setRooms] = useState([]);

// //   useEffect(() => {
// //     // Fetch room data from the backend
// //     fetch('http://localhost:3000/api/rooms') // Ensure this URL matches your backend route
// //       .then(response => response.json())
// //       .then(data => setRooms(data))
// //       .catch(error => console.error('Error fetching rooms:', error));
// //   }, []);

// //   return (
// //     <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
// //       {rooms.length > 0 ? (
// //         rooms.map(room => (
// //           <RoomCard key={room.id} room={room} />
// //         ))
// //       ) : (
// //         <p>No rooms available</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default RoomLists;
