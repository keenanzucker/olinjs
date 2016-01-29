var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
	// YAY CONNECTED
});

var kittySchema = mongoose.Schema({
	name: String
});

kittySchema.methods.speak = function() {

	var greeting = this.name
		? "Meow name is: " + this.name
		: "I don't have a name";
	console.log(greeting);
}

var Kitten = mongoose.model('Kitten', kittySchema);

var fluffy = new Kitten({name:'fluffy'});
var silence = new Kitten({name:'SilentButDeadly'});

fluffy.save(function(err, fluffy){
	if (err) return console.error(err);
	fluffy.speak();
});

silence.save(function(err, silence){
	if (err) return console.error(err);
	silence.speak();
});

Kitten.find({name:/fluffy/}, function(err, kittens){

	if (err) return console.error(err);
	console.log(kittens);
});

