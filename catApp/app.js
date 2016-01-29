var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

var routes = require('./routes/router');
var app = express();


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.print);
app.get('/cats', routes.print);
app.get('/cats/new', routes.create);
app.get('/cats/bycolor/:color', routes.sortColors);
app.get('/cats/delete/old', routes.kill);



var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log("Application running on port: ", PORT);
});