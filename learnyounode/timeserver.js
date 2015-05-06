var net = require('net');

var server = net.createServer(function(socket){
  var date = new Date();
  socket.end(date.getFullYear()
  //getMonth returns 0-11
  //prepend month, date, hours, minutes with 0 then slice 2 from end
  + '-' + ('0' + (date.getMonth() + 1)).slice(-2)
  + '-' + ('0' + date.getDate()).slice(-2)
  + ' ' + ('0' + date.getHours()).slice(-2)
  + ':' + ('0' + date.getMinutes()).slice(-2)
  + '\n');
});

server.listen(process.argv[2]);
