[c8osdkjscore](../README.md) › [C8oManagerLogin](c8omanagerlogin.md)

# Class: C8oManagerLogin

## Hierarchy

* **C8oManagerLogin**

## Index

### Constructors

* [constructor](c8omanagerlogin.md#constructor)

### Properties

* [c8o](c8omanagerlogin.md#c8o)
* [mutexL](c8omanagerlogin.md#private-mutexl)
* [requestLogin](c8omanagerlogin.md#private-requestlogin)

### Methods

* [doLogin](c8omanagerlogin.md#dologin)
* [setRequestLogin](c8omanagerlogin.md#setrequestlogin)

## Constructors

###  constructor

\+ **new C8oManagerLogin**(`c8o`: [C8oCore](c8ocore.md)): *[C8oManagerLogin](c8omanagerlogin.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerLogin.ts:10](https://github.com/convertigo/c8osdk-angular/blob/554de53/src/c8o/c8oManagerLogin.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`c8o` | [C8oCore](c8ocore.md) |

**Returns:** *[C8oManagerLogin](c8omanagerlogin.md)*

## Properties

###  c8o

• **c8o**: *[C8oCore](c8ocore.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerLogin.ts:8](https://github.com/convertigo/c8osdk-angular/blob/554de53/src/c8o/c8oManagerLogin.ts#L8)*

___

### `Private` mutexL

• **mutexL**: *[Semaphore](semaphore.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerLogin.ts:10](https://github.com/convertigo/c8osdk-angular/blob/554de53/src/c8o/c8oManagerLogin.ts#L10)*

___

### `Private` requestLogin

• **requestLogin**: *any*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerLogin.ts:9](https://github.com/convertigo/c8osdk-angular/blob/554de53/src/c8o/c8oManagerLogin.ts#L9)*

## Methods

###  doLogin

▸ **doLogin**(): *Promise‹any›*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerLogin.ts:20](https://github.com/convertigo/c8osdk-angular/blob/554de53/src/c8o/c8oManagerLogin.ts#L20)*

**Returns:** *Promise‹any›*

___

###  setRequestLogin

▸ **setRequestLogin**(`url`: string, `parameters`: Object, `headers`: Object): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerLogin.ts:16](https://github.com/convertigo/c8osdk-angular/blob/554de53/src/c8o/c8oManagerLogin.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`parameters` | Object |
`headers` | Object |

**Returns:** *void*
