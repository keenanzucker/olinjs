var express = require('express');
var db = require('./fakeDatabase');

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

	 for (var i = 0; i<(Math.floor(Math.random()*3+1)); i++){
	 	choosen.push(colors[Math.floor(Math.random()*colors.length)]);
	 }
	 return choosen;
}

for (i =0; i<5; i++){
	db.add(new Cat(ranAge(), ranName(), ranColors()));
}

var cats =db.getAll();

cats.sort(function(a,b){
	return parseInt(a.age) - parseInt(b.age);
});

console.log(cats);