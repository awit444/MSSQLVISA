require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/dbConfig');
const visaRoutes = require('./routes/visaRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enable CORS for the other system to access this API
app.use(express.json()); // Parse incoming JSON payloads

// Log all incoming requests so they appear in pm2 logs
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Connect to the database
connectDB();

// API Routes
app.use('/api/visa', visaRoutes);

// Basic health check route
app.get('/', (req, res) => {
    res.json({ message: 'MSSQL Web Service is running.' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
