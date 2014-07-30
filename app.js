var	app = require('./app-config.js'),
	userController = require('./controller/userController.js')
	validator = require('validator');

app
	.get('/users', function(req, res) {
		userController.list(function(resp) {
			res.json(resp);
		});
	})

	.get('/users/:id', function(req, res) {
		var id = validator.trim(validator.escape(req.param('id')));

		userController.user(id, function(resp) {
			res.json(resp);
		});
	})

	.post('/users', function(req, res) {
		var userData = {
			fullName: validator.trim(validator.escape(req.param('fullName'))),
			email: validator.trim(validator.escape(req.param('email'))),
			password: validator.trim(validator.escape(req.param('password'))),
			createdAt: new Date()
		};

		userController.save(userData, function(resp) {
			res.json(resp);
		});
	})

	.put('/users/:id', function(req, res) {
		var id = validator.trim(validator.escape(req.param('id')));

		var userData = {
			fullName: validator.trim(validator.escape(req.param('fullName'))),
			email: validator.trim(validator.escape(req.param('email'))),
			password: validator.trim(validator.escape(req.param('password')))
		};

		userController.update(id, userData, function(resp) {
			res.json(resp);
		});
	})

	.delete('/users/:id', function(req, res) {
		var id = validator.trim(validator.escape(req.param('id')));

		userController.delete(id, function(resp) {
			res.json(resp);
		});
	});