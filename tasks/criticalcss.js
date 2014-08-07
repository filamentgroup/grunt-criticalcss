/*
 * grunt-criticalcss
 * https://github.com/filamentgroup/grunt-criticalcss
 *
 * Copyright (c) 2014 Jeffrey Lembeck
 * Licensed under the MIT license.
 */

'use strict';

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
			url: ""
		});


		criticalcss.findCritical( options.url, options, function(err, content){
			if( err ){
				throw new Error( err.message );
			}
			grunt.file.write( options.outputfile, content );
			// Print a success message.
			grunt.log.writeln('File "' + options.outputfile + '" created.');
			done();
		});
	});

};
