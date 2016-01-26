// var current = new Date("December 25, 2016 11:13:00");
// USE FOR TESTING IF ITS CHRISTMAS

var current = new Date();
var christmas = '';

var routes = {};

if (current.getMonth() === 11 && current.getDate() === 25){
	christmas = 'YEAH! GO CRAZY!';
	console.log(christmas);
}
else {
	christmas = 'Nope. Sucks brohs';
	console.log(christmas);
}

routes.home = function(req,res){
	res.render("layouts/main", {"already":christmas});
};

module.exports= routes;