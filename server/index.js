const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;

const app = require('./app');

mongoose
  .connect(
    'mongodb+srv://prajwal:prajwalad101@cluster0.o1p1x.mongodb.net/portfolio?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('DB connection successful');
  })
  .catch((err) => console.log('Error while connecting to the database'));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
