const express = require('express');
const authRoutes = require('./authRoutes');
const videoRoutes = require('./videoRoutes');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/videos', videoRoutes);

module.exports = router;
