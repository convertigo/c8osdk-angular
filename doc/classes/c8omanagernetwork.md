[c8osdkjscore](../README.md) › [C8oManagerNetwork](c8omanagernetwork.md)

# Class: C8oManagerNetwork

## Hierarchy

* **C8oManagerNetwork**

## Index

### Constructors

* [constructor](c8omanagernetwork.md#constructor)

### Properties

* [_listen](c8omanagernetwork.md#private-_listen)
* [_status](c8omanagernetwork.md#private-_status)
* [c8o](c8omanagernetwork.md#private-c8o)

### Accessors

* [status](c8omanagernetwork.md#status)

### Methods

* [checkReachable](c8omanagernetwork.md#checkreachable)
* [init](c8omanagernetwork.md#init)
* [listen](c8omanagernetwork.md#private-listen)
* [processOffline](c8omanagernetwork.md#private-processoffline)
* [processOnline](c8omanagernetwork.md#private-processonline)

## Constructors

###  constructor

\+ **new C8oManagerNetwork**(`c8o`: [C8oCore](c8ocore.md)): *[C8oManagerNetwork](c8omanagernetwork.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerNetwork.ts:7](https://github.com/convertigo/c8osdk-angular/blob/a9907e2/src/c8o/c8oManagerNetwork.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`c8o` | [C8oCore](c8ocore.md) |

**Returns:** *[C8oManagerNetwork](c8omanagernetwork.md)*

## Properties

### `Private` _listen

• **_listen**: *boolean* = false

*Defined in [c8osdk-js-core/src/c8o/c8oManagerNetwork.ts:7](https://github.com/convertigo/c8osdk-angular/blob/a9907e2/src/c8o/c8oManagerNetwork.ts#L7)*

___

### `Private` _status

• **_status**: *[C8oNetworkStatus](c8onetworkstatus.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerNetwork.ts:6](https://github.com/convertigo/c8osdk-angular/blob/a9907e2/src/c8o/c8oManagerNetwork.ts#L6)*

___

### `Private` c8o

• **c8o**: *[C8oCore](c8ocore.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerNetwork.ts:5](https://github.com/convertigo/c8osdk-angular/blob/a9907e2/src/c8o/c8oManagerNetwork.ts#L5)*

## Accessors

###  status

• **get status**(): *[C8oNetworkStatus](c8onetworkstatus.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerNetwork.ts:43](https://github.com/convertigo/c8osdk-angular/blob/a9907e2/src/c8o/c8oManagerNetwork.ts#L43)*

get network status

**Returns:** *[C8oNetworkStatus](c8onetworkstatus.md)*

C8oNetworkStatus

• **set status**(`c8oNetworkStatus`: [C8oNetworkStatus](c8onetworkstatus.md)): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerNetwork.ts:27](https://github.com/convertigo/c8osdk-angular/blob/a9907e2/src/c8o/c8oManagerNetwork.ts#L27)*

Set network status, and notify if its had change

**`params`** c8oNetworkStatus : C8oNetworkStatus

**Parameters:**

Name | Type |
------ | ------ |
`c8oNetworkStatus` | [C8oNetworkStatus](c8onetworkstatus.md) |

**Returns:** *void*

C8oNetworkStatus

## Methods

###  checkReachable

▸ **checkReachable**(): *Promise‹boolean›*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerNetwork.ts:95](https://github.com/convertigo/c8osdk-angular/blob/a9907e2/src/c8o/c8oManagerNetwork.ts#L95)*

**Returns:** *Promise‹boolean›*

___

###  init

▸ **init**(): *Promise‹void›*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerNetwork.ts:16](https://github.com/convertigo/c8osdk-angular/blob/a9907e2/src/c8o/c8oManagerNetwork.ts#L16)*

init NetworkManager

**Returns:** *Promise‹void›*

___

### `Private` listen

▸ **listen**(): *Promise‹void›*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerNetwork.ts:48](https://github.com/convertigo/c8osdk-angular/blob/a9907e2/src/c8o/c8oManagerNetwork.ts#L48)*

**Returns:** *Promise‹void›*

___

### `Private` processOffline

▸ **processOffline**(): *Promise‹void›*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerNetwork.ts:91](https://github.com/convertigo/c8osdk-angular/blob/a9907e2/src/c8o/c8oManagerNetwork.ts#L91)*

**Returns:** *Promise‹void›*

___

### `Private` processOnline

▸ **processOnline**(): *Promise‹void›*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerNetwork.ts:81](https://github.com/convertigo/c8osdk-angular/blob/a9907e2/src/c8o/c8oManagerNetwork.ts#L81)*

**Returns:** *Promise‹void›*
