/* vim: set shiftwidth=2 tabstop=2 noexpandtab textwidth=80 wrap : */
"use strict";

module.exports = function (runner) {
	runner.on('end', function () {
		process.stdout.write(JSON.stringify(__coverage__));
	});
}
