const fs = require('fs');

module.exports = function (fileName, numLines, done) {
	fs.readFile(fileName, 'utf8', (err, data) => {
		let lines = Math.abs(parseInt(numLines));
		if (err) {
			done('Something went wrong!');
		} else {
			let arr = data.split('\n');
			if (arr.length < numLines) {
				done(arr);
			} else {
				let outArr = arr.splice(0, lines);
				done(outArr.join('\n'));
			}
		}
	});
};
