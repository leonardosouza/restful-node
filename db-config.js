var mongoose = require('mongoose').connect('mongodb://localhost/restful_node'),
	db = mongoose.connection;

db
	.on('error', console.error.bind(console, 'Erro ao conectar no banco'))
	.once('open', function() {
		var userSchema = mongoose.Schema({
			fullName: String,
			email: String,
			password: String,
			createdAt: Date
		});

		exports.User = mongoose.model('User', userSchema);
	});