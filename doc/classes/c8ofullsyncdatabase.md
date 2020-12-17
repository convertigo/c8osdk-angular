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

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:50](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/fullSyncDatabase.ts#L50)*

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

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:49](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/fullSyncDatabase.ts#L49)*

___

### `Private` c8o

• **c8o**: *[C8oCore](c8ocore.md)*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:21](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/fullSyncDatabase.ts#L21)*

Used to log.

___

### `Private` c8oFullSyncDatabaseUrl

• **c8oFullSyncDatabaseUrl**: *string*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:30](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/fullSyncDatabase.ts#L30)*

___

### `Private` database

• **database**: *any* =  null

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:34](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/fullSyncDatabase.ts#L34)*

The fullSync Database instance.

___

### `Private` databaseName

• **databaseName**: *string*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:28](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/fullSyncDatabase.ts#L28)*

The fullSync database name.

___

### `Private` pullFullSyncReplication

• **pullFullSyncReplication**: *[FullSyncReplication](fullsyncreplication.md)* =  new FullSyncReplication(true)

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:38](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/fullSyncDatabase.ts#L38)*

Used to make pull replication (uploads changes from the local database to the remote one).

___

### `Private` pushFullSyncReplication

• **pushFullSyncReplication**: *[FullSyncReplication](fullsyncreplication.md)* =  new FullSyncReplication(false)

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:42](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/fullSyncDatabase.ts#L42)*

Used to make push replication (downloads changes from the remote database to the local one).

___

### `Private` remotePouchHeader

• **remotePouchHeader**: *any*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:48](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/fullSyncDatabase.ts#L48)*

___

### `Private` remotedatabaseName

• **remotedatabaseName**: *string*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:29](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/fullSyncDatabase.ts#L29)*

___

### `Private` syncFullSyncReplication

• **syncFullSyncReplication**: *[FullSyncReplication](fullsyncreplication.md)* =  new FullSyncReplication()

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:46](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/fullSyncDatabase.ts#L46)*

Used to make pull replication (uploads changes from the local database to the remote one).

___

### `Private` to_cancel

• **to_cancel**: *any[]* =  []

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:50](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/fullSyncDatabase.ts#L50)*

## Accessors

###  getdatabase

• **get getdatabase**(): *any*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:693](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/fullSyncDatabase.ts#L693)*

**Returns:** *any*

___

###  getdatabseName

• **get getdatabseName**(): *string*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:689](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/fullSyncDatabase.ts#L689)*

**Returns:** *string*

## Methods

###  cancelPullReplication

▸ **cancelPullReplication**(): *void*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:720](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/fullSyncDatabase.ts#L720)*

cancel Pull Replication

**Returns:** *void*

___

###  cancelPushReplication

▸ **cancelPushReplication**(): *void*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:729](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/fullSyncDatabase.ts#L729)*

cancel Push Replication

**Returns:** *void*

___

###  cancelSyncReplication

▸ **cancelSyncReplication**(): *void*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:738](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/fullSyncDatabase.ts#L738)*

cancel Sync Replication

**Returns:** *void*

___

###  checkResetBase

▸ **checkResetBase**(): *Promise‹void›*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:155](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/fullSyncDatabase.ts#L155)*

**Returns:** *Promise‹void›*

___

###  deleteDB

▸ **deleteDB**(): *Promise‹any›*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:697](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/fullSyncDatabase.ts#L697)*

**Returns:** *Promise‹any›*

___

###  localDatabaseVersion

▸ **localDatabaseVersion**(): *Promise‹any›*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:136](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/fullSyncDatabase.ts#L136)*

**Returns:** *Promise‹any›*

___

###  remoteDatabaseVersion

▸ **remoteDatabaseVersion**(): *Promise‹unknown›*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:109](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/fullSyncDatabase.ts#L109)*

**Returns:** *Promise‹unknown›*

___

###  resetMyBase

▸ **resetMyBase**(): *Promise‹void›*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:185](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/fullSyncDatabase.ts#L185)*

**Returns:** *Promise‹void›*

___

###  startAllReplications

▸ **startAllReplications**(`parameters`: Object, `c8oResponseListener`: [C8oResponseListener](../interfaces/c8oresponselistener.md), `handler`: any, `id`: any, `mutex`: any): *Promise‹any›*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:208](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/fullSyncDatabase.ts#L208)*

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

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:221](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/fullSyncDatabase.ts#L221)*

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

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:234](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/fullSyncDatabase.ts#L234)*

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

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:493](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/fullSyncDatabase.ts#L493)*

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

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:243](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/fullSyncDatabase.ts#L243)*

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
