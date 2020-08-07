const pwd = require('./pwd.js');
const ls = require('./ls.js');
const cat = require('./cat.js');

process.stdout.write('prompt >');
process.stdin.on('data', (data) => {
	const cmd = data.toString().trim();

	if (cmd === 'pwd') {
		pwd();
	} else if (cmd === 'ls') {
		ls();
	} else if (cmd.includes('cat')) {
		let ws_index = cmd.indexOf(' ');
		let subStr = cmd.slice(ws_index).trimLeft();
		cat(subStr);
	}

	// process.stdout.write('You typed: ' + cmd);
	process.stdout.write('\nprompt > ');
});
