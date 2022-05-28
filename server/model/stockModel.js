const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, 'A stock must have a name'],
  },
  unitPrice: {
    type: Number,
    required: [true, 'A stock must have a unit price'],
  },
  type: {
    type: String,
    required: [true, 'A stock must have a type'],
  },
  quantity: {
    type: Number,
    required: [true, 'A stock must have a quantity'],
  },
});

const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;
