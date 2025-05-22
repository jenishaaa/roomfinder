// backend/middleware/authMiddleware.js

export const adminMiddleware = (req, res, next) => {
    // Assuming you have a way to check if a user is an admin
    if (req.user && req.user.isAdmin) {
      next();
    } else {
      res.status(403).json({ message: 'Access denied' });
    }
  };
  