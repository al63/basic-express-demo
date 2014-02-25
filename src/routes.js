exports.setupRoutes = function(app) {

    app.get('/', require('./routes/index.js').route);

    app.get('/:arbitraryid', require('./routes/lol.js').route);
}
