const mongoose = require('mongoose');

const trainSchema = mongoose.Schema({
  trainName: { type: String, required: true },
  trainNumber: { type: String, required: true },
  origin: { type: String, required: true },
  destination: { type: String, required: true },
  departureTime: { type: Date, required: true },
  arrivalTime: { type: Date, required: true },
  classes: [
    {
      className: { type: String, required: true }, // e.g., '1AC', '2AC', 'Sleeper'
      price: { type: Number, required: true },
      seatsAvailable: { type: Number, default: 50 }
    }
  ]
});

module.exports = mongoose.model('Train', trainSchema);
