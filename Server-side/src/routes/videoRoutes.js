const express = require('express');
const router = express.Router();

// Example video routes
router.get('/', (req, res) => {
  res.json({ message: 'Video routes' });
});

module.exports = router;
