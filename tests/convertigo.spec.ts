import {inject, TestBed, async} from    "@angular/core/testing";
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import 'rxjs/Rx';
import any = jasmine.any;
import {C8oSettings} from "../src/c8o/c8oSettings.service";
import {C8oLogLevel} from "../src/c8o/c8oLogLevel.service";
import {C8o} from "../src/c8o/c8o.service";
import {C8oException} from "../src/c8o/Exception/c8oException.service";
import {C8oExceptionMessage} from "../src/c8o/Exception/c8oExceptionMessage.service";
import {C8oPromise} from "../src/c8o/c8oPromise.service";
import {C8oHttpRequestException} from "../src/c8o/Exception/c8oHttpRequestException.service";



class info{
    // if you wants to use a proxy you mast change remote host and port please change configuration in Root/config/karama.conf.js

    static get http(){
        return "http://";
    }
    static get host(){
        return "c8o.convertigo.net";
    }
    static get port(){
        return "80";
    }
    static get project_path(){
        return "/cems/projects/ClientSDKtesting";
    }
    static get endpoint(){
        return info.http + info.host + ":" + info.port + info.project_path;
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

    static get C8o_FS(){
        let c8oSettings : C8oSettings = new C8oSettings();
        c8oSettings
            .setDefaultDatabaseName("clientsdktesting")
            .setEndPoint(info.endpoint)
            .setLogRemote(false)
            .setLogLevelLocal(C8oLogLevel.ERROR)

        return c8oSettings;
    }
}

class functions{
    static CheckLogRemoteHelper(c8o : C8o, lv : any, msg : string){

            c8o.callJson(".GetLogs").then(
                (response: any, _) => {
                    let sLine = response["document"]["line"];
                    expect(sLine != null).toBeTruthy();
                    for(let lvl of lv){
                        let line = JSON.parse(sLine);
                        expect(line[2]).toBe(lvl);
                        let newMsg = line[4];
                        newMsg = newMsg.substring(newMsg.indexOf("logID="));
                        expect(msg).toBe(newMsg);
                    }
                    return null;
                }
            );

    }
}
describe('provider: c8o.service.ts', () => {
    beforeEach(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 50000;
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

    it('should returns and IllegalArgument Exception (C8oBadEndpoint)', function (done) {
        inject([C8o], (c8o: C8o) => {
            let settings: C8oSettings = new C8oSettings();
            settings.setDefaultDatabaseName("retaildb")
                .setLogC8o(true)
                .setLogLevelLocal(C8oLogLevel.DEBUG)
                .setEndPoint(info.http + info.host + ":" + info.port);
            c8o.init(settings).catch((err : C8oException)=>{
                expect(err.message).toBe(C8oExceptionMessage.illegalArgumentInvalidEndpoint(info.http + info.host + ":" + info.port));
                done();
            });
        })();
    }
);

    it('should ping (C8oDefaultPing)', function (done) {
        inject([C8o], (c8o: C8o) => {
            c8o.init(stuff.C8o).catch((err : C8oException)=>{
                expect(err).toBeUndefined();
            });
            c8o.callJson(".Ping")
                .then((response: any, _) => {
                    expect(response["document"]["pong"]).not.toBeNull();
                    done()
                    return null;
                }
                ).fail((__, _) => {
                    done.fail("error is not supposed to happend");
                });
        })();
        }
    );
    //TOFIX travis ci environnement failure
    /**
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
    );*/

    it('should ping one single value (C8oDefaultPingOneSingleValue)',  function (done) {
        inject([C8o], (c8o: C8o) => {
            c8o.init(stuff.C8o).catch((err : C8oException)=>{
                expect(err).toBeUndefined();
            });
            c8o.callJson(".Ping", "var1", "value one")
                .then((response: any, _) => {
                    expect(response["document"]["pong"]["var1"]).toBe("value one");
                    done();
                    return null;
                })
                .fail((__, _) => {
                    done.fail("error is not supposed to happend");
                });
        })();
        }
    );

    it('should ping two single value (C8oDefaultPingTwoSingleValues)', function (done) {
        inject([C8o], (c8o: C8o) => {
            c8o.init(stuff.C8o).catch((err : C8oException)=>{
                expect(err).toBeUndefined();
            });
            c8o.callJson(".Ping",
                "var1", "value one",
                "var2", "value two"
                ).then((response: any, _) => {
                    expect(response["document"]["pong"]["var1"]).toBe("value one");
                    expect(response["document"]["pong"]["var2"]).toBe("value two");
                    done();
                    return null;
                })
                .fail((__, _) => {
                    done.fail("error is not supposed to happend");
                });
        })();
    }
);

    it('should ping two single value and one value multi (C8oDefaultPingTwoSingleValuesOneMulti)', function (done) {
        inject([C8o], (c8o: C8o) => {
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
                done();
                return null;
            }).fail((__, _) => {
                done.fail("error is not supposed to happend");
            });
        })();
    }
);

    it('should ping two single value and two value multi (C8oDefaultPingTwoSingleValuesTwoMulti)', function (done) {
        inject([C8o], (c8o: C8o) => {
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
                done();
                return null;
            }).fail((__, _) => {
                done.fail("error is not supposed to happend");
            });
        })();
    }
);
    it('should check Json types (C8oCheckJsonTypes)', function (done) {
        inject([C8o], (c8o: C8o) => {
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
                done();
                return null;
            }).fail((__, _) => {
                done.fail("error is not supposed to happend");
            });

        })();
    }
);

    it('should check that sessions are not mixed (CheckNoMixSession)', function (done) {
        inject([C8o], (c8o: C8o) => {
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
                 done();
                return null;
            }).fail((__, _) => {
                done.fail("error is not supposed to happend");
            });

        })();
    }
);

    it('should check that log remote works (CheckLogRemote)', function (done) {
        inject([C8o], (c8o: C8o) => {
            let c8oSettings : C8oSettings = new C8oSettings();
            c8oSettings.setLogC8o(false);
            c8oSettings.setEndPoint(info.endpoint);
            c8o.init(c8oSettings).catch((err : C8oException)=>{
                expect(err).toBeUndefined();
            });
            let id : string = "logID=" + new Date().getTime().valueOf();
            c8o.callJson(".GetLogs",
                "init", id
            ).then((response: any, _) => {
                setTimeout(()=> {
                    c8o.log.error(id);
                    let arg  = ["ERROR", "WARN", "INFO", "DEBUG", "TRACE", "FATAL"];
                    c8o.log.warn(id);
                    c8o.log.info(id);
                    c8o.log.debug(id);
                    c8o.log.trace(id);
                    c8o.log.fatal(id);
                    functions.CheckLogRemoteHelper(c8o, arg, id);
                    c8o.logRemote = false;
                    c8o.log.info(id);
                    setTimeout(()=> {
                        c8o.callJson(".GetLogs")
                            .then((response: any, _) => {
                                expect(response["document"]["line"]).toBeUndefined();
                                done();
                                return null;
                        });
                    }, 333);
                }, 333);
                return null;
            }).fail((__, _) => {
                done.fail("error is not supposed to happend");
            });
        })();
        }
    );

    it('should check that one default promise works (C8oDefaultPromiseXmlOne)', function (done) {
        inject([C8o], (c8o: C8o) => {
            c8o.init(stuff.C8o).catch((err : C8oException)=>{
                expect(err).toBeUndefined();
            });

            c8o.callJson(".Ping", "var1", "step 1").then((response: any, parameters: any) => {
                expect(response["document"]["pong"]["var1"]).toBe("step 1");
                expect(parameters["var1"]).toBe("step 1");
                done();
                return null;
            }).fail((__, _) => {
                done.fail("error is not supposed to happend");
            });
        })();
        }
    );

    it('should check that three default promises works (C8oDefaultPromiseJsonThree)', function (done) {
        inject([C8o], (c8o: C8o) => {
            c8o.init(stuff.C8o).catch((err : C8oException)=>{
                expect(err).toBeUndefined();
            });

            let xjson : Array<any> =  new Array<any>();
            c8o.callJson(".Ping", "var1", "step 1").then((response: any, parameters: any) => {
                xjson[0] = response;
                return c8o.callJson(".Ping", "var1", "step 2");
            }).then((response: any, parameters: any) => {
                xjson[1] = response;
                return c8o.callJson(".Ping", "var1", "step 3");
            }).then((response: any, parameters: any) => {
                xjson[2] = response;
                expect(xjson[0]["document"]["pong"]["var1"]).toBe("step 1");
                expect(xjson[1]["document"]["pong"]["var1"]).toBe("step 2");
                expect(xjson[2]["document"]["pong"]["var1"]).toBe("step 3");
                done();
                return null;
            }).fail((__, _) => {
                done.fail("error is not supposed to happend");
            });
        })();
        }
    );

    it('should check that a promise could fail (C8oDefaultPromiseFail)', function (done) {

        inject([C8o], (c8o: C8o) => {
            c8o.init(stuff.C8o).catch((err : C8oException)=>{
                expect(err).toBeUndefined();
            });
            let xjson : Array<any> =  new Array<any>();
            c8o.callJson(".Ping", "var1", "step 1").then((response: any, parameters: any) => {
                xjson[0] = response;
                return c8o.callJson(".Ping", "var1", "step 2");
            }).then((response: any, parameters: any) => {
                xjson[1] = response;
                if(response != null){
                    throw new C8oException("random failure");
                }
                return c8o.callJson(".Ping", "var1", "step 3");
            }).then((response: any, parameters: any) => {
                done.fail("this \"then\" is not supposed to be executed");
                xjson[2] = response;
            }).fail((error, parameters) => {
                expect(xjson[0]["document"]["pong"]["var1"]).toBe("step 1");
                expect(xjson[1]["document"]["pong"]["var1"]).toBe("step 2");
                expect(xjson[2]).toBe(undefined);
                expect(error.message).toBe("random failure");
                expect(parameters["var1"]).toBe("step 2");
                done();
            });
        })();
    }
);

    it('should check that a promise could be nested (C8oDefaultPromiseNested)', function(done) {
        inject([C8o], (c8o: C8o) => {
            c8o.init(stuff.C8o).catch((err : C8oException)=>{
                expect(err).toBeUndefined();
            });
            let xjson : Array<any> =  new Array<any>();
            c8o.callJson(".Ping", "var1", "step 1").then((response0: any, _) => {
                xjson[0] = response0;
                return c8o.callJson(".Ping", "var1", "step 2")
                    .then((response1: any, _) => {
                        xjson[1] = response1;
                        return c8o.callJson(".Ping", "var1", "step 3")
                            .then((response2: any, _) => {
                                xjson[2] = response2;
                                return c8o.callJson(".Ping", "var1", "step 4");
                            });
                    });
            }).then((response3: any, _) => {
                xjson[3] = response3;
                return c8o.callJson(".Ping", "var1", "step 5")
                    .then((response4: any, _) => {
                        xjson[4] = response4;
                        return null;
                    });
            }).then((response: any, parameters: any) => {
                expect(xjson[0]["document"]["pong"]["var1"]).toBe("step 1");
                expect(xjson[1]["document"]["pong"]["var1"]).toBe("step 2");
                expect(xjson[2]["document"]["pong"]["var1"]).toBe("step 3");
                expect(xjson[3]["document"]["pong"]["var1"]).toBe("step 4");
                expect(xjson[4]["document"]["pong"]["var1"]).toBe("step 5");
                done();
                return null;
            }).fail((__, _) => {
                done.fail("error is not supposed to happend");
            });
        })();
        }
    );

    it('should check that a promise could be nested and failed (C8oDefaultPromiseNestedFail)', function(done) {
        inject([C8o], (c8o: C8o) => {
            c8o.init(stuff.C8o).catch((err : C8oException)=>{
                expect(err).toBeUndefined();
            });
            let xjson : Array<any> =  new Array<any>();
            c8o.callJson(".Ping", "var1", "step 1").then((response0: any, _) => {
                xjson[0] = response0;
                return c8o.callJson(".Ping", "var1", "step 2")
                    .then((response1: any, _) => {
                        xjson[1] = response1;
                        return c8o.callJson(".Ping", "var1", "step 3")
                            .then((response2: any, _) => {
                                xjson[2] = response2;
                                throw new C8oException("random failure");
                            });
                    });
            }).then((response3: any, _) => {
                xjson[3] = response3;
                return c8o.callJson(".Ping", "var1", "step 5")
                    .then((response4: any, _) => {
                        xjson[4] = response4;
                        return null;
                    });
            }).fail((error, _) => {
                expect(xjson[0]["document"]["pong"]["var1"]).toBe("step 1");
                expect(xjson[1]["document"]["pong"]["var1"]).toBe("step 2");
                expect(xjson[2]["document"]["pong"]["var1"]).toBe("step 3");
                expect(xjson[3]).toBeUndefined();
                expect(xjson[4]).toBeUndefined();
                expect(error.message).toBe("random failure");
                done();
            });
        })();
        }
    );

    it('should check that a promise could stored in var (C8oDefaultPromiseInVar)', function(done) {
            inject([C8o], (c8o: C8o) => {
                c8o.init(stuff.C8o).catch((err: C8oException) => {
                    expect(err).toBeUndefined();
                });
                let xjson: Array<any> = new Array<any>();
                let promise: C8oPromise<any> = c8o.callJson(".Ping", "var1", "step 1");
                promise.then((response0: any, _) => {
                    xjson[0] = response0;
                    return c8o.callJson(".Ping", "var1", "step 2");
                });
                promise.then((response1: any, _) => {
                    xjson[1] = response1;
                    return c8o.callJson(".Ping", "var1", "step 3");
                });
                promise.then((response2: any, _) => {
                    xjson[2] = response2;
                    expect(xjson[0]["document"]["pong"]["var1"]).toBe("step 1");
                    expect(xjson[1]["document"]["pong"]["var1"]).toBe("step 2");
                    expect(xjson[2]["document"]["pong"]["var1"]).toBe("step 3");
                    done();
                    return null;
                });
            })();
        }
    );

    /*it('should check that a ssl call on http is not possible (C8o0Ssl1TrustFail)',
        async(inject([C8o], (c8o: C8o) => {
            let c8oSettings : C8oSettings = new C8oSettings();
            c8oSettings.setEndPoint("https://" + info.host + ":443" + info.project_path);
            c8o.init(c8oSettings).catch((err : C8oException)=>{
                expect(err).toBeUndefined();
            });
            c8o.callJson(".Ping", "var1", "step 1").then((response0: any, _) => {
                expect(response0).toBeUndefined();
                return null;
            }).fail((error, _) => {
                console.log(error);
               expect(error).not.toBeNull();
               expect(error.constructor).toBe(C8oException);
               expect(error.cause.constructor).toBe(C8oHttpRequestException);
            });
        }))
    );*/

    it('should check that Fullsync Post Get Delete works (C8oFsPostGetDelete)', function(done) {
            inject([C8o], (c8o: C8o) => {
                c8o.init(stuff.C8o_FS).catch((err: C8oException) => {
                    expect(err).toBeUndefined();
                });
                let myId: string = "C8oFsPostGetDelete-" + new Date().getTime().valueOf();
                let id : string;
                c8o.callJson("fs://.reset")
                    .then((response: any, _) => {
                        return c8o.callJson("fs://.post", "_id", myId)
                    })
                    .then((response: any, _) => {
                        expect(response["ok"]).toBeTruthy();
                        id = response["id"];
                        expect(id).toBe(myId);
                        return c8o.callJson("fs://.get", "docid", id);
                    })
                    .then((response: any, _) => {
                        expect(response["_id"]).toBe(myId);
                        return c8o.callJson("fs://.delete", "docid", id);
                    })
                    .then((response: any, _) => {
                        expect(response["ok"]).toBeTruthy();
                        return c8o.callJson("fs://.get", "docid",id);
                    })
                    .then((__, _) => {
                        done.fail("this \"then\" is not supposed to be executed");
                        return null;
                    })
                    .fail((error,parameters) => {
                        expect(error instanceof C8oException).toBeTruthy();
                        done();
                    });
            })();
        }
    );

    it('should check that Fullsync Post Get Delete works with rev (C8oFsPostGetDeleteRev)', function(done) {
        inject([C8o], function(c8o: C8o)  {
            c8o.init(stuff.C8o_FS).catch((err : C8oException)=>{
                expect(err).toBeUndefined();
            });
            let myId : string = "C8oFsPostGetDeleteRev-" + new Date().getTime().valueOf();
            let rev : string;
            c8o.callJson("fs://.reset")
                .then((response: any, _) => {
                    expect(response["ok"]).toBeTruthy();
                    return c8o.callJson("fs://.post", "_id", myId)
                })
                .then((response: any, _) => {
                    expect(response["ok"]).toBeTruthy();
                    rev = response["rev"];
                    return c8o.callJson("fs://.delete", "docid", myId, "rev", "1-123456")
                })
                .then((__, _) => {
                    done.fail("this \"then\" is not supposed to be executed");
                    return null;
                })
                .fail((error, _) => {
                    expect(error.constructor).toBe(C8oException);
                    //expect(false).toBeTruthy();
                    c8o.callJson("fs://.delete", "docid", myId, "rev", rev)
                        .then((response: any, _) => {
                            expect(response["ok"]).toBeTruthy();
                            return c8o.callJson("fs://.get", "docid", myId)
                        })
                        .then((__, _) => {
                            done.fail("this \"then\" is not supposed to be executed");
                            return null;
                        })
                        .fail((error, _) => {
                            expect(error instanceof C8oException).toBeTruthy();
                            done();
                        });
                });
        })();
        }
    );

    it('should check that Fullsync Post Get Destoy Create works (C8oFsPostGetDestroyCreate)', function(done) {
        inject([C8o], function(c8o: C8o)  {
            c8o.init(stuff.C8o_FS).catch((err : C8oException)=>{
                expect(err).toBeUndefined();
            });
            let ts : string = "ts=" + new Date().getTime().valueOf();
            let ts2 : string = ts + "@test";
            let id : string;
            let rev : string;
            c8o.callJson("fs://.reset")
                .then((response: any, _) => {
                    expect(response["ok"]).toBeTruthy();
                    return c8o.callJson("fs://.post", "ts", ts);
                })
                .then((response: any, _) => {
                    expect(response["ok"]).toBeTruthy();
                    id = response["id"];
                    rev = response["rev"];
                    return c8o.callJson("fs://.post", "_id", id, "_rev", rev, "ts", ts, "ts2", ts2);
                })
                .then((response: any, _) => {
                    expect(response["ok"]).toBeTruthy();
                    return c8o.callJson("fs://.get", "docid", id);
                })
                .then((response: any, _) => {
                    expect(response["ts"]).toBe(ts);
                    expect(response["ts2"]).toBe((ts2));
                    return c8o.callJson("fs://.destroy");
                })
                .then((response: any, _) => {
                    expect(response["ok"]).toBeTruthy();
                    return c8o.callJson("fs://.create");
                })
                .then((response: any, _) => {
                    expect(response["ok"]).toBeTruthy();
                    return c8o.callJson("fs://.get", "docid", id);
                })
                .then((__, _) => {
                    done.fail("this \"then\" is not supposed to be executed");
                    return null;
                })
                .fail((error, _) => {
                    expect(error instanceof C8oException).toBeTruthy();
                    done();
                });
     })();
     }
     );

    it('should check that Fullsync Post Reset works (C8oFsPostReset)', function(done) {
        inject([C8o], function(c8o: C8o)  {
            c8o.init(stuff.C8o_FS).catch((err : C8oException)=>{
                expect(err).toBeUndefined();
            });
            let id : string;
            c8o.callJson("fs://.reset")
                .then((response: any, _) => {
                    expect(response["ok"]).toBeTruthy();
                    return c8o.callJson("fs://.post");
                })
                .then((response: any, _) => {
                    expect(response["ok"]).toBeTruthy();
                    id = response["id"];
                    return c8o.callJson("fs://.reset");
                })
                .then((response: any, _) => {
                    expect(response["ok"]).toBeTruthy();
                    return c8o.callJson("fs://.get", "docid", id);
                })
                .then((__, _) => {
                    done.fail("this \"then\" is not supposed to be executed");
                    return null;
                })
                .fail((error, _) => {
                    expect(error instanceof C8oException).toBeTruthy();
                    done();
                });
     })();
     }
     );

    it('should check that Fullsync Post on existing is not working(C8oFsPostExisting)', function(done) {
        inject([C8o], function(c8o: C8o)  {
            c8o.init(stuff.C8o_FS).catch((err : C8oException)=>{
                expect(err).toBeUndefined();
            });
            let id : string;
            c8o.callJson("fs://.reset")
                .then((response: any, _) => {
                    expect(response["ok"]).toBeTruthy();
                    return c8o.callJson("fs://.post");
                })
                .then((response: any, _) => {
                    expect(response["ok"]).toBeTruthy();
                    id = response["id"];
                    return c8o.callJson("fs://.post", "_id", id);
                })
                .then((__, _) => {
                    done.fail("this \"then\" is not supposed to be executed");
                    return null;
                })
                .fail((error, _) => {
                    expect(error instanceof C8oException).toBeTruthy();
                    done();
                });
     })();
     }
     );

    it('should check that Fullsync Post on existing with policy none is not working(C8oFsPostExistingPolicyNone)',  function(done) {
        inject([C8o], function(c8o: C8o)  {
            c8o.init(stuff.C8o_FS).catch((err : C8oException)=>{
                expect(err).toBeUndefined();
            });
            let id : string;
            c8o.callJson("fs://.reset")
                .then((response: any, _) => {
                    expect(response["ok"]).toBeTruthy();
                    return c8o.callJson("fs://.post", C8o.FS_POLICY, C8o.FS_POLICY_NONE);
                })
                .then((response: any, _) => {
                    expect(response["ok"]).toBeTruthy();
                    id = response["id"];
                    return c8o.callJson("fs://.post", C8o.FS_POLICY, C8o.FS_POLICY_NONE, "_id", id);
                })
                .then((__, _) => {
                    done.fail("this \"then\" is not supposed to be executed");
                    return null;
                })
                .fail((error, _) => {
                    expect(error instanceof C8oException).toBeTruthy();
                    done();
                });
        })();
        }
    );

    it('should check that Fullsync Post on existing with policy create works (C8oFsPostExistingPolicyCreate)', function(done) {
        inject([C8o], function(c8o: C8o)  {
            c8o.init(stuff.C8o_FS).catch((err : C8oException)=>{
                done.fail("error is not supposed to happend");
            });
            let id : string;
            let myId : string = "C8oFsPostExistingPolicyCreate-" + new Date().getTime().valueOf();
            c8o.callJson("fs://.reset")
                .then((response: any, _) => {
                    expect(response["ok"]).toBeTruthy();
                    return c8o.callJson("fs://.post", "_id", myId);
                })
                .then((response: any, _) => {
                    expect(response["ok"]).toBeTruthy();
                    id = response["id"];
                    expect(id).toBe(myId);
                    return c8o.callJson("fs://.post", C8o.FS_POLICY, C8o.FS_POLICY_CREATE, "_id", id);
                })
                .then((response: any, _) => {
                    expect(response["ok"]).toBeTruthy();
                    expect(response["id"]).not.toBe(myId);
                    done();
                    return null;
                })
                .fail((__, _) => {
                    done.fail("error is not supposed to happend");
                });
     })();
     }
     );

    it('should check that Fullsync Post on existing with policy override works (C8oFsPostExistingPolicyOverride)', function(done) {
            inject([C8o], function(c8o: C8o)  {
                c8o.init(stuff.C8o_FS).catch((err : C8oException)=>{
                    done.fail("error is not supposed to happend");
                });
                let id : string;
                let myId : string = "C8oFsPostExistingPolicyOverride-" + new Date().getTime().valueOf();
                c8o.callJson("fs://.reset")
                    .then((response: any, _) => {
                        expect(response["ok"]).toBeTruthy();
                        return c8o.callJson("fs://.post",
                            C8o.FS_POLICY, C8o.FS_POLICY_OVERRIDE,
                            "_id", myId,
                            "a", 1,
                            "b", 2
                        );
                    })
                    .then((response: any, _) => {
                        expect(response["ok"]).toBeTruthy();
                        id = response["id"];
                        expect(id).toBe(myId);
                        return c8o.callJson("fs://.post",
                            C8o.FS_POLICY, C8o.FS_POLICY_OVERRIDE,
                            "_id", myId,
                            "a", 3,
                            "c", 4
                        );
                    })
                    .then((response: any, _) => {
                        expect(response["ok"]).toBeTruthy();
                        id = response["id"];
                        expect(id).toBe(myId);
                        return c8o.callJson("fs://.get", "docid", myId);
                    })
                    .then((response: any, _) => {
                        expect(response["a"]).toBe(3);
                        expect(response["b"]).toBe(undefined);
                        expect(response["c"]).toBe(4);
                        done();
                        return null;
                    })
                    .fail((__, _) => {
                        done.fail("error is not supposed to happend");
                    });
            })();
        }
    );

    it('should check that Fullsync Post on existing with policy merge works (C8oFsPostExistingPolicyMerge)', function(done) {
            inject([C8o], function(c8o: C8o)  {
                c8o.init(stuff.C8o_FS).catch((err : C8oException)=>{
                    done.fail("error is not supposed to happend");
                });
                let id : string;
                let myId : string = "C8oFsPostExistingPolicyMerge-" + new Date().getTime().valueOf();
                c8o.callJson("fs://.reset")
                    .then((response: any, _) => {
                        expect(response["ok"]).toBeTruthy();
                        return c8o.callJson("fs://.post",
                            C8o.FS_POLICY, C8o.FS_POLICY_MERGE,
                            "_id", myId,
                            "a", 1,
                            "b", 2
                        );
                    })
                    .then((response: any, _) => {
                        expect(response["ok"]).toBeTruthy();
                        id = response["id"];
                        expect(id).toBe(myId);
                        return c8o.callJson("fs://.post",
                            C8o.FS_POLICY, C8o.FS_POLICY_MERGE,
                            "_id", myId,
                            "a", 3,
                            "c", 4
                        );
                    })
                    .then((response: any, _) => {
                        expect(response["ok"]).toBeTruthy();
                        id = response["id"];
                        expect(id).toBe(myId);
                        return c8o.callJson("fs://.get", "docid", myId);
                    })
                    .then((response: any, _) => {
                        expect(response["a"]).toBe(3);
                        expect(response["b"]).toBe(2);
                        expect(response["c"]).toBe(4);
                        done();
                        return null;
                    })
                    .fail((__, _) => {
                        done.fail("error is not supposed to happend");
                    });
            })();
        }
    );

    it('should check that Fullsync Post on existing with policy merge works with sub values (C8oFsPostExistingPolicyMergeSub)', function(done) {
            inject([C8o], function(c8o: C8o)  {
                c8o.init(stuff.C8o_FS).catch((err : C8oException)=>{
                    done.fail("error is not supposed to happend");
                });
                let id : string;
                let myId : string = "C8oFsPostExistingPolicyMergeSub-" + new Date().getTime().valueOf();
                let sub_c : Object = new Object();
                let sub_f : Object = new Object();
                sub_f["g"] = true;
                sub_f["h"] = ["one", "two", "three", "four"];
                sub_c["d"] = 3;
                sub_c["e"] = "four";
                sub_c["f"] = sub_f;

                c8o.callJson("fs://.reset")
                    .then((response: any, _) => {
                        expect(response["ok"]).toBeTruthy();
                        return c8o.callJson("fs://.post",
                            "_id", myId,
                            "a", 1,
                            "b", -2,
                            "c", sub_c
                        );
                    })
                    .then((response: any, _) => {
                        expect(response["ok"]).toBeTruthy();
                        return c8o.callJson("fs://.post",
                            C8o.FS_POLICY, C8o.FS_POLICY_MERGE,
                            "_id", myId,
                            "i", ["5", 6, 7.1, null],
                            "c.f.j", "good",
                            "c.f.h", [true, false]
                        );
                    })
                    .then((response: any, _) => {
                        expect(response["ok"]).toBeTruthy();
                        return c8o.callJson("fs://.post",
                            C8o.FS_POLICY, C8o.FS_POLICY_MERGE,
                            C8o.FS_SUBKEY_SEPARATOR, "<>",
                            "_id", myId,
                            "c<>i-j", "great"
                        );
                    })
                    .then((response: any, _) => {
                        expect(response["ok"]).toBeTruthy();
                        return c8o.callJson("fs://.get",
                            "docid", myId
                        );
                    })
                    .then((response: any, _) => {
                        delete response["_rev"];
                        expect(response["_id"]).toBe(myId);
                        delete response["_id"];
                        let expectedResponse = '{"c":{"i-j":"great","f":{"h":[true,false,"three","four"],"j":"good","g":true},"d":3,"e":"four"},"i":["5",6,7.1,null],"a":1,"b":-2}'
                        expect(JSON.stringify(response)).toBe(expectedResponse)
                        done();
                        return null;
                    })
                    .fail((__, _) => {
                        done.fail("error is not supposed to happend");
                    });
            })();
        }
    );

});
