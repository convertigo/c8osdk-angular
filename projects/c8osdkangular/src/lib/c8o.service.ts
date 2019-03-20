import {C8oCore, C8oLogger, C8oSettings, C8oException, C8oExceptionMessage, C8oFullSyncCbl, C8oFullSync, C8oFullSyncDatabase} from "../c8osdk-js-core/src/index";
//import {C8oCore, C8oLogger, C8oSettings, C8oException, C8oExceptionMessage, C8oFullSyncCbl, C8oFullSync} from "c8osdkjscore";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {C8oHttpInterface} from "./c8oHttpInterface.service";

@Injectable({
    providedIn: 'root' 
})
export class C8o extends C8oCore {

    private replicationsToRestart : Array<any>;
    constructor(private http: HttpClient) {
        super();
        this._http = http;
        this.data = null;
        this.c8oLogger = new C8oLogger(this, true);
    }

    
    public get sdkVersion(): string {
        return "2.2.10-beta9";//require("../package.json").version;
    }
    public init(c8oSettings?: C8oSettings): Promise<any> {
        let nullableEndpoint = true;
        if (c8oSettings !== undefined) {
            if (c8oSettings.endpoint != null) {
                nullableEndpoint = false;
            }
        }
        if (nullableEndpoint) {
            this.promiseConstructor = new Promise((resolve) => {
                // if project is running into web browser served by convertigo
                // get the url from window.location
                if (window.location.href.startsWith("http") && window.location.href.indexOf("/DisplayObjects") != -1) {
                    let n = window.location.href.indexOf("/DisplayObjects");
                    this.endpoint = window.location.href.substring(0, n);
                    resolve();
                }
                // else if project is running on device or serve by ionic serve
                // get the uri from env.json
                else {
                    let uri ="";
                    if(window.location.href.startsWith("file://")){
                        uri = (window.location.href.substring(0, window.location.href.indexOf("/index.html"))) + "/env.json"
                    }
                    else{
                        uri = window.location.origin + "/env.json";
                    }
                    this.http.get(uri)
                        .subscribe(
                            data => {
                                this.data = data;
                                //noinspection TypeScriptUnresolvedVariable
                                let remoteBase = data["remoteBase"].toString();
                                let n = remoteBase.indexOf("/_private");
                                this.endpoint = remoteBase.substring(0, n);
                                this._automaticRemoveSplashsCreen = data["splashScreenRemoveMode"] !== "manual";
                                resolve();
                            },
                            error=>{
                                alert("Missing env.json file");
                                let errMsg: string;
                                if (error instanceof Error) {
                                    errMsg = error.message;
                                } else {
                                    errMsg = `${error.status} - ${error.statusText || ""} ${error}`;
                                }
                                return Observable.throw(errMsg);
                            }
                        );
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

        this.promiseInit = Promise.all([this.promiseConstructor]).then(() => {
            return new Promise((resolve) => {
                this.copy(c8oSettings);

                this.httpInterface = new C8oHttpInterface(this);
                this.c8oLogger.affect_val(this, false);
                this.c8oLogger.logRemoteInit();

                window.addEventListener("offline", () => {
                    this.logRemote = false;
                    if (this.logOnFail != null) {
                        this.logOnFail(new C8oException(C8oExceptionMessage.RemoteLogFail()), null);
                    }
                    this.c8oLogger.info("[C8o] Network offline detected");
                    this.c8oLogger.info("[C8o] Setting remote logs to false");
                    (this.c8oFullSync as C8oFullSyncCbl).cancelActiveReplications();



                }, false);
                window.addEventListener("online", () => {
                    (this.httpInterface as C8oHttpInterface).firstcheckSessionR  = false;
                    if (this._initialLogRemote && !this.logRemote) {
                        this.logRemote = true;
                        this.log.info("[C8o][online] Notwork online Setting remote logs to true");
                    }
                    this.log.info("[C8o][online] We will check for an existing session");
                    (this.httpInterface as C8oHttpInterface).checkSession()
                    .retry(1)
                    .subscribe(
                        response => {
                            if(!response["authenticated"]){
                                this.log.debug("[C8o][online][checkSession] Session has been dropped");
                                this.subscriber_session.next(true);
                            }
                            else{
                                this.log.debug("[C8o][online][checkSession] Session still Alive we will restart replications");
                                (this.c8oFullSync as C8oFullSyncCbl).restartStoppedReplications();
                            }
                        },
                        error => {
                            this.log.error("[C8o][online][checkSession][online] error happened pooling session", error);
                        }
                    );
                    this.log.info("Network online");
                }, false);

                this.c8oLogger.logMethodCall("C8o Constructor");
                this.c8oFullSync = new C8oFullSyncCbl(this);
                resolve();
            });
        });
        return this.promiseInit;
    }

    /**
     * This should be called OnPlatform Ready to remove splashscreen if necessary
     *
     */
    public finalizeInit(): Promise<any>{
        if(this.promiseFinInit != null){
            return this.promiseFinInit;
        }
        else{
            this.promiseFinInit = new Promise((resolve)=>{
                Promise.all([this.promiseInit]).then(() => {
                    /**
                     * Looking for splashScreen timeOut
                     */
                    if (this._automaticRemoveSplashsCreen) {
                        if (navigator["splashscreen"] !== undefined) {
                            navigator["splashscreen"].hide();
                        }
                    }
                    /**
                     * Looking for wkWebView
                     */
                    if (window["wkWebView"] != undefined) {
                        window["wkWebView"].injectCookie(this.endpointConvertigo)
                        this.log.debug("[C8O] wkWebView detected: We will inject Cookie for endpoint: "+ this.endpointConvertigo);
                    }
                    /**
                     * Looking for cblite
                     */
                    if (window["cblite"] != undefined) {
                        window["cblite"].getURL((err, url) => {
                            if (err) {
                                resolve();
                            }
                            else{
                                url = url.replace(new RegExp("/$"), "");
                                this.couchUrl = url;
                                resolve();
                            }
                        });
                    }
                    else {
                        resolve();
                    }
                });
            });
            return this.promiseFinInit;
        }
    }
}