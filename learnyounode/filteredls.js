var fpath = process.argv[2];
var ext = process.argv[3];;

var fs = require('fs');
var path = require('path');

fs.readdir(fpath,readComplete);

//Initial attempt -- verified
/*
function readComplete(err, files){
  if(err){
    console.error(err);
  }
  else{
    for(var i = 0;i<files.length;i++){
      var file = files[i];
      var extidx = file.lastIndexOf('.');
      if(extidx > 0 && file.substring(extidx+1) === ext){
        console.log(file);
      }
    }
  }
}
*/

//Second attempt -- using path module suggested by hint
function readComplete(err,files){
  if(err){
    console.error(err);
  }
  else{
    for(var i = 0;i<files.length;i++){
      var file = files[i];
      if(path.extname(file) == '.' + ext){
        console.log(file);
      }
    }
  }
}
