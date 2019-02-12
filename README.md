<p align="center">
  <img src="https://www.convertigo.com/wp-content/themes/EightDegree/images/logo_convertigo.png">
  <h2 align="center"> C8oSDK Angular</h2>
</p>
<p align="center">
  <a href="/LICENSE"><img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg" alt="License"></a>
  <a href="https://www.npmjs.com/package/c8osdkangular"><img
  src="https://img.shields.io/npm/v/c8osdkangular.svg" alt="Travis Status"></a>
  <a href="https://travis-ci.org/convertigo/c8osdk-angular"><img
  src="https://travis-ci.org/convertigo/c8osdk-angular.svg?branch=master" alt="Travis Status"></a>
</p>

## TOC ##

- [TOC](#toc)
- [Introduction](#introduction)
  - [About SDKs](#about-sdks)
  - [About Convertigo Platform](#about-convertigo-platform)
- [Requirements](#requirements)
- [Installation](#installation)
  - [Support of Angular 6 & 7](#support-of-angular-6--7)
- [Documentation](#documentation)
  - [Creating a C8o instance](#creating-a-c8o-instance)
  - [Advanced instance settings](#advanced-instance-settings)
  - [Calling a Convertigo requestable](#calling-a-convertigo-requestable)
  - [Calling a Convertigo requestable with parameters](#calling-a-convertigo-requestable-with-parameters)
  - [Calling a Convertigo requestable uploading a files](#calling-a-convertigo-requestable-uploading-a-files)
  - [Chaining calls](#chaining-calls)
  - [Handling failures](#handling-failures)
  - [Writing the device logs to the Convertigo server](#writing-the-device-logs-to-the-convertigo-server)
    - [Basic](#basic)
    - [Advanced](#advanced)
  - [Using the Local Cache](#using-the-local-cache)
  - [Using the Full Sync](#using-the-full-sync)
  - [Replicating Full Sync databases](#replicating-full-sync-databases)
  - [Replicating Full Sync databases with continuous flag](#replicating-full-sync-databases-with-continuous-flag)
  - [Full Sync FS_LIVE requests](#full-sync-fslive-requests)
  - [Full Sync Change Listener](#full-sync-change-listener)
- [Internal Technical documentation](#internal-technical-documentation)
  - [Project description](#project-description)
  - [Build of project](#build-of-project)
  - [Test of project](#test-of-project)
  - [Release of project](#release-of-project)


## Introduction ##

### About SDKs ###

This is the Convertigo provider for Angular

Convertigo Client SDK is a set of libraries used by mobile or Windows desktop applications to access Convertigo Server services. An application using the SDK can easily access Convertigo services such as Sequences and Transactions.

The Client SDK will abstract the programmer from handling the communication protocols, local cache, FullSync off line data management, UI thread management and remote logging. So the developer can focus on building the application.

Client SDK is available for:
* [Android Native](https://github.com/convertigo/c8osdk-android) apps as a standard Gradle dependency
* [iOS native](https://github.com/convertigo/c8osdk-ios) apps as a standard Cocoapod
* [React Native](https://github.com/convertigo/react-native-c8osdk) as a NPM package
* [Google Angular framework](https://github.com/convertigo/c8osdk-angular) as typescript an NPM package
* [Vue.js](https://github.com/convertigo/c8osdk-js), [ReactJS](https://github.com/convertigo/c8osdk-js), [AngularJS](https://github.com/convertigo/c8osdk-js) Framework, or any [Javascript](https://github.com/convertigo/c8osdk-js) project as a standard Javascript NPM package
* [Windows desktop](https://github.com/convertigo/c8osdk-dotnet) or [Xamarin apps](https://github.com/convertigo/c8osdk-dotnet) as Nugets or Xamarin Components


This current package is the Angular SDK. For others SDKs see official [Convertigo Documentation.](https://www.convertigo.com/document/all/cmp-7/7-5-1/reference-manual/convertigo-mbaas-server/convertigo-client-sdk/programming-guide/).

### About Convertigo Platform ###

Convertigo Mobility Platform supports Angular developers. Services brought by the platform are available for Angular clients applications thanks to the Convertigo MBaaS SDK. SDK provides an Angular framework you can use to access Convertigo Serverâ€™s services such as:

- Connectors to back-end data (SQL, NoSQL, REST/SOAP, SAP, - WEB HTML, AS/400, Mainframes)
- Server Side Business Logic (Protocol transform, Business logic augmentation, ...)
- Automatic offline replicated databases with FullSync technology
- Security and access control (Identity managers, LDAP , SAML, oAuth)
- Server side Cache
- Push notifications (APND, GCM)
- Auditing Analytics and logs (SQL, and Google Analytics)

[Convertigo Technology Overview](http://download.convertigo.com/webrepository/Marketing/ConvertigoTechnologyOverview.pdf)

[Access Convertigo mBaaS technical documentation](http://www.convertigo.com/document/latest/)

[Access Convertigo SDK Documentations](https://www.convertigo.com/document/all/cmp-7/7-5-1/reference-manual/convertigo-mbaas-server/convertigo-client-sdk/)

## Requirements ##

* node LTS
* npm 5.6.0

## Installation ##

```shell
$ npm install --save c8osdkangular@latest
```

### Support of Angular 6 & 7 ###

Support of angular 6 & 7 is being improved.

From now please use version 2.2.7-beta12
```shell
$ npm install --save c8osdkangular@2.2.7-beta12
```

Then add the folowing lines into your polyfill.ts located at /ProjectRoot/src/polyfill.ts

```typescript
(window as any).global = window;
(window as any).process = window;
```

## Documentation ##

### Creating a C8o instance ###

In Angular dependency injection is used to create a C8o instance

```typescript
//Into app.module.ts
import {C8o} from "c8osdkangular";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
      BrowserModule,
      HttpClientModule
  ],
  providers: [
    C8o
  ]
});


//Into the target page
import { C8o, C8oSettings } from "c8osdkangular";

export class MyClass {

	// Instanciate c8o thanks to Angular di (dependency injection)
	constructor(private c8o: C8o) {
		
		// Call init method with a c8osettings class giving an endpoint
		this.c8o.init(new C8oSettings().setEndPoint("http://localhost:18080/convertigo/projects/template_Ionic2"));
		
		// Use the specific method to be sure that init has been finished 
		this.c8o.finalizeInit().then(()=>{
			// Do stuff with c8o object
		});
	}
}
```
### Advanced instance settings ###
 The endpoint is the mandatory setting to get a C8o instance correctly initialized but there is additional settings through the C8oSettings class.

A C8oSettings instance should be passed after the endpoint. Settings are copied inside the C8o instance and a C8oSettings instance can be modified and reused.

Setters of C8oSettings always return its own instance and can be chained.

A C8oSettings can be instantiated from an existing C8oSettings or C8o instance.

In order to finish the c8o initialization you must use init method from c8o object with a c8oSettings parameters

```typescript
import { C8o, C8oSettings } from "c8osdkangular";
â€¦
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
```

### Calling a Convertigo requestable ###

With a C8o instance you can call Convertigo Sequence and Transaction or make query to your local FullSync database.

The call method expects the requester string of the following syntax:

For a transaction: [project].connector.transaction
For a sequence: [project].sequence
The project name is optional, i.e. if not specified, the project specified in the endpoint will be used.

```typescript
import { C8o, C8oSettings } from "c8osdkangular"
// Assuming c8o is a C8o instance properly instanciated and initiated as describe above, and '.login' is the name of a sequence of your project

// Here using Javascript's Promises with awaiter syntax 
let result = await this.c8o.callJson('.login')
                       .async();

// Here using Javascript's Promises with then/catch syntax
this.c8o.callJson(".login")
    .async()
    .then((response)=>{
      //handle result
    });

// Using C8oPromise that allow for example progress and Live. C8oPromise is described in Api doc in section Api documentation of this README
this.c8o.callJson(".login")
    .then((response)=>{
      //handle result
    });
```

### Calling a Convertigo requestable with parameters ###
Convertigo requestables generally needs key/value parameters encapsuled in a simple javascript object. 

The key is always a string and the value can be any object but a string is the standard case.
```typescript
// Assuming c8o is a C8o instance properly instanciated and initiated as describe above, and '.login' is the name of a sequence of your project

// Here using Javascript's Promises with awaiter syntax
let result = await this.c8o.callJsonObject('.login', {
                          login: "barnett.christine",
                          password: "mySuperPassword123"
                        })
                        .async();

// Here using Javascript's Promises with then/catch syntax
this.c8o.callJsonObject('.login', {
    login: "barnett.christine",
    password: "mySuperPassword123"
  })
  .async()
  .then((response)=>{
    // handle result
  });

// Using C8oPromise that allow for example progress and Live. C8oPromise is described in Api doc in section Api documentation of this README.
this.c8o.callJsonObject(".login",{
      login: "barnett.christine",
      password: "mySuperPassword123"
    })
    .then((response)=>{
      //handle result
    });
```

### Calling a Convertigo requestable uploading a files ###

Convertigo requestables supports file as argument. You can pass it as key value pair.
Indeed, the key is a string (name of the variable), and the value must be a Javascript File, or FileList. It can be into an array or directly passed as argument

```javascript
// Assuming c8o is a C8o instance properly instanciated and initiated as describe above, and '.login' is the name of a sequence of your project

// Here using Javascript's Promises with awaiter syntax
let fileFirst = new File(["Hello Convertigo First !"], "fileFirst.txt", {
            type: "text/plain",
          });
let fileSecond = new File(["Hello Convertigo Second !"], "fileSecond.txt", {
type: "text/plain",
});

let result = await this.c8o.callJson('.sequenceThatReceiveAFile ', {
  paramOne: "MyFirstParam",
  files: [fileFirst, fileSecond]
})
.async();

// Here using Javascript's Promises with then/catch syntax
this.c8o.callJson('.sequenceThatReceiveAFile', {
   paramOne: "MyFirstParam",
   files: [fileFirst, fileSecond]
 })
 .async()
 .then((response)=>{
   // handle result
 });

// Using C8oPromise that allow for example progress and Live. C8oPromise is described in Api doc in section Api documentation of this README.
this.c8o.callJson(".sequenceThatReceiveAFile",{
  paramOne: "MyFirstParam",
  files: [fileFirst, fileSecond]
   })
   .then((response)=>{
     //handle result
   });
```

### Chaining calls ###

The .then() returns a C8oPromise that can be use to chain other promise methods, such as .then() or failure handlers. The last .then() must return a null value. .then() can be mixed but the returning type must be the same: Xml or Json.

```typescript
c8o.callJson(".getSimpleData", "callNumber", 1)
.then((response) => {
	// you can do stuff here and return the next C8oPromise instead of deep nested blocks
	return c8o.callJson(".getSimpleData", "callNumber", 2);
})
.then((response)=>{
  // you can do stuff here and even modify previous parameters
  parameters["callNumber"] = 3;
  parameters["extraParameter"] = "ok";
  return c8o.callJsonObject(".getSimpleData", parameters);
})
.then((response)=>{
  // you can do stuff here and return null because this is the end of the chain
  return null;
})
```

### Handling failures
A call can throw an error for many reasons: technical failure, network error and so on.

The standard try/catch should be used to handle this.

```typescript
// Assuming c8o is a C8o instance properly instanciated and initiated as describe above, and '.login' is the name of a sequence of your project

// Here using Javascript's Promises with awaiter
try{
  let result = await this.c8o.callJsonObject('.login', {
                login: "barnett.christine",
                password: "mySuperPassword123"
            }).async();
}
catch(error){
  // Do something with the error
}

// Here using Javascript's Promises
this.c8o.callJsonObject('.login', {
                login: "barnett.christine",
                password: "mySuperPassword123"
            }).
            .async()
            .then((response)=>{
              //handle result
            })
            .catch((error)=>{
              // Do something with the error
            })

// Using C8oPromise that allow for example progress and Live. C8oPromise is described in Api doc in section Api documentation of this README.
this.c8o.callJsonObject('.login', {
                login: "barnett.christine",
                password: "mySuperPassword123"
            }).
            .then((response)=>{
              //handle result
            })
            .fail((error)=>{
              // Do something with the error
            })
```
### Writing the device logs to the Convertigo server ###

#### Basic ####

An application developer usually adds log information in his code. This is useful for the code execution tracking, statistics or debugging.

The Convertigo Client SDK offers an API to easily log on the standard device logger, generally in a dedicated console. To see this console, a device must be physically connected on a computer.

Fortunately, the same API also send log to the Convertigo server and they are merged with the server log. You can easily debug your device and server code on the same screen, on the same timeline. Logs from a device contain metadata, such as the device UUID and can help to filter logs on the server.

A log level must be specified:

* Fatal: used for critical error message
* Error: used for common error message
* Warn: used for not expected case
* Info: used for high level messages
* Debug: used for help the developer to understand the execution
* Trace: used for help the developer to trace the code
* To write a log string, use the C8oLogger instance of a C8o instance:

```typescript
// Assuming c8o is a C8o instance properly instanciated and initiated as describe above

const error = anyError;

c8o.log.fatal("hello logs ! (level fatal)", error);
c8o.log.error("hello logs ! (level error)", error);
c8o.log.warn("hello logs ! (level warn)", error);
c8o.log.info("hello logs ! (level info)", error);
c8o.log.debug("hello logs ! (level debug)", error);
c8o.log.trace("hello logs ! (level trace)", error);

```
#### Advanced ####

A C8oLogger have 2 log levels, one for local logging and the other for the remote logging. With the Android SDK, the local logging is set by the logcat options. With the .Net SDK, the local logging depends of the LogLevelLocal setting of C8oSettings.

The remote logging level is enslaved by Convertigo server Log levels property: devices output logger. In case of failure, the remote logging is disabled and cannot be re-enabled for the current C8o instance. It can also be disabled using the LogRemote setting of C8oSettings, enabled with true (default) and disabled with false.

```typescript
C8oSettings()
    .setLogC8o(false)   // disable log from the Convertigo Client SDK itself
    .setLogRemote(false) // disable remote logging
    .setLogLevelLocal(C8oLogLevel.TRACE);
```


### Using the Local Cache
Sometimes we would like to use local cache on C8o calls and responses, in order to:

* save network traffic between the device and the server,
* be able to display data when the device is not connected to the network.

The Local Cache feature allows to store locally on the device the responses to a C8o call, using the variables and their values as cache key.

To use the Local Cache, add to a call a pair parameter of "__localCache" and a C8oLocalCache instance. The constructor of C8oLocalCache needs some parameters:

* C8oLocalCache.Priority (SERVER / LOCAL): defines whether the response should be retrieved from local cache or from Convertigo server when the device can access the network. When the device has no network access, the local cache response is used.
* ttl: defines the time to live of the cached response, in milliseconds. If no value is passed, the time to live is infinite.
* enabled: allows to enable or disable the local cache on a Convertigo requestable, default value is true.

```typescript
// Assuming c8o is a C8o instance properly instanciated and initiated as describe above.

// Return the response if is already know and less than 180 seconds else call the server
this.c8o.callJsonObject(".getSimpleData",
            {
              C8oLocalCache.PARAM: new C8oLocalCache(Priority.LOCAL, 180 * 1000)
            })
            .then((response)=>{
              // Do stuff 
            });

// same sample but with parameters, also acting as cache keys
this.c8o.callJsonObject(".getSimpleData",
            {
              "firstname": "John",
		          "lastname": "Doe",
              C8oLocalCache.PARAM: new C8oLocalCache(Priority.LOCAL, 180 * 1000)
            })
            .then((response)=>{
              // Do stuff 
            });
// make a standard network call with the server
// but in case of offline move or network failure
// return the response if is already know and less than 1 hour
this.c8o.callJsonObject(".getSimpleData",
            {
              C8oLocalCache.PARAM: new C8oLocalCache(Priority.SERVER, 3600 * 1000)
            })
            .then((response)=>{
              // Do stuff 
            });
```
### Using the Full Sync ###
Full Sync enables mobile apps to handle fully disconnected scenarios, still having data handled and controlled by back end business logic. See the presentation of the Full Sync architecture for more details.

Convertigo Client SDK provides a high level access to local data following the standard Convertigo Sequence paradigm. They differ from standard sequences by a fs:// prefix. Calling these local Full Sync requestable will enable the app to read, write, query and delete data from the local database:

* fs://<database>.create creates the local database if not already exist
* fs://<database>.view queries a view from the local database
* fs://<database>.get reads an object from the local database
* fs://<database>.post writes/update an object to the local database
* fs://<database>.delete deletes an object from the local database
* fs://<database>.all gets all objects from the local database
* fs://<database>.sync synchronizes with server database
* fs://<database>.replicate_push pushes local modifications on the database server
* fs://<database>.replicate_pull gets all database server modifications
* fs://<database>.reset resets a database by removing all the data in it
* fs://<database>.put_attachment Puts (add) an attachment to a document in the database
* fs://<database>.bulk Bulk loads a database from a file 
* fs://<database>.info Get info for a given database

Where fs://<database> is the name of a specific FullSync Connector in the project specified in the endpoint. The fs://<database> name is optional only if the default database name is specified with the method setDefaultDatabaseName on the C8oSetting.

An application can have many databases. On mobile (Android, iOS and Xamarin based) they are stored in the secure storage of the application. On Windows desktop application, they are stored in the user AppData/Local folder, without application isolation.

All platforms can specify a local database prefix that allows many local database copies of the same remote database. Use the method setFullSyncLocalSuffix on the C8oSetting.

```typescript
// Assuming c8o is a C8o instance properly instanciated and initiated as describe above.

// clear or create the "base" database
// resultReset mustbe equal to { "ok" : true }
let resultReset = await this.c8o.callJson('fs://base.reset').async();

// creates a new document on "base", with 2 key/value pairs
// resultPost mustbe equal to { "ok": true, "id": "6f1b52df","rev":  "1-b0620371" }
let resultPost = await this.c8o.callJsonObject('fs://base.post', {
              firstname: "Jhonn",
              lastname: "Doe"
          }).async();

// retrieves the complet document from its "docid"
// resultGet mustbe equal to { "lastname": "Doe", "rev": "1-b0620371", "firstname": "John", "_id": "6f1b52df" }
let resultGet = await this.c8o.callJsonObject('fs://base.get', {
              docid: resultPost['id']
          }).async();

// Put an attachment into our document 
let resultGet = await this.c8o.callJson("fs://base.put_attachment", 
            "docid", id, "name", "text2.txt", "content_type", "text/plain", "content", new Blob(["Hello Convertigo !"], {type: "text/plain"})).async();

// Get this attachment from our document
let resultGet = await this.c8o.callJson("fs://base.get", "docid", id, "attachments", true).async();

// Get information form a local database
let resultInfo = await this.c8o.callJson("fs://base.info").async();

// Bulk load of database with an url as data argument
let resultBulk = await this.c8o.callJson("fs://base.bulk", "data", "http://myurl.com/dump.json");

```

### Replicating Full Sync databases
FullSync has the ability to replicate mobile and Convertigo server databases over unreliable connections still preserving integrity. Data can be replicated in upload or download or both directions. The replication can also be continuous: a new document is instantaneously replicated to the other side.

The client SDK offers the progress event to monitor the replication progression thanks to a C8oProgress instance.

A device cannot pull private documents or push any document without authentication. A session must be established before and the Convertigo server must authenticate the session (using the Set authenticated user step for example).

```typescript
// Assuming c8o is a C8o instance properly instanciated and initiated as describe above.

this.c8o.callJson('.login')
.then((response)=>{
    if(response == "ok"){
      // The progress can be handled only with C8oPromise,
      // replication_pull can also be sync or replication_push
      this.c8o.callJson('fs://base.replication_pull')
        .then((response)=>{
          // Do stuff with response
        })
        .progress((progress)=>{
          // Do stuff with progress
        });
    }
});

```

### Replicating Full Sync databases with continuous flag ###
As mentioned above, a replication can also be continuous: a new document is instantaneously replicated to the other side.

Progress will be called at each entering replication during the all life of the application until that you explicitly cancel that one

```typescript
// Assuming c8o is a C8o instance properly instanciated and initiated as describe above.

// The progress can be handled only with C8oPromise
this.c8o.callJsonObject('fs://base.replication_pull', {"continuous": true})
    .then((response)=>{
      // Do stuff with response
    })
    .progress((progress)=>{
      // Do stuff with progress
    })

// this will cancel the previous replication
this.c8o.callJsonObject('fs://base.replication_pull', {"cancel": true})
    .then((response)=>{
      // Do stuff with response
    })
```

### Full Sync FS_LIVE requests

 Full Sync has the ability to re-execute your fs:// calls if the database is modified. The then or thenUI following a FS_LIVE parameter is re-executed after each database update. Database update can be local modification or remote modification replicated.

This allow you keep your UI synchronized with database documents.

A FS_LIVE parameter must have a string value, its liveid. The liveid allow to cancel a FS_LIVE request.

```javascript
// Assuming c8o is a C8o instance properly instanciated and initiated as describe above.

// The then of the live requests can be handled only with C8oPromise
this.c8o.callJsonObject("fs://base.view",{
    "ddoc": "design",
    "view": "customers",
    C8o["FS_LIVE"]: "customers"
    })
    .then((response)=>{
      // will be call now and after each database update
    })

    // cancel the previous FS_LIVE request, can be on application page change for example
    this.c8o.cancelLive("customers")
    .then(()=>{
      // do stuff
    }
    .catch((err)=>{
      // catch errors
    });
```


### Full Sync Change Listener ###
Full Sync has also the ability to notify your if there is any change on the database. The progress following a FS_LIVE parameter is triggered  after each database update. The changes contains the origin of the change, and other attributes :
* isExternal
* isCurrentRevision
* isConflict
* id
* revisionId
 
```typescript
let changeListener : C8oFullSyncChangeListener = new C8oFullSyncChangeListener((changes:Object)=>{
	checkChanges(changes);
});
â€¦
c8o.addFullSyncChangeListener("databaseName", changeListener); // add this listener for the database "base" ; null or "" while use the default database.
â€¦
c8o.removeFullSyncChangeListener("databaseName", changeListener); // remove this listener for the database "base" ; null or "" while use the default database.

```
## Internal Technical documentation ##

### Project description ###

This project is a angular basic sample.

It is organized by a workspace that holds the whole project.

Into this workspace there can be severals projects.

Actually c8osdkangular is the only one project.

For technical reasons, [c8osdkjscore](https://github.com/convertigo/c8osdk-js-core) is linked to this repo as a submodule into projects/src/c8osdk-js-core.

c8osdkangular source content is under projects/src/lib.

### Build of project ###

To build project please run the following command from root of workspace

```shell
npm run build-sdk
```
This command will build the project into dist/ and copy README.md from projects/c8osdkangular/README.md to root of project and dist folder.

### Test of project ###

To test project please run the following command from root of workspace

```shell
npm run test-sdk
```
### Release of project ###
The README.md that has to be edited is under projects/README.md if you want the changes to be taken into account

To publish the package please run the following command

```shell
npm run publish-sdk
```

To publish beta the package please run the following command

```shell
npm run publish-beta-sdk
```


