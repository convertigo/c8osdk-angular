// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import { inject, TestBed, async } from "@angular/core/testing";
import { BrowserModule } from "@angular/platform-browser";
import "rxjs/Rx";
import any = jasmine.any;

import { C8o } from "./lib/c8o.service";
import { HttpXsrfInterceptor } from "./lib/c8oHttpxsrfInterceptor.service";

import { Functions, Info, Stuff, PlainObjectA, PlainObjectB } from "./utils.help";
import { HttpClientModule, HttpErrorResponse,HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";

import "rxjs/Rx";
import PouchDB from "pouchdb-browser";
import { C8oUtils } from "./lib/c8oUtils.service";
import { C8oAlldocsLocal, C8oPromise, C8oSettings, C8oLogLevel, C8oException, C8oExceptionMessage, C8oProgress, C8oLocalCache, C8oFullSyncChangeListener, Priority, C8oRessourceNotFoundException, C8oResponseJsonListener, C8oHttpRequestException, C8oCore } from "../src/c8osdk-js-core/src/index";
import { $ } from 'protractor';
import { windowTime } from 'rxjs/operators';

declare const require: any;


// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
);


describe("provider: basic calls verifications", () => {
    var originalTimeout;
    beforeEach(() => {
        //spyOnProperty(Navigator.prototype, 'onLine').and.returnValue(false);
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 500000;
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule,
                BrowserModule
            ],
            providers: [
                C8o,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: HttpXsrfInterceptor,
                    multi: true
                  }
            ]
        });
    });
    afterEach(async (done)=> {
        inject([C8o], async (c8o: C8o) => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
        if(c8o.couchUrl != "http://fakecoururl.com"){
            c8o.callJson(".logout", "__disableAutologin", true)
            .then((res)=>{
                //debugger;
                done();
                return null;
            })
            .fail((err)=>{
                //debugger;
                done();
            });
            setTimeout(()=>{
                done();
            },5000)
        }
        else{
            done();
        }
            
        })();
    });

    
/***/
    it("should remove null parameters (C8oRemovePing)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o)
                .catch((err: C8oException) => {
                    expect(err).toBeUndefined();
                });
            await c8o.finalizeInit();
            c8o.callJson(".LoginTesting")
                .then((response, paramrs) => {
                    return c8o.callJson(".Ping", "var1", "val1", "var2", null);
                })
                .then((response, paramrs) => {
                    expect(response["document"]["pong"]["var1"]).toBe("val1");
                    expect(response["document"]["pong"]["var2"]).toBeUndefined();
                    return c8o.callJson(".Ping", "var1", undefined, "var2", "val2");
                })
                .then((response: any) => {
                    expect(response["document"]["pong"]["var2"]).toBe("val2");
                    expect(response["document"]["pong"]["var1"]).toBeUndefined();
                    return c8o.callJsonObject(".Ping", {"var1": "val1", "var2": null});
                })
                .then((response: any) => {
                    expect(response["document"]["pong"]["var1"]).toBe("val1");
                    expect(response["document"]["pong"]["var2"]).toBeUndefined();
                    return c8o.callJsonObject(".Ping", {"var2": undefined, "var1": "val1"});
                })
                .then((response: any) => {
                    expect(response["document"]["pong"]["var1"]).toBe("val1");
                    expect(response["document"]["pong"]["var2"]).toBeUndefined();
                    done();
                    return null;
                })
                .fail((error) => {
                    done.fail("error is not supposed to happend");
                });

        })();
    }
    );

    it("should ping (C8oDefaultPing)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o)
                .catch((err: C8oException) => {
                    expect(err).toBeUndefined();
                });
            await c8o.finalizeInit();
            c8o.callJson(".LoginTesting")
                .then((response, paramrs) => {
                    return c8o.callJson(".Ping");
                })
                .then((response: any) => {
                    expect(response["document"]["pong"]).not.toBeNull();
                    done();
                    return null;
                }
                ).fail((error) => {
                    done.fail("error is not supposed to happend");
                });

        })();
    }
    );

    it("should ping async (C8oDefaultPingAsync)", (done) => {

        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o).catch((err: C8oException) => {
                expect(err).toBeUndefined();
            });
            await c8o.finalizeInit();
            var date2 = new Date('1995-12-17T02:24:00');
            await c8o.callJson(".Ping", "var1", "val1", "var2", date2).async()
                .then((resp) => {
                    expect(resp["document"]["pong"].var1).toBe("val1");
                    expect((resp["document"]["pong"].var2).substring(0, 10)).toBe('1995-12-17');
                    //done();
                    //return null;
                })
                .catch((err) => {
                    expect(err).toBeNull();
                });
            // check reference circular
            let a: Object = { id: "a" };
            let b: Object = { id: "b" };
            a["b"] = b;
            b["a"] = a;
            await c8o.callJson(".Ping", "var3", a).async()
                .then((resp) => {
                    done();
                })
                .catch((err) => {
                    expect(err).toBeNull();
                    done.fail();
                });
        })();

    });


    it("should ping observable (C8oDefaultPingObs)", (done) => {

        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o).catch((err: C8oException) => {
                expect(err).toBeUndefined();
            });
            await c8o.finalizeInit();
            var date2 = new Date('1995-12-17T02:24:00');
            c8o.callJson(".Ping", "var1", "val1", "var2", date2)
                .toObservable()
                .subscribe(next => {
                    expect(next.response["document"]["pong"].var1).toBe("val1");
                    expect(next.response["document"]["pong"].var2.substring(0, 10)).toBe('1995-12-17');
                },
                    error => {
                        expect(error).toBeNull();
                    },
                    () => {
                        done();
                    });
        })();

    });


    it("should ping one single value (C8oDefaultPingOneSingleValue)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o).catch((err: C8oException) => {
                expect(err).toBeUndefined();
            });
            await c8o.finalizeInit();
            c8o.callJson(".Ping", "var1", "value one")
                .then((response: any) => {
                    expect(response["document"]["pong"]["var1"]).toBe("value one");
                    done();
                    return null;
                })
                .fail(() => {
                    done.fail("error is not supposed to happend");
                });
        })();
    }
    );

    it("should ping two single value (C8oDefaultPingTwoSingleValues)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o).catch((err: C8oException) => {
                expect(err).toBeUndefined();
            });
            await c8o.finalizeInit();
            c8o.callJson(".Ping",
                "var1", "value one",
                "var2", "value two"
            ).then((response: any) => {
                expect(response["document"]["pong"]["var1"]).toBe("value one");
                expect(response["document"]["pong"]["var2"]).toBe("value two");
                done();
                return null;
            })
                .fail(() => {
                    done.fail("error is not supposed to happend");
                });
        })();
    }
    );

    it("should ping two single value and one value multi (C8oDefaultPingTwoSingleValuesOneMulti)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o).catch((err: C8oException) => {
                expect(err).toBeUndefined();
            });
            await c8o.finalizeInit();
            c8o.callJson(".Ping",
                "var1", "value one",
                "var2", "value two",
                "mvar1", ["mvalue one", "mvalue two", "mvalue three"]
            ).then((response: any) => {
                expect(response["document"]["pong"]["var1"]).toBe("value one");
                expect(response["document"]["pong"]["var2"]).toBe("value two");
                expect(response["document"]["pong"]["mvar1"][0]).toBe("mvalue one");
                expect(response["document"]["pong"]["mvar1"][1]).toBe("mvalue two");
                expect(response["document"]["pong"]["mvar1"][2]).toBe("mvalue three");
                expect((response["document"]["pong"]["mvar1"]).length).toBe(3);
                done();
                return null;
            }).fail(() => {
                done.fail("error is not supposed to happend");
            });
        })();
    }
    );

    it("should ping two single value and two value multi (C8oDefaultPingTwoSingleValuesTwoMulti)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o).catch((err: C8oException) => {
                expect(err).toBeUndefined();
            });
            await c8o.finalizeInit();
            c8o.callJson(".Ping",
                "var1", "value one",
                "var2", "value two",
                "mvar1", ["mvalue one", "mvalue two", "mvalue three"],
                "mvar2", ["mvalue2 one"]
            ).then((response: any) => {
                expect(response["document"]["pong"]["var1"]).toBe("value one");
                expect(response["document"]["pong"]["var2"]).toBe("value two");
                expect(response["document"]["pong"]["mvar1"][0]).toBe("mvalue one");
                expect(response["document"]["pong"]["mvar1"][1]).toBe("mvalue two");
                expect(response["document"]["pong"]["mvar1"][2]).toBe("mvalue three");
                expect((response["document"]["pong"]["mvar1"]).length).toBe(3);
                expect(response["document"]["pong"]["mvar2"]).toBe("mvalue2 one");
                done();
                return null;
            }).fail(() => {
                done.fail("error is not supposed to happend");
            });
        })();
    }
    );


    it("should check Json types (C8oCheckJsonTypes)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o).catch((err: C8oException) => {
                expect(err).toBeUndefined();
            });
            await c8o.finalizeInit();
            c8o.callJson(".JsonTypes",
                "var1", "value one",
                "mvar1", ["mvalue one", "mvalue two", "mvalue three"]
            ).then((response: any) => {
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
                let isBool: boolean = (complex["isNull"] == null || complex["isNull"] === undefined);
                expect(isBool).toBeTruthy();
                value = complex["isInt3615"];
                expect(value).toBe(3615);
                value = complex["isStringWhere"];
                expect("where is my string?!").toBe(value);
                value = complex["isDoublePI"];
                expect(value).toBe(3.141592653589793);
                isBool = complex["isBoolTrue"];
                expect(isBool).toBeTruthy();
                //noinspection JSNonASCIINames
                value = complex["ÉlŸz@-node"];
                expect(value).toBe("that's ÉlŸz@");
                done();
                return null;
            }).fail(() => {
                done.fail("error is not supposed to happend");
            });

        })();
    }
    );

    it("should check that sessions are not mixed (CheckNoMixSession)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o).catch((err: C8oException) => {
                expect(err).toBeUndefined();
            });
            await c8o.finalizeInit();
            let ts = new Date().getTime().valueOf() + "";
            c8o.callJson(".SetInSession",
                "ts", ts
            ).then((response: any) => {
                expect(response["document"]["pong"]["ts"]).toBe(ts);
                return c8o.callJson(".GetFromSession");
            })
                .then((response: any) => {
                    expect(response["document"]["session"]["expression"]).toBe(ts);
                    done();
                    return null;
                }).fail(() => {
                    done.fail("error is not supposed to happend");
                });

        })();
    }
    );


    it("should check that one default promise works (C8oDefaultPromiseXmlOne)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o).catch((err: C8oException) => {
                expect(err).toBeUndefined();
            });

            await c8o.finalizeInit();
            c8o.callJson(".Ping", "var1", "step 1").then((response: any, parameters: any) => {
                expect(response["document"]["pong"]["var1"]).toBe("step 1");
                expect(parameters["var1"]).toBe("step 1");
                done();
                return null;
            }).fail(() => {
                done.fail("error is not supposed to happend");
            });
        })();
    }
    );

    it("should check that three default promises works (C8oDefaultPromiseJsonThree)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o).catch((err: C8oException) => {
                expect(err).toBeUndefined();
            });
            await c8o.finalizeInit();
            let xjson: Array<any> = [];
            c8o.callJson(".Ping", "var1", "step 1").then((response: any) => {
                xjson[0] = response;
                return c8o.callJson(".Ping", "var1", "step 2");
            }).then((response: any) => {
                xjson[1] = response;
                return c8o.callJson(".Ping", "var1", "step 3");
            }).then((response: any) => {
                xjson[2] = response;
                expect(xjson[0]["document"]["pong"]["var1"]).toBe("step 1");
                expect(xjson[1]["document"]["pong"]["var1"]).toBe("step 2");
                expect(xjson[2]["document"]["pong"]["var1"]).toBe("step 3");
                done();
                return null;
            }).fail(() => {
                done.fail("error is not supposed to happend");
            });
        })();
    }
    );

    it("should check that a promise could fail (C8oDefaultPromiseFail)", async (done) => {

        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o).catch((err: C8oException) => {
                expect(err).toBeUndefined();
            });
            await c8o.finalizeInit();
            let xjson: Array<any> = [];
            c8o.callJson(".Ping", "var1", "step 1").then((response: any) => {
                xjson[0] = response;
                return c8o.callJson(".Ping", "var1", "step 2");
            }).then((response: any) => {
                xjson[1] = response;
                if (response != null) {
                    throw new C8oException("random failure");
                }
                return c8o.callJson(".Ping", "var1", "step 3");
            }).then((response: any) => {
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

    it("should check that a promise could be nested (C8oDefaultPromiseNested)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o).catch((err: C8oException) => {
                expect(err).toBeUndefined();
            });
            await c8o.finalizeInit();
            let xjson: Array<any> = [];
            c8o.callJson(".Ping", "var1", "step 1").then((response0: any) => {
                xjson[0] = response0;
                return c8o.callJson(".Ping", "var1", "step 2")
                    .then((response1: any) => {
                        xjson[1] = response1;
                        return c8o.callJson(".Ping", "var1", "step 3")
                            .then((response2: any) => {
                                xjson[2] = response2;
                                return c8o.callJson(".Ping", "var1", "step 4");
                            });
                    });
            }).then((response3: any) => {
                xjson[3] = response3;
                return c8o.callJson(".Ping", "var1", "step 5")
                    .then((response4: any) => {
                        xjson[4] = response4;
                        return null;
                    });
            }).then(() => {
                expect(xjson[0]["document"]["pong"]["var1"]).toBe("step 1");
                expect(xjson[1]["document"]["pong"]["var1"]).toBe("step 2");
                expect(xjson[2]["document"]["pong"]["var1"]).toBe("step 3");
                expect(xjson[3]["document"]["pong"]["var1"]).toBe("step 4");
                expect(xjson[4]["document"]["pong"]["var1"]).toBe("step 5");
                done();
                return null;
            }).fail(() => {
                done.fail("error is not supposed to happend");
            });
        })();
    }
    );

    it("should check that a promise could be nested and failed (C8oDefaultPromiseNestedFail)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o).catch((err: C8oException) => {
                expect(err).toBeUndefined();
            });
            await c8o.finalizeInit();
            let xjson: Array<any> = [];
            c8o.callJson(".Ping", "var1", "step 1").then((response0: any) => {
                xjson[0] = response0;
                return c8o.callJson(".Ping", "var1", "step 2")
                    .then((response1: any) => {
                        xjson[1] = response1;
                        return c8o.callJson(".Ping", "var1", "step 3")
                            .then((response2: any) => {
                                xjson[2] = response2;
                                throw new C8oException("random failure");
                            });
                    });
            }).then((response3: any) => {
                xjson[3] = response3;
                return c8o.callJson(".Ping", "var1", "step 5")
                    .then((response4: any) => {
                        xjson[4] = response4;
                        return null;
                    });
            }).fail((error) => {
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

    it("should check that a promise could stored in var (C8oDefaultPromiseInVar)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o).catch((err: C8oException) => {
                expect(err).toBeUndefined();
            });
            await c8o.finalizeInit();
            let xjson: Array<any> = [];
            let promise: any = c8o.callJson(".Ping", "var1", "step 1");
            promise.then((response0: any) => {
                xjson[0] = response0;
                return c8o.callJson(".Ping", "var1", "step 2");
            });
            promise.then((response1: any) => {
                xjson[1] = response1;
                return c8o.callJson(".Ping", "var1", "step 3");
            });
            promise.then((response2: any) => {
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


    it("should check bad requestable (badRequest)", function (done) {
        inject([C8o], async (c8o: C8o) => {
            const settings: any = new C8oSettings().setLogLevelLocal(C8oLogLevel.DEBUG);
            settings
                .setEndPoint(Info.endpoint)
                .setLogRemote(false)
                .setLogLevelLocal(C8oLogLevel.ERROR);
            c8o.init(settings).then(async () => {
                await c8o.finalizeInit();
                c8o.callJson("badRequest")
                    .then(() => {
                        done.fail("it's supposed to triggered an error");
                        return null;
                    })
                    .fail((err, params) => {
                        expect((err as any)["message"]).toContain("is not a valid Convertigo endpoint")
                        done();
                    });
            })
        })();
    });

    it("should check sdk version (CheckVersion)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            let settings: any = new C8oSettings();
            settings
                .setEndPoint(Info.endpoint)
                .setLogRemote(false)
                .setLogLevelLocal(C8oLogLevel.ERROR);
            c8o.init(settings).catch((err: C8oException) => {
                expect(err).toBeUndefined();
            }).then(async () => {
                await c8o.finalizeInit();
                expect(c8o.sdkVersion).toBe(require("../package.json").version);
                done();
            })
        })();
    });

    it("should check someParams (CheckParams)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            let settings: any = new C8oSettings();
            settings
                .setEndPoint(Info.endpoint)
                .setLogRemote(false)
                .setLogLevelLocal(C8oLogLevel.ERROR);
            c8o.init(settings).catch((err: C8oException) => {
                expect(err).toBeUndefined();
            }).then(async () => {
                await c8o.finalizeInit();
                c8o.couchUrl = "http://fakecoururl.com";
                expect(c8o.couchUrl).toBe("http://fakecoururl.com");
                c8o.logC8o = true;
                expect(c8o.logC8o).toBe(true);
                c8o.logLevelLocal = C8oLogLevel.ERROR;
                expect(c8o.logLevelLocal).toBe(C8oLogLevel.ERROR);
                expect(c8o.toString()).toBe("C8o[" + Info.endpoint + "]");
                expect(c8o.endpointIsSecure).toBe(true);
                expect(c8o.endpointHost).toBe(Info.local ? Info.hostLocal : Info.host);
                //expect(c8o.endpointPort).toBe(Info.local ? ":" + Info.portLocal : ":" + Info.port);
                c8o.callJson(null)
                    .then((response: any) => {
                        done.fail("then is not supposed to happend");
                        return null;
                    }
                    )
                    .fail((error) => {
                        expect(error.message).toBe(C8oExceptionMessage.illegalArgumentNullParameter("resquestable"));
                    });
                settings
                    .setTimeout(200)
                    .setTimeout(0)
                    .addClientCertificate("certificate", "password")
                    .addClientCertificate(200, "password")
                    .addCookie("myCookie", "aRandomCookie")
                    .setAuthenticationCookieValue("authenticationCookieValue")
                    .setFullSyncServerUrl("fullSyncServerUrl")
                    .setFullSyncUsername("fullSyncUsername")
                    .setFullSyncPassword("fullSyncPassword")
                    .setFullSyncLocalSuffix("fullSyncLocalSuffix")
                    .setUseEncryption(true);
                c8o.init(settings).then(() => {
                    expect(c8o.fullSyncServerUrl).toBe("fullSyncServerUrl");
                    expect(c8o.fullSyncUsername).toBe("fullSyncUsername");
                    expect(c8o.fullSyncPassword).toBe("fullSyncPassword");
                    settings
                        .setEndPoint("htdrdr:fake.com");
                    c8o.init(settings).catch((err: C8oException) => {
                        expect(err.message).toBe(C8oExceptionMessage.illegalArgumentInvalidURL("htdrdr:fake.com"));
                        let progress: C8oProgress = new C8oProgress();
                        progress.raw = "justanexample";
                        progress.changed = true;
                        let progress2: C8oProgress = new C8oProgress(progress);
                        expect(progress2.raw).toBe(progress.raw);
                        expect(progress2.changed).toBe(false);
                        try {
                            let progress: C8oProgress = new C8oProgress(null);
                        }
                        catch (error) {
                            expect(error.message).not.toBeNull();
                            done();
                        }

                    });
                });
            });
        })();
    }
    );


    it("should log after init (c8ologAfterinit)", (done) => {
        inject([C8o], async (c8o: C8o) => {

            c8o.log.info("Test log after init");
            setTimeout(() => {
                let c8oSettings: C8oSettings = new C8oSettings();
                c8oSettings
                    .setEndPoint(Info.endpoint)
                    .setLogRemote(true)
                    .setLogC8o(true)
                    .setLogLevelLocal(C8oLogLevel.DEBUG)
                    .addHeader("x-convertigo-mb", "7.5.0-beta")
                    .setNormalizeParameters(true)
                    .setKeepSessionAlive(false);

                c8o.init(c8oSettings).then(async () => {
                    await c8o.finalizeInit();
                    setTimeout(() => { done(); }, 2000);
                }).catch((err: C8oException) => {
                    expect(err).toBeUndefined();
                });


            }, 5000);

        })();

    });



    it("should verify C8oExceptionMessages (C8oExceptionsMessages)", async (done) => {
        new C8oRessourceNotFoundException("a", new Error("abc"));
        expect(C8oExceptionMessage.notImplementedFullSyncInterface()).toBe("You are using the default FullSyncInterface which is not implemented");
        expect(C8oExceptionMessage.invalidParameterValue("params", "details")).toBe("The parameter 'params' is invalid, details");
        expect(C8oExceptionMessage.wrongListener(new C8oResponseJsonListener((JSON, Object) => { }))).toBe("The C8oListener class object is not handled");
        expect(C8oExceptionMessage.missingValue("val")).toBe("The val is missing");
        expect(C8oExceptionMessage.unknownValue("valName", "val")).toBe("The valName value val is unknown");
        expect(C8oExceptionMessage.unknownType("valName", "val")).toBe("The valName type " + C8oUtils.getObjectClassName("val") + "is unknown");
        expect(C8oExceptionMessage.ressourceNotFound("ress")).toBe("The ress was not found");
        expect(C8oExceptionMessage.illegalArgumentInvalidFullSyncDatabaseUrl("http://fakeurl.com")).toBe("The fullSync database url 'http://fakeurl.com' is not a valid url");
        expect(C8oExceptionMessage.FullSyncDatabaseInitFailed("dbname")).toBe("Failed to initialize the FullSync database 'dbname'");
        expect(C8oExceptionMessage.MissParameter("paramName")).toBe("The parameter 'paramName' is missing");
        expect(C8oExceptionMessage.InvalidArgumentInvalidURL("http://fakeurl.com")).toBe("'http://fakeurl.com' is not a valid URL");
        expect(C8oExceptionMessage.UnknownFullSyncPolicy("POLICY")).toBe("Unknown the FullSync policy 'POLICY'");
        expect(C8oExceptionMessage.InvalidArgumentInvalidEndpoint("endpoint")).toBe("'endpoint' is not a valid Convertigo endpoint");
        expect(C8oExceptionMessage.InvalidRequestable("endpoint")).toBe("'endpoint' is not a valid requestable.");
        expect(C8oExceptionMessage.InvalidParameterType("a", "b", "c")).toBe("The parameter 'a' must be of type 'b' and not 'c'");
        expect(C8oExceptionMessage.illegalArgumentIncompatibleListener("a", "b")).toBe("The listener type 'a' is incompatible with the response type 'b'");
        expect(C8oExceptionMessage.InvalidArgumentNullParameter("a")).toBe("a must be not null");
        expect(C8oExceptionMessage.InitError()).toBe("Unable to initialize");
        expect(C8oExceptionMessage.InitRsainternalKey()).toBe("Unable to initialize the RSA internal key");
        expect(C8oExceptionMessage.InitCouchManager()).toBe("Unable to initialize the fullSync databases manager");
        expect(C8oExceptionMessage.InitSslSocketFactory()).toBe("Unable to initialize the ssl socket factory");
        expect(C8oExceptionMessage.InitDocumentBuilder()).toBe("Unable to initialize the XML document builder");
        expect(C8oExceptionMessage.ParseStreamToJson()).toBe("Unable to parse the input stream to a json document");
        expect(C8oExceptionMessage.ParseStreamToXml()).toBe("Unable to parse the input stream to an xml document");
        expect(C8oExceptionMessage.parseInputStreamToString()).toBe("Unable to parse the input stream to a string");
        expect(C8oExceptionMessage.parseXmlToString()).toBe("Unable to parse the xml document to a string");
        expect(C8oExceptionMessage.parseRsainternalKey()).toBe("Unable to parse the RSA internal key");
        expect(C8oExceptionMessage.parseQueryEnumeratorToJson()).toBe("Unable to parse the query to a json document");
        expect(C8oExceptionMessage.parseLogsToJson()).toBe("Unable to parse logs to a json document");
        expect(C8oExceptionMessage.parseLogsStreamToJson()).toBe("Unable to parse stream containing logs response to a json document");
        expect(C8oExceptionMessage.parseC8oReplicationResultToJson()).toBe("Unable to parse the replication result to a json document");
        expect(C8oExceptionMessage.parseFullSyncDefaultResponseToJson()).toBe("Unable to parse the default fullSync result to a json document");
        expect(C8oExceptionMessage.parseFullSyncPostDocumentResponseToJson()).toBe("Unable to parse the post document fullSync result to a json document");
        expect(C8oExceptionMessage.parseStringToJson()).toBe("Unable to parse the string to a JSON document");
        expect(C8oExceptionMessage.ParseStringToObject("a")).toBe("Unable to parse the string (JSON):string to an object of type ");
        expect(C8oExceptionMessage.StringToJsonValue("a")).toBe("Unable to translate the string 'a' to a JSON value");
        expect(C8oExceptionMessage.retrieveRsainternalKey()).toBe("Error during http request to get the RSA internal key");
        expect(C8oExceptionMessage.httpLogs()).toBe("Error during http request to send logs to the Convertigo server");
        expect(C8oExceptionMessage.couchRequestGetView()).toBe("Unable to run the view query");
        expect(C8oExceptionMessage.couchRequestAllDocuments()).toBe("Unable to run the all query");
        expect(C8oExceptionMessage.couchRequestResetDatabase()).toBe("Unable to run the reset query");
        expect(C8oExceptionMessage.couchRequestInvalidRevision()).toBe("The revision is invalid");
        expect(C8oExceptionMessage.couchRequestPostDocument()).toBe("Unable to run the post document query");
        expect(C8oExceptionMessage.unableToGetFullSyncDatabase("a")).toBe("Unable to get the fullSync database 'a' from the manager");
        expect(C8oExceptionMessage.couchNullResult()).toBe("An error occured during the fullSync request, its result is null");
        expect(C8oExceptionMessage.couchFullSyncNotActive()).toBe("Unable to use fullSync because it was not activated at the initialization");
        C8oExceptionMessage.CouchDeleteFailed();
        C8oExceptionMessage.fullSyncGetOrCreateDatabase("db");
        C8oExceptionMessage.fullSyncHandleResponse();
        C8oExceptionMessage.loadKeyStore();
        C8oExceptionMessage.trustAllCertificates();
        C8oExceptionMessage.serverKeyStore();
        C8oExceptionMessage.illegalArgumentNotFoundFullSyncView("a", "b");
        C8oExceptionMessage.unhandledResponseType("a");
        C8oExceptionMessage.unhandledListenerType("a");
        C8oExceptionMessage.WrongListener(new C8oResponseJsonListener((JSON, Object) => { }));
        C8oExceptionMessage.wrongResult("a");
        C8oExceptionMessage.unhandledFullSyncRequestable("a");
        C8oExceptionMessage.closeInputStream();
        C8oExceptionMessage.deserializeJsonObjectFromString("a");
        C8oExceptionMessage.postDocument();
        C8oExceptionMessage.getNameValuePairObjectValue("a");
        C8oExceptionMessage.queryEnumeratorToJSON();
        C8oExceptionMessage.queryEnumeratorToXML();
        C8oExceptionMessage.addparametersToQuery();
        C8oExceptionMessage.putJson();
        C8oExceptionMessage.changeEventToJson();
        C8oExceptionMessage.initC8oSslSocketFactory();
        C8oExceptionMessage.createSslContext();
        C8oExceptionMessage.keyManagerFactoryInstance();
        C8oExceptionMessage.initKeyManagerFactory();
        C8oExceptionMessage.InitHttpInterface();
        C8oExceptionMessage.trustManagerFactoryInstance();
        C8oExceptionMessage.initTrustManagerFactory();
        C8oExceptionMessage.initSslContext();
        C8oExceptionMessage.initCipher();
        C8oExceptionMessage.urlEncode();
        C8oExceptionMessage.getParametersStringBytes();
        C8oExceptionMessage.encodeParameters();
        C8oExceptionMessage.RunHttpRequest();
        C8oExceptionMessage.generateRsainternalKey();
        C8oExceptionMessage.keyFactoryInstance();
        C8oExceptionMessage.getCipherInstance();
        C8oExceptionMessage.entryNotFound("a");
        C8oExceptionMessage.c8oCallRequestToJson();
        C8oExceptionMessage.getJsonKey("a");
        C8oExceptionMessage.jsonValueToXML();
        C8oExceptionMessage.inputStreamToXML();
        C8oExceptionMessage.inputStreamReaderEncoding();
        C8oExceptionMessage.readLineFromBufferReader();
        C8oExceptionMessage.GetLocalCacheParameters();
        C8oExceptionMessage.GetLocalCachePolicy("a");
        C8oExceptionMessage.fullSyncJsonToXML();
        C8oExceptionMessage.takeLog();
        C8oExceptionMessage.remoteLogHttpRequest();
        C8oExceptionMessage.getInputStreamFromHttpResponse();
        C8oExceptionMessage.inputStreamToJSON();
        C8oExceptionMessage.httpInterfaceInstance();
        C8oExceptionMessage.FullSyncInterfaceInstance();
        C8oExceptionMessage.getDocumentFromDatabase("a");
        C8oExceptionMessage.FullSyncReplicationFail("a", "b");
        C8oExceptionMessage.localCachePolicyIsDisable();
        C8oExceptionMessage.illegalArgumentInvalidLocalCachePolicy("a");
        C8oExceptionMessage.timeToLiveExpired();
        C8oExceptionMessage.InvalidLocalCacheResponseInformation();
        C8oExceptionMessage.overrideDocument();
        C8oExceptionMessage.handleFullSyncRequest();
        C8oExceptionMessage.serializeC8oCallRequest();
        C8oExceptionMessage.getResponseFromLocalCache();
        C8oExceptionMessage.getResponseFromLocalCacheDocument();
        C8oExceptionMessage.saveResponseToLocalCache();
        C8oExceptionMessage.MissingLocalCacheResponseDocument();
        C8oExceptionMessage.clientKeyStore();
        done();
    }
    );

    it("should returns and IllegalArgument Exception (C8oBadEndpoint)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            let settings: any = new C8oSettings();
            settings.setDefaultDatabaseName("retaildb")
                .setLogC8o(true)
                .setLogLevelLocal(C8oLogLevel.DEBUG)
                .setEndPoint(Info.http + Info.host + ":" + Info.port);
            c8o.init(settings).catch((err: C8oException) => {
                expect(err.message).toBe(C8oExceptionMessage.illegalArgumentInvalidEndpoint(Info.http + Info.host + ":" + Info.port));
                done();
            });
        })();
    }
    );



    it("should genrerates exceptions (C8oUnknownHostCallAndLog)",
        async(inject([C8o], async (c8o: C8o) => {
            let exceptionLog;
            let settings: any = new C8oSettings();
            settings
                .setEndPoint("http://" + Info.host + "ee" + Info.port + Info.project_path)
                .setLogOnFail((exception: Error) => {
                    exceptionLog = exception;
                })
                .setLogLevelLocal(C8oLogLevel.FATAL);
            c8o.init(settings)
                .then(async () => {
                    await c8o.finalizeInit();
                    c8o.log.warn("must fail log");
                    setTimeout(() => {
                        c8o.callJson(".Ping")
                            .then(() => {
                                return null;
                            })
                            .fail((err) => {
                                expect(err).not.toBeNull();
                                expect(err instanceof C8oException).toBeTruthy();
                                let expection = err.cause;
                                expect(expection instanceof HttpErrorResponse).toBeTruthy(); expect(exceptionLog).not.toBeNull();
                                expect(exceptionLog instanceof C8oException).toBeTruthy();
                                exceptionLog = exceptionLog["cause"];
                                expect(expection instanceof HttpErrorResponse).toBeTruthy();
                            });
                    }, 250);
                })
                .catch((err: C8oException) => {
                    expect(err).toBeUndefined();
                });
        }))
    );

    it("should check that Fullsync Post Get Delete works (C8oFsPostGetDelete)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o_FS).catch((err: C8oException) => {
                expect(err).toBeUndefined();
            });
            await c8o.finalizeInit();
            let myId: string = "C8oFsPostGetDelete-" + new Date().getTime().valueOf();
            let id: string;
            c8o.callJson("fs://.reset")
                .then(() => {
                    return c8o.callJson("fs://.post", "_id", myId);
                })
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    id = response["id"];
                    expect(id).toBe(myId);
                    return c8o.callJson("fs://.get", "docid", id);
                })
                .then((response: any) => {
                    expect(response["_id"]).toBe(myId);
                    return c8o.callJson("fs://.delete", "docid", id);
                })
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    return c8o.callJson("fs://.get", "docid", id);
                })
                .then(() => {
                    done.fail("this \"then\" is not supposed to be executed");
                    return null;
                })
                .fail((error) => {
                    expect(error instanceof C8oException).toBeTruthy();
                    done();
                });
        })();
    }
    );

    it("should check that Fullsync Post Get Delete works with observable (C8oFsPostGetDeleteObs)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o_FS).catch((err: C8oException) => {
                expect(err).toBeUndefined();
            });
            await c8o.finalizeInit();
            let myId: string = "C8oFsPostGetDelete-" + new Date().getTime().valueOf();
            let id: string;
            c8o.callJson("fs://.reset")
                .toObservable()
                .subscribe(() => {
                    c8o.callJson("fs://.post", "_id", myId)
                        .toObservable()
                        .subscribe(next => {
                            expect(next.response["ok"]).toBeTruthy();
                            id = next.response["id"];
                            expect(id).toBe(myId);
                        },
                            error => {
                                done.fail("error is not supposed to happend");
                            },
                            () => {
                                c8o.callJson("fs://.get", "docid", id)
                                    .toObservable()
                                    .subscribe(next => {
                                        expect(next.response["_id"]).toBe(myId);
                                    },
                                        error => {
                                            done.fail("error is not supposed to happend");
                                        },
                                        () => {
                                            c8o.callJson("fs://.delete", "docid", id)
                                                .toObservable()
                                                .subscribe(next => {
                                                    expect(next.response["ok"]).toBeTruthy();
                                                },
                                                    error => {
                                                        done.fail("error is not supposed to happend");
                                                    },
                                                    () => {
                                                        c8o.callJson("fs://.get", "docid", id)
                                                            .toObservable()
                                                            .subscribe(next => {
                                                                done.fail("this \"then\" is not supposed to be executed");
                                                            },
                                                                error => {
                                                                    expect(error instanceof C8oException).toBeTruthy();
                                                                    done();
                                                                },
                                                                () => {

                                                                });
                                                    });
                                        });
                            })
                });
        })();
    }
    );

    it("should check that Fullsync Post Get Delete works with rev (C8oFsPostGetDeleteRev)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o_FS).catch((err: C8oException) => {
                expect(err).toBeUndefined();
            });
            await c8o.finalizeInit();
            let myId: string = "C8oFsPostGetDeleteRev-" + new Date().getTime().valueOf();
            let rev: string;
            c8o.callJson("fs://.reset")
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    return c8o.callJson("fs://.post", "_id", myId);
                })
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    rev = response["rev"];
                    return c8o.callJson("fs://.delete", "docid", myId, "rev", "1-123456");
                })
                .then(() => {
                    done.fail("this \"then\" is not supposed to be executed");
                    return null;
                })
                .fail((error) => {
                    expect(error.constructor).toBe(C8oException);
                    // expect(false).toBeTruthy();
                    c8o.callJson("fs://.delete", "docid", myId, "rev", rev)
                        .then((response: any) => {
                            expect(response["ok"]).toBeTruthy();
                            return c8o.callJson("fs://.get", "docid", myId);
                        })
                        .then(() => {
                            done.fail("this \"then\" is not supposed to be executed");
                            return null;
                        })
                        .fail((error) => {
                            expect(error instanceof C8oException).toBeTruthy();
                            done();
                        });
                });
        })();
    }
    );

    it("should check that Fullsync Post Get Destoy Create works (C8oFsPostGetDestroyCreate)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o_FS).catch((err: C8oException) => {
                expect(err).toBeUndefined();
            });
            await c8o.finalizeInit();
            let ts: string = "ts=" + new Date().getTime().valueOf();
            let ts2: string = ts + "@test";
            let id: string;
            let rev: string;
            c8o.callJson("fs://.reset")
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    return c8o.callJson("fs://.post", "ts", ts);
                })
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    id = response["id"];
                    rev = response["rev"];
                    return c8o.callJson("fs://.post", "_id", id, "_rev", rev, "ts", ts, "ts2", ts2);
                })
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    return c8o.callJson("fs://.get", "docid", id);
                })
                .then((response: any) => {
                    expect(response["ts"]).toBe(ts);
                    expect(response["ts2"]).toBe((ts2));
                    return c8o.callJson("fs://.destroy");
                })
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    return c8o.callJson("fs://.create");
                })
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    return c8o.callJson("fs://.get", "docid", id);
                })
                .then(() => {
                    done.fail("this \"then\" is not supposed to be executed");
                    return null;
                })
                .fail((error) => {
                    expect(error instanceof C8oException).toBeTruthy();
                    done();
                });
        })();
    }
    );

    it("should check that Fullsync Post Reset works (C8oFsPostReset)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o_FS).catch((err: C8oException) => {
                expect(err).toBeUndefined();
            });
            await c8o.finalizeInit();
            let id: string;
            c8o.callJson("fs://.reset")
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    return c8o.callJson("fs://.post");
                })
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    id = response["id"];
                    return c8o.callJson("fs://.reset");
                })
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    return c8o.callJson("fs://.get", "docid", id);
                })
                .then(() => {
                    done.fail("this \"then\" is not supposed to be executed");
                    return null;
                })
                .fail((error) => {
                    expect(error instanceof C8oException).toBeTruthy();
                    done();
                });
        })();
    }
    );

    it("should check that Fullsync Post on existing is not working(C8oFsPostExisting)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o_FS).catch((err: C8oException) => {
                expect(err).toBeUndefined();
            });
            await c8o.finalizeInit();
            let id: string;
            c8o.callJson("fs://.reset")
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    return c8o.callJson("fs://.post");
                })
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    id = response["id"];
                    return c8o.callJson("fs://.post", "_id", id);
                })
                .then(() => {
                    done.fail("this \"then\" is not supposed to be executed");
                    return null;
                })
                .fail((error) => {
                    expect(error instanceof C8oException).toBeTruthy();
                    done();
                });
        })();
    }
    );

    it("should check that Fullsync Post on existing with policy none is not working(C8oFsPostExistingPolicyNone)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o_FS).catch((err: C8oException) => {
                expect(err).toBeUndefined();
            });
            await c8o.finalizeInit();
            let id: string;
            c8o.callJson("fs://.reset")
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    return c8o.callJson("fs://.post", C8o.FS_POLICY, C8o.FS_POLICY_NONE);
                })
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    id = response["id"];
                    return c8o.callJson("fs://.post", C8o.FS_POLICY, C8o.FS_POLICY_NONE, "_id", id);
                })
                .then(() => {
                    done.fail("this \"then\" is not supposed to be executed");
                    return null;
                })
                .fail((error) => {
                    expect(error instanceof C8oException).toBeTruthy();
                    done();
                });
        })();
    }
    );

    it("should check that Fullsync Post on existing with policy create works (C8oFsPostExistingPolicyCreate)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o_FS).catch(() => {
                done.fail("error is not supposed to happend");
            });
            await c8o.finalizeInit();
            let id: string;
            let myId: string = "C8oFsPostExistingPolicyCreate-" + new Date().getTime().valueOf();
            c8o.callJson("fs://.reset")
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    return c8o.callJson("fs://.post", "_id", myId);
                })
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    id = response["id"];
                    expect(id).toBe(myId);
                    return c8o.callJson("fs://.post", C8o.FS_POLICY, C8o.FS_POLICY_CREATE, "_id", id);
                })
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    expect(response["id"]).not.toBe(myId);
                    done();
                    return null;
                })
                .fail(() => {
                    done.fail("error is not supposed to happend");
                });
        })();
    }
    );


    it("should check that Fullsync Post on existing with policy override works (C8oFsPostExistingPolicyOverride)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o_FS).catch(() => {
                done.fail("error is not supposed to happend");
            });
            await c8o.finalizeInit();
            let id: string;
            let myId: string = "C8oFsPostExistingPolicyOverride-" + new Date().getTime().valueOf();
            c8o.callJson("fs://.reset")
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    return c8o.callJson("fs://.post",
                        C8o.FS_POLICY, C8o.FS_POLICY_OVERRIDE,
                        "_id", myId,
                        "a", 1,
                        "b", 2
                    );
                })
                .then((response: any) => {
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
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    id = response["id"];
                    expect(id).toBe(myId);
                    return c8o.callJson("fs://.get", "docid", myId);
                })
                .then((response: any) => {
                    expect(response["a"]).toBe(3);
                    expect(response["b"]).toBe(undefined);
                    expect(response["c"]).toBe(4);
                    done();
                    return null;
                })
                .fail(() => {
                    done.fail("error is not supposed to happend");
                });
        })();
    }
    );

    it("should check that Fullsync Post on existing with policy merge works (C8oFsPostExistingPolicyMerge)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o_FS).catch(() => {
                done.fail("error is not supposed to happend");
            });
            await c8o.finalizeInit();
            let id: string;
            let myId: string = "C8oFsPostExistingPolicyMerge-" + new Date().getTime().valueOf();
            c8o.callJson("fs://.reset")
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    return c8o.callJson("fs://.post",
                        C8o.FS_POLICY, C8o.FS_POLICY_MERGE,
                        "_id", myId,
                        "a", 1,
                        "b", 2
                    );
                })
                .then((response: any) => {
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
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    id = response["id"];
                    expect(id).toBe(myId);
                    return c8o.callJson("fs://.get", "docid", myId);
                })
                .then((response: any) => {
                    expect(response["a"]).toBe(3);
                    expect(response["b"]).toBe(2);
                    expect(response["c"]).toBe(4);
                    done();
                    return null;
                })
                .fail(() => {
                    done.fail("error is not supposed to happend");
                });
        })();
    }
    );

    it("should check that Fullsync Post on existing with policy merge works with sub values (C8oFsPostExistingPolicyMergeSub)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o_FS).catch(() => {
                done.fail("error is not supposed to happend");
            });
            await c8o.finalizeInit();

            let myId: string = "C8oFsPostExistingPolicyMergeSub-" + new Date().getTime().valueOf();
            let sub_c: Object = {};
            let sub_f: Object = {};
            sub_f["g"] = true;
            sub_f["h"] = ["one", "two", "three", "four"];
            sub_c["d"] = 3;
            sub_c["e"] = "four";
            sub_c["f"] = sub_f;

            c8o.callJson("fs://.reset")
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    return c8o.callJson("fs://.post",
                        "_id", myId,
                        "a", 1,
                        "b", -2,
                        "c", sub_c
                    );
                })
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    return c8o.callJson("fs://.post",
                        C8o.FS_POLICY, C8o.FS_POLICY_MERGE,
                        "_id", myId,
                        "i", ["5", 6, 7.1, null],
                        "c.f.j", "good",
                        "c.f.h", [true, false]
                    );
                })
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    return c8o.callJson("fs://.post",
                        C8o.FS_POLICY, C8o.FS_POLICY_MERGE,
                        C8o.FS_SUBKEY_SEPARATOR, "<>",
                        "_id", myId,
                        "c<>i-j", "great"
                    );
                })
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    return c8o.callJson("fs://.get",
                        "docid", myId
                    );
                })
                .then((response: any) => {
                    delete response["_rev"];
                    expect(response["_id"]).toBe(myId);
                    delete response["_id"];
                    let expectedResponse = "{\"c\":{\"i-j\":\"great\",\"f\":{\"h\":[true,false,\"three\",\"four\"],\"j\":\"good\",\"g\":true},\"d\":3,\"e\":\"four\"},\"i\":[\"5\",6,7.1,null],\"a\":1,\"b\":-2}";
                    expect(JSON.stringify(response)).toBe(expectedResponse);
                    done();
                    return null;
                })
                .fail(() => {
                    done.fail("error is not supposed to happend");
                });
        })();
    }
    );

    it("should check that Fullsync Merge object works (C8oFsMergeObject)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o_FS).catch(() => {
                done.fail("error is not supposed to happend");
            });

            await c8o.finalizeInit();

            let myId: string = "C8oFsPostExistingPolicyMergeSub-" + new Date().getTime().valueOf();
            let plainObjectA: PlainObjectA = new PlainObjectA();
            plainObjectA.name = "plain A";
            plainObjectA.bObjects = [];

            plainObjectA.bObject = new PlainObjectB();
            plainObjectA.bObject.name = "plain B 1";
            plainObjectA.bObject.num = 1;
            plainObjectA.bObject.enabled = true;
            plainObjectA.bObjects.push(plainObjectA.bObject);

            plainObjectA.bObject = new PlainObjectB();
            plainObjectA.bObject.name = "plain B 2";
            plainObjectA.bObject.num = 2;
            plainObjectA.bObject.enabled = false;
            plainObjectA.bObjects.push(plainObjectA.bObject);

            plainObjectA.bObject = new PlainObjectB();
            plainObjectA.bObject.name = "plain B -777";
            plainObjectA.bObject.num = -777;
            plainObjectA.bObject.enabled = true;

            c8o.callJson("fs://.reset")
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    return c8o.callJson("fs://.post",
                        "_id", myId,
                        "a obj", plainObjectA
                    );
                })
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    plainObjectA.bObjects[1].name = "plain B 2 bis";
                    return c8o.callJson("fs://.post",
                        C8o.FS_POLICY, C8o.FS_POLICY_MERGE,
                        "_id", myId,
                        "a obj.bObjects", plainObjectA.bObjects
                    );
                })
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    plainObjectA.bObject = new PlainObjectB();
                    plainObjectA.bObject.name = "plain B -666";
                    plainObjectA.bObject.num = -666;
                    plainObjectA.bObject.enabled = false;

                    return c8o.callJson("fs://.post",
                        C8o.FS_POLICY, C8o.FS_POLICY_MERGE,
                        "_id", myId,
                        "a obj.bObject", plainObjectA.bObject
                    );
                })
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    return c8o.callJson("fs://.post",
                        C8o.FS_POLICY, C8o.FS_POLICY_MERGE,
                        "_id", myId,
                        "a obj.bObject.enabled", true
                    );
                })
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    return c8o.callJson("fs://.get",
                        "docid", myId
                    );
                })
                .then((response: any) => {
                    delete response["_rev"];
                    expect(response["_id"]).toBe(myId);
                    delete response["_id"];
                    let expectedResponse = "{\"a obj\":{\"bObject\":{\"enabled\":true,\"name\":\"plain B -666\",\"num\":-666},\"bObjects\":[{\"name\":\"plain B 1\",\"num\":1,\"enabled\":true},{\"name\":\"plain B 2 bis\",\"num\":2,\"enabled\":false}],\"name\":\"plain A\"}}";
                    expect(JSON.stringify(response)).toBe(expectedResponse);
                    done();
                    return null;
                })
                .fail(() => {
                    done.fail("error is not supposed to happend");
                });
        })();
    }
    );

    it("should check that Fullsync post get works on several bases (C8oFsPostGetMultibase)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o_FS).catch(() => {
                done.fail("error is not supposed to happend");
            });
            await c8o.finalizeInit();
            let myId: string = "C8oFsPostGetMultibase-" + new Date().getTime().valueOf();
            c8o.callJson("fs://.reset")
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    return c8o.callJson("fs://notdefault.reset");
                })
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    return c8o.callJson("fs://.post",
                        "_id", myId
                    );
                })
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    return c8o.callJson("fs://notdefault.get", "docid", myId);
                })
                .then(() => {
                    done.fail("this \"then\" is not supposed to be executed");
                    return null;
                })
                .fail((error) => {
                    expect(error instanceof C8oException).toBeTruthy();
                    c8o.callJson("fs://notdefault.post", "_id", myId)
                        .then((response: any) => {
                            expect(response["ok"]).toBeTruthy();
                            return c8o.callJson("fs://notdefault.get", "docid", myId);
                        })
                        .then((response: any) => {
                            expect(response["_id"]).toBe(myId);
                            done();
                            return null;
                        })
                        .fail(() => {
                            done.fail("error is not supposed to happend");
                        });
                });
        })();
    }
    );

    it("should check that Fullsync replicate ano and auth (C8oFsReplicateAnoAndAuth)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o_FS_PULL).catch((error) => {
                done.fail("error is not supposed to happend during init");
            });
            await c8o.finalizeInit();
            c8o.callJson(".InitFsPull")
                .then((response: any) => {
                    expect(response["document"]["ok"]).toBeTruthy();
                    return c8o.callJson("fs://.reset");
                })
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    return c8o.callJson("fs://.get", "docid", "258");
                })
                .then(() => {
                    done.fail("this \"then\" is not supposed to be executed");
                    return null;
                })
                .fail((error) => {
                    expect(error instanceof C8oException).toBeTruthy();
                    c8o.callJson("fs://.replicate_pull")
                        .then((response: any) => {
                            expect(response["ok"]).toBeTruthy();
                            return c8o.callJson("fs://.get", "docid", "258");
                        })
                        .then((response: any) => {
                            expect(response["data"]).toBe("258");
                            return c8o.callJson("fs://.get", "docid", "456");
                        })
                        .then(() => {
                            done.fail("this \"then\" is not supposed to be executed");
                            return null;
                        })
                        .fail((error2) => {
                            expect(error2 instanceof C8oException).toBeTruthy();
                            c8o.callJson("fs://.reset").then((resp) => {
                                c8o.callJson(".LoginTesting")

                                    .then((response: any) => {
                                        expect(response["document"]["authenticatedUserID"]).toBe("testing_user");
                                        return c8o.callJson("fs://.replicate_pull");
                                    })
                                    .then((response: any) => {
                                        expect(response["ok"]).toBeTruthy();
                                        return c8o.callJson("fs://.get", "docid", "456");
                                    })
                                    .then((response: any) => {
                                        expect(response["data"]).toBe("456");
                                        return null; // c8o.callJson(".LogoutTesting");
                                    })
                                    .then(() => {
                                        done();
                                        return null;
                                    })
                                    .fail((error) => {
                                        done.fail("error is not supposed to happend");
                                    });
                                return null;
                            })

                        });
                });
        })();
    }
    );




    it("should check that Fullsync replicate pull with progess(C8oFsReplicatePullProgress)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o_FS_PULL).catch(() => {
                done.fail("error is not supposed to happend");
            });
            await c8o.finalizeInit();
            let count: number = 0;
            let first: string = null;
            let last: string = "";
            c8o.callJson(".InitFsPull")
                .then((response: any) => {
                    expect(response["document"]["ok"]).toBeTruthy();
                    return c8o.callJson("fs://.reset");
                })
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    return c8o.callJson(".LoginTesting");
                })
                .then((response: any) => {
                    expect(response["document"]["authenticatedUserID"]).toBe("testing_user");
                    return c8o.callJson("fs://.replicate_pull");
                })
                .progress((c8oProgress: C8oProgress) => {
                    count++;
                    if (first == null) {
                        expect(c8oProgress.status).toBe("change");
                        let task = c8oProgress.taskInfo;
                        let raw = c8oProgress.raw;
                        first = c8oProgress.toString();
                    }
                    last = c8oProgress.toString();
                })
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    return c8o.callJson("fs://.get", "docid", "456");
                })
                .then((response: any) => {
                    expect(response["data"]).toBe("456");
                    expect(first).toBe("pull: 8/8 (running)");
                    expect(last).toBe("pull: 8/8 (done)");
                    expect(count).toBe(2);
                    return c8o.callJson(".LogoutTesting");
                })
                .then(() => {
                    done();
                })
                .fail(() => {
                    done.fail("error is not supposed to happend");
                });
        })();
    }
    );

    it("should check that Fullsync replicate pull ano auth and view works(C8oFsReplicatePullAnoAndAuthView)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o_FS_PULL).catch(() => {
                done.fail("error is not supposed to happend");
            });
            await c8o.finalizeInit();
            let value: string = "";
            let valueN: number;
            c8o.callJson(".InitFsPull")
                .then((response: any) => {
                    expect(response["document"]["ok"]).toBeTruthy();
                    return c8o.callJson("fs://.reset");
                })
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    return c8o.callJson("fs://.replicate_pull");
                })
                .then((responses: any) => {
                    expect(responses["ok"]).toBeTruthy();
                    return c8o.callJson("fs://.view",
                        "ddoc", "design",
                        "view", "reverse"
                    );
                })
                .then((response: any) => {
                    valueN = response["rows"][0]["value"];
                    expect(774.0).toBe(valueN);
                    return c8o.callJson("fs://.view",
                        "ddoc", "design",
                        "view", "reverse",
                        "reduce", false);
                })
                .then((response: any) => {
                    value = response["rows"][1]["key"];
                    expect("852").toBe(value);
                    return c8o.callJson("fs://.view",
                        "ddoc", "design",
                        "view", "reverse",
                        "startkey", "0",
                        "endkey", "9");
                })
                .then((response: any) => {
                    valueN = response["rows"][0]["value"];
                    expect(405.0).toBe(valueN);
                    return c8o.callJson("fs://.reset");
                })
                .then((response: any) => {
                    return c8o.callJson(".LoginTesting");
                })
                .then((response: any) => {
                    expect(response["document"]["authenticatedUserID"]).toBe("testing_user");
                    return c8o.callJson("fs://.replicate_pull");
                })
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    return c8o.callJson("fs://.view",
                        "ddoc", "design",
                        "view", "reverse");
                })
                .then((response: any) => {
                    valueN = response["rows"][0]["value"];
                    expect(2142.0).toBe(valueN);
                    return c8o.callJson("fs://.view",
                        "ddoc", "design",
                        "view", "reverse",
                        "reduce", false);
                })
                .then((response: any) => {
                    value = response["rows"][1]["key"];
                    expect(value).toBe("654");
                    return c8o.callJson("fs://.post", "_id", "111", "data", "16");
                })
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    return c8o.callJson("fs://.view",
                        "ddoc", "design",
                        "view", "reverse",
                        "startkey", "0",
                        "endkey", "9");
                })
                .then((response: any) => {
                    valueN = response["rows"][0]["value"];
                    expect(1000.0).toBe(valueN);
                    return c8o.callJson(".LogoutTesting");
                })

                .then(() => {
                    done();
                })
                .fail((error) => {
                    c8o.callJson(".LogoutTesting");
                    done.fail("error is not supposed to happend");
                });
        })();
    }
    );

    it("should check that Fullsync view array key works(C8oFsViewArrayKey)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o_FS_PULL).catch(() => {
                done.fail("error is not supposed to happend");
            });
            await c8o.finalizeInit();
            c8o.callJson(".InitFsPull")
                .then((response: any) => {
                    expect(response["document"]["ok"]).toBeTruthy();
                    return c8o.callJson("fs://.reset");
                })
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    return c8o.callJson(".LoginTesting");
                })
                .then((response: any) => {
                    expect(response["document"]["authenticatedUserID"]).toBe("testing_user");
                    return c8o.callJson("fs://.replicate_pull");
                })
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    return c8o.callJson("fs://.view",
                        "ddoc", "design",
                        "view", "array",
                        "startkey", "[\"1\"]");
                })
                .then(() => {
                    return c8o.callJson(".LogoutTesting");
                })
                .then(() => {
                    done();
                })
                .fail(() => {
                    c8o.callJson(".LogoutTesting");
                    done.fail("error is not supposed to happend");
                });

        })();
    }
    );

    it("should check that Fullsync repliacte pull get all works(C8oFsReplicatePullGetAll)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o_FS_PULL).catch(() => {
                done.fail("error is not supposed to happend");
            });
            await c8o.finalizeInit();
            c8o.callJson(".InitFsPull")
                .then((response: any) => {
                    expect(response["document"]["ok"]).toBeTruthy();
                    return c8o.callJson("fs://.reset");
                })
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    return c8o.callJson(".LoginTesting");
                })
                .then((response: any) => {
                    expect(response["document"]["authenticatedUserID"]).toBe("testing_user");
                    return c8o.callJson("fs://.replicate_pull");
                })
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    return c8o.callJson("fs://.all");
                })
                .then((response: any) => {
                    expect(response["rows"].length).toBe(8);
                    expect(response["rows"][5]["key"]).toBe("789");
                    expect(response["rows"][5]["doc"]).toBeUndefined();
                    return c8o.callJson("fs://.all", "include_docs", true);
                })
                .then((response: any) => {
                    expect(response["rows"].length).toBe(8);
                    expect(response["rows"][5]["key"]).toBe("789");
                    expect(response["rows"][5]["doc"]["~c8oAcl"]).toBe("testing_user");
                    return c8o.callJson("fs://.all", "limit", 2);
                })
                .then((response: any) => {
                    expect(response["rows"].length).toBe(2);
                    expect(response["rows"][1]["key"]).toBe("147");
                    expect(response["rows"][1]["doc"]).toBeUndefined();
                    return c8o.callJson("fs://.all",
                        "include_docs", true,
                        "limit", 3,
                        "skip", 2
                    );
                })
                .then((response: any) => {
                    expect(response["rows"].length).toBe(3);
                    expect(response["rows"][1]["key"]).toBe("369");
                    expect(response["rows"][1]["doc"]["type"]).toBe("doc");
                    return c8o.callJson(".LogoutTesting");
                })
                .then(() => {
                    done();
                })
                .fail(() => {
                    c8o.callJson(".LogoutTesting");
                    done.fail("error is not supposed to happend");
                });

        })();
    }
    );
    it("should check that Fullsync repliacte push auth works(C8oFsReplicatePushAuth)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o_FS_PUSH).catch(() => {
                done.fail("error is not supposed to happend");
            });
            await c8o.finalizeInit();
            let id = "C8oFsReplicatePushAnoAndAuth-" + new Date().getTime().valueOf();
            c8o.callJson(".InitFsPush")
                .then((response: any) => {
                    expect(response["document"]["ok"]).toBeTruthy();
                    return c8o.callJson("fs://.reset");
                })
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    return c8o.callJson("fs://.post",
                        "_id", id,
                        "data", "777",
                        "bool", true,
                        "int", 777);
                })
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    return c8o.callJson(".LoginTesting");
                })
                .then((response: any) => {
                    expect(response["document"]["authenticatedUserID"]).toBe("testing_user");
                    return c8o.callJson("fs://.replicate_push");
                })
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    return c8o.callJson(".qa_fs_push.GetDocument", "_use_docid", id);
                })
                .then((response: any) => {
                    expect(response["document"]["couchdb_output"]["data"]).toBe("777");
                    expect(response["document"]["couchdb_output"]["int"]).toBe(777);
                    expect(response["document"]["couchdb_output"]["~c8oAcl"]).toBe("testing_user");
                    return c8o.callJson(".LogoutTesting");
                })
                .then(() => {
                    done();
                })
                .fail(() => {
                    c8o.callJson(".LogoutTesting");
                    done.fail("error is not supposed to happend");
                });

        })();
    }
    );

    it("should check that Fullsync repliacte push auth progress works(C8oFsReplicatePushAuthProgress)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o_FS_PUSH).catch(() => {
                done.fail("error is not supposed to happend");
            });
            await c8o.finalizeInit();
            let id = "C8oFsReplicatePushAuthProgress-" + new Date().getTime().valueOf();
            c8o.callJson(".InitFsPush")
                .then((response: any) => {
                    expect(response["document"]["ok"]).toBeTruthy();
                    return c8o.callJson("fs://.reset");
                })
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    return c8o.callJson("fs://.post",
                        "_id", id,
                        "data", "777",
                        "bool", true,
                        "int", 777);
                })
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    return c8o.callJson(".LoginTesting");
                })
                .then((response: any) => {
                    expect(response["document"]["authenticatedUserID"]).toBe("testing_user");
                    return c8o.callJson("fs://.replicate_push");
                })
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    return c8o.callJson(".qa_fs_push.GetDocument", "_use_docid", id);
                })
                .then((response: any) => {
                    expect(response["document"]["couchdb_output"]["data"]).toBe("777");
                    expect(response["document"]["couchdb_output"]["int"]).toBe(777);
                    expect(response["document"]["couchdb_output"]["~c8oAcl"]).toBe("testing_user");
                    return c8o.callJson(".LogoutTesting");
                })
                .then(() => {
                    done();
                })
                .fail(() => {
                    c8o.callJson(".LogoutTesting");
                    done.fail("error is not supposed to happend");
                });

        })();
    }
    );

    it("should check that Fullsync repliacte sync continuous progress works(C8oFsReplicateSyncContinuousProgress)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o_FS_PUSH).catch(() => {
                done.fail("error is not supposed to happend");
            });
            await c8o.finalizeInit();
            let doneOnce: boolean = false;
            let id = "C8oFsReplicatePushAuthProgress-" + new Date().getTime().valueOf();
            let count = 0;
            let firstPush: string = null;
            let lastPush: string = null;
            let livePush: string = null;
            let firstPull: string = null;
            let lastPull: string = null;
            let livePull: string = null;
            c8o.callJson(".InitFsPush")
                .then((response: any) => {
                    expect(response["document"]["ok"]).toBeTruthy();
                    return c8o.callJson("fs://.reset");
                })
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();

                    for (let _i = 0; _i < 10; _i++) {
                        c8o.callJson("fs://.post",
                            "_id", id + "-" + _i,
                            "index", _i
                        ).then((response: any) => {
                            expect(response["ok"]).toBeTruthy();
                            count++;
                            if (count < 10) {
                                return null;
                            }
                            else {
                                c8o.callJson(".LoginTesting")
                                    .then((response: any) => {
                                        expect(response["document"]["authenticatedUserID"]).toBe("testing_user");
                                        return c8o.callJson("fs://.sync", "continuous", true);
                                    })
                                    .progress((c8oProgress: C8oProgress) => {
                                        if (c8oProgress.continuous) {
                                            if (c8oProgress.push) {
                                                livePush = c8oProgress.toString();
                                            }
                                            if (c8oProgress.pull) {
                                                livePull = c8oProgress.toString();
                                            }
                                        }
                                        else {
                                            if (c8oProgress.push) {
                                                if (firstPush == null) {
                                                    firstPush = c8oProgress.toString();
                                                }
                                                lastPush = c8oProgress.toString();
                                            }
                                            if (c8oProgress.pull) {
                                                if (firstPull == null) {
                                                    firstPull = c8oProgress.toString();
                                                }
                                                lastPull = c8oProgress.toString();
                                            }
                                        }
                                        if (livePull === "pull: 0/0 (live)" && livePush === "push: 0/0 (live)" && !doneOnce) {
                                            doneOnce = true;
                                            let pattern = /push: [-+]?\d+\/[-+]?\d+ \(running\)/;
                                            expect(pattern.test(firstPush)).toBeTruthy();
                                            pattern = /push: [-+]?\d+\/[-+]?\d+ \(done\)/;
                                            expect(pattern.test(lastPush)).toBeTruthy();
                                            pattern = /pull: [-+]?\d+\/[-+]?\d+ \(running\)/;
                                            expect(pattern.test(firstPull)).toBeTruthy();
                                            pattern = /pull: [-+]?\d+\/[-+]?\d+ \(done\)/;
                                            expect(pattern.test(lastPull)).toBeTruthy();
                                            c8o.callJson(".LogoutTesting")
                                                .then(() => {
                                                    c8o.callJson("fs://.sync", "cancel", true)
                                                        .then((res) => {
                                                            done();
                                                            return null;
                                                        })

                                                    return null;
                                                })
                                                .fail(() => {
                                                    c8o.callJson(".LogoutTesting");
                                                    done.fail("error is not supposed to happend");
                                                });
                                        }
                                    }).fail(() => {
                                        done.fail("error is not supposed to happend");
                                    });
                            }
                        });
                    }
                })
                .fail(() => {
                    c8o.callJson(".LogoutTesting");
                    done.fail("error is not supposed to happend");
                });

        })();
    }, 50000
    );




    it("should check that Fullsync repliacte cancel works(C8oFsReplicateCancelAsync)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            try {
                await c8o.init(Stuff.C8o_FS);
                c8o.httpInterface.forceInit();
                await c8o.finalizeInit();
                let response = await c8o.callJson("fs://.reset").async();
                expect(response["ok"]).toBeTruthy();
                response = await c8o.callJson("fs://.replicate_pull", "cancel", true, "continuous", "true").async();
                expect(response["ok"]).toBeTruthy();
                response = await c8o.callJson("fs://.replicate_push", "cancel", true, "continuous", "true").async();
                expect(response["ok"]).toBeTruthy();
                response = await c8o.callJson("fs://.sync", "cancel", true, "continuous", "true").async();
                expect(response["ok"]).toBeTruthy();
                done();
            }
            catch (error) {
                done.fail("C8oFsReplicateCancel2 " + error.message);
            }


        })();;
    });


    it("should check that Fullsync repliacte cancel works(C8oFsReplicateCancel)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o_FS).catch(() => {
                done.fail("error is not supposed to happend");
            });
            await c8o.finalizeInit();
            c8o.callJson("fs://.reset")
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    c8o.callJson("fs://.replicate_pull", "cancel", true, "continuous", "true")
                        .then((response: any, parameters1) => {
                            expect(response["ok"]).toBeTruthy();
                            c8o.callJson("fs://.replicate_push", "cancel", true, "continuous", "true")
                                .then((response2: any, parameters2) => {
                                    expect(response2["ok"]).toBeTruthy();
                                    c8o.callJson("fs://.sync", "cancel", true, "continuous", "true")
                                        .then((response3: any, parameters) => {
                                            expect(response3["ok"]).toBeTruthy();
                                            done();
                                            return null;
                                        })
                                        .progress((prog) => {
                                        })
                                        .fail((error) => {
                                            done.fail("error is not supposed to happend");
                                        });
                                    return null;
                                })
                                .progress((prog) => {
                                })
                                .fail((error) => {
                                    done.fail("error is not supposed to happend");
                                });
                            return null;
                        })
                        .progress((prog) => {
                        })
                        .fail((error) => {
                            done.fail("error is not supposed to happend");
                        });

                    return null;
                })
                .fail((error) => {
                    done.fail("error is not supposed to happend");
                });
        })();
    }
    );
/***
    it("should check that Fullsync repliacte cancel when lauching two replication works(C8oFsReplicateCancelOnDoublon)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            let state: string;
            c8o.init(Stuff.C8o_FS).catch((err: C8oException) => {
                expect(err).toBeUndefined();
            });
            await c8o.finalizeInit();
            c8o.callJson("fs://.reset")
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    c8o.callJson("fs://.replicate_pull")
                        .then((res)=>{
                            console.log(res);
                            return null;
                        })
                        .progress((progress: any) => {
                            state = progress["_raw"]["cancelled"];
                            return null;

                        })
                        
                    c8o.callJson("fs://.replicate_pull")
                        .then((response, parameters) => {
                            setTimeout(() => {
                                //expect(state).toBeTruthy();
                                //TODO
                                done();
                            }, 10000);

                            return null;
                        });
                    return null;
                });
        }
        )();
    });
/*/

    it("should check that c8o local cache works (C8oLocalCacheXmlPriorityLocal)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o_LC).catch(() => {
                done.fail("error is not supposed to happend");
            });
            await c8o.finalizeInit();
            let id = "C8oLocalCacheXmlPriorityLocal-" + new Date().getTime().valueOf();
            let signature: string;
            let signature2: string;

            c8o.callJson(".Ping",
                C8oLocalCache.PARAM, new C8oLocalCache(Priority.LOCAL, 3000),
                "var1", id)
                .then((response: any) => {
                    expect(response["document"]["pong"]["var1"]).toBe(id);
                    signature = response["document"]["attr"]["signature"];
                    return c8o.callJson(".Ping",
                        C8oLocalCache.PARAM, new C8oLocalCache(Priority.LOCAL, 3000),
                        "var1", (id + "bis"));
                })
                .then((response: any) => {
                    expect(response["document"]["pong"]["var1"]).toBe(id + "bis");
                    signature2 = response["document"]["attr"]["signature"];
                    expect(signature2).not.toBe(signature);
                    return c8o.callJson(".Ping",
                        C8oLocalCache.PARAM, new C8oLocalCache(Priority.LOCAL, 3000),
                        "var1", id);
                })
                .then((response: any) => {
                    expect(response["document"]["pong"]["var1"]).toBe(id);
                    signature2 = response["document"]["signature"];
                    expect(signature).toBe(signature);
                    return c8o.callJson(".Ping",
                        C8oLocalCache.PARAM, new C8oLocalCache(Priority.LOCAL, 3000),
                        "var1", id);
                })
                .then((response: any) => {
                    expect(response["document"]["pong"]["var1"]).toBe(id);
                    signature2 = response["document"]["signature"];
                    expect(signature).not.toBe(signature2);
                    done();
                    return null;
                })
                .fail((error) => {
                    done.fail("error is not supposed to happend");
                });
        })();
    }
    );

    it("should check that c8o fs live changes works (C8oFsLiveChanges)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o_FS_PUSH).catch(() => {
                done.fail("error is not supposed to happend");
            });
            await c8o.finalizeInit();
            let lastChanges: Array<Object> = [];
            lastChanges[0] = null;

            let cptlive: number = 0;
            let firstPass = true;
            let changeListener: any = new C8oFullSyncChangeListener((changes: Object) => {
                lastChanges[0] = changes;
            });
            c8o.callJson("fs://.reset")
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    return c8o.callJson("fs://.replicate_pull", "continuous", true);
                })
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    return c8o.callJson("fs://.get", "docid", "abc", C8o.FS_LIVE, "getabc");
                })
                .then((response: any) => {
                    if (response["_id"] === "abc") {
                        cptlive++;
                    }
                    if (firstPass) {
                        firstPass = false;
                        expect(cptlive).toBe(1);
                    }
                    return null;
                })
                .fail((error) => {
                    done.fail("error is not supposed to happend");
                });

            setTimeout(() => {
                c8o.callJson(".qa_fs_push.PostDocument", "_id", "ghi").then(() => {
                    setTimeout(() => {
                        expect(cptlive).toBe(2);
                        c8o.addFullSyncChangeListener("", changeListener);
                        c8o.callJson(".qa_fs_push.PostDocument", "_id", "jkl")
                            .then((response: any) => {
                                expect(response["document"]["couchdb_output"]["ok"]).toBeTruthy();
                                setTimeout(() => {
                                    expect(cptlive).toBe(3);
                                    expect(lastChanges[0]).not.toBeNull();
                                    expect(lastChanges[0]).not.toBe(undefined);
                                    expect(lastChanges[0]["changes"].length).toBe(1);
                                    expect(lastChanges[0]["changes"][0]["id"]).toBe("jkl");
                                    c8o.cancelLive("getabc");
                                    c8o.callJson(".qa_fs_push.PostDocument", "_id", "mno")
                                        .then((response: any) => {
                                            expect(response["document"]["couchdb_output"]["ok"]).toBeTruthy();
                                            setTimeout(() => {
                                                expect(cptlive).toBe(3);
                                                expect(lastChanges[0]).not.toBe(null);
                                                expect(lastChanges[0]).not.toBe(undefined);
                                                expect(lastChanges[0]["changes"].length).toBe(1);
                                                expect(lastChanges[0]["changes"][0]["id"]).toBe("mno");
                                                c8o.removeFullSyncChangeListener("", changeListener);
                                                c8o.callJson("fs://.replicate_pull", "cancel", true)
                                                c8o.database.removeReplications("anonymous");
                                                c8o.database.removeReplications("testing_user");
                                                done();
                                            }, 2000);
                                            return null;
                                        });
                                }, 2000);
                                return null;
                            });
                    }, 3000);
                    return null;
                });
            }, 2000);
        })();
    }
    );

    it("should check that Fullsync Put attachment works (C8oFsPutAttachment)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o_FS).catch((err: C8oException) => {
                expect(err).toBeUndefined();
            });
            await c8o.finalizeInit();

            let myId: string = "C8oFsPutAttachment";
            let id: string;
            c8o.callJson("fs://.reset")
                .then(() => {
                    return c8o.callJson("fs://.post", "_id", myId);
                })
                .then((response: any) => {
                    expect(response["ok"]).toBeTruthy();
                    id = response["id"];
                    expect(id).toBe(myId);
                    return c8o.callJson("fs://.put_attachment", "docid", id, "name", "text2.txt", "content_type", "text/plain", "content", new Blob(['Hello Convertigo !'], { type: 'text/plain' }));
                })
                .then((response: any) => {
                    return c8o.callJson("fs://.get", "docid", id, "attachments", true);
                })
                .then((response: any) => {
                    expect(response["_id"]).toBe(myId);
                    expect(response["_attachments"]["text2.txt"]).not.toBeNull();
                    expect(response["_attachments"]["text2.txt"]["content_type"]).toBe("text/plain");
                    return c8o.callJson("fs://.get_attachment", "docid", id, "name", "text2.txt");
                })
                .then((response:any)=>{
                    expect(response["type"]).toBe("text/plain");
                    expect(response["size"]).toBe(18);                    
                    done();
                    return null;
                })
                .fail((error) => {
                    done.fail("error is not supposed to happend");
                });
        })();
    }
    );


    it("should check that Fullsync get attachment works ans sequence upload to (C8oSequencePutAttachmentFSGetAttachment)", function (done) {
        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o_FS_FILES).catch((err: C8oException) => {
                expect(err).toBeUndefined();
            });
            await c8o.finalizeInit();
            const id: string = "documentFile";

            let fileFirst = new File(["Hello Convertigo First !"], "fileFirst.txt", {
                type: "text/plain",
            });
            let fileSecond = new File(["Hello Convertigo Second !"], "fileSecond.txt", {
                type: "text/plain",
            });
            let arrayFile = [fileFirst, fileSecond];

            c8o.callJson(".LoginTesting")
                .then(() => {
                    return c8o.callJson("fs://qa_fs_files.reset")
                })
                .then(() => {
                    return c8o.callJson(".InitFsFile", "_id", id)
                })
                .then(() => {
                    return c8o.callJson(".GetAndInsertBase64", "files", arrayFile);
                })
                .then((response: any) => {
                    return c8o.callJson("fs://qa_fs_files.sync", "continuous", true);
                })
                .then((response: any) => {
                    setTimeout(() => {
                        c8o.callJson("fs://qa_fs_files.get", "docid", id, "attachments", true)
                            .then((response: any) => {
                                var reader = new FileReader();
                                var readerSecond = new FileReader();
                                reader.readAsDataURL(fileFirst);
                                reader.onloadend = () => {
                                    let base64data = (<string>reader.result).split(",")[1];
                                    expect(response["_attachments"]["fileFirst.txt"]["data"]).toBe(base64data);
                                    readerSecond.readAsDataURL(fileSecond);
                                    readerSecond.onloadend = () => {
                                        let base64dataSecond = (<string>readerSecond.result).split(",")[1];
                                        expect(response["_attachments"]["fileSecond.txt"]["data"]).toBe(base64dataSecond);
                                        console.log(base64dataSecond);
                                        c8o.callJson("fs://qa_fs_files.sync", "cancel", true)
                                            .then((res) => {
                                                done();
                                                return null;
                                            })

                                    };
                                }
                                return null;
                            })
                            .fail((error) => {
                                c8o.callJson("fs://qa_fs_files.sync", "cancel", true);
                                done.fail("error is not supposed to happend");
                            });
                    }, 3000)
                    return null;
                })
                .fail((error) => {
                    c8o.callJson("fs://qa_fs_files.sync", "cancel", true);
                    done.fail("error is not supposed to happend");
                });
        })();
    });

    it("should check that Fullsync bulkworks (C8oFsBulk)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o_FS).catch((err: C8oException) => {
                expect(err).toBeUndefined();
            });
            await c8o.finalizeInit();
            let myId: string = "C8oFsPostGetDelete-" + new Date().getTime().valueOf();
            let id: string;
            c8o.callJson("fs://digiprev_fullsync_dataref.reset")
                .then(() => {
                    //return c8o.callJson("fs://digiprev_fullsync_dataref.bulk", "data", "http://c8o-dev.convertigo.net/cems/projects/ClientSDKtesting/files/dump.json");
                    return c8o.callJson("fs://digiprev_fullsync_dataref.bulk", "data", "http://localhost:9876/base/files/dump.json");
                })
                .then((response: any) => {
                    return c8o.callJson("fs://digiprev_fullsync_dataref.info");
                })
                .then((response) => {
                    expect(response["doc_count"]).toBe(11591);
                    expect(response["update_seq"]).toBe(13236);
                    c8o.callJson("fs://digiprev_fullsync_dataref.replicate_pull")
                        .then((response: any) => {
                            done();
                            return null;
                        })
                        .progress((progress) => {
                            // Do stuff with progress
                            if (+progress.current < 5) {
                            }
                            else {
                                done.fail("C8oFsBulk");
                            }
                        })
                        .fail((error) => {
                            done.fail("C8oFsBulk");
                        });
                    return null;
                })

                .fail((error) => {
                    done.fail("C8oFsBulk");
                });
        })();
    });

    it("should check that handle Network Events works (C8oHandleNetworkEvent)", async (done) => {
        inject([C8o, HttpClient], async (c8o: C8o, http: HttpClient) => {
            try {
                let array = [];
                let cpt = 0;
                await c8o.init(Stuff.C8o_SessionsKeepAlive);
                await c8o.finalizeInit();
                c8o.handleNetworkEvents().subscribe((network) => {
                    cpt++;
                    array.push(network);
                    if (cpt == 1) {
                        expect(array[0]).toBe("Reachable");
                    }
                    if (cpt == 2) {
                        expect(array[1]).toBe("Offline");
                    }
                    else if (cpt == 3) {
                        expect(array[2]).toBe("Reachable");
                    }
                });
                setTimeout(async () => {
                    window.dispatchEvent(new Event('offline'));
                    setTimeout(async () => {
                        window.dispatchEvent(new Event('online'));
                        setTimeout(async () => {
                            expect(cpt).toBe(3);
                            let c8oNotReachable = new C8o(http);
                            await c8oNotReachable.init(Stuff.C8o_SessionsKeepAlive.setEndPoint("http://localhost:9999/convertigo/projects/abc"));
                            c8oNotReachable.handleNetworkEvents().subscribe((network) => {
                                expect(network).toBe("NotReachable");
                                done();
                            });
                            await c8oNotReachable.finalizeInit();
                        }, 4000);
                    }, 4000);
                }, 4000);
            }
            catch (error) {
                done.fail("C8oHandleNetworkEvent " + error.message);
            }
        })();;
    });

    it("should check that keepAlive and autologin works works(C8oHandleSessionLost)", async (done) => {
        debugger;
        inject([C8o, HttpClient], async (c8o: C8o, http: HttpClient) => {
            try {
                let timeout;
                let triggerautologinresponse = false;
                let done2 = false;
                new Promise(async (resolve) => {
                    
                    await c8o.init(Stuff.C8o_SessionsKeepAlive);
                    await c8o.finalizeInit();
                    c8o.handleAutoLoginResponse().subscribe((res)=>{
                        triggerautologinresponse = true;
                        console.log(res);
                    });
                    c8o.log.debug("Init finished");
                    let response = await c8o.callJson(".LoginTesting").async();
                    expect(response["document"]["authenticatedUserID"]).toBe("testing_user");
                    c8o.handleSessionLost().subscribe(() => {
                        if (timeout != undefined) {
                            clearTimeout(timeout);
                        }
                        if(!done2){
                            done.fail();
                        }
                    });
                    Functions.removesess(c8o, resolve);
                }).then(async () => {
                    c8o.log.debug("log Debug");
                    await c8o.callJson(".Ping", "var1", "val1", "var2", "g").async()
                    console.log("then");
                    timeout = setTimeout(() => {
                        expect(triggerautologinresponse).toBeTruthy();
                        done2 = true;
                        done();
                    }, 10000);
                })
                    .catch((error) => {
                        if(!done2){
                            done.fail();
                        }
                    })
            }
            catch (error) {
                    done.fail("C8oHandleSessionLost " + error.message);
                
            }
        })();
    });
     it("should check that replication restart or not when its necessary (C8oReplicationStopR)", async (done) => {
        inject([C8o, HttpClient], async (c8o: C8o, http: HttpClient) => {
            try {
                let timeout;
                let p = new Promise(async (resolve) => {

                    // init
                    await c8o.init(Stuff.C8o_Sessions);
                    await c8o.finalizeInit();
                    // set an handler of lost session
                    c8o.handleSessionLost().subscribe(() => {
                        c8o.log.debug('handle a lost session');
                    });

                    // launch 3 syncs simple not authetificated
                    await c8o.callJson("fs://databasea1.sync");
                    await c8o.callJson("fs://databasea2.replicate_pull");
                    await c8o.callJson("fs://databasea3.replicate_push");

                    // launch 3 syncs continous not authetificated
                    await c8o.callJson("fs://databaseb1.sync", "continuous", true);
                    await c8o.callJson("fs://databaseb2.replicate_pull", "continuous", true);
                    await c8o.callJson("fs://databaseb3.replicate_push", "continuous", true);


                    // Check that we have six rep and each one is in its expected state
                    //await Functions.wait(5000);
                    let cpt = 0;
                    expect(c8o.database.registeredReplications["anonymous"].length).toBe(6);
                    for (let rep of c8o.database.registeredReplications["anonymous"]) {
                        expect(rep["authenticated"]).toBeFalsy();
                        expect(rep["canceled"]).toBeFalsy();
                        if (cpt < 3) {
                            expect(rep.finished).toBe(true);
                        }
                        else {
                            expect(rep.finished).toBe(false);
                        }
                        cpt = cpt + 1;
                    }

                    // Logging and check that we are effectivly logged in
                    let response = await c8o.callJson(".LoginTesting").async();
                    expect(response["document"]["authenticatedUserID"]).toBe("testing_user");


                    // launch 3 syncs simple authetificated
                    await c8o.callJson("fs://databasec1.sync");
                    await c8o.callJson("fs://databasec2.replicate_pull");
                    await c8o.callJson("fs://databasec3.replicate_push");

                    // launch 3 syncs continous authetificated

                    await c8o.callJson("fs://databased1.sync", "continuous", true);
                    await c8o.callJson("fs://databased2.replicate_pull", "continuous", true);
                    await c8o.callJson("fs://databased3.replicate_push", "continuous", true);

                    //await Functions.wait(5000);
                    // Check that we have six rep and each one is in its expected state
                    cpt = 0;
                    expect(c8o.database.registeredReplications["testing_user"].length).toBe(6);
                    for (let rep of c8o.database.registeredReplications["testing_user"]) {
                        expect(rep["authenticated"]).toBeTruthy();
                        expect(rep["canceled"]).toBeFalsy();
                        if (cpt < 3) {
                            expect(rep.finished).toBe(true);
                        }
                        else {
                            expect(rep.finished).toBe(false);
                        }
                        cpt = cpt + 1;
                    }
                    // remove session
                    //Functions.removesess(c8o, resolve);
                    await c8o.callJson(".logout", C8o.SEQ_AUTO_LOGIN_OFF, true);
                    resolve();

                });
                p.then(async () => {
                    await c8o.callJson(".Ping", "var1", "val1", "var2", "g").async()
                    expect(c8o.database.registeredReplications["testing_user"].length).toBe(6);

                    let cpt = 0;
                    for (let rep of c8o.database.registeredReplications["testing_user"]) {
                        if (cpt < 3) {
                            expect(rep["canceled"]).toBeFalsy();
                            expect(rep.finished).toBe(true);
                        }
                        else {
                            expect(rep["canceled"]).toBeTruthy();
                            expect(rep.finished).toBe(false, "la1")
                        }
                        cpt = cpt + 1;
                    }

                    c8o.log.debug("after ping 1");
                    await c8o.callJson(".Ping", "var1", "val1", "var2", "g").async()
                    c8o.log.debug("after ping 2");
                    let response = await c8o.callJson(".LoginTesting").async();
                    expect(response["document"]["authenticatedUserID"]).toBe("testing_user");
                    cpt = 0;
                    //await Functions.wait(5000);
                    for (let rep of c8o.database.registeredReplications["testing_user"]) {
                        if (cpt < 3) {
                            expect(rep["canceled"]).toBeFalsy();
                            expect(rep.finished).toBe(true);
                        }
                        else {
                            expect(rep["canceled"]).toBeFalsy();
                            expect(rep.finished).toBe(false, "la2");
                        }
                        cpt = cpt + 1;
                    }
                    done();
                })
            }
            catch (error) {
                done.fail("C8oHandleSessionLost " + error.message);
            }
        })();;
    });
 

    it("should check that Fullsync reset database is not applied on local created database (C8oFsResetNotForLocalCreatedDB)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o_Sessions).catch((error) => {
                done.fail("error is not supposed to happend during init");
            });
            let result;
            await c8o.finalizeInit();
            let response = await c8o.callJson(".LoginTesting").async();
            expect(response["document"]["authenticatedUserID"]).toBe("testing_user");

            // reset remote base and upgrade base version
            await c8o.callJson(".UpdateBaseVersion");
            // reset base locally
            result = await c8o.callJson("fs://databasec1.reset");
            expect(result["ok"]).toBeTruthy();
            // insert a document
            result = await c8o.callJson("fs://databasec1.post", "_id", "myidLocal", "ping", "pong");
            expect(result["ok"]).toBeTruthy();
            // check that is was successfully inseryed
            result = await c8o.callJson("fs://databasec1.get", "docid", "myidLocal");
            expect(result["_id"]).toBe("myidLocal");
            expect(result["ping"]).toBe("pong");



            // sync base
            result = await c8o.callJson("fs://databasec1.sync");
            expect(result["ok"]).toBeTruthy();

            // check that my idlocal is still present
            result = await c8o.callJson("fs://databasec1.get", "docid", "myidLocal").async();
            expect(result["_id"]).toBe("myidLocal");
            expect(result["ping"]).toBe("pong");

            // check that remote document is present locally
            result = await c8o.callJson("fs://databasec1.get", "docid", "myID");
            expect(result["_id"]).toBe("myID");
            expect(result["data"]).toBe("mydata");
            done();
        })();
    });

    it("should check that Fullsync reset database is effective on older DB (without db Versions) (C8oFsResetWorksOlderDB)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o_Sessions).catch((error) => {
                done.fail("error is not supposed to happend during init");
            });
            let result;
            await c8o.finalizeInit();
            // re run update version base 
            await c8o.callJson(".UpdateBaseVersion");
            let response = await c8o.callJson(".LoginTesting").async();
            expect(response["document"]["authenticatedUserID"]).toBe("testing_user");
            // reset local base
            result = await c8o.callJson("fs://databasec1.reset");
            expect(result["ok"]).toBeTruthy();
            // post a design document, that is not containing a base version
            result = await c8o.callJson("fs://databasec1.post", "_id", "_design/c8o");
            expect(result["ok"]).toBeTruthy();

            // check that insertion was successfull
            result = await c8o.callJson("fs://databasec1.get", "docid", "_design/c8o");
            expect(result["_id"]).toBe("_design/c8o");
            expect(result["~c8oDbVersion"]).toBeUndefined();

            // sync base
            result = await c8o.callJson("fs://databasec1.sync");
            expect(result["ok"]).toBeTruthy();

            // since now our base don't contains version we arre supposed to have reset it during before the sync
            try {
                result = await c8o.callJson("fs://databasec1.get", "docid", "myidLocal").async();
                expect(true).toBeFalsy("supposed to be unreachable")
            }
            catch (error) {
                expect(true).toBeTruthy();
            }
            // check that remote document has arrived
            result = await c8o.callJson("fs://databasec1.get", "docid", "myID");
            expect(result["_id"]).toBe("myID");
            expect(result["data"]).toBe("mydata");

            done();
        })();
    });

    it("should check that Fullsync reset database is effective on DB with diffrent version (C8oFsResetWorksDiffrentDBVersions)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o_Sessions).catch((error) => {
                done.fail("error is not supposed to happend during init");
            });
            let result;
            await c8o.finalizeInit();
            // re run update version base
            await c8o.callJson(".UpdateBaseVersion");

            let response = await c8o.callJson(".LoginTesting").async();
            expect(response["document"]["authenticatedUserID"]).toBe("testing_user");
            // reset local base
            result = await c8o.callJson("fs://databasec1.reset");
            expect(result["ok"]).toBeTruthy();
            // post a design document, that is not containing a base version
            result = await c8o.callJson("fs://databasec1.post", "_id", "_design/c8o", "~c8oDbVersion", "abc");
            expect(result["ok"]).toBeTruthy();

            // check that insertion was successfull
            result = await c8o.callJson("fs://databasec1.get", "docid", "_design/c8o");
            expect(result["_id"]).toBe("_design/c8o");
            expect(result["~c8oDbVersion"]).toBe("abc");

            // sync base
            result = await c8o.callJson("fs://databasec1.sync");
            expect(result["ok"]).toBeTruthy();

            // since now our base don't contains version we arre supposed to have reset it during before the sync
            try {
                result = await c8o.callJson("fs://databasec1.get", "docid", "myidLocal").async();
                expect(true).toBeFalsy("supposed to be unreachable")
            }
            catch (error) {
                expect(true).toBeTruthy();
            }
            // check that remote document has arrived
            result = await c8o.callJson("fs://databasec1.get", "docid", "myID");
            expect(result["_id"]).toBe("myID");
            expect(result["data"]).toBe("mydata");

            done();
        })();
    });


    it("should check that Fullsync reset database is not effective on DB with setting  setDisableResetBase (C8oFsResetNotEffective with setDisableResetBase)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o_Sessions).catch((error) => {
                done.fail("error is not supposed to happend during init");
            });
            let result;
            await c8o.finalizeInit();
            c8o.resetBase = false;
            // re run update version base 
            await c8o.callJson(".UpdateBaseVersion");
            let response = await c8o.callJson(".LoginTesting").async();
            expect(response["document"]["authenticatedUserID"]).toBe("testing_user");
            // reset local base
            result = await c8o.callJson("fs://databasec1.reset");
            expect(result["ok"]).toBeTruthy();
            // post a design document, that is not containing a base version
            result = await c8o.callJson("fs://databasec1.post", "_id", "_design/c8o", "~c8oDbVersion", "abc");
            expect(result["ok"]).toBeTruthy();

            // check that insertion was successfull
            result = await c8o.callJson("fs://databasec1.get", "docid", "_design/c8o");
            expect(result["_id"]).toBe("_design/c8o");
            expect(result["~c8oDbVersion"]).toBe("abc");

            // insert a document
            result = await c8o.callJson("fs://databasec1.post", "_id", "myidLocal", "ping", "pong");
            expect(result["ok"]).toBeTruthy();

            // sync base
            result = await c8o.callJson("fs://databasec1.sync");
            expect(result["ok"]).toBeTruthy();

            // check that my idlocal is still present
            result = await c8o.callJson("fs://databasec1.get", "docid", "myidLocal").async();
            expect(result["_id"]).toBe("myidLocal");
            expect(result["ping"]).toBe("pong");

            // check that remote document is present locally
            result = await c8o.callJson("fs://databasec1.get", "docid", "myID");
            expect(result["_id"]).toBe("myID");
            expect(result["data"]).toBe("mydata");

            done();
        })();
    });

it("should check that Fullsync database whitout prefix works(C8oFsWithoutPrefix)", async (done) => {
    inject([C8o], async (c8o: C8o) => {
        c8o.init(Stuff.C8o_Sessions).catch((error) => {
            done.fail("error is not supposed to happend during init");
        });
        let result;
        await c8o.finalizeInit();
        c8o.prefixBase = false;
        // re run update version base 
        await c8o.callJson(".UpdateBaseVersion");

        result = await c8o.callJson("fs://databasec1.reset");
        expect(result["ok"]).toBeTruthy();

        result = await c8o.callJson("fs://databasec1.post", "_id", "myIndex", "Hello", "There");
        expect(result["ok"]).toBeTruthy();

        let db = new PouchDB("databasec1_device")
        try {
            let resp = await db.get("myIndex");
            expect(resp["_id"]).toBe("myIndex");
            expect(resp["Hello"]).toBe("There");
        }
        catch (err) {
            done.fail();
        }

        let response = await c8o.callJson(".LoginTesting").async();
        expect(response["document"]["authenticatedUserID"]).toBe("testing_user");
        result = await c8o.callJson("fs://databasec1.post", "_id", "myIndex", "Salut", "Ici", C8o.FS_POLICY, C8o.FS_POLICY_MERGE).async();
        expect(result["ok"]).toBeTruthy();
        try {
            let resp = await db.get("myIndex");
            expect(resp["_id"]).toBe("myIndex");
            expect(resp["Hello"]).toBe("There");
            expect(resp["Salut"]).toBe("Ici");
        }
        catch (err) {
            done.fail();
        }
        done();
    })();
});

    it("should check that Fullsync database merge subpolicy works _use_merge_ : delete (C8oFsSubpolicy_use_merge_delete)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o_Sessions).catch((error) => {
                done.fail("error is not supposed to happend during init");
            });
            let result;
            await c8o.finalizeInit();
            c8o.prefixBase = false;
            // re run update version base 
            await c8o.callJson(".UpdateBaseVersion");

            result = await c8o.callJson("fs://databasec1.reset");
            expect(result["ok"]).toBeTruthy();

            result = await c8o.callJson("fs://databasec1.post", "_id", "myIndex", "Hello", "There", "property3",{"g":'this is g', "h": "this is h", "i": "this is i"}, '_use_merge_property3.i', 'delete',C8o.FS_POLICY, C8o.FS_POLICY_MERGE,);
            expect(result["ok"]).toBeTruthy();

            let db = new PouchDB("databasec1_device")
            try {
                let resp = await db.get("myIndex");
                expect(resp["_id"]).toBe("myIndex");
                expect(resp["Hello"]).toBe("There");
                expect(resp["property3"]["g"]).toBe("this is g");
                expect(resp["property3"]["h"]).toBe("this is h");
                expect(resp["property3"]["i"]).toBeUndefined();
                console.log("result 1", resp);
            }
            catch (err) {
                done.fail();
            }

            let response = await c8o.callJson(".LoginTesting").async();
            expect(response["document"]["authenticatedUserID"]).toBe("testing_user");
            result = await c8o.callJson("fs://databasec1.post", "_id", "myIndex",'_use_merge_property3~g', 'delete', "Salut", "Ici", "Hello", "There2",C8o.FS_POLICY, C8o.FS_POLICY_MERGE, C8oCore.FS_SUBKEY_SEPARATOR, "~").async();
            expect(result["ok"]).toBeTruthy();
            try {
                let resp = await db.get("myIndex");
                expect(resp["_id"]).toBe("myIndex");
                expect(resp["Hello"]).toBe("There2");
                expect(resp["Salut"]).toBe("Ici");
                expect(resp["property3"]["g"]).toBeUndefined();
                expect(resp["property3"]["h"]).toBe("this is h");
                expect(resp["property3"]["i"]).toBeUndefined();
                console.log(resp);
            }
            catch (err) {
                done.fail();
            }
            done();
        })();
    });
    it("should check that Fullsync database merge subpolicy works _use_merge_ : override (C8oFsSubpolicy_use_merge_override)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o_Sessions).catch((error) => {
                done.fail("error is not supposed to happend during init");
            });
            let result;
            await c8o.finalizeInit();
            c8o.prefixBase = false;
            // re run update version base 
            await c8o.callJson(".UpdateBaseVersion");

            result = await c8o.callJson("fs://databasec1.reset");
            expect(result["ok"]).toBeTruthy();

            result = await c8o.callJson("fs://databasec1.post", "_id", "myIndex", "Hello", "There", "property3",['a','b','c','z'], C8o.FS_POLICY, C8o.FS_POLICY_MERGE, "property4", {"arr1": ["abc"], "obj1": {"a": ['abcde', 'f'], "b": "2B", "c":"2C"}});
            expect(result["ok"]).toBeTruthy();

            let db = new PouchDB("databasec1_device")
            try {
                let resp = await db.get("myIndex");
                expect(resp["_id"]).toBe("myIndex");
                expect(resp["Hello"]).toBe("There");
            
                console.log("result 1", resp);
            }
            catch (err) {
                done.fail();
            }

            let response = await c8o.callJson(".LoginTesting").async();
            expect(response["document"]["authenticatedUserID"]).toBe("testing_user");
            result = await c8o.callJson("fs://databasec1.post", "_id", "myIndex", "property3",['d','e','f'], '_use_merge_property4.obj1.c','delete','_use_merge_property4.obj1.a','override', '_use_merge_propertyF4.obj33.d.e.f','override', '_use_merge_property4.obj3.d','override',"property4", {"obj1": {"a": ['', 'f']}, "obj3":{d:{"abc": "def"}}},'_use_merge_property3', 'override', "Salut", "Ici", "Hello", "There2",C8o.FS_POLICY, C8o.FS_POLICY_MERGE, C8oCore.FS_SUBKEY_SEPARATOR, ".").async();
            expect(result["ok"]).toBeTruthy();
            try {
                let resp = await db.get("myIndex");
                expect(resp["_id"]).toBe("myIndex");
                expect(resp["Hello"]).toBe("There2");
                expect(resp["Salut"]).toBe("Ici");
                console.dir(resp["property3"])
                expect(Functions.isEqual(resp["property3"],["d","e","f"])).toBeTruthy();
                expect(resp["property4"].obj1.a.length).toBe(2);
                expect(resp["property4"].obj3.d.abc).toBe("def");
                expect(resp["property4"].obj1.a[0]).toBe("");
                expect(resp["property4"].obj1.a[1]).toBe("f");
                expect(resp["property4"].obj1.b).toBe("2B");
                expect(resp["property4"].arr1[0]).toBe("abc");
                expect(resp["property4"].obj1.c).toBeUndefined();
                console.log(resp);
            }
            catch (err) {
                done.fail();
            }
            done();
        })();
    });

    it("should check that Fullsync database with prefix works(C8oFsWithPrefix)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            try {
                c8o.init(Stuff.C8o_Sessions).catch((error) => {
                    done.fail("error is not supposed to happend during init");
                });
                let result;
                await c8o.finalizeInit();
                // reset existing base ("databasec1_device")
                result = await c8o.callJson("fs://databasec1.reset").async();
                expect(result["ok"]).toBeTruthy();
                // set prefix
                c8o.prefixBase = true;

                //reset existing base ("anonymous_databasec1_device")
                result = await c8o.callJson("fs://databasec1.reset").async();
                expect(result["ok"]).toBeTruthy();

                // post something in current fs base
                result = await c8o.callJson("fs://databasec1.post", "_id", "myIndex", "Hello", "There").async();
                expect(result["ok"]).toBeTruthy();

                // Check that its not in the wrong base
                try {
                    let db = new PouchDB("databasec1_device")
                    await db.get("myIndex");
                    done.fail("Not supposed to be here");
                }
                catch (error) {
                    expect(error["status"]).toBe(404);
                }

                // check that its in right base
                let db = new PouchDB("anonymous_databasec1_device")
                let resp = await db.get("myIndex");
                expect(resp["_id"]).toBe("myIndex");
                expect(resp["Hello"]).toBe("There");


                // logging
                let response = await c8o.callJson(".LoginTesting").async();
                expect(response["document"]["authenticatedUserID"]).toBe("testing_user");

                //reset existing base ("testing_user_databasec1_device")
                result = await c8o.callJson("fs://databasec1.reset").async();
                expect(result["ok"]).toBeTruthy();

                // check that resetting fs base that should be now "testing_user_databasec1_device" has not affected previous one
                db = new PouchDB("anonymous_databasec1_device")
                resp = await db.get("myIndex");
                expect(resp["_id"]).toBe("myIndex");
                expect(resp["Hello"]).toBe("There");

                // post something in current fs base
                result = await c8o.callJson("fs://databasec1.post", "_id", "myIndex", "Salut", "Ici").async();
                expect(result["ok"]).toBeTruthy();
                db = new PouchDB("testing_user_databasec1_device")
                resp = await db.get("myIndex");
                expect(resp["_id"]).toBe("myIndex");
                expect(resp["Hello"]).toBe(undefined);
                expect(resp["Salut"]).toBe("Ici");
                done();
            }
            catch (err) {
                console.log(err);
                done.fail();
            }

        })();
    });

    it("should check that log remote works (CheckLogRemote)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            await Functions.wait(10000)
            let c8oSettings: C8oSettings = new C8oSettings();
            c8oSettings.setLogC8o(false);
            c8oSettings.setEndPoint(Info.endpoint);
            c8o.init(c8oSettings as any)
                .then(async () => {
                    await c8o.finalizeInit();
                    let id: string = "logID=" + new Date().getTime().valueOf();
                    c8o.callJson(".GetLogs",
                        "init", id
                    ).then(() => {
                        setTimeout(() => {
                            c8o.log.error(id);
                            let arg = ["ERROR", "WARN", "INFO", "DEBUG", "TRACE", "FATAL"];
                            c8o.log.warn(id);
                            c8o.log.info(id);
                            c8o.log.debug(id);
                            c8o.log.trace(id);
                            c8o.log.fatal(id);
                            Functions.CheckLogRemoteHelper(c8o, arg, id);
                            c8o.logRemote = false;
                            c8o.log.info(id);
                            setTimeout(() => {
                                c8o.callJson(".GetLogs")
                                    .then((response: any) => {
                                        //expect(response["document"]["line"]).toBeUndefined();
                                        done();
                                        return null;
                                    });
                            }, 2000);
                        }, 2000);
                        return null;
                    }).fail(() => {
                        done.fail("error is not supposed to happend");
                    });
                })
                .catch((err: C8oException) => {
                    expect(err).toBeUndefined();
                });
        })();
    }
    );


    it("should fs://.all_local works(C8oFsAllLocal)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o)
                .catch((err: C8oException) => {
                    expect(err).toBeUndefined();
                });
                c8o.finalizeInit();
                try {
                    
                    let baseName = "localBase";
                    let arrayIndex= ["_local/a", "_local/b", "_local/c", "_local/d", "_local/e", "_local/f", "_local/g"];
                    let arrayValues= ["a", "b", "c", "d", "e", "f", "g"];
                    // reset base
                    let rep = await c8o.callJson("fs://"+ baseName +".reset");
                    expect(rep["ok"]).toBeTruthy();
                    //insert local docs
                    for(let i in arrayIndex){
                        let rep = await c8o.callJson("fs://"+ baseName +".post", "_id", arrayIndex[i], "vars",arrayValues[i])
                        expect(rep["ok"]).toBeTruthy();
                    }
                    
                   


                    // test all_local
                     rep = await c8o.callJson("fs://"+ baseName +".all_local");
                    expect(rep["total_rows"]).toBe(7);
                    expect(rep["offset"]).toBe(0);
                    expect(rep["rows"]).toBeDefined();
                    expect(rep["rows"][0]["value"]["rev"]).toBeDefined();
                    expect(rep["rows"][0]["doc"]).toBeUndefined();
                    expect(rep["rows"][0]["id"]).toBe("_local/a");
                    
                    // test all_local include_docs
                    rep = await c8o.callJson("fs://"+ baseName +".all_local", "include_docs", true);
                    expect(rep["total_rows"]).toBe(7);
                    expect(rep["offset"]).toBe(0);
                    expect(rep["rows"]).toBeDefined();
                    expect(rep["rows"][0]["value"]["rev"]).toBeDefined();
                    expect(rep["rows"][0]["doc"]["_id"]).toBeDefined();
                    expect(rep["rows"][0]["doc"]["_rev"]).toBeDefined();
                    expect(rep["rows"][0]["doc"]["vars"]).toBe(arrayValues[0]);
                    expect(Object.keys(rep["rows"][0]["value"]).length).toBe(1);
                    
                    // test all_local startkey/endkey
                    rep = await c8o.callJson("fs://"+ baseName +".all_local", "startkey", "_local/b", "endkey", "_local/d");
                    expect(rep["total_rows"]).toBe(7);
                    expect(rep["offset"]).toBe(0);
                    expect(rep["rows"]).toBeDefined();
                    expect(rep["rows"].length).toBe(3);
    
                    // test all_local descending
                    rep = await c8o.callJson("fs://"+ baseName +".all_local", "descending", true);
                    expect(rep["total_rows"]).toBe(7);
                    expect(rep["offset"]).toBe(0);
                    expect(rep["rows"]).toBeDefined();
                    expect(rep["rows"].length).toBe(7);
                    expect(rep["rows"][0]["id"]).toBe("_local/g");
    
                    // test all_local key
                    rep = await c8o.callJson("fs://"+ baseName +".all_local", "key", "_local/e");
                    expect(rep["total_rows"]).toBe(7);
                    expect(rep["offset"]).toBe(0);
                    expect(rep["rows"]).toBeDefined();
                    expect(rep["rows"].length).toBe(1);
                    expect(rep["rows"][0]["id"]).toBe("_local/e");
    
                    // test all_local keys
                    rep = await c8o.callJson("fs://"+ baseName +".all_local", "keys", ["_local/e", "_local/f"]);
                    expect(rep["total_rows"]).toBe(7);
                    expect(rep["offset"]).toBe(0);
                    expect(rep["rows"]).toBeDefined();
                    expect(rep["rows"].length).toBe(2);
                    expect(rep["rows"][0]["id"]).toBe("_local/e");
                    expect(rep["rows"][1]["id"]).toBe("_local/f");
                    
                    // test all_local limit
                    rep = await c8o.callJson("fs://"+ baseName +".all_local", "limit", 5);
                    expect(rep["total_rows"]).toBe(7);
                    expect(rep["offset"]).toBe(0);
                    expect(rep["rows"]).toBeDefined();
                    expect(rep["rows"].length).toBe(5);
                    expect(rep["rows"][0]["id"]).toBe("_local/a");
                    expect(rep["rows"][4]["id"]).toBe("_local/e");
    
                    // test all_local skip
                    rep = await c8o.callJson("fs://"+ baseName +".all_local", "skip", 5);
                    expect(rep["total_rows"]).toBe(7);
                    expect(rep["offset"]).toBe(5);
                    expect(rep["rows"]).toBeDefined();
                    expect(rep["rows"].length).toBe(2);
                    expect(rep["rows"][0]["id"]).toBe("_local/f");
                    expect(rep["rows"][1]["id"]).toBe("_local/g");

                    done();
                }
                catch(err){
                    console.log(err);
                    done.fail("error happened");

                }

                
        })();
    })

    
    it("should check that generated error go to then", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o)
                .catch((err: C8oException) => {
                    expect(err).toBeUndefined();
                });
                await c8o.finalizeInit();
                await c8o.callJson("ClientSDKtesting.disconnect")
                console.log("finit")
                try {
                    c8o.callJson("ClientSDKtesting.generatesError")
                    .then((result, params)=>{
                        let isErrorR = result["error"] != undefined ? result["error"]["code"] != undefined ? result["error"]["message"] != undefined ? result["error"]["details"] != undefined? true: false :false : false : false;
                        let isErrorDoc = result["document"]["error"] != undefined ? result["document"]["error"]["code"] != undefined ? result["document"]["error"]["message"] != undefined ? result["document"]["error"]["details"] != undefined? true: false :false : false : false;
                        let isError = (isErrorR || isErrorDoc);
                        expect(isError).toBeTruthy();
                        done();
                        return null;
                    })
                    .fail((err)=>{
                        console.log("err");
                        done.fail();
                    })
                }
                catch(err){
                    console.log(err);
                    done.fail("error happened");

                }

                
        })();
    });

    it("should check that generated error go to fail", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o.setErrorConvertigoIntoFail(true))
                .catch((err: C8oException) => {
                    expect(err).toBeUndefined();
                });
                await c8o.finalizeInit();
                await c8o.callJson("ClientSDKtesting.disconnect")
                console.log("finit")
                try {
                    c8o.callJson("ClientSDKtesting.generatesError")
                    .then((result, params)=>{
                        done.fail()
                        return null;
                    })
                    .fail((result)=>{
                        let isErrorR = result["error"] != undefined ? result["error"]["code"] != undefined ? result["error"]["message"] != undefined ? result["error"]["details"] != undefined? true: false :false : false : false;
                        let isErrorDoc = result["document"]["error"] != undefined ? result["document"]["error"]["code"] != undefined ? result["document"]["error"]["message"] != undefined ? result["document"]["error"]["details"] != undefined? true: false :false : false : false;
                        let isError = (isErrorR || isErrorDoc);
                        expect(isError).toBeTruthy();
                        done();
                    })
                }
                catch(err){
                    console.log(err);
                    done.fail("error happened");

                }

                
        })();
    });

    it("should check that generated error go to then but is not saved in local cache", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o)
                .catch((err: C8oException) => {
                    expect(err).toBeUndefined();
                });
                await c8o.finalizeInit();
                await c8o.callJson("fs://c8olocalcache.reset")
                await c8o.callJson("ClientSDKtesting.disconnect")
                console.log("finit")
                try {
                    c8o.callJson("ClientSDKtesting.generatesError", C8oLocalCache.PARAM, new C8oLocalCache(Priority.LOCAL, 180 * 1000))
                    .then((result, params)=>{
                        let isErrorR = result["error"] != undefined ? result["error"]["code"] != undefined ? result["error"]["message"] != undefined ? result["error"]["details"] != undefined? true: false :false : false : false;
                        let isErrorDoc = result["document"]["error"] != undefined ? result["document"]["error"]["code"] != undefined ? result["document"]["error"]["message"] != undefined ? result["document"]["error"]["details"] != undefined? true: false :false : false : false;
                        let isError = (isErrorR || isErrorDoc);
                        expect(isError).toBeTruthy();
                        return c8o.callJson("ClientSDKtesting.login");
                    })
                    .then((result, params)=>{
                        expect(result["ok"] == true)
                        return c8o.callJson("ClientSDKtesting.generatesError", C8oLocalCache.PARAM, new C8oLocalCache(Priority.LOCAL, 180 * 1000));
                    })
                    .then((result, params)=>{
                        let isErrorR = result["error"] != undefined ? result["error"]["code"] != undefined ? result["error"]["message"] != undefined ? result["error"]["details"] != undefined? true: false :false : false : false;
                        let isErrorDoc = result["document"]["error"] != undefined ? result["document"]["error"]["code"] != undefined ? result["document"]["error"]["message"] != undefined ? result["document"]["error"]["details"] != undefined? true: false :false : false : false;
                        let isError = (isErrorR || isErrorDoc);
                        expect(isError).toBeFalsy();
                        expect(result["document"]["ok"]).toBeTruthy();
                        return c8o.callJson("ClientSDKtesting.disconnect")
                    })
                    .then((result, params)=>{
                        return c8o.callJson("ClientSDKtesting.generatesError", C8oLocalCache.PARAM, new C8oLocalCache(Priority.LOCAL, 180 * 1000));
                    })
                    .then((result, params)=>{
                        let isErrorR = result["error"] != undefined ? result["error"]["code"] != undefined ? result["error"]["message"] != undefined ? result["error"]["details"] != undefined? true: false :false : false : false;
                        let isErrorDoc = result["document"]["error"] != undefined ? result["document"]["error"]["code"] != undefined ? result["document"]["error"]["message"] != undefined ? result["document"]["error"]["details"] != undefined? true: false :false : false : false;
                        let isError = (isErrorR || isErrorDoc);
                        expect(isError).toBeFalsy();
                        expect(result["document"]["ok"]).toBeTruthy();
                        done();
                    })
                    .fail((err)=>{
                        console.log("err");
                        done.fail();
                    })
                }
                catch(err){
                    console.log(err);
                    done.fail("error happened");

                }

                
        })();
    });

/*
    it("should fs://.all_local works(C8oFsAllLocal)", async (done) => {
        inject([C8o], async (c8o: C8o) => {
            c8o.init(Stuff.C8o)
                .catch((err: C8oException) => {
                    expect(err).toBeUndefined();
                });
                await c8o.finalizeInit();
                console.log("finit")
                try {
                    c8o.callJson("moveFile.login")
                    .then((resp, params)=>{
                        console.log("resp login");
                        done();
                        return c8o.callJson("moveFile.moveFile");
                    })
                    .then((resp, params)=>{
                        console.log("resp");
                        done();
                        return null;
                    })
                    .fail((err)=>{
                        console.log("err");
                        done();
                    })

    


                }
                catch(err){
                    console.log(err);
                    done.fail("error happened");

                }

                
        })();
    });

    /***/

    
});