var http = require('http'),
    io = require('socket.io')
    

var queueMap = {}

var intake = http.createServer();
intake.on('request', function(req, resp) {
  
  var buffer = "";
  if (req.method === "POST") {
    
    req.body = '';

    req.addListener('data', function (chunk) {
      // Build the body from the chunks sent in the post.
        req.body = req.body + chunk;
      })
      .addListener('end', function () {
        json = JSON.stringify(qs.parse(req.body));
          handler(req, res, json);
      });
    }else{
      handler(req, res);
    }
    
    
  });
intake.listen(8001);


var transmit = http.createServer();
transmit.listen(8000);

var socketio = io.listen(transmit);