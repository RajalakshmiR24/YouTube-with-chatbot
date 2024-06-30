const express = require('express');
const router = express.Router();
const User = require('../models/index').User;

// Handle sign up
router.post('/sign-up', async (req, res) => {
  const { name, email, password, phone } = req.body;

  try {
    const user = new User({ name, email, password, phone });
    await user.save();
    res.status(201).json({ message: 'User signed up successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Handle sign in
router.post('/sign-in', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    res.status(200).json({ message: 'User signed in successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
