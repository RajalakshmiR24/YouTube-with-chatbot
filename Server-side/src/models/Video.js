const mongoose = require('mongoose');

// Video Schema
const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  videoUrl: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
