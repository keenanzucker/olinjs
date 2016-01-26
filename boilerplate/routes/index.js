var class1 = {
	name: 'Olin.js',
	teacher: 'The squad'
};
var class2 = {
	name: 'Data Science',
	teacher: 'The legend of Paul'
};
var class3 = {
	name: 'MatSci',
	teacher: 'Reh - Bec- Cah'
};


var home = function(req,res){
	res.render("home", {"classes": [
		class1, 
		class2,
		class3
		]
	});
};

module.exports.home = home;