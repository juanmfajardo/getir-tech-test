const { validation } = require('../../loaders/validator.js');
const responses = require('../responses/index.js');

const isValidGetRecordsBody = (req, res, next) => {
    const valid = validation.getRecordsBody(req.body);

    if (valid) {
        return next();
    }

    const [error] = validation.getRecordsBody.errors;
    return responses.badRequest(res, { error: error.message, field: error.instancePath });
};

module.exports = { isValidGetRecordsBody };
