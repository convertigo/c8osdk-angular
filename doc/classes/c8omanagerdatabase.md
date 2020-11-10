[c8osdkjscore](../README.md) › [C8oManagerDatabase](c8omanagerdatabase.md)

# Class: C8oManagerDatabase

## Hierarchy

* **C8oManagerDatabase**

## Index

### Constructors

* [constructor](c8omanagerdatabase.md#constructor)

### Properties

* [c8o](c8omanagerdatabase.md#c8o)
* [mutexCreateReplication](c8omanagerdatabase.md#private-mutexcreatereplication)
* [replications](c8omanagerdatabase.md#private-replications)

### Accessors

* [registeredReplications](c8omanagerdatabase.md#registeredreplications)

### Methods

* [cancelAndPopRequest](c8omanagerdatabase.md#cancelandpoprequest)
* [localName](c8omanagerdatabase.md#localname)
* [registerRequest](c8omanagerdatabase.md#registerrequest)
* [removeReplications](c8omanagerdatabase.md#removereplications)
* [restartReplications](c8omanagerdatabase.md#restartreplications)
* [stopReplications](c8omanagerdatabase.md#stopreplications)

## Constructors

###  constructor

\+ **new C8oManagerDatabase**(`c8o`: [C8oCore](c8ocore.md)): *[C8oManagerDatabase](c8omanagerdatabase.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerDatabase.ts:13](https://github.com/convertigo/c8osdk-angular/blob/0b97078/src/c8o/c8oManagerDatabase.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`c8o` | [C8oCore](c8ocore.md) |

**Returns:** *[C8oManagerDatabase](c8omanagerdatabase.md)*

## Properties

###  c8o

• **c8o**: *[C8oCore](c8ocore.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerDatabase.ts:11](https://github.com/convertigo/c8osdk-angular/blob/0b97078/src/c8o/c8oManagerDatabase.ts#L11)*

___

### `Private` mutexCreateReplication

• **mutexCreateReplication**: *[Semaphore](semaphore.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerDatabase.ts:13](https://github.com/convertigo/c8osdk-angular/blob/0b97078/src/c8o/c8oManagerDatabase.ts#L13)*

___

### `Private` replications

• **replications**: *Object*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerDatabase.ts:12](https://github.com/convertigo/c8osdk-angular/blob/0b97078/src/c8o/c8oManagerDatabase.ts#L12)*

## Accessors

###  registeredReplications

• **get registeredReplications**(): *Object*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerDatabase.ts:33](https://github.com/convertigo/c8osdk-angular/blob/0b97078/src/c8o/c8oManagerDatabase.ts#L33)*

**Returns:** *Object*

## Methods

###  cancelAndPopRequest

▸ **cancelAndPopRequest**(`id`: any): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerDatabase.ts:60](https://github.com/convertigo/c8osdk-angular/blob/0b97078/src/c8o/c8oManagerDatabase.ts#L60)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | any |

**Returns:** *void*

___

###  localName

▸ **localName**(`baseName`: string, `log`: boolean): *string*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerDatabase.ts:21](https://github.com/convertigo/c8osdk-angular/blob/0b97078/src/c8o/c8oManagerDatabase.ts#L21)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`baseName` | string | - |
`log` | boolean | false |

**Returns:** *string*

___

###  registerRequest

▸ **registerRequest**(`listener`: [C8oResponseListener](../interfaces/c8oresponselistener.md), `parameters`: Object, `type`: string, `fullSyncDatabase`: any, `handler`: any): *any[]*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerDatabase.ts:43](https://github.com/convertigo/c8osdk-angular/blob/0b97078/src/c8o/c8oManagerDatabase.ts#L43)*

Register a request attaching it to the current user

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`listener` | [C8oResponseListener](../interfaces/c8oresponselistener.md) | - | The listener for this request |
`parameters` | Object | - | The parameters of this request |
`type` | string | - | The type of réplication (SYNC, PULL, PUSH)  |
`fullSyncDatabase` | any | - | - |
`handler` | any |  null | - |

**Returns:** *any[]*

___

###  removeReplications

▸ **removeReplications**(`user`: string): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerDatabase.ts:166](https://github.com/convertigo/c8osdk-angular/blob/0b97078/src/c8o/c8oManagerDatabase.ts#L166)*

Remove state an delte top all replications for a given user

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`user` | string | The name of the user  |

**Returns:** *void*

___

###  restartReplications

▸ **restartReplications**(`user`: string): *Promise‹void›*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerDatabase.ts:78](https://github.com/convertigo/c8osdk-angular/blob/0b97078/src/c8o/c8oManagerDatabase.ts#L78)*

Restart all replications for a given user

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`user` | string | The name of the user  |

**Returns:** *Promise‹void›*

___

###  stopReplications

▸ **stopReplications**(`user`: string): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerDatabase.ts:134](https://github.com/convertigo/c8osdk-angular/blob/0b97078/src/c8o/c8oManagerDatabase.ts#L134)*

Stop all replications for a given user

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`user` | string | The name of the user  |

**Returns:** *void*
