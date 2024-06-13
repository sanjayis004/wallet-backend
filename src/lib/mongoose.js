const mongoose = require('mongoose');
const logger = require('../lib/logger').logger
const config = require('../configs/config.json')

const connectMongo = async () => {
  try {
    const conn = await mongoose.connect(`mongodb://${config.MONGODB_HOST_PORT}/${config.MONGODB_DATABASE}`, {
      useNewUrlParser: true,
    });
    logger.info(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    logger.error(error.message);
    process.exit(1);
  }
}

module.exports = connectMongo