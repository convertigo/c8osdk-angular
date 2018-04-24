import {C8oUtilsCore} from "c8osdkjscore";
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";


@Injectable()
export class C8oUtils extends C8oUtilsCore{

    public constructor(private http: Http) {
        super();
        this.http = http;
    }

}