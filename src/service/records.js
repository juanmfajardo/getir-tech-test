const Record = require('../models/Record.js');
const getAggregatePipeline = require('../models/pipelines/recordFilterPipeline.js');

const getRecordsData = async (recordsFilter) => {
    const { startOfDayDate, endOfDayDate, minCount, maxCount } = recordsFilter;

    const aggregatePipeline = getAggregatePipeline(
        startOfDayDate,
        endOfDayDate,
        minCount,
        maxCount,
    );

    const elements = await Record.aggregate(aggregatePipeline);

    return elements;
};

module.exports = getRecordsData;
