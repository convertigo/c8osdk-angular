[c8osdkjscore](../README.md) › [FullSyncPolicy](fullsyncpolicy.md)

# Class: FullSyncPolicy

## Hierarchy

* **FullSyncPolicy**

## Index

### Constructors

* [constructor](fullsyncpolicy.md#constructor)

### Properties

* [action](fullsyncpolicy.md#action)
* [value](fullsyncpolicy.md#value)
* [CREATE](fullsyncpolicy.md#static-create)
* [MERGE](fullsyncpolicy.md#static-merge)
* [NONE](fullsyncpolicy.md#static-none)
* [OVERRIDE](fullsyncpolicy.md#static-override)

### Methods

* [getFullSyncPolicy](fullsyncpolicy.md#static-getfullsyncpolicy)
* [values](fullsyncpolicy.md#static-values)

## Constructors

###  constructor

\+ **new FullSyncPolicy**(`value`: string, `action`: function): *[FullSyncPolicy](fullsyncpolicy.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:918](https://github.com/convertigo/c8osdk-angular/blob/8ef5416/src/c8o/c8oCore.ts#L918)*

**Parameters:**

▪ **value**: *string*

▪ **action**: *function*

▸ (`_Object`: any, `Object`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`_Object` | any |
`Object` | any |

**Returns:** *[FullSyncPolicy](fullsyncpolicy.md)*

## Properties

###  action

• **action**: *function*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:918](https://github.com/convertigo/c8osdk-angular/blob/8ef5416/src/c8o/c8oCore.ts#L918)*

#### Type declaration:

▸ (`PouchDB`: any, `Object`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`PouchDB` | any |
`Object` | any |

___

###  value

• **value**: *string*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:917](https://github.com/convertigo/c8osdk-angular/blob/8ef5416/src/c8o/c8oCore.ts#L917)*

___

### `Static` CREATE

▪ **CREATE**: *[FullSyncPolicy](fullsyncpolicy.md)* =  new FullSyncPolicy(C8oCore.FS_POLICY_CREATE, (database: any, newProperties: Object) => {
        return new Promise((resolve, reject) => {
            try {
                delete newProperties[C8oFullSync.FULL_SYNC__ID];
                delete newProperties[C8oFullSync.FULL_SYNC__REV];
                database.post(newProperties).then((createdDocument) => {
                    resolve(createdDocument);
                });
            } catch (error) {
                reject(new C8oCouchBaseLiteException(C8oExceptionMessage.fullSyncPutProperties(newProperties), error));
            }
        });
    })

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:827](https://github.com/convertigo/c8osdk-angular/blob/8ef5416/src/c8o/c8oCore.ts#L827)*

___

### `Static` MERGE

▪ **MERGE**: *[FullSyncPolicy](fullsyncpolicy.md)* =  new FullSyncPolicy(C8oCore.FS_POLICY_MERGE, (database: any, newProperties: Object) => {
        return new Promise((resolve, reject) => {
            try {
                const documentId: string = C8oUtilsCore.getParameterStringValue(newProperties, C8oFullSync.FULL_SYNC__ID, false);
                // delete newProperties[C8oFullSync.FULL_SYNC__ID];
                delete newProperties[C8oFullSync.FULL_SYNC__REV];

                if (documentId == null) {
                    database.put(newProperties).then((createdDocument) => {
                        resolve(createdDocument);
                    }).catch((error) => {
                        reject(new C8oCouchBaseLiteException(C8oExceptionMessage.fullSyncPutProperties(newProperties), error));
                    });
                } else {
                    database.get(documentId).then((doc) => {
                        C8oFullSyncCbl.mergeProperties(newProperties, doc);
                        database.put(newProperties).then((createdDocument) => {
                            resolve(createdDocument);
                        })
                            .catch((error) => {
                                reject(new C8oCouchBaseLiteException(C8oExceptionMessage.fullSyncPutProperties(newProperties), error));
                            });
                    }).catch((error) => {
                        if (error.status === 404) {
                            database.put(newProperties).then((createdDocument) => {
                                resolve(createdDocument);
                            })
                                .catch((error) => {
                                    reject(new C8oCouchBaseLiteException(C8oExceptionMessage.fullSyncPutProperties(newProperties), error));
                                });
                        } else {
                            reject(new C8oCouchBaseLiteException(C8oExceptionMessage.fullSyncPutProperties(newProperties), error));
                        }
                    });
                }
            } catch (error) {
                reject(new C8oCouchBaseLiteException(C8oExceptionMessage.fullSyncPutProperties(newProperties), error));
            }
        });
    })

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:876](https://github.com/convertigo/c8osdk-angular/blob/8ef5416/src/c8o/c8oCore.ts#L876)*

___

### `Static` NONE

▪ **NONE**: *[FullSyncPolicy](fullsyncpolicy.md)* =  new FullSyncPolicy(C8oCore.FS_POLICY_NONE, (database: any, newProperties: Object) => {
        let documentId = C8oUtilsCore.getParameterStringValue(newProperties, C8oFullSync.FULL_SYNC__ID, false);
        if (documentId === "") {
            documentId = null;
        }
        return new Promise((resolve, reject) => {
            database.post(newProperties).then((createdDocument) => {
                resolve(createdDocument);
            }).catch((error) => {
                reject(new C8oCouchBaseLiteException(C8oExceptionMessage.fullSyncPutProperties(newProperties), error));
            });
        });
    })

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:813](https://github.com/convertigo/c8osdk-angular/blob/8ef5416/src/c8o/c8oCore.ts#L813)*

___

### `Static` OVERRIDE

▪ **OVERRIDE**: *[FullSyncPolicy](fullsyncpolicy.md)* =  new FullSyncPolicy(C8oCore.FS_POLICY_OVERRIDE, (database: any, newProperties: Object) => {
        return new Promise((resolve, reject) => {
            try {
                const documentId: string = C8oUtilsCore.getParameterStringValue(newProperties, C8oFullSync.FULL_SYNC__ID, false);
                delete newProperties[C8oFullSync.FULL_SYNC__ID];
                delete newProperties[C8oFullSync.FULL_SYNC__REV];
                if (documentId == null) {
                    database.post(newProperties).then((createdDocument) => {
                        resolve(createdDocument);
                    });
                } else {
                    database.get(documentId).then((doc) => {
                        newProperties["_id"] = documentId;
                        newProperties["_rev"] = doc._rev;
                        return database.put(newProperties);
                    }).then((createdDocument) => {
                        resolve(createdDocument);
                    }).catch((error) => {
                        if (error.status === "404" || error.status === 404) {
                            newProperties["_id"] = documentId;
                            return database.post(newProperties);
                        } else {
                            reject(error);
                        }
                    },
                    ).then((createdDocument) => {
                        resolve(createdDocument);
                    });
                }
            } catch (error) {
                reject(new C8oCouchBaseLiteException(C8oExceptionMessage.fullSyncPutProperties(newProperties), error));
            }
        });
    })

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:841](https://github.com/convertigo/c8osdk-angular/blob/8ef5416/src/c8o/c8oCore.ts#L841)*

## Methods

### `Static` getFullSyncPolicy

▸ **getFullSyncPolicy**(`value`: string): *[FullSyncPolicy](fullsyncpolicy.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:930](https://github.com/convertigo/c8osdk-angular/blob/8ef5416/src/c8o/c8oCore.ts#L930)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[FullSyncPolicy](fullsyncpolicy.md)*

___

### `Static` values

▸ **values**(): *[FullSyncPolicy](fullsyncpolicy.md)[]*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:926](https://github.com/convertigo/c8osdk-angular/blob/8ef5416/src/c8o/c8oCore.ts#L926)*

**Returns:** *[FullSyncPolicy](fullsyncpolicy.md)[]*
