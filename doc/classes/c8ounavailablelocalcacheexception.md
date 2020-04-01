[c8osdkjscore](../README.md) › [C8oUnavailableLocalCacheException](c8ounavailablelocalcacheexception.md)

# Class: C8oUnavailableLocalCacheException

This Exception is not thrown to the user, it is used to know if the requested response from the local cache is available or no.

## Hierarchy

  ↳ [C8oException](c8oexception.md)

  ↳ **C8oUnavailableLocalCacheException**

## Index

### Constructors

* [constructor](c8ounavailablelocalcacheexception.md#constructor)

### Properties

* [_cause](c8ounavailablelocalcacheexception.md#protected-_cause)
* [message](c8ounavailablelocalcacheexception.md#message)
* [name](c8ounavailablelocalcacheexception.md#name)
* [stack](c8ounavailablelocalcacheexception.md#optional-stack)

### Accessors

* [cause](c8ounavailablelocalcacheexception.md#cause)

### Methods

* [toJSON](c8ounavailablelocalcacheexception.md#tojson)
* [toString](c8ounavailablelocalcacheexception.md#tostring)

## Constructors

###  constructor

\+ **new C8oUnavailableLocalCacheException**(`detailMessage`: string): *[C8oUnavailableLocalCacheException](c8ounavailablelocalcacheexception.md)*

*Overrides [C8oException](c8oexception.md).[constructor](c8oexception.md#constructor)*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oUnavailableLocalCacheException.ts:6](https://github.com/convertigo/c8osdk-angular/blob/80fcaa8/src/c8o/Exception/c8oUnavailableLocalCacheException.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`detailMessage` | string |

**Returns:** *[C8oUnavailableLocalCacheException](c8ounavailablelocalcacheexception.md)*

\+ **new C8oUnavailableLocalCacheException**(`detailMessage`: string, `cause`: Error): *[C8oUnavailableLocalCacheException](c8ounavailablelocalcacheexception.md)*

*Overrides [C8oException](c8oexception.md).[constructor](c8oexception.md#constructor)*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oUnavailableLocalCacheException.ts:7](https://github.com/convertigo/c8osdk-angular/blob/80fcaa8/src/c8o/Exception/c8oUnavailableLocalCacheException.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`detailMessage` | string |
`cause` | Error |

**Returns:** *[C8oUnavailableLocalCacheException](c8ounavailablelocalcacheexception.md)*

## Properties

### `Protected` _cause

• **_cause**: *Error*

*Inherited from [C8oException](c8oexception.md).[_cause](c8oexception.md#protected-_cause)*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oException.ts:7](https://github.com/convertigo/c8osdk-angular/blob/80fcaa8/src/c8o/Exception/c8oException.ts#L7)*

___

###  message

• **message**: *string*

*Inherited from [C8oException](c8oexception.md).[message](c8oexception.md#message)*

*Overrides void*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oException.ts:6](https://github.com/convertigo/c8osdk-angular/blob/80fcaa8/src/c8o/Exception/c8oException.ts#L6)*

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

## Accessors

###  cause

• **get cause**(): *Error*

*Inherited from [C8oException](c8oexception.md).[cause](c8oexception.md#cause)*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oException.ts:28](https://github.com/convertigo/c8osdk-angular/blob/80fcaa8/src/c8o/Exception/c8oException.ts#L28)*

**Returns:** *Error*

## Methods

###  toJSON

▸ **toJSON**(): *object*

*Inherited from [C8oException](c8oexception.md).[toJSON](c8oexception.md#tojson)*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oException.ts:32](https://github.com/convertigo/c8osdk-angular/blob/80fcaa8/src/c8o/Exception/c8oException.ts#L32)*

**Returns:** *object*

___

###  toString

▸ **toString**(): *object*

*Inherited from [C8oException](c8oexception.md).[toString](c8oexception.md#tostring)*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oException.ts:40](https://github.com/convertigo/c8osdk-angular/blob/80fcaa8/src/c8o/Exception/c8oException.ts#L40)*

**Returns:** *object*
