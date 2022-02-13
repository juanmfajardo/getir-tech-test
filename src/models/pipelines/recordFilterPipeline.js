const getAggregatePipeline = (startOfDayDate, endOfDayDate, minCount, maxCount) => {
    const pipeline = [
        {
            $match: {
                createdAt: {
                    $gte: startOfDayDate,
                    $lte: endOfDayDate,
                },
            },
        },
        {
            $addFields: {
                totalCount: {
                    $sum: '$counts',
                },
            },
        },
        {
            $match: {
                totalCount: {
                    $gte: minCount,
                    $lte: maxCount,
                },
            },
        },
        {
            $project: {
                _id: 0,
                value: 0,
                counts: 0,
            },
        },
    ];

    return pipeline;
};

module.exports = getAggregatePipeline;
