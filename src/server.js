var express = require('express');
var swig = require('swig');
var http = require('http');

var app = express();
exports.app = app;

var routes = require('./routes.js');

/* Configuration options for express */
app.configure(function() {

    // static files (js, css, images) in public directory
    app.use(express.static(__dirname +'/public'));

    // basic express configurations
    app.use(express.bodyParser());
    app.use(express.cookieParser());

    // set up templates in views directory. Using swig as templating engine
    app.engine('.html', swig.renderFile);
    app.set('view engine', 'html');
    app.set('views', __dirname + '/views/');
});


/* Let our router do its thing */
routes.setupRoutes(app);

/* localhost:3000 up in this */
app.listen(3000);
