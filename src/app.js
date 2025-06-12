const express = require('express');
const rateLimiter = require('./middlewares/rateLimiter');

const app = express();
app.use(rateLimiter);
app.get('/', (req, res) => {
  res.send('Request successful');
});

module.exports = app;