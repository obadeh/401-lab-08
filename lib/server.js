

// 3rd party dependencies
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// internal files
const categoriesRoute = require('../routes/categoriesRoute.js');
const productsRoute = require('../routes/productsRoute.js');

// application constants
const app = express();

// 3rd party middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// 1st party middleware
const errorHandler = require('../middleware/error');
const notFound = require('../middleware/notfound');

app.use('/api/v1', categoriesRoute);
app.use('/api/v1', productsRoute);

// Catchalls
app.use(notFound);
app.use(errorHandler);

module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 2222;
    app.listen(PORT, () => console.log(`server up: ${PORT}`));
  },
};