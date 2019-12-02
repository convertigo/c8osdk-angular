[c8osdkjscore](../README.md) › [C8oExceptionMessage](c8oexceptionmessage.md)

# Class: C8oExceptionMessage

Contains static Functions returning the exception messages
in order to make simpler their modification and avoid duplication.

## Hierarchy

* **C8oExceptionMessage**

## Index

### Methods

* [CouchDeleteFailed](c8oexceptionmessage.md#static-couchdeletefailed)
* [FullSyncDatabaseInitFailed](c8oexceptionmessage.md#static-fullsyncdatabaseinitfailed)
* [FullSyncInterfaceInstance](c8oexceptionmessage.md#static-fullsyncinterfaceinstance)
* [FullSyncReplicationFail](c8oexceptionmessage.md#static-fullsyncreplicationfail)
* [FullSyncRequestFail](c8oexceptionmessage.md#static-fullsyncrequestfail)
* [GetLocalCacheParameters](c8oexceptionmessage.md#static-getlocalcacheparameters)
* [GetLocalCachePolicy](c8oexceptionmessage.md#static-getlocalcachepolicy)
* [InitCouchManager](c8oexceptionmessage.md#static-initcouchmanager)
* [InitDocumentBuilder](c8oexceptionmessage.md#static-initdocumentbuilder)
* [InitError](c8oexceptionmessage.md#static-initerror)
* [InitHttpInterface](c8oexceptionmessage.md#static-inithttpinterface)
* [InitRsainternalKey](c8oexceptionmessage.md#static-initrsainternalkey)
* [InitSslSocketFactory](c8oexceptionmessage.md#static-initsslsocketfactory)
* [InvalidArgumentInvalidEndpoint](c8oexceptionmessage.md#static-invalidargumentinvalidendpoint)
* [InvalidArgumentInvalidURL](c8oexceptionmessage.md#static-invalidargumentinvalidurl)
* [InvalidArgumentNullParameter](c8oexceptionmessage.md#static-invalidargumentnullparameter)
* [InvalidLocalCacheResponseInformation](c8oexceptionmessage.md#static-invalidlocalcacheresponseinformation)
* [InvalidParameterType](c8oexceptionmessage.md#static-invalidparametertype)
* [InvalidRequestable](c8oexceptionmessage.md#static-invalidrequestable)
* [MissParameter](c8oexceptionmessage.md#static-missparameter)
* [MissingLocalCacheResponseDocument](c8oexceptionmessage.md#static-missinglocalcacheresponsedocument)
* [ParseStreamToJson](c8oexceptionmessage.md#static-parsestreamtojson)
* [ParseStreamToXml](c8oexceptionmessage.md#static-parsestreamtoxml)
* [ParseStringToObject](c8oexceptionmessage.md#static-parsestringtoobject)
* [RemoteLogFail](c8oexceptionmessage.md#static-remotelogfail)
* [RunHttpRequest](c8oexceptionmessage.md#static-runhttprequest)
* [StringToJsonValue](c8oexceptionmessage.md#static-stringtojsonvalue)
* [UnknownFullSyncPolicy](c8oexceptionmessage.md#static-unknownfullsyncpolicy)
* [WrongListener](c8oexceptionmessage.md#static-wronglistener)
* [addparametersToQuery](c8oexceptionmessage.md#static-addparameterstoquery)
* [c8oCallRequestToJson](c8oexceptionmessage.md#static-c8ocallrequesttojson)
* [changeEventToJson](c8oexceptionmessage.md#static-changeeventtojson)
* [clientKeyStore](c8oexceptionmessage.md#static-clientkeystore)
* [closeInputStream](c8oexceptionmessage.md#static-closeinputstream)
* [couchFullSyncNotActive](c8oexceptionmessage.md#static-couchfullsyncnotactive)
* [couchNullResult](c8oexceptionmessage.md#static-couchnullresult)
* [couchRequestAllDocuments](c8oexceptionmessage.md#static-couchrequestalldocuments)
* [couchRequestDeleteDocument](c8oexceptionmessage.md#static-couchrequestdeletedocument)
* [couchRequestGetView](c8oexceptionmessage.md#static-couchrequestgetview)
* [couchRequestInvalidRevision](c8oexceptionmessage.md#static-couchrequestinvalidrevision)
* [couchRequestPostDocument](c8oexceptionmessage.md#static-couchrequestpostdocument)
* [couchRequestResetDatabase](c8oexceptionmessage.md#static-couchrequestresetdatabase)
* [createSslContext](c8oexceptionmessage.md#static-createsslcontext)
* [deserializeJsonObjectFromString](c8oexceptionmessage.md#static-deserializejsonobjectfromstring)
* [encodeParameters](c8oexceptionmessage.md#static-encodeparameters)
* [entryNotFound](c8oexceptionmessage.md#static-entrynotfound)
* [fullSyncGetOrCreateDatabase](c8oexceptionmessage.md#static-fullsyncgetorcreatedatabase)
* [fullSyncHandleResponse](c8oexceptionmessage.md#static-fullsynchandleresponse)
* [fullSyncJsonToXML](c8oexceptionmessage.md#static-fullsyncjsontoxml)
* [fullSyncPutProperties](c8oexceptionmessage.md#static-fullsyncputproperties)
* [generateRsainternalKey](c8oexceptionmessage.md#static-generatersainternalkey)
* [getCipherInstance](c8oexceptionmessage.md#static-getcipherinstance)
* [getDocumentFromDatabase](c8oexceptionmessage.md#static-getdocumentfromdatabase)
* [getInputStreamFromHttpResponse](c8oexceptionmessage.md#static-getinputstreamfromhttpresponse)
* [getJsonKey](c8oexceptionmessage.md#static-getjsonkey)
* [getNameValuePairObjectValue](c8oexceptionmessage.md#static-getnamevaluepairobjectvalue)
* [getParametersStringBytes](c8oexceptionmessage.md#static-getparametersstringbytes)
* [getResponseFromLocalCache](c8oexceptionmessage.md#static-getresponsefromlocalcache)
* [getResponseFromLocalCacheDocument](c8oexceptionmessage.md#static-getresponsefromlocalcachedocument)
* [handleC8oCallRequest](c8oexceptionmessage.md#static-handlec8ocallrequest)
* [handleFullSyncRequest](c8oexceptionmessage.md#static-handlefullsyncrequest)
* [httpInterfaceInstance](c8oexceptionmessage.md#static-httpinterfaceinstance)
* [httpLogs](c8oexceptionmessage.md#static-httplogs)
* [illegalArgumentIncompatibleListener](c8oexceptionmessage.md#static-illegalargumentincompatiblelistener)
* [illegalArgumentInvalidEndpoint](c8oexceptionmessage.md#static-illegalargumentinvalidendpoint)
* [illegalArgumentInvalidFullSyncDatabaseUrl](c8oexceptionmessage.md#static-illegalargumentinvalidfullsyncdatabaseurl)
* [illegalArgumentInvalidLocalCachePolicy](c8oexceptionmessage.md#static-illegalargumentinvalidlocalcachepolicy)
* [illegalArgumentInvalidURL](c8oexceptionmessage.md#static-illegalargumentinvalidurl)
* [illegalArgumentNotFoundFullSyncView](c8oexceptionmessage.md#static-illegalargumentnotfoundfullsyncview)
* [illegalArgumentNullParameter](c8oexceptionmessage.md#static-illegalargumentnullparameter)
* [initC8oSslSocketFactory](c8oexceptionmessage.md#static-initc8osslsocketfactory)
* [initCipher](c8oexceptionmessage.md#static-initcipher)
* [initKeyManagerFactory](c8oexceptionmessage.md#static-initkeymanagerfactory)
* [initSslContext](c8oexceptionmessage.md#static-initsslcontext)
* [initTrustManagerFactory](c8oexceptionmessage.md#static-inittrustmanagerfactory)
* [inputStreamReaderEncoding](c8oexceptionmessage.md#static-inputstreamreaderencoding)
* [inputStreamToJSON](c8oexceptionmessage.md#static-inputstreamtojson)
* [inputStreamToXML](c8oexceptionmessage.md#static-inputstreamtoxml)
* [invalidParameterValue](c8oexceptionmessage.md#static-invalidparametervalue)
* [jsonValueToXML](c8oexceptionmessage.md#static-jsonvaluetoxml)
* [keyFactoryInstance](c8oexceptionmessage.md#static-keyfactoryinstance)
* [keyManagerFactoryInstance](c8oexceptionmessage.md#static-keymanagerfactoryinstance)
* [loadKeyStore](c8oexceptionmessage.md#static-loadkeystore)
* [localCacheDocumentJustCreated](c8oexceptionmessage.md#static-localcachedocumentjustcreated)
* [localCachePolicyIsDisable](c8oexceptionmessage.md#static-localcachepolicyisdisable)
* [missingValue](c8oexceptionmessage.md#static-missingvalue)
* [notImplementedFullSyncInterface](c8oexceptionmessage.md#static-notimplementedfullsyncinterface)
* [overrideDocument](c8oexceptionmessage.md#static-overridedocument)
* [parseC8oReplicationResultToJson](c8oexceptionmessage.md#static-parsec8oreplicationresulttojson)
* [parseFullSyncDefaultResponseToJson](c8oexceptionmessage.md#static-parsefullsyncdefaultresponsetojson)
* [parseFullSyncPostDocumentResponseToJson](c8oexceptionmessage.md#static-parsefullsyncpostdocumentresponsetojson)
* [parseInputStreamToString](c8oexceptionmessage.md#static-parseinputstreamtostring)
* [parseLogsStreamToJson](c8oexceptionmessage.md#static-parselogsstreamtojson)
* [parseLogsToJson](c8oexceptionmessage.md#static-parselogstojson)
* [parseQueryEnumeratorToJson](c8oexceptionmessage.md#static-parsequeryenumeratortojson)
* [parseRsainternalKey](c8oexceptionmessage.md#static-parsersainternalkey)
* [parseStringToJson](c8oexceptionmessage.md#static-parsestringtojson)
* [parseXmlToString](c8oexceptionmessage.md#static-parsexmltostring)
* [postDocument](c8oexceptionmessage.md#static-postdocument)
* [putJson](c8oexceptionmessage.md#static-putjson)
* [queryEnumeratorToJSON](c8oexceptionmessage.md#static-queryenumeratortojson)
* [queryEnumeratorToXML](c8oexceptionmessage.md#static-queryenumeratortoxml)
* [readLineFromBufferReader](c8oexceptionmessage.md#static-readlinefrombufferreader)
* [remoteLogHttpRequest](c8oexceptionmessage.md#static-remoteloghttprequest)
* [ressourceNotFound](c8oexceptionmessage.md#static-ressourcenotfound)
* [retrieveRsainternalKey](c8oexceptionmessage.md#static-retrieversainternalkey)
* [runHttpRequest](c8oexceptionmessage.md#static-runhttprequest)
* [saveResponseToLocalCache](c8oexceptionmessage.md#static-saveresponsetolocalcache)
* [serializeC8oCallRequest](c8oexceptionmessage.md#static-serializec8ocallrequest)
* [serverKeyStore](c8oexceptionmessage.md#static-serverkeystore)
* [takeLog](c8oexceptionmessage.md#static-takelog)
* [timeToLiveExpired](c8oexceptionmessage.md#static-timetoliveexpired)
* [trustAllCertificates](c8oexceptionmessage.md#static-trustallcertificates)
* [trustManagerFactoryInstance](c8oexceptionmessage.md#static-trustmanagerfactoryinstance)
* [unableToGetFullSyncDatabase](c8oexceptionmessage.md#static-unabletogetfullsyncdatabase)
* [unhandledFullSyncRequestable](c8oexceptionmessage.md#static-unhandledfullsyncrequestable)
* [unhandledListenerType](c8oexceptionmessage.md#static-unhandledlistenertype)
* [unhandledResponseType](c8oexceptionmessage.md#static-unhandledresponsetype)
* [unknownType](c8oexceptionmessage.md#static-unknowntype)
* [unknownValue](c8oexceptionmessage.md#static-unknownvalue)
* [urlEncode](c8oexceptionmessage.md#static-urlencode)
* [wrongListener](c8oexceptionmessage.md#static-wronglistener)
* [wrongResult](c8oexceptionmessage.md#static-wrongresult)

## Methods

### `Static` CouchDeleteFailed

▸ **CouchDeleteFailed**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:226](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L226)*

**Returns:** *string*

___

### `Static` FullSyncDatabaseInitFailed

▸ **FullSyncDatabaseInitFailed**(`databaseName`: string): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:55](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`databaseName` | string |

**Returns:** *string*

___

### `Static` FullSyncInterfaceInstance

▸ **FullSyncInterfaceInstance**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:450](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L450)*

**Returns:** *string*

___

### `Static` FullSyncReplicationFail

▸ **FullSyncReplicationFail**(`databaseName`: string, `way`: string): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:458](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L458)*

**Parameters:**

Name | Type |
------ | ------ |
`databaseName` | string |
`way` | string |

**Returns:** *string*

___

### `Static` FullSyncRequestFail

▸ **FullSyncRequestFail**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:517](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L517)*

**Returns:** *string*

___

### `Static` GetLocalCacheParameters

▸ **GetLocalCacheParameters**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:418](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L418)*

**Returns:** *string*

___

### `Static` GetLocalCachePolicy

▸ **GetLocalCachePolicy**(`policy`: string): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:422](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L422)*

**Parameters:**

Name | Type |
------ | ------ |
`policy` | string |

**Returns:** *string*

___

### `Static` InitCouchManager

▸ **InitCouchManager**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:108](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L108)*

**Returns:** *string*

___

### `Static` InitDocumentBuilder

▸ **InitDocumentBuilder**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:116](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L116)*

**Returns:** *string*

___

### `Static` InitError

▸ **InitError**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:100](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L100)*

TAG Initialization

**Returns:** *string*

___

### `Static` InitHttpInterface

▸ **InitHttpInterface**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:342](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L342)*

**Returns:** *string*

___

### `Static` InitRsainternalKey

▸ **InitRsainternalKey**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:104](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L104)*

**Returns:** *string*

___

### `Static` InitSslSocketFactory

▸ **InitSslSocketFactory**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:112](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L112)*

**Returns:** *string*

___

### `Static` InvalidArgumentInvalidEndpoint

▸ **InvalidArgumentInvalidEndpoint**(`endpoint`: string): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:79](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L79)*

**Parameters:**

Name | Type |
------ | ------ |
`endpoint` | string |

**Returns:** *string*

___

### `Static` InvalidArgumentInvalidURL

▸ **InvalidArgumentInvalidURL**(`urlStr`: string): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:71](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`urlStr` | string |

**Returns:** *string*

___

### `Static` InvalidArgumentNullParameter

▸ **InvalidArgumentNullParameter**(`parameterName`: string): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:95](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L95)*

**Parameters:**

Name | Type |
------ | ------ |
`parameterName` | string |

**Returns:** *string*

___

### `Static` InvalidLocalCacheResponseInformation

▸ **InvalidLocalCacheResponseInformation**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:478](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L478)*

**Returns:** *string*

___

### `Static` InvalidParameterType

▸ **InvalidParameterType**(`parameterName`: string, `wantedParameterType`: string, `actualParameterType`: string): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:87](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`parameterName` | string |
`wantedParameterType` | string |
`actualParameterType` | string |

**Returns:** *string*

___

### `Static` InvalidRequestable

▸ **InvalidRequestable**(`requestable`: string): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:83](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L83)*

**Parameters:**

Name | Type |
------ | ------ |
`requestable` | string |

**Returns:** *string*

___

### `Static` MissParameter

▸ **MissParameter**(`parameterName`: string): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:59](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L59)*

**Parameters:**

Name | Type |
------ | ------ |
`parameterName` | string |

**Returns:** *string*

___

### `Static` MissingLocalCacheResponseDocument

▸ **MissingLocalCacheResponseDocument**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:521](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L521)*

**Returns:** *string*

___

### `Static` ParseStreamToJson

▸ **ParseStreamToJson**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:122](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L122)*

TAG Parse

**Returns:** *string*

___

### `Static` ParseStreamToXml

▸ **ParseStreamToXml**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:126](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L126)*

**Returns:** *string*

___

### `Static` ParseStringToObject

▸ **ParseStringToObject**(`type`: any): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:170](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L170)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | any |

**Returns:** *string*

___

### `Static` RemoteLogFail

▸ **RemoteLogFail**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:513](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L513)*

**Returns:** *string*

___

### `Static` RunHttpRequest

▸ **RunHttpRequest**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:374](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L374)*

**Returns:** *string*

___

### `Static` StringToJsonValue

▸ **StringToJsonValue**(`str`: string): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:174](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L174)*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *string*

___

### `Static` UnknownFullSyncPolicy

▸ **UnknownFullSyncPolicy**(`policy`: any): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:75](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L75)*

**Parameters:**

Name | Type |
------ | ------ |
`policy` | any |

**Returns:** *string*

___

### `Static` WrongListener

▸ **WrongListener**(`c8oListener`: [C8oResponseListener](../interfaces/c8oresponselistener.md)): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:277](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L277)*

**Parameters:**

Name | Type |
------ | ------ |
`c8oListener` | [C8oResponseListener](../interfaces/c8oresponselistener.md) |

**Returns:** *string*

___

### `Static` addparametersToQuery

▸ **addparametersToQuery**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:314](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L314)*

**Returns:** *string*

___

### `Static` c8oCallRequestToJson

▸ **c8oCallRequestToJson**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:394](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L394)*

**Returns:** *string*

___

### `Static` changeEventToJson

▸ **changeEventToJson**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:322](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L322)*

**Returns:** *string*

___

### `Static` clientKeyStore

▸ **clientKeyStore**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:252](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L252)*

**Returns:** *string*

___

### `Static` closeInputStream

▸ **closeInputStream**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:290](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L290)*

**Returns:** *string*

___

### `Static` couchFullSyncNotActive

▸ **couchFullSyncNotActive**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:222](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L222)*

**Returns:** *string*

___

### `Static` couchNullResult

▸ **couchNullResult**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:218](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L218)*

**Returns:** *string*

___

### `Static` couchRequestAllDocuments

▸ **couchRequestAllDocuments**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:194](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L194)*

**Returns:** *string*

___

### `Static` couchRequestDeleteDocument

▸ **couchRequestDeleteDocument**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:202](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L202)*

**Returns:** *string*

___

### `Static` couchRequestGetView

▸ **couchRequestGetView**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:190](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L190)*

TAG Couch

**Returns:** *string*

___

### `Static` couchRequestInvalidRevision

▸ **couchRequestInvalidRevision**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:206](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L206)*

**Returns:** *string*

___

### `Static` couchRequestPostDocument

▸ **couchRequestPostDocument**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:210](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L210)*

**Returns:** *string*

___

### `Static` couchRequestResetDatabase

▸ **couchRequestResetDatabase**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:198](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L198)*

**Returns:** *string*

___

### `Static` createSslContext

▸ **createSslContext**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:330](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L330)*

**Returns:** *string*

___

### `Static` deserializeJsonObjectFromString

▸ **deserializeJsonObjectFromString**(`str`: string): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:294](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L294)*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *string*

___

### `Static` encodeParameters

▸ **encodeParameters**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:370](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L370)*

**Returns:** *string*

___

### `Static` entryNotFound

▸ **entryNotFound**(`entryKey`: string): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:390](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L390)*

**Parameters:**

Name | Type |
------ | ------ |
`entryKey` | string |

**Returns:** *string*

___

### `Static` fullSyncGetOrCreateDatabase

▸ **fullSyncGetOrCreateDatabase**(`databaseName`: string): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:234](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L234)*

**Parameters:**

Name | Type |
------ | ------ |
`databaseName` | string |

**Returns:** *string*

___

### `Static` fullSyncHandleResponse

▸ **fullSyncHandleResponse**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:238](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L238)*

**Returns:** *string*

___

### `Static` fullSyncJsonToXML

▸ **fullSyncJsonToXML**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:426](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L426)*

**Returns:** *string*

___

### `Static` fullSyncPutProperties

▸ **fullSyncPutProperties**(`properties`: Object): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:230](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L230)*

**Parameters:**

Name | Type |
------ | ------ |
`properties` | Object |

**Returns:** *string*

___

### `Static` generateRsainternalKey

▸ **generateRsainternalKey**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:378](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L378)*

**Returns:** *string*

___

### `Static` getCipherInstance

▸ **getCipherInstance**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:386](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L386)*

**Returns:** *string*

___

### `Static` getDocumentFromDatabase

▸ **getDocumentFromDatabase**(`documentId`: string): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:454](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L454)*

**Parameters:**

Name | Type |
------ | ------ |
`documentId` | string |

**Returns:** *string*

___

### `Static` getInputStreamFromHttpResponse

▸ **getInputStreamFromHttpResponse**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:438](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L438)*

**Returns:** *string*

___

### `Static` getJsonKey

▸ **getJsonKey**(`key`: string): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:398](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L398)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *string*

___

### `Static` getNameValuePairObjectValue

▸ **getNameValuePairObjectValue**(`name`: string): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:302](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L302)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *string*

___

### `Static` getParametersStringBytes

▸ **getParametersStringBytes**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:366](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L366)*

**Returns:** *string*

___

### `Static` getResponseFromLocalCache

▸ **getResponseFromLocalCache**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:494](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L494)*

**Returns:** *string*

___

### `Static` getResponseFromLocalCacheDocument

▸ **getResponseFromLocalCacheDocument**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:498](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L498)*

**Returns:** *string*

___

### `Static` handleC8oCallRequest

▸ **handleC8oCallRequest**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:502](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L502)*

**Returns:** *string*

___

### `Static` handleFullSyncRequest

▸ **handleFullSyncRequest**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:486](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L486)*

**Returns:** *string*

___

### `Static` httpInterfaceInstance

▸ **httpInterfaceInstance**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:446](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L446)*

**Returns:** *string*

___

### `Static` httpLogs

▸ **httpLogs**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:184](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L184)*

**Returns:** *string*

___

### `Static` illegalArgumentIncompatibleListener

▸ **illegalArgumentIncompatibleListener**(`listenerType`: string, `responseType`: string): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:91](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L91)*

**Parameters:**

Name | Type |
------ | ------ |
`listenerType` | string |
`responseType` | string |

**Returns:** *string*

___

### `Static` illegalArgumentInvalidEndpoint

▸ **illegalArgumentInvalidEndpoint**(`endpoint`: string): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:21](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`endpoint` | string |

**Returns:** *string*

___

### `Static` illegalArgumentInvalidFullSyncDatabaseUrl

▸ **illegalArgumentInvalidFullSyncDatabaseUrl**(`fullSyncDatabaseUrlStr`: string): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:51](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L51)*

TAG Illegal argument

**Parameters:**

Name | Type |
------ | ------ |
`fullSyncDatabaseUrlStr` | string |

**Returns:** *string*

___

### `Static` illegalArgumentInvalidLocalCachePolicy

▸ **illegalArgumentInvalidLocalCachePolicy**(`localCachePolicyString`: string): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:470](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L470)*

**Parameters:**

Name | Type |
------ | ------ |
`localCachePolicyString` | string |

**Returns:** *string*

___

### `Static` illegalArgumentInvalidURL

▸ **illegalArgumentInvalidURL**(`urlStr`: string): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:67](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`urlStr` | string |

**Returns:** *string*

___

### `Static` illegalArgumentNotFoundFullSyncView

▸ **illegalArgumentNotFoundFullSyncView**(`viewName`: string, `databaseName`: string): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:262](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L262)*

TAG Not found

**Parameters:**

Name | Type |
------ | ------ |
`viewName` | string |
`databaseName` | string |

**Returns:** *string*

___

### `Static` illegalArgumentNullParameter

▸ **illegalArgumentNullParameter**(`parameterName`: string): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:29](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`parameterName` | string |

**Returns:** *string*

___

### `Static` initC8oSslSocketFactory

▸ **initC8oSslSocketFactory**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:326](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L326)*

**Returns:** *string*

___

### `Static` initCipher

▸ **initCipher**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:358](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L358)*

**Returns:** *string*

___

### `Static` initKeyManagerFactory

▸ **initKeyManagerFactory**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:338](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L338)*

**Returns:** *string*

___

### `Static` initSslContext

▸ **initSslContext**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:354](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L354)*

**Returns:** *string*

___

### `Static` initTrustManagerFactory

▸ **initTrustManagerFactory**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:350](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L350)*

**Returns:** *string*

___

### `Static` inputStreamReaderEncoding

▸ **inputStreamReaderEncoding**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:410](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L410)*

**Returns:** *string*

___

### `Static` inputStreamToJSON

▸ **inputStreamToJSON**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:442](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L442)*

**Returns:** *string*

___

### `Static` inputStreamToXML

▸ **inputStreamToXML**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:406](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L406)*

**Returns:** *string*

___

### `Static` invalidParameterValue

▸ **invalidParameterValue**(`parameterName`: string, `details`: string): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:14](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L14)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`parameterName` | string | - |
`details` | string |  null |

**Returns:** *string*

___

### `Static` jsonValueToXML

▸ **jsonValueToXML**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:402](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L402)*

**Returns:** *string*

___

### `Static` keyFactoryInstance

▸ **keyFactoryInstance**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:382](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L382)*

**Returns:** *string*

___

### `Static` keyManagerFactoryInstance

▸ **keyManagerFactoryInstance**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:334](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L334)*

**Returns:** *string*

___

### `Static` loadKeyStore

▸ **loadKeyStore**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:244](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L244)*

TAG Certificate

**Returns:** *string*

___

### `Static` localCacheDocumentJustCreated

▸ **localCacheDocumentJustCreated**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:466](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L466)*

**Returns:** *string*

___

### `Static` localCachePolicyIsDisable

▸ **localCachePolicyIsDisable**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:462](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L462)*

**Returns:** *string*

___

### `Static` missingValue

▸ **missingValue**(`valueName`: string): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:33](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`valueName` | string |

**Returns:** *string*

___

### `Static` notImplementedFullSyncInterface

▸ **notImplementedFullSyncInterface**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:10](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L10)*

TAG Illegal argument

**Returns:** *string*

___

### `Static` overrideDocument

▸ **overrideDocument**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:482](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L482)*

**Returns:** *string*

___

### `Static` parseC8oReplicationResultToJson

▸ **parseC8oReplicationResultToJson**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:154](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L154)*

**Returns:** *string*

___

### `Static` parseFullSyncDefaultResponseToJson

▸ **parseFullSyncDefaultResponseToJson**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:158](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L158)*

**Returns:** *string*

___

### `Static` parseFullSyncPostDocumentResponseToJson

▸ **parseFullSyncPostDocumentResponseToJson**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:162](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L162)*

**Returns:** *string*

___

### `Static` parseInputStreamToString

▸ **parseInputStreamToString**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:130](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L130)*

**Returns:** *string*

___

### `Static` parseLogsStreamToJson

▸ **parseLogsStreamToJson**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:150](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L150)*

**Returns:** *string*

___

### `Static` parseLogsToJson

▸ **parseLogsToJson**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:146](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L146)*

**Returns:** *string*

___

### `Static` parseQueryEnumeratorToJson

▸ **parseQueryEnumeratorToJson**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:142](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L142)*

**Returns:** *string*

___

### `Static` parseRsainternalKey

▸ **parseRsainternalKey**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:138](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L138)*

**Returns:** *string*

___

### `Static` parseStringToJson

▸ **parseStringToJson**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:166](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L166)*

**Returns:** *string*

___

### `Static` parseXmlToString

▸ **parseXmlToString**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:134](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L134)*

**Returns:** *string*

___

### `Static` postDocument

▸ **postDocument**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:298](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L298)*

**Returns:** *string*

___

### `Static` putJson

▸ **putJson**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:318](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L318)*

**Returns:** *string*

___

### `Static` queryEnumeratorToJSON

▸ **queryEnumeratorToJSON**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:306](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L306)*

**Returns:** *string*

___

### `Static` queryEnumeratorToXML

▸ **queryEnumeratorToXML**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:310](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L310)*

**Returns:** *string*

___

### `Static` readLineFromBufferReader

▸ **readLineFromBufferReader**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:414](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L414)*

**Returns:** *string*

___

### `Static` remoteLogHttpRequest

▸ **remoteLogHttpRequest**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:434](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L434)*

**Returns:** *string*

___

### `Static` ressourceNotFound

▸ **ressourceNotFound**(`ressourceName`: string): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:45](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`ressourceName` | string |

**Returns:** *string*

___

### `Static` retrieveRsainternalKey

▸ **retrieveRsainternalKey**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:180](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L180)*

TAG HTTP

**Returns:** *string*

___

### `Static` runHttpRequest

▸ **runHttpRequest**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:505](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L505)*

**Returns:** *string*

___

### `Static` saveResponseToLocalCache

▸ **saveResponseToLocalCache**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:509](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L509)*

**Returns:** *string*

___

### `Static` serializeC8oCallRequest

▸ **serializeC8oCallRequest**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:490](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L490)*

**Returns:** *string*

___

### `Static` serverKeyStore

▸ **serverKeyStore**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:256](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L256)*

**Returns:** *string*

___

### `Static` takeLog

▸ **takeLog**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:430](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L430)*

**Returns:** *string*

___

### `Static` timeToLiveExpired

▸ **timeToLiveExpired**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:474](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L474)*

**Returns:** *string*

___

### `Static` trustAllCertificates

▸ **trustAllCertificates**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:248](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L248)*

**Returns:** *string*

___

### `Static` trustManagerFactoryInstance

▸ **trustManagerFactoryInstance**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:346](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L346)*

**Returns:** *string*

___

### `Static` unableToGetFullSyncDatabase

▸ **unableToGetFullSyncDatabase**(`databaseName`: string): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:214](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L214)*

**Parameters:**

Name | Type |
------ | ------ |
`databaseName` | string |

**Returns:** *string*

___

### `Static` unhandledFullSyncRequestable

▸ **unhandledFullSyncRequestable**(`fullSyncRequestableValue`: string): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:286](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L286)*

**Parameters:**

Name | Type |
------ | ------ |
`fullSyncRequestableValue` | string |

**Returns:** *string*

___

### `Static` unhandledListenerType

▸ **unhandledListenerType**(`listenerType`: string): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:272](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L272)*

**Parameters:**

Name | Type |
------ | ------ |
`listenerType` | string |

**Returns:** *string*

___

### `Static` unhandledResponseType

▸ **unhandledResponseType**(`responseType`: string): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:268](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L268)*

TAG Other

**Parameters:**

Name | Type |
------ | ------ |
`responseType` | string |

**Returns:** *string*

___

### `Static` unknownType

▸ **unknownType**(`variableName`: string, `variable`: Object): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:41](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`variableName` | string |
`variable` | Object |

**Returns:** *string*

___

### `Static` unknownValue

▸ **unknownValue**(`valueName`: string, `value`: string): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:37](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`valueName` | string |
`value` | string |

**Returns:** *string*

___

### `Static` urlEncode

▸ **urlEncode**(): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:362](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L362)*

**Returns:** *string*

___

### `Static` wrongListener

▸ **wrongListener**(`c8oListener`: [C8oResponseListener](../interfaces/c8oresponselistener.md)): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:25](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`c8oListener` | [C8oResponseListener](../interfaces/c8oresponselistener.md) |

**Returns:** *string*

___

### `Static` wrongResult

▸ **wrongResult**(`result`: any): *string*

*Defined in [c8osdk-js-core/src/c8o/Exception/c8oExceptionMessage.ts:281](https://github.com/convertigo/c8osdk-angular/blob/5680ff1/src/c8o/Exception/c8oExceptionMessage.ts#L281)*

**Parameters:**

Name | Type |
------ | ------ |
`result` | any |

**Returns:** *string*
