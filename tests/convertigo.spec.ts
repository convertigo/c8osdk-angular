import { C8o }                        from '../src/c8o/c8o.service'
import {inject, TestBed, async} from    "@angular/core/testing";
import {Http, ConnectionBackend, XHRBackend} from "@angular/http";
import {C8oSettings} from "../src/c8o/c8oSettings.service";
import {C8oLogLevel} from "../src/c8o/c8oLogLevel.service";
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import 'rxjs/Rx';

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

    it('should properly instancied',
        async(inject([C8o], (c8o: C8o) => {
            let settings: C8oSettings = new C8oSettings();
            settings.setDefaultDatabaseName("retaildb")
                    .setLogRemote(true)
                    .setLogC8o(true)
                    .setLogLevelLocal(C8oLogLevel.DEBUG)
                    .setTrustAllCertificates(true)
                    .setEndPoint("http://localhost:9876/convertigo/projects/sampleMobileRetailStoreAngular2");

            c8o.init(settings);

            c8o.callJson("sampleSDKBackend.select_shop", "shopCode", "42")
            .then(
                (response: any, parameters: Object) => {
                    expect(response["document"].shopCode).toBe('42');
                    return null;
                })
            .fail((error, parmeters) => {
                expect(error).toBe(undefined)
            });
        }))
    );

});
