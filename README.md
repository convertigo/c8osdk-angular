[![NPM](https://nodei.co/npm/c8osdkangular2.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/c8osdkangular2/)
# C8oSDKAngular2  [![Build Status](https://travis-ci.org/convertigo/C8oSDKAngular2.svg?branch=master)](https://travis-ci.org/convertigo/C8oSDKAngular2.svg?branch=master) [![npm version](https://img.shields.io/npm/v/c8osdkangular2.svg)](https://www.npmjs.com/package/c8osdkangular2)
This is the Convertigo provider for Angular2
## How to Use ##
npm install c8osdkangular2 --save	
	
## Official Documentation ##
[Programming Guide](https://www.convertigo.com/document/convertigo-client-sdk/programming-guide/)
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
