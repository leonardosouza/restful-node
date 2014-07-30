var express = require('express'),
	bodyParser = require('body-parser'),
	app = module.exports = express(),
	allowCors = require('./allow-cors.js');

app
	.use(allowCors)
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({ extended: true }))
	.listen(5000);