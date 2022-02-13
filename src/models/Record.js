const mongoose = require('mongoose');

const { Schema } = mongoose;

const record = new Schema({
    key: String,
    createdAt: Date,
    counts: [Number],
    value: String,
});

const Record = mongoose.model('Record', record);

module.exports = Record;
