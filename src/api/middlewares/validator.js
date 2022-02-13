const { validation } = require('../../loaders/validator.js');
const responses = require('../responses/index.js');

const isValidGetRecordsBody = (req, res, next) => {
    const valid = validation.getRecordsBody(req.body);

    if (valid) {
        return next();
    }

    return responses.badRequest(res);
};

module.exports = { isValidGetRecordsBody };
