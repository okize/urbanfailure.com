var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var path = require('path');
var http = require('http');
var routes = require('./routes');

var app = express();
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(morgan('dev')); // apache-style logging
app.use(bodyParser.urlencoded({ extended: false })); // body parsing middleware

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Urbanfailure server listening on port ' + app.get('port'));
});
