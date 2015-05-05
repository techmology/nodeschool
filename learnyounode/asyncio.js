var fs = require('fs');
var lines = undefined;

fs.readFile(process.argv[2],'utf8',finishedReading);

function finishedReading(err,fileData)
{
  if(err){
    return console.error(err);
  }
  else{
    lines = fileData.split('\n').length - 1;
    console.log(lines);
  }
}
