[c8osdkjscore](../README.md) › [C8oFullSyncCbl](c8ofullsynccbl.md)

# Class: C8oFullSyncCbl

## Hierarchy

* [C8oFullSync](c8ofullsync.md)

  ↳ **C8oFullSyncCbl**

## Index

### Constructors

* [constructor](c8ofullsynccbl.md#constructor)

### Properties

* [c8o](c8ofullsynccbl.md#c8o)
* [canceled](c8ofullsynccbl.md#canceled)
* [cblChangeListeners](c8ofullsynccbl.md#private-cblchangelisteners)
* [fullSyncChangeListeners](c8ofullsynccbl.md#private-fullsyncchangelisteners)
* [fullSyncDatabaseUrlBase](c8ofullsynccbl.md#protected-fullsyncdatabaseurlbase)
* [fullSyncDatabases](c8ofullsynccbl.md#private-fullsyncdatabases)
* [localSuffix](c8ofullsynccbl.md#protected-localsuffix)
* [replicationsToRestart](c8ofullsynccbl.md#replicationstorestart)
* [ATTACHMENT_PROPERTY_KEY_CONTENT_URL](c8ofullsynccbl.md#static-private-attachment_property_key_content_url)
* [FULL_SYNC_PROJECT](c8ofullsynccbl.md#static-full_sync_project)
* [FULL_SYNC__ATTACHMENTS](c8ofullsynccbl.md#static-full_sync__attachments)
* [FULL_SYNC__ID](c8ofullsynccbl.md#static-full_sync__id)
* [FULL_SYNC__REV](c8ofullsynccbl.md#static-full_sync__rev)

### Methods

* [addFullSyncChangeListener](c8ofullsynccbl.md#addfullsyncchangelistener)
* [checkState](c8ofullsynccbl.md#private-checkstate)
* [getDocucmentFromDatabase](c8ofullsynccbl.md#getdocucmentfromdatabase)
* [getOrCreateFullSyncDatabase](c8ofullsynccbl.md#getorcreatefullsyncdatabase)
* [getResponseFromLocalCache](c8ofullsynccbl.md#getresponsefromlocalcache)
* [handleAllDocumentsRequest](c8ofullsynccbl.md#handlealldocumentsrequest)
* [handleAllLocalDocumentsRequest](c8ofullsynccbl.md#handlealllocaldocumentsrequest)
* [handleBulkRequest](c8ofullsynccbl.md#handlebulkrequest)
* [handleCreateDatabaseRequest](c8ofullsynccbl.md#handlecreatedatabaserequest)
* [handleDeleteAttachmentRequest](c8ofullsynccbl.md#handledeleteattachmentrequest)
* [handleDeleteDocumentRequest](c8ofullsynccbl.md#handledeletedocumentrequest)
* [handleDestroyDatabaseRequest](c8ofullsynccbl.md#handledestroydatabaserequest)
* [handleFullSyncRequest](c8ofullsynccbl.md#handlefullsyncrequest)
* [handleFullSyncResponse](c8ofullsynccbl.md#handlefullsyncresponse)
* [handleGetAttachmentRequest](c8ofullsynccbl.md#handlegetattachmentrequest)
* [handleGetAttachmentUrlRequest](c8ofullsynccbl.md#handlegetattachmenturlrequest)
* [handleGetDocumentRequest](c8ofullsynccbl.md#handlegetdocumentrequest)
* [handleGetViewRequest](c8ofullsynccbl.md#handlegetviewrequest)
* [handleInfoRequest](c8ofullsynccbl.md#handleinforequest)
* [handlePostDocumentRequest](c8ofullsynccbl.md#handlepostdocumentrequest)
* [handlePutAttachmentRequest](c8ofullsynccbl.md#handleputattachmentrequest)
* [handleReplicatePullRequest](c8ofullsynccbl.md#handlereplicatepullrequest)
* [handleReplicatePushRequest](c8ofullsynccbl.md#handlereplicatepushrequest)
* [handleResetDatabaseRequest](c8ofullsynccbl.md#handleresetdatabaserequest)
* [handleSyncRequest](c8ofullsynccbl.md#handlesyncrequest)
* [overrideDocument](c8ofullsynccbl.md#overridedocument)
* [removeFullSyncChangeListener](c8ofullsynccbl.md#removefullsyncchangelistener)
* [saveResponseToLocalCache](c8ofullsynccbl.md#saveresponsetolocalcache)
* [isFullSyncRequest](c8ofullsynccbl.md#static-isfullsyncrequest)
* [mergeArrayProperties](c8ofullsynccbl.md#static-mergearrayproperties)
* [mergeProperties](c8ofullsynccbl.md#static-mergeproperties)

## Constructors

###  constructor

\+ **new C8oFullSyncCbl**(`c8o`: [C8oCore](c8ocore.md)): *[C8oFullSyncCbl](c8ofullsynccbl.md)*

*Overrides [C8oFullSync](c8ofullsync.md).[constructor](c8ofullsync.md#constructor)*

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:132](https://github.com/convertigo/c8osdk-angular/blob/e39f7bd/src/c8o/c8oFullSync.ts#L132)*

**Parameters:**

Name | Type |
------ | ------ |
`c8o` | [C8oCore](c8ocore.md) |

**Returns:** *[C8oFullSyncCbl](c8ofullsynccbl.md)*

## Properties

###  c8o

• **c8o**: *[C8oCore](c8ocore.md)*

*Inherited from [C8oFullSync](c8ofullsync.md).[c8o](c8ofullsync.md#c8o)*

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:28](https://github.com/convertigo/c8osdk-angular/blob/e39f7bd/src/c8o/c8oFullSync.ts#L28)*

___

###  canceled

• **canceled**: *boolean* = false

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:132](https://github.com/convertigo/c8osdk-angular/blob/e39f7bd/src/c8o/c8oFullSync.ts#L132)*

___

### `Private` cblChangeListeners

• **cblChangeListeners**: *any[]* =  []

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:130](https://github.com/convertigo/c8osdk-angular/blob/e39f7bd/src/c8o/c8oFullSync.ts#L130)*

___

### `Private` fullSyncChangeListeners

• **fullSyncChangeListeners**: *[C8oFullSyncChangeListener](c8ofullsyncchangelistener.md)[][]* =  []

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:129](https://github.com/convertigo/c8osdk-angular/blob/e39f7bd/src/c8o/c8oFullSync.ts#L129)*

___

### `Protected` fullSyncDatabaseUrlBase

• **fullSyncDatabaseUrlBase**: *string*

*Inherited from [C8oFullSync](c8ofullsync.md).[fullSyncDatabaseUrlBase](c8ofullsync.md#protected-fullsyncdatabaseurlbase)*

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:29](https://github.com/convertigo/c8osdk-angular/blob/e39f7bd/src/c8o/c8oFullSync.ts#L29)*

___

### `Private` fullSyncDatabases

• **fullSyncDatabases**: *Object*

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:128](https://github.com/convertigo/c8osdk-angular/blob/e39f7bd/src/c8o/c8oFullSync.ts#L128)*

___

### `Protected` localSuffix

• **localSuffix**: *string*

*Inherited from [C8oFullSync](c8ofullsync.md).[localSuffix](c8ofullsync.md#protected-localsuffix)*

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:30](https://github.com/convertigo/c8osdk-angular/blob/e39f7bd/src/c8o/c8oFullSync.ts#L30)*

___

###  replicationsToRestart

• **replicationsToRestart**: *Array‹[ReplicationState](../interfaces/replicationstate.md)›* =  []

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:131](https://github.com/convertigo/c8osdk-angular/blob/e39f7bd/src/c8o/c8oFullSync.ts#L131)*

___

### `Static` `Private` ATTACHMENT_PROPERTY_KEY_CONTENT_URL

▪ **ATTACHMENT_PROPERTY_KEY_CONTENT_URL**: *string* = "content_url"

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:127](https://github.com/convertigo/c8osdk-angular/blob/e39f7bd/src/c8o/c8oFullSync.ts#L127)*

___

### `Static` FULL_SYNC_PROJECT

▪ **FULL_SYNC_PROJECT**: *string* = "fs://"

*Inherited from [C8oFullSync](c8ofullsync.md).[FULL_SYNC_PROJECT](c8ofullsync.md#static-full_sync_project)*

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:23](https://github.com/convertigo/c8osdk-angular/blob/e39f7bd/src/c8o/c8oFullSync.ts#L23)*

The project requestable value to execute a fullSync request.

___

### `Static` FULL_SYNC__ATTACHMENTS

▪ **FULL_SYNC__ATTACHMENTS**: *string* = "_attachments"

*Inherited from [C8oFullSync](c8ofullsync.md).[FULL_SYNC__ATTACHMENTS](c8ofullsync.md#static-full_sync__attachments)*

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:26](https://github.com/convertigo/c8osdk-angular/blob/e39f7bd/src/c8o/c8oFullSync.ts#L26)*

___

### `Static` FULL_SYNC__ID

▪ **FULL_SYNC__ID**: *string* = "_id"

*Inherited from [C8oFullSync](c8ofullsync.md).[FULL_SYNC__ID](c8ofullsync.md#static-full_sync__id)*

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:24](https://github.com/convertigo/c8osdk-angular/blob/e39f7bd/src/c8o/c8oFullSync.ts#L24)*

___

### `Static` FULL_SYNC__REV

▪ **FULL_SYNC__REV**: *string* = "_rev"

*Inherited from [C8oFullSync](c8ofullsync.md).[FULL_SYNC__REV](c8ofullsync.md#static-full_sync__rev)*

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:25](https://github.com/convertigo/c8osdk-angular/blob/e39f7bd/src/c8o/c8oFullSync.ts#L25)*

## Methods

###  addFullSyncChangeListener

▸ **addFullSyncChangeListener**(`db`: string, `listener`: [C8oFullSyncChangeListener](c8ofullsyncchangelistener.md)): *Promise‹void›*

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:757](https://github.com/convertigo/c8osdk-angular/blob/e39f7bd/src/c8o/c8oFullSync.ts#L757)*

**Parameters:**

Name | Type |
------ | ------ |
`db` | string |
`listener` | [C8oFullSyncChangeListener](c8ofullsyncchangelistener.md) |

**Returns:** *Promise‹void›*

___

### `Private` checkState

▸ **checkState**(): *boolean*

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:446](https://github.com/convertigo/c8osdk-angular/blob/e39f7bd/src/c8o/c8oFullSync.ts#L446)*

Check network status before starting a replication

**Returns:** *boolean*

___

###  getDocucmentFromDatabase

▸ **getDocucmentFromDatabase**(`c8o`: [C8oCore](c8ocore.md), `databaseName`: string, `documentId`: string): *Promise‹any›*

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:638](https://github.com/convertigo/c8osdk-angular/blob/e39f7bd/src/c8o/c8oFullSync.ts#L638)*

**Parameters:**

Name | Type |
------ | ------ |
`c8o` | [C8oCore](c8ocore.md) |
`databaseName` | string |
`documentId` | string |

**Returns:** *Promise‹any›*

___

###  getOrCreateFullSyncDatabase

▸ **getOrCreateFullSyncDatabase**(`databaseName`: string): *Promise‹[C8oFullSyncDatabase](c8ofullsyncdatabase.md)›*

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:150](https://github.com/convertigo/c8osdk-angular/blob/e39f7bd/src/c8o/c8oFullSync.ts#L150)*

Returns the database with this name in the list.<br/>
If it does not already exist yet then creates it and adds it to the list.

**`throws`** C8oException Failed to create a new fullSync database.

**Parameters:**

Name | Type |
------ | ------ |
`databaseName` | string |

**Returns:** *Promise‹[C8oFullSyncDatabase](c8ofullsyncdatabase.md)›*

C8oFullSyncDatabase

___

###  getResponseFromLocalCache

▸ **getResponseFromLocalCache**(`c8oCallRequestIdentifier`: string): *Promise‹any›*

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:668](https://github.com/convertigo/c8osdk-angular/blob/e39f7bd/src/c8o/c8oFullSync.ts#L668)*

**Parameters:**

Name | Type |
------ | ------ |
`c8oCallRequestIdentifier` | string |

**Returns:** *Promise‹any›*

___

###  handleAllDocumentsRequest

▸ **handleAllDocumentsRequest**(`databaseName`: string, `parameters`: Object): *Promise‹any›*

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:354](https://github.com/convertigo/c8osdk-angular/blob/e39f7bd/src/c8o/c8oFullSync.ts#L354)*

**Parameters:**

Name | Type |
------ | ------ |
`databaseName` | string |
`parameters` | Object |

**Returns:** *Promise‹any›*

___

###  handleAllLocalDocumentsRequest

▸ **handleAllLocalDocumentsRequest**(`databaseName`: string, `parameters`: Object): *Promise‹any›*

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:369](https://github.com/convertigo/c8osdk-angular/blob/e39f7bd/src/c8o/c8oFullSync.ts#L369)*

**Parameters:**

Name | Type |
------ | ------ |
`databaseName` | string |
`parameters` | Object |

**Returns:** *Promise‹any›*

___

###  handleBulkRequest

▸ **handleBulkRequest**(`databaseName`: string, `parameters`: Object): *Promise‹any›*

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:510](https://github.com/convertigo/c8osdk-angular/blob/e39f7bd/src/c8o/c8oFullSync.ts#L510)*

**Parameters:**

Name | Type |
------ | ------ |
`databaseName` | string |
`parameters` | Object |

**Returns:** *Promise‹any›*

___

###  handleCreateDatabaseRequest

▸ **handleCreateDatabaseRequest**(`databaseName`: string): *Promise‹[FullSyncDefaultResponse](fullsyncdefaultresponse.md)›*

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:505](https://github.com/convertigo/c8osdk-angular/blob/e39f7bd/src/c8o/c8oFullSync.ts#L505)*

**Parameters:**

Name | Type |
------ | ------ |
`databaseName` | string |

**Returns:** *Promise‹[FullSyncDefaultResponse](fullsyncdefaultresponse.md)›*

___

###  handleDeleteAttachmentRequest

▸ **handleDeleteAttachmentRequest**(`databaseName`: string, `docid`: string, `attachmentName`: string): *Promise‹any›*

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:331](https://github.com/convertigo/c8osdk-angular/blob/e39f7bd/src/c8o/c8oFullSync.ts#L331)*

**Parameters:**

Name | Type |
------ | ------ |
`databaseName` | string |
`docid` | string |
`attachmentName` | string |

**Returns:** *Promise‹any›*

___

###  handleDeleteDocumentRequest

▸ **handleDeleteDocumentRequest**(`DatabaseName`: string, `docid`: string, `parameters`: Object): *Promise‹any›*

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:215](https://github.com/convertigo/c8osdk-angular/blob/e39f7bd/src/c8o/c8oFullSync.ts#L215)*

**Parameters:**

Name | Type |
------ | ------ |
`DatabaseName` | string |
`docid` | string |
`parameters` | Object |

**Returns:** *Promise‹any›*

___

###  handleDestroyDatabaseRequest

▸ **handleDestroyDatabaseRequest**(`databaseName`: string): *Promise‹any›*

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:575](https://github.com/convertigo/c8osdk-angular/blob/e39f7bd/src/c8o/c8oFullSync.ts#L575)*

**Parameters:**

Name | Type |
------ | ------ |
`databaseName` | string |

**Returns:** *Promise‹any›*

___

###  handleFullSyncRequest

▸ **handleFullSyncRequest**(`_parameters`: Object, `listener`: [C8oResponseListener](../interfaces/c8oresponselistener.md)): *Promise‹any›*

*Inherited from [C8oFullSync](c8ofullsync.md).[handleFullSyncRequest](c8ofullsync.md#handlefullsyncrequest)*

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:47](https://github.com/convertigo/c8osdk-angular/blob/e39f7bd/src/c8o/c8oFullSync.ts#L47)*

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

*Overrides [C8oFullSync](c8ofullsync.md).[handleFullSyncResponse](c8ofullsync.md#handlefullsyncresponse)*

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:165](https://github.com/convertigo/c8osdk-angular/blob/e39f7bd/src/c8o/c8oFullSync.ts#L165)*

**Parameters:**

Name | Type |
------ | ------ |
`response` | any |
`listener` | [C8oResponseListener](../interfaces/c8oresponselistener.md) |

**Returns:** *any*

___

###  handleGetAttachmentRequest

▸ **handleGetAttachmentRequest**(`databaseName`: string, `docid`: string, `attachmentName`: string, `parameters`: any): *Promise‹any›*

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:317](https://github.com/convertigo/c8osdk-angular/blob/e39f7bd/src/c8o/c8oFullSync.ts#L317)*

**Parameters:**

Name | Type |
------ | ------ |
`databaseName` | string |
`docid` | string |
`attachmentName` | string |
`parameters` | any |

**Returns:** *Promise‹any›*

___

###  handleGetAttachmentUrlRequest

▸ **handleGetAttachmentUrlRequest**(`fullSyncDatabaseName`: string, `docid`: string, `parameters`: Object): *Promise‹any›*

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:180](https://github.com/convertigo/c8osdk-angular/blob/e39f7bd/src/c8o/c8oFullSync.ts#L180)*

**Parameters:**

Name | Type |
------ | ------ |
`fullSyncDatabaseName` | string |
`docid` | string |
`parameters` | Object |

**Returns:** *Promise‹any›*

___

###  handleGetDocumentRequest

▸ **handleGetDocumentRequest**(`fullSyncDatabaseName`: string, `docid`: string, `parameters`: Object): *Promise‹any›*

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:191](https://github.com/convertigo/c8osdk-angular/blob/e39f7bd/src/c8o/c8oFullSync.ts#L191)*

**Parameters:**

Name | Type |
------ | ------ |
`fullSyncDatabaseName` | string |
`docid` | string |
`parameters` | Object |

**Returns:** *Promise‹any›*

___

###  handleGetViewRequest

▸ **handleGetViewRequest**(`databaseName`: string, `ddocName`: string, `viewName`: string, `parameters`: Object): *Promise‹any›*

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:400](https://github.com/convertigo/c8osdk-angular/blob/e39f7bd/src/c8o/c8oFullSync.ts#L400)*

**Parameters:**

Name | Type |
------ | ------ |
`databaseName` | string |
`ddocName` | string |
`viewName` | string |
`parameters` | Object |

**Returns:** *Promise‹any›*

___

###  handleInfoRequest

▸ **handleInfoRequest**(`databaseName`: string): *Promise‹any›*

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:562](https://github.com/convertigo/c8osdk-angular/blob/e39f7bd/src/c8o/c8oFullSync.ts#L562)*

**Parameters:**

Name | Type |
------ | ------ |
`databaseName` | string |

**Returns:** *Promise‹any›*

___

###  handlePostDocumentRequest

▸ **handlePostDocumentRequest**(`databaseName`: string, `fullSyncPolicy`: [FullSyncPolicy](fullsyncpolicy.md), `parameters`: Object): *Promise‹any›*

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:248](https://github.com/convertigo/c8osdk-angular/blob/e39f7bd/src/c8o/c8oFullSync.ts#L248)*

**Parameters:**

Name | Type |
------ | ------ |
`databaseName` | string |
`fullSyncPolicy` | [FullSyncPolicy](fullsyncpolicy.md) |
`parameters` | Object |

**Returns:** *Promise‹any›*

___

###  handlePutAttachmentRequest

▸ **handlePutAttachmentRequest**(`databaseName`: string, `docid`: string, `attachmentName`: string, `attachmentType`: string, `attachmentContent`: any): *Promise‹any›*

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:292](https://github.com/convertigo/c8osdk-angular/blob/e39f7bd/src/c8o/c8oFullSync.ts#L292)*

**Parameters:**

Name | Type |
------ | ------ |
`databaseName` | string |
`docid` | string |
`attachmentName` | string |
`attachmentType` | string |
`attachmentContent` | any |

**Returns:** *Promise‹any›*

___

###  handleReplicatePullRequest

▸ **handleReplicatePullRequest**(`databaseName`: string, `parameters`: Object, `c8oResponseListener`: [C8oResponseListener](../interfaces/c8oresponselistener.md)): *Promise‹any›*

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:462](https://github.com/convertigo/c8osdk-angular/blob/e39f7bd/src/c8o/c8oFullSync.ts#L462)*

**Parameters:**

Name | Type |
------ | ------ |
`databaseName` | string |
`parameters` | Object |
`c8oResponseListener` | [C8oResponseListener](../interfaces/c8oresponselistener.md) |

**Returns:** *Promise‹any›*

___

###  handleReplicatePushRequest

▸ **handleReplicatePushRequest**(`databaseName`: string, `parameters`: Object, `c8oResponseListener`: [C8oResponseListener](../interfaces/c8oresponselistener.md)): *Promise‹any›*

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:474](https://github.com/convertigo/c8osdk-angular/blob/e39f7bd/src/c8o/c8oFullSync.ts#L474)*

**Parameters:**

Name | Type |
------ | ------ |
`databaseName` | string |
`parameters` | Object |
`c8oResponseListener` | [C8oResponseListener](../interfaces/c8oresponselistener.md) |

**Returns:** *Promise‹any›*

___

###  handleResetDatabaseRequest

▸ **handleResetDatabaseRequest**(`databaseName`: string): *Promise‹[FullSyncDefaultResponse](fullsyncdefaultresponse.md)›*

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:486](https://github.com/convertigo/c8osdk-angular/blob/e39f7bd/src/c8o/c8oFullSync.ts#L486)*

**Parameters:**

Name | Type |
------ | ------ |
`databaseName` | string |

**Returns:** *Promise‹[FullSyncDefaultResponse](fullsyncdefaultresponse.md)›*

___

###  handleSyncRequest

▸ **handleSyncRequest**(`databaseName`: string, `parameters`: Object, `c8oResponseListener`: [C8oResponseListener](../interfaces/c8oresponselistener.md)): *Promise‹any›*

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:450](https://github.com/convertigo/c8osdk-angular/blob/e39f7bd/src/c8o/c8oFullSync.ts#L450)*

**Parameters:**

Name | Type |
------ | ------ |
`databaseName` | string |
`parameters` | Object |
`c8oResponseListener` | [C8oResponseListener](../interfaces/c8oresponselistener.md) |

**Returns:** *Promise‹any›*

___

###  overrideDocument

▸ **overrideDocument**(`document`: any, `properties`: Object, `databaseName`: any): *Promise‹void›*

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:652](https://github.com/convertigo/c8osdk-angular/blob/e39f7bd/src/c8o/c8oFullSync.ts#L652)*

**Parameters:**

Name | Type |
------ | ------ |
`document` | any |
`properties` | Object |
`databaseName` | any |

**Returns:** *Promise‹void›*

___

###  removeFullSyncChangeListener

▸ **removeFullSyncChangeListener**(`db`: string, `listener`: [C8oFullSyncChangeListener](c8ofullsyncchangelistener.md)): *Promise‹void›*

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:799](https://github.com/convertigo/c8osdk-angular/blob/e39f7bd/src/c8o/c8oFullSync.ts#L799)*

**Parameters:**

Name | Type |
------ | ------ |
`db` | string |
`listener` | [C8oFullSyncChangeListener](c8ofullsyncchangelistener.md) |

**Returns:** *Promise‹void›*

___

###  saveResponseToLocalCache

▸ **saveResponseToLocalCache**(`c8oCallRequestIdentifier`: string, `localCacheResponse`: [C8oLocalCacheResponse](c8olocalcacheresponse.md)): *Promise‹any›*

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:720](https://github.com/convertigo/c8osdk-angular/blob/e39f7bd/src/c8o/c8oFullSync.ts#L720)*

**Parameters:**

Name | Type |
------ | ------ |
`c8oCallRequestIdentifier` | string |
`localCacheResponse` | [C8oLocalCacheResponse](c8olocalcacheresponse.md) |

**Returns:** *Promise‹any›*

___

### `Static` isFullSyncRequest

▸ **isFullSyncRequest**(`requestParameter`: Object): *boolean*

*Inherited from [C8oFullSync](c8ofullsync.md).[isFullSyncRequest](c8ofullsync.md#static-isfullsyncrequest)*

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:115](https://github.com/convertigo/c8osdk-angular/blob/e39f7bd/src/c8o/c8oFullSync.ts#L115)*

Checks if request parameters correspond to a fullSync request.

**Parameters:**

Name | Type |
------ | ------ |
`requestParameter` | Object |

**Returns:** *boolean*

___

### `Static` mergeArrayProperties

▸ **mergeArrayProperties**(`newArray`: any, `oldArray`: any): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:611](https://github.com/convertigo/c8osdk-angular/blob/e39f7bd/src/c8o/c8oFullSync.ts#L611)*

**Parameters:**

Name | Type |
------ | ------ |
`newArray` | any |
`oldArray` | any |

**Returns:** *void*

___

### `Static` mergeProperties

▸ **mergeProperties**(`newProperties`: Object, `oldProperties`: Object): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oFullSync.ts:589](https://github.com/convertigo/c8osdk-angular/blob/e39f7bd/src/c8o/c8oFullSync.ts#L589)*

**Parameters:**

Name | Type |
------ | ------ |
`newProperties` | Object |
`oldProperties` | Object |

**Returns:** *void*
