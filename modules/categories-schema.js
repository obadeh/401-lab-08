'use strict';

const mongoose = require('mongoose');

const food = mongoose.Schema({
  name: { type: String, required: true },
  display_name: { type: String, required: true },
  description: { type: String, uppercase: true, enum: ['FRUIT', 'VEGETABLE', 'MEAT']}
});

module.exports = mongoose.model('food', food);