var express = require('express');
app = express();

app.configure(function() {
	app.set('view engine', 'jade');
	app.set('views', __dirname + '/views');
	app.use(express.logger());
    app.use(express.bodyParser());
    app.use(express.cookieParser());

    app.use(express.static(__dirname + '/scripts'));
    app.use(express.static(__dirname + '/css'));
    app.use(express.static(__dirname + '/img'));

    app.use(app.router);
});

require('./models');
require('./controllers');

app.listen(8888);