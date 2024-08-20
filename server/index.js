const express = require('express');
const connectedDB = require('./db');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes'); // Make sure this path is correct

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to the database
connectedDB();

// Middleware to log every request
app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next();
});

// Use the user routes
app.use('/api/users', (req, res, next) => {
    console.log('API Route hit:', req.path);
    next();
}, userRoutes);

// Catch-all route to handle undefined routes
app.use((req, res) => {
    console.log(`Unhandled route: ${req.method} ${req.url}`);
    res.status(404).send('Route not found');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
