var express = require('express');
var router = express.Router();
var db = require('../fakeDatabase');

function Cat(age, name, colors){
	this.age = age;
	this.name = name;
	this.colors = colors;
}

function ranAge(){
	return (Math.round(Math.random() * 100));
}

function ranName(){
	var names = ['keez', 'pat', 'byzor', 'kaikai', 'gubs', 
	'aaaaron', 'franny', 'doooo', 'chuck', 'filip', 'philip', 'austy'];
	return (names[Math.floor(Math.random()*names.length)]);
}

function ranColors(){
	var colors = ['blu', 'red', 'greeen', 'burgundy', 'mahogony',
	 'gold', 'reallyGold', 'shiny', 'kinda_gross_green', 'yelloooo'];

	 var choosen = [];

	 for (var i = 0; i<(Math.floor(Math.random()*2+1)); i++){
	 	choosen.push(colors[Math.floor(Math.random()*colors.length)]);
	 }
	 return choosen;
}

function sortByAge(cats){
	// Attributed sort function to stackoverflow thread on sorting arrys of objects
	return cats.sort(function(a,b){
		return parseInt(a.age) - parseInt(b.age);
	});
}

function sortByColor(cats, color){
	var sortedCats = [];

	for (var i = 0; i< cats.length; i++) {
		for (var j = 0; j<cats[i].colors.length; j++){
			if (cats[i].colors[j] === color)
			{
				sortedCats.push(cats[i]);
			}
		}
	}
	return sortedCats;
}

function indexOfOldest(cats){
	var oldest = 0;
	var index;

	for (var i = 0; i < cats.length; i++) {
		if (cats[i].age > oldest){
			oldest = cats[i].age
			index = i;
		}
	}
	return index;
}

router.create = function(req, res, next){
	db.add(new Cat(ranAge(), ranName(), ranColors()));
	console.log("New Cat Created!");
}

router.print = function(req, res, next) {
	var cats = db.getAll();
	sortByAge(cats);

	res.render("cats", {cats: cats});
	console.log("Showing all dem cats by age!");
}

router.sortColors = function(req, res, next){
	var cats = db.getAll();
	var colorToSort = req.params.color;
	sortByAge(cats);
	cats = sortByColor(cats, colorToSort);

	res.render("cats", {cats: cats});
	console.log("Showing all dem cats by color: " + colorToSort);
}

router.kill = function(req, res, next){
	var cats = db.getAll();
	var oldest = indexOfOldest(cats);
	db.remove(oldest);
	console.log("You killed the oldest cat!");
}


module.exports = router; 