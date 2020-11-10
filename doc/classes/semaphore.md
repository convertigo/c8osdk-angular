[c8osdkjscore](../README.md) › [Semaphore](semaphore.md)

# Class: Semaphore

## Hierarchy

* **Semaphore**

## Index

### Constructors

* [constructor](semaphore.md#constructor)

### Properties

* [counter](semaphore.md#private-counter)
* [max](semaphore.md#private-max)
* [waiting](semaphore.md#private-waiting)

### Methods

* [acquire](semaphore.md#acquire)
* [purge](semaphore.md#purge)
* [release](semaphore.md#release)
* [take](semaphore.md#take)

## Constructors

###  constructor

\+ **new Semaphore**(`max`: any): *[Semaphore](semaphore.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oUtilsCore.ts:179](https://github.com/convertigo/c8osdk-angular/blob/cb8b414/src/c8o/c8oUtilsCore.ts#L179)*

**Parameters:**

Name | Type |
------ | ------ |
`max` | any |

**Returns:** *[Semaphore](semaphore.md)*

## Properties

### `Private` counter

• **counter**: *number* = 0

*Defined in [c8osdk-js-core/src/c8o/c8oUtilsCore.ts:178](https://github.com/convertigo/c8osdk-angular/blob/cb8b414/src/c8o/c8oUtilsCore.ts#L178)*

___

### `Private` max

• **max**: *number*

*Defined in [c8osdk-js-core/src/c8o/c8oUtilsCore.ts:177](https://github.com/convertigo/c8osdk-angular/blob/cb8b414/src/c8o/c8oUtilsCore.ts#L177)*

___

### `Private` waiting

• **waiting**: *any[]* =  []

*Defined in [c8osdk-js-core/src/c8o/c8oUtilsCore.ts:179](https://github.com/convertigo/c8osdk-angular/blob/cb8b414/src/c8o/c8oUtilsCore.ts#L179)*

## Methods

###  acquire

▸ **acquire**(): *Promise‹unknown›*

*Defined in [c8osdk-js-core/src/c8o/c8oUtilsCore.ts:194](https://github.com/convertigo/c8osdk-angular/blob/cb8b414/src/c8o/c8oUtilsCore.ts#L194)*

**Returns:** *Promise‹unknown›*

___

###  purge

▸ **purge**(): *number*

*Defined in [c8osdk-js-core/src/c8o/c8oUtilsCore.ts:212](https://github.com/convertigo/c8osdk-angular/blob/cb8b414/src/c8o/c8oUtilsCore.ts#L212)*

**Returns:** *number*

___

###  release

▸ **release**(`arg`: any): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oUtilsCore.ts:207](https://github.com/convertigo/c8osdk-angular/blob/cb8b414/src/c8o/c8oUtilsCore.ts#L207)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`arg` | any |  null |

**Returns:** *void*

___

###  take

▸ **take**(): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oUtilsCore.ts:186](https://github.com/convertigo/c8osdk-angular/blob/cb8b414/src/c8o/c8oUtilsCore.ts#L186)*

**Returns:** *void*
