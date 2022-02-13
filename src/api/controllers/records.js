const moment = require('moment');

const getRecordsData = require('../../service/records.js');
const responses = require('../responses/index.js');

const getRecords = async (req, res, next) => {
    try {
        const { startDate, endDate, minCount, maxCount } = req.body;

        const recordsFilter = {
            startOfDayDate: moment(startDate).startOf('day').toDate(),
            endOfDayDate: moment(endDate).endOf('day').toDate(),
            minCount,
            maxCount,
        };

        const records = await getRecordsData(recordsFilter);
        const recordsResponse = { records };

        return responses.success(res, recordsResponse);
    } catch (error) {
        return next(error);
    }
};

module.exports = getRecords;
