const Train = require('../models/Train');

const getTrains = async (req, res) => {
  try {
    const { origin, destination } = req.query;
    let query = {};
    if (origin) query.origin = new RegExp(origin, 'i');
    if (destination) query.destination = new RegExp(destination, 'i');

    const trains = await Train.find(query);
    res.json(trains);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getTrains };
