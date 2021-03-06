[c8osdkjscore](../README.md) › [C8oManagerSession](c8omanagersession.md)

# Class: C8oManagerSession

## Hierarchy

* **C8oManagerSession**

## Index

### Constructors

* [constructor](c8omanagersession.md#constructor)

### Properties

* [_olduser](c8omanagersession.md#private-_olduser)
* [_status](c8omanagersession.md#private-_status)
* [_user](c8omanagersession.md#private-_user)
* [c8o](c8omanagersession.md#c8o)
* [checker](c8omanagersession.md#private-checker)
* [id](c8omanagersession.md#private-id)
* [ignored](c8omanagersession.md#private-ignored)
* [loginManager](c8omanagersession.md#private-loginmanager)
* [mutex](c8omanagersession.md#mutex)
* [mutexCheckSession](c8omanagersession.md#mutexchecksession)
* [mutexNetwork](c8omanagersession.md#mutexnetwork)
* [resumeListener](c8omanagersession.md#private-resumelistener)
* [sessId](c8omanagersession.md#private-sessid)

### Accessors

* [olduser](c8omanagersession.md#olduser)
* [status](c8omanagersession.md#status)
* [user](c8omanagersession.md#user)

### Methods

* [checkSession](c8omanagersession.md#checksession)
* [checkUser](c8omanagersession.md#private-checkuser)
* [defineSessionStatus](c8omanagersession.md#definesessionstatus)
* [doAuthReachable](c8omanagersession.md#doauthreachable)
* [getInitalState](c8omanagersession.md#getinitalstate)
* [setInitalState](c8omanagersession.md#setinitalstate)
* [sort](c8omanagersession.md#sort)

## Constructors

###  constructor

\+ **new C8oManagerSession**(`c8o`: [C8oCore](c8ocore.md)): *[C8oManagerSession](c8omanagersession.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerSession.ts:23](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oManagerSession.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`c8o` | [C8oCore](c8ocore.md) |

**Returns:** *[C8oManagerSession](c8omanagersession.md)*

## Properties

### `Private` _olduser

• **_olduser**: *[C8oSessionUser](c8osessionuser.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerSession.ts:17](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oManagerSession.ts#L17)*

___

### `Private` _status

• **_status**: *[C8oSessionStatus](c8osessionstatus.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerSession.ts:12](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oManagerSession.ts#L12)*

___

### `Private` _user

• **_user**: *[C8oSessionUser](c8osessionuser.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerSession.ts:16](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oManagerSession.ts#L16)*

___

###  c8o

• **c8o**: *[C8oCore](c8ocore.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerSession.ts:11](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oManagerSession.ts#L11)*

___

### `Private` checker

• **checker**: *any*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerSession.ts:15](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oManagerSession.ts#L15)*

___

### `Private` id

• **id**: *string*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerSession.ts:13](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oManagerSession.ts#L13)*

___

### `Private` ignored

• **ignored**: *any*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerSession.ts:18](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oManagerSession.ts#L18)*

___

### `Private` loginManager

• **loginManager**: *[C8oManagerLogin](c8omanagerlogin.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerSession.ts:14](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oManagerSession.ts#L14)*

___

###  mutex

• **mutex**: *[Semaphore](semaphore.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerSession.ts:20](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oManagerSession.ts#L20)*

___

###  mutexCheckSession

• **mutexCheckSession**: *[Semaphore](semaphore.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerSession.ts:22](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oManagerSession.ts#L22)*

___

###  mutexNetwork

• **mutexNetwork**: *[Semaphore](semaphore.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerSession.ts:21](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oManagerSession.ts#L21)*

___

### `Private` resumeListener

• **resumeListener**: *any* =  undefined

*Defined in [c8osdk-js-core/src/c8o/c8oManagerSession.ts:19](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oManagerSession.ts#L19)*

___

### `Private` sessId

• **sessId**: *string*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerSession.ts:23](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oManagerSession.ts#L23)*

## Accessors

###  olduser

• **get olduser**(): *[C8oSessionUser](c8osessionuser.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerSession.ts:84](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oManagerSession.ts#L84)*

Get previous status of the session

**`returns:`** C8oSessionStatus

Can be:
C8oSessionStatus.Connected
C8oSessionStatus.HasBeenConnected
C8oSessionStatus.HasBeenDisconnected
C8oSessionStatus.Disconnected
C8oSessionStatus.Ignore

**Returns:** *[C8oSessionUser](c8osessionuser.md)*

___

###  status

• **get status**(): *[C8oSessionStatus](c8osessionstatus.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerSession.ts:49](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oManagerSession.ts#L49)*

Get status of the session

**`returns:`** C8oSessionStatus

Can be:
C8oSessionStatus.Connected
C8oSessionStatus.HasBeenConnected
C8oSessionStatus.HasBeenDisconnected
C8oSessionStatus.Disconnected
C8oSessionStatus.Ignore

**Returns:** *[C8oSessionStatus](c8osessionstatus.md)*

• **set status**(`status`: [C8oSessionStatus](c8osessionstatus.md)): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerSession.ts:53](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oManagerSession.ts#L53)*

Get status of the session

**Parameters:**

Name | Type |
------ | ------ |
`status` | [C8oSessionStatus](c8osessionstatus.md) |

**Returns:** *void*

___

###  user

• **get user**(): *[C8oSessionUser](c8osessionuser.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerSession.ts:69](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oManagerSession.ts#L69)*

Get status of the session

**`returns:`** C8oSessionStatus

Can be:
C8oSessionStatus.Connected
C8oSessionStatus.HasBeenConnected
C8oSessionStatus.HasBeenDisconnected
C8oSessionStatus.Disconnected
C8oSessionStatus.Ignore

**Returns:** *[C8oSessionUser](c8osessionuser.md)*

• **set user**(`user`: [C8oSessionUser](c8osessionuser.md)): *void*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerSession.ts:88](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oManagerSession.ts#L88)*

Get status of the session

**Parameters:**

Name | Type |
------ | ------ |
`user` | [C8oSessionUser](c8osessionuser.md) |

**Returns:** *void*

## Methods

###  checkSession

▸ **checkSession**(`headers`: any, `time`: number, `resolve`: any, `fromSetInitalState?`: any): *Promise‹void›*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerSession.ts:340](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oManagerSession.ts#L340)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`headers` | any | - |
`time` | number | - |
`resolve` | any |  null |
`fromSetInitalState?` | any | - |

**Returns:** *Promise‹void›*

___

### `Private` checkUser

▸ **checkUser**(`fromSetInitalState?`: any): *Promise‹any›*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerSession.ts:309](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oManagerSession.ts#L309)*

**Parameters:**

Name | Type |
------ | ------ |
`fromSetInitalState?` | any |

**Returns:** *Promise‹any›*

___

###  defineSessionStatus

▸ **defineSessionStatus**(`response`: any, `headers`: any, `urlReq`: any, `parametersReq`: any, `headersReq`: any, `fromSetInitalState?`: any): *Promise‹[C8oSessionStatus](c8osessionstatus.md)›*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerSession.ts:257](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oManagerSession.ts#L257)*

defineSessionStatus

if haderStatus is not null => we are connected
else if headerStatus is not null and this.id is not null, we has lost session
else we were never connected

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`response` | any | the http header response  |
`headers` | any | - |
`urlReq` | any | - |
`parametersReq` | any | - |
`headersReq` | any | - |
`fromSetInitalState?` | any | - |

**Returns:** *Promise‹[C8oSessionStatus](c8osessionstatus.md)›*

___

###  doAuthReachable

▸ **doAuthReachable**(): *Promise‹void›*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerSession.ts:205](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oManagerSession.ts#L205)*

**Returns:** *Promise‹void›*

___

###  getInitalState

▸ **getInitalState**(): *Promise‹void›*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerSession.ts:104](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oManagerSession.ts#L104)*

**Returns:** *Promise‹void›*

___

###  setInitalState

▸ **setInitalState**(): *Promise‹void›*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerSession.ts:93](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oManagerSession.ts#L93)*

**Returns:** *Promise‹void›*

___

###  sort

▸ **sort**(`response`: any, `headers`: any, `urlReq`: any, `parametersReq`: any, `headersReq`: any, `resolve?`: any, `status?`: any): *Promise‹unknown›*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerSession.ts:120](https://github.com/convertigo/c8osdk-angular/blob/74e6eb2/src/c8o/c8oManagerSession.ts#L120)*

**Parameters:**

Name | Type |
------ | ------ |
`response` | any |
`headers` | any |
`urlReq` | any |
`parametersReq` | any |
`headersReq` | any |
`resolve?` | any |
`status?` | any |

**Returns:** *Promise‹unknown›*
