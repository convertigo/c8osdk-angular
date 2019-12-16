[c8osdkjscore](../README.md) › [Priority](priority.md)

# Class: Priority

Defines whether the response should be retrieved from local cache or from Convertigo server when the device can access the network.<br/>
When the device has no network access, the local cache response is used, if existing.

## Hierarchy

* **Priority**

## Index

### Constructors

* [constructor](priority.md#constructor)

### Properties

* [isAvailable](priority.md#isavailable)
* [LOCAL](priority.md#static-local)
* [SERVER](priority.md#static-server)

## Constructors

###  constructor

\+ **new Priority**(`isAvailable`: boolean): *[Priority](priority.md)*

*Defined in [c8osdk-js-core/src/c8o/priority.service.ts:12](https://github.com/convertigo/c8osdk-angular/blob/d27563b/src/c8o/priority.service.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`isAvailable` | boolean |

**Returns:** *[Priority](priority.md)*

## Properties

###  isAvailable

• **isAvailable**: *boolean*

*Defined in [c8osdk-js-core/src/c8o/priority.service.ts:6](https://github.com/convertigo/c8osdk-angular/blob/d27563b/src/c8o/priority.service.ts#L6)*

___

### `Static` LOCAL

▪ **LOCAL**: *[Priority](priority.md)* =  new Priority(true)

*Defined in [c8osdk-js-core/src/c8o/priority.service.ts:12](https://github.com/convertigo/c8osdk-angular/blob/d27563b/src/c8o/priority.service.ts#L12)*

___

### `Static` SERVER

▪ **SERVER**: *[Priority](priority.md)* =  new Priority(false)

*Defined in [c8osdk-js-core/src/c8o/priority.service.ts:9](https://github.com/convertigo/c8osdk-angular/blob/d27563b/src/c8o/priority.service.ts#L9)*
