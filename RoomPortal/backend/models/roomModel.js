import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: String,
  preferredTenants: Number,
  price: Number,
  description: String,
  type: String,
  amenities: [String],
  images: [String],
  preferredGender: String,
  size: Number,
});

const Room = mongoose.model('Room', roomSchema);

export default Room;
