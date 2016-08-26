'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.criticalcss = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  "files match": function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/dist.css').replace(/\s|\n/g, "");
    var expected = grunt.file.read('test/expected/default_options').replace(/\s|\n/g, "");
		// Stupid hack, but the produced file doesn't have a new line at the end of it, but the expected file does
    test.equal(actual, expected, 'Files should match');

    test.done();
  }
};
