const Flight = require('../models/Flight');

const getFlights = async (req, res) => {
  try {
    const { origin, destination } = req.query;
    let query = {};
    if (origin) query.origin = new RegExp(origin, 'i');
    if (destination) query.destination = new RegExp(destination, 'i');

    const flights = await Flight.find(query);
    res.json(flights);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getFlights };
