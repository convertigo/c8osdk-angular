[c8osdkjscore](../README.md) › [C8oHttpInterface](c8ohttpinterface.md)

# Class: C8oHttpInterface

## Hierarchy

* [C8oHttpInterfaceCore](c8ohttpinterfacecore.md)

  ↳ **C8oHttpInterface**

## Index

### Constructors

* [constructor](c8ohttpinterface.md#constructor)

### Properties

* [_isCordova](c8ohttpinterface.md#protected-_iscordova)
* [c8o](c8ohttpinterface.md#c8o)
* [firstCall](c8ohttpinterface.md#firstcall)
* [firstcheckSessionR](c8ohttpinterface.md#firstchecksessionr)
* [p1](c8ohttpinterface.md#p1)
* [timeout](c8ohttpinterface.md#timeout)

### Methods

* [checkFile](c8ohttpinterface.md#checkfile)
* [execHttpPosts](c8ohttpinterface.md#exechttpposts)
* [forceInit](c8ohttpinterface.md#forceinit)
* [getHeaders](c8ohttpinterface.md#getheaders)
* [getUserServiceStatus](c8ohttpinterface.md#getuserservicestatus)
* [getuploadRequester](c8ohttpinterface.md#getuploadrequester)
* [handleProgress](c8ohttpinterface.md#handleprogress)
* [handleRequest](c8ohttpinterface.md#handlerequest)
* [handleResponseFileUpload](c8ohttpinterface.md#handleresponsefileupload)
* [httpGetObservable](c8ohttpinterface.md#httpgetobservable)
* [httpPost](c8ohttpinterface.md#httppost)
* [httpPostObservable](c8ohttpinterface.md#httppostobservable)
* [isCordova](c8ohttpinterface.md#protected-iscordova)
* [isHttpResponse](c8ohttpinterface.md#ishttpresponse)
* [transformRequest](c8ohttpinterface.md#transformrequest)
* [transformRequestfileNative](c8ohttpinterface.md#transformrequestfilenative)
* [transformRequestformdata](c8ohttpinterface.md#transformrequestformdata)
* [uploadFileHttp](c8ohttpinterface.md#uploadfilehttp)
* [uploadFilePluginNative](c8ohttpinterface.md#uploadfilepluginnative)

## Constructors

###  constructor

\+ **new C8oHttpInterface**(`c8o`: [C8o](c8o.md)): *[C8oHttpInterface](c8ohttpinterface.md)*

*Overrides [C8oHttpInterfaceCore](c8ohttpinterfacecore.md).[constructor](c8ohttpinterfacecore.md#constructor)*

*Defined in [lib/c8oHttpInterface.service.ts:5](https://github.com/convertigo/c8osdk-angular/blob/6ecaf1d/projects/c8osdkangular/src/lib/c8oHttpInterface.service.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`c8o` | [C8o](c8o.md) |

**Returns:** *[C8oHttpInterface](c8ohttpinterface.md)*

## Properties

### `Protected` _isCordova

• **_isCordova**: *any* =  null

*Inherited from [C8oHttpInterfaceCore](c8ohttpinterfacecore.md).[_isCordova](c8ohttpinterfacecore.md#protected-_iscordova)*

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:17](https://github.com/convertigo/c8osdk-angular/blob/70a3f40/src/c8o/c8oHttpInterfaceCore.ts#L17)*

___

###  c8o

• **c8o**: *[C8oCore](c8ocore.md)*

*Inherited from [C8oHttpInterfaceCore](c8ohttpinterfacecore.md).[c8o](c8ohttpinterfacecore.md#c8o)*

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:13](https://github.com/convertigo/c8osdk-angular/blob/70a3f40/src/c8o/c8oHttpInterfaceCore.ts#L13)*

___

###  firstCall

• **firstCall**: *boolean* = true

*Inherited from [C8oHttpInterfaceCore](c8ohttpinterfacecore.md).[firstCall](c8ohttpinterfacecore.md#firstcall)*

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:15](https://github.com/convertigo/c8osdk-angular/blob/70a3f40/src/c8o/c8oHttpInterfaceCore.ts#L15)*

___

###  firstcheckSessionR

• **firstcheckSessionR**: *boolean*

*Inherited from [C8oHttpInterfaceCore](c8ohttpinterfacecore.md).[firstcheckSessionR](c8ohttpinterfacecore.md#firstchecksessionr)*

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:18](https://github.com/convertigo/c8osdk-angular/blob/70a3f40/src/c8o/c8oHttpInterfaceCore.ts#L18)*

___

###  p1

• **p1**: *Promise‹Object›*

*Inherited from [C8oHttpInterfaceCore](c8ohttpinterfacecore.md).[p1](c8ohttpinterfacecore.md#p1)*

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:16](https://github.com/convertigo/c8osdk-angular/blob/70a3f40/src/c8o/c8oHttpInterfaceCore.ts#L16)*

___

###  timeout

• **timeout**: *number*

*Inherited from [C8oHttpInterfaceCore](c8ohttpinterfacecore.md).[timeout](c8ohttpinterfacecore.md#timeout)*

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:14](https://github.com/convertigo/c8osdk-angular/blob/70a3f40/src/c8o/c8oHttpInterfaceCore.ts#L14)*

## Methods

###  checkFile

▸ **checkFile**(`parameters`: Object): *number*

*Inherited from [C8oHttpInterfaceCore](c8ohttpinterfacecore.md).[checkFile](c8ohttpinterfacecore.md#checkfile)*

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:255](https://github.com/convertigo/c8osdk-angular/blob/70a3f40/src/c8o/c8oHttpInterfaceCore.ts#L255)*

Check type of file given in parameters
0 : No file to upload
1 : FileList Or File
2 : url when running in cordova

**Parameters:**

Name | Type |
------ | ------ |
`parameters` | Object |

**Returns:** *number*

___

###  execHttpPosts

▸ **execHttpPosts**(`url`: string, `parameters`: any, `headers`: any, `resolve`: any, `reject`: any, `headers_return`: boolean, `doLogin`: boolean): *void*

*Inherited from [C8oHttpInterfaceCore](c8ohttpinterfacecore.md).[execHttpPosts](c8ohttpinterfacecore.md#exechttpposts)*

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:178](https://github.com/convertigo/c8osdk-angular/blob/70a3f40/src/c8o/c8oHttpInterfaceCore.ts#L178)*

Execute http Posts

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`url` | string | - | - |
`parameters` | any | - | - |
`headers` | any | - | - |
`resolve` | any | - | - |
`reject` | any | - |   |
`headers_return` | boolean | false | - |
`doLogin` | boolean | false | - |

**Returns:** *void*

___

###  forceInit

▸ **forceInit**(): *void*

*Inherited from [C8oHttpInterfaceCore](c8ohttpinterfacecore.md).[forceInit](c8ohttpinterfacecore.md#forceinit)*

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:62](https://github.com/convertigo/c8osdk-angular/blob/70a3f40/src/c8o/c8oHttpInterfaceCore.ts#L62)*

**Returns:** *void*

___

###  getHeaders

▸ **getHeaders**(`object`: any): *any*

*Overrides [C8oHttpInterfaceCore](c8ohttpinterfacecore.md).[getHeaders](c8ohttpinterfacecore.md#abstract-getheaders)*

*Defined in [lib/c8oHttpInterface.service.ts:15](https://github.com/convertigo/c8osdk-angular/blob/6ecaf1d/projects/c8osdkangular/src/lib/c8oHttpInterface.service.ts#L15)*

get headers;

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | any | headers object  |

**Returns:** *any*

___

###  getUserServiceStatus

▸ **getUserServiceStatus**(`observe?`: any): *Promise‹any›*

*Inherited from [C8oHttpInterfaceCore](c8ohttpinterfacecore.md).[getUserServiceStatus](c8ohttpinterfacecore.md#getuserservicestatus)*

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:113](https://github.com/convertigo/c8osdk-angular/blob/70a3f40/src/c8o/c8oHttpInterfaceCore.ts#L113)*

Call user service

**Parameters:**

Name | Type |
------ | ------ |
`observe?` | any |

**Returns:** *Promise‹any›*

___

###  getuploadRequester

▸ **getuploadRequester**(`url`: string, `form`: FormData, `headersObject`: any): *Observable‹any›*

*Overrides [C8oHttpInterfaceCore](c8ohttpinterfacecore.md).[getuploadRequester](c8ohttpinterfacecore.md#abstract-getuploadrequester)*

*Defined in [lib/c8oHttpInterface.service.ts:25](https://github.com/convertigo/c8osdk-angular/blob/6ecaf1d/projects/c8osdkangular/src/lib/c8oHttpInterface.service.ts#L25)*

Angular implementation to post with progress

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`url` | string | the url to post |
`form` | FormData | the form data to post |
`headersObject` | any | Headers to use  |

**Returns:** *Observable‹any›*

___

###  handleProgress

▸ **handleProgress**(`event`: any, `progress`: [C8oProgress](c8oprogress.md), `parameters`: any, `c8oResponseListener`: [C8oResponseListener](../interfaces/c8oresponselistener.md), `varNull`: JSON): *void*

*Inherited from [C8oHttpInterfaceCore](c8ohttpinterfacecore.md).[handleProgress](c8ohttpinterfacecore.md#handleprogress)*

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:578](https://github.com/convertigo/c8osdk-angular/blob/70a3f40/src/c8o/c8oHttpInterfaceCore.ts#L578)*

Handle progress

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | any | - |
`progress` | [C8oProgress](c8oprogress.md) | - |
`parameters` | any | - |
`c8oResponseListener` | [C8oResponseListener](../interfaces/c8oresponselistener.md) | - |
`varNull` | JSON |   |

**Returns:** *void*

___

###  handleRequest

▸ **handleRequest**(`url`: string, `parameters`: Object, `c8oResponseListener?`: [C8oResponseListener](../interfaces/c8oresponselistener.md)): *Promise‹any›*

*Inherited from [C8oHttpInterfaceCore](c8ohttpinterfacecore.md).[handleRequest](c8ohttpinterfacecore.md#handlerequest)*

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:408](https://github.com/convertigo/c8osdk-angular/blob/70a3f40/src/c8o/c8oHttpInterfaceCore.ts#L408)*

Handle the request

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`parameters` | Object |
`c8oResponseListener?` | [C8oResponseListener](../interfaces/c8oresponselistener.md) |

**Returns:** *Promise‹any›*

___

###  handleResponseFileUpload

▸ **handleResponseFileUpload**(`event`: any, `progress`: [C8oProgress](c8oprogress.md), `parameters`: Object, `c8oResponseListener`: [C8oResponseListener](../interfaces/c8oresponselistener.md), `varNull`: any, `resolve`: any): *void*

*Inherited from [C8oHttpInterfaceCore](c8ohttpinterfacecore.md).[handleResponseFileUpload](c8ohttpinterfacecore.md#handleresponsefileupload)*

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:543](https://github.com/convertigo/c8osdk-angular/blob/70a3f40/src/c8o/c8oHttpInterfaceCore.ts#L543)*

handle FileuploadResponses

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | any | - |
`progress` | [C8oProgress](c8oprogress.md) | - |
`parameters` | Object | - |
`c8oResponseListener` | [C8oResponseListener](../interfaces/c8oresponselistener.md) | - |
`varNull` | any | - |
`resolve` | any |   |

**Returns:** *void*

___

###  httpGetObservable

▸ **httpGetObservable**(`uri`: any, `param1`: any, `param2`: any): *any*

*Inherited from [C8oHttpInterfaceCore](c8ohttpinterfacecore.md).[httpGetObservable](c8ohttpinterfacecore.md#httpgetobservable)*

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:71](https://github.com/convertigo/c8osdk-angular/blob/70a3f40/src/c8o/c8oHttpInterfaceCore.ts#L71)*

Method to bastract http get

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`uri` | any | - | the uri for given request  |
`param1` | any |  null | - |
`param2` | any |  null | - |

**Returns:** *any*

___

###  httpPost

▸ **httpPost**(`url`: string, `parameters`: Object): *Promise‹any›*

*Inherited from [C8oHttpInterfaceCore](c8ohttpinterfacecore.md).[httpPost](c8ohttpinterfacecore.md#httppost)*

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:147](https://github.com/convertigo/c8osdk-angular/blob/70a3f40/src/c8o/c8oHttpInterfaceCore.ts#L147)*

Make an http post

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`parameters` | Object |

**Returns:** *Promise‹any›*

___

###  httpPostObservable

▸ **httpPostObservable**(`uri`: any, `param1`: any, `param2`: any): *any*

*Inherited from [C8oHttpInterfaceCore](c8ohttpinterfacecore.md).[httpPostObservable](c8ohttpinterfacecore.md#httppostobservable)*

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:101](https://github.com/convertigo/c8osdk-angular/blob/70a3f40/src/c8o/c8oHttpInterfaceCore.ts#L101)*

Method to bastract http post

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`uri` | any | the uri for given request  |
`param1` | any | - |
`param2` | any | - |

**Returns:** *any*

___

### `Protected` isCordova

▸ **isCordova**(): *boolean*

*Inherited from [C8oHttpInterfaceCore](c8ohttpinterfacecore.md).[isCordova](c8ohttpinterfacecore.md#protected-iscordova)*

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:294](https://github.com/convertigo/c8osdk-angular/blob/70a3f40/src/c8o/c8oHttpInterfaceCore.ts#L294)*

Check if we are in cordova environment

**Returns:** *boolean*

___

###  isHttpResponse

▸ **isHttpResponse**(`event`: any): *boolean*

*Overrides [C8oHttpInterfaceCore](c8ohttpinterfacecore.md).[isHttpResponse](c8ohttpinterfacecore.md#abstract-ishttpresponse)*

*Defined in [lib/c8oHttpInterface.service.ts:35](https://github.com/convertigo/c8osdk-angular/blob/6ecaf1d/projects/c8osdkangular/src/lib/c8oHttpInterface.service.ts#L35)*

test type of request

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | any | any  |

**Returns:** *boolean*

___

###  transformRequest

▸ **transformRequest**(`parameters`: Object): *string*

*Inherited from [C8oHttpInterfaceCore](c8ohttpinterfacecore.md).[transformRequest](c8ohttpinterfacecore.md#transformrequest)*

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:311](https://github.com/convertigo/c8osdk-angular/blob/70a3f40/src/c8o/c8oHttpInterfaceCore.ts#L311)*

Url encode parameters

**Parameters:**

Name | Type |
------ | ------ |
`parameters` | Object |

**Returns:** *string*

___

###  transformRequestfileNative

▸ **transformRequestfileNative**(`parameters`: Object): *any*

*Inherited from [C8oHttpInterfaceCore](c8ohttpinterfacecore.md).[transformRequestfileNative](c8ohttpinterfacecore.md#transformrequestfilenative)*

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:375](https://github.com/convertigo/c8osdk-angular/blob/70a3f40/src/c8o/c8oHttpInterfaceCore.ts#L375)*

Extract file from parameters and return and array containing a file and params

**Parameters:**

Name | Type |
------ | ------ |
`parameters` | Object |

**Returns:** *any*

___

###  transformRequestformdata

▸ **transformRequestformdata**(`parameters`: Object): *FormData*

*Inherited from [C8oHttpInterfaceCore](c8ohttpinterfacecore.md).[transformRequestformdata](c8ohttpinterfacecore.md#transformrequestformdata)*

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:335](https://github.com/convertigo/c8osdk-angular/blob/70a3f40/src/c8o/c8oHttpInterfaceCore.ts#L335)*

Transform FormData parameters

**Parameters:**

Name | Type |
------ | ------ |
`parameters` | Object |

**Returns:** *FormData*

___

###  uploadFileHttp

▸ **uploadFileHttp**(`url`: string, `form`: FormData, `parameters`: Object, `c8oResponseListener`: [C8oResponseListener](../interfaces/c8oresponselistener.md)): *Promise‹any›*

*Inherited from [C8oHttpInterfaceCore](c8ohttpinterfacecore.md).[uploadFileHttp](c8ohttpinterfacecore.md#uploadfilehttp)*

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:487](https://github.com/convertigo/c8osdk-angular/blob/70a3f40/src/c8o/c8oHttpInterfaceCore.ts#L487)*

Upload File using an Http client

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`form` | FormData |
`parameters` | Object |
`c8oResponseListener` | [C8oResponseListener](../interfaces/c8oresponselistener.md) |

**Returns:** *Promise‹any›*

___

###  uploadFilePluginNative

▸ **uploadFilePluginNative**(`url`: string, `parameters`: Object, `c8oResponseListener`: [C8oResponseListener](../interfaces/c8oresponselistener.md)): *Promise‹any›*

*Inherited from [C8oHttpInterfaceCore](c8ohttpinterfacecore.md).[uploadFilePluginNative](c8ohttpinterfacecore.md#uploadfilepluginnative)*

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:436](https://github.com/convertigo/c8osdk-angular/blob/70a3f40/src/c8o/c8oHttpInterfaceCore.ts#L436)*

Upload file with native plugin

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`parameters` | Object |
`c8oResponseListener` | [C8oResponseListener](../interfaces/c8oresponselistener.md) |

**Returns:** *Promise‹any›*
