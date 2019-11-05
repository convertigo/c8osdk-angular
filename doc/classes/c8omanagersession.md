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
* [resumeListener](c8omanagersession.md#private-resumelistener)

### Accessors

* [olduser](c8omanagersession.md#olduser)
* [status](c8omanagersession.md#status)
* [user](c8omanagersession.md#user)

### Methods

* [checkSession](c8omanagersession.md#checksession)
* [checkUser](c8omanagersession.md#private-checkuser)
* [defineSessionStatus](c8omanagersession.md#definesessionstatus)
* [doAuthReachable](c8omanagersession.md#doauthreachable)
* [sort](c8omanagersession.md#sort)

## Constructors

###  constructor

\+ **new C8oManagerSession**(`c8o`: [C8oCore](c8ocore.md)): *[C8oManagerSession](c8omanagersession.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerSession.ts:18](https://github.com/convertigo/c8osdk-angular/blob/ffab8e3/src/c8o/c8oManagerSession.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`c8o` | [C8oCore](c8ocore.md) |

**Returns:** *[C8oManagerSession](c8omanagersession.md)*

## Properties

### `Private` _olduser

• **_olduser**: *[C8oSessionUser](c8osessionuser.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerSession.ts:16](https://github.com/convertigo/c8osdk-angular/blob/ffab8e3/src/c8o/c8oManagerSession.ts#L16)*

___

### `Private` _status

• **_status**: *[C8oSessionStatus](c8osessionstatus.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerSession.ts:11](https://github.com/convertigo/c8osdk-angular/blob/ffab8e3/src/c8o/c8oManagerSession.ts#L11)*

___

### `Private` _user

• **_user**: *[C8oSessionUser](c8osessionuser.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerSession.ts:15](https://github.com/convertigo/c8osdk-angular/blob/ffab8e3/src/c8o/c8oManagerSession.ts#L15)*

___

###  c8o

• **c8o**: *[C8oCore](c8ocore.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerSession.ts:10](https://github.com/convertigo/c8osdk-angular/blob/ffab8e3/src/c8o/c8oManagerSession.ts#L10)*

___

### `Private` checker

• **checker**: *any*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerSession.ts:14](https://github.com/convertigo/c8osdk-angular/blob/ffab8e3/src/c8o/c8oManagerSession.ts#L14)*

___

### `Private` id

• **id**: *string*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerSession.ts:12](https://github.com/convertigo/c8osdk-angular/blob/ffab8e3/src/c8o/c8oManagerSession.ts#L12)*

___

### `Private` ignored

• **ignored**: *any*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerSession.ts:17](https://github.com/convertigo/c8osdk-angular/blob/ffab8e3/src/c8o/c8oManagerSession.ts#L17)*

___

### `Private` loginManager

• **loginManager**: *[C8oManagerLogin](c8omanagerlogin.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerSession.ts:13](https://github.com/convertigo/c8osdk-angular/blob/ffab8e3/src/c8o/c8oManagerSession.ts#L13)*

___

### `Private` resumeListener

• **resumeListener**: *any* =  undefined

*Defined in [c8osdk-js-core/src/c8o/c8oManagerSession.ts:18](https://github.com/convertigo/c8osdk-angular/blob/ffab8e3/src/c8o/c8oManagerSession.ts#L18)*

## Accessors

###  olduser

• **get olduser**(): *[C8oSessionUser](c8osessionuser.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerSession.ts:74](https://github.com/convertigo/c8osdk-angular/blob/ffab8e3/src/c8o/c8oManagerSession.ts#L74)*

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

*Defined in [c8osdk-js-core/src/c8o/c8oManagerSession.ts:43](https://github.com/convertigo/c8osdk-angular/blob/ffab8e3/src/c8o/c8oManagerSession.ts#L43)*

Get status of the session

**`returns:`** C8oSessionStatus

Can be:
C8oSessionStatus.Connected
C8oSessionStatus.HasBeenConnected
C8oSessionStatus.HasBeenDisconnected
C8oSessionStatus.Disconnected
C8oSessionStatus.Ignore

**Returns:** *[C8oSessionStatus](c8osessionstatus.md)*

___

###  user

• **get user**(): *[C8oSessionUser](c8osessionuser.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerSession.ts:59](https://github.com/convertigo/c8osdk-angular/blob/ffab8e3/src/c8o/c8oManagerSession.ts#L59)*

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

*Defined in [c8osdk-js-core/src/c8o/c8oManagerSession.ts:78](https://github.com/convertigo/c8osdk-angular/blob/ffab8e3/src/c8o/c8oManagerSession.ts#L78)*

Get status of the session

**Parameters:**

Name | Type |
------ | ------ |
`user` | [C8oSessionUser](c8osessionuser.md) |

**Returns:** *void*

## Methods

###  checkSession

▸ **checkSession**(`headers`: any, `time`: number, `resolve`: any): *Promise‹void›*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerSession.ts:309](https://github.com/convertigo/c8osdk-angular/blob/ffab8e3/src/c8o/c8oManagerSession.ts#L309)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`headers` | any | - |
`time` | number | - |
`resolve` | any |  null |

**Returns:** *Promise‹void›*

___

### `Private` checkUser

▸ **checkUser**(): *Promise‹any›*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerSession.ts:284](https://github.com/convertigo/c8osdk-angular/blob/ffab8e3/src/c8o/c8oManagerSession.ts#L284)*

**Returns:** *Promise‹any›*

___

###  defineSessionStatus

▸ **defineSessionStatus**(`response`: any, `headers`: any, `urlReq`: any, `parametersReq`: any, `headersReq`: any): *Promise‹[C8oSessionStatus](c8osessionstatus.md)›*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerSession.ts:225](https://github.com/convertigo/c8osdk-angular/blob/ffab8e3/src/c8o/c8oManagerSession.ts#L225)*

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

**Returns:** *Promise‹[C8oSessionStatus](c8osessionstatus.md)›*

___

###  doAuthReachable

▸ **doAuthReachable**(): *Promise‹void›*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerSession.ts:180](https://github.com/convertigo/c8osdk-angular/blob/ffab8e3/src/c8o/c8oManagerSession.ts#L180)*

**Returns:** *Promise‹void›*

___

###  sort

▸ **sort**(`response`: any, `headers`: any, `urlReq`: any, `parametersReq`: any, `headersReq`: any, `resolve`: any): *Promise‹unknown›*

*Defined in [c8osdk-js-core/src/c8o/c8oManagerSession.ts:83](https://github.com/convertigo/c8osdk-angular/blob/ffab8e3/src/c8o/c8oManagerSession.ts#L83)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`response` | any | - |
`headers` | any | - |
`urlReq` | any | - |
`parametersReq` | any | - |
`headersReq` | any | - |
`resolve` | any |  null |

**Returns:** *Promise‹unknown›*
