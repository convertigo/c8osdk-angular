import {inject, TestBed, async} from "@angular/core/testing";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import "rxjs/Rx";
import any = jasmine.any;
import {C8oSettings} from "../src/c8o/c8oSettings.service";
import {C8o} from "../src/c8o/c8o.service";
import {C8oException} from "../src/c8o/Exception/c8oException.service";
import {C8oPromise} from "../src/c8o/c8oPromise.service";
import {Functions, Info, Stuff} from "./utils.help";
import {HttpClientModule} from "@angular/common/http";

describe("provider: basic calls verifications", () => {
    beforeEach(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 50000;
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule,
                BrowserModule
            ],
            providers: [
                C8o
            ]
        });
    });

    it("should ping (C8oDefaultPing)", function (done) {
            inject([C8o], (c8o: C8o) => {
                c8o.init(Stuff.C8o).catch((err: C8oException) => {
                    expect(err).toBeUndefined();
                });
                c8o.callJson(".Ping")
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
        inject([C8o], (c8o: C8o) => {
            (async (): Promise<any> => {
                c8o.init(Stuff.C8o).catch((err: C8oException) => {
                    expect(err).toBeUndefined();
                });
                await c8o.callJson(".Ping", "var1", "val1").async()
                    .then((resp) => {
                        expect(resp["document"]["pong"].var1).toBe("val1")
                    })
                    .catch((err) => {
                        expect(err).toBeNull();
                    });

                done();
            })().catch(() => {
                done.fail("error is not supposed to happend");
            });
        })();

    });

    it("should ping Observable (C8oDefaultPingObservable)", (done) => {
        inject([C8o], (c8o: C8o) => {
            c8o.init(Stuff.C8o).catch((err: C8oException) => {
                expect(err).toBeUndefined();
            });
            let observable = c8o.callJson(".Ping", "var1", "val1").toObservable();
            observable.subscribe(
                (response) => {
                    expect(response["document"]["pong"].var1).toBe("val1");
                },
                (error) => {
                    expect(error).toBeNull();
                },
                () => {
                    done();
                }
            )
        })();

    });


    it("should ping one single value (C8oDefaultPingOneSingleValue)", function (done) {
            inject([C8o], (c8o: C8o) => {
                c8o.init(Stuff.C8o).catch((err: C8oException) => {
                    expect(err).toBeUndefined();
                });
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

    it("should ping two single value (C8oDefaultPingTwoSingleValues)", function (done) {
            inject([C8o], (c8o: C8o) => {
                c8o.init(Stuff.C8o).catch((err: C8oException) => {
                    expect(err).toBeUndefined();
                });
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

    it("should ping two single value and one value multi (C8oDefaultPingTwoSingleValuesOneMulti)", function (done) {
            inject([C8o], (c8o: C8o) => {
                c8o.init(Stuff.C8o).catch((err: C8oException) => {
                    expect(err).toBeUndefined();
                });
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

    it("should ping two single value and two value multi (C8oDefaultPingTwoSingleValuesTwoMulti)", function (done) {
            inject([C8o], (c8o: C8o) => {
                c8o.init(Stuff.C8o).catch((err: C8oException) => {
                    expect(err).toBeUndefined();
                });
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
    it("should check Json types (C8oCheckJsonTypes)", function (done) {
            inject([C8o], (c8o: C8o) => {
                c8o.init(Stuff.C8o).catch((err: C8oException) => {
                    expect(err).toBeUndefined();
                });
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

    it("should check that sessions are not mixed (CheckNoMixSession)", function (done) {
            inject([C8o], (c8o: C8o) => {
                c8o.init(Stuff.C8o).catch((err: C8oException) => {
                    expect(err).toBeUndefined();
                });
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

    it("should check that log remote works (CheckLogRemote)", function (done) {
            inject([C8o], (c8o: C8o) => {
                let c8oSettings: C8oSettings = new C8oSettings();
                c8oSettings.setLogC8o(false);
                c8oSettings.setEndPoint(Info.endpoint);
                c8o.init(c8oSettings)
                    .then(() => {
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
                                            expect(response["document"]["line"]).toBeUndefined();
                                            done();
                                            return null;
                                        });
                                }, 333);
                            }, 333);
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

    it("should check that one default promise works (C8oDefaultPromiseXmlOne)", function (done) {
            inject([C8o], (c8o: C8o) => {
                c8o.init(Stuff.C8o).catch((err: C8oException) => {
                    expect(err).toBeUndefined();
                });

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

    it("should check that three default promises works (C8oDefaultPromiseJsonThree)", function (done) {
            inject([C8o], (c8o: C8o) => {
                c8o.init(Stuff.C8o).catch((err: C8oException) => {
                    expect(err).toBeUndefined();
                });

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

    it("should check that a promise could fail (C8oDefaultPromiseFail)", function (done) {

            inject([C8o], (c8o: C8o) => {
                c8o.init(Stuff.C8o).catch((err: C8oException) => {
                    expect(err).toBeUndefined();
                });
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

    it("should check that a promise could be nested (C8oDefaultPromiseNested)", function (done) {
            inject([C8o], (c8o: C8o) => {
                c8o.init(Stuff.C8o).catch((err: C8oException) => {
                    expect(err).toBeUndefined();
                });
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

    it("should check that a promise could be nested and failed (C8oDefaultPromiseNestedFail)", function (done) {
            inject([C8o], (c8o: C8o) => {
                c8o.init(Stuff.C8o).catch((err: C8oException) => {
                    expect(err).toBeUndefined();
                });
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

    it("should check that a promise could stored in var (C8oDefaultPromiseInVar)", function (done) {
            inject([C8o], (c8o: C8o) => {
                c8o.init(Stuff.C8o).catch((err: C8oException) => {
                    expect(err).toBeUndefined();
                });
                let xjson: Array<any> = [];
                let promise: C8oPromise<any> = c8o.callJson(".Ping", "var1", "step 1");
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
});