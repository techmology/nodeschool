var http = require('http');
var bl = require('bl');
var count = 0;
var results = {};

function printResults(){
  for(var i = 0;i<3;i++){
    console.log(results[i]);
  }
}

function getHttpResponse(index){
  http.get(process.argv[index+2],function(response){
    response.pipe(bl(function(err,data){
      if(err){
        return console.error(err);
      }
      else{
        results[index] = data.toString();
        //use counter to print after we get the 3 responses
        count++;
        if(count===3){
          printResults();
        }
      }
    }))
  })
}

for(var i = 0;i<3;i++){
  getHttpResponse(i);
}

//Original response -- call getResponse until count is reached
/*
var getResponse = function(index){
  http.get(process.argv[index+2],function(response){
    response.pipe(bl(function(err,data){
      if(err){
        return console.error(err);
      }
      else{
        console.log(data.toString());
        count++;
        if(count<3){
          getResponse(count);
        }
      }
    }))
  })
}

getResponse(0);
*/
