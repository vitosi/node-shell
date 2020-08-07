const fs = require('fs');

module.exports = function (fileName, done) {
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      done('Something went wrong!');
    } else {
      let arr = data.split('\n');
      done(arr.sort().join('\n'));
    }
  });
};
