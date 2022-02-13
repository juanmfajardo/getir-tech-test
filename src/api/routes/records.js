const express = require('express');
const getRecords = require('../controllers/records.js');
const { isValidGetRecordsBody } = require('../middlewares/validator.js');

const router = express.Router();

router.post('/', isValidGetRecordsBody, getRecords);

module.exports = router;
