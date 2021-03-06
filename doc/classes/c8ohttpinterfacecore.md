[c8osdkjscore](../README.md) › [C8oHttpInterfaceCore](c8ohttpinterfacecore.md)

# Class: C8oHttpInterfaceCore

## Hierarchy

* **C8oHttpInterfaceCore**

  ↳ [C8oHttpInterface](c8ohttpinterface.md)

## Index

### Constructors

* [constructor](c8ohttpinterfacecore.md#constructor)

### Properties

* [_isCordova](c8ohttpinterfacecore.md#protected-_iscordova)
* [_loggedinSession](c8ohttpinterfacecore.md#private-_loggedinsession)
* [_notifySessionLost](c8ohttpinterfacecore.md#private-_notifysessionlost)
* [_timeout](c8ohttpinterfacecore.md#private-_timeout)
* [c8o](c8ohttpinterfacecore.md#c8o)
* [firstCall](c8ohttpinterfacecore.md#firstcall)
* [firstcheckSessionR](c8ohttpinterfacecore.md#firstchecksessionr)
* [from](c8ohttpinterfacecore.md#private-from)
* [js](c8ohttpinterfacecore.md#private-js)
* [p1](c8ohttpinterfacecore.md#p1)
* [requestLogin](c8ohttpinterfacecore.md#private-requestlogin)
* [session](c8ohttpinterfacecore.md#private-session)
* [timeout](c8ohttpinterfacecore.md#timeout)

### Methods

* [checkFile](c8ohttpinterfacecore.md#checkfile)
* [execHttpPosts](c8ohttpinterfacecore.md#exechttpposts)
* [forceInit](c8ohttpinterfacecore.md#forceinit)
* [getHeaders](c8ohttpinterfacecore.md#abstract-getheaders)
* [getUserServiceStatus](c8ohttpinterfacecore.md#getuserservicestatus)
* [getuploadRequester](c8ohttpinterfacecore.md#abstract-getuploadrequester)
* [handleErrorFileUpload](c8ohttpinterfacecore.md#private-handleerrorfileupload)
* [handleErrorHttpPost](c8ohttpinterfacecore.md#private-handleerrorhttppost)
* [handleProgress](c8ohttpinterfacecore.md#handleprogress)
* [handleRequest](c8ohttpinterfacecore.md#handlerequest)
* [handleResponseFileUpload](c8ohttpinterfacecore.md#handleresponsefileupload)
* [handleResponseHttpPost](c8ohttpinterfacecore.md#private-handleresponsehttppost)
* [httpGetObservable](c8ohttpinterfacecore.md#httpgetobservable)
* [httpPost](c8ohttpinterfacecore.md#httppost)
* [httpPostObservable](c8ohttpinterfacecore.md#httppostobservable)
* [isCordova](c8ohttpinterfacecore.md#protected-iscordova)
* [isHttpResponse](c8ohttpinterfacecore.md#abstract-ishttpresponse)
* [transformRequest](c8ohttpinterfacecore.md#transformrequest)
* [transformRequestfileNative](c8ohttpinterfacecore.md#transformrequestfilenative)
* [transformRequestformdata](c8ohttpinterfacecore.md#transformrequestformdata)
* [uploadFileHttp](c8ohttpinterfacecore.md#uploadfilehttp)
* [uploadFilePluginNative](c8ohttpinterfacecore.md#uploadfilepluginnative)

## Constructors

###  constructor

\+ **new C8oHttpInterfaceCore**(`c8o`: [C8oCore](c8ocore.md)): *[C8oHttpInterfaceCore](c8ohttpinterfacecore.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:25](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oHttpInterfaceCore.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`c8o` | [C8oCore](c8ocore.md) |

**Returns:** *[C8oHttpInterfaceCore](c8ohttpinterfacecore.md)*

## Properties

### `Protected` _isCordova

• **_isCordova**: *any* =  null

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:17](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oHttpInterfaceCore.ts#L17)*

___

### `Private` _loggedinSession

• **_loggedinSession**: *boolean*

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:24](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oHttpInterfaceCore.ts#L24)*

___

### `Private` _notifySessionLost

• **_notifySessionLost**: *boolean*

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:25](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oHttpInterfaceCore.ts#L25)*

___

### `Private` _timeout

• **_timeout**: *any*

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:21](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oHttpInterfaceCore.ts#L21)*

___

###  c8o

• **c8o**: *[C8oCore](c8ocore.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:13](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oHttpInterfaceCore.ts#L13)*

___

###  firstCall

• **firstCall**: *boolean* = true

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:15](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oHttpInterfaceCore.ts#L15)*

___

###  firstcheckSessionR

• **firstcheckSessionR**: *boolean*

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:18](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oHttpInterfaceCore.ts#L18)*

___

### `Private` from

• **from**: *any*

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:22](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oHttpInterfaceCore.ts#L22)*

___

### `Private` js

• **js**: *boolean* = false

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:19](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oHttpInterfaceCore.ts#L19)*

___

###  p1

• **p1**: *Promise‹Object›*

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:16](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oHttpInterfaceCore.ts#L16)*

___

### `Private` requestLogin

• **requestLogin**: *any*

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:23](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oHttpInterfaceCore.ts#L23)*

___

### `Private` session

• **session**: *string* = ""

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:20](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oHttpInterfaceCore.ts#L20)*

___

###  timeout

• **timeout**: *number*

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:14](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oHttpInterfaceCore.ts#L14)*

## Methods

###  checkFile

▸ **checkFile**(`parameters`: Object): *number*

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:255](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oHttpInterfaceCore.ts#L255)*

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

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:178](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oHttpInterfaceCore.ts#L178)*

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

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:62](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oHttpInterfaceCore.ts#L62)*

**Returns:** *void*

___

### `Abstract` getHeaders

▸ **getHeaders**(`object`: any): *any*

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:596](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oHttpInterfaceCore.ts#L596)*

get headers;

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | any | headers object  |

**Returns:** *any*

___

###  getUserServiceStatus

▸ **getUserServiceStatus**(`observe?`: any): *Promise‹any›*

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:113](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oHttpInterfaceCore.ts#L113)*

Call user service

**Parameters:**

Name | Type |
------ | ------ |
`observe?` | any |

**Returns:** *Promise‹any›*

___

### `Abstract` getuploadRequester

▸ **getuploadRequester**(`url`: string, `form`: FormData, `headersObject`: any): *Observable‹any›*

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:604](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oHttpInterfaceCore.ts#L604)*

Post with progress

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`url` | string | the url to post |
`form` | FormData | the form data to post |
`headersObject` | any | Headers to use  |

**Returns:** *Observable‹any›*

___

### `Private` handleErrorFileUpload

▸ **handleErrorFileUpload**(`error`: any, `resolve`: any): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:566](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oHttpInterfaceCore.ts#L566)*

Handle errors for file upload

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`error` | any | - |
`resolve` | any |   |

**Returns:** *void*

___

### `Private` handleErrorHttpPost

▸ **handleErrorHttpPost**(`error`: any, `reject`: any, `url`: any): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:238](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oHttpInterfaceCore.ts#L238)*

Handle errors of http Posts

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`error` | any | - | - |
`reject` | any | - |   |
`url` | any |  undefined | - |

**Returns:** *void*

___

###  handleProgress

▸ **handleProgress**(`event`: any, `progress`: [C8oProgress](c8oprogress.md), `parameters`: any, `c8oResponseListener`: [C8oResponseListener](../interfaces/c8oresponselistener.md), `varNull`: JSON): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:578](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oHttpInterfaceCore.ts#L578)*

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

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:408](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oHttpInterfaceCore.ts#L408)*

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

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:543](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oHttpInterfaceCore.ts#L543)*

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

### `Private` handleResponseHttpPost

▸ **handleResponseHttpPost**(`response`: any, `headers`: any, `resolve`: any, `urlReq`: string, `parametersReq`: any, `headersReq`: any, `returns_header`: boolean, `reject`: any, `doLogin`: boolean): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:201](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oHttpInterfaceCore.ts#L201)*

Handle response of http Posts

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`response` | any | - | - |
`headers` | any | - | - |
`resolve` | any | - |   |
`urlReq` | string | - | - |
`parametersReq` | any | - | - |
`headersReq` | any | - | - |
`returns_header` | boolean | false | - |
`reject` | any |  null | - |
`doLogin` | boolean | false | - |

**Returns:** *void*

___

###  httpGetObservable

▸ **httpGetObservable**(`uri`: any, `param1`: any, `param2`: any): *any*

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:71](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oHttpInterfaceCore.ts#L71)*

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

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:147](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oHttpInterfaceCore.ts#L147)*

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

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:101](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oHttpInterfaceCore.ts#L101)*

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

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:294](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oHttpInterfaceCore.ts#L294)*

Check if we are in cordova environment

**Returns:** *boolean*

___

### `Abstract` isHttpResponse

▸ **isHttpResponse**(`event`: any): *boolean*

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:610](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oHttpInterfaceCore.ts#L610)*

test type of response

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | any | any  |

**Returns:** *boolean*

___

###  transformRequest

▸ **transformRequest**(`parameters`: Object): *string*

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:311](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oHttpInterfaceCore.ts#L311)*

Url encode parameters

**Parameters:**

Name | Type |
------ | ------ |
`parameters` | Object |

**Returns:** *string*

___

###  transformRequestfileNative

▸ **transformRequestfileNative**(`parameters`: Object): *any*

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:375](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oHttpInterfaceCore.ts#L375)*

Extract file from parameters and return and array containing a file and params

**Parameters:**

Name | Type |
------ | ------ |
`parameters` | Object |

**Returns:** *any*

___

###  transformRequestformdata

▸ **transformRequestformdata**(`parameters`: Object): *FormData*

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:335](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oHttpInterfaceCore.ts#L335)*

Transform FormData parameters

**Parameters:**

Name | Type |
------ | ------ |
`parameters` | Object |

**Returns:** *FormData*

___

###  uploadFileHttp

▸ **uploadFileHttp**(`url`: string, `form`: FormData, `parameters`: Object, `c8oResponseListener`: [C8oResponseListener](../interfaces/c8oresponselistener.md)): *Promise‹any›*

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:487](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oHttpInterfaceCore.ts#L487)*

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

*Defined in [c8osdk-js-core/src/c8o/c8oHttpInterfaceCore.ts:436](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oHttpInterfaceCore.ts#L436)*

Upload file with native plugin

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`parameters` | Object |
`c8oResponseListener` | [C8oResponseListener](../interfaces/c8oresponselistener.md) |

**Returns:** *Promise‹any›*
