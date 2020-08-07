const pwd = require('./pwd.js');
const ls = require('./ls.js');
const cat = require('./cat.js');
const curl = require('./curl.js');
const date = require('./date.js');
const echo = require('./echo.js');
const head = require('./head.js');
const tail = require('./tail.js');
const sort = require('./sort.js');
const wc = require('./wc.js');

const done = (output) => {
  process.stdout.write(output);
  process.stdout.write('\nprompt >');
};

process.stdout.write('prompt >');
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  if (cmd === 'pwd') {
    pwd(done);
  } else if (cmd === 'ls') {
    ls(done);
  } else if (cmd.includes('cat')) {
    let ws_index = cmd.indexOf(' ');
    let subStr = cmd.slice(ws_index).trimLeft();
    cat(subStr, done);
  } else if (cmd.includes('curl')) {
    let ws_index = cmd.indexOf(' ');
    let subStr = cmd.slice(ws_index).trimLeft();
    curl(subStr, done);
  } else if (cmd === 'date') {
    date(done);
  } else if (cmd.includes('echo')) {
    let ws_index = cmd.indexOf(' ');
    let subStr = cmd.slice(ws_index).trimLeft();
    echo(subStr, done);
  } else if (cmd.includes('head')) {
    let arr = cmd.split(' ');
    head(arr[2], arr[1], done);
  } else if (cmd.includes('tail')) {
    let arr = cmd.split(' ');
    tail(arr[2], arr[1], done);
  } else if (cmd.includes('sort')) {
    let ws_index = cmd.indexOf(' ');
    let subStr = cmd.slice(ws_index).trimLeft();
    sort(subStr, done);
  } else if (cmd.includes('wc')) {
    let ws_index = cmd.indexOf(' ');
    let subStr = cmd.slice(ws_index).trimLeft();
    wc(subStr, done);
  } else {
    done('ERROR');
  }
});
