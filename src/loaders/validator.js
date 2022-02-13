const Ajv = require('ajv');
const addFormats = require('ajv-formats');

const validation = {};

const getRecordsBodyJsonSchema = () => ({
    type: 'object',
    properties: {
        startDate: {
            type: 'string',
            format: 'date',
        },
        endDate: {
            type: 'string',
            format: 'date',
        },
        minCount: {
            type: 'integer',
            minimum: 0,
        },
        maxCount: {
            type: 'integer',
            minimum: 0,
        },
    },
    required: ['startDate', 'endDate', 'minCount', 'maxCount'],
});

const validatorInit = () => {
    const ajv = new Ajv();
    addFormats(ajv);

    const getRecordsBodySchema = getRecordsBodyJsonSchema();

    validation.getRecordsBody = ajv.compile(getRecordsBodySchema);
};

module.exports = { validation, validatorInit };
