[c8osdkjscore](../README.md) › [C8oHttpRequestException](c8ohttprequestexception.md)

# Class: C8oHttpRequestException

Thrown during an HTTP request.

## Hierarchy

  ↳ [C8oException](c8oexception.md)

  ↳ **C8oHttpRequestException**

## Index

### Constructors

* [constructor](c8ohttprequestexception.md#constructor)

### Properties

* [_cause](c8ohttprequestexception.md#protected-_cause)
* [message](c8ohttprequestexception.md#message)
* [name](c8ohttprequestexception.md#name)
* [originalException](c8ohttprequestexception.md#originalexception)
* [stack](c8ohttprequestexception.md#optional-stack)

### Accessors

* [cause](c8ohttprequestexception.md#cause)

### Methods

* [toJSON](c8ohttprequestexception.md#tojson)
* [toString](c8ohttprequestexception.md#tostring)

## Constructors

###  constructor

\+ **new C8oHttpRequestException**(`message`: string): *[C8oHttpRequestException](c8ohttprequestexception.md)*

*Overrides [C8oException](c8oexception.md).[constructor](c8oexception.md#constructor)*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oHttpRequestException.ts:7](https://github.com/convertigo/c8osdk-angular/blob/d482dbd/src/c8o/Exception/c8oHttpRequestException.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |

**Returns:** *[C8oHttpRequestException](c8ohttprequestexception.md)*

\+ **new C8oHttpRequestException**(`message`: string, `cause`: Error): *[C8oHttpRequestException](c8ohttprequestexception.md)*

*Overrides [C8oException](c8oexception.md).[constructor](c8oexception.md#constructor)*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oHttpRequestException.ts:9](https://github.com/convertigo/c8osdk-angular/blob/d482dbd/src/c8o/Exception/c8oHttpRequestException.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |
`cause` | Error |

**Returns:** *[C8oHttpRequestException](c8ohttprequestexception.md)*

## Properties

### `Protected` _cause

• **_cause**: *Error*

*Inherited from [C8oException](c8oexception.md).[_cause](c8oexception.md#protected-_cause)*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oException.ts:7](https://github.com/convertigo/c8osdk-angular/blob/d482dbd/src/c8o/Exception/c8oException.ts#L7)*

___

###  message

• **message**: *string*

*Inherited from [C8oException](c8oexception.md).[message](c8oexception.md#message)*

*Overrides void*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oException.ts:6](https://github.com/convertigo/c8osdk-angular/blob/d482dbd/src/c8o/Exception/c8oException.ts#L6)*

___

###  name

• **name**: *string*

*Inherited from void*

Defined in C:/Users/Charles Grimont/c8osdk-angular/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:973

___

###  originalException

• **originalException**: *any*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oHttpRequestException.ts:7](https://github.com/convertigo/c8osdk-angular/blob/d482dbd/src/c8o/Exception/c8oHttpRequestException.ts#L7)*

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

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oException.ts:28](https://github.com/convertigo/c8osdk-angular/blob/d482dbd/src/c8o/Exception/c8oException.ts#L28)*

**Returns:** *Error*

## Methods

###  toJSON

▸ **toJSON**(): *object*

*Inherited from [C8oException](c8oexception.md).[toJSON](c8oexception.md#tojson)*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oException.ts:32](https://github.com/convertigo/c8osdk-angular/blob/d482dbd/src/c8o/Exception/c8oException.ts#L32)*

**Returns:** *object*

___

###  toString

▸ **toString**(): *object*

*Inherited from [C8oException](c8oexception.md).[toString](c8oexception.md#tostring)*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oException.ts:40](https://github.com/convertigo/c8osdk-angular/blob/d482dbd/src/c8o/Exception/c8oException.ts#L40)*

**Returns:** *object*
