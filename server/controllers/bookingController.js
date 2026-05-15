const Booking = require('../models/Booking');

// @desc    Create new booking
// @route   POST /api/bookings
// @access  Private
const createBooking = async (req, res) => {
  try {
    const { bookingType, packageId, flightId, trainId, hotelId, travelers, details, totalPrice } = req.body;

    if (!bookingType || !travelers) {
      return res.status(400).json({ message: 'Please provide booking type and travelers count' });
    }

    const booking = new Booking({
      userId: req.user._id,
      bookingType,
      packageId,
      flightId,
      trainId,
      hotelId,
      travelers,
      details,
      totalPrice
    });

    const createdBooking = await booking.save();
    res.status(201).json(createdBooking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Get user bookings
// @route   GET /api/bookings/mybookings
// @access  Private
const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user._id })
      .populate({
        path: 'packageId',
        populate: { path: 'destination' },
      })
      .populate('flightId')
      .populate('trainId')
      .populate('hotelId');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all bookings
// @route   GET /api/bookings
// @access  Private/Admin
const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({})
      .populate('userId', 'id name email')
      .populate({
        path: 'packageId',
        populate: { path: 'destination' },
      })
      .populate('flightId')
      .populate('trainId')
      .populate('hotelId');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete a booking
// @route   DELETE /api/bookings/:id
// @access  Private
const deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    // Check ownership: user must own the booking, or be an admin
    if (booking.userId.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to delete this booking' });
    }

    await booking.deleteOne();
    res.json({ message: 'Booking deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createBooking,
  getMyBookings,
  getBookings,
  deleteBooking,
};
