[c8osdkjscore](../README.md) › [FullSyncDocumentOperationResponse](fullsyncdocumentoperationresponse.md)

# Class: FullSyncDocumentOperationResponse

Returned by a fullSync document operation without return data.

## Hierarchy

* [FullSyncAbstractResponse](fullsyncabstractresponse.md)

  ↳ **FullSyncDocumentOperationResponse**

## Index

### Constructors

* [constructor](fullsyncdocumentoperationresponse.md#constructor)

### Properties

* [documentId](fullsyncdocumentoperationresponse.md#documentid)
* [documentRevision](fullsyncdocumentoperationresponse.md#documentrevision)

### Methods

* [getProperties](fullsyncdocumentoperationresponse.md#getproperties)

## Constructors

###  constructor

\+ **new FullSyncDocumentOperationResponse**(`documentId`: string, `documentRevision`: string, `operationStatus`: boolean): *[FullSyncDocumentOperationResponse](fullsyncdocumentoperationresponse.md)*

*Overrides [FullSyncAbstractResponse](fullsyncabstractresponse.md).[constructor](fullsyncabstractresponse.md#constructor)*

*Defined in [c8osdk-js-core/src/c8o/fullSyncResponse.ts:48](https://github.com/convertigo/c8osdk-angular/blob/aea59f7/src/c8o/fullSyncResponse.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`documentId` | string |
`documentRevision` | string |
`operationStatus` | boolean |

**Returns:** *[FullSyncDocumentOperationResponse](fullsyncdocumentoperationresponse.md)*

## Properties

###  documentId

• **documentId**: *string*

*Defined in [c8osdk-js-core/src/c8o/fullSyncResponse.ts:47](https://github.com/convertigo/c8osdk-angular/blob/aea59f7/src/c8o/fullSyncResponse.ts#L47)*

___

###  documentRevision

• **documentRevision**: *string*

*Defined in [c8osdk-js-core/src/c8o/fullSyncResponse.ts:48](https://github.com/convertigo/c8osdk-angular/blob/aea59f7/src/c8o/fullSyncResponse.ts#L48)*

## Methods

###  getProperties

▸ **getProperties**(): *Object*

*Overrides [FullSyncAbstractResponse](fullsyncabstractresponse.md).[getProperties](fullsyncabstractresponse.md#getproperties)*

*Defined in [c8osdk-js-core/src/c8o/fullSyncResponse.ts:56](https://github.com/convertigo/c8osdk-angular/blob/aea59f7/src/c8o/fullSyncResponse.ts#L56)*

**Returns:** *Object*
