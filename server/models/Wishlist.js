const mongoose = require('mongoose');

const wishlistSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  destinationId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Destination',
  }
}, { timestamps: true });

module.exports = mongoose.model('Wishlist', wishlistSchema);
