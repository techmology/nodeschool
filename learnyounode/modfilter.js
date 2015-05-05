var fs = require('fs');
var path = require('path');

module.exports = function(dir,ext,callback){
  return fs.readdir(dir,function(err,files){
    if(err){
      return callback(err);
    }
    else
    {
      //filter callback done for each file in files array
      //returns files array where callback is true
      files = files.filter(function(file){
        return path.extname(file) === '.' + ext;
      })
      return callback(null,files);
    }
  });
}
