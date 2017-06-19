import {Response, Headers} from "@angular/http";
import {C8o} from "./c8o.service";
import {Observable} from "rxjs";
import {C8oExceptionMessage} from "./Exception/c8oExceptionMessage.service";
import {C8oHttpRequestException} from "./Exception/c8oHttpRequestException.service";

export class C8oHttpInterface {
    c8o: C8o;
    timeout: number;
    firstCall: boolean = true;
    p1: Promise<Object>;

    constructor(c8o: C8o) {
        this.c8o = c8o;
        this.timeout = this.c8o.timeout;
    }

    transformRequest(parameters: Object): string {
        let str = [];
        for (let p in parameters) {
            if (parameters[p] instanceof Array) {
                for (let p1 in parameters[p]) {
                    //noinspection JSUnfilteredForInLoop
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(parameters[p][p1]));
                }
            }
            else {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(parameters[p]));
            }
        }
        let query = str.join("&");
        // Add this to instruct Convertigo server to remove any name space in the jSON keys
        // to prevent keys like this:  'namespace:key'
        return (query + "&__removeNamespaces=true");
    }

    async handleRequest(url: string, parameters: Object): Promise<any> {
        // get rid of the optional trailing #RouteHint present in the sequence
        if (parameters["__sequence"] !== undefined) {
            if (parameters["__sequence"].indexOf("#") !== -1) {
                parameters["__sequence"] = parameters["__sequence"].substring(0, parameters["__sequence"].indexOf("#"));
            }
        }
        let headers = new Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        // headers.append("User-Agent", "Convertigo Client SDK " + C8o.getSdkVersion());

        if (this.firstCall) {
            this.p1 = new Promise((resolve) => {
                this.firstCall = false;
                this.c8o.httpPublic.post(url, this.transformRequest(parameters), {
                    headers: headers,
                    withCredentials: true
                })
                    .map(this.extractData)
                    .catch(this.handleError)
                    .subscribe(
                        response => resolve(response),
                        error => {resolve({"error" : (new C8oHttpRequestException(C8oExceptionMessage.runHttpRequest(), error))}); }
                    );
            });
            return this.p1;
        }
        else {
            return new Promise((resolve, reject) => {
                Promise.all([this.p1]).then(() => {
                    this.c8o.httpPublic.post(url, this.transformRequest(parameters), {
                        headers: headers,
                        withCredentials: true
                    })
                        .map(this.extractData)
                        .catch(this.handleError)
                        .subscribe(
                            response => { resolve(response); },
                            error => { reject((new C8oHttpRequestException(C8oExceptionMessage.runHttpRequest(), error))); }
                        );

                }).catch((error) => {
                    reject(error);
                });
            });
        }
    }

    private extractData(res: Response) {
        return res.json();
    }

    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || "";
            let err;
            if (body.error !==  undefined) {
                err = body.error;
            }
            else if (body.isTrusted !== undefined) {
                err = "{\"isTrusted\":" + body.isTrusted + "}";
            }
            else {
                err = JSON.stringify(body);
            }
            errMsg = `${error.status} - ${error.statusText || ""} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Observable.throw(errMsg);
    }

    handleC8oCallRequest(url: string, parameters: Object): Promise<any> {
        this.c8o.c8oLogger.logC8oCall(url, parameters);
        return this.handleRequest(url, parameters);
    }
}