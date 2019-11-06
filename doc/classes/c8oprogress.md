[c8osdkjscore](../README.md) › [C8oProgress](c8oprogress.md)

# Class: C8oProgress

## Hierarchy

* **C8oProgress**

## Index

### Constructors

* [constructor](c8oprogress.md#constructor)

### Properties

* [_changed](c8oprogress.md#private-_changed)
* [_continuous](c8oprogress.md#private-_continuous)
* [_current](c8oprogress.md#private-_current)
* [_finished](c8oprogress.md#private-_finished)
* [_pull](c8oprogress.md#private-_pull)
* [_raw](c8oprogress.md#private-_raw)
* [_status](c8oprogress.md#private-_status)
* [_taskInfo](c8oprogress.md#private-_taskinfo)
* [_total](c8oprogress.md#private-_total)

### Accessors

* [changed](c8oprogress.md#changed)
* [continuous](c8oprogress.md#continuous)
* [current](c8oprogress.md#current)
* [direction](c8oprogress.md#direction)
* [finished](c8oprogress.md#finished)
* [pull](c8oprogress.md#pull)
* [push](c8oprogress.md#push)
* [raw](c8oprogress.md#raw)
* [status](c8oprogress.md#status)
* [taskInfo](c8oprogress.md#taskinfo)
* [total](c8oprogress.md#total)

### Methods

* [toString](c8oprogress.md#tostring)

## Constructors

###  constructor

\+ **new C8oProgress**(): *[C8oProgress](c8oprogress.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oProgress.ts:12](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oProgress.ts#L12)*

**Returns:** *[C8oProgress](c8oprogress.md)*

\+ **new C8oProgress**(`progress`: [C8oProgress](c8oprogress.md)): *[C8oProgress](c8oprogress.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oProgress.ts:15](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oProgress.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`progress` | [C8oProgress](c8oprogress.md) |

**Returns:** *[C8oProgress](c8oprogress.md)*

## Properties

### `Private` _changed

• **_changed**: *boolean* = false

*Defined in [c8osdk-js-core/src/c8o/c8oProgress.ts:4](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oProgress.ts#L4)*

___

### `Private` _continuous

• **_continuous**: *boolean* = false

*Defined in [c8osdk-js-core/src/c8o/c8oProgress.ts:5](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oProgress.ts#L5)*

___

### `Private` _current

• **_current**: *number* =  -1

*Defined in [c8osdk-js-core/src/c8o/c8oProgress.ts:8](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oProgress.ts#L8)*

___

### `Private` _finished

• **_finished**: *boolean* = false

*Defined in [c8osdk-js-core/src/c8o/c8oProgress.ts:6](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oProgress.ts#L6)*

___

### `Private` _pull

• **_pull**: *boolean* = true

*Defined in [c8osdk-js-core/src/c8o/c8oProgress.ts:7](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oProgress.ts#L7)*

___

### `Private` _raw

• **_raw**: *any*

*Defined in [c8osdk-js-core/src/c8o/c8oProgress.ts:12](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oProgress.ts#L12)*

___

### `Private` _status

• **_status**: *string* = ""

*Defined in [c8osdk-js-core/src/c8o/c8oProgress.ts:10](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oProgress.ts#L10)*

___

### `Private` _taskInfo

• **_taskInfo**: *string* = ""

*Defined in [c8osdk-js-core/src/c8o/c8oProgress.ts:11](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oProgress.ts#L11)*

___

### `Private` _total

• **_total**: *number* =  -1

*Defined in [c8osdk-js-core/src/c8o/c8oProgress.ts:9](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oProgress.ts#L9)*

## Accessors

###  changed

• **get changed**(): *boolean*

*Defined in [c8osdk-js-core/src/c8o/c8oProgress.ts:40](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oProgress.ts#L40)*

**Returns:** *boolean*

• **set changed**(`value`: boolean): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oProgress.ts:45](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oProgress.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *void*

___

###  continuous

• **get continuous**(): *boolean*

*Defined in [c8osdk-js-core/src/c8o/c8oProgress.ts:49](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oProgress.ts#L49)*

**Returns:** *boolean*

• **set continuous**(`value`: boolean): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oProgress.ts:53](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oProgress.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *void*

___

###  current

• **get current**(): *number*

*Defined in [c8osdk-js-core/src/c8o/c8oProgress.ts:80](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oProgress.ts#L80)*

**Returns:** *number*

• **set current**(`value`: number): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oProgress.ts:84](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oProgress.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *void*

___

###  direction

• **get direction**(): *string*

*Defined in [c8osdk-js-core/src/c8o/c8oProgress.ts:98](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oProgress.ts#L98)*

**Returns:** *string*

___

###  finished

• **get finished**(): *boolean*

*Defined in [c8osdk-js-core/src/c8o/c8oProgress.ts:58](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oProgress.ts#L58)*

**Returns:** *boolean*

• **set finished**(`value`: boolean): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oProgress.ts:62](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oProgress.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *void*

___

###  pull

• **get pull**(): *boolean*

*Defined in [c8osdk-js-core/src/c8o/c8oProgress.ts:67](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oProgress.ts#L67)*

**Returns:** *boolean*

• **set pull**(`value`: boolean): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oProgress.ts:71](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oProgress.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *void*

___

###  push

• **get push**(): *boolean*

*Defined in [c8osdk-js-core/src/c8o/c8oProgress.ts:76](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oProgress.ts#L76)*

**Returns:** *boolean*

___

###  raw

• **get raw**(): *any*

*Defined in [c8osdk-js-core/src/c8o/c8oProgress.ts:122](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oProgress.ts#L122)*

**Returns:** *any*

• **set raw**(`value`: any): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oProgress.ts:126](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oProgress.ts#L126)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *void*

___

###  status

• **get status**(): *string*

*Defined in [c8osdk-js-core/src/c8o/c8oProgress.ts:102](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oProgress.ts#L102)*

**Returns:** *string*

• **set status**(`value`: string): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oProgress.ts:106](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oProgress.ts#L106)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *void*

___

###  taskInfo

• **get taskInfo**(): *string*

*Defined in [c8osdk-js-core/src/c8o/c8oProgress.ts:112](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oProgress.ts#L112)*

**Returns:** *string*

• **set taskInfo**(`value`: string): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oProgress.ts:116](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oProgress.ts#L116)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *void*

___

###  total

• **get total**(): *number*

*Defined in [c8osdk-js-core/src/c8o/c8oProgress.ts:89](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oProgress.ts#L89)*

**Returns:** *number*

• **set total**(`value`: number): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oProgress.ts:93](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oProgress.ts#L93)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *void*

## Methods

###  toString

▸ **toString**(): *string*

*Defined in [c8osdk-js-core/src/c8o/c8oProgress.ts:131](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oProgress.ts#L131)*

**Returns:** *string*
