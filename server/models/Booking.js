const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    packageId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Package',
    },
    flightId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Flight',
    },
    trainId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Train',
    },
    hotelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hotel',
    },
    bookingType: {
      type: String,
      enum: ['package', 'flight', 'train', 'hotel'],
      required: true,
      default: 'package'
    },
    details: {
      type: Object, // To store specific details like className for trains, roomType for hotels
      default: {}
    },
    bookingDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    travelers: {
      type: Number,
      required: [true, 'Please specify the number of travelers'],
      min: 1,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    paymentStatus: {
      type: String,
      enum: ['Pending', 'Completed', 'Failed'],
      default: 'Pending',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Booking', bookingSchema);
