[c8osdkjscore](../README.md) › [C8oSettings](c8osettings.md)

# Class: C8oSettings

Contains optional parameters of a C8o class instantiation.<br/>
Note that setters return the setting instance thereby C8oSettings can be instantiate like that:<br/>
new C8oSettings().setTimeout(5000).setTrustAllCertificates(true).setUseEncryption(true);

## Hierarchy

* [C8oBase](c8obase.md)

  ↳ **C8oSettings**

## Index

### Constructors

* [constructor](c8osettings.md#constructor)

### Properties

* [_authenticationCookieValue](c8osettings.md#protected-_authenticationcookievalue)
* [_clientCertificateBinaries](c8osettings.md#protected-_clientcertificatebinaries)
* [_clientCertificateFiles](c8osettings.md#protected-_clientcertificatefiles)
* [_cookies](c8osettings.md#protected-_cookies)
* [_defaultDatabaseName](c8osettings.md#protected-_defaultdatabasename)
* [_disableSSL](c8osettings.md#protected-_disablessl)
* [_endpointSettings](c8osettings.md#protected-_endpointsettings)
* [_errorConvertigoIntoFail](c8osettings.md#protected-_errorconvertigointofail)
* [_fullSyncLocalSuffix](c8osettings.md#protected-_fullsynclocalsuffix)
* [_fullSyncPassword](c8osettings.md#protected-_fullsyncpassword)
* [_fullSyncServerUrl](c8osettings.md#protected-_fullsyncserverurl)
* [_fullSyncUsername](c8osettings.md#protected-_fullsyncusername)
* [_headers](c8osettings.md#protected-_headers)
* [_initalLogLevel](c8osettings.md#protected-_initalloglevel)
* [_initialLogRemote](c8osettings.md#protected-_initiallogremote)
* [_keepSessionAlive](c8osettings.md#protected-_keepsessionalive)
* [_keyStorePassword](c8osettings.md#protected-_keystorepassword)
* [_logC8o](c8osettings.md#protected-_logc8o)
* [_logLevelLocal](c8osettings.md#protected-_loglevellocal)
* [_logOnFail](c8osettings.md#protected-_logonfail)
* [_logRemote](c8osettings.md#protected-_logremote)
* [_normalizeParameters](c8osettings.md#protected-_normalizeparameters)
* [_prefixBase](c8osettings.md#protected-_prefixbase)
* [_resetBase](c8osettings.md#protected-_resetbase)
* [_timeout](c8osettings.md#protected-_timeout)
* [_trustStorePassword](c8osettings.md#protected-_truststorepassword)
* [_useEncryption](c8osettings.md#protected-_useencryption)

### Accessors

* [authenticationCookieValue](c8osettings.md#authenticationcookievalue)
* [cookies](c8osettings.md#cookies)
* [defaultDatabaseName](c8osettings.md#defaultdatabasename)
* [endpoint](c8osettings.md#endpoint)
* [errorConvertigoIntoFail](c8osettings.md#errorconvertigointofail)
* [fullSyncLocalSuffix](c8osettings.md#fullsynclocalsuffix)
* [fullSyncPassword](c8osettings.md#fullsyncpassword)
* [fullSyncServerUrl](c8osettings.md#fullsyncserverurl)
* [fullSyncUsername](c8osettings.md#fullsyncusername)
* [headers](c8osettings.md#headers)
* [keepSessionAlive](c8osettings.md#keepsessionalive)
* [logC8o](c8osettings.md#logc8o)
* [logLevelLocal](c8osettings.md#loglevellocal)
* [logOnFail](c8osettings.md#logonfail)
* [logRemote](c8osettings.md#logremote)
* [normalizeParameters](c8osettings.md#normalizeparameters)
* [prefixBase](c8osettings.md#prefixbase)
* [resetBase](c8osettings.md#resetbase)
* [timeout](c8osettings.md#timeout)

### Methods

* [addClientCertificate](c8osettings.md#addclientcertificate)
* [addCookie](c8osettings.md#addcookie)
* [addHeader](c8osettings.md#addheader)
* [clone](c8osettings.md#clone)
* [copy](c8osettings.md#copy)
* [setAuthenticationCookieValue](c8osettings.md#setauthenticationcookievalue)
* [setDefaultDatabaseName](c8osettings.md#setdefaultdatabasename)
* [setDisableResetBase](c8osettings.md#setdisableresetbase)
* [setEnablePrefixBase](c8osettings.md#setenableprefixbase)
* [setEndPoint](c8osettings.md#setendpoint)
* [setErrorConvertigoIntoFail](c8osettings.md#seterrorconvertigointofail)
* [setFullSyncLocalSuffix](c8osettings.md#setfullsynclocalsuffix)
* [setFullSyncPassword](c8osettings.md#setfullsyncpassword)
* [setFullSyncServerUrl](c8osettings.md#setfullsyncserverurl)
* [setFullSyncUsername](c8osettings.md#setfullsyncusername)
* [setKeepSessionAlive](c8osettings.md#setkeepsessionalive)
* [setLogC8o](c8osettings.md#setlogc8o)
* [setLogLevelLocal](c8osettings.md#setloglevellocal)
* [setLogOnFail](c8osettings.md#setlogonfail)
* [setLogRemote](c8osettings.md#setlogremote)
* [setNormalizeParameters](c8osettings.md#setnormalizeparameters)
* [setTimeout](c8osettings.md#settimeout)
* [setUseEncryption](c8osettings.md#setuseencryption)

## Constructors

###  constructor

\+ **new C8oSettings**(`c8oSettings`: [C8oSettings](c8osettings.md)): *[C8oSettings](c8osettings.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oSettings.ts:11](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oSettings.ts#L11)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`c8oSettings` | [C8oSettings](c8osettings.md) |  null |

**Returns:** *[C8oSettings](c8osettings.md)*

## Properties

### `Protected` _authenticationCookieValue

• **_authenticationCookieValue**: *string* =  null

*Inherited from [C8oBase](c8obase.md).[_authenticationCookieValue](c8obase.md#protected-_authenticationcookievalue)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:21](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oBase.ts#L21)*

___

### `Protected` _clientCertificateBinaries

• **_clientCertificateBinaries**: *Object*

*Inherited from [C8oBase](c8obase.md).[_clientCertificateBinaries](c8obase.md#protected-_clientcertificatebinaries)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:10](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oBase.ts#L10)*

___

### `Protected` _clientCertificateFiles

• **_clientCertificateFiles**: *Object*

*Inherited from [C8oBase](c8obase.md).[_clientCertificateFiles](c8obase.md#protected-_clientcertificatefiles)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:9](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oBase.ts#L9)*

___

### `Protected` _cookies

• **_cookies**: *Object*

*Inherited from [C8oBase](c8obase.md).[_cookies](c8obase.md#protected-_cookies)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:8](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oBase.ts#L8)*

___

### `Protected` _defaultDatabaseName

• **_defaultDatabaseName**: *string* =  null

*Inherited from [C8oBase](c8obase.md).[_defaultDatabaseName](c8obase.md#protected-_defaultdatabasename)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:20](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oBase.ts#L20)*

___

### `Protected` _disableSSL

• **_disableSSL**: *boolean* = false

*Inherited from [C8oBase](c8obase.md).[_disableSSL](c8obase.md#protected-_disablessl)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:29](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oBase.ts#L29)*

___

### `Protected` _endpointSettings

• **_endpointSettings**: *string*

*Inherited from [C8oBase](c8obase.md).[_endpointSettings](c8obase.md#protected-_endpointsettings)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:5](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oBase.ts#L5)*

___

### `Protected` _errorConvertigoIntoFail

• **_errorConvertigoIntoFail**: *boolean* = false

*Inherited from [C8oBase](c8obase.md).[_errorConvertigoIntoFail](c8obase.md#protected-_errorconvertigointofail)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:40](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oBase.ts#L40)*

___

### `Protected` _fullSyncLocalSuffix

• **_fullSyncLocalSuffix**: *string* =  null

*Inherited from [C8oBase](c8obase.md).[_fullSyncLocalSuffix](c8obase.md#protected-_fullsynclocalsuffix)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:22](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oBase.ts#L22)*

___

### `Protected` _fullSyncPassword

• **_fullSyncPassword**: *string*

*Inherited from [C8oBase](c8obase.md).[_fullSyncPassword](c8obase.md#protected-_fullsyncpassword)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:25](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oBase.ts#L25)*

___

### `Protected` _fullSyncServerUrl

• **_fullSyncServerUrl**: *string* = "http://localhost:5984"

*Inherited from [C8oBase](c8obase.md).[_fullSyncServerUrl](c8obase.md#protected-_fullsyncserverurl)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:23](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oBase.ts#L23)*

___

### `Protected` _fullSyncUsername

• **_fullSyncUsername**: *string*

*Inherited from [C8oBase](c8obase.md).[_fullSyncUsername](c8obase.md#protected-_fullsyncusername)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:24](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oBase.ts#L24)*

___

### `Protected` _headers

• **_headers**: *Object*

*Inherited from [C8oBase](c8obase.md).[_headers](c8obase.md#protected-_headers)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:46](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oBase.ts#L46)*

___

### `Protected` _initalLogLevel

• **_initalLogLevel**: *Boolean*

*Inherited from [C8oBase](c8obase.md).[_initalLogLevel](c8obase.md#protected-_initalloglevel)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:48](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oBase.ts#L48)*

___

### `Protected` _initialLogRemote

• **_initialLogRemote**: *boolean* = true

*Inherited from [C8oBase](c8obase.md).[_initialLogRemote](c8obase.md#protected-_initiallogremote)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:14](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oBase.ts#L14)*

___

### `Protected` _keepSessionAlive

• **_keepSessionAlive**: *boolean* = true

*Inherited from [C8oBase](c8obase.md).[_keepSessionAlive](c8obase.md#protected-_keepsessionalive)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:38](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oBase.ts#L38)*

___

### `Protected` _keyStorePassword

• **_keyStorePassword**: *string*

*Inherited from [C8oBase](c8obase.md).[_keyStorePassword](c8obase.md#protected-_keystorepassword)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:31](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oBase.ts#L31)*

___

### `Protected` _logC8o

• **_logC8o**: *boolean* = false

*Inherited from [C8oBase](c8obase.md).[_logC8o](c8obase.md#protected-_logc8o)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:16](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oBase.ts#L16)*

___

### `Protected` _logLevelLocal

• **_logLevelLocal**: *[C8oLogLevel](c8ologlevel.md)* =  C8oLogLevel.NONE

*Inherited from [C8oBase](c8obase.md).[_logLevelLocal](c8obase.md#protected-_loglevellocal)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:15](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oBase.ts#L15)*

___

### `Protected` _logOnFail

• **_logOnFail**: *function*

*Inherited from [C8oBase](c8obase.md).[_logOnFail](c8obase.md#protected-_logonfail)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:17](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oBase.ts#L17)*

#### Type declaration:

▸ (`exception`: Error, `parameters`: Object): *void*

**Parameters:**

Name | Type |
------ | ------ |
`exception` | Error |
`parameters` | Object |

___

### `Protected` _logRemote

• **_logRemote**: *boolean* = true

*Inherited from [C8oBase](c8obase.md).[_logRemote](c8obase.md#protected-_logremote)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:13](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oBase.ts#L13)*

___

### `Protected` _normalizeParameters

• **_normalizeParameters**: *boolean*

*Inherited from [C8oBase](c8obase.md).[_normalizeParameters](c8obase.md#protected-_normalizeparameters)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:36](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oBase.ts#L36)*

___

### `Protected` _prefixBase

• **_prefixBase**: *boolean* = false

*Inherited from [C8oBase](c8obase.md).[_prefixBase](c8obase.md#protected-_prefixbase)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:44](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oBase.ts#L44)*

___

### `Protected` _resetBase

• **_resetBase**: *boolean* = true

*Inherited from [C8oBase](c8obase.md).[_resetBase](c8obase.md#protected-_resetbase)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:42](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oBase.ts#L42)*

___

### `Protected` _timeout

• **_timeout**: *number* =  -1

*Inherited from [C8oBase](c8obase.md).[_timeout](c8obase.md#protected-_timeout)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:6](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oBase.ts#L6)*

___

### `Protected` _trustStorePassword

• **_trustStorePassword**: *string*

*Inherited from [C8oBase](c8obase.md).[_trustStorePassword](c8obase.md#protected-_truststorepassword)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:33](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oBase.ts#L33)*

___

### `Protected` _useEncryption

• **_useEncryption**: *boolean* = false

*Inherited from [C8oBase](c8obase.md).[_useEncryption](c8obase.md#protected-_useencryption)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:28](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oBase.ts#L28)*

## Accessors

###  authenticationCookieValue

• **get authenticationCookieValue**(): *string*

*Inherited from [C8oBase](c8obase.md).[authenticationCookieValue](c8obase.md#authenticationcookievalue)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:149](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oBase.ts#L149)*

**Returns:** *string*

___

###  cookies

• **get cookies**(): *Object*

*Inherited from [C8oBase](c8obase.md).[cookies](c8obase.md#cookies)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:119](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oBase.ts#L119)*

Gets initial cookies to send to the Convertigo server.<br/>
Default is <b>null</b>.

**Returns:** *Object*

List of cookies.

___

###  defaultDatabaseName

• **get defaultDatabaseName**(): *string*

*Inherited from [C8oBase](c8obase.md).[defaultDatabaseName](c8obase.md#defaultdatabasename)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:145](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oBase.ts#L145)*

**Returns:** *string*

___

###  endpoint

• **get endpoint**(): *string*

*Inherited from [C8oBase](c8obase.md).[endpoint](c8obase.md#endpoint)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:180](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oBase.ts#L180)*

Gets the endpoint define in C8oSettings<br/>

**Returns:** *string*

The current <b>endpoint</b>, if defined by c8oSettings.

___

###  errorConvertigoIntoFail

• **get errorConvertigoIntoFail**(): *boolean*

*Inherited from [C8oBase](c8obase.md).[errorConvertigoIntoFail](c8obase.md#errorconvertigointofail)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:73](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oBase.ts#L73)*

Gets if error convertigo are thrown into fail.<br/>
Default is <b>false</b>.

**Returns:** *boolean*

The errorConvertigoIntoFail status.

___

###  fullSyncLocalSuffix

• **get fullSyncLocalSuffix**(): *string*

*Inherited from [C8oBase](c8obase.md).[fullSyncLocalSuffix](c8obase.md#fullsynclocalsuffix)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:153](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oBase.ts#L153)*

**Returns:** *string*

___

###  fullSyncPassword

• **get fullSyncPassword**(): *string*

*Inherited from [C8oBase](c8obase.md).[fullSyncPassword](c8obase.md#fullsyncpassword)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:168](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oBase.ts#L168)*

**Returns:** *string*

___

###  fullSyncServerUrl

• **get fullSyncServerUrl**(): *string*

*Inherited from [C8oBase](c8obase.md).[fullSyncServerUrl](c8obase.md#fullsyncserverurl)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:158](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oBase.ts#L158)*

**Returns:** *string*

___

###  fullSyncUsername

• **get fullSyncUsername**(): *string*

*Inherited from [C8oBase](c8obase.md).[fullSyncUsername](c8obase.md#fullsyncusername)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:163](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oBase.ts#L163)*

**Returns:** *string*

___

###  headers

• **get headers**(): *Object*

*Inherited from [C8oBase](c8obase.md).[headers](c8obase.md#headers)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:184](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oBase.ts#L184)*

**Returns:** *Object*

___

###  keepSessionAlive

• **get keepSessionAlive**(): *boolean*

*Inherited from [C8oBase](c8obase.md).[keepSessionAlive](c8obase.md#keepsessionalive)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:64](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oBase.ts#L64)*

Gets if session has to be keep alive.<br/>
Default is <b>true</b>.

**Returns:** *boolean*

The KeepSessionAlive status.

___

###  logC8o

• **get logC8o**(): *boolean*

*Inherited from [C8oBase](c8obase.md).[logC8o](c8obase.md#logc8o)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:141](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oBase.ts#L141)*

**Returns:** *boolean*

___

###  logLevelLocal

• **get logLevelLocal**(): *[C8oLogLevel](c8ologlevel.md)*

*Inherited from [C8oBase](c8obase.md).[logLevelLocal](c8obase.md#loglevellocal)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:137](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oBase.ts#L137)*

Gets a value indicating logs level local

**Returns:** *[C8oLogLevel](c8ologlevel.md)*

C8oLogLevel object

___

###  logOnFail

• **get logOnFail**(): *function*

*Inherited from [C8oBase](c8obase.md).[logOnFail](c8obase.md#logonfail)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:172](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oBase.ts#L172)*

**Returns:** *function*

▸ (`exception`: Error, `parameters`: Object): *void*

**Parameters:**

Name | Type |
------ | ------ |
`exception` | Error |
`parameters` | Object |

___

###  logRemote

• **get logRemote**(): *boolean*

*Inherited from [C8oBase](c8obase.md).[logRemote](c8obase.md#logremote)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:128](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oBase.ts#L128)*

Gets a value indicating if logs are sent to the Convertigo server.<br/>
Default is <b>true</b>.

**Returns:** *boolean*

<b>true</b> if logs are sent to the Convertigo server; otherwise, <b>false</b>.

___

###  normalizeParameters

• **get normalizeParameters**(): *boolean*

*Inherited from [C8oBase](c8obase.md).[normalizeParameters](c8obase.md#normalizeparameters)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:56](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oBase.ts#L56)*

Gets if normalize parameters.<br/>
Default is <b>false</b>.

**Returns:** *boolean*

The timeout.

___

###  prefixBase

• **get prefixBase**(): *boolean*

*Inherited from [C8oBase](c8obase.md).[prefixBase](c8obase.md#prefixbase)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:92](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oBase.ts#L92)*

Gets if we have to prefix databases with user name.<br/>
Default is <b>false</b>.

**Returns:** *boolean*

The prefix base status.

___

###  resetBase

• **get resetBase**(): *boolean*

*Inherited from [C8oBase](c8obase.md).[resetBase](c8obase.md#resetbase)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:83](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oBase.ts#L83)*

Gets if reset database is disabled.<br/>
Default is <b>true</b>.

**Returns:** *boolean*

The disable reset base status.

___

###  timeout

• **get timeout**(): *number*

*Inherited from [C8oBase](c8obase.md).[timeout](c8obase.md#timeout)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:101](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oBase.ts#L101)*

Gets the connection timeout to Convertigo in milliseconds. A value of zero means the timeout is not used.<br/>
Default is <b>0</b>.

**Returns:** *number*

The timeout.

## Methods

###  addClientCertificate

▸ **addClientCertificate**(`anyCertificate`: string, `password`: string): *[C8oSettings](c8osettings.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oSettings.ts:125](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oSettings.ts#L125)*

addClientCertificate

**Parameters:**

Name | Type |
------ | ------ |
`anyCertificate` | string |
`password` | string |

**Returns:** *[C8oSettings](c8osettings.md)*

▸ **addClientCertificate**(`anyCertificate`: number, `password`: string): *[C8oSettings](c8osettings.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oSettings.ts:133](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oSettings.ts#L133)*

addClientCertificate

**Parameters:**

Name | Type |
------ | ------ |
`anyCertificate` | number |
`password` | string |

**Returns:** *[C8oSettings](c8osettings.md)*

___

###  addCookie

▸ **addCookie**(`name`: string, `value`: string): *[C8oSettings](c8osettings.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oSettings.ts:162](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oSettings.ts#L162)*

Add a new cookie to the initial cookies send to the Convertigo server.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | The name of the new cookie. |
`value` | string | The value of the new cookie. |

**Returns:** *[C8oSettings](c8osettings.md)*

The current <b>C8oSettings</b>, for chaining.

___

###  addHeader

▸ **addHeader**(`name`: string, `value`: string): *this*

*Defined in [c8osdk-js-core/src/c8o/c8oSettings.ts:114](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oSettings.ts#L114)*

Add a header

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | The name of header. |
`value` | string | The value of header. |

**Returns:** *this*

The current <b>C8oSettings</b>, for chaining.

___

###  clone

▸ **clone**(): *[C8oSettings](c8osettings.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oSettings.ts:26](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oSettings.ts#L26)*

Clone C8osettings object

**Returns:** *[C8oSettings](c8osettings.md)*

___

###  copy

▸ **copy**(`c8oBase`: [C8oBase](c8obase.md)): *void*

*Inherited from [C8oBase](c8obase.md).[copy](c8obase.md#copy)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:188](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oBase.ts#L188)*

**Parameters:**

Name | Type |
------ | ------ |
`c8oBase` | [C8oBase](c8obase.md) |

**Returns:** *void*

___

###  setAuthenticationCookieValue

▸ **setAuthenticationCookieValue**(`authenticationCookieValue`: string): *[C8oSettings](c8osettings.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oSettings.ts:229](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oSettings.ts#L229)*

setAuthenticationCookieValue

**Parameters:**

Name | Type |
------ | ------ |
`authenticationCookieValue` | string |

**Returns:** *[C8oSettings](c8osettings.md)*

___

###  setDefaultDatabaseName

▸ **setDefaultDatabaseName**(`defaultDatabaseName`: string): *[C8oSettings](c8osettings.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oSettings.ts:219](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oSettings.ts#L219)*

Specify the default FullSync database name. Must match a Convertigo Server
FullSync connector name

**Parameters:**

Name | Type |
------ | ------ |
`defaultDatabaseName` | string |

**Returns:** *[C8oSettings](c8osettings.md)*

The current <b>C8oSettings</b>, for chaining.

___

###  setDisableResetBase

▸ **setDisableResetBase**(`resetBase`: boolean): *[C8oSettings](c8osettings.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oSettings.ts:68](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oSettings.ts#L68)*

Sets the if base has to be reseted on dectecting diffrent versions<br/>

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`resetBase` | boolean | if you to able reset base |

**Returns:** *[C8oSettings](c8osettings.md)*

The current <b>C8oSettings</b>, for chaining.

___

###  setEnablePrefixBase

▸ **setEnablePrefixBase**(`prefixBase`: boolean): *[C8oSettings](c8osettings.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oSettings.ts:78](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oSettings.ts#L78)*

Sets the if base has to be prefixed by user name<br/>

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prefixBase` | boolean | if you to able prefix base |

**Returns:** *[C8oSettings](c8osettings.md)*

The current <b>C8oSettings</b>, for chaining.

___

###  setEndPoint

▸ **setEndPoint**(`endpoint`: string): *[C8oSettings](c8osettings.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oSettings.ts:90](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oSettings.ts#L90)*

Sets the endpoint (override env.json).<br/>

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`endpoint` | string | The endpoint. |

**Returns:** *[C8oSettings](c8osettings.md)*

The current <b>C8oSettings</b>, for chaining.

___

###  setErrorConvertigoIntoFail

▸ **setErrorConvertigoIntoFail**(`errorConvertigoIntoFail`: boolean): *[C8oSettings](c8osettings.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oSettings.ts:55](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oSettings.ts#L55)*

Sets if the error convertigo is throw in fail or not<br/>

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`errorConvertigoIntoFail` | boolean | boolean |

**Returns:** *[C8oSettings](c8osettings.md)*

The current <b>C8oSettings</b>, for chaining.

___

###  setFullSyncLocalSuffix

▸ **setFullSyncLocalSuffix**(`fullSyncLocalSuffix`: string): *[C8oSettings](c8osettings.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oSettings.ts:269](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oSettings.ts#L269)*

setFullSyncLocalSuffix

**Parameters:**

Name | Type |
------ | ------ |
`fullSyncLocalSuffix` | string |

**Returns:** *[C8oSettings](c8osettings.md)*

___

###  setFullSyncPassword

▸ **setFullSyncPassword**(`fullSyncPassword`: string): *[C8oSettings](c8osettings.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oSettings.ts:259](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oSettings.ts#L259)*

setFullSyncPassword

**Parameters:**

Name | Type |
------ | ------ |
`fullSyncPassword` | string |

**Returns:** *[C8oSettings](c8osettings.md)*

___

###  setFullSyncServerUrl

▸ **setFullSyncServerUrl**(`fullSyncServerUrl`: string): *[C8oSettings](c8osettings.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oSettings.ts:239](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oSettings.ts#L239)*

setFullSyncServerUrl

**Parameters:**

Name | Type |
------ | ------ |
`fullSyncServerUrl` | string |

**Returns:** *[C8oSettings](c8osettings.md)*

___

###  setFullSyncUsername

▸ **setFullSyncUsername**(`fullSyncUsername`: string): *[C8oSettings](c8osettings.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oSettings.ts:249](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oSettings.ts#L249)*

setFullSyncUsername

**Parameters:**

Name | Type |
------ | ------ |
`fullSyncUsername` | string |

**Returns:** *[C8oSettings](c8osettings.md)*

___

###  setKeepSessionAlive

▸ **setKeepSessionAlive**(`keepAlive`: boolean): *[C8oSettings](c8osettings.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oSettings.ts:45](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oSettings.ts#L45)*

Sets the if session has to be maintain alive<br/>

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`keepAlive` | boolean | if session has to be keep Alive |

**Returns:** *[C8oSettings](c8osettings.md)*

The current <b>C8oSettings</b>, for chaining.

___

###  setLogC8o

▸ **setLogC8o**(`logC8o`: boolean): *[C8oSettings](c8osettings.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oSettings.ts:197](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oSettings.ts#L197)*

setLogC8o

**Parameters:**

Name | Type |
------ | ------ |
`logC8o` | boolean |

**Returns:** *[C8oSettings](c8osettings.md)*

___

###  setLogLevelLocal

▸ **setLogLevelLocal**(`logLevelLocal`: [C8oLogLevel](c8ologlevel.md)): *[C8oSettings](c8osettings.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oSettings.ts:187](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oSettings.ts#L187)*

Sets a value indicating the log level you want in the device console
0: ALL, 1: NONE, 2: TRACE, 3: DEBUG, 4: INFO, 5: WARN, 6: ERROR, 7: FATAL
or use the android.util.Log constants
Default is <b>0</b>.

**Parameters:**

Name | Type |
------ | ------ |
`logLevelLocal` | [C8oLogLevel](c8ologlevel.md) |

**Returns:** *[C8oSettings](c8osettings.md)*

The current <b>C8oSettings</b>, for chaining.

___

###  setLogOnFail

▸ **setLogOnFail**(`logOnFail`: function): *[C8oSettings](c8osettings.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oSettings.ts:207](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oSettings.ts#L207)*

setLogOnFail

**Parameters:**

▪ **logOnFail**: *function*

▸ (`exception`: Error, `parameters`: Object): *void*

**Parameters:**

Name | Type |
------ | ------ |
`exception` | Error |
`parameters` | Object |

**Returns:** *[C8oSettings](c8osettings.md)*

___

###  setLogRemote

▸ **setLogRemote**(`logRemote`: boolean): *[C8oSettings](c8osettings.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oSettings.ts:175](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oSettings.ts#L175)*

Sets a value indicating if logs are sent to the Convertigo server.<br/>
Default is <b>true</b>.

**Parameters:**

Name | Type |
------ | ------ |
`logRemote` | boolean |

**Returns:** *[C8oSettings](c8osettings.md)*

The current <b>C8oSettings</b>, for chaining.

___

###  setNormalizeParameters

▸ **setNormalizeParameters**(`normalize`: boolean): *[C8oSettings](c8osettings.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oSettings.ts:35](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oSettings.ts#L35)*

Sets the normalizeParameters. define if we normalize parameters of every calls using JSON.parse(JSON.stringify(parameters))<br/>

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`normalize` | boolean | boolean. |

**Returns:** *[C8oSettings](c8osettings.md)*

The current <b>C8oSettings</b>, for chaining.

___

###  setTimeout

▸ **setTimeout**(`timeout`: number): *[C8oSettings](c8osettings.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oSettings.ts:101](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oSettings.ts#L101)*

Sets the connection timeout to Convertigo in milliseconds. A value of zero means the timeout is not used.<br/>
Default is <b>0</b>.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`timeout` | number | The timeout. |

**Returns:** *[C8oSettings](c8osettings.md)*

The current <b>C8oSettings</b>, for chaining.

___

###  setUseEncryption

▸ **setUseEncryption**(`useEncryption`: boolean): *[C8oSettings](c8osettings.md)*

*Defined in [c8osdk-js-core/src/c8o/c8oSettings.ts:280](https://github.com/convertigo/c8osdk-angular/blob/d8ba06a/src/c8o/c8oSettings.ts#L280)*

Set if c8o calls variables are encrypted or not

**Parameters:**

Name | Type |
------ | ------ |
`useEncryption` | boolean |

**Returns:** *[C8oSettings](c8osettings.md)*

The current <b>C8oSettings</b>, for chaining.
