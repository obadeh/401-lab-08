'use strict';

const schema = require('./categories-schema');
const Model = require('./model.js');

class Categorie extends Model {
  constructor() {
    super(schema);
  }
}

module.exports = new Categorie();