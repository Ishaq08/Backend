import mongoose from 'mongoose'; // import

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowerCase: true,
    },

    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
); // create Schema

export const User = mongoose.model('User', userSchema); // import Schema
