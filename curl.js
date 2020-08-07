const request = require('request');

module.exports = function (url, done) {
  request(url, function (err, res) {
    if (err) {
      done('Something went wrong!');
    }
    done(res.body);
  });
};
