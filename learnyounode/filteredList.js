var fs = require('fs');
var path = require('path');
var filePath = process.argv[2];
var ext = process.argv[3];
var files = [];

ext = ext.split('');
ext.unshift('.');
ext = ext.join('');

function fileLists(callback)
{
	var files = fs.readdir(filePath, function(err, list){
		if (err) throw err;
		list.forEach(function(file){
			if (path.extname(file) === ext)
			{
				printFile(file);
			}
		});
	});
}

function printFile(file)
{
	console.log(file);
}

fileLists(printFile);