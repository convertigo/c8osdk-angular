[c8osdkjscore](../README.md) › [C8oResponseJsonListener](c8oresponsejsonlistener.md)

# Class: C8oResponseJsonListener

## Hierarchy

* **C8oResponseJsonListener**

## Implements

* [C8oResponseListener](../interfaces/c8oresponselistener.md)

## Index

### Constructors

* [constructor](c8oresponsejsonlistener.md#constructor)

### Properties

* [onJsonResponse](c8oresponsejsonlistener.md#onjsonresponse)

## Constructors

###  constructor

\+ **new C8oResponseJsonListener**(`onJsonResponse`: function): *[C8oResponseJsonListener](c8oresponsejsonlistener.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oResponse.ts:14](https://github.com/convertigo/c8osdk-angular/blob/d27563b/src/c8o/c8oResponse.ts#L14)*

**Parameters:**

▪ **onJsonResponse**: *function*

▸ (`JSON`: any, `Object`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`JSON` | any |
`Object` | any |

**Returns:** *[C8oResponseJsonListener](c8oresponsejsonlistener.md)*

## Properties

###  onJsonResponse

• **onJsonResponse**: *function*

*Defined in [c8osdk-js-core/src/c8o/c8oResponse.ts:14](https://github.com/convertigo/c8osdk-angular/blob/d27563b/src/c8o/c8oResponse.ts#L14)*

Called on c8o call JSON responses.

**`param`** C8o call response

**`param`** C8o call parameters

#### Type declaration:

▸ (`JSON`: any, `Object`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`JSON` | any |
`Object` | any |
