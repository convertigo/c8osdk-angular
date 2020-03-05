[c8osdkjscore](../README.md) › [C8oLogger](c8ologger.md)

# Class: C8oLogger

## Hierarchy

* **C8oLogger**

## Index

### Constructors

* [constructor](c8ologger.md#constructor)

### Properties

* [alreadyRemoteLogging](c8ologger.md#private-alreadyremotelogging)
* [c8o](c8ologger.md#private-c8o)
* [env](c8ologger.md#private-env)
* [initDone](c8ologger.md#initdone)
* [pInit](c8ologger.md#private-pinit)
* [pending_remoteLogs](c8ologger.md#private-pending_remotelogs)
* [pending_remoteLogsLevel](c8ologger.md#private-pending_remotelogslevel)
* [remoteLogLevel](c8ologger.md#private-remoteloglevel)
* [remoteLogUrl](c8ologger.md#private-remotelogurl)
* [remoteLogs](c8ologger.md#private-remotelogs)
* [startTimeRemoteLog](c8ologger.md#private-starttimeremotelog)
* [uidRemoteLogs](c8ologger.md#private-uidremotelogs)
* [JSON_KEY_ENV](c8ologger.md#static-private-json_key_env)
* [JSON_KEY_LEVEL](c8ologger.md#static-private-json_key_level)
* [JSON_KEY_LOGS](c8ologger.md#static-private-json_key_logs)
* [JSON_KEY_MESSAGE](c8ologger.md#static-private-json_key_message)
* [JSON_KEY_REMOTE_LOG_LEVEL](c8ologger.md#static-private-json_key_remote_log_level)
* [JSON_KEY_TIME](c8ologger.md#static-private-json_key_time)
* [LOG_INTERNAL_PREFIX](c8ologger.md#static-private-log_internal_prefix)
* [REMOTE_LOG_LIMIT](c8ologger.md#static-remote_log_limit)

### Accessors

* [isDebug](c8ologger.md#isdebug)
* [isError](c8ologger.md#iserror)
* [isFatal](c8ologger.md#isfatal)
* [isInfo](c8ologger.md#isinfo)
* [isTrace](c8ologger.md#istrace)
* [isWarn](c8ologger.md#iswarn)

### Methods

* [_debug](c8ologger.md#_debug)
* [_error](c8ologger.md#_error)
* [_fatal](c8ologger.md#_fatal)
* [_info](c8ologger.md#_info)
* [_log](c8ologger.md#private-_log)
* [_trace](c8ologger.md#_trace)
* [_warn](c8ologger.md#_warn)
* [affect_val](c8ologger.md#affect_val)
* [canLog](c8ologger.md#canlog)
* [checkInitDone](c8ologger.md#checkinitdone)
* [debug](c8ologger.md#debug)
* [error](c8ologger.md#error)
* [fatal](c8ologger.md#fatal)
* [info](c8ologger.md#info)
* [isLoggableConsole](c8ologger.md#private-isloggableconsole)
* [isLoggableRemote](c8ologger.md#private-isloggableremote)
* [log](c8ologger.md#private-log)
* [logC8oCall](c8ologger.md#logc8ocall)
* [logC8oCallJSONResponse](c8ologger.md#logc8ocalljsonresponse)
* [logC8oCallResponse](c8ologger.md#logc8ocallresponse)
* [logC8oCallXMLResponse](c8ologger.md#logc8ocallxmlresponse)
* [logMethodCall](c8ologger.md#logmethodcall)
* [logRemote](c8ologger.md#logremote)
* [logRemoteInit](c8ologger.md#logremoteinit)
* [logTest](c8ologger.md#logtest)
* [logTestAction](c8ologger.md#private-logtestaction)
* [trace](c8ologger.md#trace)
* [warn](c8ologger.md#warn)

## Constructors

###  constructor

\+ **new C8oLogger**(`c8o`: [C8oCore](c8ocore.md), `first`: boolean): *[C8oLogger](c8ologger.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:39](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`c8o` | [C8oCore](c8ocore.md) |
`first` | boolean |

**Returns:** *[C8oLogger](c8ologger.md)*

## Properties

### `Private` alreadyRemoteLogging

• **alreadyRemoteLogging**: *boolean[]*

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:28](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L28)*

___

### `Private` c8o

• **c8o**: *[C8oCore](c8ocore.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:36](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L36)*

___

### `Private` env

• **env**: *string*

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:38](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L38)*

___

###  initDone

• **initDone**: *boolean* = false

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:32](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L32)*

___

### `Private` pInit

• **pInit**: *Promise‹any›*

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:39](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L39)*

___

### `Private` pending_remoteLogs

• **pending_remoteLogs**: *[Queue](queue.md)‹JSON›*

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:33](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L33)*

___

### `Private` pending_remoteLogsLevel

• **pending_remoteLogsLevel**: *[Queue](queue.md)‹[C8oLogLevel](c8ologlevel.md)›*

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:34](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L34)*

___

### `Private` remoteLogLevel

• **remoteLogLevel**: *[C8oLogLevel](c8ologlevel.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:29](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L29)*

___

### `Private` remoteLogUrl

• **remoteLogUrl**: *string*

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:25](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L25)*

Attributes

___

### `Private` remoteLogs

• **remoteLogs**: *[Queue](queue.md)‹JSON›*

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:26](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L26)*

___

### `Private` startTimeRemoteLog

• **startTimeRemoteLog**: *number*

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:31](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L31)*

___

### `Private` uidRemoteLogs

• **uidRemoteLogs**: *string*

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:30](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L30)*

___

### `Static` `Private` JSON_KEY_ENV

▪ **JSON_KEY_ENV**: *string* = "env"

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:21](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L21)*

___

### `Static` `Private` JSON_KEY_LEVEL

▪ **JSON_KEY_LEVEL**: *string* = "level"

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:18](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L18)*

___

### `Static` `Private` JSON_KEY_LOGS

▪ **JSON_KEY_LOGS**: *string* = "logs"

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:20](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L20)*

___

### `Static` `Private` JSON_KEY_MESSAGE

▪ **JSON_KEY_MESSAGE**: *string* = "msg"

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:19](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L19)*

___

### `Static` `Private` JSON_KEY_REMOTE_LOG_LEVEL

▪ **JSON_KEY_REMOTE_LOG_LEVEL**: *string* = "remoteLogLevel"

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:16](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L16)*

___

### `Static` `Private` JSON_KEY_TIME

▪ **JSON_KEY_TIME**: *string* = "time"

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:17](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L17)*

___

### `Static` `Private` LOG_INTERNAL_PREFIX

▪ **LOG_INTERNAL_PREFIX**: *string* = "[c8o] "

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:12](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L12)*

___

### `Static` REMOTE_LOG_LIMIT

▪ **REMOTE_LOG_LIMIT**: *number* = 100

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:14](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L14)*

## Accessors

###  isDebug

• **get isDebug**(): *boolean*

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:117](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L117)*

**Returns:** *boolean*

___

###  isError

• **get isError**(): *boolean*

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:103](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L103)*

**Returns:** *boolean*

___

###  isFatal

• **get isFatal**(): *boolean*

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:98](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L98)*

**Returns:** *boolean*

___

###  isInfo

• **get isInfo**(): *boolean*

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:113](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L113)*

**Returns:** *boolean*

___

###  isTrace

• **get isTrace**(): *boolean*

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:121](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L121)*

**Returns:** *boolean*

___

###  isWarn

• **get isWarn**(): *boolean*

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:108](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L108)*

**Returns:** *boolean*

## Methods

###  _debug

▸ **_debug**(`message`: string, `exceptions`: Error): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:234](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L234)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`message` | string | - |
`exceptions` | Error |  null |

**Returns:** *void*

___

###  _error

▸ **_error**(`message`: string, `exceptions`: Error): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:222](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L222)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`message` | string | - |
`exceptions` | Error |  null |

**Returns:** *void*

___

###  _fatal

▸ **_fatal**(`message`: string, `exceptions`: Error): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:218](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L218)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`message` | string | - |
`exceptions` | Error |  null |

**Returns:** *void*

___

###  _info

▸ **_info**(`message`: string, `exceptions`: Error): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:230](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L230)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`message` | string | - |
`exceptions` | Error |  null |

**Returns:** *void*

___

### `Private` _log

▸ **_log**(`logLevel`: [C8oLogLevel](c8ologlevel.md), `messages`: string, `exceptions`: Error): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:212](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L212)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`logLevel` | [C8oLogLevel](c8ologlevel.md) | - |
`messages` | string | - |
`exceptions` | Error |  null |

**Returns:** *void*

___

###  _trace

▸ **_trace**(`message`: string, `exceptions`: Error): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:238](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L238)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`message` | string | - |
`exceptions` | Error |  null |

**Returns:** *void*

___

###  _warn

▸ **_warn**(`message`: string, `exceptions`: Error): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:226](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L226)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`message` | string | - |
`exceptions` | Error |  null |

**Returns:** *void*

___

###  affect_val

▸ **affect_val**(`c8o`: [C8oCore](c8ocore.md), `first`: boolean): *Promise‹unknown›*

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:43](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`c8o` | [C8oCore](c8ocore.md) |
`first` | boolean |

**Returns:** *Promise‹unknown›*

___

###  canLog

▸ **canLog**(`logLevel`: [C8oLogLevel](c8ologlevel.md)): *boolean*

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:93](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L93)*

**Parameters:**

Name | Type |
------ | ------ |
`logLevel` | [C8oLogLevel](c8ologlevel.md) |

**Returns:** *boolean*

___

###  checkInitDone

▸ **checkInitDone**(`resolve`: any): *Promise‹any›*

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:305](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L305)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`resolve` | any |  null |

**Returns:** *Promise‹any›*

___

###  debug

▸ **debug**(`message`: string, `exceptions`: Error): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:204](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L204)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`message` | string | - |
`exceptions` | Error |  null |

**Returns:** *void*

___

###  error

▸ **error**(`message`: string, `exceptions`: Error): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:192](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L192)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`message` | string | - |
`exceptions` | Error |  null |

**Returns:** *void*

___

###  fatal

▸ **fatal**(`message`: string, `exceptions`: Error): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:188](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L188)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`message` | string | - |
`exceptions` | Error |  null |

**Returns:** *void*

___

###  info

▸ **info**(`message`: string, `exceptions`: Error): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:200](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L200)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`message` | string | - |
`exceptions` | Error |  null |

**Returns:** *void*

___

### `Private` isLoggableConsole

▸ **isLoggableConsole**(`logLevel`: [C8oLogLevel](c8ologlevel.md)): *boolean*

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:89](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L89)*

**Parameters:**

Name | Type |
------ | ------ |
`logLevel` | [C8oLogLevel](c8ologlevel.md) |

**Returns:** *boolean*

___

### `Private` isLoggableRemote

▸ **isLoggableRemote**(`logLevel`: [C8oLogLevel](c8ologlevel.md)): *boolean*

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:85](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L85)*

**Parameters:**

Name | Type |
------ | ------ |
`logLevel` | [C8oLogLevel](c8ologlevel.md) |

**Returns:** *boolean*

___

### `Private` log

▸ **log**(`logLevel`: [C8oLogLevel](c8ologlevel.md), `message`: string, `exception`: Error): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:125](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L125)*

**Parameters:**

Name | Type |
------ | ------ |
`logLevel` | [C8oLogLevel](c8ologlevel.md) |
`message` | string |
`exception` | Error |

**Returns:** *void*

___

###  logC8oCall

▸ **logC8oCall**(`url`: string, `parameters`: any): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:452](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L452)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`parameters` | any |

**Returns:** *void*

___

###  logC8oCallJSONResponse

▸ **logC8oCallJSONResponse**(`response`: JSON, `url`: string, `parameters`: any): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:462](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L462)*

**Parameters:**

Name | Type |
------ | ------ |
`response` | JSON |
`url` | string |
`parameters` | any |

**Returns:** *void*

___

###  logC8oCallResponse

▸ **logC8oCallResponse**(`responseStr`: string, `responseType`: string, `url`: string, `parameters`: any): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:470](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L470)*

**Parameters:**

Name | Type |
------ | ------ |
`responseStr` | string |
`responseType` | string |
`url` | string |
`parameters` | any |

**Returns:** *void*

___

###  logC8oCallXMLResponse

▸ **logC8oCallXMLResponse**(`response`: Document, `url`: string, `parameters`: Object): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:466](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L466)*

**Parameters:**

Name | Type |
------ | ------ |
`response` | Document |
`url` | string |
`parameters` | Object |

**Returns:** *void*

___

###  logMethodCall

▸ **logMethodCall**(`methodName`: string, ...`parameters`: any[]): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:421](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L421)*

**Parameters:**

Name | Type |
------ | ------ |
`methodName` | string |
`...parameters` | any[] |

**Returns:** *void*

___

###  logRemote

▸ **logRemote**(): *Promise‹void›*

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:366](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L366)*

**Returns:** *Promise‹void›*

___

###  logRemoteInit

▸ **logRemoteInit**(): *Promise‹void›*

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:242](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L242)*

**Returns:** *Promise‹void›*

___

###  logTest

▸ **logTest**(): *Promise‹any›*

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:329](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L329)*

**Returns:** *Promise‹any›*

___

### `Private` logTestAction

▸ **logTestAction**(): *Promise‹any›*

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:344](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L344)*

**Returns:** *Promise‹any›*

___

###  trace

▸ **trace**(`message`: string, `exceptions`: Error): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:208](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L208)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`message` | string | - |
`exceptions` | Error |  null |

**Returns:** *void*

___

###  warn

▸ **warn**(`message`: string, `exceptions`: Error): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oLogger.ts:196](https://github.com/convertigo/c8osdk-angular/blob/46dcf2d/src/c8o/c8oLogger.ts#L196)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`message` | string | - |
`exceptions` | Error |  null |

**Returns:** *void*
