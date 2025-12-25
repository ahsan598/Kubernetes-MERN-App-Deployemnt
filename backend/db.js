const mongoose = require('mongoose');

module.exports = async function connectDB() {
  try {
    const options = {};

    if (process.env.USE_DB_AUTH === 'true') {
      options.user = process.env.MONGO_USERNAME;
      options.pass = process.env.MONGO_PASSWORD;
    }

    await mongoose.connect(process.env.MONGO_CONN_STR, options);

    console.log('Connected to database');
  } catch (error) {
    console.error('Could not connect to database:', error.message);
    process.exit(1);
  }
};
