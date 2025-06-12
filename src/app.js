const express = require('express');
const rateLimiter = require('./middlewares/rateLimiter');
const testRoute = require('./routes/testRoute');

const app = express();
app.use(express.json());
app.use(rateLimiter);
app.use('/api',testRoute);
module.exports = app;

