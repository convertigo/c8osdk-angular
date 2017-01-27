import {C8oResponseListener} from "../c8oResponse.service";
import {C8oUtils} from "../c8oUtils.service";
/**
 * Contains static functions returning the exception messages
 * in order to make simpler their modification and avoid duplication.
 */
export class C8oExceptionMessage {

    /** TAG Illegal argument **/
    static notImplementedFullSyncInterface(): string {
        return "You are using the default FullSyncInterface which is not implemented";
    }

    static invalidParameterValue(parameterName: string, details: string = null): string {
        let errorMessage: string = "The parameter '" + parameterName + "' is invalid";
        if (details != null) {
            errorMessage += ", " + details;
        }
        return errorMessage;
    }
    static illegalArgumentInvalidEndpoint(endpoint: string): string {
        return "'" + endpoint + "' is not a valid Convertigo endpoint";
    }

    static wrongListener(c8oListener: C8oResponseListener): string {
        return "The C8oListener class " + C8oUtils.getObjectClassName(c8oListener) + " is not handled";
    }

    static illegalArgumentNullParameter(parameterName: string): string {
        return parameterName + " must be not null";
    }

    static  missingValue(valueName: string): string {
        return "The " + valueName + " is missing";
    }

    static  unknownValue(valueName: string, value: string): string {
        return "The " + valueName + " value " + value + " is unknown";
    }

    static  unknownType(variableName: string, variable: Object): string {
        return "The " + variableName + " type " + C8oUtils.getObjectClassName(variable) + "is unknown";
    }

    static  ressourceNotFound(ressourceName: string): string {
        return "The " + ressourceName + " was not found";
    }

    static  toDo(): string {
        return "TODO";
    }

    /** TAG Illegal argument */

    static  illegalArgumentInvalidFullSyncDatabaseUrl(fullSyncDatabaseUrlStr: string): string {
        return "The fullSync database url '" + fullSyncDatabaseUrlStr + "' is not a valid url";
    }

    static  FullSyncDatabaseInitFailed(databaseName: string): string {
        return "Failed to initialize the FullSync database '" + databaseName + "'";
    }

    static  MissParameter(parameterName: string): string {
        return "The parameter '" + parameterName + "' is missing";
    }

    /* private static  illegalArgumentInvalidParameterValue(parameterName: string, parameterValue: string): string {
     return "'" + parameterValue + "' is not a valid value for the parameter '" + parameterName + "'"
     } */

    static illegalArgumentInvalidURL(urlStr: string): string {
        return "'" + urlStr + "' is not a valid URL";
    }

    static  InvalidArgumentInvalidURL(urlStr: string): string {
        return "'" + urlStr + "' is not a valid URL";
    }

    static  UnknownFullSyncPolicy(policy: any): string {
        return "Unknown the FullSync policy '" + policy + "'";
    }

    static InvalidArgumentInvalidEndpoint(endpoint: string): string {
        return "'" + endpoint + "' is not a valid Convertigo endpoint";
    }

    static  InvalidRequestable(requestable: string): string {
        return "'" + requestable + "' is not a valid requestable.";
    }

    static  InvalidParameterType(parameterName: string, wantedParameterType: string, actualParameterType: string): string {
        return "The parameter '" + parameterName + "' must be of type '" + wantedParameterType + "' and not '" + actualParameterType + "'";
    }

    static  illegalArgumentIncompatibleListener(listenerType: string, responseType: string): string {
        return "The listener type '" + listenerType + "' is incompatible with the response type '" + responseType + "'";
    }

    static  InvalidArgumentNullParameter(parameterName: string): string {
        return parameterName + " must be not null";
    }

    /** TAG Initialization */
    static  InitError(): string {
        return "Unable to initialize";
    }

    static  InitRsainternalKey(): string {
        return "Unable to initialize the RSA internal key";
    }

    static  InitCouchManager(): string {
        return "Unable to initialize the fullSync databases manager";
    }

    static  InitSslSocketFactory(): string {
        return "Unable to initialize the ssl socket factory";
    }

    static  InitDocumentBuilder(): string {
        return "Unable to initialize the XML document builder";
    }

    /** TAG Parse */

    static  ParseStreamToJson(): string {
        return "Unable to parse the input stream to a json document";
    }

    static  ParseStreamToXml(): string {
        return "Unable to parse the input stream to an xml document";
    }

    static  parseInputStreamToString(): string {
        return "Unable to parse the input stream to a string";
    }

    static  parseXmlToString(): string {
        return "Unable to parse the xml document to a string";
    }

    static  parseRsainternalKey(): string {
        return "Unable to parse the RSA internal key";
    }

    static  parseQueryEnumeratorToJson(): string {
        return "Unable to parse the query to a json document";
    }

    static  parseLogsToJson(): string {
        return "Unable to parse logs to a json document";
    }

    static  parseLogsStreamToJson(): string {
        return "Unable to parse stream containing logs response to a json document";
    }

    static  parseC8oReplicationResultToJson(): string {
        return "Unable to parse the replication result to a json document";
    }

    static  parseFullSyncDefaultResponseToJson(): string {
        return "Unable to parse the default fullSync result to a json document";
    }

    static  parseFullSyncPostDocumentResponseToJson(): string {
        return "Unable to parse the post document fullSync result to a json document";
    }

    static  parseStringToJson(): string {
        return "Unable to parse the string to a JSON document";
    }

    static  ParseStringToObject(type: any/*type*/): string {
        return "Unable to parse the string (JSON):string to an object of type "; // + type
    }

    static  StringToJsonValue(str: string): string {
        return "Unable to translate the string '" + str + "' to a JSON value";
    }

    /** TAG HTTP */

    static  retrieveRsainternalKey(): string {
        return "Error during http request to get the RSA internal key";
    }

    static  httpLogs(): string {
        return "Error during http request to send logs to the Convertigo server";
    }

    /** TAG Couch */

    static  couchRequestGetView(): string {
        return "Unable to run the view query";
    }

    static  couchRequestAllDocuments(): string {
        return "Unable to run the all query";
    }

    static  couchRequestResetDatabase(): string {
        return "Unable to run the reset query";
    }

    static  couchRequestDeleteDocument(): string {
        return "Unable to run the delete document query";
    }

    static  couchRequestInvalidRevision(): string {
        return "The revision is invalid";
    }

    static  couchRequestPostDocument(): string {
        return "Unable to run the post document query";
    }

    static  unableToGetFullSyncDatabase(databaseName: string): string {
        return "Unable to get the fullSync database '" + databaseName + "' from the manager";
    }

    static  couchNullResult(): string {
        return "An error occured during the fullSync request, its result is null";
    }

    static  couchFullSyncNotActive(): string {
        return "Unable to use fullSync because it was not activated at the initialization";
    }

    static  CouchDeleteFailed(): string {
        return "Delete the Couch document failed";
    }

    static  fullSyncPutProperties(properties: Object): string {
        return "Unable to put the following properties in the fullSync Document: " + JSON.stringify(properties);
    }

    static  fullSyncGetOrCreateDatabase(databaseName: string): string {
        return "Unable to get or create the fullSync database '" + databaseName + "'";
    }

    static  fullSyncHandleResponse(): string {
        return "Error while handling the fullSync response";
    }

    /** TAG Certificate */

    static  loadKeyStore(): string {
        return "Failed to load key store";
    }

    static  trustAllCertificates(): string {
        return "Unable to load a key store trusting all certificates";
    }

    static  clientKeyStore(): string {
        return "Unable to load the client key store";
    }

    static  serverKeyStore(): string {
        return "Unable to load the server key store";
    }

    /** TAG Not found */

    static  illegalArgumentNotFoundFullSyncView(viewName: string, databaseName: string): string {
        return "Cannot found the view '" + viewName + "' in database '" + databaseName + "'";
    }

    /** TAG Other */

    static  unhandledResponseType(responseType: string): string {
        return "The response type '" + responseType + "' is not handled";
    }

    static  unhandledListenerType(listenerType: string): string {
        return "The listener type '" + listenerType + "' is not handled";
    }

    static  WrongListener(c8oListener: C8oResponseListener): string {
        return ""; // "The C8oListener class " + C8oUtils.GetObjectClassName(c8oListener) + " is not handled"
    }

    static  wrongResult(result: any): string {
        return "The response class " + C8oUtils.getObjectClassName(result) + " is not handled";
    }

    static  todo(): string {
        return "todo";
    }

    static  unhandledFullSyncRequestable(fullSyncRequestableValue: string): string {
        return "The fullSync requestable '" + fullSyncRequestableValue + "' is not handled";
    }

    static  closeInputStream(): string {
        return "Unable to close the input stream";
    }

    static  deserializeJsonObjectFromString(str: string): string {
        return "Unable to deserialize the JSON object from the following string: '" + str + "'";
    }

    static  postDocument(): string {
        return "Unable to post document";
    }

    static  getNameValuePairObjectValue(name: string): string {
        return "Unable to get the object value from the NameValuePair named '" + name + "'";
    }

    static  queryEnumeratorToJSON(): string {
        return "Unable to parse the QueryEnumerato to a JSON document";
    }

    static  queryEnumeratorToXML(): string {
        return "Unable to parse the QueryEnumerato to a XML document";
    }

    static  addparametersToQuery(): string {
        return "Unable to add parameters to the fullSync query";
    }

    static  putJson(): string {
        return "Failed to put data in JSON ...";
    }

    static  changeEventToJson(): string {
        return "Failed to parse ChangeEvent to JSON document";
    }

    static  initC8oSslSocketFactory(): string {
        return "Failed to initialize C8oSslSocketFactory";
    }

    static  createSslContext(): string {
        return "failed to create a new SSL context";
    }

    static  keyManagerFactoryInstance(): string {
        return "Failed to instanciate KeyManagerFactory";
    }

    static  initKeyManagerFactory(): string {
        return "Failed to initialize the key manager factory";
    }

    static  InitHttpInterface(): string {
        return "Failed to initialize the secure HTTP Interface";
    }

    static  trustManagerFactoryInstance(): string {
        return "Failed to instanciate KeyManagerFactory";
    }

    static  initTrustManagerFactory(): string {
        return "Failed to initialize the key manager factory";
    }

    static  initSslContext(): string {
        return "Failed to initialize the SSL context";
    }

    static  initCipher(): string {
        return "Failed to initialize the cipher";
    }

    static  urlEncode(): string {
        return "Failed to URL encode prameters";
    }

    static  getParametersStringBytes(): string {
        return "Failed to get parameters string bytes";
    }

    static  encodeParameters(): string {
        return "Failed to encode parameters";
    }

    static  RunHttpRequest(): string {
        return "Failed to run the HTTP request";
    }

    static  generateRsainternalKey(): string {
        return "Failed to generate RSA internal key";
    }

    static  keyFactoryInstance(): string {
        return "Failed to get KeyFactory instance";
    }

    static  getCipherInstance(): string {
        return "Failed to get Cipher instance";
    }

    static  entryNotFound(entryKey: string): string {
        return "Entry key '" + entryKey + "' not found";
    }

    static  c8oCallRequestToJson(): string {
        return "Failed to parse c8o call request to JSON";
    }

    static  getJsonKey(key: string): string {
        return "Failed to get the JSON key '" + key + "'";
    }

    static  jsonValueToXML(): string {
        return "Failed to parse JSON value to XML";
    }

    static  inputStreamToXML(): string {
        return "Failed to parse InputStream to an XML document";
    }

    static  inputStreamReaderEncoding(): string {
        return "Failed to instanciate the InputStreamReader";
    }

    static  readLineFromBufferReader(): string {
        return "Failed to read line from the BufferReader";
    }

    static  GetLocalCacheParameters(): string {
        return "Failed to get local cache parameters";
    }

    static  GetLocalCachePolicy(policy: string): string {
        return "Failed to get local cache policy: " + policy;
    }

    static  fullSyncJsonToXML(): string {
        return "Failed to translate full sync JSON to XML";
    }

    static  takeLog(): string {
        return "Failed to take a log line in the list";
    }

    static  remoteLogHttpRequest(): string {
        return "Failed while running the HTTP request sending logs to the Convertigo server";
    }

    static  getInputStreamFromHttpResponse(): string {
        return "Failed to get InputStream from the HTTP response";
    }

    static  inputStreamToJSON(): string {
        return "Failed to translate the input stream to a JSON document";
    }

    static  httpInterfaceInstance(): string {
        return "Failed to instanciate the HTTP interface";
    }

    static  FullSyncInterfaceInstance(): string {
        return "Failed to instanciate the FullSync interface";
    }

    static  getDocumentFromDatabase(documentId: string): string {
        return "Failed to get fullSync document '" + documentId + "' from the database";
    }

    static  FullSyncReplicationFail(databaseName: string, way: string): string {
        return "Failed to '" + way + "' replicate the '" + databaseName + "' database";
    }

    static  localCachePolicyIsDisable(): string {
        return "Depending to the network state the local cache is disabled";
    }

    static  localCacheDocumentJustCreated(): string {
        return "The local cache document is just created (empty):string";
    }

    static  illegalArgumentInvalidLocalCachePolicy(localCachePolicyString: string): string {
        return "The local cache policy '" + localCachePolicyString + "' is invalid";
    }

    static  timeToLiveExpired(): string {
        return "The time to live expired";
    }

    static  InvalidLocalCacheResponseInformation(): string {
        return "Local cache response informations are invalid";
    }

    static  overrideDocument(): string {
        return "Failed to override the fullSync document";
    }

    static  handleFullSyncRequest(): string {
        return "Failed while running the fullSync request";
    }

    static  serializeC8oCallRequest(): string {
        return "Failes to serialize the Convertigo call request";
    }

    static  getResponseFromLocalCache(): string {
        return "Failed to get response from the local cache";
    }

    static  getResponseFromLocalCacheDocument(): string {
        return "Failed to get response form the local cache document";
    }

    static  handleC8oCallRequest(): string {
        return "Failed while running the c8o call request";
    }
    public static runHttpRequest() : string {
        return "Failed to run the HTTP request";
    }

    static  saveResponseToLocalCache(): string {
        return "Failed to save the response to the local cache";
    }

    static  RemoteLogFail(): string {
        return "Failed to send log to the Convertigo server: disabling remote logging";
    }

    static  FullSyncRequestFail(): string {
        return "Failed to process the fullsync request";
    }

    static  MissingLocalCacheResponseDocument(): string {
        return "Missing local cache response document";
    }
}