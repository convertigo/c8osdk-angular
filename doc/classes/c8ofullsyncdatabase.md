[c8osdkjscore](../README.md) › [C8oFullSyncDatabase](c8ofullsyncdatabase.md)

# Class: C8oFullSyncDatabase

Created by charlesg on 10/01/2017.

## Hierarchy

* **C8oFullSyncDatabase**

## Index

### Constructors

* [constructor](c8ofullsyncdatabase.md#constructor)

### Properties

* [c8o](c8ofullsyncdatabase.md#private-c8o)
* [c8oFullSyncDatabaseUrl](c8ofullsyncdatabase.md#private-c8ofullsyncdatabaseurl)
* [database](c8ofullsyncdatabase.md#private-database)
* [databaseName](c8ofullsyncdatabase.md#private-databasename)
* [pullFullSyncReplication](c8ofullsyncdatabase.md#private-pullfullsyncreplication)
* [pushFullSyncReplication](c8ofullsyncdatabase.md#private-pushfullsyncreplication)
* [remotePouchHeader](c8ofullsyncdatabase.md#private-remotepouchheader)
* [remotedatabaseName](c8ofullsyncdatabase.md#private-remotedatabasename)
* [syncFullSyncReplication](c8ofullsyncdatabase.md#private-syncfullsyncreplication)

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

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:45](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/fullSyncDatabase.ts#L45)*

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

### `Private` c8o

• **c8o**: *[C8oCore](c8ocore.md)*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:18](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/fullSyncDatabase.ts#L18)*

Used to log.

___

### `Private` c8oFullSyncDatabaseUrl

• **c8oFullSyncDatabaseUrl**: *string*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:27](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/fullSyncDatabase.ts#L27)*

___

### `Private` database

• **database**: *any* =  null

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:31](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/fullSyncDatabase.ts#L31)*

The fullSync Database instance.

___

### `Private` databaseName

• **databaseName**: *string*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:25](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/fullSyncDatabase.ts#L25)*

The fullSync database name.

___

### `Private` pullFullSyncReplication

• **pullFullSyncReplication**: *[FullSyncReplication](fullsyncreplication.md)* =  new FullSyncReplication(true)

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:35](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/fullSyncDatabase.ts#L35)*

Used to make pull replication (uploads changes from the local database to the remote one).

___

### `Private` pushFullSyncReplication

• **pushFullSyncReplication**: *[FullSyncReplication](fullsyncreplication.md)* =  new FullSyncReplication(false)

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:39](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/fullSyncDatabase.ts#L39)*

Used to make push replication (downloads changes from the remote database to the local one).

___

### `Private` remotePouchHeader

• **remotePouchHeader**: *any*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:45](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/fullSyncDatabase.ts#L45)*

___

### `Private` remotedatabaseName

• **remotedatabaseName**: *string*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:26](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/fullSyncDatabase.ts#L26)*

___

### `Private` syncFullSyncReplication

• **syncFullSyncReplication**: *[FullSyncReplication](fullsyncreplication.md)* =  new FullSyncReplication()

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:43](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/fullSyncDatabase.ts#L43)*

Used to make pull replication (uploads changes from the local database to the remote one).

## Accessors

###  getdatabase

• **get getdatabase**(): *any*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:616](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/fullSyncDatabase.ts#L616)*

**Returns:** *any*

___

###  getdatabseName

• **get getdatabseName**(): *string*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:612](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/fullSyncDatabase.ts#L612)*

**Returns:** *string*

## Methods

###  cancelPullReplication

▸ **cancelPullReplication**(): *void*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:643](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/fullSyncDatabase.ts#L643)*

cancel Pull Replication

**Returns:** *void*

___

###  cancelPushReplication

▸ **cancelPushReplication**(): *void*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:652](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/fullSyncDatabase.ts#L652)*

cancel Push Replication

**Returns:** *void*

___

###  cancelSyncReplication

▸ **cancelSyncReplication**(): *void*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:661](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/fullSyncDatabase.ts#L661)*

cancel Sync Replication

**Returns:** *void*

___

###  checkResetBase

▸ **checkResetBase**(): *Promise‹void›*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:145](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/fullSyncDatabase.ts#L145)*

**Returns:** *Promise‹void›*

___

###  deleteDB

▸ **deleteDB**(): *Promise‹any›*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:620](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/fullSyncDatabase.ts#L620)*

**Returns:** *Promise‹any›*

___

###  localDatabaseVersion

▸ **localDatabaseVersion**(): *Promise‹any›*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:126](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/fullSyncDatabase.ts#L126)*

**Returns:** *Promise‹any›*

___

###  remoteDatabaseVersion

▸ **remoteDatabaseVersion**(): *Promise‹unknown›*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:99](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/fullSyncDatabase.ts#L99)*

**Returns:** *Promise‹unknown›*

___

###  resetMyBase

▸ **resetMyBase**(): *Promise‹void›*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:175](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/fullSyncDatabase.ts#L175)*

**Returns:** *Promise‹void›*

___

###  startAllReplications

▸ **startAllReplications**(`parameters`: Object, `c8oResponseListener`: [C8oResponseListener](../interfaces/c8oresponselistener.md), `handler`: any): *Promise‹any›*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:198](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/fullSyncDatabase.ts#L198)*

Start pull and push replications.

**Parameters:**

Name | Type |
------ | ------ |
`parameters` | Object |
`c8oResponseListener` | [C8oResponseListener](../interfaces/c8oresponselistener.md) |
`handler` | any |

**Returns:** *Promise‹any›*

Promise<any>

___

###  startPullReplication

▸ **startPullReplication**(`parameters`: Object, `c8oResponseListener`: [C8oResponseListener](../interfaces/c8oresponselistener.md), `handler`: any): *Promise‹any›*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:210](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/fullSyncDatabase.ts#L210)*

Start pull replication.

**Parameters:**

Name | Type |
------ | ------ |
`parameters` | Object |
`c8oResponseListener` | [C8oResponseListener](../interfaces/c8oresponselistener.md) |
`handler` | any |

**Returns:** *Promise‹any›*

Promise<any>

___

###  startPushReplication

▸ **startPushReplication**(`parameters`: Object, `c8oResponseListener`: [C8oResponseListener](../interfaces/c8oresponselistener.md), `handler`: any): *Promise‹any›*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:222](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/fullSyncDatabase.ts#L222)*

Start push replication.

**Parameters:**

Name | Type |
------ | ------ |
`parameters` | Object |
`c8oResponseListener` | [C8oResponseListener](../interfaces/c8oresponselistener.md) |
`handler` | any |

**Returns:** *Promise‹any›*

Promise<any>

___

### `Private` startReplication

▸ **startReplication**(`fullSyncReplication`: [FullSyncReplication](fullsyncreplication.md), `parameters`: Object, `c8oResponseListener`: [C8oResponseListener](../interfaces/c8oresponselistener.md), `handler`: any): *Promise‹any›*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:450](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/fullSyncDatabase.ts#L450)*

Starts a replication taking into account parameters.<br/>
This action does not directly return something but setup a callback raised when the replication raises change events.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fullSyncReplication` | [FullSyncReplication](fullsyncreplication.md) | - |
`parameters` | Object |   |
`c8oResponseListener` | [C8oResponseListener](../interfaces/c8oresponselistener.md) | - |
`handler` | any | - |

**Returns:** *Promise‹any›*

___

### `Private` startSync

▸ **startSync**(`fullSyncReplication`: [FullSyncReplication](fullsyncreplication.md), `parameters`: Object, `c8oResponseListener`: [C8oResponseListener](../interfaces/c8oresponselistener.md), `handler`: any): *Promise‹any›*

*Defined in [c8osdk-js-core/src/c8o/fullSyncDatabase.ts:230](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/fullSyncDatabase.ts#L230)*

**Parameters:**

Name | Type |
------ | ------ |
`fullSyncReplication` | [FullSyncReplication](fullsyncreplication.md) |
`parameters` | Object |
`c8oResponseListener` | [C8oResponseListener](../interfaces/c8oresponselistener.md) |
`handler` | any |

**Returns:** *Promise‹any›*
