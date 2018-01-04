import {C8o, FullSyncPolicy} from "./c8o.service";
import {C8oResponseListener, C8oResponseJsonListener} from "./c8oResponse.service";
import {C8oUtils} from "./c8oUtils.service";
import {C8oException} from "./Exception/c8oException.service";
import {C8oExceptionMessage} from "./Exception/c8oExceptionMessage.service";
import {FullSyncRequestable} from "./fullSyncRequestable.service";
import {C8oFullSyncDatabase} from "./fullSyncDatabase.service";
import {FullSyncDocumentOperationResponse, FullSyncDefaultResponse} from "./fullSyncResponse.service";
import {C8oFullSyncTranslator} from "./c8oFullSyncTranslator.service";
import {C8oRessourceNotFoundException} from "./Exception/c8oRessourceNotFoundException.service";
import {C8oUnavailableLocalCacheException} from "./Exception/c8oUnavailableLocalCacheException.service";
import {C8oLocalCacheResponse} from "./c8oLocalCacheResponse.service";
import {FullSyncDeleteDocumentParameter} from "./fullSyncDeleteDocumentParameter.service";
import {C8oCouchBaseLiteException} from "./Exception/c8oCouchBaseLiteException.service";
import {C8oFullSyncChangeListener} from "./c8oFullSyncChangeListener.service";

export class C8oFullSync {
    private static FULL_SYNC_URL_PATH: string = "/fullsync/";
    /**
     * The project requestable value to execute a fullSync request.
     */
    public static FULL_SYNC_PROJECT: string = "fs://";
    public static FULL_SYNC__ID: string = "_id";
    public static FULL_SYNC__REV: string = "_rev";
    public static FULL_SYNC__ATTACHMENTS: string = "_attachments";

    c8o: C8o;
    protected fullSyncDatabaseUrlBase: string;
    protected localSuffix: string;

    public constructor(c8o: C8o) {
        this.c8o = c8o;
        this.fullSyncDatabaseUrlBase = c8o.endpointConvertigo + C8oFullSync.FULL_SYNC_URL_PATH;
        this.localSuffix = (c8o.fullSyncLocalSuffix !== null) ? c8o.fullSyncLocalSuffix : "_device";
    }

    /**
     * Handles a fullSync request.<br/>
     * It determines the type of the request thanks to parameters.
     *
     * @param _parameters
     * @param listener
     * @return promise<any>
     * @throws C8oException
     */
    public async handleFullSyncRequest(_parameters: Object, listener: C8oResponseListener): Promise<any> {
        let parameters = {};
        for(let val in _parameters){
            if(_parameters[val] instanceof Blob != true){
                //if it's not a blob then stringify and parse the value to make some values like true case insensitive ( from string to boolean)
                parameters[val] = JSON.parse(JSON.stringify(_parameters[val]));
            }
            else{
                parameters[val] = _parameters[val];
            }
        }
        let projectParameterValue: string = C8oUtils.peekParameterStringValue(parameters, C8o.ENGINE_PARAMETER_PROJECT, true);
        if (!projectParameterValue.startsWith(C8oFullSync.FULL_SYNC_PROJECT)) {
            throw new C8oException(C8oExceptionMessage.invalidParameterValue(projectParameterValue, "its don't start with" + C8oFullSync.FULL_SYNC_PROJECT));
        }
        let fullSyncRequestableValue: string = C8oUtils.peekParameterStringValue(parameters, C8o.ENGINE_PARAMETER_SEQUENCE, true);

        //  get rid of the optional trailing #RouteHint present in the sequence
        if (fullSyncRequestableValue.indexOf("#") !== -1)
            fullSyncRequestableValue = fullSyncRequestableValue.substring(0, fullSyncRequestableValue.indexOf("#"));

        let fullSyncRequestable: FullSyncRequestable = FullSyncRequestable.getFullSyncRequestable(fullSyncRequestableValue);
        if (fullSyncRequestable === null) {
            throw new C8oException(C8oExceptionMessage.invalidParameterValue(C8o.ENGINE_PARAMETER_PROJECT, C8oExceptionMessage.unknownValue("fullSync requestable", fullSyncRequestableValue)));
        }
        let databaseName: string = projectParameterValue.substring(C8oFullSync.FULL_SYNC_PROJECT.length);
        if (databaseName.length < 1) {
            databaseName = this.c8o.defaultDatabaseName;
            if (databaseName === null) {
                throw new C8oException(C8oExceptionMessage.invalidParameterValue(C8o.ENGINE_PARAMETER_PROJECT, C8oExceptionMessage.missingValue("fullSync database name")));
            }
        }

        let response: any;
        return new Promise((resolve, reject) => {
            fullSyncRequestable.handleFullSyncRequest(this, databaseName, parameters, listener).then((result) => {
                response = result;
                if (response === null || response === undefined) {
                    reject(new C8oException(C8oExceptionMessage.couchNullResult()));
                }
                resolve(this.handleFullSyncResponse(response, listener));
            }).catch((error) => {
                if (error instanceof C8oException) {
                    reject(error);
                }
                else {
                    reject(new C8oException(C8oExceptionMessage.FullSyncRequestFail(), error));
                }
            });
        });
    }

    //noinspection JSUnusedLocalSymbols
    /**
     *
     * @param response
     * @param listener
     * @return response
     * @throws C8oException Failed to parse response.
     */
    handleFullSyncResponse(response: any, listener: C8oResponseListener): any {
        return response;
    }

    /**
     * Checks if request parameters correspond to a fullSync request.
     */
    static isFullSyncRequest(requestParameter: Object): boolean {
        if (C8oUtils.getParameterStringValue(requestParameter, C8o.ENGINE_PARAMETER_PROJECT, false) !== null) {
            return C8oUtils.getParameterStringValue(requestParameter, C8o.ENGINE_PARAMETER_PROJECT, false).startsWith(C8oFullSync.FULL_SYNC_PROJECT);
        }
        else {
            return false;
        }
    }

}

export class C8oFullSyncCbl extends C8oFullSync {
    private static ATTACHMENT_PROPERTY_KEY_CONTENT_URL: string = "content_url";
    private fullSyncDatabases: Object;
    private fullSyncChangeListeners: Array<Array<C8oFullSyncChangeListener>> = [];
    private cblChangeListeners: Array<any> = [];

    constructor(c8o: C8o) {
        super(c8o);
        this.fullSyncDatabases = {};
    }

    /**
     * Returns the database with this name in the list.<br/>
     * If it does not already exist yet then creates it and adds it to the list.
     *
     * @param databaseName
     * @return C8oFullSyncDatabase
     * @throws C8oException Failed to create a new fullSync database.
     */
    public getOrCreateFullSyncDatabase(databaseName: string): C8oFullSyncDatabase {
        let localDatabaseName: string = databaseName + this.localSuffix;

        if (this.fullSyncDatabases[localDatabaseName] == null) {
            this.fullSyncDatabases[localDatabaseName] = new C8oFullSyncDatabase(this.c8o, databaseName, this.fullSyncDatabaseUrlBase, this.localSuffix);
        }
        return this.fullSyncDatabases[localDatabaseName];
    }


    handleFullSyncResponse(response: any, listener: C8oResponseListener): any {
        response = super.handleFullSyncResponse(response, listener);
        if (listener instanceof C8oResponseJsonListener) {
            if (response instanceof FullSyncDocumentOperationResponse) {
                return C8oFullSyncTranslator.fullSyncDocumentOperationResponseToJson(response as FullSyncDocumentOperationResponse);
            }
            else if (response instanceof FullSyncDefaultResponse) {
                return C8oFullSyncTranslator.fullSyncDefaultResponseToJson(response as FullSyncDefaultResponse);
            }
            else if (response instanceof Object) {
                return response as JSON;
            }

            else {
                throw new C8oException(C8oExceptionMessage.illegalArgumentIncompatibleListener(listener.toString(), typeof response));
            }
        }
    }

    handleGetAttachmentUrlRequest(fullSyncDatabaseName: string, docid: string, parameters: Object): Promise<any> {
        let fullSyncDatabase: C8oFullSyncDatabase = null;
        fullSyncDatabase = this.getOrCreateFullSyncDatabase(fullSyncDatabaseName);
        let attachmentName = C8oUtils.getParameterStringValue(parameters, "attachment_name", false);
        return new Promise((resolve) => {
            fullSyncDatabase.getdatabase.getAttachment(docid, attachmentName).then((buffer) => {
                resolve(buffer);
            });
        });
    }

    handleGetDocumentRequest(fullSyncDatabaseName: string, docid: string, parameters: Object): Promise<any> {
        let fullSyncDatabase: C8oFullSyncDatabase = null;
        let dictDoc: Object = {};
        let param: Object;
        param = parameters["attachments"] ? {"attachments": true} : {};
        parameters["binary"] ? param["binary"] = true : {};


        fullSyncDatabase = this.getOrCreateFullSyncDatabase(fullSyncDatabaseName);
        return new Promise((resolve, reject) => {
            fullSyncDatabase.getdatabase.get(docid, param).then((document) => {
                if (document != null) {
                    dictDoc = document;
                    let attachments = document[C8oFullSync.FULL_SYNC__ATTACHMENTS];
                    if (attachments != null) {
                        for (let attachmentName of attachments) {
                            let url = attachments["url"];
                            let attachmentDesc: Object = attachments[attachmentName];
                            attachmentDesc[C8oFullSyncCbl.ATTACHMENT_PROPERTY_KEY_CONTENT_URL] = url.toString();
                            let dictAny: Object = {};
                            dictAny[attachmentName] = attachmentDesc;
                            dictDoc[C8oFullSyncCbl.FULL_SYNC__ATTACHMENTS] = dictAny;
                        }
                    }
                }
                else {
                    throw new C8oRessourceNotFoundException((C8oExceptionMessage.ressourceNotFound("requested document \"" + docid + "\"")));
                }
                if (dictDoc === null) {
                    dictDoc = {};
                }
                resolve(dictDoc);
            })
                .catch((error) => {
                    reject(error);
                });

        });
    }

    handleDeleteDocumentRequest(DatabaseName: string, docid: string, parameters: Object): Promise<any> {
        let fullSyncDatabase: C8oFullSyncDatabase = null;

        fullSyncDatabase = this.getOrCreateFullSyncDatabase(DatabaseName);
        let revParameterValue: string = C8oUtils.getParameterStringValue(parameters, FullSyncDeleteDocumentParameter.REV.name, false);
        let documentRevision: string;
        if (revParameterValue === null) {
            return new Promise((resolve, reject) => {
                fullSyncDatabase.getdatabase.get(docid).then((doc) => {
                    if (doc === null) {
                        throw new C8oRessourceNotFoundException(C8oExceptionMessage.toDo());
                    }
                    documentRevision = doc._rev;
                    return fullSyncDatabase.getdatabase.remove(doc);
                }).then((result) => {
                    resolve(new FullSyncDocumentOperationResponse(docid, documentRevision, result.ok));
                }).catch((err) => {
                    reject(new C8oException(C8oExceptionMessage.couchRequestDeleteDocument(), err));
                });
            });
        }
        else {
            return new Promise((resolve, reject) => {
                fullSyncDatabase.getdatabase.remove(docid, revParameterValue)
                    .then((result) => {
                        resolve(new FullSyncDocumentOperationResponse(docid, documentRevision, result.ok));
                    }).catch((err) => {
                    reject(new C8oException(C8oExceptionMessage.couchRequestDeleteDocument(), err));
                });
            });

        }
    }

    handlePostDocumentRequest(databaseName: string, fullSyncPolicy: FullSyncPolicy, parameters: Object): Promise<FullSyncDocumentOperationResponse> {
        let fullSyncDatabase: C8oFullSyncDatabase;
        fullSyncDatabase = this.getOrCreateFullSyncDatabase(databaseName);
        let subkeySeparatorParameterValue: string = C8oUtils.getParameterStringValue(parameters, C8o.FS_SUBKEY_SEPARATOR, false);
        if (subkeySeparatorParameterValue == null) {
            subkeySeparatorParameterValue = ".";
        }
        let newProperties = {};
        for (let i = 0; i < Object.keys(parameters).length; i++) {
            let parameterName: string = Object.keys(parameters)[i];
            if (!parameterName.startsWith("__") && !parameterName.startsWith("_use_")) {
                let objectParameterValue: any = parameters[Object.keys(parameters)[i]];
                let paths: Array<string> = parameterName.split(subkeySeparatorParameterValue);
                if (paths.length > 1) {
                    parameterName = paths[0];
                    let count = paths.length - 1;
                    while (count > 0) {
                        let tmpObject: Object = {};
                        tmpObject[paths[count]] = objectParameterValue;
                        objectParameterValue = tmpObject;
                        count--;
                    }
                    let existProperty = newProperties[parameterName];
                    if (existProperty != null) {
                        C8oFullSyncCbl.mergeProperties(objectParameterValue, existProperty);
                    }
                }
                newProperties[parameterName] = objectParameterValue;
            }


        }
        let db = fullSyncDatabase.getdatabase;
        return new Promise((resolve, reject) => {
            fullSyncPolicy.action(db, newProperties).then((createdDocument) => {
                let fsDocOpeResp: FullSyncDocumentOperationResponse = new FullSyncDocumentOperationResponse(createdDocument.id, createdDocument.rev, createdDocument.ok);
                resolve(fsDocOpeResp);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    handlePutAttachmentRequest(databaseName: string, docid: string, attachmentName: string, attachmentType: string, attachmentContent: any): Promise<any> {
        let document: any = null;
        let fullSyncDatabase: C8oFullSyncDatabase = this.getOrCreateFullSyncDatabase(databaseName);

        return new Promise((resolve) => {
            fullSyncDatabase.getdatabase.get(docid).then((result) => {
                document = result;

                if (document !== null) {
                    fullSyncDatabase.getdatabase.putAttachment(docid, attachmentName,result._rev, attachmentContent, attachmentType)
                        .then((result) => {
                            //  handle result
                            resolve(new FullSyncDocumentOperationResponse(result._id, result._rev, result.ok));
                        }).catch((err) => {
                        throw new C8oCouchBaseLiteException("Unable to put the attachment " + attachmentName + " to the document " + docid + ".", err);
                    });
                } else {
                    throw new C8oRessourceNotFoundException(C8oExceptionMessage.toDo());
                }

            });
        });


    }

    handleDeleteAttachmentRequest(databaseName: string, docid: string, attachmentName: string): Promise<any> {
        let document: any = null;
        let fullSyncDatabase: C8oFullSyncDatabase = this.getOrCreateFullSyncDatabase(databaseName);

        return new Promise((resolve) => {
            fullSyncDatabase.getdatabase.get(docid).then((result) => {
                document = result;
            }).then(() => {
                if (document !== null) {
                    fullSyncDatabase.getdatabase.removeAttachment(docid, attachmentName, document._rev).catch((err) => {
                        throw new C8oCouchBaseLiteException("Unable to delete the attachment " + attachmentName + " to the document " + docid + ".", err);
                    });
                }
                else {
                    throw new C8oRessourceNotFoundException(C8oExceptionMessage.toDo());
                }
                resolve(new FullSyncDocumentOperationResponse(document._id, document._rev, true));
            });
        });
    }

    public handleAllDocumentsRequest(databaseName: string, parameters: Object): Promise<any> {
        let fullSyncDatabase = null;

        fullSyncDatabase = this.getOrCreateFullSyncDatabase(databaseName);
        return new Promise((resolve, reject) => {
            fullSyncDatabase.getdatabase
                .allDocs(parameters)
                .then((res) => {
                    resolve(res);
                })
                .catch(() => {
                    reject(new C8oException("TODO"));
                });
        });
    }

    handleGetViewRequest(databaseName: string, ddocName: string, viewName: string, parameters: Object): Promise<any> {
        let fullSyncDatabase = null;
        fullSyncDatabase = this.getOrCreateFullSyncDatabase(databaseName);
        let attachments;
        let binary;
        let include_docs;
        if (parameters["attachments"] && window["cblite"] !== undefined) {
            attachments = C8oUtils.getParameterStringValue(parameters, "attachments", false);
            binary = C8oUtils.getParameterStringValue(parameters, "binary", false);
            include_docs = C8oUtils.getParameterStringValue(parameters, "include_docs", false);
        }


        return new Promise((resolve, reject) => {
            fullSyncDatabase.getdatabase.query(ddocName + "/" + viewName, parameters)
                .then((result) => {
                    if (attachments) {
                        let array: Array<Object> = [];
                        let len = 0;
                        for (let resp of result.rows) {
                            this.handleGetDocumentRequest(databaseName, resp.id, {
                                "attachments": true,
                                "binary": true,
                                "include_docs": true
                            }).then((getResult) => {
                                array.push(getResult);
                                len++;
                                if (len === result.rows.length) {
                                    result.rows = array;
                                    resolve(result);
                                }
                            });
                        }
                    }
                    else {
                        resolve(result);
                    }

                }).catch((error) => {
                    reject(new C8oException(C8oExceptionMessage.couchRequestGetView(), error));
            });
        });

    }

    handleSyncRequest(databaseName: string, parameters: Object, c8oResponseListener: C8oResponseListener): Promise<any> {
        let fullSyncDatabase: C8oFullSyncDatabase = this.getOrCreateFullSyncDatabase(databaseName);
        return fullSyncDatabase.startAllReplications(parameters, c8oResponseListener);
    }

    handleReplicatePullRequest(databaseName: string, parameters: Object, c8oResponseListener: C8oResponseListener): Promise<any> {
        let fullSyncDatabase: C8oFullSyncDatabase = this.getOrCreateFullSyncDatabase(databaseName);
        return fullSyncDatabase.startPullReplication(parameters, c8oResponseListener);
    }

    handleReplicatePushRequest(databaseName: string, parameters: Object, c8oResponseListener: C8oResponseListener): Promise<any> {
        let fullSyncDatabase: C8oFullSyncDatabase = this.getOrCreateFullSyncDatabase(databaseName);
        return fullSyncDatabase.startPushReplication(parameters, c8oResponseListener);
    }

    handleResetDatabaseRequest(databaseName: string): Promise<FullSyncDefaultResponse> {
        return new Promise((resolve) => {
            this.handleDestroyDatabaseRequest(databaseName).then(() => {
                resolve(this.handleCreateDatabaseRequest(databaseName));
            });
        });


    }

    handleCreateDatabaseRequest(databaseName: string): FullSyncDefaultResponse {
        this.getOrCreateFullSyncDatabase(databaseName);
        return new FullSyncDefaultResponse(true);
    }

    handleDestroyDatabaseRequest(databaseName: string): Promise<FullSyncDefaultResponse> {
        return new Promise((resolve, reject) => {
            let localDatabaseName = databaseName + this.localSuffix;
            this.getOrCreateFullSyncDatabase(databaseName).deleteDB().then((response) => {
                if (this.fullSyncDatabases[localDatabaseName] !== null) {
                    delete this.fullSyncDatabases[localDatabaseName];
                }
                resolve(new FullSyncDefaultResponse(response.ok));
            }).catch((err) => {
                reject(new C8oException("TODO", err));
            });
        });
    }

    static mergeProperties(newProperties: Object, oldProperties: Object) {
        for (let i = 0; i < Object.keys(oldProperties).length; i++) {
            let oldPropertyKey = Object.keys(oldProperties)[i];
            let oldPropertyValue = oldProperties[Object.keys(oldProperties)[i]];
            // Checks if the new document contains the same key
            if (newProperties[oldPropertyKey] !== null && newProperties[oldPropertyKey] !== undefined) {
                let newDocumentValue = newProperties[oldPropertyKey];
                if (Object.prototype.toString.call( newDocumentValue ) === "[object Array]" && Object.prototype.toString.call( oldPropertyValue ) === "[object Array]") {
                    C8oFullSyncCbl.mergeArrayProperties(newDocumentValue, oldPropertyValue);
                }
                else if (typeof(newDocumentValue) === "object" && typeof(oldPropertyValue) === "object") {
                    C8oFullSyncCbl.mergeProperties(newDocumentValue, oldPropertyValue);
                }
                else {
                    // If the new document has the same key but its value is not the same type than the old one or if their type are "simple"
                    // Does nothing cause the right value is the new one
                }
            }
            else {
                // If the new document does not contain the key then adds it
                newProperties[oldPropertyKey] = oldPropertyValue;
            }
        }
    }

    static mergeArrayProperties(newArray: any, oldArray: any) {
        let newArraySize = newArray.length;
        let oldArraySize = oldArray.length;
        for (let i = 0; i < oldArraySize; i++) {
            let newArrayValue: any = null;
            if (i < newArraySize) {
                newArrayValue = newArray[i];
            }
            let oldArrayValue = oldArray[i];

            if (newArrayValue !== null) {
                if (newArrayValue instanceof Array && oldArrayValue instanceof Array) {
                    C8oFullSyncCbl.mergeArrayProperties(newArrayValue, oldArrayValue);
                }
                else if (typeof(newArrayValue) === "object" && typeof(oldArrayValue) === "object") {
                    C8oFullSyncCbl.mergeProperties(newArrayValue, oldArrayValue);
                }
                else {
                    // If the new array value is not the same type than the old one or if their type are "simple"
                    // Does nothing cause the right value is the new one
                }
            }
            else {
                // If the new array value is null then it means that it size is reach so we can add objects at its end
                newArray.push(oldArrayValue);
            }
        }
    }

    //noinspection JSUnusedLocalSymbols
    getDocucmentFromDatabase(c8o: C8o, databaseName: string, documentId: string): Promise<any> {
        let c8oFullSyncDatabase: C8oFullSyncDatabase;
        try {
            c8oFullSyncDatabase = this.getOrCreateFullSyncDatabase(databaseName);
        }
        catch (err) {
            throw new C8oException(C8oExceptionMessage.fullSyncGetOrCreateDatabase(databaseName));
        }

        return new Promise((resolve) => {
            c8oFullSyncDatabase.getdatabase().get(documentId).then((result) => {
                resolve(result);
            });
        });
    }

    overrideDocument(document: any, properties: Object, databaseName) {
        properties[C8oFullSync.FULL_SYNC__REV] = document._rev;
        let c8oFullSyncDatabase: C8oFullSyncDatabase;
        try {
            c8oFullSyncDatabase = this.getOrCreateFullSyncDatabase(databaseName);
        }
        catch (err) {
            throw new C8oException(C8oExceptionMessage.fullSyncGetOrCreateDatabase(databaseName));
        }


        c8oFullSyncDatabase.getdatabase().put(properties).catch(() => {
            throw new C8oException("TODO");
        });

    }

    async getResponseFromLocalCache(c8oCallRequestIdentifier: string): Promise<any> {
        let fullSyncDatabase = this.getOrCreateFullSyncDatabase(C8o.LOCAL_CACHE_DATABASE_NAME);
        let localCacheDocument = null;
        return new Promise((resolve, reject) => {
            fullSyncDatabase.getdatabase.get(c8oCallRequestIdentifier).then((result) => {
                localCacheDocument = result;

                let response = JSON.stringify(localCacheDocument[C8o.LOCAL_CACHE_DOCUMENT_KEY_RESPONSE]);
                let responseType = localCacheDocument[C8o.LOCAL_CACHE_DOCUMENT_KEY_RESPONSE_TYPE];
                let expirationDate = localCacheDocument[C8o.LOCAL_CACHE_DOCUMENT_KEY_EXPIRATION_DATE];

                let responseString: string = null;
                let responseTypeString: string = null;
                let expirationDateNumber: number = -1;

                if (response != null) {
                    if (typeof response === "string") {
                        responseString = response;
                    }
                    else {
                        throw new C8oException(C8oExceptionMessage.InvalidLocalCacheResponseInformation());
                    }
                }
                if (responseType != null) {
                    if (typeof responseType === "string") {
                        responseTypeString = responseType;
                    }
                    else {
                        throw new C8oException(C8oExceptionMessage.InvalidLocalCacheResponseInformation());
                    }
                }
                if (expirationDate != null) {
                    if (typeof expirationDate === "number") {
                        expirationDateNumber = expirationDate;
                        let currentTime = new Date().getTime();
                        if (expirationDateNumber < currentTime) {
                            throw new C8oUnavailableLocalCacheException(C8oExceptionMessage.timeToLiveExpired());
                        }
                    }
                    else {
                        throw new C8oException(C8oExceptionMessage.InvalidLocalCacheResponseInformation());
                    }
                }
                resolve(new C8oLocalCacheResponse(responseString, responseTypeString, expirationDateNumber));
            }).catch((err) => {
                if (err.status === 404) {
                    resolve(new C8oUnavailableLocalCacheException(C8oExceptionMessage.localCacheDocumentJustCreated()));
                }
                else {
                    reject(err);
                }
            });
        });


    }

    async saveResponseToLocalCache(c8oCallRequestIdentifier: string, localCacheResponse: C8oLocalCacheResponse): Promise<any> {
        let fullSyncDatabase: C8oFullSyncDatabase = this.getOrCreateFullSyncDatabase(C8o.LOCAL_CACHE_DATABASE_NAME);
        return new Promise((resolve) => {
            fullSyncDatabase.getdatabase.get(c8oCallRequestIdentifier).then((localCacheDocument) => {
                let properties = {};
                properties[C8oFullSync.FULL_SYNC__ID] = c8oCallRequestIdentifier;
                properties[C8o.LOCAL_CACHE_DOCUMENT_KEY_RESPONSE] = localCacheResponse.getResponse();
                properties[C8o.LOCAL_CACHE_DOCUMENT_KEY_RESPONSE_TYPE] = localCacheResponse.getResponseType();
                if (localCacheResponse.getExpirationDate() > 0) {
                    properties[C8o.LOCAL_CACHE_DOCUMENT_KEY_EXPIRATION_DATE] = localCacheResponse.getExpirationDate();
                }
                let currentRevision = localCacheDocument._rev;
                if (currentRevision !== null) {
                    properties[C8oFullSyncCbl.FULL_SYNC__REV] = currentRevision;
                }
                fullSyncDatabase.getdatabase.put(properties).then((result) => {
                    resolve(result);
                });
            }).catch((error) => {
                if (error.status === 404) {
                    let properties = {};
                    properties[C8oFullSync.FULL_SYNC__ID] = c8oCallRequestIdentifier;
                    properties[C8o.LOCAL_CACHE_DOCUMENT_KEY_RESPONSE] = localCacheResponse.getResponse();
                    properties[C8o.LOCAL_CACHE_DOCUMENT_KEY_RESPONSE_TYPE] = localCacheResponse.getResponseType();
                    if (localCacheResponse.getExpirationDate() > 0) {
                        properties[C8o.LOCAL_CACHE_DOCUMENT_KEY_EXPIRATION_DATE] = localCacheResponse.getExpirationDate();
                    }
                    fullSyncDatabase.getdatabase.put(properties).then((result) => {
                        resolve(result);
                    });
                }
                else {
                    resolve(error);
                }
            });
        });
    }

    public addFullSyncChangeListener(db: string, listener: C8oFullSyncChangeListener) {
        if (db === null || db === "") {
            db = this.c8o.defaultDatabaseName;
        }

        let listeners: Array<Array<C8oFullSyncChangeListener>> = [];
        if (this.fullSyncChangeListeners[db] != null) {
            listeners[0] = this.fullSyncChangeListeners[db];
        }
        else {
            listeners[0] = [];
            this.fullSyncChangeListeners[db] = listeners[0];
            //noinspection UnnecessaryLocalVariableJS
            let evtHandler = this.getOrCreateFullSyncDatabase(db).getdatabase
                .changes({
                    since: "now",
                    live: true,
                    include_docs: true
                }).on("change", function (change) {
                    let changes: Object = {};
                    let docs: Array<Object> = [];
                    // docs["isExternal"] = false;
                    let doc: Object = {};
                    doc["id"] = change["doc"]["_id"];
                    doc["rev"] = change["doc"]["_rev"];
                    doc["isConflict"] = change.doc._conflicts;
                    if (change.source != null) {
                        doc["sourceUrl"] = change.source;
                    }
                    docs.push(doc);
                    changes["changes"] = docs;
                    for (let handler of listeners[0]) {
                        if (handler !== undefined) {
                            handler.onChange(changes);
                        }
                    }

                });
            this.cblChangeListeners[db] = evtHandler;
        }
        listeners[0].push(listener);
    }

    public removeFullSyncChangeListener(db: string, listener: C8oFullSyncChangeListener) {
        if (db === null || db === "") {
            db = this.c8o.defaultDatabaseName;
        }
        if (this.fullSyncChangeListeners[db] != null) {
            let listeners: Array<C8oFullSyncChangeListener> = this.fullSyncChangeListeners[db];
            for (let list in listeners) {
                if (listeners[list] === listener) {
                    delete  listeners[list];
                }
            }
            if (listeners.length === 0 || listeners == null) {
                this.getOrCreateFullSyncDatabase(db).getdatabase.cancel();
                this.cblChangeListeners[db].cancel();
                delete this.fullSyncChangeListeners[db];
                delete this.cblChangeListeners[db];
            }
        }
    }
}