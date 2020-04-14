[c8osdkjscore](../README.md) › [C8oAlldocsLocal](c8oalldocslocal.md)

# Class: C8oAlldocsLocal

## Hierarchy

* **C8oAlldocsLocal**

## Index

### Constructors

* [constructor](c8oalldocslocal.md#constructor)

### Properties

* [ATTACH_STORE](c8oalldocslocal.md#private-attach_store)
* [DB_VERSION](c8oalldocslocal.md#private-db_version)
* [LOCAL_STORE](c8oalldocslocal.md#private-local_store)
* [c8o](c8oalldocslocal.md#private-c8o)

### Methods

* [allDocsKeys](c8oalldocslocal.md#private-alldocskeys)
* [allDocsKeysParse](c8oalldocslocal.md#private-alldocskeysparse)
* [alldocs](c8oalldocslocal.md#alldocs)
* [createKeyRange](c8oalldocslocal.md#private-createkeyrange)
* [decodeMetadata](c8oalldocslocal.md#private-decodemetadata)
* [doOpenBase](c8oalldocslocal.md#private-doopenbase)
* [getAll](c8oalldocslocal.md#private-getall)
* [idbAllDocs](c8oalldocslocal.md#private-idballdocs)
* [isRemote](c8oalldocslocal.md#private-isremote)
* [openBase](c8oalldocslocal.md#private-openbase)
* [openTransactionSafely](c8oalldocslocal.md#private-opentransactionsafely)
* [restaureDb](c8oalldocslocal.md#private-restauredb)
* [runBatchedCursor](c8oalldocslocal.md#private-runbatchedcursor)

## Constructors

###  constructor

\+ **new C8oAlldocsLocal**(`c8o`: [C8oCore](c8ocore.md)): *[C8oAlldocsLocal](c8oalldocslocal.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oAlldocsLocal.ts:4](https://github.com/convertigo/c8osdk-angular/blob/426f1a2/src/c8o/c8oAlldocsLocal.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`c8o` | [C8oCore](c8ocore.md) |

**Returns:** *[C8oAlldocsLocal](c8oalldocslocal.md)*

## Properties

### `Private` ATTACH_STORE

• **ATTACH_STORE**: *string* = "attach-store"

*Defined in [c8osdk-js-core/src/c8o/c8oAlldocsLocal.ts:10](https://github.com/convertigo/c8osdk-angular/blob/426f1a2/src/c8o/c8oAlldocsLocal.ts#L10)*

___

### `Private` DB_VERSION

• **DB_VERSION**: *number* = 5

*Defined in [c8osdk-js-core/src/c8o/c8oAlldocsLocal.ts:8](https://github.com/convertigo/c8osdk-angular/blob/426f1a2/src/c8o/c8oAlldocsLocal.ts#L8)*

___

### `Private` LOCAL_STORE

• **LOCAL_STORE**: *string* = "local-store"

*Defined in [c8osdk-js-core/src/c8o/c8oAlldocsLocal.ts:9](https://github.com/convertigo/c8osdk-angular/blob/426f1a2/src/c8o/c8oAlldocsLocal.ts#L9)*

___

### `Private` c8o

• **c8o**: *[C8oCore](c8ocore.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oAlldocsLocal.ts:6](https://github.com/convertigo/c8osdk-angular/blob/426f1a2/src/c8o/c8oAlldocsLocal.ts#L6)*

## Methods

### `Private` allDocsKeys

▸ **allDocsKeys**(`keys`: any, `docStore`: any, `onBatch`: any): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oAlldocsLocal.ts:372](https://github.com/convertigo/c8osdk-angular/blob/426f1a2/src/c8o/c8oAlldocsLocal.ts#L372)*

**Parameters:**

Name | Type |
------ | ------ |
`keys` | any |
`docStore` | any |
`onBatch` | any |

**Returns:** *void*

___

### `Private` allDocsKeysParse

▸ **allDocsKeysParse**(`opts`: any): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oAlldocsLocal.ts:426](https://github.com/convertigo/c8osdk-angular/blob/426f1a2/src/c8o/c8oAlldocsLocal.ts#L426)*

**Parameters:**

Name | Type |
------ | ------ |
`opts` | any |

**Returns:** *void*

___

###  alldocs

▸ **alldocs**(`opts`: any, `db`: any): *Promise‹any›*

*Defined in [c8osdk-js-core/src/c8o/c8oAlldocsLocal.ts:12](https://github.com/convertigo/c8osdk-angular/blob/426f1a2/src/c8o/c8oAlldocsLocal.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`opts` | any |
`db` | any |

**Returns:** *Promise‹any›*

___

### `Private` createKeyRange

▸ **createKeyRange**(`start`: any, `end`: any, `inclusiveEnd`: any, `key`: any, `descending`: any): *IDBKeyRange | object*

*Defined in [c8osdk-js-core/src/c8o/c8oAlldocsLocal.ts:439](https://github.com/convertigo/c8osdk-angular/blob/426f1a2/src/c8o/c8oAlldocsLocal.ts#L439)*

**Parameters:**

Name | Type |
------ | ------ |
`start` | any |
`end` | any |
`inclusiveEnd` | any |
`key` | any |
`descending` | any |

**Returns:** *IDBKeyRange | object*

___

### `Private` decodeMetadata

▸ **decodeMetadata**(`storedObject`: any): *object*

*Defined in [c8osdk-js-core/src/c8o/c8oAlldocsLocal.ts:392](https://github.com/convertigo/c8osdk-angular/blob/426f1a2/src/c8o/c8oAlldocsLocal.ts#L392)*

**Parameters:**

Name | Type |
------ | ------ |
`storedObject` | any |

**Returns:** *object*

___

### `Private` doOpenBase

▸ **doOpenBase**(`DB_NAME`: any, `resolve`: any, `reject`: any): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oAlldocsLocal.ts:71](https://github.com/convertigo/c8osdk-angular/blob/426f1a2/src/c8o/c8oAlldocsLocal.ts#L71)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`DB_NAME` | any | - |
`resolve` | any |  null |
`reject` | any |  null |

**Returns:** *void*

___

### `Private` getAll

▸ **getAll**(`objectStore`: any, `keyRange`: any, `onSuccess`: any): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oAlldocsLocal.ts:346](https://github.com/convertigo/c8osdk-angular/blob/426f1a2/src/c8o/c8oAlldocsLocal.ts#L346)*

**Parameters:**

Name | Type |
------ | ------ |
`objectStore` | any |
`keyRange` | any |
`onSuccess` | any |

**Returns:** *void*

___

### `Private` idbAllDocs

▸ **idbAllDocs**(`opts`: any, `callback`: any, `DB_NAME`: any): *Promise‹any›*

*Defined in [c8osdk-js-core/src/c8o/c8oAlldocsLocal.ts:128](https://github.com/convertigo/c8osdk-angular/blob/426f1a2/src/c8o/c8oAlldocsLocal.ts#L128)*

**Parameters:**

Name | Type |
------ | ------ |
`opts` | any |
`callback` | any |
`DB_NAME` | any |

**Returns:** *Promise‹any›*

___

### `Private` isRemote

▸ **isRemote**(`db`: any): *any*

*Defined in [c8osdk-js-core/src/c8o/c8oAlldocsLocal.ts:414](https://github.com/convertigo/c8osdk-angular/blob/426f1a2/src/c8o/c8oAlldocsLocal.ts#L414)*

**Parameters:**

Name | Type |
------ | ------ |
`db` | any |

**Returns:** *any*

___

### `Private` openBase

▸ **openBase**(`DB_NAME`: any, `resolve`: any, `reject`: any): *Promise‹unknown›*

*Defined in [c8osdk-js-core/src/c8o/c8oAlldocsLocal.ts:62](https://github.com/convertigo/c8osdk-angular/blob/426f1a2/src/c8o/c8oAlldocsLocal.ts#L62)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`DB_NAME` | any | - |
`resolve` | any |  null |
`reject` | any |  null |

**Returns:** *Promise‹unknown›*

___

### `Private` openTransactionSafely

▸ **openTransactionSafely**(`idb`: any, `stores`: any, `mode`: any): *object | object*

*Defined in [c8osdk-js-core/src/c8o/c8oAlldocsLocal.ts:402](https://github.com/convertigo/c8osdk-angular/blob/426f1a2/src/c8o/c8oAlldocsLocal.ts#L402)*

**Parameters:**

Name | Type |
------ | ------ |
`idb` | any |
`stores` | any |
`mode` | any |

**Returns:** *object | object*

___

### `Private` restaureDb

▸ **restaureDb**(`DB_NAME`: any): *Promise‹unknown›*

*Defined in [c8osdk-js-core/src/c8o/c8oAlldocsLocal.ts:98](https://github.com/convertigo/c8osdk-angular/blob/426f1a2/src/c8o/c8oAlldocsLocal.ts#L98)*

**Parameters:**

Name | Type |
------ | ------ |
`DB_NAME` | any |

**Returns:** *Promise‹unknown›*

___

### `Private` runBatchedCursor

▸ **runBatchedCursor**(`objectStore`: any, `keyRange`: any, `descending`: any, `batchSize`: any, `onBatch`: any): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oAlldocsLocal.ts:267](https://github.com/convertigo/c8osdk-angular/blob/426f1a2/src/c8o/c8oAlldocsLocal.ts#L267)*

**Parameters:**

Name | Type |
------ | ------ |
`objectStore` | any |
`keyRange` | any |
`descending` | any |
`batchSize` | any |
`onBatch` | any |

**Returns:** *void*
