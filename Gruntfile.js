/*
 * grunt-criticalcss
 * https://github.com/filamentgroup/grunt-criticalcss
 *
 * Copyright (c) 2014 Jeffrey Lembeck
 * Licensed under the MIT license.
 */

/*global require:true*/
/*global __dirname:true*/

var path = require( 'path' );

module.exports = function(grunt) {
	'use strict';

	// Project configuration.
	grunt.initConfig({
		jshint: {
			all: [
				'Gruntfile.js',
				'tasks/*.js',
				'<%= nodeunit.tests %>',
			],
			options: {
				jshintrc: '.jshintrc',
			},
		},

		// Before generating any new files, remove any previously-created files.
		clean: {
			tests: ['tmp'],
		},

		// Configuration to be run (and then tested).
		criticalcss: {
			test: {
				options: {
					url: path.resolve( path.join( __dirname, "test", "fixtures", "test-site.html" ) ),
					filename: path.resolve( path.join( __dirname, "test", "fixtures", "all.css" ) ),
					width: 1200,
					height: 900,
					outputfile: "tmp/dist.css",
					buffer: 800*1024,
					ignoreConsole: false,
					restoreFontFaces: true
				}
			}
		},

		// Unit tests.
		nodeunit: {
			tests: ['test/*_test.js'],
		}
	});

	// Actually load this plugin's task(s).
	grunt.loadTasks('tasks');

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');

	// Whenever the "test" task is run, first clean the "tmp" dir, then run this
	// plugin's task(s), then test the result.
	grunt.registerTask('test', ['clean', 'criticalcss', 'nodeunit']);

	// By default, lint and run all tests.
	grunt.registerTask('default', ['jshint', 'test']);

};
