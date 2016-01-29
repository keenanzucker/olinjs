var express = require('express');
var router = express.Router();
var db = require('../fakeDatabase');

function Cat(age, name, colors){
	this.age = age;
	this.name = name;
	// this.colors = colors;
}


// var cat1 = new Cat(12, 'keez', ['green', 'yellow']);
// var cat2 = new Cat(19, 'jeff', ['red', 'blu']);
// var cat3 = new Cat(4, 'pats', ['orang', 'eww']);
var cat1 = new Cat(12, 'keez');
var cat2 = new Cat(19, 'jeff');
var cat3 = new Cat(4, 'pats');
db.add(cat1);
db.add(cat2);
db.add(cat3);




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { message: "OlinJS rocks!" });
});

router.get('/cats', function(req, res, next) {
  var cats = db.getAll();
  res.render("index", {"cats": cats});
});

router.get('/cats/new', function(req, res, next) {
  db.add(newCat());
});

router.get('/cats/bycolor/:color', function(req, res, next) {
  
});

router.get('/cats/delete/old', function(req, res, next) {
  console.log("A cat named was sent to the farm!");
});


// module.exports.home = home;
module.exports = router; //BOILERPLATE