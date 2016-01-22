var net = require('net');
var strftime = require('strftime');
var port = process.argv[2];

var server = net.createServer(function(socket){
	var time = strftime('%F %R');
	time += "\n";
	socket.end(time);
});
server.listen(port);