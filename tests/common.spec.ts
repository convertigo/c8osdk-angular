import {inject, TestBed, async} from "@angular/core/testing";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import "rxjs/Rx";
import any = jasmine.any;
import {C8o} from "../src/c8o/c8o.service";
import {C8oUtils} from "../src/c8o/c8oUtils.service";
import{ C8oSettings, C8oLogLevel, C8oException, C8oExceptionMessage, C8oProgress, C8oRessourceNotFoundException, C8oResponseJsonListener, C8oHttpRequestException } from "c8osdkjscore";

import { Info, Stuff} from "./utils.help";
import {HttpClientModule} from "@angular/common/http";

declare var require: any;

describe("provider: common verifications", () => {
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
/**/

    it("should check bad requestable (badRequest)", function(done) {
        inject([C8o], (c8o: C8o) => {
        const settings: C8oSettings = new C8oSettings().setLogLevelLocal(C8oLogLevel.DEBUG);
        settings
            .setEndPoint(Info.endpoint)
            .setLogRemote(false)
            .setLogLevelLocal(C8oLogLevel.ERROR);
        c8o.init(settings).then(() => {
            c8o.callJson("badRequest")
            .then(() => {
                done.fail("it's supposed to triggered an error");
                return null;
            })
            .fail((err, params)=>{
                expect(err.toJSON().message).toContain("is not a valid Convertigo endpoint")
                done();
            });
        })
        })();
    });
    it("should check sdk version (CheckVersion)", function (done) {
        inject([C8o], (c8o: C8o) => {
            let settings: C8oSettings = new C8oSettings();
            settings
                .setEndPoint(Info.endpoint)
                .setLogRemote(false)
                .setLogLevelLocal(C8oLogLevel.ERROR);
            c8o.init(settings).catch((err: C8oException) => {
                expect(err).toBeUndefined();
            }).then(() => {
                expect(c8o.sdkVersion).toBe(require("../package.json").version);
                done();
            })
        })();
    });


    it("should check someParams (CheckParams)", function (done) {
            inject([C8o], (c8o: C8o) => {
                let settings: C8oSettings = new C8oSettings();
                settings
                    .setEndPoint(Info.endpoint)
                    .setLogRemote(false)
                    .setLogLevelLocal(C8oLogLevel.ERROR);
                c8o.init(settings).catch((err: C8oException) => {
                    expect(err).toBeUndefined();
                }).then(() => {
                    c8o.couchUrl = "http://fakecoururl.com";
                    expect(c8o.couchUrl).toBe("http://fakecoururl.com");
                    c8o.logC8o = true;
                    expect(c8o.logC8o).toBe(true);
                    c8o.logLevelLocal = C8oLogLevel.ERROR;
                    expect(c8o.logLevelLocal).toBe(C8oLogLevel.ERROR);
                    expect(c8o.toString()).toBe("C8o[" + Info.endpoint + "]");
                    expect(c8o.endpointIsSecure).toBe(true);
                    expect(c8o.endpointHost).toBe(Info.host);
                    expect(c8o.endpointPort).toBe(":" + Info.port);
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
        inject([C8o], (c8o: C8o) => {

            c8o.log.info("Test log after init");
            setTimeout(()=>{

                c8o.init(Stuff.C8o).then(()=>{
                    setTimeout(()=>{ done(); }, 2000);
                }).catch((err: C8oException) => {
                    expect(err).toBeUndefined();
                });


            }, 5000);

        })();

    });



    it("should verify C8oExceptionMessages (C8oExceptionsMessages)", function (done) {
            new C8oRessourceNotFoundException("a", new Error("abc"));
            expect(C8oExceptionMessage.notImplementedFullSyncInterface()).toBe("You are using the default FullSyncInterface which is not implemented");
            expect(C8oExceptionMessage.invalidParameterValue("params", "details")).toBe("The parameter 'params' is invalid, details");
            expect(C8oExceptionMessage.wrongListener(new C8oResponseJsonListener((JSON, Object) => {}))).toBe("The C8oListener class object is not handled");
            expect(C8oExceptionMessage.missingValue("val")).toBe("The val is missing");
            expect(C8oExceptionMessage.unknownValue("valName", "val")).toBe("The valName value val is unknown");
            expect(C8oExceptionMessage.unknownType("valName", "val")).toBe("The valName type " + C8oUtils.getObjectClassName("val") + "is unknown");
            expect(C8oExceptionMessage.ressourceNotFound("ress")).toBe("The ress was not found");
            expect(C8oExceptionMessage.toDo()).toBe("TODO");
            expect(C8oExceptionMessage.illegalArgumentInvalidFullSyncDatabaseUrl("http://fakeurl.com")).toBe("The fullSync database url 'http://fakeurl.com' is not a valid url");
            expect(C8oExceptionMessage.FullSyncDatabaseInitFailed("dbname")).toBe( "Failed to initialize the FullSync database 'dbname'");
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
            C8oExceptionMessage.WrongListener(new C8oResponseJsonListener((JSON, Object) => {}));
            C8oExceptionMessage.wrongResult("a");
            C8oExceptionMessage.todo();
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

    it("should returns and IllegalArgument Exception (C8oBadEndpoint)", function (done) {
            inject([C8o], (c8o: C8o) => {
                let settings: C8oSettings = new C8oSettings();
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
        async(inject([C8o], (c8o: C8o) => {
            let exceptionLog;
            let settings: C8oSettings = new C8oSettings();
            settings
                .setEndPoint("http://" + Info.host + "ee" + Info.port + Info.project_path)
                .setLogOnFail((exception: Error) => {
                    exceptionLog = exception;
                })
                .setLogLevelLocal(C8oLogLevel.FATAL);
            c8o.init(settings)
                .then(() => {
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
                                expect(expection instanceof C8oHttpRequestException).toBeTruthy();

                                expect(exceptionLog).not.toBeNull();
                                expect(exceptionLog instanceof C8oException).toBeTruthy();
                                exceptionLog = exceptionLog["cause"];
                                expect(expection instanceof C8oHttpRequestException).toBeTruthy();
                            });
                    }, 250);
                })
                .catch((err: C8oException) => {
                    expect(err).toBeUndefined();
                });
        }))
    );
/**/

});
