[c8osdkjscore](../README.md) › [C8oLogLevel](c8ologlevel.md)

# Class: C8oLogLevel

## Hierarchy

* **C8oLogLevel**

## Index

### Constructors

* [constructor](c8ologlevel.md#constructor)

### Properties

* [name](c8ologlevel.md#name)
* [priority](c8ologlevel.md#priority)
* [C8O_LOG_LEVELS](c8ologlevel.md#static-c8o_log_levels)
* [DEBUG](c8ologlevel.md#static-debug)
* [ERROR](c8ologlevel.md#static-error)
* [FATAL](c8ologlevel.md#static-fatal)
* [INFO](c8ologlevel.md#static-info)
* [NONE](c8ologlevel.md#static-none)
* [NULL](c8ologlevel.md#static-null)
* [TRACE](c8ologlevel.md#static-trace)
* [WARN](c8ologlevel.md#static-warn)

### Methods

* [getC8oLogLevel](c8ologlevel.md#static-getc8ologlevel)

## Constructors

###  constructor

\+ **new C8oLogLevel**(`name`: string, `priority`: number): *[C8oLogLevel](c8ologlevel.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oLogLevel.ts:16](https://github.com/convertigo/c8osdk-angular/blob/a3ce352/src/c8o/c8oLogLevel.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`priority` | number |

**Returns:** *[C8oLogLevel](c8ologlevel.md)*

## Properties

###  name

• **name**: *string*

*Defined in [c8osdk-js-core/src/c8o/c8oLogLevel.ts:15](https://github.com/convertigo/c8osdk-angular/blob/a3ce352/src/c8o/c8oLogLevel.ts#L15)*

___

###  priority

• **priority**: *number*

*Defined in [c8osdk-js-core/src/c8o/c8oLogLevel.ts:16](https://github.com/convertigo/c8osdk-angular/blob/a3ce352/src/c8o/c8oLogLevel.ts#L16)*

___

### `Static` C8O_LOG_LEVELS

▪ **C8O_LOG_LEVELS**: *[C8oLogLevel](c8ologlevel.md)[]* =  [C8oLogLevel.NULL, C8oLogLevel.NONE, C8oLogLevel.TRACE, C8oLogLevel.DEBUG, C8oLogLevel.INFO, C8oLogLevel.WARN, C8oLogLevel.ERROR, C8oLogLevel.FATAL]

*Defined in [c8osdk-js-core/src/c8o/c8oLogLevel.ts:13](https://github.com/convertigo/c8osdk-angular/blob/a3ce352/src/c8o/c8oLogLevel.ts#L13)*

___

### `Static` DEBUG

▪ **DEBUG**: *[C8oLogLevel](c8ologlevel.md)* =  new C8oLogLevel("debug", 3)

*Defined in [c8osdk-js-core/src/c8o/c8oLogLevel.ts:7](https://github.com/convertigo/c8osdk-angular/blob/a3ce352/src/c8o/c8oLogLevel.ts#L7)*

___

### `Static` ERROR

▪ **ERROR**: *[C8oLogLevel](c8ologlevel.md)* =  new C8oLogLevel("error", 6)

*Defined in [c8osdk-js-core/src/c8o/c8oLogLevel.ts:10](https://github.com/convertigo/c8osdk-angular/blob/a3ce352/src/c8o/c8oLogLevel.ts#L10)*

___

### `Static` FATAL

▪ **FATAL**: *[C8oLogLevel](c8ologlevel.md)* =  new C8oLogLevel("fatal", 7)

*Defined in [c8osdk-js-core/src/c8o/c8oLogLevel.ts:11](https://github.com/convertigo/c8osdk-angular/blob/a3ce352/src/c8o/c8oLogLevel.ts#L11)*

___

### `Static` INFO

▪ **INFO**: *[C8oLogLevel](c8ologlevel.md)* =  new C8oLogLevel("info", 4)

*Defined in [c8osdk-js-core/src/c8o/c8oLogLevel.ts:8](https://github.com/convertigo/c8osdk-angular/blob/a3ce352/src/c8o/c8oLogLevel.ts#L8)*

___

### `Static` NONE

▪ **NONE**: *[C8oLogLevel](c8ologlevel.md)* =  new C8oLogLevel("none", 1)

*Defined in [c8osdk-js-core/src/c8o/c8oLogLevel.ts:5](https://github.com/convertigo/c8osdk-angular/blob/a3ce352/src/c8o/c8oLogLevel.ts#L5)*

___

### `Static` NULL

▪ **NULL**: *[C8oLogLevel](c8ologlevel.md)* =  new C8oLogLevel("", 0)

*Defined in [c8osdk-js-core/src/c8o/c8oLogLevel.ts:4](https://github.com/convertigo/c8osdk-angular/blob/a3ce352/src/c8o/c8oLogLevel.ts#L4)*

___

### `Static` TRACE

▪ **TRACE**: *[C8oLogLevel](c8ologlevel.md)* =  new C8oLogLevel("trace", 2)

*Defined in [c8osdk-js-core/src/c8o/c8oLogLevel.ts:6](https://github.com/convertigo/c8osdk-angular/blob/a3ce352/src/c8o/c8oLogLevel.ts#L6)*

___

### `Static` WARN

▪ **WARN**: *[C8oLogLevel](c8ologlevel.md)* =  new C8oLogLevel("warn", 5)

*Defined in [c8osdk-js-core/src/c8o/c8oLogLevel.ts:9](https://github.com/convertigo/c8osdk-angular/blob/a3ce352/src/c8o/c8oLogLevel.ts#L9)*

## Methods

### `Static` getC8oLogLevel

▸ **getC8oLogLevel**(`name`: string): *[C8oLogLevel](c8ologlevel.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oLogLevel.ts:23](https://github.com/convertigo/c8osdk-angular/blob/a3ce352/src/c8o/c8oLogLevel.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *[C8oLogLevel](c8ologlevel.md)*
