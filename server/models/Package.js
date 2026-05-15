const mongoose = require('mongoose');

const packageSchema = mongoose.Schema(
  {
    packageName: {
      type: String,
      required: [true, 'Please add a package name'],
    },
    duration: {
      type: String, // e.g., '5 Days / 4 Nights'
      required: [true, 'Please add a duration'],
    },
    price: {
      type: Number,
      required: [true, 'Please add a price'],
    },
    destination: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Destination',
    },
    description: {
      type: String,
      required: [true, 'Please add a description'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Package', packageSchema);
