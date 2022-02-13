const response = require('./responses/index.js');
const recordRoutes = require('./routes/records.js');

const setRoutes = async (app) => {
    app.use('/records', recordRoutes);

    app.use((req, res) => response.notFound(res));
    app.use((err, req, res) => response.internalServerError(err, res));
};

module.exports = setRoutes;
