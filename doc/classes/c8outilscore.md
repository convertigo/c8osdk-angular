[c8osdkjscore](../README.md) › [C8oUtilsCore](c8outilscore.md)

# Class: C8oUtilsCore

## Hierarchy

* **C8oUtilsCore**

  ↳ [C8oUtils](c8outils.md)

## Index

### Constructors

* [constructor](c8outilscore.md#constructor)

### Properties

* [data](c8outilscore.md#data)
* [USE_PARAMETER_IDENTIFIER](c8outilscore.md#static-private-use_parameter_identifier)

### Methods

* [MD5](c8outilscore.md#static-md5)
* [MD5ArrayBuffer](c8outilscore.md#static-md5arraybuffer)
* [checkHeaderArgument](c8outilscore.md#static-checkheaderargument)
* [getNewGUIDString](c8outilscore.md#static-getnewguidstring)
* [getObjectClassName](c8outilscore.md#static-getobjectclassname)
* [getParameter](c8outilscore.md#static-getparameter)
* [getParameterObjectValue](c8outilscore.md#static-getparameterobjectvalue)
* [getParameterStringValue](c8outilscore.md#static-getparameterstringvalue)
* [identifyC8oCallRequest](c8outilscore.md#static-identifyc8ocallrequest)
* [isValidUrl](c8outilscore.md#static-isvalidurl)
* [peekParameterObjectValue](c8outilscore.md#static-peekparameterobjectvalue)
* [peekParameterStringValue](c8outilscore.md#static-peekparameterstringvalue)

## Constructors

###  constructor

\+ **new C8oUtilsCore**(): *[C8oUtilsCore](c8outilscore.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oUtilsCore.ts:6](https://github.com/convertigo/c8osdk-angular/blob/9ef7bf8/src/c8o/c8oUtilsCore.ts#L6)*

**Returns:** *[C8oUtilsCore](c8outilscore.md)*

## Properties

###  data

• **data**: *JSON*

*Defined in [c8osdk-js-core/src/c8o/c8oUtilsCore.ts:6](https://github.com/convertigo/c8osdk-angular/blob/9ef7bf8/src/c8o/c8oUtilsCore.ts#L6)*

___

### `Static` `Private` USE_PARAMETER_IDENTIFIER

▪ **USE_PARAMETER_IDENTIFIER**: *string* = "_use_"

*Defined in [c8osdk-js-core/src/c8o/c8oUtilsCore.ts:5](https://github.com/convertigo/c8osdk-angular/blob/9ef7bf8/src/c8o/c8oUtilsCore.ts#L5)*

FullSync parameters prefix.

## Methods

### `Static` MD5

▸ **MD5**(`str`: string): *string*

*Defined in [c8osdk-js-core/src/c8o/c8oUtilsCore.ts:29](https://github.com/convertigo/c8osdk-angular/blob/9ef7bf8/src/c8o/c8oUtilsCore.ts#L29)*

returns 128 bits hash using MD5 algo

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`str` | string | any string  |

**Returns:** *string*

___

### `Static` MD5ArrayBuffer

▸ **MD5ArrayBuffer**(`str`: any): *Buffer*

*Defined in [c8osdk-js-core/src/c8o/c8oUtilsCore.ts:38](https://github.com/convertigo/c8osdk-angular/blob/9ef7bf8/src/c8o/c8oUtilsCore.ts#L38)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`str` | any | any string  |

**Returns:** *Buffer*

___

### `Static` checkHeaderArgument

▸ **checkHeaderArgument**(`response`: any, `argument`: any): *any*

*Defined in [c8osdk-js-core/src/c8o/c8oUtilsCore.ts:154](https://github.com/convertigo/c8osdk-angular/blob/9ef7bf8/src/c8o/c8oUtilsCore.ts#L154)*

**Parameters:**

Name | Type |
------ | ------ |
`response` | any |
`argument` | any |

**Returns:** *any*

___

### `Static` getNewGUIDString

▸ **getNewGUIDString**(): *string*

*Defined in [c8osdk-js-core/src/c8o/c8oUtilsCore.ts:43](https://github.com/convertigo/c8osdk-angular/blob/9ef7bf8/src/c8o/c8oUtilsCore.ts#L43)*

**Returns:** *string*

___

### `Static` getObjectClassName

▸ **getObjectClassName**(`object`: any): *"string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function"*

*Defined in [c8osdk-js-core/src/c8o/c8oUtilsCore.ts:17](https://github.com/convertigo/c8osdk-angular/blob/9ef7bf8/src/c8o/c8oUtilsCore.ts#L17)*

Returns the class name of the object as a String, if the object is null then returns the String "null".

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

**Returns:** *"string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function"*

string

___

### `Static` getParameter

▸ **getParameter**(`parameters`: Object, `name`: string, `useName`: boolean): *any*

*Defined in [c8osdk-js-core/src/c8o/c8oUtilsCore.ts:74](https://github.com/convertigo/c8osdk-angular/blob/9ef7bf8/src/c8o/c8oUtilsCore.ts#L74)*

TAG Parameter

**Parameters:**

Name | Type |
------ | ------ |
`parameters` | Object |
`name` | string |
`useName` | boolean |

**Returns:** *any*

___

### `Static` getParameterObjectValue

▸ **getParameterObjectValue**(`parameters`: Object, `name`: string, `useName`: boolean): *any*

*Defined in [c8osdk-js-core/src/c8o/c8oUtilsCore.ts:103](https://github.com/convertigo/c8osdk-angular/blob/9ef7bf8/src/c8o/c8oUtilsCore.ts#L103)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`parameters` | Object | - |
`name` | string | - |
`useName` | boolean | false |

**Returns:** *any*

___

### `Static` getParameterStringValue

▸ **getParameterStringValue**(`parameters`: Object, `name`: string, `useName`: boolean): *string*

*Defined in [c8osdk-js-core/src/c8o/c8oUtilsCore.ts:95](https://github.com/convertigo/c8osdk-angular/blob/9ef7bf8/src/c8o/c8oUtilsCore.ts#L95)*

Searches in the list the parameter with this specific name (or the same name with the prefix '_use_') and returns it.<br/>
Returns null if the parameter is not found.

**Parameters:**

Name | Type |
------ | ------ |
`parameters` | Object |
`name` | string |
`useName` | boolean |

**Returns:** *string*

string

___

### `Static` identifyC8oCallRequest

▸ **identifyC8oCallRequest**(`parameters`: Object, `responseType`: string): *string*

*Defined in [c8osdk-js-core/src/c8o/c8oUtilsCore.ts:150](https://github.com/convertigo/c8osdk-angular/blob/9ef7bf8/src/c8o/c8oUtilsCore.ts#L150)*

Serializes a c8o call request thanks to its parameters and response type.

**`throws`** C8oException

**Parameters:**

Name | Type |
------ | ------ |
`parameters` | Object |
`responseType` | string |

**Returns:** *string*

string

___

### `Static` isValidUrl

▸ **isValidUrl**(`url`: string): *boolean*

*Defined in [c8osdk-js-core/src/c8o/c8oUtilsCore.ts:21](https://github.com/convertigo/c8osdk-angular/blob/9ef7bf8/src/c8o/c8oUtilsCore.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *boolean*

___

### `Static` peekParameterObjectValue

▸ **peekParameterObjectValue**(`parameters`: Object, `name`: string, `exceptionIfMissing`: boolean): *string*

*Defined in [c8osdk-js-core/src/c8o/c8oUtilsCore.ts:129](https://github.com/convertigo/c8osdk-angular/blob/9ef7bf8/src/c8o/c8oUtilsCore.ts#L129)*

**Parameters:**

Name | Type |
------ | ------ |
`parameters` | Object |
`name` | string |
`exceptionIfMissing` | boolean |

**Returns:** *string*

___

### `Static` peekParameterStringValue

▸ **peekParameterStringValue**(`parameters`: Object, `name`: string, `exceptionIfMissing`: boolean): *string*

*Defined in [c8osdk-js-core/src/c8o/c8oUtilsCore.ts:115](https://github.com/convertigo/c8osdk-angular/blob/9ef7bf8/src/c8o/c8oUtilsCore.ts#L115)*

**Parameters:**

Name | Type |
------ | ------ |
`parameters` | Object |
`name` | string |
`exceptionIfMissing` | boolean |

**Returns:** *string*
