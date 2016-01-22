var fs = require('fs');
var http = require('http');
var filePath = process.argv[3];
var port = process.argv[2];

var server = http.createServer(function(request, response){
	fs.createReadStream(filePath).pipe(response);
});
server.listen(port);