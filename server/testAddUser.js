const mongoose = require('mongoose');
const connectDb = require('./db'); // Path to your database connection file
const User = require('./models/user'); // Path to your User model

const testAddUser = async () => {
    try {
        // Connect to the database
        await connectDb();

        // Create a new user
        const newUser = new User({
            email: 'Oscar@gmail.com',
            password: 'password123'
        });

        // Save the user to the database
        await newUser.save();
        console.log('User created successfully');

        // Optional: Verify user creation
        const user = await User.findOne({ email: 'testuser@example.com' });
        console.log('Retrieved User:', user);

    } catch (error) {
        console.error('Error:', error);
    } finally {
        // Disconnect from the database
        mongoose.connection.close();
    }
};

// Run the test
testAddUser();
