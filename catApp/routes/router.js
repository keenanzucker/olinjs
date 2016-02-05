var express = require('express');
var router = express.Router();
var CatDB = require('../models/catModel');
// var db = require('../fakeDatabase');

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

function ageRangeSort(cats, ageOne, ageTwo){

  var rangeCats = [];

  for (var i = 0; i< cats.length; i++) {

    if (cats[i].age >= ageOne && cats[i].age <= ageTwo)
    {
      rangeCats.push(cats[i]);
    }
  }
  return rangeCats;
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
    // var newCat = new Cat(ranAge(), ranName(), ranColors())
    // var createCat = new CatDB(newCat);
    //this works, but you could instead, but I liked that you used a constructor
    var createCat = new CatDB({
        age: ranAge(),
        name: ranName(),
        colors: ranColors()
    })
    console.log(createCat);

    createCat.save(function(err){
        if (err) {
            console.error(err);
            //you should tell the client when an error happens
            res.status(500).send('Error problem saving');
        }
        else {
            console.log("New Cat Created!");
            res.end(".") //Don't forget to do something to terminate request
            //that means: sendfile ,send, json, redirect, render, end, and others I can't remember 
        }
    })
}

router.print = function(req, res, next) {

    CatDB.find().sort({age: -1}).exec(function(err, cats) {
        if (err) console.log(err);
        else {
            res.render("cats", {cats: cats});
            console.log("Showing all dem cats by age!");
        }
    });
}

router.sortColors = function(req, res, next){
     var colorToSort = req.params.color;
    CatDB.find({colors: colorToSort}).sort({age: -1}).exec(function(err, cats) {
        if (err) console.log(err);
        else {
            // cats = sortByColor(cats, colorToSort); //you can do this with mongoose. see line 113.
            res.render("cats", {cats: cats});
            console.log("Showing all dem cats by color: " + colorToSort);
        }
    });
}

router.ageRange = function(req, res, next){

    var ageOne = req.params.ageone;
    var ageTwo = req.params.agetwo;

      CatDB.find({age:{$gt: ageOne, $lt: ageTwo}}).sort({age: -1}).exec(function(err, cats) {
        if (err) console.log(err);
        else {
            // cats = ageRangeSort(cats, ageOne, ageTwo); //Line unnecessary you do this with mongo
            res.render("cats", {cats: cats});
            console.log("Showing cats in range: " + ageOne + " to " + ageTwo);
        }
    });

}

router.kill = function(req, res, next){
    //unnecessary
    // var cats = CatDB.find(function(err, cats){
    //     if (err) console.error(err);
    //     console.log(cats);
    // });
    // var oldest = indexOfOldest(cats);

    CatDB.findOneAndRemove({}, {sort:{age: -1}}, function(err){
        if (err) console.log(err);
        res.send("Dead"); //end request
    });
    console.log("You killed the oldest cat!");
    
}

module.exports = router; 