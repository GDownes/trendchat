module.exports = function (app) {
	var routes = require('../routes');
    app.get('/', routes.index);
}