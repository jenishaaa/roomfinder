import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// ✅ Register a new user
export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    // No password hashing (not recommended for production)
    const user = new User({ username, email, password });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Error registering user:', err);
    res.status(500).json({ message: 'Error registering user' });
  }
};

// ✅ Authenticate a user (login)
export const authenticateUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Email not registered' });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    // ✅ Send both token and user data
    res.status(200).json({
      message: 'Authentication successful',
      token,
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      }
    });

  } catch (err) {
    console.error('Error authenticating user:', err);
    res.status(500).json({ message: 'Error authenticating user' });
  }
};

// ✅ Middleware to protect routes
export const protectRoute = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }

    req.user = decoded;
    next();
  });
};







// import User from '../models/userModel.js';
// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcrypt';

// // Secret key for JWT (should be stored in .env in production)
// const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// // ✅ Register a new user
// export const registerUser = async (req, res) => {
//   const { username, email, password } = req.body;

//   try {
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Email already in use' });
//     }

//     // ✅ Hash the password before saving
//     const hashedPassword = await bcrypt.hash(password, 10); // 10 salt rounds

//     const user = new User({ username, email, password: hashedPassword });
//     await user.save();

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (err) {
//     console.error('Error registering user:', err);
//     res.status(500).json({ message: 'Error registering user' });
//   }
// };

// // ✅ Authenticate a user (login)
// export const authenticateUser = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(401).json({ message: 'Email not registered' });
//     }

//     const passwordMatch = await bcrypt.compare(password, user.password);
//     if (!passwordMatch) {
//       return res.status(401).json({ message: 'Incorrect password' });
//     }

//     // ✅ Create JWT token
//     const token = jwt.sign(
//       { userId: user._id, role: user.role },
//       JWT_SECRET,
//       { expiresIn: '1h' }
//     );

//     res.status(200).json({ message: 'Authentication successful', token });
//   } catch (err) {
//     console.error('Error authenticating user:', err);
//     res.status(500).json({ message: 'Error authenticating user' });
//   }
// };

// // ✅ Middleware to protect routes
// export const protectRoute = (req, res, next) => {
//   const token = req.headers.authorization?.split(' ')[1]; // Expect "Bearer <token>"

//   if (!token) {
//     return res.status(401).json({ message: 'No token provided' });
//   }

//   jwt.verify(token, JWT_SECRET, (err, decoded) => {
//     if (err) {
//       return res.status(403).json({ message: 'Invalid token' });
//     }

//     req.user = decoded; // Attach user info to request
//     next();
//   });
// };
