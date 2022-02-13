const mongoose = require('mongoose');
const config = require('../config');

const databaseInit = async () => {
    await mongoose.connect(config.MONGO_URL);

    mongoose.connection.on('error', (err) => {
        console.log('Error connecting to database:', err);
        process.exit(1);
    });
};

module.exports = databaseInit;
