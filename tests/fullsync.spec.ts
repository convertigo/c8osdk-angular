/*import {inject, TestBed, async} from "@angular/core/testing";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import "rxjs/Rx";
import any = jasmine.any;
import {C8oSettings, C8oLogLevel, C8oException, C8oExceptionMessage, C8oPromise, C8oHttpRequestException, C8oProgress, C8oLocalCache, Priority, C8oFullSyncChangeListener, C8oResponseJsonListener, C8oRessourceNotFoundException} from "../node_modules/c8osdkjscore/src/index";

import {C8o} from "../src/c8o/c8o.service";


import {C8oUtils} from "../src/c8o/c8oUtils.service";
import {Functions, Info, PlainObjectA, PlainObjectB, Stuff} from "./utils.help";
import {HttpClientModule} from "@angular/common/http";

describe("provider: fullsync verifications", () => {
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
    it("should check that Fullsync Post Get Delete works (C8oFsPostGetDelete)", function (done) {
            inject([C8o], (c8o: C8o) => {
                c8o.init(Stuff.C8o_FS).catch((err: C8oException) => {
                    expect(err).toBeUndefined();
                });
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

    it("should check that Fullsync Post Get Delete works with rev (C8oFsPostGetDeleteRev)", function (done) {
            inject([C8o], function (c8o: C8o) {
                c8o.init(Stuff.C8o_FS).catch((err: C8oException) => {
                    expect(err).toBeUndefined();
                });
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

    it("should check that Fullsync Post Get Destoy Create works (C8oFsPostGetDestroyCreate)", function (done) {
            inject([C8o], function (c8o: C8o) {
                c8o.init(Stuff.C8o_FS).catch((err: C8oException) => {
                    expect(err).toBeUndefined();
                });
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

    it("should check that Fullsync Post Reset works (C8oFsPostReset)", function (done) {
            inject([C8o], function (c8o: C8o) {
                c8o.init(Stuff.C8o_FS).catch((err: C8oException) => {
                    expect(err).toBeUndefined();
                });
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

    it("should check that Fullsync Post on existing is not working(C8oFsPostExisting)", function (done) {
            inject([C8o], function (c8o: C8o) {
                c8o.init(Stuff.C8o_FS).catch((err: C8oException) => {
                    expect(err).toBeUndefined();
                });
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

    it("should check that Fullsync Post on existing with policy none is not working(C8oFsPostExistingPolicyNone)", function (done) {
            inject([C8o], function (c8o: C8o) {
                c8o.init(Stuff.C8o_FS).catch((err: C8oException) => {
                    expect(err).toBeUndefined();
                });
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

    it("should check that Fullsync Post on existing with policy create works (C8oFsPostExistingPolicyCreate)", function (done) {
            inject([C8o], function (c8o: C8o) {
                c8o.init(Stuff.C8o_FS).catch(() => {
                    done.fail("error is not supposed to happend");
                });
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

    it("should check that Fullsync Post on existing with policy override works (C8oFsPostExistingPolicyOverride)", function (done) {
            inject([C8o], function (c8o: C8o) {
                c8o.init(Stuff.C8o_FS).catch(() => {
                    done.fail("error is not supposed to happend");
                });
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

    it("should check that Fullsync Post on existing with policy merge works (C8oFsPostExistingPolicyMerge)", function (done) {
            inject([C8o], function (c8o: C8o) {
                c8o.init(Stuff.C8o_FS).catch(() => {
                    done.fail("error is not supposed to happend");
                });
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

    it("should check that Fullsync Post on existing with policy merge works with sub values (C8oFsPostExistingPolicyMergeSub)", function (done) {
            inject([C8o], function (c8o: C8o) {
                c8o.init(Stuff.C8o_FS).catch(() => {
                    done.fail("error is not supposed to happend");
                });

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

    it("should check that Fullsync Merge object works (C8oFsMergeObject)", function (done) {
            inject([C8o], function (c8o: C8o) {
                c8o.init(Stuff.C8o_FS).catch(() => {
                    done.fail("error is not supposed to happend");
                });
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

    it("should check that Fullsync post get works on several bases (C8oFsPostGetMultibase)", function (done) {
            inject([C8o], function (c8o: C8o) {
                c8o.init(Stuff.C8o_FS).catch(() => {
                    done.fail("error is not supposed to happend");
                });
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

    it("should check that Fullsync replicate ano and auth (C8oFsReplicateAnoAndAuth)", function (done) {
            inject([C8o], function (c8o: C8o) {
                c8o.init(Stuff.C8o_FS_PULL).catch(() => {
                    done.fail("error is not supposed to happend during init");
                });

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

    it("should check that Fullsync replicate pull with progess(C8oFsReplicatePullProgress)", function (done) {
            inject([C8o], function (c8o: C8o) {
                c8o.init(Stuff.C8o_FS_PULL).catch(() => {
                    done.fail("error is not supposed to happend");
                });
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

    it("should check that Fullsync replicate pull ano auth and view works(C8oFsReplicatePullAnoAndAuthView)", function (done) {
            inject([C8o], function (c8o: C8o) {
                c8o.init(Stuff.C8o_FS_PULL).catch(() => {
                    done.fail("error is not supposed to happend");
                });
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

    it("should check that Fullsync view array key works(C8oFsViewArrayKey)", function (done) {
            inject([C8o], function (c8o: C8o) {
                c8o.init(Stuff.C8o_FS_PULL).catch(() => {
                    done.fail("error is not supposed to happend");
                });

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

    it("should check that Fullsync repliacte pull get all works(C8oFsReplicatePullGetAll)", function (done) {
            inject([C8o], function (c8o: C8o) {
                c8o.init(Stuff.C8o_FS_PULL).catch(() => {
                    done.fail("error is not supposed to happend");
                });

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

    it("should check that Fullsync repliacte push auth works(C8oFsReplicatePushAuth)", function (done) {
            inject([C8o], function (c8o: C8o) {
                c8o.init(Stuff.C8o_FS_PUSH).catch(() => {
                    done.fail("error is not supposed to happend");
                });
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

    it("should check that Fullsync repliacte push auth progress works(C8oFsReplicatePushAuthProgress)", function (done) {
            inject([C8o], function (c8o: C8o) {
                c8o.init(Stuff.C8o_FS_PUSH).catch(() => {
                    done.fail("error is not supposed to happend");
                });
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

    it("should check that Fullsync repliacte sync continuous progress works(C8oFsReplicateSyncContinuousProgress)", function (done) {
            inject([C8o], function (c8o: C8o) {
                c8o.init(Stuff.C8o_FS_PUSH).catch(() => {
                    done.fail("error is not supposed to happend");
                });
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
                                                        done();
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


    it("should check that Fullsync repliacte cancel works(C8oFsReplicateCancel)", function (done) {
            inject([C8o], (c8o: C8o) => {
                c8o.init(Stuff.C8o_FS).catch((err: C8oException) => {
                    expect(err).toBeUndefined();
                });
                c8o.callJson("fs://.reset")
                    .then((response: any) => {
                        expect(response["ok"]).toBeTruthy();
                        return c8o.callJson("fs://.replicate_pull", "cancel", true);
                    })
                    .then((response: any) => {
                        expect(response["ok"]).toBeTruthy();
                        return c8o.callJson("fs://.replicate_pull", "cancel", true);
                    })
                    .then((response: any) => {
                        expect(response["ok"]).toBeTruthy();
                        return c8o.callJson("fs://.sync", "cancel", true);
                    })
                    .then((response: any) => {
                        expect(response["ok"]).toBeTruthy();
                        done();
                        return null;
                    })
                    .fail((error) => {
                        done.fail("error is not supposed to happend");
                    });
            })();
        }
    );

    it("should check that Fullsync repliacte cancel when lauching two replication works(C8oFsReplicateCancelOnDoublon)", function (done) {
        inject([C8o], (c8o: C8o) => {
            let state: string;
                c8o.init(Stuff.C8o_FS).catch((err: C8oException) => {
                    expect(err).toBeUndefined();
                });
                c8o.callJson("fs://.reset")
                    .then((response: any) => {
                        expect(response["ok"]).toBeTruthy();
                        c8o.callJson("fs://.replicate_pull")
                            .progress((progress: C8oProgress) => {
                                state = progress["_raw"]["cancelled"];
                                return null;

                            });
                        c8o.callJson("fs://.replicate_pull")
                            .then((response, parameters) => {
                                setTimeout(()=>{
                                        expect(state).toBeTruthy();
                                        done();
                                    }, 3000);

                                return null;
                            });
                        return null;
                    });
            }
        )();
    });

    it("should check that c8o local cache works (C8oLocalCacheXmlPriorityLocal)", function (done) {
            inject([C8o], function (c8o: C8o) {
                c8o.init(Stuff.C8o_LC).catch(() => {
                    done.fail("error is not supposed to happend");
                });
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

    it("should check that c8o fs live changes works (C8oFsLiveChanges)", function (done) {
            inject([C8o], function (c8o: C8o) {
                c8o.init(Stuff.C8o_FS_PUSH).catch(() => {
                    done.fail("error is not supposed to happend");
                });
                let lastChanges: Array<Object> = [];
                lastChanges[0] = null;

                let cptlive: number = 0;
                let firstPass = true;
                let changeListener: C8oFullSyncChangeListener = new C8oFullSyncChangeListener((changes: Object) => {
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
                        console.log(error.cause);
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

    it("should check that Fullsync Put attachment works (C8oFsPutAttachment)", function (done) {
            inject([C8o], (c8o: C8o) => {
                c8o.init(Stuff.C8o_FS).catch((err: C8oException) => {
                    expect(err).toBeUndefined();
                });
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
                        return c8o.callJson("fs://.put_attachment", "docid", id, "name", "text2.txt", "content_type", "text/plain", "content", new Blob(['Hello Convertigo !'], {type: 'text/plain'}));
                    })
                    .then((response: any) => {
                        return c8o.callJson("fs://.get", "docid", id, "attachments", true);
                    })
                    .then((response: any) => {
                        expect(response["_id"]).toBe(myId);
                        expect(response["_attachments"]["text2.txt"]).not.toBeNull();
                        expect(response["_attachments"]["text2.txt"]["content_type"]).toBe("text/plain");
                        done();
                        return null;
                    })
                    .fail((error) => {
                        done.fail("error is not supposed to happend");
                    });
            })();
        }
    );

});
*/