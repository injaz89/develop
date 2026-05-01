const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

const todoRoutes = require('./routes/todoRoutes');

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 5000 // Timeout after 5 seconds instead of hanging
})
  .then(() => console.log('✅ Successfully connected to MongoDB'))
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
    if (err.message.includes('Could not connect to any servers')) {
      console.error('👉 TIP: Check if your IP address is whitelisted in MongoDB Atlas (Network Access).');
    }
  });

// Basic route to test the server
app.get('/', (req, res) => {
  res.send('Backend Server is Running!');
});

// Mount Todo routes
app.use('/api/todos', todoRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
