[c8osdkjscore](../README.md) › [C8oException](c8oexception.md)

# Class: C8oException

Thrown specific exceptions to Convertigo.

## Hierarchy

* Error

  ↳ **C8oException**

  ↳ [C8oCouchBaseLiteException](c8ocouchbaseliteexception.md)

  ↳ [C8oRessourceNotFoundException](c8oressourcenotfoundexception.md)

  ↳ [C8oUnavailableLocalCacheException](c8ounavailablelocalcacheexception.md)

  ↳ [C8oHttpRequestException](c8ohttprequestexception.md)

## Index

### Constructors

* [constructor](c8oexception.md#constructor)

### Properties

* [_cause](c8oexception.md#protected-_cause)
* [message](c8oexception.md#message)
* [name](c8oexception.md#name)
* [stack](c8oexception.md#optional-stack)
* [Error](c8oexception.md#static-error)

### Accessors

* [cause](c8oexception.md#cause)

### Methods

* [toJSON](c8oexception.md#tojson)
* [toString](c8oexception.md#tostring)

## Constructors

###  constructor

\+ **new C8oException**(`message`: string): *[C8oException](c8oexception.md)*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oException.ts:7](https://github.com/convertigo/c8osdk-angular/blob/a9907e2/src/c8o/Exception/c8oException.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |

**Returns:** *[C8oException](c8oexception.md)*

\+ **new C8oException**(`message`: string, `cause`: Error): *[C8oException](c8oexception.md)*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oException.ts:9](https://github.com/convertigo/c8osdk-angular/blob/a9907e2/src/c8o/Exception/c8oException.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |
`cause` | Error |

**Returns:** *[C8oException](c8oexception.md)*

\+ **new C8oException**(`message`: string, `cause`: Error, `all`: boolean): *[C8oException](c8oexception.md)*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oException.ts:10](https://github.com/convertigo/c8osdk-angular/blob/a9907e2/src/c8o/Exception/c8oException.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |
`cause` | Error |
`all` | boolean |

**Returns:** *[C8oException](c8oexception.md)*

## Properties

### `Protected` _cause

• **_cause**: *Error*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oException.ts:7](https://github.com/convertigo/c8osdk-angular/blob/a9907e2/src/c8o/Exception/c8oException.ts#L7)*

___

###  message

• **message**: *string*

*Overrides void*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oException.ts:6](https://github.com/convertigo/c8osdk-angular/blob/a9907e2/src/c8o/Exception/c8oException.ts#L6)*

___

###  name

• **name**: *string*

*Inherited from void*

Defined in C:/dev/sdks/c8osdk-angular/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:973

___

### `Optional` stack

• **stack**? : *string*

*Inherited from void*

*Overrides void*

Defined in C:/dev/sdks/c8osdk-angular/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:975

___

### `Static` Error

▪ **Error**: *ErrorConstructor*

Defined in C:/dev/sdks/c8osdk-angular/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:984

## Accessors

###  cause

• **get cause**(): *Error*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oException.ts:28](https://github.com/convertigo/c8osdk-angular/blob/a9907e2/src/c8o/Exception/c8oException.ts#L28)*

**Returns:** *Error*

## Methods

###  toJSON

▸ **toJSON**(): *object*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oException.ts:32](https://github.com/convertigo/c8osdk-angular/blob/a9907e2/src/c8o/Exception/c8oException.ts#L32)*

**Returns:** *object*

___

###  toString

▸ **toString**(): *object*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oException.ts:40](https://github.com/convertigo/c8osdk-angular/blob/a9907e2/src/c8o/Exception/c8oException.ts#L40)*

**Returns:** *object*
