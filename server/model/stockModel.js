const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A stock must have a name'],
    },
    unitPrice: {
      type: Number,
      required: [true, 'A stock must have a unit price'],
    },
    type: {
      type: String,
      required: [true, 'A stock must have a type'],
      lowercase: true,
    },
    quantity: {
      type: Number,
      required: [true, 'A stock must have a quantity'],
    },
  },
  {
    timestamps: true,
  }
);

const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;
