const mongoose = require('mongoose');

const hotelSchema = mongoose.Schema({
  hotelName: { type: String, required: true },
  location: { type: String, required: true },
  rating: { type: Number, required: true },
  image: { type: String },
  rooms: [
    {
      roomType: { type: String, required: true }, // e.g., 'Standard', 'Deluxe', 'Suite'
      pricePerNight: { type: Number, required: true },
      availability: { type: Number, default: 10 }
    }
  ]
});

module.exports = mongoose.model('Hotel', hotelSchema);
