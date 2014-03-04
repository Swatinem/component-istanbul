/* vim: set shiftwidth=2 tabstop=2 noexpandtab textwidth=80 wrap : */
"use strict";

var fs = require('fs');
var path = require('path');
var Istanbul = require(path.resolve('node_modules', 'istanbul'));
var instrumenter = new Istanbul.Instrumenter();

module.exports = function (builder) {
	builder.hook('before scripts', function (pkg, fn) {
		if (!pkg.root)
			return fn();
		pkg.config.scripts.slice().forEach(function (file) {
			var fullPath = pkg.path(file);
			try {
				var contents = fs.readFileSync(fullPath, 'utf8');
				pkg.removeFile('scripts', file);
				contents = instrumenter.instrumentSync(contents, fullPath);
				pkg.addFile('scripts', file, contents);
			} catch (e) {}
		});
		fn();
	});
};

