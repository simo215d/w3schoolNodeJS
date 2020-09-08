var fs = require('fs');

fs.appendFile('filesystem/mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
//more on crud files: https://www.w3schools.com/nodejs/nodejs_filesystem.asp