[c8osdkjscore](../README.md) › [FullSyncRequestParameter](fullsyncrequestparameter.md)

# Class: FullSyncRequestParameter

## Hierarchy

* **FullSyncRequestParameter**

## Index

### Constructors

* [constructor](fullsyncrequestparameter.md#private-constructor)

### Properties

* [_name](fullsyncrequestparameter.md#private-_name)
* [_type](fullsyncrequestparameter.md#private-_type)
* [DESCENDING](fullsyncrequestparameter.md#static-descending)
* [ENDKEY](fullsyncrequestparameter.md#static-endkey)
* [ENDKEY_DOCID](fullsyncrequestparameter.md#static-endkey_docid)
* [GROUP](fullsyncrequestparameter.md#static-group)
* [GROUP_LEVEL](fullsyncrequestparameter.md#static-group_level)
* [INCLUDE_DELETED](fullsyncrequestparameter.md#static-include_deleted)
* [INCLUDE_DOCS](fullsyncrequestparameter.md#static-include_docs)
* [INDEX_UPDATE_MODE](fullsyncrequestparameter.md#static-index_update_mode)
* [KEY](fullsyncrequestparameter.md#static-key)
* [KEYS](fullsyncrequestparameter.md#static-keys)
* [LIMIT](fullsyncrequestparameter.md#static-limit)
* [REDUCE](fullsyncrequestparameter.md#static-reduce)
* [SKIP](fullsyncrequestparameter.md#static-skip)
* [STARTKEY](fullsyncrequestparameter.md#static-startkey)
* [STARTKEY_DOCID](fullsyncrequestparameter.md#static-startkey_docid)

### Accessors

* [name](fullsyncrequestparameter.md#name)
* [type](fullsyncrequestparameter.md#type)

### Methods

* [getFullSyncRequestParameter](fullsyncrequestparameter.md#static-getfullsyncrequestparameter)
* [values](fullsyncrequestparameter.md#static-values)

## Constructors

### `Private` constructor

\+ **new FullSyncRequestParameter**(`name`: string, `type`: string): *[FullSyncRequestParameter](fullsyncrequestparameter.md)*

*Defined in [c8osdk-js-core/src/c8o/FullSyncRequestParameter.ts:3](https://github.com/convertigo/c8osdk-angular/blob/ffab8e3/src/c8o/FullSyncRequestParameter.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`type` | string |

**Returns:** *[FullSyncRequestParameter](fullsyncrequestparameter.md)*

## Properties

### `Private` _name

• **_name**: *string*

*Defined in [c8osdk-js-core/src/c8o/FullSyncRequestParameter.ts:2](https://github.com/convertigo/c8osdk-angular/blob/ffab8e3/src/c8o/FullSyncRequestParameter.ts#L2)*

___

### `Private` _type

• **_type**: *string*

*Defined in [c8osdk-js-core/src/c8o/FullSyncRequestParameter.ts:3](https://github.com/convertigo/c8osdk-angular/blob/ffab8e3/src/c8o/FullSyncRequestParameter.ts#L3)*

___

### `Static` DESCENDING

▪ **DESCENDING**: *[FullSyncRequestParameter](fullsyncrequestparameter.md)* =  new FullSyncRequestParameter("descending", "boolean")

*Defined in [c8osdk-js-core/src/c8o/FullSyncRequestParameter.ts:17](https://github.com/convertigo/c8osdk-angular/blob/ffab8e3/src/c8o/FullSyncRequestParameter.ts#L17)*

___

### `Static` ENDKEY

▪ **ENDKEY**: *[FullSyncRequestParameter](fullsyncrequestparameter.md)* =  new FullSyncRequestParameter("endkey", "Object")

*Defined in [c8osdk-js-core/src/c8o/FullSyncRequestParameter.ts:18](https://github.com/convertigo/c8osdk-angular/blob/ffab8e3/src/c8o/FullSyncRequestParameter.ts#L18)*

___

### `Static` ENDKEY_DOCID

▪ **ENDKEY_DOCID**: *[FullSyncRequestParameter](fullsyncrequestparameter.md)* =  new FullSyncRequestParameter("endkey_docid", "string")

*Defined in [c8osdk-js-core/src/c8o/FullSyncRequestParameter.ts:19](https://github.com/convertigo/c8osdk-angular/blob/ffab8e3/src/c8o/FullSyncRequestParameter.ts#L19)*

___

### `Static` GROUP

▪ **GROUP**: *[FullSyncRequestParameter](fullsyncrequestparameter.md)* =  new FullSyncRequestParameter("group", "boolean")

*Defined in [c8osdk-js-core/src/c8o/FullSyncRequestParameter.ts:28](https://github.com/convertigo/c8osdk-angular/blob/ffab8e3/src/c8o/FullSyncRequestParameter.ts#L28)*

___

### `Static` GROUP_LEVEL

▪ **GROUP_LEVEL**: *[FullSyncRequestParameter](fullsyncrequestparameter.md)* =  new FullSyncRequestParameter("group_level", "number")

*Defined in [c8osdk-js-core/src/c8o/FullSyncRequestParameter.ts:20](https://github.com/convertigo/c8osdk-angular/blob/ffab8e3/src/c8o/FullSyncRequestParameter.ts#L20)*

___

### `Static` INCLUDE_DELETED

▪ **INCLUDE_DELETED**: *[FullSyncRequestParameter](fullsyncrequestparameter.md)* =  new FullSyncRequestParameter("include_deleted", "boolean")

*Defined in [c8osdk-js-core/src/c8o/FullSyncRequestParameter.ts:21](https://github.com/convertigo/c8osdk-angular/blob/ffab8e3/src/c8o/FullSyncRequestParameter.ts#L21)*

___

### `Static` INCLUDE_DOCS

▪ **INCLUDE_DOCS**: *[FullSyncRequestParameter](fullsyncrequestparameter.md)* =  new FullSyncRequestParameter("include_docs", "boolean")

*Defined in [c8osdk-js-core/src/c8o/FullSyncRequestParameter.ts:26](https://github.com/convertigo/c8osdk-angular/blob/ffab8e3/src/c8o/FullSyncRequestParameter.ts#L26)*

___

### `Static` INDEX_UPDATE_MODE

▪ **INDEX_UPDATE_MODE**: *[FullSyncRequestParameter](fullsyncrequestparameter.md)* =  new FullSyncRequestParameter("index_update_mode", "string")

*Defined in [c8osdk-js-core/src/c8o/FullSyncRequestParameter.ts:22](https://github.com/convertigo/c8osdk-angular/blob/ffab8e3/src/c8o/FullSyncRequestParameter.ts#L22)*

___

### `Static` KEY

▪ **KEY**: *[FullSyncRequestParameter](fullsyncrequestparameter.md)* =  new FullSyncRequestParameter("key", "Array")

*Defined in [c8osdk-js-core/src/c8o/FullSyncRequestParameter.ts:23](https://github.com/convertigo/c8osdk-angular/blob/ffab8e3/src/c8o/FullSyncRequestParameter.ts#L23)*

___

### `Static` KEYS

▪ **KEYS**: *[FullSyncRequestParameter](fullsyncrequestparameter.md)* =  new FullSyncRequestParameter("keys", "Array")

*Defined in [c8osdk-js-core/src/c8o/FullSyncRequestParameter.ts:24](https://github.com/convertigo/c8osdk-angular/blob/ffab8e3/src/c8o/FullSyncRequestParameter.ts#L24)*

___

### `Static` LIMIT

▪ **LIMIT**: *[FullSyncRequestParameter](fullsyncrequestparameter.md)* =  new FullSyncRequestParameter("limit", "number")

*Defined in [c8osdk-js-core/src/c8o/FullSyncRequestParameter.ts:25](https://github.com/convertigo/c8osdk-angular/blob/ffab8e3/src/c8o/FullSyncRequestParameter.ts#L25)*

___

### `Static` REDUCE

▪ **REDUCE**: *[FullSyncRequestParameter](fullsyncrequestparameter.md)* =  new FullSyncRequestParameter("reduce", "boolean")

*Defined in [c8osdk-js-core/src/c8o/FullSyncRequestParameter.ts:27](https://github.com/convertigo/c8osdk-angular/blob/ffab8e3/src/c8o/FullSyncRequestParameter.ts#L27)*

___

### `Static` SKIP

▪ **SKIP**: *[FullSyncRequestParameter](fullsyncrequestparameter.md)* =  new FullSyncRequestParameter("skip", "number")

*Defined in [c8osdk-js-core/src/c8o/FullSyncRequestParameter.ts:29](https://github.com/convertigo/c8osdk-angular/blob/ffab8e3/src/c8o/FullSyncRequestParameter.ts#L29)*

___

### `Static` STARTKEY

▪ **STARTKEY**: *[FullSyncRequestParameter](fullsyncrequestparameter.md)* =  new FullSyncRequestParameter("startkey", "Object")

*Defined in [c8osdk-js-core/src/c8o/FullSyncRequestParameter.ts:30](https://github.com/convertigo/c8osdk-angular/blob/ffab8e3/src/c8o/FullSyncRequestParameter.ts#L30)*

___

### `Static` STARTKEY_DOCID

▪ **STARTKEY_DOCID**: *[FullSyncRequestParameter](fullsyncrequestparameter.md)* =  new FullSyncRequestParameter("startkey_docid", "string")

*Defined in [c8osdk-js-core/src/c8o/FullSyncRequestParameter.ts:31](https://github.com/convertigo/c8osdk-angular/blob/ffab8e3/src/c8o/FullSyncRequestParameter.ts#L31)*

## Accessors

###  name

• **get name**(): *string*

*Defined in [c8osdk-js-core/src/c8o/FullSyncRequestParameter.ts:13](https://github.com/convertigo/c8osdk-angular/blob/ffab8e3/src/c8o/FullSyncRequestParameter.ts#L13)*

**Returns:** *string*

___

###  type

• **get type**(): *string*

*Defined in [c8osdk-js-core/src/c8o/FullSyncRequestParameter.ts:9](https://github.com/convertigo/c8osdk-angular/blob/ffab8e3/src/c8o/FullSyncRequestParameter.ts#L9)*

**Returns:** *string*

## Methods

### `Static` getFullSyncRequestParameter

▸ **getFullSyncRequestParameter**(`name`: string): *[FullSyncRequestParameter](fullsyncrequestparameter.md)*

*Defined in [c8osdk-js-core/src/c8o/FullSyncRequestParameter.ts:38](https://github.com/convertigo/c8osdk-angular/blob/ffab8e3/src/c8o/FullSyncRequestParameter.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *[FullSyncRequestParameter](fullsyncrequestparameter.md)*

___

### `Static` values

▸ **values**(): *[FullSyncRequestParameter](fullsyncrequestparameter.md)[]*

*Defined in [c8osdk-js-core/src/c8o/FullSyncRequestParameter.ts:33](https://github.com/convertigo/c8osdk-angular/blob/ffab8e3/src/c8o/FullSyncRequestParameter.ts#L33)*

**Returns:** *[FullSyncRequestParameter](fullsyncrequestparameter.md)[]*
