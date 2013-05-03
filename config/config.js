module.exports = function (app, express) {
    app.configure(function() {
        app.set('port', 8885);
        app.use(express.logger('dev'));
        app.use(express.compress());
        app.use(express.methodOverride());
		app.use(express.bodyParser());
		app.use(express.static(__dirname + '/../public'));
        app.use(app.router);
        if ('development' == app.get('env')) {
            app.use(express.errorHandler());
        }
    });
	
	require('./view-engine')(app);
    require('./routes')(app);
}