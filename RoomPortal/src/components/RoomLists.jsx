import React, { useEffect, useState } from 'react';
import RoomCard from './RoomCard'; // Ensure this component is working correctly

const RoomLists = () => {
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/rooms');
      if (!response.ok) {
        throw new Error('Failed to fetch rooms');
      }
      const data = await response.json();
      setRooms(data);
    } catch (error) {
      setError('Error fetching rooms');
      console.error('Error fetching rooms:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading rooms...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-4">
      {rooms.length > 0 ? (
        rooms.map((room) => (
          <RoomCard key={room._id} room={room} />
        ))
      ) : (
        <p>No rooms available</p>
      )}
    </div>
  );
};

export default RoomLists;
