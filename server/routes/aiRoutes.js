const express = require('express');
const router = express.Router();
const { generateItinerary } = require('../controllers/aiController');

// Map incoming real AI generator payload requests directly to the dedicated controller
router.post('/generate-itinerary', generateItinerary);

module.exports = router;
