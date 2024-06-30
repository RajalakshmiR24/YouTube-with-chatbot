const mongoose = require('mongoose');

const connectDB = async () => {
  const dbURL = process.env.DB_URL || 'mongodb+srv://rajalakshmi1430:dTEAFPfc1g3NN69R@youtube.rskvwc9.mongodb.net/YouTube';
  
  try {
    await mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB Connected');
  } catch (err) {
    console.error('Connection Error', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
