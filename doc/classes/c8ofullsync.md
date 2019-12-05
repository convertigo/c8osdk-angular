[c8osdkjscore](../README.md) › [C8oFullSync](c8ofullsync.md)

# Class: C8oFullSync

## Hierarchy

* **C8oFullSync**

  ↳ [C8oFullSyncCbl](c8ofullsynccbl.md)

## Index

### Constructors

* [constructor](c8ofullsync.md#constructor)

### Properties

* [c8o](c8ofullsync.md#c8o)
* [fullSyncDatabaseUrlBase](c8ofullsync.md#protected-fullsyncdatabaseurlbase)
* [localSuffix](c8ofullsync.md#protected-localsuffix)
* [FULL_SYNC_PROJECT](c8ofullsync.md#static-full_sync_project)
* [FULL_SYNC_URL_PATH](c8ofullsync.md#static-private-full_sync_url_path)
* [FULL_SYNC__ATTACHMENTS](c8ofullsync.md#static-full_sync__attachments)
* [FULL_SYNC__ID](c8ofullsync.md#static-full_sync__id)
* [FULL_SYNC__REV](c8ofullsync.md#static-full_sync__rev)

### Methods

* [handleFullSyncRequest](c8ofullsync.md#handlefullsyncrequest)
* [handleFullSyncResponse](c8ofullsync.md#handlefullsyncresponse)
* [isFullSyncRequest](c8ofullsync.md#static-isfullsyncrequest)

## Constructors

###  constructor

\+ **new C8oFullSync**(`c8o`: [C8oCore](c8ocore.md)): *[C8oFullSync](c8ofullsync.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:30](https://github.com/convertigo/c8osdk-angular/blob/554de53/src/c8o/c8oFullSync.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`c8o` | [C8oCore](c8ocore.md) |

**Returns:** *[C8oFullSync](c8ofullsync.md)*

## Properties

###  c8o

• **c8o**: *[C8oCore](c8ocore.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:28](https://github.com/convertigo/c8osdk-angular/blob/554de53/src/c8o/c8oFullSync.ts#L28)*

___

### `Protected` fullSyncDatabaseUrlBase

• **fullSyncDatabaseUrlBase**: *string*

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:29](https://github.com/convertigo/c8osdk-angular/blob/554de53/src/c8o/c8oFullSync.ts#L29)*

___

### `Protected` localSuffix

• **localSuffix**: *string*

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:30](https://github.com/convertigo/c8osdk-angular/blob/554de53/src/c8o/c8oFullSync.ts#L30)*

___

### `Static` FULL_SYNC_PROJECT

▪ **FULL_SYNC_PROJECT**: *string* = "fs://"

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:23](https://github.com/convertigo/c8osdk-angular/blob/554de53/src/c8o/c8oFullSync.ts#L23)*

The project requestable value to execute a fullSync request.

___

### `Static` `Private` FULL_SYNC_URL_PATH

▪ **FULL_SYNC_URL_PATH**: *string* = "/fullsync/"

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:19](https://github.com/convertigo/c8osdk-angular/blob/554de53/src/c8o/c8oFullSync.ts#L19)*

___

### `Static` FULL_SYNC__ATTACHMENTS

▪ **FULL_SYNC__ATTACHMENTS**: *string* = "_attachments"

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:26](https://github.com/convertigo/c8osdk-angular/blob/554de53/src/c8o/c8oFullSync.ts#L26)*

___

### `Static` FULL_SYNC__ID

▪ **FULL_SYNC__ID**: *string* = "_id"

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:24](https://github.com/convertigo/c8osdk-angular/blob/554de53/src/c8o/c8oFullSync.ts#L24)*

___

### `Static` FULL_SYNC__REV

▪ **FULL_SYNC__REV**: *string* = "_rev"

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:25](https://github.com/convertigo/c8osdk-angular/blob/554de53/src/c8o/c8oFullSync.ts#L25)*

## Methods

###  handleFullSyncRequest

▸ **handleFullSyncRequest**(`_parameters`: Object, `listener`: [C8oResponseListener](../interfaces/c8oresponselistener.md)): *Promise‹any›*

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:47](https://github.com/convertigo/c8osdk-angular/blob/554de53/src/c8o/c8oFullSync.ts#L47)*

Handles a fullSync request.<br/>
It determines the type of the request thanks to parameters.

**`throws`** C8oException

**Parameters:**

Name | Type |
------ | ------ |
`_parameters` | Object |
`listener` | [C8oResponseListener](../interfaces/c8oresponselistener.md) |

**Returns:** *Promise‹any›*

promise<any>

___

###  handleFullSyncResponse

▸ **handleFullSyncResponse**(`response`: any, `listener`: [C8oResponseListener](../interfaces/c8oresponselistener.md)): *any*

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:108](https://github.com/convertigo/c8osdk-angular/blob/554de53/src/c8o/c8oFullSync.ts#L108)*

**`throws`** C8oException Failed to parse response.

**Parameters:**

Name | Type |
------ | ------ |
`response` | any |
`listener` | [C8oResponseListener](../interfaces/c8oresponselistener.md) |

**Returns:** *any*

response

___

### `Static` isFullSyncRequest

▸ **isFullSyncRequest**(`requestParameter`: Object): *boolean*

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:115](https://github.com/convertigo/c8osdk-angular/blob/554de53/src/c8o/c8oFullSync.ts#L115)*

Checks if request parameters correspond to a fullSync request.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameter` | Object |

**Returns:** *boolean*
