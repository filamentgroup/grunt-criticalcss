/*
 * grunt-criticalcss
 * https://github.com/filamentgroup/grunt-criticalcss
 *
 * Copyright (c) 2014 Jeffrey Lembeck
 * Licensed under the MIT license.
 */

'use strict';

var fs = require('fs');

module.exports = function(grunt) {

	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks
	var criticalcss = require( 'criticalcss' );
	
	grunt.registerMultiTask('criticalcss', 'Grunt wrapper for criticalcss', function() {
		var done = this.async();
		// Merge task-specific and/or target-specific options with these defaults.
		var options = this.options({
			width: 1200,
			height: 900,
			outputfile: "dist/dist.css",
			filename: "all.css",
			url: "",
			forceInclude: [],
			buffer: 800*1024,
			ignoreConsole: false,
			restoreFontFaces: false
		});

		criticalcss.getRules( options.filename, { buffer: options.buffer }, function( err, content ){
			if( err ){
				throw new Error( err.message );
			}

			options.rules = JSON.parse( content );

			criticalcss.findCritical( options.url, options, function(err, content){
				if( err ){
					throw new Error( err.message );
				}

				var originalCSS = fs.readFileSync(options.filename).toString();
				content = criticalcss.restoreOriginalDefs(originalCSS, content);

				// NOTE This should follow the original declarations restoration above
				// so that if a `font-family` declaration was restored from the original
				// CSS the corresponding `@font-face` will be included.
				if( options.restoreFontFaces ){
					content = criticalcss.restoreFontFaces(originalCSS, content);
				}

				grunt.file.write( options.outputfile, content );
				// Print a success message.
				grunt.log.writeln('File "' + options.outputfile + '" created.');
				done();
			});

		});


	});

};
