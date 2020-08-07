const fs = require('fs');

module.exports = function (fileName, done) {
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      done('Something went wrong!');
    } else {
      let lines = data.split('\n');
      //This didnt work it spit out same number as lines
      let words = lines.map((line) => line.split(' '));
      done(words.length.toString());

      // done((lines.length - 1).toString());
    }
  });
};
