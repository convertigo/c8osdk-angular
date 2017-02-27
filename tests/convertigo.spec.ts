import { C8o }                        from '../src/c8o/c8o.service'
import {inject, TestBed, async} from    "@angular/core/testing";
import {Http, ConnectionBackend, XHRBackend, Headers, Response, BrowserXhr} from "@angular/http";
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
import {Injectable} from "@angular/core";


class info{
    // if you wants to use a proxy you mast change remote host and port please change configuration in Root/config/karama.conf.js

    static get host(){
        return "http://c8o.convertigo.net";
    }
    static get port(){
        return "80";
    }
    static get project_path(){
        return "/cems/projects/ClientSDKtesting";
    }
    static get endpoint(){
        return info.host + ":" + info.port + info.project_path;
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

class functions{
    static CheckLogRemoteHelper(c8o : C8o, lvl : string, msg : string){
        c8o.callJson(".GetLogs").then(
            (response: any, _) => {
                let sLine = response["document"]["line"];
                expect(sLine != null && !sLine.isEmpty()).toBeTruthy();
                return null;
            }
        )
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
                .then((response: any, _) => {
                    expect(response["document"]["pong"]).not.toBeNull();
                    return null;
                }
                ).fail((error, _) => {
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
                            .then((_,__) => {
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
                .then((response: any, _) => {
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
                ).then((response: any, _) => {
                    expect(response["document"]["pong"]["var1"]).toBe("value one");
                    expect(response["document"]["pong"]["var2"]).toBe("value two");
                    return null;
                })
                .fail((err, _)=>{
                    expect(err).toBeUndefined();
                });
        }))
    );

    it('should ping two single value and one value multi (C8oDefaultPingTwoSingleValuesOneMulti)',
        async(inject([C8o], (c8o: C8o) => {
            c8o.init(stuff.C8o).catch((err : C8oException)=>{
                expect(err).toBeUndefined();
            });
            c8o.callJson(".Ping",
                "var1", "value one",
                "var2", "value two",
                "mvar1", ["mvalue one", "mvalue two", "mvalue three"]
            ).then((response: any, _) => {
                expect(response["document"]["pong"]["var1"]).toBe("value one");
                expect(response["document"]["pong"]["var2"]).toBe("value two");
                expect(response["document"]["pong"]["mvar1"][0]).toBe("mvalue one");
                expect(response["document"]["pong"]["mvar1"][1]).toBe("mvalue two");
                expect(response["document"]["pong"]["mvar1"][2]).toBe("mvalue three");
                expect((response["document"]["pong"]["mvar1"]).length).toBe(3);

                return null;
            })
                .fail((err, _)=>{
                    expect(err).toBeUndefined();
                });
        }))
    );

    it('should ping two single value and two value multi (C8oDefaultPingTwoSingleValuesTwoMulti)',
        async(inject([C8o], (c8o: C8o) => {
            c8o.init(stuff.C8o).catch((err : C8oException)=>{
                expect(err).toBeUndefined();
            });
            c8o.callJson(".Ping",
                "var1", "value one",
                "var2", "value two",
                "mvar1", ["mvalue one", "mvalue two", "mvalue three"],
                "mvar2", ["mvalue2 one"]
            ).then((response: any, _) => {
                expect(response["document"]["pong"]["var1"]).toBe("value one");
                expect(response["document"]["pong"]["var2"]).toBe("value two");
                expect(response["document"]["pong"]["mvar1"][0]).toBe("mvalue one");
                expect(response["document"]["pong"]["mvar1"][1]).toBe("mvalue two");
                expect(response["document"]["pong"]["mvar1"][2]).toBe("mvalue three");
                expect((response["document"]["pong"]["mvar1"]).length).toBe(3);
                expect(response["document"]["pong"]["mvar2"]).toBe("mvalue2 one");
                return null;
            })
                .fail((err, _)=>{
                    expect(err).toBeUndefined();
                });
        }))
    );
    it('should check Json types (C8oCheckJsonTypes)',
        async(inject([C8o], (c8o: C8o) => {
            c8o.init(stuff.C8o).catch((err : C8oException)=>{
                expect(err).toBeUndefined();
            });
            c8o.callJson(".JsonTypes",
                "var1", "value one",
                "mvar1", ["mvalue one", "mvalue two", "mvalue three"]
            ).then((response: any, _) => {
                let json = response["document"];
                let pong = json["pong"];
                let value = pong["var1"];
                expect(value).toBe("value one");
                let mvar1 = pong["mvar1"];
                value = mvar1[0];
                expect(value).toBe("mvalue one");
                value = mvar1[1];
                expect(value).toBe("mvalue two");
                value = mvar1[2];
                expect(value).toBe("mvalue three");
                value = mvar1.length;
                expect(value).toBe(3);
                let complex = json["complex"];
                let isBool : boolean = (complex["isNull"] == null || complex["isNull"] == undefined);
                expect(isBool).toBeTruthy();
                value = complex["isInt3615"];
                expect(value).toBe(3615);
                value = complex["isStringWhere"];
                expect("where is my string?!").toBe(value);
                value = complex["isDoublePI"];
                expect(value).toBe(3.141592653589793);
                isBool = complex["isBoolTrue"];
                expect(isBool).toBeTruthy();
                value = complex["ÉlŸz@-node"];
                expect(value).toBe("that's ÉlŸz@");
                return null;
            })
                .fail((err, _)=>{
                    expect(err).toBeUndefined();
                });

        }))
    );

    //DOING
    it('should check that sessions are not mixed (CheckNoMixSession)',
        async(inject([C8o], (c8o: C8o) => {
            c8o.init(stuff.C8o).catch((err : C8oException)=>{
                expect(err).toBeUndefined();
            });
            let ts = new Date().getTime().valueOf() +"";
            c8o.callJson(".SetInSession",
                "ts", ts
            ).then((response: any, _) => {
                 expect(response["document"]["pong"]["ts"]).toBe(ts);
                return c8o.callJson(".GetFromSession");
            })
            .then((response: any, _)=>{
                 expect(response["document"]["session"]["expression"]).toBe(ts);
                return null;
            })
            .fail((err, _)=>{
                expect(err).toBeUndefined();
            });

        }))
    );

    it('should check that log remote works (CheckLogRemote)',
        async(inject([C8o], (c8o: C8o) => {
            let c8oSettings : C8oSettings = new C8oSettings();
            c8oSettings.setLogC8o(false);
            c8oSettings.setEndPoint(info.endpoint);
            c8o.init(c8oSettings).catch((err : C8oException)=>{
                console.log(err);
                expect(err).toBeUndefined();
            });
            let id : string = "logID=" + new Date().getTime().valueOf();
            c8o.callJson(".GetLogs",
                "init", id
            ).then((response: any, _) => {
                setTimeout(()=> {
                    c8o.log.error(id);
                    functions.CheckLogRemoteHelper(c8o, "ERROR", id);
                }, 333);
                return null;
            })
            .fail((err, _)=>{
                expect(err).toBeUndefined();
            });
        }))

    );
});
