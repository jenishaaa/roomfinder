import express from 'express';
import { registerUser, authenticateUser, protectRoute } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', authenticateUser);

// Protected route example
router.get('/profile', protectRoute, (req, res) => {
  res.status(200).json({
    message: 'Profile accessed successfully',
    user: req.user, // { userId, role }
  });
});

export default router;
