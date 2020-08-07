const fs = require('fs');

module.exports = function (fileName, done) {
  fs.readFile(fileName, (err, data) => {
    if (err) {
      done('Something went wrong!');
    } else {
      done(data);
    }
  });
};
