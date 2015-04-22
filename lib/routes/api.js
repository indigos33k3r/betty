var express = require('express');
var config = require('../config');

module.exports = function(app) {
	var api = express.Router();
	var start = Date.now();

	// Service status
	api.get('/', function(req, res) {
		res.send({
			uptime: (Date.now() - start),
			phones: config.phones
		});
	});


	app.use('/api', api);
};