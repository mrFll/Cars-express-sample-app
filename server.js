const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.APP_RUNNING_PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running!');
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})