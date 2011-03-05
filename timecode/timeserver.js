var net = require("net");

var timeCode = 0;

var sockets = new Array();

var intervalId = setInterval(function(){
  timeCode = new Date().getTime();

  sockets.forEach(function(v,i,a){
    v.write(timeCode+"\n");
  });

}, 1000);

var server = net.createServer();
server.on('connection', function(socket) {
  socket.on('end',function(socket) {
    sockets.filter(function(v) {
      return (v != socket);
    });
  });
  sockets.push(socket);
}); 


server.listen(8000,'localhost');