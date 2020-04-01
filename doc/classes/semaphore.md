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

*Defined in [c8osdk-js-core/src/c8o/c8oUtilsCore.ts:161](https://github.com/convertigo/c8osdk-angular/blob/80fcaa8/src/c8o/c8oUtilsCore.ts#L161)*

**Parameters:**

Name | Type |
------ | ------ |
`max` | any |

**Returns:** *[Semaphore](semaphore.md)*

## Properties

### `Private` counter

• **counter**: *number* = 0

*Defined in [c8osdk-js-core/src/c8o/c8oUtilsCore.ts:160](https://github.com/convertigo/c8osdk-angular/blob/80fcaa8/src/c8o/c8oUtilsCore.ts#L160)*

___

### `Private` max

• **max**: *number*

*Defined in [c8osdk-js-core/src/c8o/c8oUtilsCore.ts:159](https://github.com/convertigo/c8osdk-angular/blob/80fcaa8/src/c8o/c8oUtilsCore.ts#L159)*

___

### `Private` waiting

• **waiting**: *any[]* =  []

*Defined in [c8osdk-js-core/src/c8o/c8oUtilsCore.ts:161](https://github.com/convertigo/c8osdk-angular/blob/80fcaa8/src/c8o/c8oUtilsCore.ts#L161)*

## Methods

###  acquire

▸ **acquire**(): *Promise‹unknown›*

*Defined in [c8osdk-js-core/src/c8o/c8oUtilsCore.ts:176](https://github.com/convertigo/c8osdk-angular/blob/80fcaa8/src/c8o/c8oUtilsCore.ts#L176)*

**Returns:** *Promise‹unknown›*

___

###  purge

▸ **purge**(): *number*

*Defined in [c8osdk-js-core/src/c8o/c8oUtilsCore.ts:194](https://github.com/convertigo/c8osdk-angular/blob/80fcaa8/src/c8o/c8oUtilsCore.ts#L194)*

**Returns:** *number*

___

###  release

▸ **release**(`arg`: any): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oUtilsCore.ts:189](https://github.com/convertigo/c8osdk-angular/blob/80fcaa8/src/c8o/c8oUtilsCore.ts#L189)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`arg` | any |  null |

**Returns:** *void*

___

###  take

▸ **take**(): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oUtilsCore.ts:168](https://github.com/convertigo/c8osdk-angular/blob/80fcaa8/src/c8o/c8oUtilsCore.ts#L168)*

**Returns:** *void*
