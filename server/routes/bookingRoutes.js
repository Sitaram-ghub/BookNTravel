const express = require('express');
const router = express.Router();
const {
  createBooking,
  getMyBookings,
  getBookings,
  deleteBooking,
} = require('../controllers/bookingController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/').post(protect, createBooking).get(protect, admin, getBookings);
router.route('/mybookings').get(protect, getMyBookings);
router.route('/:id').delete(protect, deleteBooking);

module.exports = router;
