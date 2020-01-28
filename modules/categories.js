'use strict';

const categorietSchema = require('./categories-schema');
const Model = require('./model.js');

class Categorie extends Model {
  constructor() {
    super(categorietSchema);
  }
}

module.exports = new Categorie();