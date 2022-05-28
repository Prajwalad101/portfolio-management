const express = require('express');
const cors = require('cors');
const app = express();

const stockRouter = require('./routes/stockRoutes');

app.use(express.json());
app.use(cors());

app.use('/api', stockRouter);

module.exports = app;
