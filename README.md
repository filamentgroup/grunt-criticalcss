# grunt-criticalcss

> Grunt wrapper for [criticalcss](https://github.com/filamentgroup/criticalcss)

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-criticalcss --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-criticalcss');
```

## The "criticalcss" task

### Overview
In your project's Gruntfile, add a section named `criticalcss` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  criticalcss: {
    custom: {
      options: {
        // Task-specific options go here.
      }
    }
  },
});
```

### Options

#### options.url
Type: `String`
Default value: `''`

REQUIRED: A string for the URL of the site you'd like to run this script
against

#### options.filename
Type: `String`
Default value: `all.css`

A string value for the entire path of a css file that you have hosted
locally.

#### options.width
Type: `Integer`
Default value: `1200`

An integer value of the width of the screen in pixels 

#### options.height
Type: `Integer`
Default value: `900`

An integer value of the height of the screen in pixels 

#### options.outputfile
Type: `String`
Default value: `dist/dist.css`

A string value that is the file path for wherever you would like the css
to be output to


#### options.forceInclude
Type: `Array`
Default value: `[]`

An array of selectors that you want to guarantee will make it from the CSS
file into your CriticalCSS output.

#### options.buffer
Type: `Integer`
Default value: `800*1024`

Sets the maxBuffer for child_process.execFile in Node. Necessary for potential memory issues.

#### options.ignoreConsole
Type: `Boolean`
Default value: `false`

If set to `true`, will silence any outputs to console in the page's JavaScript

#### options.restoreFontFaces
Type: `Boolean`
Default value: `false`

If you include `@font-face` declarations in your `all.css` file and set this flag to `true` in your options, criticalcss will include all the `@font-face` declarations that are required to satisfy `font-family` declarations in the criticalcss output.

### Usage Examples

#### Custom Options

```js
grunt.initConfig({
	criticalcss: {
		custom: {
			options: {
				url: "http://localhost:4000",
				width: 1200,
				height: 900,
				outputfile: "dist/critical.css",
				filename: "/path/to/local/all.css", // Using path.resolve( path.join( ... ) ) is a good idea here
				buffer: 800*1024,
				ignoreConsole: false
			}
		}
	},
});
```

## Contributing
In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
* v0.5.0 - Add support for ignoreConsole
* v0.4.0 - Add support for buffer size, so you don't exceed the buffer
* v0.3.0 - Moved to using a local filename instead of a pattern-match
* v0.2.0 - Added `forceInclude` functionality.
* v0.1.0 - Original release
