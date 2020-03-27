import {C8oCore, C8oLogger, C8oSettings, C8oException, C8oExceptionMessage, C8oFullSyncCbl, C8oFullSync, C8oFullSyncDatabase} from "../c8osdk-js-core/src/index";
//import {C8oCore, C8oLogger, C8oSettings, C8oException, C8oExceptionMessage, C8oFullSyncCbl, C8oFullSync} from "c8osdkjscore";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {C8oHttpInterface} from "./c8oHttpInterface.service";

@Injectable()
export class C8o extends C8oCore {

    constructor(private http: HttpClient) {
        super();
        this._http = http;
    }

    /**
     * get current sdk version
     */
    public get sdkVersion(): string {
        return "3.0.8-beta4";
    }
    /**
     * Method to bastract http get
     * @param uri the uri for given request
     */
    public httpGetObservable(uri){
        return this.httpPublic.get(uri);
    }

    /**
     * Init http interface in client sdk
     */
    public initC8oHttInterface(){
        this.httpInterface = new C8oHttpInterface(this);
    }
}