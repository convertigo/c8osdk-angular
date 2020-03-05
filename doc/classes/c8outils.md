[c8osdkjscore](../README.md) › [C8oUtils](c8outils.md)

# Class: C8oUtils

## Hierarchy

* [C8oUtilsCore](c8outilscore.md)

  ↳ **C8oUtils**

## Index

### Constructors

* [constructor](c8outils.md#constructor)

### Properties

* [data](c8outils.md#data)
* [http](c8outils.md#private-http)

### Methods

* [checkHeaderArgument](c8outils.md#static-checkheaderargument)
* [getNewGUIDString](c8outils.md#static-getnewguidstring)
* [getObjectClassName](c8outils.md#static-getobjectclassname)
* [getParameter](c8outils.md#static-getparameter)
* [getParameterObjectValue](c8outils.md#static-getparameterobjectvalue)
* [getParameterStringValue](c8outils.md#static-getparameterstringvalue)
* [identifyC8oCallRequest](c8outils.md#static-identifyc8ocallrequest)
* [isValidUrl](c8outils.md#static-isvalidurl)
* [peekParameterObjectValue](c8outils.md#static-peekparameterobjectvalue)
* [peekParameterStringValue](c8outils.md#static-peekparameterstringvalue)

## Constructors

###  constructor

\+ **new C8oUtils**(`http`: HttpClient): *[C8oUtils](c8outils.md)*

*Overrides [C8oUtilsCore](c8outilscore.md).[constructor](c8outilscore.md#constructor)*

*Defined in [lib/c8oUtils.service.ts:8](https://github.com/convertigo/c8osdk-angular/blob/090c358/projects/c8osdkangular/src/lib/c8oUtils.service.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`http` | HttpClient |

**Returns:** *[C8oUtils](c8outils.md)*

## Properties

###  data

• **data**: *JSON*

*Inherited from [C8oUtilsCore](c8outilscore.md).[data](c8outilscore.md#data)*

*Defined in [c8osdk-js-core/src/c8o/c8oUtilsCore.ts:6](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oUtilsCore.ts#L6)*

___

### `Private` http

• **http**: *HttpClient*

*Defined in [lib/c8oUtils.service.ts:10](https://github.com/convertigo/c8osdk-angular/blob/090c358/projects/c8osdkangular/src/lib/c8oUtils.service.ts#L10)*

## Methods

### `Static` checkHeaderArgument

▸ **checkHeaderArgument**(`response`: any, `argument`: any): *any*

*Inherited from [C8oUtilsCore](c8outilscore.md).[checkHeaderArgument](c8outilscore.md#static-checkheaderargument)*

*Defined in [c8osdk-js-core/src/c8o/c8oUtilsCore.ts:136](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oUtilsCore.ts#L136)*

**Parameters:**

Name | Type |
------ | ------ |
`response` | any |
`argument` | any |

**Returns:** *any*

___

### `Static` getNewGUIDString

▸ **getNewGUIDString**(): *string*

*Inherited from [C8oUtilsCore](c8outilscore.md).[getNewGUIDString](c8outilscore.md#static-getnewguidstring)*

*Defined in [c8osdk-js-core/src/c8o/c8oUtilsCore.ts:25](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oUtilsCore.ts#L25)*

**Returns:** *string*

___

### `Static` getObjectClassName

▸ **getObjectClassName**(`object`: any): *"string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function"*

*Inherited from [C8oUtilsCore](c8outilscore.md).[getObjectClassName](c8outilscore.md#static-getobjectclassname)*

*Defined in [c8osdk-js-core/src/c8o/c8oUtilsCore.ts:17](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oUtilsCore.ts#L17)*

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

*Inherited from [C8oUtilsCore](c8outilscore.md).[getParameter](c8outilscore.md#static-getparameter)*

*Defined in [c8osdk-js-core/src/c8o/c8oUtilsCore.ts:56](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oUtilsCore.ts#L56)*

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

*Inherited from [C8oUtilsCore](c8outilscore.md).[getParameterObjectValue](c8outilscore.md#static-getparameterobjectvalue)*

*Defined in [c8osdk-js-core/src/c8o/c8oUtilsCore.ts:85](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oUtilsCore.ts#L85)*

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

*Inherited from [C8oUtilsCore](c8outilscore.md).[getParameterStringValue](c8outilscore.md#static-getparameterstringvalue)*

*Defined in [c8osdk-js-core/src/c8o/c8oUtilsCore.ts:77](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oUtilsCore.ts#L77)*

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

*Inherited from [C8oUtilsCore](c8outilscore.md).[identifyC8oCallRequest](c8outilscore.md#static-identifyc8ocallrequest)*

*Defined in [c8osdk-js-core/src/c8o/c8oUtilsCore.ts:132](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oUtilsCore.ts#L132)*

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

*Inherited from [C8oUtilsCore](c8outilscore.md).[isValidUrl](c8outilscore.md#static-isvalidurl)*

*Defined in [c8osdk-js-core/src/c8o/c8oUtilsCore.ts:21](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oUtilsCore.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *boolean*

___

### `Static` peekParameterObjectValue

▸ **peekParameterObjectValue**(`parameters`: Object, `name`: string, `exceptionIfMissing`: boolean): *string*

*Inherited from [C8oUtilsCore](c8outilscore.md).[peekParameterObjectValue](c8outilscore.md#static-peekparameterobjectvalue)*

*Defined in [c8osdk-js-core/src/c8o/c8oUtilsCore.ts:111](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oUtilsCore.ts#L111)*

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

*Inherited from [C8oUtilsCore](c8outilscore.md).[peekParameterStringValue](c8outilscore.md#static-peekparameterstringvalue)*

*Defined in [c8osdk-js-core/src/c8o/c8oUtilsCore.ts:97](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oUtilsCore.ts#L97)*

**Parameters:**

Name | Type |
------ | ------ |
`parameters` | Object |
`name` | string |
`exceptionIfMissing` | boolean |

**Returns:** *string*
