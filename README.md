[![NPM](https://nodei.co/npm/c8osdkangular.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/c8osdkangular/)

# C8oSDKAngular  [![Build Status](https://travis-ci.org/convertigo/C8oSDKAngular.svg?branch=master)](https://travis-ci.org/convertigo/C8oSDKAngular.svg?branch=master) [![npm version](https://img.shields.io/npm/v/c8osdkangular.svg)](https://www.npmjs.com/package/c8osdkangular) #

This is the Convertigo provider for Angular

Convertigo Client SDK is a set of libraries used by mobile or Windows desktop applications to access Convertigo Server services. An application using the SDK can easily access Convertigo services such as Sequences and Transactions.

The Client SDK will abstract the programmer from handling the communication protocols, local cache, FullSync off line data managment, UI thread management and remote logging. So the developer can focus on building the application.

Client SDK is available for:
* Android Native apps as a standard Gradle dependency
* iOS native apps as a standard Cocoapod
* Windows desktop or Xamarin apps as Nugets or Xamarin Components
* Google Angular framework as an NPM package

This current package is the Angular SDK. For others SDKs see official Convertigo Documentation.

## Documentation ##

#### Creating a C8o instance ####

In Angular dependency injection is used to create a C8o instance

    import { C8o } from "c8osdkangular";
    …
    // You must declare C8o within your NgModules C8o as a provider.
    // Then you will be able to get C8o object instancied thanks to Angular's dependency injection as the following example :
    
    export class MyClass {
        constructor(private c8o: C8o) {
        }
    }


#### Advanced instance settings ####
 The endpoint is the mandatory setting to get a C8o instance correctly initialized but there is additional settings through the C8oSettings class.

A C8oSettings instance should be passed after the endpoint. Settings are copied inside the C8o instance and a C8oSettings instance can be modified and reused.

Setters of C8oSettings always return its own instance and can be chained.

A C8oSettings can be instantiated from an existing C8oSettings or C8o instance.

In order to finish the c8o initialization you must use init method from c8o object with a c8oSettings parameters

    import { C8o, C8oSettings } from "c8osdkangular";
    …
    // The only way
    let settings: C8oSettings = new C8oSettings();
    settings
          .setEndPoint("https://demo.convertigo.net/cems/projects/sampleMobileCtfGallery")
          .setDefaultDatabaseName("mydb_fullsync")
          .setTimeout(30000);
    //Then we need to assign C8oSettings object to our C8o object
    c8o.init(settings);
    
    // all settings can be retrieve from a C8o or C8oSettings instance
    let timeout : number = c8o.timeout;

#### Calling a Convertigo requestable with call parameters ####

The call method expects the requester string of the following syntax:
* For a transaction: [project].connector.transaction
* For a sequence: [project].sequence

The project name is optional, i.e. if not specified, the project specified in the endpoint will be used.

Convertigo requestables generally needs key/value parameters. The key is always a string and the value can be any object but a string is the standard case.

    // the common way with parameters
    c8o.callJson("getSimpleData",
        "firstname", "John",
        "lastname", "Do"
        ).then((response: any, parameters: Object) => {
            //handle repsonse
            return null;
        });
    
    // the verbose way
    let parameters : Object = new Object({"firstname" : "John", "lastname": "Doe"});
    c8o.callJsonObject("getSimpleData", parameters)
        .then((response: any, parameters: Object) => {
            //handle repsonse
            return null;
        });


## Full documentation is available on ##

[Programming Guide](https://www.convertigo.com/document/convertigo-client-sdk/programming-guide/)