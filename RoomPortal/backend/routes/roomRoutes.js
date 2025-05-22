import express from 'express';
import { getRooms, getRoomById, createRoom, updateRoom, deleteRoom } from '../controllers/roomController.js';
import { protectRoute } from '../controllers/authController.js';

const router = express.Router();

router.get('/', getRooms);
router.get('/:id', getRoomById);
// router.post('/', protectRoute, createRoom); // Protect creating rooms
// router.put('/:id', protectRoute, updateRoom); // Protect updating rooms
// router.delete('/:id', protectRoute, deleteRoom); // Protect deleting rooms

export default router;
