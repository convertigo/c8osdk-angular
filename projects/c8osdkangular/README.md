<p align="center">
  <img src="https://www.convertigo.com/wp-content/themes/EightDegree/images/logo_convertigo.png">
  <h2 align="center"> C8oSDK Angular</h2>
</p>
<p align="center">
  <a href="/LICENSE"><img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg" alt="License"></a>
  <a href="https://www.npmjs.com/package/c8osdkangular"><img
  src="https://img.shields.io/npm/v/c8osdkangular.svg" alt="Travis Status"></a>
  <a href="https://circleci.com/gh/convertigo/c8osdk-angular/tree/develop"><img
  src="https://circleci.com/gh/convertigo/c8osdk-angular/tree/develop.svg?style=svg" alt="Travis Status"></a>
</p>

## Test status ##
Angular 8.X : ![status](https://152-69371506-gh.circle-artifacts.com/0/home/circleci/project/result/angular7.png)

Angular 7.X : ![status](https://152-69371506-gh.circle-artifacts.com/0/home/circleci/project/result/angular7.png)

Angular 6.X: ![status](https://152-69371506-gh.circle-artifacts.com/0/home/circleci/project/result/angular6.png)

Angular 5.X: ![status](https://152-69371506-gh.circle-artifacts.com/0/home/circleci/project/result/angular5.png)


## Table of contents ##

- [Test status](#Test-status)
- [Table of contents](#Table-of-contents)
- [Introduction](#Introduction)
  - [About SDKs](#About-SDKs)
  - [About Convertigo Platform](#About-Convertigo-Platform)
- [Requirements](#Requirements)
- [Installation](#Installation)
  - [Support of Angular 6, 7, 8](#Support-of-Angular-6-7-8)
- [Documentation](#Documentation)
  - [Creating a C8o instance](#Creating-a-C8o-instance)
  - [Advanced instance settings](#Advanced-instance-settings)
    - [General](#General)
    - [Normalize parameters](#Normalize-parameters)
  - [Calling a Convertigo requestable](#Calling-a-Convertigo-requestable)
  - [Calling a Convertigo requestable with parameters](#Calling-a-Convertigo-requestable-with-parameters)
  - [Calling a Convertigo requestable uploading a files](#Calling-a-Convertigo-requestable-uploading-a-files)
  - [Chaining calls](#Chaining-calls)
  - [Handling failures](#Handling-failures)
  - [Writing the device logs to the Convertigo server](#Writing-the-device-logs-to-the-Convertigo-server)
    - [Basic](#Basic)
    - [Advanced](#Advanced)
  - [Using the Local Cache](#Using-the-Local-Cache)
  - [Using the Full Sync](#Using-the-Full-Sync)
  - [Creating a FullSync database](#Creating-a-FullSync-database)
  - [Post a document into FullSync database (create / update)](#Post-a-document-into-FullSync-database-create--update)
  - [Get a document from a FullSync database (fetch)](#Get-a-document-from-a-FullSync-database-fetch)
  - [Delete a document from a FullSync database (remove)](#Delete-a-document-from-a-FullSync-database-remove)
  - [Synchronize client side database and server database (sync / replicate_pull / replicate_push / replications)](#Synchronize-client-side-database-and-server-database-sync--replicate_pull--replicate_push--replications)
  - [Perform a Query View (Map / Reduce)](#Perform-a-Query-View-Map--Reduce)
  - [Full Sync Change Listener](#Full-Sync-Change-Listener)
  - [Get an attachment](#Get-an-attachment)
  - [Get all documents](#Get-all-documents)
    - [Get all documents](#Get-all-documents-1)
    - [Get all local documents ("_local/")](#Get-all-local-documents-_local)
  - [Keep Alive session](#Keep-Alive-session)
- [Internal Technical documentation](#Internal-Technical-documentation)
  - [Project description](#Project-description)
  - [Build of project](#Build-of-project)
  - [Test of project](#Test-of-project)
  - [Release of project](#Release-of-project)

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

Convertigo Mobility Platform supports Angular developers. Services brought by the platform are available for Angular clients applications thanks to the Convertigo MBaaS SDK. SDK provides an Angular framework you can use to access Convertigo Servers services such as:

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

* node.js LTS

## Installation ##

```shell
$ npm install --save c8osdkangular@latest
```

### Support of Angular 6, 7, 8 ###

To target angular 6 & 7 please use at least version 2.2.8
```shell
$ npm install --save c8osdkangular@2.2.8
```

To target angular  8 please use at least version 3.0.0-beta17
```shell
$ npm install --save c8osdkangular@3.0.0-beta17
```

Then add the following lines into your polyfill.ts located at /ProjectRoot/src/polyfill.ts

```typescript
(window as any).global = window;
(window as any).process = window;
window["browser"] = true;
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
#### General ####
 The endpoint is the mandatory setting to get a C8o instance correctly initialized but there is additional settings through the C8oSettings class.

A C8oSettings instance should be passed after the endpoint. Settings are copied inside the C8o instance and a C8oSettings instance can be modified and reused.

Setters of C8oSettings always return its own instance and can be chained.

A C8oSettings can be instantiated from an existing C8oSettings or C8o instance.

In order to finish the c8o initialization you must use init method from c8o object with a c8oSettings parameters

```typescript
import { C8o, C8oSettings } from "c8osdkangular";

// The only way
let settings: C8oSettings = new C8oSettings();
settings
        .setEndPoint("https://demo.convertigo.net/cems/projects/sampleMobileCtfGallery")
        .setDefaultDatabaseName("mydb_fullsync")
        .setTimeout(30000)
        .setKeepSessionAlive(true);
//Then we need to assign C8oSettings object to our C8o object
c8o.init(settings);

// all settings can be retrieve from a C8o or C8oSettings instance
let timeout : number = c8o.timeout;
```
#### Normalize parameters ####

If you want to normalize parameters of every call you can set it throw  C8osettings setNormalizeParameters method.
setNormalizeParameters

```typescript
import { C8o, C8oSettings } from "c8osdkangular";

// The only way
let settings: C8oSettings = new C8oSettings();
settings
        .setNormalizeParameters(true);
//Then we need to assign C8oSettings object to our C8o object
c8o.init(settings);

// all settings can be retrieve from a C8o or C8oSettings instance
let normalizeParameters : boolean = c8o.normalizeParameters;
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

// Using RxJS Observables that allow for example progress and Live. 
this.c8o.callJson(".login")
    .toObservable()
    .subscribe(next => {
        // handle results
        // console.log(next.response);
        //console.log(next.parameters)
    },
    error =>{
        // handle errors
    },
    () =>{
      // handle complete
    });

// Using C8oPromise that allow for example progress and Live. C8oPromise is described in Api doc in section Api documentation of this README
this.c8o.callJson(".login")
    .then((response)=>{
      //handle result
    });
```

### Calling a Convertigo requestable with parameters ###
Convertigo requestables generally needs key/value parameters encapsulated in a simple javascript object. 

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

The .then() returns a C8oPromise that can be use to chain other promise methods, such as .then() or failure handlers. The last .then() must return a null value. .then() can be mixed but the returning type must be the same: XML or JSON.

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

// Here using Rxjs Observables
this.c8o.callJson(".login")
    .toObservable()
    .subscribe(next => {
        // handle results
        // console.log(next.response);
        //console.log(next.parameters)
    },
    error =>{
        // handle errors
    },
    () =>{
      // handle complete
    });

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

* Fullsync verbs:
* fs://<database>.[create](#Creating-a-FullSync-database) creates the database (client side) if not already exist
* fs://<database>.[post](#Post-a-document-into-FullSync-database-create--update) writes/update an object to the database (client side)
* fs://<database>.[get](#Get-a-document-from-a-FullSync-database-fetch) reads an object from the database (client side)
* fs://<database>.[delete](#Delete-a-document-from-a-FullSync-database-remove) deletes an object from the database (client side)
* fs://<database>.[sync](#Synchronize-client-side-database-and-server-database-sync--replicate_pull--replicate_push--replications) synchronizes the client side database with server database
* fs://<database>.[replicate_push](#Synchronize-client-side-database-and-server-database-sync--replicate_pull--replicate_push--replications) pushes client side modifications on the database server
* fs://<database>.[replicate_pull](#Synchronize-client-side-database-and-server-database-sync--replicate_pull--replicate_push--replications) replicate on client side database, all database server modifications
* fs://<database>.[view](#Perform-a-Query-View-Map--Reduce) queries a view from the database (client side)
* fs://<database>.all gets all objects from the database (client side)
* fs://<database>.all_local gets all local objects (which one having id starting by "_local/") from the database (client side)
* fs://<database>.reset resets a client side database by removing all the data in it
* fs://<database>.put_attachment Puts (add) an attachment to a document in the database (client side)
* fs://<database>.bulk Bulk loads a client side database from a file 
* fs://<database>.info Get info for a given database (client side)

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

// Get information from a local database
let resultInfo = await this.c8o.callJson("fs://base.info").async();

// Bulk load of database with an url as data argument
let resultBulk = await this.c8o.callJson("fs://base.bulk", "data", "http://myurl.com/dump.json").async();

// get all documents
let resultGet = await this.c8o.callJson("fs://base.all").async();

// get all local ("_local/" documents)
let resultGet = await this.c8o.callJson("fs://base.all_local").async();

```

### Creating a FullSync database ###
If you wants to create programmatically a new database, you must use ```fs://baseName.create``` verb.

```typescript
let resultCreate = await this.c8o.callJson("fs://mabase.create").async();
```

### Post a document into FullSync database (create / update) ###
If you wants to post a document into a given database, you must use ```fs://baseName.post``` verb.

You can use the following options:
* **_id**: (optional) you can specify an id, if its not specified, an id will be generated. Also if you want to override a document, you must provide its id
* **_rev**: (optional) if you want to update an existing document you must specify its revision
* **_use_policy**: (optional) if you want to update an existing document, you must provide a policy, that will define the behaviour.
  * **none**: This is the default post policy that don't alter the document before the insertion.
  * **create**: This post policy remove the "_id" and "_rev" of the document before the insertion.
  * **override**: This post policy inserts the document in database even if a document with the same "_id" already exists.
  * **merge**: This post policy merge the document with an existing document with the same "_id" before the insertion.

```typescript
// here we post a document, with a given id 
let resultPost = await this.c8o.callJson("fs://mabase.post", "id", "myId").async();
```


### Get a document from a FullSync database (fetch) ###
If you wants to fetch a document from a given database, you must use ```fs://baseName.get``` verb.

You can use the following options:
* **docid**: The id of the document
* **rev**: Fetch specific revision of a document. Defaults to winning revision (see the CouchDB guide).
* **revs**: Include revision history of the document.
* **revs_info**: Include a list of revisions of the document, and their availability.
* **open_revs**: Fetch all leaf revisions if open_revs="all" or fetch all leaf revisions specified in open_revs array. Leaves will be returned in the same order as specified in input array.
* **conflicts**: If specified, conflicting leaf revisions will be attached in _conflicts array.
* **attachments**: Include attachment data.
  * **binary** : Return attachment data as Blobs/Buffers, instead of as base64-encoded strings.
* **latest**: Forces retrieving latest “leaf” revision, no matter what rev was requested. Default is false.

```typescript
// here we fetch a document with its attachments
let resultGet = await this.c8o.callJson("fs://mabase.get", "attachments", true).async();
```


### Delete a document from a FullSync database (remove) ###
If you wants to delete a document from a given database, you must use ```fs://baseName.delete``` verb.

You can use the following options:
* **docid**: The id of the document
* **rev**: Fetch specific revision of a document. Defaults to winning revision (see the CouchDB guide).

```typescript
// here we fetch a document with its attachments
let resultGet = await this.c8o.callJson("fs://mabase.delete", "docid", "myId", "_rev", "myRevision").async();
```

### Synchronize client side database and server database (sync / replicate_pull / replicate_push / replications) ###
FullSync has the ability to replicate mobile and Convertigo server databases over unreliable connections still preserving integrity. Data can be replicated in upload or download or both directions. The replication can also be continuous: a new document is instantaneously replicated to the other side.

The client SDK offers the progress event to monitor the replication progression thanks to a C8oProgress instance.

A device cannot pull private documents or push any document without authentication. A session must be established before and the Convertigo server must authenticate the session (using the Set authenticated user step for example).


There is 3 ways for the replication:
* **sync**: a bi-directional replication (same that doing replicate_pull and replicate_push at the same time)
* **replicate_pull**: an unidirectional replication from the server to the client.
* **replicate_push**: a unidirectional replication from the client to the server 

Theses replications can be done in mode continuous, so if a new document is created its instantaneously replicated to the other side.

Also you can monitor the progress of the replications, and be notified of any error or result...

You can use the following options:

* **continuous**: If true, starts subscribing to future changes in the source database and continue replicating them.
* **retry**: If true will attempt to retry replications in the case of failure (due to being offline), using a backoff algorithm that retries at longer and longer intervals until a connection is re-established, with a maximum delay of 10 minutes. Only applicable if options.live is also true.
* **filter**: Reference a filter function from a design document to selectively get updates. To use a view function, pass _view here and provide a reference to the view function in options.view. See filtered replication for details.
* **doc_ids**: Only show changes for docs with these ids (array of strings).
* **query_params**: Object containing properties that are passed to the filter function, e.g. {"foo":"bar"}, where "bar" will be available in the filter function as params.query.foo. To access the params, define your filter function like function (doc, params) {/* ... */}.
* **view**: Specify a view function (e.g. 'design_doc_name/view_name' or 'view_name' as shorthand for 'view_name/view_name') to act as a filter. Documents counted as “passed” for a view filter if a map function emits at least one record for them. Note: options.filter must be set to '_view' for this option to work.
* **selector**: Filter using a query/pouchdb-find selector. Note: Selectors are not supported in CouchDB 1.x.
* **since**: Replicate changes after the given sequence number.
* **heartbeat**: Configure the heartbeat supported by CouchDB which keeps the change connection alive.
* **timeout**: Request timeout (in milliseconds).
* **batch_size**: Number of change feed items to process at a time. Defaults to 100. This affects the number of docs and attachments held in memory and the number sent at a time to the target server. You may need to adjust downward if targeting devices with low amounts of memory (e.g. phones) or if the documents and/or attachments are large in size or if there are many conflicted revisions. If your documents are small in size, then increasing this number will probably speed replication up.
* **batches_limit**: Number of batches to process at a time. Defaults to 10. This (along wtih batch_size) controls how many docs are kept in memory at a time, so the maximum docs in memory at once would equal batch_size × batches_limit.
* **back_off_function**: backoff function to be used in retry replication. This is a function that takes the current backoff as input (or 0 the first time) and returns a new backoff in milliseconds. You can use this to tweak when and how replication will try to reconnect to a remote database when the user goes offline. Defaults to a function that chooses a random backoff between 0 and 2 seconds and doubles every time it fails to connect. The default delay will never exceed 10 minutes.
* **checkpoint**: Can be used if you want to disable checkpoints on the source, target, or both. Setting this option to false will prevent writing checkpoints on both source and target. Setting it to source will only write checkpoints on the source. Setting it to target will only write checkpoints on the target.


```typescript
// here we sync (bi-directional) fullsync bases
this.c8o.callJson("fs://mabase.sync", "continuous", true)
.then((response, paremeters)=>{
  // in a continous sync, then will be triggered after initial replication
})
.progress((progress: C8oProgress)=>{
  // handle progress 
})
.fail((error: C8oException)=>{
// handle errors 
})
```

```typescript
// here we pull (uni-directional) fullsync bases from server to client
this.c8o.callJson("fs://mabase.replicate_pull", "continuous", true)
.then((response, paremeters)=>{
 // in a continous replicate_pull, then will be triggered after initial replication
})
.progress((progress: C8oProgress)=>{
  // handle progress 
})
.fail((error: C8oException)=>{
// handle errors 
})
```

```typescript
// here we push (uni-directional) fullsync bases from client to server
this.c8o.callJson("fs://mabase.sync", "continuous", true)
.then((response, paremeters)=>{
 // in a continous replicate_push, then will be triggered after initial replication
})
.progress((progress: C8oProgress)=>{
  // handle progress 
})
.fail((error: C8oException)=>{
// handle errors 
})
```

### Perform a Query View  (Map / Reduce) ####
Thanks to the FullSync, you can invoke a map/reduce function, which allows you to perform more complex queries on client side.

 Also, it's has the ability to re-execute your query view if the database is modified, it can be local or remote modification, so your data displayed is never out of date, in fact, the callback (then) is called after each modification.

This allow you keep your UI synchronized with database documents.

You can use the following options:



* **docid**: The name of a view in an existing design document (e.g. 'mydesigndoc/myview', or 'myview' as a shorthand for 'myview/myview').
* **__live**: This allow the view to update itself after a database modification. this must be a string value, this an id. It will be useful to cancel view to cancel a FS_LIVE request.
* **reduce**: Defaults to true when a reduce function is defined, or false otherwise. Valid values:
  * **true** - calls the defined reduce function, or the map function if no reduce is defined.
  * **false** - calls the defined map function.
  * A reduce function.
    * The string name of a built-in function: '_sum', '_count', or '_stats'.
    * Tip: if you’re not using a built-in, you’re probably doing it wrong.
* **include_docs**: Include the document in each row in the doc field.
* **conflicts**: Include conflicts in the _conflicts field of a doc.
* **attachments**: Include attachment data.
* **binary**: Return attachment data as Blobs/Buffers, instead of as base64-encoded strings.
* **startkey** & **endkey**: Get rows with keys in a certain range (inclusive/inclusive).
* **inclusive_end**: Include rows having a key equal to the given options.endkey. Default: true.
* **limit**: Maximum number of rows to return.
* **skip**: Number of rows to skip before returning (warning: poor performance on IndexedDB/LevelDB!).
* **descending**: Reverse the order of the output rows.
* **key**: Only return rows matching this key.
* **keys**: Array of keys to fetch in a single shot.
  * Neither startkey nor endkey can be specified with this option.
  * The rows are returned in the same order as the supplied keys array.
  * The row for a deleted document will have the revision ID of the deletion, and an extra key "deleted":true in the value property.
  * The row for a nonexistent document will just contain an "error" property with the value "not_found".
* **group**: True if you want the reduce function to group results by keys, rather than returning a single result. Defaults to false.
* **group_level**: Number of elements in a key to group by, assuming the keys are arrays. Defaults to the full length of the array.
* **stale**: One of 'ok' or 'update_after'. Only applies to saved views. Can be one of:
  * unspecified (default): Returns the latest results, waiting for the view to build if necessary.
  * 'ok': Returns results immediately, even if they’re out-of-date.
  * 'update_after': Returns results immediately, but kicks off a build afterwards.
* update_seq: Include an update_seq value indicating which sequence id of the underlying database the view reflects.


```typescript
// The then of the live requests can be handled only with C8oPromise
this.c8o.callJsonObject("fs://base.view",{
    "ddoc": "design",
    "view": "customers",
    "__live": "customers"
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

### Get an attachment ###

If you want to get an attachment you can use get_attachment method from c8o class. You need an id of document and the name of the given attachment.

See the following example.

``` typescript
c8o.get_attachment("docid", "attachment_name")
.then((response)=>{
  // get a buffer
  // URL can be 'sanitized' by :
  // ... sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(response))
})
.catch(()=>{
  // catch error
})
```


### Get all documents ###

If you wants to get all documents present in your client side database, you must use .all, or .all_local verbs.

Typically, there is two kind of documents, first kind that are synchronized, and second one that will never be.

If you wants to create local document that will never be synchronized just use prefix _local/ for the id.

To access to (client side) synchronized documents use .all verb, on the other hand if you wants to access to all local documents that will never be synchronised use .all_local.

#### Get all documents ####

"fs://.all" verb support the following options:

* **include_docs**: Include the document itself in each row in the doc field. Otherwise by default you only get the _id and _rev properties.
* **conflicts**: Include conflict information in the _conflicts field of a doc.
* **attachments**: Include attachment data as base64-encoded string.
* **binary**: Return attachment data as Blobs/Buffers, instead of as base64-encoded strings.
* **startkey** & **endkey**: Get documents with IDs in a certain range (inclusive/inclusive).
* **inclusive_end**: Include documents having an ID equal to the given options.endkey. Default: true.
* **limit**: Maximum number of documents to return.
* **skip**: Number of docs to skip before returning (warning: poor performance on IndexedDB/LevelDB!).
* **descending**: Reverse the order of the output documents. Note that the order of startkey and endkey is reversed when descending:true.
* **key**: Only return documents with IDs matching this string key.
* **keys**: Array of string keys to fetch in a single shot.
  * Neither startkey nor endkey can be specified with this option.
  * The rows are returned in the same order as the supplied keys array.
  * The row for a deleted document will have the revision ID of the deletion, and an extra key "deleted":true in the value property.
  * The row for a nonexistent document will just contain an "error" property with the value "not_found".

``` typescript
// get all documents including docs 
let resultGet = await this.c8o.callJson("fs://base.all", include_docs: true).async();
```
#### Get all local documents ("_local/") ####


"fs://.all_local" verb support the following options:

* **include_docs**: Include the document itself in each row in the doc field. Otherwise by default you only get the _id and _rev properties.
* **startkey** & **endkey**: Get documents with IDs in a certain range (inclusive/inclusive).
* **inclusive_end**: Include documents having an ID equal to the given options.endkey. Default: true.
* **limit**: Maximum number of documents to return.
* **skip**: Number of docs to skip before returning (warning: poor performance on IndexedDB/LevelDB!).
* **descending**: Reverse the order of the output documents. Note that the order of startkey and endkey is reversed when descending:true.
* **key**: Only return documents with IDs matching this string key.
* **keys**: Array of string keys to fetch in a single shot.
  * Neither startkey nor endkey can be specified with this option.
  * The rows are returned in the same order as the supplied keys array.
  * The row for a deleted document will have the revision ID of the deletion, and an extra key "deleted":true in the value property.
  * The row for a nonexistent document will just contain an "error" property with the value "not_found".

``` typescript
// get all local ("_local/" documents) descending
let resultGet = await this.c8o.callJson("fs://base.all_local", "descending", true).async();
```



### Keep Alive session ###

Sdk has the ability to detect when your session will be dropped, and notify you.
This is really helpful, because it can prevent you, in the case of fullsync authenticated replications, from lost of session and so a broken replication.

By default, SDK keep alive your session.

In case of lost of network, we will stop fullsync replications.

And when network come back, we will check if your session is still existing.

In this case we will restart automatically replication.

And if session do not exist anymore we will notify you by a handler.

```typescript
 // set keep sessionAlive active
 c8oSettings
    .setKeepSessionAlive(true);
```

``` typescript
  // Handle sesion lost event
  c8o.handleSessionLost()
    .subscribe(() => {
      // Do something
  });
```


## Internal Technical documentation ##

### Project description ###

This project is a angular basic sample.

It is organized by a workspace that holds the whole project.

Into this workspace there can be several projects.

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
Build status on README.md is linked to circle-ci build version please update version number before committing.
 
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


