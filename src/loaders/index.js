const { validatorInit } = require('./validator.js');
const databaseInit = require('./mongoose.js');
const expressInit = require('./express.js');

const loaders = async (app) => {
    await databaseInit();
    expressInit(app);
    validatorInit();
};

module.exports = loaders;
