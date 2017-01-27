import { C8o }                        from '../src/c8o/c8o.service'
import {inject, TestBed, async} from    "@angular/core/testing";
import {Http, ConnectionBackend, XHRBackend, Headers, Response} from "@angular/http";
import {C8oSettings} from "../src/c8o/c8oSettings.service";
import {C8oLogLevel} from "../src/c8o/c8oLogLevel.service";
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import 'rxjs/Rx';
import {Observable} from "rxjs";
import any = jasmine.any;
import {C8oException} from "../src/c8o/Exception/c8oException.service";
import {C8oExceptionMessage} from "../src/c8o/Exception/c8oExceptionMessage.service";
import {C8oHttpRequestException} from "../src/c8o/Exception/c8oHttpRequestException.service";

class info{
    // to change remote host and port please change configuration in Root/config/karama.conf.js
    static get host(){
        return "http://localhost";
    }
    static get port(){
        return "9876";
    }
    static get project_path(){
        return "/cems/projects/ClientSDKtesting";
    }
    static get endpoint(){
        return info.host + ":" + info.port + info.project_path;
    }
    static transformRequest(parameters: Object): string {
        let str = [];
        for (let p in parameters)
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(parameters[p]));
        return str.join("&");
    }
    static extractData(res: Response) {
        let body = res.json();
        return body;
    }

    static handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || "";
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ""} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
class stuff{
    static get C8o(){
        let c8oSettings : C8oSettings = new C8oSettings();
        c8oSettings
            .setEndPoint(info.endpoint)
            .setLogRemote(false)
            .setLogLevelLocal(C8oLogLevel.ERROR)
        return c8oSettings;
    }
}
describe('provider: c8o.service.ts', () => {
    beforeEach(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
        TestBed.configureTestingModule({
            imports: [
                HttpModule,
                BrowserModule
            ],
            providers: [
                C8o
            ]
        });
    });

    it('should returns and IllegalArgument Exception (C8oBadEndpoint)',
        async(inject([C8o], (c8o: C8o) => {
            let settings: C8oSettings = new C8oSettings();
            settings.setDefaultDatabaseName("retaildb")
                .setLogRemote(true)
                .setLogC8o(true)
                .setLogLevelLocal(C8oLogLevel.DEBUG)
                .setTrustAllCertificates(true)
                .setEndPoint(info.host + ":" + info.port);
            c8o.init(settings).catch((err : C8oException)=>{
                expect(err.message).toBe(C8oExceptionMessage.illegalArgumentInvalidEndpoint(info.host + ":" + info.port));
            });
        }))
    );

    it('should ping (C8oDefaultPing)',
        async(inject([C8o], (c8o: C8o) => {
            c8o.init(stuff.C8o).catch((err : C8oException)=>{
                expect(err).toBeUndefined();
            });
            c8o.callJson(".Ping")
                .then((response: any, parameters: Object) => {
                    expect(response["document"]["pong"]).not.toBeNull();
                    return null;
                }
                ).fail((error, _) => {
                    console.log(JSON.stringify(error));
                    expect(error).toBe(undefined)
                });
        }))
    );

    it('should genrerates exceptions (C8oUnknownHostCallAndLog)',
        async(inject([C8o], (c8o: C8o) => {
            let exceptionLog;
            let settings: C8oSettings = new C8oSettings();
            settings
                .setEndPoint("http://" + info.host + "ee" + info.port + info.project_path)
                .setLogOnFail((exception: Error, parameters: Object)=>{
                    exceptionLog = exception;
                })
                .setLogLevelLocal(C8oLogLevel.FATAL);
            c8o.init(settings)
                .then(()=>{
                    c8o.log.warn("must fail log");
                    setTimeout(()=> {
                        c8o.callJson(".Ping")
                            .then((response: any, parameters: Object) => {
                                return null;
                            })
                            .fail((err, _)=>{
                                expect(err).not.toBeNull();
                                expect(err instanceof C8oException).toBeTruthy();
                                let expection = err.cause;
                                expect(expection instanceof C8oHttpRequestException).toBeTruthy();
                                expect(expection.cause).toBe('0 -  {"isTrusted":true}');
                                expect(exceptionLog).not.toBeNull();
                                expect(exceptionLog instanceof C8oException).toBeTruthy();
                                exceptionLog = exceptionLog.cause;
                                expect(expection instanceof C8oHttpRequestException).toBeTruthy();
                                exceptionLog = exceptionLog.cause;
                                expect(exceptionLog).toBe('0 -  {"isTrusted":true}');
                            })
                    }, 250);
                })
                .catch((err : C8oException)=>{
                    expect(err).toBeUndefined();
                });
        }))
    );

    it('should ping one single value (C8oDefaultPingOneSingleValue)',
        async(inject([C8o], (c8o: C8o) => {
            c8o.init(stuff.C8o).catch((err : C8oException)=>{
                expect(err).toBeUndefined();
            });
            c8o.callJson(".Ping", "var1", "value one")
                .then((response: any, parameters: Object) => {
                    expect(response["document"]["pong"]["var1"]).toBe("value one");
                    return null;
                })
                .fail((err, _)=>{
                    expect(err).toBeUndefined();
                });
        }))
    );

    it('should ping two single value (C8oDefaultPingTwoSingleValues)',
        async(inject([C8o], (c8o: C8o) => {
            c8o.init(stuff.C8o).catch((err : C8oException)=>{
                expect(err).toBeUndefined();
            });
            c8o.callJson(".Ping",
                "var1", "value one",
                "var2", "value two"
                ).then((response: any, parameters: Object) => {
                    expect(response["document"]["pong"]["var1"]).toBe("value one");
                    expect(response["document"]["pong"]["var2"]).toBe("value two");
                    return null;
                })
                .fail((err, _)=>{
                    expect(err).toBeUndefined();
                });
        }))
    );


});
