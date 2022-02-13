const config = {
    MONGO_URL: process.env.MONGO_URL,
    PORT: process.env.PORT || 3000,
    ENV: process.env.NODE_ENV || 'test',
};

module.exports = config;
