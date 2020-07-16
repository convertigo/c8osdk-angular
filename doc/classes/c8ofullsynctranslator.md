[c8osdkjscore](../README.md) › [C8oFullSyncTranslator](c8ofullsynctranslator.md)

# Class: C8oFullSyncTranslator

## Hierarchy

* **C8oFullSyncTranslator**

## Index

### Properties

* [FULL_SYNC_RESPONSE_KEY_COUNT](c8ofullsynctranslator.md#static-full_sync_response_key_count)
* [FULL_SYNC_RESPONSE_KEY_CURRENT](c8ofullsynctranslator.md#static-full_sync_response_key_current)
* [FULL_SYNC_RESPONSE_KEY_DIRECTION](c8ofullsynctranslator.md#static-full_sync_response_key_direction)
* [FULL_SYNC_RESPONSE_KEY_OK](c8ofullsynctranslator.md#static-full_sync_response_key_ok)
* [FULL_SYNC_RESPONSE_KEY_ROWS](c8ofullsynctranslator.md#static-full_sync_response_key_rows)
* [FULL_SYNC_RESPONSE_KEY_STATUS](c8ofullsynctranslator.md#static-full_sync_response_key_status)
* [FULL_SYNC_RESPONSE_KEY_TOTAL](c8ofullsynctranslator.md#static-full_sync_response_key_total)
* [FULL_SYNC_RESPONSE_VALUE_DIRECTION_PULL](c8ofullsynctranslator.md#static-full_sync_response_value_direction_pull)
* [FULL_SYNC_RESPONSE_VALUE_DIRECTION_PUSH](c8ofullsynctranslator.md#static-full_sync_response_value_direction_push)
* [XML_KEY_COUCHDB_OUTPUT](c8ofullsynctranslator.md#static-xml_key_couchdb_output)
* [XML_KEY_DOCUMENT](c8ofullsynctranslator.md#static-xml_key_document)

### Methods

* [fullSyncDefaultResponseToJson](c8ofullsynctranslator.md#static-fullsyncdefaultresponsetojson)
* [fullSyncDocumentOperationResponseToJson](c8ofullsynctranslator.md#static-fullsyncdocumentoperationresponsetojson)

## Properties

### `Static` FULL_SYNC_RESPONSE_KEY_COUNT

▪ **FULL_SYNC_RESPONSE_KEY_COUNT**: *string* = "count"

*Defined in [c8osdk-js-core/src/c8o/c8oFullSyncTranslator.ts:3](https://github.com/convertigo/c8osdk-angular/blob/653fcef/src/c8o/c8oFullSyncTranslator.ts#L3)*

___

### `Static` FULL_SYNC_RESPONSE_KEY_CURRENT

▪ **FULL_SYNC_RESPONSE_KEY_CURRENT**: *string* = "current"

*Defined in [c8osdk-js-core/src/c8o/c8oFullSyncTranslator.ts:5](https://github.com/convertigo/c8osdk-angular/blob/653fcef/src/c8o/c8oFullSyncTranslator.ts#L5)*

___

### `Static` FULL_SYNC_RESPONSE_KEY_DIRECTION

▪ **FULL_SYNC_RESPONSE_KEY_DIRECTION**: *string* = "direction"

*Defined in [c8osdk-js-core/src/c8o/c8oFullSyncTranslator.ts:6](https://github.com/convertigo/c8osdk-angular/blob/653fcef/src/c8o/c8oFullSyncTranslator.ts#L6)*

___

### `Static` FULL_SYNC_RESPONSE_KEY_OK

▪ **FULL_SYNC_RESPONSE_KEY_OK**: *string* = "ok"

*Defined in [c8osdk-js-core/src/c8o/c8oFullSyncTranslator.ts:8](https://github.com/convertigo/c8osdk-angular/blob/653fcef/src/c8o/c8oFullSyncTranslator.ts#L8)*

___

### `Static` FULL_SYNC_RESPONSE_KEY_ROWS

▪ **FULL_SYNC_RESPONSE_KEY_ROWS**: *string* = "rows"

*Defined in [c8osdk-js-core/src/c8o/c8oFullSyncTranslator.ts:4](https://github.com/convertigo/c8osdk-angular/blob/653fcef/src/c8o/c8oFullSyncTranslator.ts#L4)*

___

### `Static` FULL_SYNC_RESPONSE_KEY_STATUS

▪ **FULL_SYNC_RESPONSE_KEY_STATUS**: *string* = "status"

*Defined in [c8osdk-js-core/src/c8o/c8oFullSyncTranslator.ts:9](https://github.com/convertigo/c8osdk-angular/blob/653fcef/src/c8o/c8oFullSyncTranslator.ts#L9)*

___

### `Static` FULL_SYNC_RESPONSE_KEY_TOTAL

▪ **FULL_SYNC_RESPONSE_KEY_TOTAL**: *string* = "total"

*Defined in [c8osdk-js-core/src/c8o/c8oFullSyncTranslator.ts:7](https://github.com/convertigo/c8osdk-angular/blob/653fcef/src/c8o/c8oFullSyncTranslator.ts#L7)*

___

### `Static` FULL_SYNC_RESPONSE_VALUE_DIRECTION_PULL

▪ **FULL_SYNC_RESPONSE_VALUE_DIRECTION_PULL**: *string* = "pull"

*Defined in [c8osdk-js-core/src/c8o/c8oFullSyncTranslator.ts:12](https://github.com/convertigo/c8osdk-angular/blob/653fcef/src/c8o/c8oFullSyncTranslator.ts#L12)*

___

### `Static` FULL_SYNC_RESPONSE_VALUE_DIRECTION_PUSH

▪ **FULL_SYNC_RESPONSE_VALUE_DIRECTION_PUSH**: *string* = "push"

*Defined in [c8osdk-js-core/src/c8o/c8oFullSyncTranslator.ts:11](https://github.com/convertigo/c8osdk-angular/blob/653fcef/src/c8o/c8oFullSyncTranslator.ts#L11)*

___

### `Static` XML_KEY_COUCHDB_OUTPUT

▪ **XML_KEY_COUCHDB_OUTPUT**: *string* = "couchdb_output"

*Defined in [c8osdk-js-core/src/c8o/c8oFullSyncTranslator.ts:15](https://github.com/convertigo/c8osdk-angular/blob/653fcef/src/c8o/c8oFullSyncTranslator.ts#L15)*

___

### `Static` XML_KEY_DOCUMENT

▪ **XML_KEY_DOCUMENT**: *string* = "document"

*Defined in [c8osdk-js-core/src/c8o/c8oFullSyncTranslator.ts:14](https://github.com/convertigo/c8osdk-angular/blob/653fcef/src/c8o/c8oFullSyncTranslator.ts#L14)*

## Methods

### `Static` fullSyncDefaultResponseToJson

▸ **fullSyncDefaultResponseToJson**(`fullSyncDefaultResponse`: [FullSyncDefaultResponse](fullsyncdefaultresponse.md)): *JSON*

*Defined in [c8osdk-js-core/src/c8o/c8oFullSyncTranslator.ts:21](https://github.com/convertigo/c8osdk-angular/blob/653fcef/src/c8o/c8oFullSyncTranslator.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`fullSyncDefaultResponse` | [FullSyncDefaultResponse](fullsyncdefaultresponse.md) |

**Returns:** *JSON*

___

### `Static` fullSyncDocumentOperationResponseToJson

▸ **fullSyncDocumentOperationResponseToJson**(`fullSyncDocumentOperationResponse`: [FullSyncAbstractResponse](fullsyncabstractresponse.md)): *JSON*

*Defined in [c8osdk-js-core/src/c8o/c8oFullSyncTranslator.ts:17](https://github.com/convertigo/c8osdk-angular/blob/653fcef/src/c8o/c8oFullSyncTranslator.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`fullSyncDocumentOperationResponse` | [FullSyncAbstractResponse](fullsyncabstractresponse.md) |

**Returns:** *JSON*
