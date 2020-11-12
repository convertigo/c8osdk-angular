[c8osdkjscore](../README.md) › [C8oFullSyncDatabase](c8ofullsyncdatabase.md)

# Class: C8oFullSyncDatabase

Created by charlesg on 10/01/2017.

## Hierarchy

* **C8oFullSyncDatabase**

## Index

### Constructors

* [constructor](c8ofullsyncdatabase.md#constructor)

### Properties

* [_id](c8ofullsyncdatabase.md#private-_id)
* [c8o](c8ofullsyncdatabase.md#private-c8o)
* [c8oFullSyncDatabaseUrl](c8ofullsyncdatabase.md#private-c8ofullsyncdatabaseurl)
* [database](c8ofullsyncdatabase.md#private-database)
* [databaseName](c8ofullsyncdatabase.md#private-databasename)
* [pullFullSyncReplication](c8ofullsyncdatabase.md#private-pullfullsyncreplication)
* [pushFullSyncReplication](c8ofullsyncdatabase.md#private-pushfullsyncreplication)
* [remotePouchHeader](c8ofullsyncdatabase.md#private-remotepouchheader)
* [remotedatabaseName](c8ofullsyncdatabase.md#private-remotedatabasename)
* [syncFullSyncReplication](c8ofullsyncdatabase.md#private-syncfullsyncreplication)
* [to_cancel](c8ofullsyncdatabase.md#private-to_cancel)

### Accessors

* [getdatabase](c8ofullsyncdatabase.md#getdatabase)
* [getdatabseName](c8ofullsyncdatabase.md#getdatabsename)

### Methods

* [cancelPullReplication](c8ofullsyncdatabase.md#cancelpullreplication)
* [cancelPushReplication](c8ofullsyncdatabase.md#cancelpushreplication)
* [cancelSyncReplication](c8ofullsyncdatabase.md#cancelsyncreplication)
* [checkResetBase](c8ofullsyncdatabase.md#checkresetbase)
* [deleteDB](c8ofullsyncdatabase.md#deletedb)
* [localDatabaseVersion](c8ofullsyncdatabase.md#localdatabaseversion)
* [remoteDatabaseVersion](c8ofullsyncdatabase.md#remotedatabaseversion)
* [resetMyBase](c8ofullsyncdatabase.md#resetmybase)
* [startAllReplications](c8ofullsyncdatabase.md#startallreplications)
* [startPullReplication](c8ofullsyncdatabase.md#startpullreplication)
* [startPushReplication](c8ofullsyncdatabase.md#startpushreplication)
* [startReplication](c8ofullsyncdatabase.md#private-startreplication)
* [startSync](c8ofullsyncdatabase.md#private-startsync)

## Constructors

###  constructor

\+ **new C8oFullSyncDatabase**(`c8o`: [C8oCore](c8ocore.md), `databaseName`: string, `fullSyncDatabases`: string, `localSuffix`: string, `localPrefix`: string): *[C8oFullSyncDatabase](c8ofullsyncdatabase.md)*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:49](https://github.com/convertigo/c8osdk-angular/blob/9ef7bf8/src/c8o/fullSyncDatabase.ts#L49)*

Creates a fullSync database with the specified name and its location.

**`throws`** C8oException Failed to get the fullSync database.

**Parameters:**

Name | Type |
------ | ------ |
`c8o` | [C8oCore](c8ocore.md) |
`databaseName` | string |
`fullSyncDatabases` | string |
`localSuffix` | string |
`localPrefix` | string |

**Returns:** *[C8oFullSyncDatabase](c8ofullsyncdatabase.md)*

## Properties

### `Private` _id

• **_id**: *any*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:48](https://github.com/convertigo/c8osdk-angular/blob/9ef7bf8/src/c8o/fullSyncDatabase.ts#L48)*

___

### `Private` c8o

• **c8o**: *[C8oCore](c8ocore.md)*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:20](https://github.com/convertigo/c8osdk-angular/blob/9ef7bf8/src/c8o/fullSyncDatabase.ts#L20)*

Used to log.

___

### `Private` c8oFullSyncDatabaseUrl

• **c8oFullSyncDatabaseUrl**: *string*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:29](https://github.com/convertigo/c8osdk-angular/blob/9ef7bf8/src/c8o/fullSyncDatabase.ts#L29)*

___

### `Private` database

• **database**: *any* =  null

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:33](https://github.com/convertigo/c8osdk-angular/blob/9ef7bf8/src/c8o/fullSyncDatabase.ts#L33)*

The fullSync Database instance.

___

### `Private` databaseName

• **databaseName**: *string*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:27](https://github.com/convertigo/c8osdk-angular/blob/9ef7bf8/src/c8o/fullSyncDatabase.ts#L27)*

The fullSync database name.

___

### `Private` pullFullSyncReplication

• **pullFullSyncReplication**: *[FullSyncReplication](fullsyncreplication.md)* =  new FullSyncReplication(true)

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:37](https://github.com/convertigo/c8osdk-angular/blob/9ef7bf8/src/c8o/fullSyncDatabase.ts#L37)*

Used to make pull replication (uploads changes from the local database to the remote one).

___

### `Private` pushFullSyncReplication

• **pushFullSyncReplication**: *[FullSyncReplication](fullsyncreplication.md)* =  new FullSyncReplication(false)

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:41](https://github.com/convertigo/c8osdk-angular/blob/9ef7bf8/src/c8o/fullSyncDatabase.ts#L41)*

Used to make push replication (downloads changes from the remote database to the local one).

___

### `Private` remotePouchHeader

• **remotePouchHeader**: *any*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:47](https://github.com/convertigo/c8osdk-angular/blob/9ef7bf8/src/c8o/fullSyncDatabase.ts#L47)*

___

### `Private` remotedatabaseName

• **remotedatabaseName**: *string*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:28](https://github.com/convertigo/c8osdk-angular/blob/9ef7bf8/src/c8o/fullSyncDatabase.ts#L28)*

___

### `Private` syncFullSyncReplication

• **syncFullSyncReplication**: *[FullSyncReplication](fullsyncreplication.md)* =  new FullSyncReplication()

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:45](https://github.com/convertigo/c8osdk-angular/blob/9ef7bf8/src/c8o/fullSyncDatabase.ts#L45)*

Used to make pull replication (uploads changes from the local database to the remote one).

___

### `Private` to_cancel

• **to_cancel**: *any[]* =  []

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:49](https://github.com/convertigo/c8osdk-angular/blob/9ef7bf8/src/c8o/fullSyncDatabase.ts#L49)*

## Accessors

###  getdatabase

• **get getdatabase**(): *any*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:685](https://github.com/convertigo/c8osdk-angular/blob/9ef7bf8/src/c8o/fullSyncDatabase.ts#L685)*

**Returns:** *any*

___

###  getdatabseName

• **get getdatabseName**(): *string*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:681](https://github.com/convertigo/c8osdk-angular/blob/9ef7bf8/src/c8o/fullSyncDatabase.ts#L681)*

**Returns:** *string*

## Methods

###  cancelPullReplication

▸ **cancelPullReplication**(): *void*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:712](https://github.com/convertigo/c8osdk-angular/blob/9ef7bf8/src/c8o/fullSyncDatabase.ts#L712)*

cancel Pull Replication

**Returns:** *void*

___

###  cancelPushReplication

▸ **cancelPushReplication**(): *void*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:721](https://github.com/convertigo/c8osdk-angular/blob/9ef7bf8/src/c8o/fullSyncDatabase.ts#L721)*

cancel Push Replication

**Returns:** *void*

___

###  cancelSyncReplication

▸ **cancelSyncReplication**(): *void*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:730](https://github.com/convertigo/c8osdk-angular/blob/9ef7bf8/src/c8o/fullSyncDatabase.ts#L730)*

cancel Sync Replication

**Returns:** *void*

___

###  checkResetBase

▸ **checkResetBase**(): *Promise‹void›*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:147](https://github.com/convertigo/c8osdk-angular/blob/9ef7bf8/src/c8o/fullSyncDatabase.ts#L147)*

**Returns:** *Promise‹void›*

___

###  deleteDB

▸ **deleteDB**(): *Promise‹any›*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:689](https://github.com/convertigo/c8osdk-angular/blob/9ef7bf8/src/c8o/fullSyncDatabase.ts#L689)*

**Returns:** *Promise‹any›*

___

###  localDatabaseVersion

▸ **localDatabaseVersion**(): *Promise‹any›*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:128](https://github.com/convertigo/c8osdk-angular/blob/9ef7bf8/src/c8o/fullSyncDatabase.ts#L128)*

**Returns:** *Promise‹any›*

___

###  remoteDatabaseVersion

▸ **remoteDatabaseVersion**(): *Promise‹unknown›*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:101](https://github.com/convertigo/c8osdk-angular/blob/9ef7bf8/src/c8o/fullSyncDatabase.ts#L101)*

**Returns:** *Promise‹unknown›*

___

###  resetMyBase

▸ **resetMyBase**(): *Promise‹void›*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:177](https://github.com/convertigo/c8osdk-angular/blob/9ef7bf8/src/c8o/fullSyncDatabase.ts#L177)*

**Returns:** *Promise‹void›*

___

###  startAllReplications

▸ **startAllReplications**(`parameters`: Object, `c8oResponseListener`: [C8oResponseListener](../interfaces/c8oresponselistener.md), `handler`: any, `id`: any, `mutex`: any): *Promise‹any›*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:200](https://github.com/convertigo/c8osdk-angular/blob/9ef7bf8/src/c8o/fullSyncDatabase.ts#L200)*

Start pull and push replications.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`parameters` | Object | - |
`c8oResponseListener` | [C8oResponseListener](../interfaces/c8oresponselistener.md) | - |
`handler` | any | - |
`id` | any |  null |
`mutex` | any |  null |

**Returns:** *Promise‹any›*

Promise<any>

___

###  startPullReplication

▸ **startPullReplication**(`parameters`: Object, `c8oResponseListener`: [C8oResponseListener](../interfaces/c8oresponselistener.md), `handler`: any, `id`: any, `mutex`: any): *Promise‹any›*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:213](https://github.com/convertigo/c8osdk-angular/blob/9ef7bf8/src/c8o/fullSyncDatabase.ts#L213)*

Start pull replication.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`parameters` | Object | - |
`c8oResponseListener` | [C8oResponseListener](../interfaces/c8oresponselistener.md) | - |
`handler` | any | - |
`id` | any |  null |
`mutex` | any |  null |

**Returns:** *Promise‹any›*

Promise<any>

___

###  startPushReplication

▸ **startPushReplication**(`parameters`: Object, `c8oResponseListener`: [C8oResponseListener](../interfaces/c8oresponselistener.md), `handler`: any, `id`: any, `mutex`: any): *Promise‹any›*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:226](https://github.com/convertigo/c8osdk-angular/blob/9ef7bf8/src/c8o/fullSyncDatabase.ts#L226)*

Start push replication.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`parameters` | Object | - |
`c8oResponseListener` | [C8oResponseListener](../interfaces/c8oresponselistener.md) | - |
`handler` | any | - |
`id` | any |  null |
`mutex` | any |  null |

**Returns:** *Promise‹any›*

Promise<any>

___

### `Private` startReplication

▸ **startReplication**(`fullSyncReplication`: [FullSyncReplication](fullsyncreplication.md), `parameters`: Object, `c8oResponseListener`: [C8oResponseListener](../interfaces/c8oresponselistener.md), `handler`: any, `id`: any, `mutex`: any): *Promise‹any›*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:485](https://github.com/convertigo/c8osdk-angular/blob/9ef7bf8/src/c8o/fullSyncDatabase.ts#L485)*

Starts a replication taking into account parameters.<br/>
This action does not directly return something but setup a callback raised when the replication raises change events.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`fullSyncReplication` | [FullSyncReplication](fullsyncreplication.md) | - | - |
`parameters` | Object | - |   |
`c8oResponseListener` | [C8oResponseListener](../interfaces/c8oresponselistener.md) | - | - |
`handler` | any | - | - |
`id` | any |  null | - |
`mutex` | any |  null | - |

**Returns:** *Promise‹any›*

___

### `Private` startSync

▸ **startSync**(`fullSyncReplication`: [FullSyncReplication](fullsyncreplication.md), `parameters`: Object, `c8oResponseListener`: [C8oResponseListener](../interfaces/c8oresponselistener.md), `handler`: any, `id`: any, `mutex`: any): *Promise‹any›*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:235](https://github.com/convertigo/c8osdk-angular/blob/9ef7bf8/src/c8o/fullSyncDatabase.ts#L235)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`fullSyncReplication` | [FullSyncReplication](fullsyncreplication.md) | - |
`parameters` | Object | - |
`c8oResponseListener` | [C8oResponseListener](../interfaces/c8oresponselistener.md) | - |
`handler` | any | - |
`id` | any |  null |
`mutex` | any |  null |

**Returns:** *Promise‹any›*
