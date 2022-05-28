const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;

const app = express();

mongoose
  .connect(
    'mongodb+srv://prajwal:prajwalad101@cluster0.o1p1x.mongodb.net/portfolio?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('DB connection successful');
  })
  .catch((err) => console.log('Error while connecting to the database'));

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

app.post('/api/stock', (req, res) => {
  res.status(200).json({
    status: 'success',
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
