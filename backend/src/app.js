const express = require('express');
const router = require('./router');
const app = express();
const cors = require('cors');

app.use('/api', router);
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000/');
  res.header('Access-Control-Allow-Methods', 'GET, POST PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  app.use(cors());
  next();
});
module.exports = app;