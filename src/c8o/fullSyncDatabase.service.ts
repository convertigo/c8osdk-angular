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
     * @throws C8oException Failed to get the fullSync database.
     */
    constructor(c8o: C8o, databaseName: string, fullSyncDatabases: string, localSuffix: string) {
        this.c8o = c8o;
        this.c8oFullSyncDatabaseUrl = fullSyncDatabases + databaseName;
        this.databaseName = databaseName + localSuffix;
        try {
            if (c8o.couchUrl != null) {
                this.database = new PouchDB(c8o.couchUrl + "/" + databaseName);
                this.c8o.log.debug("PouchDb lunched on couchbaselite");
            } else {
                this.database = new PouchDB(databaseName);
                this.c8o.log.debug("PouchDb lunched normally");
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
        let obj: Object = {};
        if (parameters["continuous"] != null || parameters["continuous"] != undefined) {
            if (parameters["continuous"] as boolean == true) {
                continuous = true;
                obj = {"live": true};
            }
            else {
                continuous = false;
            }
        }

        if (parameters["cancel"] != null || parameters["cancel"] != undefined) {
            if (parameters["cancel"] as boolean == true) {
                cancel = true;
            }
            else {
                cancel = false;
            }
        }

        let remoteDB = new PouchDB(this.c8oFullSyncDatabaseUrl);
        let rep = this.database.sync(remoteDB, obj);

        if (cancel) {
            if (rep != null) {
                rep.cancel();
            }
        }

        let param = parameters;
        let progress: C8oProgress = new C8oProgress();
        progress.raw = rep;
        progress.taskInfo = "n/a";
        progress.continuous = continuous.valueOf();
        return new Promise(() => {
            rep.on("change", (info) => {
                progress.finished = false;
                if (info.direction == "pull") {
                    progress.pull = true;
                    progress.status = progress.raw.pull.state;
                }
                else if (info.direction == "push") {
                    progress.pull = false;
                    progress.status = progress.raw.push.state;
                }
                progress.total = info.change.docs_read;
                progress.current = info.change.docs_written;
                param[C8o.ENGINE_PARAMETER_PROGRESS] = progress;
                (c8oResponseListener as C8oResponseProgressListener).onProgressResponse(progress, param);

            }).on("complete", (info) => {
                progress.finished = true;
                progress.total = info.push.docs_read + info.pull.docs_read;
                progress.current = info.push.docs_written + info.pull.docs_written;
                progress.status = "complete";
                param[C8o.ENGINE_PARAMETER_PROGRESS] = progress;
                (c8oResponseListener as C8oResponseProgressListener).onProgressResponse(progress, parameters);
            }).on("error", (err) => {
                rep.cancel();
                if (err.message == "Unexpected end of JSON input") {
                    progress.finished = true;
                    progress.status = "Complete";
                    (c8oResponseListener as C8oResponseProgressListener).onProgressResponse(progress, parameters);
                    rep.cancel();

                } else {
                    // reject(err);
                }
            });

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
        if (parameters["continuous"] != null || parameters["continuous"] != undefined) {
            if (parameters["continuous"] as boolean == true) {
                continuous = true;
            }
            else {
                continuous = false;
            }
        }

        if (parameters["cancel"] != null || parameters["cancel"] != undefined) {
            if (parameters["cancel"] as boolean == true) {
                cancel = true;
            }
            else {
                cancel = false;
            }
        }

        let myDB: any;
        myDB = PouchDB;
        let remoteDB = new myDB(this.c8oFullSyncDatabaseUrl);
        let rep = fullSyncReplication.replication = fullSyncReplication.pull ? this.database.replicate.from(remoteDB) : this.database.replicate.to(remoteDB);

        if (cancel) {
            if (rep != null) {
                rep.cancel();
            }
        }


        let progress: C8oProgress = new C8oProgress();
        progress.raw = rep;
        progress.pull = fullSyncReplication.pull;
        progress.continuous = continuous.valueOf();
        return new Promise((resolve, reject) => {
            rep.on("change", (info) => {
                progress.total = info.docs_read;
                progress.current = info.docs_written;
                progress.status = "change";
                parameters[C8o.ENGINE_PARAMETER_PROGRESS] = progress;

                (c8oResponseListener as C8oResponseProgressListener).onProgressResponse(progress, parameters);
            }).on("paused", function (err) {
                progress.finished = true;
                progress.status = "complete";

                (c8oResponseListener as C8oResponseProgressListener).onProgressResponse(progress, parameters);
                resolve();
            }).on("complete", (info) => {
                progress.finished = true;
                progress.total = info.docs_read;
                progress.current = info.docs_written;
                progress.status = "complete";
                // progress.raw =
                (c8oResponseListener as C8oResponseProgressListener).onProgressResponse(progress, parameters);
                resolve();
            }).on("error", (err) => {
                rep.cancel();
                if (err.message == "Unexpected end of JSON input") {
                    progress.finished = true;
                    progress.status = "complete";
                    (c8oResponseListener as C8oResponseProgressListener).onProgressResponse(progress, parameters);
                    rep.cancel();
                    resolve();
                } else {
                    reject(err);
                }
            });

        }).catch((error) => {
            throw error.toString();
        });

    }


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
