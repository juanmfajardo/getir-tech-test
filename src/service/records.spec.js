jest.mock('../models/pipelines/recordFilterPipeline.js');
jest.mock('../models/Record.js');

const getRecordsData = require('./records.js');
const Record = require('../models/Record.js');
const getAggregatePipeline = require('../models/pipelines/recordFilterPipeline.js');

describe('records', () => {
    describe('getRecordsData', () => {
        describe('when called', () => {
            let recordFilterFixture;
            let aggregatePipelineFixture;
            let aggregateFixture;
            let result;

            beforeAll(async () => {
                recordFilterFixture = {
                    startOfDayDate: '2019-01-01',
                    endOfDayDate: '2019-01-02',
                    minCount: 1,
                    maxCount: 2,
                };
                aggregatePipelineFixture = {};
                aggregateFixture = [];

                getAggregatePipeline.mockReturnValueOnce(aggregatePipelineFixture);
                Record.aggregate.mockReturnValueOnce(aggregateFixture);

                result = await getRecordsData(recordFilterFixture);
            });

            it('should call getAggregatePipeline()', () => {
                const { startOfDayDate, endOfDayDate, minCount, maxCount } = recordFilterFixture;

                expect(getAggregatePipeline).toHaveBeenCalledTimes(1);
                expect(getAggregatePipeline).toHaveBeenCalledWith(
                    startOfDayDate,
                    endOfDayDate,
                    minCount,
                    maxCount,
                );
            });

            it('should call Record.aggregate()', () => {
                expect(Record.aggregate).toHaveBeenCalledTimes(1);
                expect(Record.aggregate).toHaveBeenCalledWith({});
            });

            it('should return an empty array', () => {
                expect(result).toStrictEqual(aggregateFixture);
            });
        });
    });
});
