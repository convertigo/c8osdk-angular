[c8osdkjscore](../README.md) › [C8o](c8o.md)

# Class: C8o

## Hierarchy

  ↳ [C8oCore](c8ocore.md)

  ↳ **C8o**

## Index

### Constructors

* [constructor](c8o.md#constructor)

### Properties

* [_authenticationCookieValue](c8o.md#protected-_authenticationcookievalue)
* [_automaticRemoveSplashsCreen](c8o.md#protected-_automaticremovesplashscreen)
* [_clientCertificateBinaries](c8o.md#protected-_clientcertificatebinaries)
* [_clientCertificateFiles](c8o.md#protected-_clientcertificatefiles)
* [_cookies](c8o.md#protected-_cookies)
* [_couchUrl](c8o.md#protected-_couchurl)
* [_defaultDatabaseName](c8o.md#protected-_defaultdatabasename)
* [_disableSSL](c8o.md#protected-_disablessl)
* [_endpoint](c8o.md#protected-_endpoint)
* [_endpointConvertigo](c8o.md#protected-_endpointconvertigo)
* [_endpointHost](c8o.md#protected-_endpointhost)
* [_endpointIsSecure](c8o.md#protected-_endpointissecure)
* [_endpointPort](c8o.md#protected-_endpointport)
* [_endpointProject](c8o.md#protected-_endpointproject)
* [_endpointSettings](c8o.md#protected-_endpointsettings)
* [_errorConvertigoIntoFail](c8o.md#protected-_errorconvertigointofail)
* [_fullSyncLocalSuffix](c8o.md#protected-_fullsynclocalsuffix)
* [_fullSyncPassword](c8o.md#protected-_fullsyncpassword)
* [_fullSyncServerUrl](c8o.md#protected-_fullsyncserverurl)
* [_fullSyncUsername](c8o.md#protected-_fullsyncusername)
* [_headers](c8o.md#protected-_headers)
* [_http](c8o.md#protected-_http)
* [_initalLogLevel](c8o.md#protected-_initalloglevel)
* [_initialLogRemote](c8o.md#protected-_initiallogremote)
* [_keepSessionAlive](c8o.md#protected-_keepsessionalive)
* [_keyStorePassword](c8o.md#protected-_keystorepassword)
* [_logC8o](c8o.md#protected-_logc8o)
* [_logLevelLocal](c8o.md#protected-_loglevellocal)
* [_logOnFail](c8o.md#protected-_logonfail)
* [_logRemote](c8o.md#protected-_logremote)
* [_normalizeParameters](c8o.md#protected-_normalizeparameters)
* [_prefixBase](c8o.md#protected-_prefixbase)
* [_resetBase](c8o.md#protected-_resetbase)
* [_timeout](c8o.md#protected-_timeout)
* [_trustStorePassword](c8o.md#protected-_truststorepassword)
* [_useEncryption](c8o.md#protected-_useencryption)
* [c8oFullSync](c8o.md#c8ofullsync)
* [c8oLogger](c8o.md#c8ologger)
* [data](c8o.md#protected-data)
* [database](c8o.md#database)
* [handleFullSyncLive](c8o.md#protected-handlefullsynclive)
* [http](c8o.md#private-http)
* [httpInterface](c8o.md#httpinterface)
* [lives](c8o.md#lives)
* [livesDb](c8o.md#livesdb)
* [network](c8o.md#network)
* [promiseConstructor](c8o.md#protected-promiseconstructor)
* [promiseFinInit](c8o.md#promisefininit)
* [promiseInit](c8o.md#protected-promiseinit)
* [promiseReachable](c8o.md#protected-promisereachable)
* [reachable](c8o.md#reachable)
* [replicationsToRestart](c8o.md#protected-replicationstorestart)
* [session](c8o.md#session)
* [subscriber_login](c8o.md#subscriber_login)
* [subscriber_network](c8o.md#subscriber_network)
* [subscriber_session](c8o.md#subscriber_session)
* [xsrfUsed](c8o.md#xsrfused)
* [ENGINE_PARAMETER_CONNECTOR](c8o.md#static-engine_parameter_connector)
* [ENGINE_PARAMETER_DEVICE_UUID](c8o.md#static-engine_parameter_device_uuid)
* [ENGINE_PARAMETER_ENCODED](c8o.md#static-engine_parameter_encoded)
* [ENGINE_PARAMETER_FROM_LIVE](c8o.md#static-engine_parameter_from_live)
* [ENGINE_PARAMETER_PROGRESS](c8o.md#static-engine_parameter_progress)
* [ENGINE_PARAMETER_PROJECT](c8o.md#static-engine_parameter_project)
* [ENGINE_PARAMETER_SEQUENCE](c8o.md#static-engine_parameter_sequence)
* [ENGINE_PARAMETER_TRANSACTION](c8o.md#static-engine_parameter_transaction)
* [FS_LIVE](c8o.md#static-fs_live)
* [FS_POLICY](c8o.md#static-fs_policy)
* [FS_POLICY_CREATE](c8o.md#static-fs_policy_create)
* [FS_POLICY_MERGE](c8o.md#static-fs_policy_merge)
* [FS_POLICY_NONE](c8o.md#static-fs_policy_none)
* [FS_POLICY_OVERRIDE](c8o.md#static-fs_policy_override)
* [FS_SUBKEY_SEPARATOR](c8o.md#static-fs_subkey_separator)
* [LOCAL_CACHE_DATABASE_NAME](c8o.md#static-local_cache_database_name)
* [LOCAL_CACHE_DOCUMENT_KEY_EXPIRATION_DATE](c8o.md#static-local_cache_document_key_expiration_date)
* [LOCAL_CACHE_DOCUMENT_KEY_RESPONSE](c8o.md#static-local_cache_document_key_response)
* [LOCAL_CACHE_DOCUMENT_KEY_RESPONSE_TYPE](c8o.md#static-local_cache_document_key_response_type)
* [RESPONSE_TYPE_JSON](c8o.md#static-response_type_json)
* [RESPONSE_TYPE_XML](c8o.md#static-response_type_xml)
* [RE_ENDPOINT](c8o.md#static-protected-re_endpoint)
* [RE_REQUESTABLE](c8o.md#static-protected-re_requestable)
* [SEQ_AUTO_LOGIN_OFF](c8o.md#static-seq_auto_login_off)
* [use_merge_prefix](c8o.md#static-use_merge_prefix)

### Accessors

* [authenticationCookieValue](c8o.md#authenticationcookievalue)
* [cookies](c8o.md#cookies)
* [coreVersion](c8o.md#coreversion)
* [couchUrl](c8o.md#couchurl)
* [defaultDatabaseName](c8o.md#defaultdatabasename)
* [deviceUUID](c8o.md#deviceuuid)
* [endpoint](c8o.md#endpoint)
* [endpointConvertigo](c8o.md#endpointconvertigo)
* [endpointHost](c8o.md#endpointhost)
* [endpointIsSecure](c8o.md#endpointissecure)
* [endpointPort](c8o.md#endpointport)
* [endpointProject](c8o.md#endpointproject)
* [errorConvertigoIntoFail](c8o.md#errorconvertigointofail)
* [fullSyncLocalSuffix](c8o.md#fullsynclocalsuffix)
* [fullSyncPassword](c8o.md#fullsyncpassword)
* [fullSyncServerUrl](c8o.md#fullsyncserverurl)
* [fullSyncUsername](c8o.md#fullsyncusername)
* [headers](c8o.md#headers)
* [httpPublic](c8o.md#httppublic)
* [keepSessionAlive](c8o.md#keepsessionalive)
* [log](c8o.md#log)
* [logC8o](c8o.md#logc8o)
* [logLevelLocal](c8o.md#loglevellocal)
* [logOnFail](c8o.md#logonfail)
* [logRemote](c8o.md#logremote)
* [normalizeParameters](c8o.md#normalizeparameters)
* [prefixBase](c8o.md#prefixbase)
* [resetBase](c8o.md#resetbase)
* [sdkVersion](c8o.md#sdkversion)
* [timeout](c8o.md#timeout)

### Methods

* [_call](c8o.md#_call)
* [addFullSyncChangeListener](c8o.md#addfullsyncchangelistener)
* [addLive](c8o.md#addlive)
* [call](c8o.md#call)
* [callJson](c8o.md#calljson)
* [callJsonObject](c8o.md#calljsonobject)
* [cancelLive](c8o.md#cancellive)
* [copy](c8o.md#copy)
* [extractendpoint](c8o.md#protected-extractendpoint)
* [finalizeInit](c8o.md#finalizeinit)
* [get_attachment](c8o.md#get_attachment)
* [handleAutoLoginResponse](c8o.md#handleautologinresponse)
* [handleCallException](c8o.md#handlecallexception)
* [handleNetworkEvents](c8o.md#handlenetworkevents)
* [handleSessionLost](c8o.md#handlesessionlost)
* [httpGetObservable](c8o.md#httpgetobservable)
* [importLoginState](c8o.md#importloginstate)
* [init](c8o.md#init)
* [initC8oHttInterface](c8o.md#initc8ohttinterface)
* [removeFullSyncChangeListener](c8o.md#removefullsyncchangelistener)
* [removeNull](c8o.md#removenull)
* [toString](c8o.md#tostring)
* [toParameters](c8o.md#static-toparameters)

## Constructors

###  constructor

\+ **new C8o**(`http`: HttpClient): *[C8o](c8o.md)*

*Overrides [C8oCore](c8ocore.md).[constructor](c8ocore.md#constructor)*

*Defined in [lib/c8o.service.ts:7](https://github.com/convertigo/c8osdk-angular/blob/57c1351/projects/c8osdkangular/src/lib/c8o.service.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`http` | HttpClient |

**Returns:** *[C8o](c8o.md)*

## Properties

### `Protected` _authenticationCookieValue

• **_authenticationCookieValue**: *string* =  null

*Inherited from [C8oBase](c8obase.md).[_authenticationCookieValue](c8obase.md#protected-_authenticationcookievalue)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:21](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oBase.ts#L21)*

___

### `Protected` _automaticRemoveSplashsCreen

• **_automaticRemoveSplashsCreen**: *boolean* = true

*Inherited from [C8oCore](c8ocore.md).[_automaticRemoveSplashsCreen](c8ocore.md#protected-_automaticremovesplashscreen)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:150](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L150)*

___

### `Protected` _clientCertificateBinaries

• **_clientCertificateBinaries**: *Object*

*Inherited from [C8oBase](c8obase.md).[_clientCertificateBinaries](c8obase.md#protected-_clientcertificatebinaries)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:10](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oBase.ts#L10)*

___

### `Protected` _clientCertificateFiles

• **_clientCertificateFiles**: *Object*

*Inherited from [C8oBase](c8obase.md).[_clientCertificateFiles](c8obase.md#protected-_clientcertificatefiles)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:9](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oBase.ts#L9)*

___

### `Protected` _cookies

• **_cookies**: *Object*

*Inherited from [C8oBase](c8obase.md).[_cookies](c8obase.md#protected-_cookies)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:8](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oBase.ts#L8)*

___

### `Protected` _couchUrl

• **_couchUrl**: *string* =  null

*Inherited from [C8oCore](c8ocore.md).[_couchUrl](c8ocore.md#protected-_couchurl)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:178](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L178)*

___

### `Protected` _defaultDatabaseName

• **_defaultDatabaseName**: *string* =  null

*Inherited from [C8oBase](c8obase.md).[_defaultDatabaseName](c8obase.md#protected-_defaultdatabasename)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:20](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oBase.ts#L20)*

___

### `Protected` _disableSSL

• **_disableSSL**: *boolean* = false

*Inherited from [C8oBase](c8obase.md).[_disableSSL](c8obase.md#protected-_disablessl)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:29](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oBase.ts#L29)*

___

### `Protected` _endpoint

• **_endpoint**: *string*

*Inherited from [C8oCore](c8ocore.md).[_endpoint](c8ocore.md#protected-_endpoint)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:144](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L144)*

The Convertigo endpoint, syntax: &lt;protocol&gt;://&lt;host&gt;:&lt;port&gt;/&lt;Convertigo web app path&gt;/projects/&lt;project name&gt; (Example: http://127.0.0.1:18080/convertigo/projects/MyProject)

___

### `Protected` _endpointConvertigo

• **_endpointConvertigo**: *string*

*Inherited from [C8oCore](c8ocore.md).[_endpointConvertigo](c8ocore.md#protected-_endpointconvertigo)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:145](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L145)*

___

### `Protected` _endpointHost

• **_endpointHost**: *string*

*Inherited from [C8oCore](c8ocore.md).[_endpointHost](c8ocore.md#protected-_endpointhost)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:147](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L147)*

___

### `Protected` _endpointIsSecure

• **_endpointIsSecure**: *boolean*

*Inherited from [C8oCore](c8ocore.md).[_endpointIsSecure](c8ocore.md#protected-_endpointissecure)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:146](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L146)*

___

### `Protected` _endpointPort

• **_endpointPort**: *string*

*Inherited from [C8oCore](c8ocore.md).[_endpointPort](c8ocore.md#protected-_endpointport)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:148](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L148)*

___

### `Protected` _endpointProject

• **_endpointProject**: *string*

*Inherited from [C8oCore](c8ocore.md).[_endpointProject](c8ocore.md#protected-_endpointproject)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:149](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L149)*

___

### `Protected` _endpointSettings

• **_endpointSettings**: *string*

*Inherited from [C8oBase](c8obase.md).[_endpointSettings](c8obase.md#protected-_endpointsettings)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:5](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oBase.ts#L5)*

___

### `Protected` _errorConvertigoIntoFail

• **_errorConvertigoIntoFail**: *boolean* = false

*Inherited from [C8oBase](c8obase.md).[_errorConvertigoIntoFail](c8obase.md#protected-_errorconvertigointofail)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:40](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oBase.ts#L40)*

___

### `Protected` _fullSyncLocalSuffix

• **_fullSyncLocalSuffix**: *string* =  null

*Inherited from [C8oBase](c8obase.md).[_fullSyncLocalSuffix](c8obase.md#protected-_fullsynclocalsuffix)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:22](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oBase.ts#L22)*

___

### `Protected` _fullSyncPassword

• **_fullSyncPassword**: *string*

*Inherited from [C8oBase](c8obase.md).[_fullSyncPassword](c8obase.md#protected-_fullsyncpassword)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:25](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oBase.ts#L25)*

___

### `Protected` _fullSyncServerUrl

• **_fullSyncServerUrl**: *string* = "http://localhost:5984"

*Inherited from [C8oBase](c8obase.md).[_fullSyncServerUrl](c8obase.md#protected-_fullsyncserverurl)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:23](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oBase.ts#L23)*

___

### `Protected` _fullSyncUsername

• **_fullSyncUsername**: *string*

*Inherited from [C8oBase](c8obase.md).[_fullSyncUsername](c8obase.md#protected-_fullsyncusername)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:24](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oBase.ts#L24)*

___

### `Protected` _headers

• **_headers**: *Object*

*Inherited from [C8oBase](c8obase.md).[_headers](c8obase.md#protected-_headers)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:46](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oBase.ts#L46)*

___

### `Protected` _http

• **_http**: *any*

*Inherited from [C8oCore](c8ocore.md).[_http](c8ocore.md#protected-_http)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:177](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L177)*

___

### `Protected` _initalLogLevel

• **_initalLogLevel**: *Boolean*

*Inherited from [C8oBase](c8obase.md).[_initalLogLevel](c8obase.md#protected-_initalloglevel)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:48](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oBase.ts#L48)*

___

### `Protected` _initialLogRemote

• **_initialLogRemote**: *boolean* = true

*Inherited from [C8oBase](c8obase.md).[_initialLogRemote](c8obase.md#protected-_initiallogremote)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:14](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oBase.ts#L14)*

___

### `Protected` _keepSessionAlive

• **_keepSessionAlive**: *boolean* = true

*Inherited from [C8oBase](c8obase.md).[_keepSessionAlive](c8obase.md#protected-_keepsessionalive)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:38](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oBase.ts#L38)*

___

### `Protected` _keyStorePassword

• **_keyStorePassword**: *string*

*Inherited from [C8oBase](c8obase.md).[_keyStorePassword](c8obase.md#protected-_keystorepassword)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:31](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oBase.ts#L31)*

___

### `Protected` _logC8o

• **_logC8o**: *boolean* = false

*Inherited from [C8oBase](c8obase.md).[_logC8o](c8obase.md#protected-_logc8o)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:16](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oBase.ts#L16)*

___

### `Protected` _logLevelLocal

• **_logLevelLocal**: *[C8oLogLevel](c8ologlevel.md)* =  C8oLogLevel.NONE

*Inherited from [C8oBase](c8obase.md).[_logLevelLocal](c8obase.md#protected-_loglevellocal)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:15](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oBase.ts#L15)*

___

### `Protected` _logOnFail

• **_logOnFail**: *function*

*Inherited from [C8oBase](c8obase.md).[_logOnFail](c8obase.md#protected-_logonfail)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:17](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oBase.ts#L17)*

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

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:13](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oBase.ts#L13)*

___

### `Protected` _normalizeParameters

• **_normalizeParameters**: *boolean*

*Inherited from [C8oBase](c8obase.md).[_normalizeParameters](c8obase.md#protected-_normalizeparameters)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:36](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oBase.ts#L36)*

___

### `Protected` _prefixBase

• **_prefixBase**: *boolean* = false

*Inherited from [C8oBase](c8obase.md).[_prefixBase](c8obase.md#protected-_prefixbase)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:44](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oBase.ts#L44)*

___

### `Protected` _resetBase

• **_resetBase**: *boolean* = true

*Inherited from [C8oBase](c8obase.md).[_resetBase](c8obase.md#protected-_resetbase)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:42](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oBase.ts#L42)*

___

### `Protected` _timeout

• **_timeout**: *number* =  -1

*Inherited from [C8oBase](c8obase.md).[_timeout](c8obase.md#protected-_timeout)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:6](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oBase.ts#L6)*

___

### `Protected` _trustStorePassword

• **_trustStorePassword**: *string*

*Inherited from [C8oBase](c8obase.md).[_trustStorePassword](c8obase.md#protected-_truststorepassword)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:33](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oBase.ts#L33)*

___

### `Protected` _useEncryption

• **_useEncryption**: *boolean* = false

*Inherited from [C8oBase](c8obase.md).[_useEncryption](c8obase.md#protected-_useencryption)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:28](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oBase.ts#L28)*

___

###  c8oFullSync

• **c8oFullSync**: *[C8oFullSync](c8ofullsync.md)*

*Inherited from [C8oCore](c8ocore.md).[c8oFullSync](c8ocore.md#c8ofullsync)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:165](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L165)*

Used to run fullSync requests.

___

###  c8oLogger

• **c8oLogger**: *[C8oLogger](c8ologger.md)*

*Inherited from [C8oCore](c8ocore.md).[c8oLogger](c8ocore.md#c8ologger)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:160](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L160)*

Allows to log locally and remotely to the Convertigo server.

___

### `Protected` data

• **data**: *any*

*Inherited from [C8oCore](c8ocore.md).[data](c8ocore.md#protected-data)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:176](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L176)*

___

###  database

• **database**: *[C8oManagerDatabase](c8omanagerdatabase.md)*

*Inherited from [C8oCore](c8ocore.md).[database](c8ocore.md#database)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:189](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L189)*

___

### `Protected` handleFullSyncLive

• **handleFullSyncLive**: *[C8oFullSyncChangeListener](c8ofullsyncchangelistener.md)* =  new C8oFullSyncChangeListener(
        (changes: Object) => {
            for (const task in this.lives) {
                (this.lives[task] as C8oCallTask).executeFromLive();
            }
    })

*Inherited from [C8oCore](c8ocore.md).[handleFullSyncLive](c8ocore.md#protected-handlefullsynclive)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:652](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L652)*

___

### `Private` http

• **http**: *HttpClient*

*Defined in [lib/c8o.service.ts:9](https://github.com/convertigo/c8osdk-angular/blob/57c1351/projects/c8osdkangular/src/lib/c8o.service.ts#L9)*

___

###  httpInterface

• **httpInterface**: *[C8oHttpInterfaceCore](c8ohttpinterfacecore.md)*

*Inherited from [C8oCore](c8ocore.md).[httpInterface](c8ocore.md#httpinterface)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:155](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L155)*

Used to run HTTP requests.

___

###  lives

• **lives**: *[C8oCallTask](c8ocalltask.md)[]* =  []

*Inherited from [C8oCore](c8ocore.md).[lives](c8ocore.md#lives)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:167](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L167)*

___

###  livesDb

• **livesDb**: *string[]* =  []

*Inherited from [C8oCore](c8ocore.md).[livesDb](c8ocore.md#livesdb)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:168](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L168)*

___

###  network

• **network**: *[C8oManagerNetwork](c8omanagernetwork.md)*

*Inherited from [C8oCore](c8ocore.md).[network](c8ocore.md#network)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:188](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L188)*

___

### `Protected` promiseConstructor

• **promiseConstructor**: *Promise‹any›*

*Inherited from [C8oCore](c8ocore.md).[promiseConstructor](c8ocore.md#protected-promiseconstructor)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:179](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L179)*

___

###  promiseFinInit

• **promiseFinInit**: *Promise‹any›*

*Inherited from [C8oCore](c8ocore.md).[promiseFinInit](c8ocore.md#promisefininit)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:181](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L181)*

___

### `Protected` promiseInit

• **promiseInit**: *Promise‹any›*

*Inherited from [C8oCore](c8ocore.md).[promiseInit](c8ocore.md#protected-promiseinit)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:180](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L180)*

___

### `Protected` promiseReachable

• **promiseReachable**: *Promise‹any›*

*Inherited from [C8oCore](c8ocore.md).[promiseReachable](c8ocore.md#protected-promisereachable)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:182](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L182)*

___

###  reachable

• **reachable**: *any*

*Inherited from [C8oCore](c8ocore.md).[reachable](c8ocore.md#reachable)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:186](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L186)*

___

### `Protected` replicationsToRestart

• **replicationsToRestart**: *Array‹any›*

*Inherited from [C8oCore](c8ocore.md).[replicationsToRestart](c8ocore.md#protected-replicationstorestart)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:184](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L184)*

___

###  session

• **session**: *[C8oManagerSession](c8omanagersession.md)*

*Inherited from [C8oCore](c8ocore.md).[session](c8ocore.md#session)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:190](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L190)*

___

###  subscriber_login

• **subscriber_login**: *Subject‹any›*

*Inherited from [C8oCore](c8ocore.md).[subscriber_login](c8ocore.md#subscriber_login)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:172](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L172)*

___

###  subscriber_network

• **subscriber_network**: *Subject‹any›*

*Inherited from [C8oCore](c8ocore.md).[subscriber_network](c8ocore.md#subscriber_network)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:171](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L171)*

___

###  subscriber_session

• **subscriber_session**: *Subject‹any›*

*Inherited from [C8oCore](c8ocore.md).[subscriber_session](c8ocore.md#subscriber_session)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:170](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L170)*

___

###  xsrfUsed

• **xsrfUsed**: *boolean* = false

*Inherited from [C8oCore](c8ocore.md).[xsrfUsed](c8ocore.md#xsrfused)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:337](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L337)*

___

### `Static` ENGINE_PARAMETER_CONNECTOR

▪ **ENGINE_PARAMETER_CONNECTOR**: *string* = "__connector"

*Inherited from [C8oCore](c8ocore.md).[ENGINE_PARAMETER_CONNECTOR](c8ocore.md#static-engine_parameter_connector)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:57](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L57)*

___

### `Static` ENGINE_PARAMETER_DEVICE_UUID

▪ **ENGINE_PARAMETER_DEVICE_UUID**: *string* = "__uuid"

*Inherited from [C8oCore](c8ocore.md).[ENGINE_PARAMETER_DEVICE_UUID](c8ocore.md#static-engine_parameter_device_uuid)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:60](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L60)*

___

### `Static` ENGINE_PARAMETER_ENCODED

▪ **ENGINE_PARAMETER_ENCODED**: *string* = "__encoded"

*Inherited from [C8oCore](c8ocore.md).[ENGINE_PARAMETER_ENCODED](c8ocore.md#static-engine_parameter_encoded)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:59](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L59)*

___

### `Static` ENGINE_PARAMETER_FROM_LIVE

▪ **ENGINE_PARAMETER_FROM_LIVE**: *string* = "__fromLive"

*Inherited from [C8oCore](c8ocore.md).[ENGINE_PARAMETER_FROM_LIVE](c8ocore.md#static-engine_parameter_from_live)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:62](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L62)*

___

### `Static` ENGINE_PARAMETER_PROGRESS

▪ **ENGINE_PARAMETER_PROGRESS**: *string* = "__progress"

*Inherited from [C8oCore](c8ocore.md).[ENGINE_PARAMETER_PROGRESS](c8ocore.md#static-engine_parameter_progress)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:61](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L61)*

___

### `Static` ENGINE_PARAMETER_PROJECT

▪ **ENGINE_PARAMETER_PROJECT**: *string* = "__project"

*Inherited from [C8oCore](c8ocore.md).[ENGINE_PARAMETER_PROJECT](c8ocore.md#static-engine_parameter_project)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:55](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L55)*

 Engine reserved parameters

___

### `Static` ENGINE_PARAMETER_SEQUENCE

▪ **ENGINE_PARAMETER_SEQUENCE**: *string* = "__sequence"

*Inherited from [C8oCore](c8ocore.md).[ENGINE_PARAMETER_SEQUENCE](c8ocore.md#static-engine_parameter_sequence)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:56](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L56)*

___

### `Static` ENGINE_PARAMETER_TRANSACTION

▪ **ENGINE_PARAMETER_TRANSACTION**: *string* = "__transaction"

*Inherited from [C8oCore](c8ocore.md).[ENGINE_PARAMETER_TRANSACTION](c8ocore.md#static-engine_parameter_transaction)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:58](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L58)*

___

### `Static` FS_LIVE

▪ **FS_LIVE**: *string* = "__live"

*Inherited from [C8oCore](c8ocore.md).[FS_LIVE](c8ocore.md#static-fs_live)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:123](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L123)*

Use it with "fs://" request as parameter to enable the live request feature.<br/>
Must be followed by a string parameter, the 'liveid' that can be use to cancel the live
request using c8o.cancelLive(liveid) method.<br/>
A live request automatically recall the then or thenUI handler when the database changed.

___

### `Static` FS_POLICY

▪ **FS_POLICY**: *string* = "_use_policy"

*Inherited from [C8oCore](c8ocore.md).[FS_POLICY](c8ocore.md#static-fs_policy)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:79](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L79)*

Constant to use as a parameter for a Call of "fs://.post" and must be followed by a FS_POLICY_* constant.
<pre>{@code
c8o.callJson("fs://.post",
  C8o.FS_POLICY, C8o.FS_POLICY_MERGE,
  "docid", myid,
  "mykey", myvalue
).sync();
}</pre>

___

### `Static` FS_POLICY_CREATE

▪ **FS_POLICY_CREATE**: *string* = "create"

*Inherited from [C8oCore](c8ocore.md).[FS_POLICY_CREATE](c8ocore.md#static-fs_policy_create)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:91](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L91)*

Use it with "fs://.post" and C8o.FS_POLICY.

This post policy remove the "_id" and "_rev" of the document before the CouchbaseLite's insertion.

___

### `Static` FS_POLICY_MERGE

▪ **FS_POLICY_MERGE**: *string* = "merge"

*Inherited from [C8oCore](c8ocore.md).[FS_POLICY_MERGE](c8ocore.md#static-fs_policy_merge)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:103](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L103)*

Use it with "fs://.post" and C8o.FS_POLICY.

This post policy merge the document with an existing document with the same "_id" before the CouchbaseLite's insertion.

___

### `Static` FS_POLICY_NONE

▪ **FS_POLICY_NONE**: *string* = "none"

*Inherited from [C8oCore](c8ocore.md).[FS_POLICY_NONE](c8ocore.md#static-fs_policy_none)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:85](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L85)*

Use it with "fs://.post" and C8o.FS_POLICY.

This is the default post policy that don't alter the document before the CouchbaseLite's insertion.

___

### `Static` FS_POLICY_OVERRIDE

▪ **FS_POLICY_OVERRIDE**: *string* = "override"

*Inherited from [C8oCore](c8ocore.md).[FS_POLICY_OVERRIDE](c8ocore.md#static-fs_policy_override)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:97](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L97)*

Use it with "fs://.post" and C8o.FS_POLICY.

This post policy inserts the document in CouchbaseLite even if a document with the same "_id" already exists.

___

### `Static` FS_SUBKEY_SEPARATOR

▪ **FS_SUBKEY_SEPARATOR**: *string* = "_use_subkey_separator"

*Inherited from [C8oCore](c8ocore.md).[FS_SUBKEY_SEPARATOR](c8ocore.md#static-fs_subkey_separator)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:109](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L109)*

Use it with "fs://.post". Default value is ".".

This key allow to override the sub key separator in case of document depth modification.

___

### `Static` LOCAL_CACHE_DATABASE_NAME

▪ **LOCAL_CACHE_DATABASE_NAME**: *string* = "c8olocalcache"

*Inherited from [C8oCore](c8ocore.md).[LOCAL_CACHE_DATABASE_NAME](c8ocore.md#static-local_cache_database_name)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:130](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L130)*

___

### `Static` LOCAL_CACHE_DOCUMENT_KEY_EXPIRATION_DATE

▪ **LOCAL_CACHE_DOCUMENT_KEY_EXPIRATION_DATE**: *string* = "expirationDate"

*Inherited from [C8oCore](c8ocore.md).[LOCAL_CACHE_DOCUMENT_KEY_EXPIRATION_DATE](c8ocore.md#static-local_cache_document_key_expiration_date)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:128](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L128)*

___

### `Static` LOCAL_CACHE_DOCUMENT_KEY_RESPONSE

▪ **LOCAL_CACHE_DOCUMENT_KEY_RESPONSE**: *string* = "response"

*Inherited from [C8oCore](c8ocore.md).[LOCAL_CACHE_DOCUMENT_KEY_RESPONSE](c8ocore.md#static-local_cache_document_key_response)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:126](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L126)*

Local cache keys

___

### `Static` LOCAL_CACHE_DOCUMENT_KEY_RESPONSE_TYPE

▪ **LOCAL_CACHE_DOCUMENT_KEY_RESPONSE_TYPE**: *string* = "responseType"

*Inherited from [C8oCore](c8ocore.md).[LOCAL_CACHE_DOCUMENT_KEY_RESPONSE_TYPE](c8ocore.md#static-local_cache_document_key_response_type)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:127](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L127)*

___

### `Static` RESPONSE_TYPE_JSON

▪ **RESPONSE_TYPE_JSON**: *string* = "json"

*Inherited from [C8oCore](c8ocore.md).[RESPONSE_TYPE_JSON](c8ocore.md#static-response_type_json)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:134](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L134)*

___

### `Static` RESPONSE_TYPE_XML

▪ **RESPONSE_TYPE_XML**: *string* = "pxml"

*Inherited from [C8oCore](c8ocore.md).[RESPONSE_TYPE_XML](c8ocore.md#static-response_type_xml)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:133](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L133)*

Response type

___

### `Static` `Protected` RE_ENDPOINT

▪ **RE_ENDPOINT**: *RegExp* =  /^(https?:\/\/([^:/]+)(:[0-9]+)?\/?.*?)\/projects\/([^\/]+)$/

*Inherited from [C8oCore](c8ocore.md).[RE_ENDPOINT](c8ocore.md#static-protected-re_endpoint)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:50](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L50)*

The regex used to get the part of the endpoint before '/projects/...'

___

### `Static` `Protected` RE_REQUESTABLE

▪ **RE_REQUESTABLE**: *RegExp* =  /^([^.]*)\.(?:([^.]+)|(?:([^.]+)\.([^.]+)))$/

*Inherited from [C8oCore](c8ocore.md).[RE_REQUESTABLE](c8ocore.md#static-protected-re_requestable)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:45](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L45)*

The regex used to handle the c8o requestable syntax ("&lt;project&gt;.&lt;sequence&gt;" or "&lt;project&gt;.&lt;connector&gt;.&lt;transaction&gt;")

___

### `Static` SEQ_AUTO_LOGIN_OFF

▪ **SEQ_AUTO_LOGIN_OFF**: *string* = "__disableAutologin"

*Inherited from [C8oCore](c8ocore.md).[SEQ_AUTO_LOGIN_OFF](c8ocore.md#static-seq_auto_login_off)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:115](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L115)*

Use it with "project.sequence". Default value is ".".

This key allow to disable autologin feature for a given callJson

___

### `Static` use_merge_prefix

▪ **use_merge_prefix**: *string* = "_use_merge"

*Inherited from [C8oCore](c8ocore.md).[use_merge_prefix](c8ocore.md#static-use_merge_prefix)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:68](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L68)*

FULLSYNC parameters

## Accessors

###  authenticationCookieValue

• **get authenticationCookieValue**(): *string*

*Inherited from [C8oBase](c8obase.md).[authenticationCookieValue](c8obase.md#authenticationcookievalue)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:149](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oBase.ts#L149)*

**Returns:** *string*

___

###  cookies

• **get cookies**(): *Object*

*Inherited from [C8oBase](c8obase.md).[cookies](c8obase.md#cookies)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:119](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oBase.ts#L119)*

Gets initial cookies to send to the Convertigo server.<br/>
Default is <b>null</b>.

**Returns:** *Object*

List of cookies.

___

###  coreVersion

• **get coreVersion**(): *string*

*Inherited from [C8oCore](c8ocore.md).[coreVersion](c8ocore.md#coreversion)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:333](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L333)*

**Returns:** *string*

___

###  couchUrl

• **get couchUrl**(): *string*

*Inherited from [C8oCore](c8ocore.md).[couchUrl](c8ocore.md#couchurl)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:192](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L192)*

**Returns:** *string*

• **set couchUrl**(`value`: string): *void*

*Inherited from [C8oCore](c8ocore.md).[couchUrl](c8ocore.md#couchurl)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:196](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L196)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *void*

___

###  defaultDatabaseName

• **get defaultDatabaseName**(): *string*

*Inherited from [C8oBase](c8obase.md).[defaultDatabaseName](c8obase.md#defaultdatabasename)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:145](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oBase.ts#L145)*

**Returns:** *string*

___

###  deviceUUID

• **get deviceUUID**(): *Promise‹string›*

*Inherited from [C8oCore](c8ocore.md).[deviceUUID](c8ocore.md#deviceuuid)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:284](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L284)*

**Returns:** *Promise‹string›*

___

###  endpoint

• **get endpoint**(): *string*

*Inherited from [C8oCore](c8ocore.md).[endpoint](c8ocore.md#endpoint)*

*Overrides [C8oBase](c8obase.md).[endpoint](c8obase.md#endpoint)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:233](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L233)*

**Returns:** *string*

• **set endpoint**(`value`: string): *void*

*Inherited from [C8oCore](c8ocore.md).[endpoint](c8ocore.md#endpoint)*

*Overrides [C8oBase](c8obase.md).[endpoint](c8obase.md#endpoint)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:237](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L237)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *void*

___

###  endpointConvertigo

• **get endpointConvertigo**(): *string*

*Inherited from [C8oCore](c8ocore.md).[endpointConvertigo](c8ocore.md#endpointconvertigo)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:241](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L241)*

**Returns:** *string*

• **set endpointConvertigo**(`value`: string): *void*

*Inherited from [C8oCore](c8ocore.md).[endpointConvertigo](c8ocore.md#endpointconvertigo)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:245](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L245)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *void*

___

###  endpointHost

• **get endpointHost**(): *string*

*Inherited from [C8oCore](c8ocore.md).[endpointHost](c8ocore.md#endpointhost)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:259](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L259)*

**Returns:** *string*

• **set endpointHost**(`value`: string): *void*

*Inherited from [C8oCore](c8ocore.md).[endpointHost](c8ocore.md#endpointhost)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:263](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L263)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *void*

___

###  endpointIsSecure

• **get endpointIsSecure**(): *boolean*

*Inherited from [C8oCore](c8ocore.md).[endpointIsSecure](c8ocore.md#endpointissecure)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:250](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L250)*

**Returns:** *boolean*

• **set endpointIsSecure**(`value`: boolean): *void*

*Inherited from [C8oCore](c8ocore.md).[endpointIsSecure](c8ocore.md#endpointissecure)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:254](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L254)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *void*

___

###  endpointPort

• **get endpointPort**(): *string*

*Inherited from [C8oCore](c8ocore.md).[endpointPort](c8ocore.md#endpointport)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:268](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L268)*

**Returns:** *string*

• **set endpointPort**(`value`: string): *void*

*Inherited from [C8oCore](c8ocore.md).[endpointPort](c8ocore.md#endpointport)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:272](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L272)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *void*

___

###  endpointProject

• **get endpointProject**(): *string*

*Inherited from [C8oCore](c8ocore.md).[endpointProject](c8ocore.md#endpointproject)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:276](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L276)*

**Returns:** *string*

• **set endpointProject**(`value`: string): *void*

*Inherited from [C8oCore](c8ocore.md).[endpointProject](c8ocore.md#endpointproject)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:280](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L280)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *void*

___

###  errorConvertigoIntoFail

• **get errorConvertigoIntoFail**(): *boolean*

*Inherited from [C8oBase](c8obase.md).[errorConvertigoIntoFail](c8obase.md#errorconvertigointofail)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:73](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oBase.ts#L73)*

Gets if error convertigo are thrown into fail.<br/>
Default is <b>false</b>.

**Returns:** *boolean*

The errorConvertigoIntoFail status.

___

###  fullSyncLocalSuffix

• **get fullSyncLocalSuffix**(): *string*

*Inherited from [C8oBase](c8obase.md).[fullSyncLocalSuffix](c8obase.md#fullsynclocalsuffix)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:153](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oBase.ts#L153)*

**Returns:** *string*

___

###  fullSyncPassword

• **get fullSyncPassword**(): *string*

*Inherited from [C8oBase](c8obase.md).[fullSyncPassword](c8obase.md#fullsyncpassword)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:168](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oBase.ts#L168)*

**Returns:** *string*

___

###  fullSyncServerUrl

• **get fullSyncServerUrl**(): *string*

*Inherited from [C8oBase](c8obase.md).[fullSyncServerUrl](c8obase.md#fullsyncserverurl)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:158](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oBase.ts#L158)*

**Returns:** *string*

___

###  fullSyncUsername

• **get fullSyncUsername**(): *string*

*Inherited from [C8oBase](c8obase.md).[fullSyncUsername](c8obase.md#fullsyncusername)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:163](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oBase.ts#L163)*

**Returns:** *string*

___

###  headers

• **get headers**(): *Object*

*Inherited from [C8oBase](c8obase.md).[headers](c8obase.md#headers)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:184](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oBase.ts#L184)*

**Returns:** *Object*

___

###  httpPublic

• **get httpPublic**(): *any*

*Inherited from [C8oCore](c8ocore.md).[httpPublic](c8ocore.md#httppublic)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:309](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L309)*

**Returns:** *any*

___

###  keepSessionAlive

• **get keepSessionAlive**(): *boolean*

*Inherited from [C8oBase](c8obase.md).[keepSessionAlive](c8obase.md#keepsessionalive)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:64](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oBase.ts#L64)*

Gets if session has to be keep alive.<br/>
Default is <b>true</b>.

**Returns:** *boolean*

The KeepSessionAlive status.

___

###  log

• **get log**(): *[C8oLogger](c8ologger.md)*

*Inherited from [C8oCore](c8ocore.md).[log](c8ocore.md#log)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:225](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L225)*

**Returns:** *[C8oLogger](c8ologger.md)*

___

###  logC8o

• **get logC8o**(): *boolean*

*Inherited from [C8oCore](c8ocore.md).[logC8o](c8ocore.md#logc8o)*

*Overrides [C8oBase](c8obase.md).[logC8o](c8obase.md#logc8o)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:200](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L200)*

**Returns:** *boolean*

• **set logC8o**(`value`: boolean): *void*

*Inherited from [C8oCore](c8ocore.md).[logC8o](c8ocore.md#logc8o)*

*Overrides [C8oBase](c8obase.md).[logC8o](c8obase.md#logc8o)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:204](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L204)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *void*

___

###  logLevelLocal

• **get logLevelLocal**(): *[C8oLogLevel](c8ologlevel.md)*

*Inherited from [C8oCore](c8ocore.md).[logLevelLocal](c8ocore.md#loglevellocal)*

*Overrides [C8oBase](c8obase.md).[logLevelLocal](c8obase.md#loglevellocal)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:217](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L217)*

**Returns:** *[C8oLogLevel](c8ologlevel.md)*

• **set logLevelLocal**(`value`: [C8oLogLevel](c8ologlevel.md)): *void*

*Inherited from [C8oCore](c8ocore.md).[logLevelLocal](c8ocore.md#loglevellocal)*

*Overrides [C8oBase](c8obase.md).[logLevelLocal](c8obase.md#loglevellocal)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:221](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L221)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [C8oLogLevel](c8ologlevel.md) |

**Returns:** *void*

___

###  logOnFail

• **get logOnFail**(): *function*

*Inherited from [C8oBase](c8obase.md).[logOnFail](c8obase.md#logonfail)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:172](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oBase.ts#L172)*

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

*Inherited from [C8oCore](c8ocore.md).[logRemote](c8ocore.md#logremote)*

*Overrides [C8oBase](c8obase.md).[logRemote](c8obase.md#logremote)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:208](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L208)*

**Returns:** *boolean*

• **set logRemote**(`value`: boolean): *void*

*Inherited from [C8oCore](c8ocore.md).[logRemote](c8ocore.md#logremote)*

*Overrides [C8oBase](c8obase.md).[logRemote](c8obase.md#logremote)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:212](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L212)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *void*

___

###  normalizeParameters

• **get normalizeParameters**(): *boolean*

*Inherited from [C8oBase](c8obase.md).[normalizeParameters](c8obase.md#normalizeparameters)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:56](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oBase.ts#L56)*

Gets if normalize parameters.<br/>
Default is <b>false</b>.

**Returns:** *boolean*

The timeout.

___

###  prefixBase

• **get prefixBase**(): *boolean*

*Inherited from [C8oCore](c8ocore.md).[prefixBase](c8ocore.md#prefixbase)*

*Overrides [C8oBase](c8obase.md).[prefixBase](c8obase.md#prefixbase)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:321](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L321)*

**Returns:** *boolean*

• **set prefixBase**(`resetBase`: boolean): *void*

*Inherited from [C8oCore](c8ocore.md).[prefixBase](c8ocore.md#prefixbase)*

*Overrides [C8oBase](c8obase.md).[prefixBase](c8obase.md#prefixbase)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:325](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L325)*

**Parameters:**

Name | Type |
------ | ------ |
`resetBase` | boolean |

**Returns:** *void*

___

###  resetBase

• **get resetBase**(): *boolean*

*Inherited from [C8oCore](c8ocore.md).[resetBase](c8ocore.md#resetbase)*

*Overrides [C8oBase](c8obase.md).[resetBase](c8obase.md#resetbase)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:313](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L313)*

**Returns:** *boolean*

• **set resetBase**(`resetBase`: boolean): *void*

*Inherited from [C8oCore](c8ocore.md).[resetBase](c8ocore.md#resetbase)*

*Overrides [C8oBase](c8obase.md).[resetBase](c8obase.md#resetbase)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:317](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L317)*

**Parameters:**

Name | Type |
------ | ------ |
`resetBase` | boolean |

**Returns:** *void*

___

###  sdkVersion

• **get sdkVersion**(): *string*

*Overrides [C8oCore](c8ocore.md).[sdkVersion](c8ocore.md#sdkversion)*

*Defined in [lib/c8o.service.ts:17](https://github.com/convertigo/c8osdk-angular/blob/57c1351/projects/c8osdkangular/src/lib/c8o.service.ts#L17)*

get current sdk version

**Returns:** *string*

___

###  timeout

• **get timeout**(): *number*

*Inherited from [C8oBase](c8obase.md).[timeout](c8obase.md#timeout)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:101](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oBase.ts#L101)*

Gets the connection timeout to Convertigo in milliseconds. A value of zero means the timeout is not used.<br/>
Default is <b>0</b>.

**Returns:** *number*

The timeout.

## Methods

###  _call

▸ **_call**(`parameters`: Object, `c8oResponseListener`: [C8oResponseListener](../interfaces/c8oresponselistener.md), `c8oExceptionListener`: [C8oExceptionListener](c8oexceptionlistener.md)): *void*

*Inherited from [C8oCore](c8ocore.md).[_call](c8ocore.md#_call)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:439](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L439)*

Makes a c8o call with c8o requestable in parameters ('__project' and ('__sequence' or ('__connector' and '__transaction'))).<br/>
To not use a C8oExceptionListener you can set the parameter to null.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`parameters` | Object |  null | Contains c8o variables |
`c8oResponseListener` | [C8oResponseListener](../interfaces/c8oresponselistener.md) |  null | Define the behavior with the c8o call response |
`c8oExceptionListener` | [C8oExceptionListener](c8oexceptionlistener.md) |  null | Define the behavior when there is an exception during execution  |

**Returns:** *void*

___

###  addFullSyncChangeListener

▸ **addFullSyncChangeListener**(`db`: string, `listener`: [C8oFullSyncChangeListener](c8ofullsyncchangelistener.md), `parameters`: Object): *void*

*Inherited from [C8oCore](c8ocore.md).[addFullSyncChangeListener](c8ocore.md#addfullsyncchangelistener)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:616](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L616)*

Add a listener to monitor all changes of the 'db'.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`db` | string | - | the name of the fullsync database to monitor. Use the default database for a blank or a null value. |
`listener` | [C8oFullSyncChangeListener](c8ofullsyncchangelistener.md) | - | the listener to trigger on change.  |
`parameters` | Object |  {} | - |

**Returns:** *void*

___

###  addLive

▸ **addLive**(`liveid`: string, `db`: string, `task`: [C8oCallTask](c8ocalltask.md)): *void*

*Inherited from [C8oCore](c8ocore.md).[addLive](c8ocore.md#addlive)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:630](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L630)*

**Parameters:**

Name | Type |
------ | ------ |
`liveid` | string |
`db` | string |
`task` | [C8oCallTask](c8ocalltask.md) |

**Returns:** *void*

___

###  call

▸ **call**(`requestable`: string, `parameters`: Object, `c8oResponseListener`: [C8oResponseListener](../interfaces/c8oresponselistener.md), `c8oExceptionListener`: [C8oExceptionListener](c8oexceptionlistener.md)): *void*

*Inherited from [C8oCore](c8ocore.md).[call](c8ocore.md#call)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:391](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L391)*

Makes a c8o call with c8o requestable out of parameters.<br/>
To not use a C8oExceptionListener you can set the parameter to null

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`requestable` | string | - | Contains the Convertigo Sequence or Transaction targeted  (Syntax: "<project>.<sequence>" or "<project>.<connector>.<transaction>") |
`parameters` | Object |  null | Contains c8o variables |
`c8oResponseListener` | [C8oResponseListener](../interfaces/c8oresponselistener.md) |  null | Define the behavior with the c8o call response |
`c8oExceptionListener` | [C8oExceptionListener](c8oexceptionlistener.md) |  null | Define the behavior when there is an exception during execution  |

**Returns:** *void*

___

###  callJson

▸ **callJson**(`requestable`: string, ...`parameters`: any[]): *[C8oPromise](c8opromise.md)‹JSON›*

*Inherited from [C8oCore](c8ocore.md).[callJson](c8ocore.md#calljson)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:508](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L508)*

Makes a c8o call with c8o requestable out of parameters, expecting a JSON response through a C8oPromise.<br/>
The C8oPromise allow to register response handler with .then and .thenUI,
error handler with .fail and failUI,
replication handler with .progress
and synchronous response with .sync().

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`requestable` | string | Contains the Convertigo Sequence or Transaction targeted  (Syntax: "<project>.<sequence>" or "<project>.<connector>.<transaction>") |
`...parameters` | any[] | Contains c8o variables as key/value |

**Returns:** *[C8oPromise](c8opromise.md)‹JSON›*

A C8oPromise that can deliver the JSON response

___

###  callJsonObject

▸ **callJsonObject**(`requestable`: string, `parameters`: Object): *[C8oPromise](c8opromise.md)‹JSON›*

*Inherited from [C8oCore](c8ocore.md).[callJsonObject](c8ocore.md#calljsonobject)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:478](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L478)*

Makes a c8o call with c8o requestable out of parameters, expecting a JSON response through a C8oPromise.<br/>
The C8oPromise allow to register response handler with .then and .thenUI,
error handler with .fail and failUI,
replication handler with .progress
and synchronous response with .sync().

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`requestable` | string | Contains the Convertigo Sequence or Transaction targeted  (Syntax: "<project>.<sequence>" or "<project>.<connector>.<transaction>") |
`parameters` | Object | - |

**Returns:** *[C8oPromise](c8opromise.md)‹JSON›*

A C8oPromise that can deliver the JSON response

___

###  cancelLive

▸ **cancelLive**(`liveid`: string): *void*

*Inherited from [C8oCore](c8ocore.md).[cancelLive](c8ocore.md#cancellive)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:637](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L637)*

**Parameters:**

Name | Type |
------ | ------ |
`liveid` | string |

**Returns:** *void*

___

###  copy

▸ **copy**(`c8oBase`: [C8oBase](c8obase.md)): *void*

*Inherited from [C8oBase](c8obase.md).[copy](c8obase.md#copy)*

*Defined in [c8osdk-js-core/src/c8o/c8oBase.ts:188](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oBase.ts#L188)*

**Parameters:**

Name | Type |
------ | ------ |
`c8oBase` | [C8oBase](c8obase.md) |

**Returns:** *void*

___

### `Protected` extractendpoint

▸ **extractendpoint**(): *void*

*Inherited from [C8oCore](c8ocore.md).[extractendpoint](c8ocore.md#protected-extractendpoint)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:366](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L366)*

**Returns:** *void*

___

###  finalizeInit

▸ **finalizeInit**(): *Promise‹any›*

*Inherited from [C8oCore](c8ocore.md).[finalizeInit](c8ocore.md#finalizeinit)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:771](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L771)*

This should be called OnPlatform Ready to remove splashscreen if necessary

**Returns:** *Promise‹any›*

___

###  get_attachment

▸ **get_attachment**(`id`: string, `attachment_name`: string, `database_name?`: string): *Promise‹any›*

*Inherited from [C8oCore](c8ocore.md).[get_attachment](c8ocore.md#get_attachment)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:594](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L594)*

get an attachment for a given object

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |
`attachment_name` | string |
`database_name?` | string |

**Returns:** *Promise‹any›*

a promise containing a buffer

___

###  handleAutoLoginResponse

▸ **handleAutoLoginResponse**(): *Subject‹any›*

*Inherited from [C8oCore](c8ocore.md).[handleAutoLoginResponse](c8ocore.md#handleautologinresponse)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:582](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L582)*

Return an subject that call next if autologin is triggered with its result

**Returns:** *Subject‹any›*

___

###  handleCallException

▸ **handleCallException**(`c8oExceptionListener`: [C8oExceptionListener](c8oexceptionlistener.md), `requestParameters`: Object, `exception`: Error): *void*

*Inherited from [C8oCore](c8ocore.md).[handleCallException](c8ocore.md#handlecallexception)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:550](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L550)*

Calls the exception listener callback if it is not null, else prints the exception stack trace.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`c8oExceptionListener` | [C8oExceptionListener](c8oexceptionlistener.md) | - |
`requestParameters` | Object | - |
`exception` | Error |   |

**Returns:** *void*

___

###  handleNetworkEvents

▸ **handleNetworkEvents**(): *Subject‹any›*

*Inherited from [C8oCore](c8ocore.md).[handleNetworkEvents](c8ocore.md#handlenetworkevents)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:575](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L575)*

Return an subject that call next if network has change

**Returns:** *Subject‹any›*

___

###  handleSessionLost

▸ **handleSessionLost**(): *Subject‹any›*

*Inherited from [C8oCore](c8ocore.md).[handleSessionLost](c8ocore.md#handlesessionlost)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:560](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L560)*

Return an subject that call next if session has been lost

**Returns:** *Subject‹any›*

___

###  httpGetObservable

▸ **httpGetObservable**(`uri`: any): *any*

*Overrides [C8oCore](c8ocore.md).[httpGetObservable](c8ocore.md#abstract-httpgetobservable)*

*Defined in [lib/c8o.service.ts:24](https://github.com/convertigo/c8osdk-angular/blob/57c1351/projects/c8osdkangular/src/lib/c8o.service.ts#L24)*

Method to bastract http get

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`uri` | any | the uri for given request  |

**Returns:** *any*

___

###  importLoginState

▸ **importLoginState**(`c8o`: [C8oCore](c8ocore.md)): *void*

*Inherited from [C8oCore](c8ocore.md).[importLoginState](c8ocore.md#importloginstate)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:361](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L361)*

**Parameters:**

Name | Type |
------ | ------ |
`c8o` | [C8oCore](c8ocore.md) |

**Returns:** *void*

___

###  init

▸ **init**(`c8oSettings?`: [C8oSettings](c8osettings.md)): *Promise‹any›*

*Inherited from [C8oCore](c8ocore.md).[init](c8ocore.md#init)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:680](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L680)*

This is the base object representing a Convertigo Server end point. This object should be instantiated
when the apps starts and be accessible from any class of the app. Although this is not common , you may have
several C8o objects instantiated in your app.

**`throws`** C8oException In case of invalid parameter or initialization failure.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`c8oSettings?` | [C8oSettings](c8osettings.md) | Initialization options.<br/>                    Example: new C8oSettings().setLogRemote(false).setDefaultDatabaseName("sample")  |

**Returns:** *Promise‹any›*

___

###  initC8oHttInterface

▸ **initC8oHttInterface**(): *void*

*Overrides [C8oCore](c8ocore.md).[initC8oHttInterface](c8ocore.md#abstract-initc8ohttinterface)*

*Defined in [lib/c8o.service.ts:31](https://github.com/convertigo/c8osdk-angular/blob/57c1351/projects/c8osdkangular/src/lib/c8o.service.ts#L31)*

Init http interface in client sdk

**Returns:** *void*

___

###  removeFullSyncChangeListener

▸ **removeFullSyncChangeListener**(`db`: string, `listener`: [C8oFullSyncChangeListener](c8ofullsyncchangelistener.md)): *void*

*Inherited from [C8oCore](c8ocore.md).[removeFullSyncChangeListener](c8ocore.md#removefullsyncchangelistener)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:626](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L626)*

Remove a listener for changes of the 'db'.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`db` | string | the name of the fullsync database to monitor. Use the default database for a blank or a null value. |
`listener` | [C8oFullSyncChangeListener](c8ofullsyncchangelistener.md) | the listener instance to remove.  |

**Returns:** *void*

___

###  removeNull

▸ **removeNull**(`parameters`: any): *void*

*Inherited from [C8oCore](c8ocore.md).[removeNull](c8ocore.md#removenull)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:534](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L534)*

Remove null value from parameters

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`parameters` | any | an object |

**Returns:** *void*

a Map that contains all parameters

___

###  toString

▸ **toString**(): *string*

*Inherited from [C8oCore](c8ocore.md).[toString](c8ocore.md#tostring)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:229](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L229)*

**Returns:** *string*

___

### `Static` toParameters

▸ **toParameters**(`parameters`: any): *Object*

*Inherited from [C8oCore](c8ocore.md).[toParameters](c8ocore.md#static-toparameters)*

*Defined in [c8osdk-js-core/src/c8o/c8oCore.ts:518](https://github.com/convertigo/c8osdk-angular/blob/5eefa5e/src/c8o/c8oCore.ts#L518)*

Transforms siblings values as key/value of a Map.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`parameters` | any | pair of values to transform a object |

**Returns:** *Object*

a Map that contains all parameters
