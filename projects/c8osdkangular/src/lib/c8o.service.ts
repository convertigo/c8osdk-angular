import {C8oCore} from "../c8osdk-js-core/src/index";
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
        return "3.0.16-beta42";
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