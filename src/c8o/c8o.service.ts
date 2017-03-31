import {Injectable} from "@angular/core";
import              "rxjs/Rx";
import {C8oBase} from "./c8oBase.service";
import {C8oUtils} from "./c8oUtils.service";
import {Http, Response} from "@angular/http";
import {C8oHttpInterface} from "./c8oHttpInterface.service";
import {C8oLogger} from "./c8oLogger.service";
import {C8oFullSync} from "./c8oFullSync.service";
import {C8oLogLevel} from "./c8oLogLevel.service";
import {C8oSettings} from "./c8oSettings.service";

import {C8oExceptionMessage} from "./Exception/c8oExceptionMessage.service";
import {C8oFullSyncCbl} from "./c8oFullSync.service";
import {C8oResponseListener, C8oResponseJsonListener} from "./c8oResponse.service";

import {C8oPromise} from "./c8oPromise.service";
import {C8oCallTask} from "./c8oCallTask.service";
import {C8oException} from "./Exception/c8oException.service";
import {C8oCouchBaseLiteException} from "./Exception/c8oCouchBaseLiteException.service";
import {C8oExceptionListener} from "./Exception/c8oExceptionListener.service";
import {Observable} from "rxjs";
import {C8oFullSyncChangeListener} from "./c8oFullSyncChangeListener.service";
/**
 * Allows to send requests to a Convertigo Server (or Studio), these requests are called c8o calls.<br/>
 * C8o calls are done thanks to a HTTP request or a CouchbaseLite usage.<br/>
 * An instance of C8o is connected to only one Convertigo and can't change it.<br/>
 * To use it, you have to first initialize the C8o instance with the Convertigo endpoint, then use call methods with Convertigo variables as parameter.
 */

@Injectable()
export class C8o extends C8oBase {

    // Log:
    // - VERBOSE (v): methods parameters,
    // - DEBUG (d): methods calls,
    // - INFO (i):
    // - WARN (w):
    // - ERROR (e):

    /*** Regular expression ***/

    /**
     * The regex used to handle the c8o requestable syntax ("&lt;project&gt;.&lt;sequence&gt;" or "&lt;project&gt;.&lt;connector&gt;.&lt;transaction&gt;")
     */
    private static RE_REQUESTABLE = /^([^.]*)\.(?:([^.]+)|(?:([^.]+)\.([^.]+)))$/;


    /**
     * The regex used to get the part of the endpoint before '/projects/...'
     */
    private static RE_ENDPOINT = /^(https?:\/\/([^:]+)(:[0-9]+)?\/?.*?)\/projects\/([^\/]+)$/;

    /*** Engine reserved parameters ***/


    static ENGINE_PARAMETER_PROJECT: string = "__project";
    static ENGINE_PARAMETER_SEQUENCE: string = "__sequence";
    static ENGINE_PARAMETER_CONNECTOR: string = "__connector";
    static ENGINE_PARAMETER_TRANSACTION: string = "__transaction";
    static ENGINE_PARAMETER_ENCODED: string = "__encoded";
    static ENGINE_PARAMETER_DEVICE_UUID: string = "__uuid";
    static ENGINE_PARAMETER_PROGRESS: string = "__progress";
    static ENGINE_PARAMETER_FROM_LIVE: string = "__fromLive";

    /** FULLSYNC parameters **/

    /**
     * Constant to use as a parameter for a Call of "fs://.post" and must be followed by a FS_POLICY_* constant.
     * <pre>{@code
     * c8o.callJson("fs://.post",
     *   C8o.FS_POLICY, C8o.FS_POLICY_MERGE,
     *   "docid", myid,
     *   "mykey", myvalue
     * ).sync();
     * }</pre>
     */
    static FS_POLICY: string = "_use_policy";
    /**
     Use it with "fs://.post" and C8o.FS_POLICY.

     This is the default post policy that don't alter the document before the CouchbaseLite's insertion.
     */
    static FS_POLICY_NONE: string = "none";
    /**
     Use it with "fs://.post" and C8o.FS_POLICY.

     This post policy remove the "_id" and "_rev" of the document before the CouchbaseLite's insertion.
     */
    static FS_POLICY_CREATE: string = "create";
    /**
     Use it with "fs://.post" and C8o.FS_POLICY.

     This post policy inserts the document in CouchbaseLite even if a document with the same "_id" already exists.
     */
    static FS_POLICY_OVERRIDE: string = "override";
    /**
     Use it with "fs://.post" and C8o.FS_POLICY.

     This post policy merge the document with an existing document with the same "_id" before the CouchbaseLite's insertion.
     */
    static FS_POLICY_MERGE: string = "merge";
    /**
     Use it with "fs://.post". Default value is ".".

     This key allow to override the sub key separator in case of document depth modification.
     */
    static FS_SUBKEY_SEPARATOR: string = "_use_subkey_separator";

    /**
     * Use it with "fs://" request as parameter to enable the live request feature.<br/>
     * Must be followed by a string parameter, the 'liveid' that can be use to cancel the live
     * request using c8o.cancelLive(liveid) method.<br/>
     * A live request automatically recall the then or thenUI handler when the database changed.
     */
    public static FS_LIVE :  string = "__live";

    /** Local cache keys **/
    static LOCAL_CACHE_DOCUMENT_KEY_RESPONSE: string = "response";
    static LOCAL_CACHE_DOCUMENT_KEY_RESPONSE_TYPE: string = "responseType";
    static LOCAL_CACHE_DOCUMENT_KEY_EXPIRATION_DATE: string = "expirationDate";

    static LOCAL_CACHE_DATABASE_NAME: string = "c8olocalcache";

    /** Response type **/
    static RESPONSE_TYPE_XML: string = "pxml";
    static RESPONSE_TYPE_JSON: string = "json";

    /* Static configuration */
    static deviceUUID: string = C8oUtils.getNewGUIDString();

    /**
     * Returns the current version of the SDK as "x.y.z".
     *
     * @return Current version of the SDK as "x.y.z".
     */
    static getSdkVersion(): string {
        return "2.0.4";
    }

    /** Network **/

    /**
     * The Convertigo endpoint, syntax: &lt;protocol&gt;://&lt;host&gt;:&lt;port&gt;/&lt;Convertigo web app path&gt;/projects/&lt;project name&gt; (Example: http://127.0.0.1:18080/convertigo/projects/MyProject)
     */
    private _endpoint: string;
    private _endpointConvertigo: string;
    private _endpointIsSecure: boolean;
    private _endpointHost: string;
    private _endpointPort: string;
    private _endpointProject: string;
    private _automaticRemoveSplashsCreen: boolean = true;

    /**
     * Used to run HTTP requests.
     */
    httpInterface: C8oHttpInterface;

    /**
     * Allows to log locally and remotely to the Convertigo server.
     */
    c8oLogger: C8oLogger;

    /**
     * Used to run fullSync requests.
     */
    c8oFullSync: C8oFullSync;

    lives : Array<C8oCallTask> = new Array<C8oCallTask>();
    livesDb : Array<string> = new Array<string>();

    private data: any;
    private _http: Http;
    private _couchUrl: string = null;
    private promiseConstructor: Promise<any>;
    private promiseInit: Promise<any>;


    public get couchUrl(): string {
        return this._couchUrl;
    }

    public set couchUrl(value: string) {
        this._couchUrl = value;
    }

    public get logC8o(): boolean {
        return this._logC8o;
    }

    public set logC8o(value: boolean) {
        this._logC8o = value;
    }

    public get logRemote(): boolean {
        return this._logRemote;
    }

    public set logRemote(value: boolean) {
        this._logRemote = value;
    }

    public get logLevelLocal(): C8oLogLevel {
        return this._logLevelLocal;
    }

    public set logLevelLocal(value: C8oLogLevel) {
        this._logLevelLocal = value;
    }

    public get log(): C8oLogger {
        return this.c8oLogger;
    }

    public toString(): string {
        return "C8o[" + this._endpoint + "]";
    }

    public get endpoint(): string {
        return this._endpoint;
    }

    public set endpoint(value: string) {
        this._endpoint = value;
    }

    public get endpointConvertigo(): string {
        return this._endpointConvertigo;
    }

    public set endpointConvertigo(value: string) {
        this._endpointConvertigo = value;
    }

    public get endpointIsSecure(): boolean {
        return this._endpointIsSecure;
    }

    public set endpointIsSecure(value: boolean) {
        this._endpointIsSecure = value;
    }

    public get endpointHost(): string {
        return this._endpointHost;
    }

    public set endpointHost(value: string) {
        this._endpointHost = value;
    }

    public get endpointPort(): string {
        return this._endpointPort;
    }

    public set endpointPort(value: string) {
        this._endpointPort = value;
    }

    public get endpointProject(): string {
        return this._endpointProject;
    }

    public set endpointProject(value: string) {
        this._endpointProject = value;
    }

    public get deviceUUID(): string {
        return C8o.deviceUUID;
    }

    public get httpPublic(): Http {
        return this._http;
    }

    /**
     * This is the base object representing a Convertigo Server end point. This object should be instanciated
     * when the apps starts and be accessible from any class of the app. Although this is not common , you may have
     * several C8o objects instantiated in your app.
     *
     * @param http
     *
     * @throws C8oException In case of invalid parameter or initialization failure.
     */
    constructor(private http: Http) {
        super();
        this._http = http;
        this.data = null;
    }

    /**
     * This is the base object representing a Convertigo Server end point. This object should be instanciated
     * when the apps starts and be accessible from any class of the app. Although this is not common , you may have
     * several C8o objects instantiated in your app.
     *
     * @param c8oSettings Initialization options.<br/>
     *                    Example: new C8oSettings().setLogRemote(false).setDefaultDatabaseName("sample")
     *
     * @throws C8oException In case of invalid parameter or initialization failure.
     */
    public init(c8oSettings?: C8oSettings) : Promise<any> {
        let nullableEndpoint = true;
        if (c8oSettings != undefined) {
            if (c8oSettings.endpoint != null) {
                nullableEndpoint = false;
            }
        }
        if (nullableEndpoint) {
            this.promiseConstructor = new Promise((resolve) => {
                // if project is running into web browser
                // get the url from window.location
                if (window.location.href.startsWith("http")) {
                    let n = window.location.href.indexOf("/Display");
                    this.endpoint = window.location.href.substring(0, n);
                    resolve();
                }
                // if project is running on device
                // get the uri from env.json
                else if (window.location.href.startsWith("file")) {
                    let uri = window.location.href.replace("app.html", "env.json");
                    this.http.get(uri)
                        .map(res => res.json())
                        .catch((error: Response | any) => {
                            alert("Missing env.json file");
                            let errMsg: string;
                            if (error instanceof Response) {
                                const body = error.json() || "";
                                const err = body.error || JSON.stringify(body);
                                errMsg = `${error.status} - ${error.statusText || ""} ${err}`;
                            } else {
                                errMsg = error.message ? error.message : error.toString();
                            }
                            return Observable.throw(errMsg);
                        })
                        .subscribe(data => {
                            this.data = data;
                            //noinspection TypeScriptUnresolvedVariable
                            let remoteBase = data.remoteBase.toString();
                            let n = remoteBase.indexOf("/_private");
                            this.endpoint = remoteBase.substring(0, n);
                            this._automaticRemoveSplashsCreen = data["splashScreenRemoveMode"] != "manual";
                            resolve();
                        });
                }
            }).then(() => {
                this.extractendpoint();
            });
        }
        else {
            this.promiseConstructor = new Promise((resolve) => {
                this.endpoint = c8oSettings.endpoint;
                this.extractendpoint();
                resolve();
            });
        }

        /**
         * Looking for splashScreen timeOut
         */
        if (this._automaticRemoveSplashsCreen) {
            if (navigator["splashscreen"] != undefined) {
                navigator["splashscreen"].hide();
            }
        }
        this.promiseInit = Promise.all([this.promiseConstructor]).then(() => {
            return new Promise((resolve) => {
                this.copy(c8oSettings);

                this.httpInterface = new C8oHttpInterface(this);
                this.c8oLogger = new C8oLogger(this);

                document.addEventListener("offline", () => {
                    this.c8oLogger.info("Network offline");
                    this.c8oLogger.info("Setting remote logs to false");
                    this.logRemote = false;
                    if (this.logOnFail != null) {
                        this.logOnFail(new C8oException(C8oExceptionMessage.RemoteLogFail()), null);
                    }
                }, false);
                document.addEventListener("online", () => {
                    this.log.info("Network online");
                    if (this._initialLogRemote && this.logRemote == false) {
                        this.logRemote = true;
                        this.log.info("Setting remote logs to true");
                    }
                }, false);

                this.c8oLogger.logMethodCall("C8o Constructor");
                this.c8oFullSync = new C8oFullSyncCbl(this);
                resolve();
            }).then(() => {
                return new Promise((resolve, reject) => {
                    if (window["cblite"] != undefined) {
                        window["cblite"].getURL((err, url) => {
                            if (err) {
                                reject(err);
                            }
                            url = url.replace(new RegExp("/$"), "");
                            this.couchUrl = url;
                            resolve();
                        });
                    }
                    else {
                        resolve();
                    }
                });
            });
        });
        return this.promiseInit;
    }

    private extractendpoint() {
        if (!C8oUtils.isValidUrl(this.endpoint)) {
            return new C8oException(C8oExceptionMessage.illegalArgumentInvalidURL(this.endpoint).toString());
        }
        let matches = C8o.RE_ENDPOINT.exec(this.endpoint.toString());
        if(matches === null){
            throw new C8oException(C8oExceptionMessage.illegalArgumentInvalidEndpoint(this.endpoint.toString()));
        }
        this.endpointConvertigo = matches[0].substring(0, (matches[0].indexOf("/projects")));
        this.endpointIsSecure = matches[1] != null;
        this.endpointHost = matches[2];
        this.endpointPort = matches[3];
        this.endpointProject = matches[4];
    }

    /**
     * Makes a c8o call with c8o requestable out of parameters.<br/>
     * To not use a C8oExceptionListener you can set the parameter to null
     *
     * @param requestable - Contains the Convertigo Sequence or Transaction targeted  (Syntax: "<project>.<sequence>" or "<project>.<connector>.<transaction>")
     * @param parameters - Contains c8o variables
     * @param c8oResponseListener - Define the behavior with the c8o call response
     * @param c8oExceptionListener - Define the behavior when there is an exception during execution
     */
    public call(requestable: string, parameters: Object = null, c8oResponseListener: C8oResponseListener = null, c8oExceptionListener: C8oExceptionListener = null) {
        try {
            if (requestable == null || requestable == undefined) {
                throw new C8oException(C8oExceptionMessage.illegalArgumentNullParameter("resquestable"));
            }
            if (parameters == null || parameters == undefined) {
                parameters = {};
            }
            else {
                parameters = (JSON.parse(JSON.stringify(parameters)));
            }

            let regex = C8o.RE_REQUESTABLE.exec(requestable);
            if (regex[0] == null || regex == undefined) {
                throw new C8oException(C8oExceptionMessage.InvalidArgumentInvalidEndpoint(this._endpoint));
            }
            if (regex[1] != "") {
                parameters[C8o.ENGINE_PARAMETER_PROJECT.toString()] = regex[1];
            }
            if (regex[2] != null) {
                parameters[C8o.ENGINE_PARAMETER_SEQUENCE.toString()] = regex[2];
            }
            else {
                parameters[C8o.ENGINE_PARAMETER_CONNECTOR.toString()] = regex[3];
                parameters[C8o.ENGINE_PARAMETER_TRANSACTION.toString()] = regex[4];
            }
            return this._call(parameters, c8oResponseListener, c8oExceptionListener);
        }
        catch (error) {
            this.handleCallException(c8oExceptionListener, parameters, error);
        }
        finally {
        }
    }

    /**
     * Makes a c8o call with c8o requestable in parameters ('__project' and ('__sequence' or ('__connector' and '__transaction'))).<br/>
     * To not use a C8oExceptionListener you can set the parameter to null.
     *
     * @param parameters - Contains c8o variables
     * @param c8oResponseListener - Define the behavior with the c8o call response
     * @param c8oExceptionListener - Define the behavior when there is an exception during execution
     */
    public _call(parameters: Object = null, c8oResponseListener: C8oResponseListener = null, c8oExceptionListener: C8oExceptionListener = null) {
        // IMPORTANT: all c8o calls have to end here !
        Promise.all([this.promiseInit]).then(() => {
            try {
                this.c8oLogger.logMethodCall("call", parameters, c8oResponseListener, c8oExceptionListener);
                if (parameters == null) {
                    parameters = {};
                }
                else {
                    parameters = (JSON.parse(JSON.stringify(parameters)));
                }
                let task: C8oCallTask = new C8oCallTask(this, parameters, c8oResponseListener, c8oExceptionListener);
                task.run();
            }
            catch (error) {
                this.handleCallException(c8oExceptionListener, parameters, error);
            }
            finally {

            }
        });

    }

    /**
     * Makes a c8o call with c8o requestable out of parameters, expecting a JSON response through a C8oPromise.<br/>
     * The C8oPromise allow to register response handler with .then and .thenUI,
     * error handler with .fail and failUI,
     * replication handler with .progress
     * and synchronous response with .sync().
     *
     * @param requestable - Contains the Convertigo Sequence or Transaction targeted  (Syntax: "<project>.<sequence>" or "<project>.<connector>.<transaction>")
     * @param parameters: Object - Contains c8o variables as key/value pair in the Map
     * @return A C8oPromise that can deliver the JSON response
     */
    public callJsonObject(requestable: string, parameters: Object): C8oPromise<JSON> {
        var promise: C8oPromise<JSON> = new C8oPromise<JSON>(this);
        this.call(requestable, parameters, new C8oResponseJsonListener((response: any, requestParameters: Object) => {
                if (response == null && requestParameters[C8o.ENGINE_PARAMETER_PROGRESS]) {
                    promise.onProgress(requestParameters[C8o.ENGINE_PARAMETER_PROGRESS]);
                }
                else {
                    promise.onResponse(response, requestParameters);
                }
            }),
            new C8oExceptionListener((exception: C8oException, data: Object) => {
                promise.onFailure(exception, data);
            }));
        return promise;
    }

    /**
     * Makes a c8o call with c8o requestable out of parameters, expecting a JSON response through a C8oPromise.<br/>
     * The C8oPromise allow to register response handler with .then and .thenUI,
     * error handler with .fail and failUI,
     * replication handler with .progress
     * and synchronous response with .sync().
     *
     * @param requestable - Contains the Convertigo Sequence or Transaction targeted  (Syntax: "<project>.<sequence>" or "<project>.<connector>.<transaction>")
     * @param parameters - Contains c8o variables as key/value
     * @return A C8oPromise that can deliver the JSON response
     */
    public callJson(requestable: string, ...parameters: any[]): C8oPromise<JSON> {
        return this.callJsonObject(requestable, C8o.toParameters(parameters));
    }

    /**
     * Transforms siblings values as key/value of a Map.
     *
     * @param parameters pair of values to transform a object
     * @return a Map that contains all parameters
     */
    public static toParameters(parameters: any): Object {
        let newParameters: Object = {};
        if (0 != parameters.length % 2) {
            throw new C8oException("Incorrect number of parameters");
        }
        for (let i = 0; i < parameters.length; i += 2) {
            newParameters[parameters[i]] = parameters[i + 1];
        }
        return newParameters;
    }

    /**
     * Calls the exception listener callback if it is not null, else prints the exception stack trace.
     *
     * @param c8oExceptionListener
     * @param requestParameters
     * @param exception
     */
    handleCallException(c8oExceptionListener: C8oExceptionListener, requestParameters: Object, exception: Error) {
        this.c8oLogger.warn("Handle a call exception", exception);
        if(c8oExceptionListener != null){
            c8oExceptionListener.onException(exception, requestParameters);
        }
    }

    /**
     * get an attachment for a given object
     *
     * @param id: string
     * @param attachment_name: string
     *
     * @returns a promise containing a buffer
     */
    public get_attachment(id: string, attachment_name: string): Promise<any> {
        return new Promise((resolve, reject) => {
            let fullsyncdb = (this.c8oFullSync as C8oFullSyncCbl).getOrCreateFullSyncDatabase(this.defaultDatabaseName);
            fullsyncdb.getdatabase.getAttachment(id, attachment_name).then((buffer) => {
                resolve(buffer);
            });
        });
    }

    /**
     * Add a listener to monitor all changes of the 'db'.
     *
     * @param db the name of the fullsync database to monitor. Use the default database for a blank or a null value.
     * @param listener the listener to trigger on change.
     */
    public addFullSyncChangeListener (db : string, listener: C8oFullSyncChangeListener) {
        (this.c8oFullSync as C8oFullSyncCbl).addFullSyncChangeListener(db, listener);
    }

    /**
     * Remove a listener for changes of the 'db'.
     *
     * @param db the name of the fullsync database to monitor. Use the default database for a blank or a null value.
     * @param listener the listener instance to remove.
     */
    public removeFullSyncChangeListener (db : string, listener: C8oFullSyncChangeListener) {
        (this.c8oFullSync as C8oFullSyncCbl).removeFullSyncChangeListener(db, listener);
    }

    addLive(liveid: string, db: string, task: C8oCallTask){
        this.cancelLive(liveid);
        this.lives[liveid] = task;
        this.livesDb[liveid] = db;
        this.addFullSyncChangeListener(db, this.handleFullSyncLive);
    }

    public cancelLive(liveid:string){
        if(this.livesDb[liveid] != undefined){
            let db : string = this.livesDb[liveid];
            delete this.livesDb[liveid];
            if(this.livesDb[db]!= undefined){
                db = null;
            }
            if(db != null){
                this.removeFullSyncChangeListener(db, this.handleFullSyncLive);
            }
        }
        delete this.lives[liveid];
    }

    private handleFullSyncLive : C8oFullSyncChangeListener = new C8oFullSyncChangeListener(
        (changes:Object) =>{
            for(let task in this.lives){
                (this.lives[task] as C8oCallTask).executeFromLive();
            }
        });
    }


export class FullSyncPolicy {

    public static NONE: FullSyncPolicy = new FullSyncPolicy(C8o.FS_POLICY_NONE, (database: any, newProperties: Object) => {
        let documentId = C8oUtils.getParameterStringValue(newProperties, C8oFullSync.FULL_SYNC__ID, false);
        if (documentId == "") {
            documentId = null;
        }
        return new Promise((resolve, reject) => {
            database.post(newProperties).then((createdDocument) => {
                resolve(createdDocument);
            }).catch((error) => {
                reject(new C8oCouchBaseLiteException(C8oExceptionMessage.fullSyncPutProperties(newProperties), error));
            });
        });
    });


    public static CREATE: FullSyncPolicy = new FullSyncPolicy(C8o.FS_POLICY_CREATE, (database: any, newProperties: Object) => {
        try {
            delete newProperties[C8oFullSync.FULL_SYNC__ID];
            delete newProperties[C8oFullSync.FULL_SYNC__REV];
            return new Promise((resolve) => {
                database.post(newProperties).then((createdDocument) => {
                    resolve(createdDocument);
                });
            });
        }
        catch (error) {
            throw new C8oCouchBaseLiteException(C8oExceptionMessage.fullSyncPutProperties(newProperties), error);
        }
    });

    public static OVERRIDE: FullSyncPolicy = new FullSyncPolicy(C8o.FS_POLICY_OVERRIDE, (database: any, newProperties: Object) => {
        try {
            let documentId: string = C8oUtils.getParameterStringValue(newProperties, C8oFullSync.FULL_SYNC__ID, false);
            delete newProperties[C8oFullSync.FULL_SYNC__ID];
            delete newProperties[C8oFullSync.FULL_SYNC__REV];

            if (documentId == null) {
                return new Promise((resolve) => {
                    database.post(newProperties).then((createdDocument) => {
                        resolve(createdDocument);
                    });
                });
            }
            else {
                return new Promise((resolve, reject) => {
                    database.get(documentId).then((doc) => {
                        newProperties["_id"] = documentId;
                        newProperties["_rev"] = doc._rev;
                        return database.put(newProperties);
                    }).then((createdDocument) => {
                        resolve(createdDocument);
                    }).catch((error) => {
                            if (error.status == "404") {
                                newProperties["_id"] = documentId;
                                return database.post(newProperties);
                            }
                            else {
                                reject(error);
                            }
                        }
                    ).then((createdDocument) => {
                        resolve(createdDocument);
                    });
                });
            }
        }
        catch (error) {
            throw new C8oCouchBaseLiteException(C8oExceptionMessage.fullSyncPutProperties(newProperties), error);
        }
    });

    public static MERGE: FullSyncPolicy = new FullSyncPolicy(C8o.FS_POLICY_MERGE, (database: any, newProperties: Object) => {
        try {
            let documentId: string = C8oUtils.getParameterStringValue(newProperties, C8oFullSync.FULL_SYNC__ID, false);
            // delete newProperties[C8oFullSync.FULL_SYNC__ID];
            delete newProperties[C8oFullSync.FULL_SYNC__REV];

            if (documentId == null) {
                return new Promise((resolve, reject) => {

                    database.put(newProperties).then((createdDocument) => {
                        resolve(createdDocument);
                    }).catch((error) => {
                        reject(new C8oCouchBaseLiteException(C8oExceptionMessage.fullSyncPutProperties(newProperties), error));
                    });
                });
            } 
            else {
                return new Promise((resolve, reject) => {
                    database.get(documentId).then((doc) => {
                        C8oFullSyncCbl.mergeProperties(newProperties, doc);
                        database.put(newProperties).then((createdDocument) => {
                            resolve(createdDocument);
                        })
                        .catch((error) => {
                            reject(new C8oCouchBaseLiteException(C8oExceptionMessage.fullSyncPutProperties(newProperties), error));
                        });
                    }).catch((error) => {
                            if(error.status == 404){
                                database.put(newProperties).then((createdDocument) => {
                                    resolve(createdDocument);
                                })
                                .catch((error) => {
                                    reject(new C8oCouchBaseLiteException(C8oExceptionMessage.fullSyncPutProperties(newProperties), error));
                                });
                            }
                            else{
                                reject(new C8oCouchBaseLiteException(C8oExceptionMessage.fullSyncPutProperties(newProperties), error));
                            }
                        });
                });
            }
        }
        catch (error) {
            throw new C8oCouchBaseLiteException(C8oExceptionMessage.fullSyncPutProperties(newProperties), error);
        }
    });

    public value: string;
    public action: (PouchDB, Object) => any;

    constructor(value: string, action: (any, Object) => any) {
        this.value = value;
        this.action = action;
    }

    public static values(): FullSyncPolicy[] {
        let array: FullSyncPolicy[] = [this.NONE, this.CREATE, this.OVERRIDE, this.MERGE];
        return array;
    }

    public static getFullSyncPolicy(value: string): FullSyncPolicy {
        if (value != null) {
            let fullSyncPolicyValues: FullSyncPolicy[] = FullSyncPolicy.values();
            for (let fullSyncPolicy of fullSyncPolicyValues) {
                if (fullSyncPolicy.value == value) {
                    return fullSyncPolicy as FullSyncPolicy;
                }
            }
        }
        return this.NONE;
    }
}


export class FullSyncPostDocumentParameter {
    public static POLICY: FullSyncPostDocumentParameter = new FullSyncPostDocumentParameter(C8o.FS_POLICY);
    public static SUBKEY_SEPARATOR: FullSyncPostDocumentParameter = new FullSyncPostDocumentParameter(C8o.FS_SUBKEY_SEPARATOR);

    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    public static values(): FullSyncPostDocumentParameter[] {
        let array: FullSyncPostDocumentParameter[] = new Array<FullSyncPostDocumentParameter>();
        array.push(this.POLICY, this.SUBKEY_SEPARATOR);
        return array;
    }

}