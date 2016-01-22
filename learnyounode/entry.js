var worker = require('./module.js');


var callback = function(err, data)
{
	if (err) 
	{
		console.log(err);
	}
	for (i=0; i<data.length;i++)
	{
		console.log(data[i]);
	}

}
worker(process.argv[2], process.argv[3], callback);