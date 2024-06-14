const mongoose = require('mongoose');
const logger = require('../lib/logger').logger
const config = require('../configs/config.json')

const connectMongo = async () => {
  try {
    //mongodb://${config.MONGODB_HOST_PORT}/${config.MONGODB_DATABASE} 
    const conn = await mongoose.connect(config.MONGO_CONNECTION_STRING, {
      useNewUrlParser: true,
    });
    logger.info(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    logger.error(error.message);
    process.exit(1);
  }
}

module.exports = connectMongo