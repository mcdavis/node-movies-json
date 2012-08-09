
/**
 * Module dependencies.
 */

var express = require('express');

var app = module.exports = express();

// Configuration

app.configure(function(){
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

// Routes
app.get('/', function(req, res){
  res.sendfile(__dirname + '/public/index.html');
});
app.get('/blank', function(req, res){
  res.sendfile(__dirname + '/public/index.html');
});
app.get('/movies', function(req, res){
  res.contentType('application/json');
  res.sendfile(__dirname + '/db/movies.json');
});

app.listen(9292);
console.log("Express server listening on port %d in %s mode", 9292, app.settings.env);
