[c8osdkjscore](../README.md) › [C8oCallTask](c8ocalltask.md)

# Class: C8oCallTask

## Hierarchy

* **C8oCallTask**

## Index

### Constructors

* [constructor](c8ocalltask.md#constructor)

### Properties

* [_parameters](c8ocalltask.md#private-_parameters)
* [c8o](c8ocalltask.md#private-c8o)
* [c8oCallUrl](c8ocalltask.md#private-c8ocallurl)
* [c8oExceptionListener](c8ocalltask.md#private-c8oexceptionlistener)
* [c8oResponseListener](c8ocalltask.md#private-c8oresponselistener)

### Accessors

* [parameters](c8ocalltask.md#parameters)

### Methods

* [executeFromLive](c8ocalltask.md#executefromlive)
* [handleRequest](c8ocalltask.md#handlerequest)
* [handleResponse](c8ocalltask.md#private-handleresponse)
* [run](c8ocalltask.md#run)

## Constructors

###  constructor

\+ **new C8oCallTask**(`c8o`: [C8oCore](c8ocore.md), `parameters`: Object, `c8oResponseListener`: [C8oResponseListener](../interfaces/c8oresponselistener.md), `c8oExceptionListener`: [C8oExceptionListener](c8oexceptionlistener.md)): *[C8oCallTask](c8ocalltask.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oCallTask.ts:27](https://github.com/convertigo/c8osdk-angular/blob/70a3f40/src/c8o/c8oCallTask.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`c8o` | [C8oCore](c8ocore.md) |
`parameters` | Object |
`c8oResponseListener` | [C8oResponseListener](../interfaces/c8oresponselistener.md) |
`c8oExceptionListener` | [C8oExceptionListener](c8oexceptionlistener.md) |

**Returns:** *[C8oCallTask](c8ocalltask.md)*

## Properties

### `Private` _parameters

• **_parameters**: *Object*

*Defined in [c8osdk-js-core/src/c8o/c8oCallTask.ts:16](https://github.com/convertigo/c8osdk-angular/blob/70a3f40/src/c8o/c8oCallTask.ts#L16)*

___

### `Private` c8o

• **c8o**: *[C8oCore](c8ocore.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oCallTask.ts:15](https://github.com/convertigo/c8osdk-angular/blob/70a3f40/src/c8o/c8oCallTask.ts#L15)*

___

### `Private` c8oCallUrl

• **c8oCallUrl**: *string*

*Defined in [c8osdk-js-core/src/c8o/c8oCallTask.ts:19](https://github.com/convertigo/c8osdk-angular/blob/70a3f40/src/c8o/c8oCallTask.ts#L19)*

___

### `Private` c8oExceptionListener

• **c8oExceptionListener**: *[C8oExceptionListener](c8oexceptionlistener.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oCallTask.ts:18](https://github.com/convertigo/c8osdk-angular/blob/70a3f40/src/c8o/c8oCallTask.ts#L18)*

___

### `Private` c8oResponseListener

• **c8oResponseListener**: *[C8oResponseListener](../interfaces/c8oresponselistener.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oCallTask.ts:17](https://github.com/convertigo/c8osdk-angular/blob/70a3f40/src/c8o/c8oCallTask.ts#L17)*

## Accessors

###  parameters

• **get parameters**(): *any*

*Defined in [c8osdk-js-core/src/c8o/c8oCallTask.ts:21](https://github.com/convertigo/c8osdk-angular/blob/70a3f40/src/c8o/c8oCallTask.ts#L21)*

**Returns:** *any*

• **set parameters**(`value`: any): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oCallTask.ts:25](https://github.com/convertigo/c8osdk-angular/blob/70a3f40/src/c8o/c8oCallTask.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *void*

## Methods

###  executeFromLive

▸ **executeFromLive**(): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oCallTask.ts:51](https://github.com/convertigo/c8osdk-angular/blob/70a3f40/src/c8o/c8oCallTask.ts#L51)*

**Returns:** *void*

___

###  handleRequest

▸ **handleRequest**(): *Promise‹any›*

*Defined in [c8osdk-js-core/src/c8o/c8oCallTask.ts:57](https://github.com/convertigo/c8osdk-angular/blob/70a3f40/src/c8o/c8oCallTask.ts#L57)*

**Returns:** *Promise‹any›*

___

### `Private` handleResponse

▸ **handleResponse**(`result`: any): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oCallTask.ts:242](https://github.com/convertigo/c8osdk-angular/blob/70a3f40/src/c8o/c8oCallTask.ts#L242)*

**Parameters:**

Name | Type |
------ | ------ |
`result` | any |

**Returns:** *void*

___

###  run

▸ **run**(): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oCallTask.ts:39](https://github.com/convertigo/c8osdk-angular/blob/70a3f40/src/c8o/c8oCallTask.ts#L39)*

**Returns:** *void*
