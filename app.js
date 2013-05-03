var express = require('express')
, app = express()
, server = require('http').createServer(app)
, io = require('socket.io').listen(server)
, path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
require('./config/config')(app, express);

server.listen(app.get('port'));

io.sockets.on('connection', function (socket) {
	socket.emit('news', { hello: 'world' });
	socket.emit('news', { hello: 'moving' });
	io.sockets.emit('news', { hello: 'message' });
	socket.on('my other event', function (data) {
		console.log(data);
	});
});