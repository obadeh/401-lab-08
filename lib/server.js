'use strict';

// 3rd party dependencies
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// internal files
const route = require('../routes/router.js');

// application constants
const app = express();

// 3rd party middleware
app.use(express.json())
app.use(cors());
app.use(morgan('dev'));

// 1st party middleware
app.use('/api/v1', route);

module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 2222;
    app.listen(PORT, () => console.log(`server up: ${PORT}`));
  }
}