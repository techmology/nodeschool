var modfilter = require('./modfilter.js');
var dir = process.argv[2];
var ext = process.argv[3];

var myfiles = modfilter(dir,ext,function(err,files){
  if(err){
    console.error("We received error:", err);
  }
  else
  {
    for(var i = 0;i<files.length;i++)
    {
      console.log(files[i]);
    }
  }
});
