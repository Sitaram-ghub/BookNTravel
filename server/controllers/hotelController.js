const Hotel = require('../models/Hotel');

const getHotels = async (req, res) => {
  try {
    const { location } = req.query;
    let query = {};
    if (location) query.location = new RegExp(location, 'i');

    const hotels = await Hotel.find(query);
    res.json(hotels);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getHotels };
