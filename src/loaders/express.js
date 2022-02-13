const cors = require('cors');

const express = require('express');
const setRoutes = require('../api');

const expressInit = (app) => {
    app.use(cors());
    app.use(express.json());

    setRoutes(app);
};

module.exports = expressInit;
