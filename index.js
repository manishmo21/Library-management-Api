const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/libraryDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/books', require('./routes/book'));
app.use('/users', require('./routes/user'));
app.use('/borrows', require('./routes/borrow'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

