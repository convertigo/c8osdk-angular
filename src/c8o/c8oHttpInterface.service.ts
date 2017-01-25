import {Response, Headers} from "@angular/http";
import {C8o} from "./c8o.service";
import {Observable} from "rxjs";

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
        for (let p in parameters)
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(parameters[p]));
        return str.join("&");
    }

    handleRequest(url: string, parameters: Object): Promise<any> {
        // get rid of the optional trailing #RouteHint present in the sequence
        if (parameters["__sequence"] !== undefined) {
            if (parameters["__sequence"].indexOf("#") !== -1) {
                parameters["__sequence"] = parameters["__sequence"].substring(0, parameters["__sequence"].indexOf("#"));
            }
        }
        let headers = new Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        if (this.firstCall) {
            this.p1 = new Promise((resolve, reject) => {
                this.firstCall = false;
                this.c8o.httpPublic.post(url, this.transformRequest(parameters), {
                    headers: headers
                })
                    .map(this.extractData)
                    .catch(this.handleError)
                    .subscribe(
                        response => resolve(response),
                        error => reject(error)
                    );
            });
            return this.p1;
        }
        else {
            return new Promise((resolve, reject) => {
                Promise.all([this.p1]).then(() => {
                    this.c8o.httpPublic.post(url, this.transformRequest(parameters), {
                        headers: headers
                    })
                        .map(this.extractData)
                        .catch(this.handleError)
                        .subscribe(
                            response => resolve(response),
                            error => reject(error)
                        );

                }).catch((error) => {
                    reject(error);
                });
            });
        }
    }

    private extractData(res: Response) {
        let body = res.json();
        return body;
    }

    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || "";
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ""} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    handleC8oCallRequest(url: string, parameters: Object): Promise<any> {
        this.c8o.c8oLogger.logC8oCall(url, parameters);
        return this.handleRequest(url, parameters);
    }
}