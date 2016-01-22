var url = process.argv[2];
var http = require('http');

http.get(url, function(response){
	response.setEncoding('utf8');
	var str = '';
	response.on('data', function(data){
		str+=data;
	});
	response.on('end', function(){
		console.log(str.length);
		console.log(str);
	});
});