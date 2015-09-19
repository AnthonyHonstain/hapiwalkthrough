var Hapi = require('hapi');
var Good = require('good');
var logic = require('./server/logic');

var server = new Hapi.Server();
server.connection({ port: (process.env.PORT || 3000) });


server.route({
	method: 'GET',
	path: '/',
	handler: function (request, reply) {
		reply('Hello, world!');
	}
});

server.route({
	method: 'GET',
	path: '/{name}',
	handler: function (request, reply) {
		logic.upperCase(request, reply);
	}
});

server.register({
	register: Good,
	options: {
		reporters: [{
			reporter: require('good-console'),
			events: {
				response: '*',
				log: '*'
			}
		}]
	}
}, function (err) {
	if (err) {
		throw err; // something bad happend loading the plugin
	}

	server.start(function () {
		console.log('Server running at:', server.info.uri, ':', server.info.port);
	});
});

