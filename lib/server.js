// node modules
var path = require('path');
var http = require('http');

// 3rd party modules
// get command line arguments
var argv = require('optimist').argv;
var port = argv.port || 3000;
var stylus = require('stylus');
var nib = require('nib');

// get base directory path
var basedir = path.join(__dirname, '..');

// create web server
var express = require('express');
var app = express();
app.configure(function() {
	// jade setting
	app.set('view engine','jade');
	app.set('views', path.join(basedir, '/template/jade'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	// stylus setting
	app.use(stylus.middleware({
		src: path.join(basedir, '/template/stylus'),
		dest: path.join(basedir, '/public'),
		debug: true,
		compile: function(str, path) {
			return stylus(str)
				.include(nib.path)
				.set('filename', path)
			    // .set('compress', true)
		}
	}));
	// static server setting
	app.use(express['static'](path.join(basedir, '/public')));
	
});


// routing
// index
app.get('/', function(req, res) {
	res.send(200);
});

// section
app.get('/examples/:number', function(req, res) {
	var number = req.param('number') || '001';
	res.render('examples/' + number, {
		number: number
	});
});

// start server
var server = http.createServer(app).listen(port, function(){
	console.log('server started port on ' + port);
});