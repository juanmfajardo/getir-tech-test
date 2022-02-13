require('dotenv').config();
const express = require('express');
const config = require('./config/index.js');
const loaders = require('./loaders/index.js');

const app = express();

const startServer = async () => {
    await loaders(app);

    if (config.ENV !== 'test') {
        app.listen(config.PORT, () => {
            console.log(`Server started on port ${process.env.PORT}`);
        });

        app.on('error', (error) => {
            console.error(error.message);
            process.exit(1);
        });
    }
};

startServer();
