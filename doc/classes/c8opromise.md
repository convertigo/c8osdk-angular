[c8osdkjscore](../README.md) › [C8oPromise](c8opromise.md)

# Class: C8oPromise <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **C8oPromise**

## Index

### Constructors

* [constructor](c8opromise.md#constructor)

### Properties

* [c8o](c8opromise.md#private-c8o)
* [c8oFail](c8opromise.md#private-c8ofail)
* [c8oProgress](c8opromise.md#private-c8oprogress)
* [c8oResponse](c8opromise.md#private-c8oresponse)
* [lastFailure](c8opromise.md#private-lastfailure)
* [lastParameters](c8opromise.md#private-lastparameters)
* [lastResponse](c8opromise.md#private-lastresponse)
* [nextPromise](c8opromise.md#private-nextpromise)

### Methods

* [_onResponse](c8opromise.md#private-_onresponse)
* [async](c8opromise.md#async)
* [fail](c8opromise.md#fail)
* [onFailure](c8opromise.md#onfailure)
* [onProgress](c8opromise.md#onprogress)
* [onResponse](c8opromise.md#onresponse)
* [progress](c8opromise.md#progress)
* [then](c8opromise.md#then)
* [toObservable](c8opromise.md#toobservable)

## Constructors

###  constructor

\+ **new C8oPromise**(`c8o`: [C8oCore](c8ocore.md)): *[C8oPromise](c8opromise.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oPromise.ts:16](https://github.com/convertigo/c8osdk-angular/blob/8cf70e2/src/c8o/c8oPromise.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`c8o` | [C8oCore](c8ocore.md) |

**Returns:** *[C8oPromise](c8opromise.md)*

## Properties

### `Private` c8o

• **c8o**: *[C8oCore](c8ocore.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oPromise.ts:8](https://github.com/convertigo/c8osdk-angular/blob/8cf70e2/src/c8o/c8oPromise.ts#L8)*

___

### `Private` c8oFail

• **c8oFail**: *function*

*Defined in [c8osdk-js-core/src/c8o/c8oPromise.ts:11](https://github.com/convertigo/c8osdk-angular/blob/8cf70e2/src/c8o/c8oPromise.ts#L11)*

#### Type declaration:

▸ (`error`: Error, `parameters`: Object): *[C8oPromise](c8opromise.md)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`error` | Error |
`parameters` | Object |

___

### `Private` c8oProgress

• **c8oProgress**: *function*

*Defined in [c8osdk-js-core/src/c8o/c8oPromise.ts:10](https://github.com/convertigo/c8osdk-angular/blob/8cf70e2/src/c8o/c8oPromise.ts#L10)*

#### Type declaration:

▸ (`C8oProgress`: any): *[C8oPromise](c8opromise.md)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`C8oProgress` | any |

___

### `Private` c8oResponse

• **c8oResponse**: *function*

*Defined in [c8osdk-js-core/src/c8o/c8oPromise.ts:9](https://github.com/convertigo/c8osdk-angular/blob/8cf70e2/src/c8o/c8oPromise.ts#L9)*

#### Type declaration:

▸ (`response`: T, `parameters`: Object): *[C8oPromise](c8opromise.md)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`response` | T |
`parameters` | Object |

___

### `Private` lastFailure

• **lastFailure**: *Error*

*Defined in [c8osdk-js-core/src/c8o/c8oPromise.ts:15](https://github.com/convertigo/c8osdk-angular/blob/8cf70e2/src/c8o/c8oPromise.ts#L15)*

___

### `Private` lastParameters

• **lastParameters**: *Object*

*Defined in [c8osdk-js-core/src/c8o/c8oPromise.ts:16](https://github.com/convertigo/c8osdk-angular/blob/8cf70e2/src/c8o/c8oPromise.ts#L16)*

___

### `Private` lastResponse

• **lastResponse**: *T*

*Defined in [c8osdk-js-core/src/c8o/c8oPromise.ts:14](https://github.com/convertigo/c8osdk-angular/blob/8cf70e2/src/c8o/c8oPromise.ts#L14)*

___

### `Private` nextPromise

• **nextPromise**: *[C8oPromise](c8opromise.md)‹T›*

*Defined in [c8osdk-js-core/src/c8o/c8oPromise.ts:12](https://github.com/convertigo/c8osdk-angular/blob/8cf70e2/src/c8o/c8oPromise.ts#L12)*

## Methods

### `Private` _onResponse

▸ **_onResponse**(): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oPromise.ts:97](https://github.com/convertigo/c8osdk-angular/blob/8cf70e2/src/c8o/c8oPromise.ts#L97)*

**Returns:** *void*

___

###  async

▸ **async**(): *Promise‹any›*

*Defined in [c8osdk-js-core/src/c8o/c8oPromise.ts:22](https://github.com/convertigo/c8osdk-angular/blob/8cf70e2/src/c8o/c8oPromise.ts#L22)*

**Returns:** *Promise‹any›*

___

###  fail

▸ **fail**(`c8oOnFail`: function): *any*

*Defined in [c8osdk-js-core/src/c8o/c8oPromise.ts:84](https://github.com/convertigo/c8osdk-angular/blob/8cf70e2/src/c8o/c8oPromise.ts#L84)*

**Parameters:**

▪ **c8oOnFail**: *function*

▸ (`error`: Error, `parameters`: Object): *[C8oPromise](c8opromise.md)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`error` | Error |
`parameters` | Object |

**Returns:** *any*

___

###  onFailure

▸ **onFailure**(`error`: Error, `parameters`: Object): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oPromise.ts:144](https://github.com/convertigo/c8osdk-angular/blob/8cf70e2/src/c8o/c8oPromise.ts#L144)*

**Parameters:**

Name | Type |
------ | ------ |
`error` | Error |
`parameters` | Object |

**Returns:** *void*

___

###  onProgress

▸ **onProgress**(`progress`: [C8oProgress](c8oprogress.md)): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oPromise.ts:136](https://github.com/convertigo/c8osdk-angular/blob/8cf70e2/src/c8o/c8oPromise.ts#L136)*

**Parameters:**

Name | Type |
------ | ------ |
`progress` | [C8oProgress](c8oprogress.md) |

**Returns:** *void*

___

###  onResponse

▸ **onResponse**(`response`: T, `parameters`: Object): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oPromise.ts:124](https://github.com/convertigo/c8osdk-angular/blob/8cf70e2/src/c8o/c8oPromise.ts#L124)*

**Parameters:**

Name | Type |
------ | ------ |
`response` | T |
`parameters` | Object |

**Returns:** *void*

___

###  progress

▸ **progress**(`c8oOnProgress`: function): *any*

*Defined in [c8osdk-js-core/src/c8o/c8oPromise.ts:74](https://github.com/convertigo/c8osdk-angular/blob/8cf70e2/src/c8o/c8oPromise.ts#L74)*

**Parameters:**

▪ **c8oOnProgress**: *function*

▸ (`C8oProgress`: [C8oProgress](c8oprogress.md)): *[C8oPromise](c8opromise.md)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`C8oProgress` | [C8oProgress](c8oprogress.md) |

**Returns:** *any*

___

###  then

▸ **then**(`c8oOnResponse`: function): *any*

*Defined in [c8osdk-js-core/src/c8o/c8oPromise.ts:55](https://github.com/convertigo/c8osdk-angular/blob/8cf70e2/src/c8o/c8oPromise.ts#L55)*

**Parameters:**

▪ **c8oOnResponse**: *function*

▸ (`response`: T, `parameters`: Object): *[C8oPromise](c8opromise.md)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`response` | T |
`parameters` | Object |

**Returns:** *any*

___

###  toObservable

▸ **toObservable**(): *Observable‹any›*

*Defined in [c8osdk-js-core/src/c8o/c8oPromise.ts:33](https://github.com/convertigo/c8osdk-angular/blob/8cf70e2/src/c8o/c8oPromise.ts#L33)*

**Returns:** *Observable‹any›*
