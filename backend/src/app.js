const express = require('express');
const router = require('./router');
const app = express();

app.use('/api', router);
app.use(express.json());



module.exports = app;