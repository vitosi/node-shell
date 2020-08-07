const fs = require('fs');

module.exports = function (fileName, numLines = 10, done) {
  fs.readFile(fileName, 'utf8', (err, data) => {
    let lines = parseInt(numLines);
    if (err) {
      done('Something went wrong!');
    } else {
      let arr = data.split('\n');
      if (arr.length < numLines) {
        done(arr);
      } else {
        let outArr = arr.splice(lines - 1);
        done(outArr.join('\n'));
      }
    }
  });
};
