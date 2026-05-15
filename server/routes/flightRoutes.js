const express = require('express');
const router = express.Router();
const { getFlights } = require('../controllers/flightController');

router.route('/').get(getFlights);

module.exports = router;
