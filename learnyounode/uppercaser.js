var map = require('through2-map');
var http = require('http');
var port = process.argv[2];

var upper = map(function(chunk){
	return chunk.toString().toUpperCase();
});

var server = http.createServer(function(request, response){
	request.pipe(upper).pipe(response);
});
server.listen(port);