[c8osdkjscore](../README.md) › [C8oExceptionListener](c8oexceptionlistener.md)

# Class: C8oExceptionListener

## Hierarchy

* **C8oExceptionListener**

## Index

### Constructors

* [constructor](c8oexceptionlistener.md#constructor)

### Properties

* [onException](c8oexceptionlistener.md#onexception)

## Constructors

###  constructor

\+ **new C8oExceptionListener**(`onException`: function): *[C8oExceptionListener](c8oexceptionlistener.md)*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionListener.ts:7](https://github.com/convertigo/c8osdk-angular/blob/3f9e8b7/src/c8o/Exception/c8oExceptionListener.ts#L7)*

**Parameters:**

▪ **onException**: *function*

▸ (`C8oException`: any, `Object`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`C8oException` | any |
`Object` | any |

**Returns:** *[C8oExceptionListener](c8oexceptionlistener.md)*

## Properties

###  onException

• **onException**: *function*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionListener.ts:7](https://github.com/convertigo/c8osdk-angular/blob/3f9e8b7/src/c8o/Exception/c8oExceptionListener.ts#L7)*

Called on thrown exceptions.

**`param`** The thrown exception

#### Type declaration:

▸ (`C8oException`: any, `Object`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`C8oException` | any |
`Object` | any |
