var http = require('http');
var url = require('url');

var server = http.createServer(function(request,response){
  if(request.method != 'GET'){
    response.end('Expecting a GET!');
  }
  response.writeHead(200,{'Content-Type': 'application/json'});
  url = url.parse(request.url, true);
  var date = new Date(url.query['iso']);
  if(url.pathname==='/api/parsetime'){
    response.end(JSON.stringify({
      'hour': date.getHours()
      ,'minute': date.getMinutes()
      ,'second': date.getSeconds()
    }));
  }
  if(url.pathname==='/api/unixtime'){
    response.end(JSON.stringify({
      'unixtime': date.getTime()
    }));
  }
})

server.listen(process.argv[2]);
