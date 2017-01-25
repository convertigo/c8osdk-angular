# C8oSDKAngular2  
This is the Convertigo provider for Angular2
## How to Use ##
npm install C8oSdkAngular2 --save

if you are using Ionic2 you must follow the following steps:
add this into your package.json

	"config": {
        	"ionic_rollup": "./config/rollup.config.js"
    	}
	
then create config folder containing rollup.config.js file and add this into the file:

	var nodeResolve = require('rollup-plugin-node-resolve');
	var commonjs = require('rollup-plugin-commonjs');
	var globals = require('rollup-plugin-node-globals');
	var builtins = require('rollup-plugin-node-builtins');
	var json = require('rollup-plugin-json');


	// https://github.com/rollup/rollup/wiki/JavaScript-API

	var rollupConfig = {
	  /**
	   * entry: The bundle's starting point. This file will
	   * be included, along with the minimum necessary code
	   * from its dependencies
	   */
	  entry: 'src/app/main.dev.ts',

	  /**
	   * sourceMap: If true, a separate sourcemap file will
	   * be created.
	   */
	  sourceMap: true,

	  /**
	   * format: The format of the generated bundle
	   */
	  format: 'iife',

	  /**
	   * dest: the output filename for the bundle in the buildDir
	   */
	  dest: 'main.js',

	  /**
	   * plugins: Array of plugin objects, or a single plugin object.
	   * See https://github.com/rollup/rollup/wiki/Plugins for more info.
	   */
	  plugins: [
	    builtins(),
	    commonjs({
	     namedExports: {
		// pouchdb
		'node_modules/js-extend/extend.js': ['extend']
	     }
	    }),
	    nodeResolve({
	      module: true,
	      jsnext: true,
	      main: true,
	      browser: true,
	      extensions: ['.js']
	    }),
	    globals(),
	    json()
	  ]

	};


	if (process.env.IONIC_ENV == 'prod') {
	  // production mode
	  rollupConfig.entry = '{{TMP}}/app/main.prod.ts';
	  rollupConfig.sourceMap = false;
	}


	module.exports = rollupConfig;
	
	
## Coding ##
	import {C8o} from 'c8osdkangular2'


	@Components({
		providers: [C8o]
	})

	export class MyClass {
		constructor(private: C8o) {
			// Do whatever has to be done
			....
		}

		doSomething(String value1, String value2) {
			this.C8o.callJson("myproject.mysequence',
								"varnamename1", value1,
								"varnamename2", value2
			).then((response, parameters)=> {
				// Handle response
				...
				return null;
			})
		}
	}
