const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const seedData = require('./seeder');
const { errorHandler } = require('./middleware/errorMiddleware');

// Load env vars
dotenv.config();

// Connect to database
connectDB().then(() => {
  // Seed data if empty
  seedData();
});

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/destinations', require('./routes/destinationRoutes'));
app.use('/api/packages', require('./routes/packageRoutes'));
app.use('/api/bookings', require('./routes/bookingRoutes'));
app.use('/api/contacts', require('./routes/contactRoutes'));
app.use('/api/flights', require('./routes/flightRoutes'));
app.use('/api/trains', require('./routes/trainRoutes'));
app.use('/api/hotels', require('./routes/hotelRoutes'));
app.use('/api/ai', require('./routes/aiRoutes'));

const path = require('path');

// Serve static assets from client folder
app.use(express.static(path.join(process.cwd(), 'client')));

// Redirect any non-API routes to index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'client/index.html'));
});

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
