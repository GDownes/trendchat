module.exports = function (app) { 
	var swig = require('swig'), cons = require('consolidate');
	
	app.engine('.html', cons.swig);
	app.set('views', __dirname + '/../views');
	app.set('view engine', 'html');
	
	swig.init({ 
		root: app.get('views'),
		allowErrors: true 
	});
}