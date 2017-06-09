import {Injectable} from "@angular/core";
import {C8oLogLevel} from "./c8oLogLevel.service";
import {C8o} from "./c8o.service";
import {C8oException} from "./Exception/c8oException.service";
import {C8oExceptionMessage} from "./Exception/c8oExceptionMessage.service";
import {Queue} from "./c8oUtils.service";
@Injectable()
export class C8oLogger {

    // *** Constants ***//
    // private static LOG_TAG: string = "c8o";
    private static LOG_INTERNAL_PREFIX: string = "[c8o] ";

    static REMOTE_LOG_LIMIT: number = 100;

    private static JSON_KEY_REMOTE_LOG_LEVEL: string = "remoteLogLevel";
    private static JSON_KEY_TIME: string = "time";
    private static JSON_KEY_LEVEL: string = "level";
    private static JSON_KEY_MESSAGE: string = "msg";
    private static JSON_KEY_LOGS: string = "logs";
    private static JSON_KEY_ENV: string = "env";

    /** Attributes */

    private remoteLogUrl: string;
    private remoteLogs: Queue<JSON>;
    //noinspection JSMismatchedCollectionQueryUpdate
    private alreadyRemoteLogging: boolean[];
    private remoteLogLevel: C8oLogLevel;
    private uidRemoteLogs: string;
    private startTimeRemoteLog: number;
    public initDone: boolean = false;
    private pending_remoteLogs: Queue<JSON>;
    private pending_remoteLogsLevel: Queue<C8oLogLevel>;

    private c8o: C8o;

    private env: string;

    constructor(c8o: C8o, first: boolean) {
        this.affect_val(c8o, first);
    }
    public affect_val(c8o: C8o, first:boolean){
        if(first){
            this.c8o = c8o;
            this.remoteLogUrl= "";
            this.remoteLogs = new Queue<JSON>();
            this.pending_remoteLogsLevel = new Queue<C8oLogLevel>();
            this.pending_remoteLogs = new Queue<JSON>();
            this.alreadyRemoteLogging = [];
            this.alreadyRemoteLogging.push(false);
            this.remoteLogLevel = C8oLogLevel.TRACE;
            this.startTimeRemoteLog = new Date().getTime();
            this.uidRemoteLogs = Math.round((new Date().getTime() * Math.random())).toString(36);
            let obj = {};
            obj["uid"] = this.uidRemoteLogs.toUpperCase();
            obj["uuid"] = C8o.deviceUUID.toUpperCase();
            obj["project"] = ""
            this.env = JSON.stringify(obj);
        }
        else{
            this.c8o = c8o;

            this.remoteLogUrl = c8o.endpointConvertigo + "/admin/services/logs.Add";
            this.remoteLogs = new Queue<JSON>();
            this.alreadyRemoteLogging = [];
            this.alreadyRemoteLogging.push(false);

            this.remoteLogLevel = C8oLogLevel.TRACE;
            this.startTimeRemoteLog = new Date().getTime();
            this.uidRemoteLogs = Math.round((new Date().getTime() * Math.random())).toString(36);
            let obj = {};
            obj["uid"] = this.uidRemoteLogs.toUpperCase();
            obj["uuid"] = C8o.deviceUUID.toUpperCase();
            obj["project"] = encodeURIComponent(c8o.endpointProject.toString());
            this.env = JSON.stringify(obj);
        }

    }

    private isLoggableRemote(logLevel: C8oLogLevel): boolean {
        return this.c8o.logRemote && logLevel != null && C8oLogLevel.TRACE.priority <= this.remoteLogLevel.priority && this.remoteLogLevel.priority <= logLevel.priority;
    }

    private isLoggableConsole(logLevel: C8oLogLevel): boolean {
        return logLevel != null && C8oLogLevel.TRACE.priority <= this.c8o.logLevelLocal.priority && this.c8o.logLevelLocal.priority <= logLevel.priority;
    }

    public canLog(logLevel: C8oLogLevel): boolean {
        return this.isLoggableConsole(logLevel) || this.isLoggableRemote(logLevel);
    }

    //noinspection JSUnusedGlobalSymbols
    public get isFatal(): boolean {
        return this.canLog(C8oLogLevel.FATAL);
    }

    //noinspection JSUnusedGlobalSymbols
    public get isError(): boolean {
        return this.canLog(C8oLogLevel.ERROR);
    }

    //noinspection JSUnusedGlobalSymbols
    public get isWarn(): boolean {
        return this.canLog(C8oLogLevel.WARN);
    }

    //noinspection JSUnusedGlobalSymbols
    public get isInfo(): boolean {
        return this.canLog(C8oLogLevel.INFO);
    }

    public get isDebug(): boolean {
        return this.canLog(C8oLogLevel.DEBUG);
    }

    public get isTrace(): boolean {
        return this.canLog(C8oLogLevel.TRACE);
    }

    private log(logLevel: C8oLogLevel, message: string, exception: Error) {
        let isLogConsole: boolean = this.isLoggableConsole(logLevel);
        let isLogRemote: boolean = this.isLoggableRemote(logLevel);

        if (isLogConsole || isLogRemote) {
            if (exception != null) {
                message += "\n" + exception.toString();
            }

            let time: string = (((new Date().getTime().valueOf()) - (this.startTimeRemoteLog)) / 1000).toString();
            if(!this.initDone){
                let obj = {};
                obj[(C8oLogger.JSON_KEY_TIME.valueOf())] = time;
                obj[(C8oLogger.JSON_KEY_LEVEL.valueOf())] = logLevel.name;
                obj[(C8oLogger.JSON_KEY_MESSAGE.valueOf())] = message.toString();
                let objJson: JSON = <JSON>obj;
                this.pending_remoteLogs.push(objJson);
                this.pending_remoteLogsLevel.push(logLevel)
            }
            else{
                if (isLogRemote) {
                    let obj = {};
                    obj[(C8oLogger.JSON_KEY_TIME.valueOf())] = time;
                    obj[(C8oLogger.JSON_KEY_LEVEL.valueOf())] = logLevel.name;
                    obj[(C8oLogger.JSON_KEY_MESSAGE.valueOf())] = message.toString();
                    let objJson: JSON = <JSON>obj;
                    this.remoteLogs.push(objJson);
                    this.logRemote();
                }
                if (isLogConsole) {
                    console.log("(" + time + ") [" + logLevel.name + "] " + message);
                }
            }


        }
    }

    public fatal(message: string, exceptions: Error = null) {
        this.log(C8oLogLevel.FATAL, message, exceptions);
    }

    public error(message: string, exceptions: Error = null) {
        this.log(C8oLogLevel.ERROR, message, exceptions);
    }

    public warn(message: string, exceptions: Error = null) {
        this.log(C8oLogLevel.WARN, message, exceptions);
    }

    public info(message: string, exceptions: Error = null) {
        this.log(C8oLogLevel.INFO, message, exceptions);
    }

    public debug(message: string, exceptions: Error = null) {
        this.log(C8oLogLevel.DEBUG, message, exceptions);
    }

    public trace(message: string, exceptions: Error = null) {
        this.log(C8oLogLevel.TRACE, message, exceptions);
    }

    private _log(logLevel: C8oLogLevel, messages: string, exceptions: Error = null) {
        if (this.c8o.logC8o) {
            this.log(logLevel, C8oLogger.LOG_INTERNAL_PREFIX.toString() + messages.toString(), exceptions);
        }
    }

    /*private _fatal(message: string, exceptions: Error = null) {
     this._log(C8oLogLevel.FATAL, message, exceptions);
     }

     private _error(message: string, exceptions: Error = null) {
     this._log(C8oLogLevel.ERROR, message, exceptions);
     }

     private _warn(message: string, exceptions: Error = null) {
     this._log(C8oLogLevel.WARN, message, exceptions);
     }

     private _info(message: string, exceptions: Error = null) {
     this._log(C8oLogLevel.INFO, message, exceptions);
     }*/

    _debug(message: string, exceptions: Error = null) {
        this._log(C8oLogLevel.DEBUG, message, exceptions);
    }

    private _trace(message: string, exceptions: Error = null) {
        this._log(C8oLogLevel.TRACE, message, exceptions);
    }

    logRemoteInit(){
        this.initDone = true;

        let count: number = 0;
        let listSize: number = this.pending_remoteLogs.count();
        let logsArray = new Array<any>();

        while (count < listSize && count < C8oLogger.REMOTE_LOG_LIMIT) {
            let logLvl = this.pending_remoteLogsLevel.pop();
            let mvar = this.pending_remoteLogs.pop();

            if(this.isLoggableConsole(logLvl)){
                console.log("(" + mvar["time"] + ") [" + logLvl.name + "] " + mvar["msg"]);
            }
            if(this.isLoggableRemote(logLvl)){
                logsArray.push(mvar);
                count += 1;
            }

        }
        //noinspection JSUnusedAssignment
        let canLog: boolean = false;
        canLog = logsArray.length > 0;
        if (canLog) {
            this.alreadyRemoteLogging[0] = true;
        }
        let parameters: Object = {};
        parameters[C8oLogger.JSON_KEY_LOGS.valueOf()] = JSON.stringify(logsArray);
        parameters[C8o.ENGINE_PARAMETER_DEVICE_UUID] = this.c8o.deviceUUID;
        parameters[C8oLogger.JSON_KEY_ENV] = this.env;

        this.c8o.httpInterface.handleRequest(this.remoteLogUrl, parameters)
            .then((response) => {
                if (response !== undefined) {
                    if (response["error"] !== undefined) {
                        this.c8o.logRemote = false;
                        if (this.c8o.logOnFail != null) {
                            this.c8o.logOnFail(new C8oException(C8oExceptionMessage.RemoteLogFail(), response["error"]), null);
                        }
                    }
                }
                let logLevelResponse = response[C8oLogger.JSON_KEY_REMOTE_LOG_LEVEL.toString()];
                if (logLevelResponse != null) {
                    let logLevelResponseStr: string = logLevelResponse.toString();
                    let c8oLogLevel = C8oLogLevel.getC8oLogLevel(logLevelResponseStr);
                    if (c8oLogLevel != null) {
                        this.remoteLogLevel = c8oLogLevel;
                    }
                    this.alreadyRemoteLogging[0] = false;
                    this.logRemote();
                }
            })
            .catch((error) => {
                this.c8o.logRemote = false;
                if (this.c8o.logOnFail != null) {
                    this.c8o.logOnFail(new C8oException(C8oExceptionMessage.RemoteLogFail(), error), null);
                }
            });
    }

    logRemote() {

        //noinspection JSUnusedAssignment
        let canLog: boolean = false;
        canLog = this.remoteLogs.count() > 0;
        if (canLog) {
            this.alreadyRemoteLogging[0] = true;
        }

        if (canLog) {
            // We're using Angular Http provider to request the data,
            // then on the response it'll map the JSON data to a parsed JS object.
            // Next we process the data and resolve the promise with the new data.
            // "/admin/services/logs.Add";
            let count: number = 0;
            let listSize: number = <number>this.remoteLogs.count();
            let logsArray = [];
            while (count < listSize && count < C8oLogger.REMOTE_LOG_LIMIT) {
                logsArray.push(this.remoteLogs.pop());
                count += 1;
            }
            let parameters: Object = {};
            parameters[C8oLogger.JSON_KEY_LOGS.valueOf()] = JSON.stringify(logsArray);
            parameters[C8o.ENGINE_PARAMETER_DEVICE_UUID] = this.c8o.deviceUUID;
            parameters[C8oLogger.JSON_KEY_ENV] = this.env;

            this.c8o.httpInterface.handleRequest(this.remoteLogUrl, parameters)
                .then((response) => {
                    if (response !== undefined) {
                        if (response["error"] !== undefined) {
                            this.c8o.logRemote = false;
                            if (this.c8o.logOnFail != null) {
                                this.c8o.logOnFail(new C8oException(C8oExceptionMessage.RemoteLogFail(), response["error"]), null);
                            }
                        }
                    }
                    let logLevelResponse = response[C8oLogger.JSON_KEY_REMOTE_LOG_LEVEL.toString()];
                    if (logLevelResponse != null) {
                        let logLevelResponseStr: string = logLevelResponse.toString();
                        let c8oLogLevel = C8oLogLevel.getC8oLogLevel(logLevelResponseStr);
                        if (c8oLogLevel != null) {
                            this.remoteLogLevel = c8oLogLevel;
                        }
                        this.alreadyRemoteLogging[0] = false;
                        this.logRemote();
                    }
                })
                .catch((error) => {
                    this.c8o.logRemote = false;
                    if (this.c8o.logOnFail != null) {
                        this.c8o.logOnFail(new C8oException(C8oExceptionMessage.RemoteLogFail(), error), null);
                    }
                });
        }
    }
    logMethodCall(methodName: string, ...parameters: any[]) {
        if (this.c8o.logC8o && this.isDebug) {
            let methodCallLogMessage: string = "Method call: " + methodName;
            if (parameters == null || Object.keys(parameters).length === 0) {
                this._debug(methodCallLogMessage);
            }
            if (this.isTrace) {
                methodCallLogMessage += ", Parameters: [";
                for (let param of parameters) {
                    let paramStr = "null";
                    if (parameters != null) {
                        paramStr = JSON.stringify(param);
                    }
                    methodCallLogMessage += "\n" + paramStr + ", ";
                }
                // Remove the last character
                methodCallLogMessage = methodCallLogMessage.substring(0, methodCallLogMessage.length - 2) + "]";

                this._trace(methodCallLogMessage);
            }
            else {
                this._debug(methodCallLogMessage);
            }
        }
    }

    logC8oCall(url: string, parameters: any) {
        if (this.c8o.logC8o && this.isDebug) {
            let c8oCallLogMessage: string = "C8o call: " + url;
            if (parameters.length > 0) {
                c8oCallLogMessage += "\n" + String(parameters);
            }
            this._debug(c8oCallLogMessage);
        }
    }


    logC8oCallJSONResponse(response: JSON, url: string, parameters: any) {
        this.logC8oCallResponse(JSON.stringify(response), "JSON", url, parameters);
    }

    logC8oCallXMLResponse(response: Document, url: string, parameters: Object) {
        this.logC8oCallResponse(response.toString(), "XML", url, parameters);
    }

    logC8oCallResponse(responseStr: string, responseType: string, url: string, parameters: any) {
        if (this.c8o.logC8o && this.isTrace) {
            let c8oCallResponseLogMessage: string;
            if (url == null) {
                c8oCallResponseLogMessage = "C8o call " + responseType + " response: ";
            } else {
                c8oCallResponseLogMessage = "C8o call " + responseType + " response: " + url;
            }
            if (parameters.count > 0) {
                c8oCallResponseLogMessage += "\n" + parameters.toString();
            }
            c8oCallResponseLogMessage += "\n" + responseStr;

            this._trace(c8oCallResponseLogMessage);
        }
    }
}