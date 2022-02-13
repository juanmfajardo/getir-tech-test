const httpStatusCode = {
    BAD_REQUEST: 400,
    INTERNAL_SERVER: 500,
    NOT_FOUND: 404,
    SUCCESS: 200,
};

const appStatusCode = {
    BAD_REQUEST: 1,
    INTERNAL_SERVER: 2,
    NOT_FOUND: 3,
    SUCCESS: 0,
};

const appStatusMsg = {
    BAD_REQUEST: 'Bad Request',
    NOT_FOUND: 'Not Found',
    SUCCESS: 'Success',
};

const responses = {};

responses.badRequest = (res, extraParams) => {
    res.status(httpStatusCode.BAD_REQUEST).json({
        code: appStatusCode.BAD_REQUEST,
        msg: appStatusMsg.BAD_REQUEST,
        ...extraParams,
    });
};

responses.success = (res, extraParams) => {
    res.status(httpStatusCode.SUCCESS).json({
        code: appStatusCode.SUCCESS,
        msg: appStatusMsg.SUCCESS,
        ...extraParams,
    });
};

responses.notFound = (res, extraParams) => {
    res.status(httpStatusCode.NOT_FOUND).json({
        code: appStatusCode.NOT_FOUND,
        msg: appStatusMsg.NOT_FOUND,
        ...extraParams,
    });
};

responses.internalServerError = (error, res, extraParams) => {
    res.status(httpStatusCode.INTERNAL_SERVER).json({
        code: appStatusCode.INTERNAL_SERVER,
        msg: error.message,
        ...extraParams,
    });
};

module.exports = responses;
