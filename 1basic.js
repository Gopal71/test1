var express = require('express')
    , http = require('http');

// Create an express application
var app = express()
            // register a middleware
            .use(function (req, res, next) {
		setTimeout(function() {
			res.end('hello how are you expressssssssssss!');
    		}, 5000);
            });

// Register with http
http.createServer(app)
    .listen(3000);