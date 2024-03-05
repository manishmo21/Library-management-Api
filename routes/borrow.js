const express = require('express');
const router = express.Router();
const Borrow = require('../Models/borrowModel');

// Borrow a book
router.post('/', async (req, res) => {
  try {
    const { userId, bookId } = req.body;
    const newBorrow = new Borrow({ userId, bookId });
    await newBorrow.save();
    res.status(201).json(newBorrow);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Return a borrowed book
router.patch('/:id', async (req, res) => {
  try {
    const borrow = await Borrow.findById(req.params.id);
    if (!borrow) {
      return res.status(404).json({ message: 'Borrow record not found' });
    }
    borrow.returnDate = new Date();
    await borrow.save();
    res.json(borrow);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
