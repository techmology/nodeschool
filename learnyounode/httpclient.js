var url = process.argv[2];
var http = require('http');

http.get(url,function(response){
  //set encoding so that data events are string type
  response.setEncoding('utf8');
  response.on('data',function(data){
    console.log(data);
  })
});
