import mongoose from 'mongoose'; // Needed for ObjectId validation
import Room from '../models/roomModel.js'; // Import Room model

// Get all rooms
export const getRooms = async (req, res) => {
  try {
    const rooms = await Room.find(); // Fetch all rooms
    res.status(200).json(rooms);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving rooms' });
  }
};

// Get room by ID
export const getRoomById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid room ID format' });
  }

  try {
    const room = await Room.findById(id);
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }
    res.status(200).json(room);
  } catch (err) {
    console.error('Error retrieving room by ID:', err);
    res.status(500).json({ message: 'Error retrieving room details' });
  }
};

// Create a new room
export const createRoom = async (req, res) => {
  const newRoom = new Room(req.body);
  try {
    const savedRoom = await newRoom.save();
    res.status(201).json(savedRoom);
  } catch (err) {
    res.status(500).json({ message: 'Error creating room' });
  }
};

// Update a room
export const updateRoom = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid room ID format' });
  }

  try {
    const updatedRoom = await Room.findByIdAndUpdate(id, updatedData, { new: true });
    if (!updatedRoom) {
      return res.status(404).json({ message: 'Room not found' });
    }
    res.status(200).json(updatedRoom);
  } catch (err) {
    res.status(500).json({ message: 'Error updating room' });
  }
};

// Delete a room
export const deleteRoom = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid room ID format' });
  }

  try {
    const deletedRoom = await Room.findByIdAndDelete(id);
    if (!deletedRoom) {
      return res.status(404).json({ message: 'Room not found' });
    }
    res.status(200).json({ message: 'Room deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting room' });
  }
};
