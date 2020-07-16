[c8osdkjscore](../README.md) › [C8oRessourceNotFoundException](c8oressourcenotfoundexception.md)

# Class: C8oRessourceNotFoundException

## Hierarchy

  ↳ [C8oException](c8oexception.md)

  ↳ **C8oRessourceNotFoundException**

## Index

### Constructors

* [constructor](c8oressourcenotfoundexception.md#constructor)

### Properties

* [_cause](c8oressourcenotfoundexception.md#protected-_cause)
* [message](c8oressourcenotfoundexception.md#message)
* [name](c8oressourcenotfoundexception.md#name)
* [stack](c8oressourcenotfoundexception.md#optional-stack)

### Accessors

* [cause](c8oressourcenotfoundexception.md#cause)

### Methods

* [toJSON](c8oressourcenotfoundexception.md#tojson)
* [toString](c8oressourcenotfoundexception.md#tostring)

## Constructors

###  constructor

\+ **new C8oRessourceNotFoundException**(`message`: string): *[C8oRessourceNotFoundException](c8oressourcenotfoundexception.md)*

*Overrides [C8oException](c8oexception.md).[constructor](c8oexception.md#constructor)*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oRessourceNotFoundException.ts:3](https://github.com/convertigo/c8osdk-angular/blob/653fcef/src/c8o/Exception/c8oRessourceNotFoundException.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |

**Returns:** *[C8oRessourceNotFoundException](c8oressourcenotfoundexception.md)*

\+ **new C8oRessourceNotFoundException**(`message`: string, `cause`: Error): *[C8oRessourceNotFoundException](c8oressourcenotfoundexception.md)*

*Overrides [C8oException](c8oexception.md).[constructor](c8oexception.md#constructor)*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oRessourceNotFoundException.ts:5](https://github.com/convertigo/c8osdk-angular/blob/653fcef/src/c8o/Exception/c8oRessourceNotFoundException.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |
`cause` | Error |

**Returns:** *[C8oRessourceNotFoundException](c8oressourcenotfoundexception.md)*

## Properties

### `Protected` _cause

• **_cause**: *Error*

*Inherited from [C8oException](c8oexception.md).[_cause](c8oexception.md#protected-_cause)*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oException.ts:7](https://github.com/convertigo/c8osdk-angular/blob/653fcef/src/c8o/Exception/c8oException.ts#L7)*

___

###  message

• **message**: *string*

*Inherited from [C8oException](c8oexception.md).[message](c8oexception.md#message)*

*Overrides void*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oException.ts:6](https://github.com/convertigo/c8osdk-angular/blob/653fcef/src/c8o/Exception/c8oException.ts#L6)*

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

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oException.ts:28](https://github.com/convertigo/c8osdk-angular/blob/653fcef/src/c8o/Exception/c8oException.ts#L28)*

**Returns:** *Error*

## Methods

###  toJSON

▸ **toJSON**(): *object*

*Inherited from [C8oException](c8oexception.md).[toJSON](c8oexception.md#tojson)*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oException.ts:32](https://github.com/convertigo/c8osdk-angular/blob/653fcef/src/c8o/Exception/c8oException.ts#L32)*

**Returns:** *object*

___

###  toString

▸ **toString**(): *object*

*Inherited from [C8oException](c8oexception.md).[toString](c8oexception.md#tostring)*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oException.ts:40](https://github.com/convertigo/c8osdk-angular/blob/653fcef/src/c8o/Exception/c8oException.ts#L40)*

**Returns:** *object*
