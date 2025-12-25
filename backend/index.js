require('dotenv').config();

const express = require('express');
const cors = require('cors');

const tasks = require('./routes/tasks');
const connection = require('./db');

const app = express();

connection();

app.use(cors());
app.use(express.json());

app.get('/ok', (_, res) => {
  res.status(200).send('ok');
});

app.use('/api/tasks', tasks);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
