const express = require('express');
const cors = require('cors');
const { exec } = require('child_process');
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

app.listen(PORT, () => {
  // Use ANSI colors to make the link blue and clickable
  console.log(`\x1b[32m✔\x1b[0m Server running in \x1b[36m${process.env.NODE_ENV}\x1b[0m mode on port \x1b[1m${PORT}\x1b[0m`);
  console.log(`\x1b[34m\x1b[1m➜  Frontend Link: \x1b[4mhttp://localhost:${PORT}\x1b[0m`);

  // Note: nodemon restarts the server on every file change. 
  // If you want to stop the browser from opening every time, comment out the lines below.
  if (process.env.NODE_ENV === 'development') {
    // Only open if it's the initial start (not a nodemon restart) - optional check
    // exec(`start http://localhost:${PORT}`);
    console.log(`\x1b[90m(Browser auto-open is enabled. Use Ctrl+C to stop the server)\x1b[0m`);
  }
});
