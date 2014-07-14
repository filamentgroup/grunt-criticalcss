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
    options: {
      // Task-specific options go here.
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

#### options.filename
Type: `String`
Default value: `all.css`

A string value representing a portion of the path to CSS files you'd like to parse. For example, "/css" would match files that have "/css" in their file path. 

### Usage Examples

#### Custom Options

```js
grunt.initConfig({
	criticalcss: {
		custom_options: {
			options: {
				url: "localhost:4000,
				width: 1200,
				height: 900,
				outputfile: "dist/critical.css",
				filename: "all.css"
			}
		}
	},
});
```

## Contributing
In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
