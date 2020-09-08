var fs = require('fs');
var rs = fs.createReadStream('events/mynewfile1.txt');
rs.on('open', function () {
  console.log('The file is open');
});