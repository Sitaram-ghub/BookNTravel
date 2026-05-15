const mongoose = require('mongoose');

const destinationSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a title'],
    },
    image: {
      type: String,
      required: [true, 'Please add an image URL'],
    },
    description: {
      type: String,
      required: [true, 'Please add a description'],
    },
    location: {
      type: String,
      required: [true, 'Please add a location (Country/City)'],
    },
    price: {
      type: Number,
      required: [true, 'Please add an average price'],
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    latitude: {
      type: Number,
      default: 0,
    },
    longitude: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Destination', destinationSchema);
