const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/your-database-name', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define routes
app.use('/books', require('./routes/bookRoutes'));
app.use('/users', require('./routes/userRoutes'));
app.use('/borrows', require('./routes/borrowRoutes'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

