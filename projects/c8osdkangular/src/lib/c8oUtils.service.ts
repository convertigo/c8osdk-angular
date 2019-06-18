import {C8oUtilsCore} from "../c8osdk-js-core/src/index";
//import {C8oUtilsCore} from "c8osdkjscore";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class C8oUtils extends C8oUtilsCore{

    public constructor(private http: HttpClient) {
        super();
        this.http = http;
    }

}