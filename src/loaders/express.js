const cors = require('cors');

const express = require('express');
const setRoutes = require('../api');
const responses = require('../api/responses');

const expressInit = (app) => {
    app.use(cors());
    app.use((req, res, next) => {
        express.json()(req, res, (err) => {
            if (err) {
                return responses.badRequest(res, { error: err.message });
            }

            return next();
        });
    });

    setRoutes(app);
};

module.exports = expressInit;
