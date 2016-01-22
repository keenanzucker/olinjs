var fs = require('fs');
var path = require('path');

module.exports = function(dirName, ext, callback)
{
	ext = '.'+ext;
	files = [];
	fs.readdir(dirName, function(err, list){
		if (err) 
		{
			callback(err, null);
		}
		else {
			list.forEach(function(element){
				if(path.extname(element) == ext){
					files.push(element);
				}
			});

			callback(null, files);
		}
		
	});
};