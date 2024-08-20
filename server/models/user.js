const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // Ensures emails are unique
    lowercase: true // Converts emails to lowercase
  },
  password: {
    type: String,
    required: true
  }
});

// Create the model
const User = mongoose.model('User', userSchema);

module.exports = User;
