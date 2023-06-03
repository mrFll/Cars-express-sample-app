const express = require('express');
require('dotenv').config();

const UserRoutes = require('./users/routes');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.use('/api/users', UserRoutes);

module.exports = app;