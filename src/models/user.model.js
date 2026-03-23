// Import mongoose and Schema constructor
import mongoose, { Schema } from "mongoose";

// Import jsonwebtoken (used for creating authentication tokens)
import jwt from "jsonwebtoken";

// Import bcrypt (used for hashing passwords securely)
import bcrypt from "bcrypt";

// Create a new schema (blueprint) for User collection
const userSchema = new Schema({
  username: {
    type: String,            // Data type is String
    required: true,          // Field is mandatory
    unique: true,            // No two users can have the same username
    lowercase: true,         // Automatically convert to lowercase before saving
    trim: true,              // Remove extra spaces from start and end
    index: true,             // Create index for faster searching
  },

  email: {
    type: String,
    required: true,
    unique: true,            // Email must be unique
    lowercase: true,
    trim: true,
    index: true,
  },

  fullname: {
    type: String,
    required: true,
    trim: true,
    index: true,
  },

  avatar: {
    type: String,            // Stores Cloudinary public ID or image URL
    required: true,
  },

  coverImage: {
    type: String,            // Optional cover image
  },

  watchHistory: [
    {
      type: Schema.Types.ObjectId,  // Stores MongoDB ObjectId
      ref: "Video",                 // Reference to Video model (creates relationship)
    },
  ],

  password: {
    type: String,
    required: [true, "password is required"], // Custom error message
  },

  refereshToken: {
    type: String,
    required: true,          // Stores refresh token for authentication
  },
});


// Mongoose middleware (runs BEFORE saving user to database)
userSchema.pre("save", async function (next) {

  // If password is NOT modified, skip hashing
  if (!this.isModified("password")) {
    return next();
  }

  // Hash the password with bcrypt (salt rounds = 10)
  this.password = await bcrypt.hash(this.password, 10);

  next(); // Move to next middleware / save process
});


// Custom method to compare entered password with hashed password
userSchema.methods.isPasswordCorrect = async function (password) {

  // Compare plain password with hashed password stored in DB
  return await bcrypt.compare(password, this.password);
};


// Create and export User model from schema
export const user = mongoose.model("User", userSchema);
