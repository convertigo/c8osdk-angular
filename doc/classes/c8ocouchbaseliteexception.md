[c8osdkjscore](../README.md) › [C8oCouchBaseLiteException](c8ocouchbaseliteexception.md)

# Class: C8oCouchBaseLiteException

## Hierarchy

  ↳ [C8oException](c8oexception.md)

  ↳ **C8oCouchBaseLiteException**

## Index

### Constructors

* [constructor](c8ocouchbaseliteexception.md#constructor)

### Properties

* [_cause](c8ocouchbaseliteexception.md#protected-_cause)
* [message](c8ocouchbaseliteexception.md#message)
* [name](c8ocouchbaseliteexception.md#name)
* [stack](c8ocouchbaseliteexception.md#optional-stack)

### Accessors

* [cause](c8ocouchbaseliteexception.md#cause)

### Methods

* [toJSON](c8ocouchbaseliteexception.md#tojson)
* [toString](c8ocouchbaseliteexception.md#tostring)

## Constructors

###  constructor

\+ **new C8oCouchBaseLiteException**(`message`: string): *[C8oCouchBaseLiteException](c8ocouchbaseliteexception.md)*

*Overrides [C8oException](c8oexception.md).[constructor](c8oexception.md#constructor)*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oCouchBaseLiteException.ts:3](https://github.com/convertigo/c8osdk-angular/blob/ffab8e3/src/c8o/Exception/c8oCouchBaseLiteException.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |

**Returns:** *[C8oCouchBaseLiteException](c8ocouchbaseliteexception.md)*

\+ **new C8oCouchBaseLiteException**(`message`: string, `cause`: Error): *[C8oCouchBaseLiteException](c8ocouchbaseliteexception.md)*

*Overrides [C8oException](c8oexception.md).[constructor](c8oexception.md#constructor)*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oCouchBaseLiteException.ts:4](https://github.com/convertigo/c8osdk-angular/blob/ffab8e3/src/c8o/Exception/c8oCouchBaseLiteException.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |
`cause` | Error |

**Returns:** *[C8oCouchBaseLiteException](c8ocouchbaseliteexception.md)*

## Properties

### `Protected` _cause

• **_cause**: *Error*

*Inherited from [C8oException](c8oexception.md).[_cause](c8oexception.md#protected-_cause)*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oException.ts:7](https://github.com/convertigo/c8osdk-angular/blob/ffab8e3/src/c8o/Exception/c8oException.ts#L7)*

___

###  message

• **message**: *string*

*Inherited from [C8oException](c8oexception.md).[message](c8oexception.md#message)*

*Overrides void*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oException.ts:6](https://github.com/convertigo/c8osdk-angular/blob/ffab8e3/src/c8o/Exception/c8oException.ts#L6)*

___

###  name

• **name**: *string*

*Inherited from void*

Defined in C:/Users/Charles Grimont/c8osdk-angular/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:973

___

### `Optional` stack

• **stack**? : *string*

*Inherited from void*

*Overrides void*

Defined in C:/Users/Charles Grimont/c8osdk-angular/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:975

## Accessors

###  cause

• **get cause**(): *Error*

*Inherited from [C8oException](c8oexception.md).[cause](c8oexception.md#cause)*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oException.ts:28](https://github.com/convertigo/c8osdk-angular/blob/ffab8e3/src/c8o/Exception/c8oException.ts#L28)*

**Returns:** *Error*

## Methods

###  toJSON

▸ **toJSON**(): *object*

*Inherited from [C8oException](c8oexception.md).[toJSON](c8oexception.md#tojson)*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oException.ts:32](https://github.com/convertigo/c8osdk-angular/blob/ffab8e3/src/c8o/Exception/c8oException.ts#L32)*

**Returns:** *object*

___

###  toString

▸ **toString**(): *object*

*Inherited from [C8oException](c8oexception.md).[toString](c8oexception.md#tostring)*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oException.ts:40](https://github.com/convertigo/c8osdk-angular/blob/ffab8e3/src/c8o/Exception/c8oException.ts#L40)*

**Returns:** *object*
