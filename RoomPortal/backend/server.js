import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import roomRoutes from './routes/roomRoutes.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/roomseeker';

// Middlewares
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

// MongoDB Connection
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('Failed to connect to MongoDB', err));

// API Routes
app.use('/api/rooms', roomRoutes);
app.use('/api/auth', authRoutes);

// Root Route
app.get('/', (req, res) => {
  res.send('Welcome to the backend server!');
});

// Start Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
