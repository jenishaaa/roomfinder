// backend/models/userModel.js
import mongoose from 'mongoose';
// import bcrypt from 'bcrypt'; // Commented out if you want to disable hashing temporarily

// Define the User schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true, // Normalize emails
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['tenant', 'admin'],
    default: 'tenant',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// ❌ Disable hashing for now (not recommended for production)
/*
userSchema.pre('save', async function (next) {
  if (this.isModified('password') || this.isNew) {
    try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
      next();
    } catch (err) {
      next(err);
    }
  } else {
    next();
  }
});
*/

// ❌ Commented out comparePassword method too
/*
userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};
*/

// Create and export the User model
const User = mongoose.model('User', userSchema);
export default User;



// // backend/models/userModel.js
// import mongoose from 'mongoose';
// import bcrypt from 'bcrypt';

// // Define the User schema
// const userSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//     unique: true,
//     trim: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     trim: true,
//     lowercase: true,  // Normalize emails
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   role: {
//     type: String,
//     enum: ['tenant', 'admin'],
//     default: 'tenant',
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// // Hash the password before saving (only if modified or new)
// userSchema.pre('save', async function (next) {
//   if (this.isModified('password') || this.isNew) {
//     try {
//       const salt = await bcrypt.genSalt(10);
//       this.password = await bcrypt.hash(this.password, salt);
//       next();
//     } catch (err) {
//       next(err);
//     }
//   } else {
//     next();
//   }
// });

// // Method to compare passwords
// userSchema.methods.comparePassword = async function (candidatePassword) {
//   return bcrypt.compare(candidatePassword, this.password);
// };

// // Create and export the User model
// const User = mongoose.model('User', userSchema);
// export default User;
