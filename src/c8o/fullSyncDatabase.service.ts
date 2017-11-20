import {C8oResponseProgressListener, C8oResponseListener} from "./c8oResponse.service";
import {C8o} from "./c8o.service";
import {C8oProgress} from "./c8oProgress.service";
import {FullSyncReplication} from "./fullSyncreplication.service";

import * as PouchDB from "pouchdb-browser";
/**
 * Created by charlesg on 10/01/2017.
 */
export class C8oFullSyncDatabase {

    /**
     * Used to log.
     */
    private c8o: C8o;

    /** TAG Attributes **/

    /**
     * The fullSync database name.
     */
    private databaseName: string;
    private c8oFullSyncDatabaseUrl: string;
    /**
     * The fullSync Database instance.
     */
    private database = null;
    /**
     * Used to make pull replication (uploads changes from the local database to the remote one).
     */
    private pullFullSyncReplication: FullSyncReplication = new FullSyncReplication(true);
    /**
     * Used to make push replication (downloads changes from the remote database to the local one).
     */
    private pushFullSyncReplication: FullSyncReplication = new FullSyncReplication(false);

    /**
     * Creates a fullSync database with the specified name and its location.
     *
     * @param c8o
     * @param databaseName
     * @param fullSyncDatabases
     * @param localSuffix
     * @throws C8oException Failed to get the fullSync database.
     */
    constructor(c8o: C8o, databaseName: string, fullSyncDatabases: string, localSuffix: string) {
        this.c8o = c8o;
        this.c8oFullSyncDatabaseUrl = fullSyncDatabases + databaseName;
        this.databaseName = databaseName + localSuffix;
        try {
            if (c8o.couchUrl != null) {
                if(window["device"]["platform"] == "iOS"){
                    this.database = new PouchDB(databaseName);
                    this.c8o.log.debug("PouchDb lunched normally for iOS");
                }
                else{
                    this.database = new PouchDB(c8o.couchUrl + "/" + databaseName);
                    this.c8o.log.debug("PouchDb launched on couchbaselite");
                }
            } else {
                this.database = new PouchDB(databaseName);
                this.c8o.log.debug("PouchDb launched normally");
            }

        }
        catch (error) {
            throw error;
        }
    }

    /**
     * Start pull and push replications.
     * @returns Promise<any>
     */
    public startAllReplications(parameters: Object, c8oResponseListener: C8oResponseListener): Promise<any> {
        /*this.startPullReplication(parameters, c8oResponseListener);
         return this.startPushReplication(parameters, c8oResponseListener);*/
        return this.startSync(parameters, c8oResponseListener);
    }

    /**
     * Start pull replication.
     * @returns Promise<any>
     */
    public startPullReplication(parameters: Object, c8oResponseListener: C8oResponseListener): Promise<any> {
        return this.startReplication(this.pullFullSyncReplication, parameters, c8oResponseListener);
    }

    /**
     * Start push replication.
     * @returns Promise<any>
     */
    public startPushReplication(parameters: Object, c8oResponseListener: C8oResponseListener): Promise<any> {
        return this.startReplication(this.pushFullSyncReplication, parameters, c8oResponseListener);
    }

    private startSync(parameters: Object, c8oResponseListener: C8oResponseListener): Promise<any> {
        let continuous: boolean = false;
        let cancel: boolean = false;
        let parametersObj: Object = {};

        //check continuous flag
        if (parameters["continuous"] != null) {
            if (parameters["continuous"] as boolean === true) {
                continuous = true;
            }
            else {
                continuous = false;
            }
        }
        //check cancel flag
        if (parameters["cancel"] != null) {
            //noinspection RedundantIfStatementJS
            if (parameters["cancel"] as boolean === true) {
                cancel = true;
            }
            else {
                cancel = false;
            }
        }
        //check parameters to throw to pouchDB
        if (parameters["retry"] != null) {
            parametersObj["retry"] = parameters["retry"];
        }
        if (parameters["filter"] != null) {
            parametersObj["filter"] = parameters["filter"];
        }
        if (parameters["doc_ids"] != null) {
            parametersObj["doc_ids"] = parameters["doc_ids"];
        }
        if (parameters["query_params"] != null) {
            parametersObj["query_params"] = parameters["query_params"];
        }
        if (parameters["view"] != null) {
            parametersObj["view"] = parameters["view"];
        }
        if (parameters["since"] != null) {
            parametersObj["since"] = parameters["since"];
        }
        if (parameters["heartbeat"] != null) {
            parametersObj["heartbeat"] = parameters["heartbeat"];
        }
        if (parameters["timeout"] != null) {
            parametersObj["timeout"] = parameters["timeout"];
        }
        if (parameters["batch_size"] != null) {
            parametersObj["batch_size"] = parameters["batch_size"];
        }
        if (parameters["batches_limit"] != null) {
            parametersObj["batches_limit"] = parameters["batches_limit"];
        }
        if (parameters["back_off_function"] != null) {
            parametersObj["back_off_function"] = parameters["back_off_function"];
        }
        if (parameters["checkpoint"] != null) {
            parametersObj["checkpoint"] = parameters["checkpoint"];
        }
        if (parameters["seq_interval"] != null) {
            parametersObj["seq_interval"] = parameters["seq_interval"];
        }

        let remoteDB = new PouchDB(this.c8oFullSyncDatabaseUrl);
        let rep = this.database.sync(remoteDB, parametersObj);
        let param = parameters;
        let progress: C8oProgress = new C8oProgress();
        progress.raw = rep;
        progress.continuous = false;

        return new Promise((resolve, reject) => {
            rep.on("change", (info) => {
                progress.finished = false;
                if (info.direction === "pull") {
                    progress.pull = true;
                    progress.status = rep.pull.state;
                    progress.finished = rep.pull.state !== "active";
                }
                else if (info.direction === "push") {
                    progress.pull = false;
                    progress.status = rep.push.state;
                    progress.finished = rep.push.state !== "active";
                }
                progress.total = info.change.docs_read;
                progress.current = info.change.docs_written;
                param[C8o.ENGINE_PARAMETER_PROGRESS] = progress;
                (c8oResponseListener as C8oResponseProgressListener).onProgressResponse(progress, param);

            }).on("complete", (info) => {
                progress.finished = true;
                progress.pull = false;
                progress.total = info.push.docs_read;
                progress.current = info.push.docs_written;
                progress.status = info.status;
                progress.finished = true;
                param[C8o.ENGINE_PARAMETER_PROGRESS] = progress;
                (c8oResponseListener as C8oResponseProgressListener).onProgressResponse(progress, param);
                progress.pull = true;
                progress.total = info.pull.docs_read;
                progress.current = info.pull.docs_written;
                (c8oResponseListener as C8oResponseProgressListener).onProgressResponse(progress, param);
                rep.cancel();

                if (continuous) {
                    parametersObj["live"] = true;
                    rep = this.database.sync(remoteDB, parametersObj);
                    progress.continuous = true;
                    progress.raw = rep;
                    progress.taskInfo = "n/a";
                    progress.pull = true;
                    progress.status = "live";
                    progress.finished = false;
                    progress.pull = true;
                    progress.total = 0;
                    progress.current = 0;
                    (c8oResponseListener as C8oResponseProgressListener).onProgressResponse(progress, param);
                    progress.pull = false;
                    (c8oResponseListener as C8oResponseProgressListener).onProgressResponse(progress, param);
                    rep.on("change", (info) => {
                        progress.finished = false;
                        if (info.direction === "pull") {
                            progress.pull = true;
                            progress.status = rep.pull.state;
                        }
                        else if (info.direction === "push") {
                            progress.pull = false;
                            progress.status = rep.push.state;
                        }
                        progress.total = info.change.docs_read;
                        progress.current = info.change.docs_written;
                        param[C8o.ENGINE_PARAMETER_PROGRESS] = progress;
                        (c8oResponseListener as C8oResponseProgressListener).onProgressResponse(progress, param);
                    })
                        .on("paused", function () {
                            progress.finished = true;
                            (c8oResponseListener as C8oResponseProgressListener).onProgressResponse(progress, param);
                            if (progress.total === 0 && progress.current === 0) {
                                progress.pull = !progress.pull;
                                (c8oResponseListener as C8oResponseProgressListener).onProgressResponse(progress, param);
                            }
                        })
                        .on("error", (err) => {
                            if (err.message === "Unexpected end of JSON input") {
                                progress.finished = true;
                                progress.status = "live";
                                (c8oResponseListener as C8oResponseProgressListener).onProgressResponse(progress, parameters);
                            } else {
                                rep.cancel();
                                if(err.code === "ETIMEDOUT" && err.status === 0){
                                    if(parameters["force_retry"] == true){
                                        this.c8o.log.warn("C80=>FullSyncDatabase: Timeout handle during fullsync replication (fs://.sync) \n Forcing Restarting replication");
                                        this.database.sync(remoteDB, {timeout: 600000, retry: true});
                                    }
                                    else{
                                        this.c8o.log.warn("C80=>FullSyncDatabase: Timeout handle during fullsync replication (fs://.sync) \n Restarting automatically replication");
                                    }
                                }
                                else if(err.name === "unknown" && err.status === 0 && err.message === "getCheckpoint rejected with "){
                                    reject("NO_NETWORK");
                                }
                                else{
                                    reject(err);
                                }
                            }
                        });

                }
            }).on("error", (err) => {
                rep.cancel();
                if (err.message === "Unexpected end of JSON input") {
                    progress.finished = true;
                    progress.status = "Complete";
                    (c8oResponseListener as C8oResponseProgressListener).onProgressResponse(progress, parameters);
                    rep.cancel();

                }
                else if(err.code === "ETIMEDOUT" && err.status === 0){
                    if(parameters["force_retry"] == true){
                        this.c8o.log.warn("C80=>FullSyncDatabase: Timeout handle during fullsync replication (fs://.sync) \n Forcing Restarting replication");
                        this.database.sync(remoteDB, {timeout: 600000, retry: true});
                    }
                    else{
                        this.c8o.log.warn("C80=>FullSyncDatabase: Timeout handle during fullsync replication (fs://.sync) \n Restarting automatically replication");
                    }
                }
                else if(err.name === "unknown" && err.status === 0 && err.message === "getCheckpoint rejected with "){
                    reject("NO_NETWORK");
                }
                else{
                    reject(err);
                }
            });

            if (cancel) {
                if (rep != null) {
                    rep.cancel();
                    progress.finished = true;
                    if (c8oResponseListener != null && c8oResponseListener instanceof C8oResponseProgressListener) {
                        c8oResponseListener.onProgressResponse(progress, null);
                    }
                }
            }
        }).catch((error) => {
            throw error.toString();
        });
    }

    /**
     * Starts a replication taking into account parameters.<br/>
     * This action does not directly return something but setup a callback raised when the replication raises change events.
     *
     * @param fullSyncReplication
     * @param c8oResponseListener
     * @param parameters
     */
    private startReplication(fullSyncReplication: FullSyncReplication, parameters: Object, c8oResponseListener: C8oResponseListener): Promise<any> {
        let continuous: boolean = false;
        let cancel: boolean = false;
        let parametersObj: Object = {};

        //check continuous flag
        if (parameters["continuous"] != null) {
            if (parameters["continuous"] as boolean === true) {
                continuous = true;
            }
            else {
                continuous = false;
            }
        }
        //check cancel flag
        if (parameters["cancel"] != null) {
            //noinspection RedundantIfStatementJS
            if (parameters["cancel"] as boolean === true) {
                cancel = true;
            }
            else {
                cancel = false;
            }
        }
        //check parameters to throw to pouchDB
        if (parameters["retry"] != null) {
            parametersObj["retry"] = parameters["retry"];
        }
        if (parameters["filter"] != null) {
            parametersObj["filter"] = parameters["filter"];
        }
        if (parameters["doc_ids"] != null) {
            parametersObj["doc_ids"] = parameters["doc_ids"];
        }
        if (parameters["query_params"] != null) {
            parametersObj["query_params"] = parameters["query_params"];
        }
        if (parameters["view"] != null) {
            parametersObj["view"] = parameters["view"];
        }
        if (parameters["since"] != null) {
            parametersObj["since"] = parameters["since"];
        }
        if (parameters["heartbeat"] != null) {
            parametersObj["heartbeat"] = parameters["heartbeat"];
        }
        if (parameters["timeout"] != null) {
            parametersObj["timeout"] = parameters["timeout"];
        }
        if (parameters["batch_size"] != null) {
            parametersObj["batch_size"] = parameters["batch_size"];
        }
        if (parameters["batches_limit"] != null) {
            parametersObj["batches_limit"] = parameters["batches_limit"];
        }
        if (parameters["back_off_function"] != null) {
            parametersObj["back_off_function"] = parameters["back_off_function"];
        }
        if (parameters["checkpoint"] != null) {
            parametersObj["checkpoint"] = parameters["checkpoint"];
        }
        if (parameters["seq_interval"] != null) {
            parametersObj["seq_interval"] = parameters["seq_interval"];
        }

        let myDB: any;
        myDB = PouchDB;
        let remoteDB = new myDB(this.c8oFullSyncDatabaseUrl);
        let rep = fullSyncReplication.replication = fullSyncReplication.pull ? this.database.replicate.from(remoteDB, parametersObj) : this.database.replicate.to(remoteDB, parametersObj);

        let progress: C8oProgress = new C8oProgress();
        progress.raw = rep;
        progress.pull = fullSyncReplication.pull;
        progress.continuous = false;
        return new Promise((resolve, reject) => {

            rep.on("change", (info) => {
                progress.total = info.docs_read;
                progress.current = info.docs_written;
                progress.status = "change";
                parameters[C8o.ENGINE_PARAMETER_PROGRESS] = progress;
                (c8oResponseListener as C8oResponseProgressListener).onProgressResponse(progress, parameters);
            }).on("complete", (info) => {
                progress.finished = true;
                progress.total = info.docs_read;
                progress.current = info.docs_written;
                progress.status = "complete";
                parameters[C8o.ENGINE_PARAMETER_PROGRESS] = progress;
                (c8oResponseListener as C8oResponseProgressListener).onProgressResponse(progress, parameters);
                rep.cancel();
                if (continuous) {
                    parametersObj["live"] = true;
                    rep = this.database.sync(remoteDB, parametersObj);
                    progress.continuous = true;
                    progress.raw = rep;
                    progress.taskInfo = "n/a";
                    rep.on("change", (info) => {
                        progress.finished = false;
                        progress.total = info.docs_read;
                        progress.current = info.docs_written;
                        progress.status = "change";
                        parameters[C8o.ENGINE_PARAMETER_PROGRESS] = progress;
                        (c8oResponseListener as C8oResponseProgressListener).onProgressResponse(progress, parameters);
                    })
                        .on("error", (err) => {
                            if (err.message === "Unexpected end of JSON input") {
                                progress.finished = true;
                                progress.status = "live";
                                (c8oResponseListener as C8oResponseProgressListener).onProgressResponse(progress, parameters);


                            } else {
                                rep.cancel();
                                if(err.code === "ETIMEDOUT" && err.status === 0){
                                    reject("TIMEOUT");
                                }
                                else if(err.name === "unknown" && err.status === 0 && err.message === "getCheckpoint rejected with "){
                                    reject("NO_NETWORK");
                                }
                                else{
                                    reject(err);
                                }
                            }
                        });
                }
            }).on("error", (err) => {
                if (err.message === "Unexpected end of JSON input") {
                    progress.finished = true;
                    progress.status = "complete";
                    parameters[C8o.ENGINE_PARAMETER_PROGRESS] = progress;
                    (c8oResponseListener as C8oResponseProgressListener).onProgressResponse(progress, parameters);
                    rep.cancel();
                }
                else if(err.code === "ETIMEDOUT" && err.status === 0){
                    reject("TIMEOUT");
                }
                else if(err.name === "unknown" && err.status === 0 && err.message === "getCheckpoint rejected with "){
                    reject("NO_NETWORK");
                }
                else{
                    reject(err);
                }
            });

            if (cancel) {
                if (rep != null) {
                    rep.cancel();
                    progress.finished = true;
                    if (c8oResponseListener != null && c8oResponseListener instanceof C8oResponseProgressListener) {
                        c8oResponseListener.onProgressResponse(progress, null);
                    }
                }
            }

        }).catch((error) => {
            throw error.toString();
        });

    }


    //noinspection JSUnusedGlobalSymbols
    public get getdatabseName(): string {
        return this.databaseName;
    }

    public get getdatabase(): any {
        return this.database;
    }

    deleteDB(): Promise<any> {
        return new Promise((resolve, reject) => {
            if (this.database != null) {
                this.database.destroy().then((response) => {
                    this.database = null;
                    resolve(response);
                }).catch((error) => {
                    this.c8o.log.debug("Failed to close DB: ", error.message);
                    reject(error);
                });
            }
        });
    }
}