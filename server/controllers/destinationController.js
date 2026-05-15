const Destination = require('../models/Destination');

// @desc    Get all destinations
// @route   GET /api/destinations
// @access  Public
const getDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find({});
    res.json(destinations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single destination
// @route   GET /api/destinations/:id
// @access  Public
const getDestinationById = async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);
    if (destination) {
      res.json(destination);
    } else {
      res.status(404).json({ message: 'Destination not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a destination
// @route   POST /api/destinations
// @access  Private/Admin
const createDestination = async (req, res) => {
  try {
    const destination = await Destination.create(req.body);
    res.status(201).json(destination);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Update a destination
// @route   PUT /api/destinations/:id
// @access  Private/Admin
const updateDestination = async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);

    if (destination) {
      const updatedDestination = await Destination.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(updatedDestination);
    } else {
      res.status(404).json({ message: 'Destination not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Delete a destination
// @route   DELETE /api/destinations/:id
// @access  Private/Admin
const deleteDestination = async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);

    if (destination) {
      await destination.deleteOne();
      res.json({ message: 'Destination removed' });
    } else {
      res.status(404).json({ message: 'Destination not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getDestinations,
  getDestinationById,
  createDestination,
  updateDestination,
  deleteDestination,
};
