import {HttpResponse, HttpHeaders, HttpRequest, HttpEventType, HttpProgressEvent} from "@angular/common/http";
import {C8o} from "./c8o.service";
import 'rxjs/add/operator/retry';
import {C8oExceptionMessage} from "./Exception/c8oExceptionMessage.service";
import {C8oHttpRequestException} from "./Exception/c8oHttpRequestException.service";
import {C8oResponseJsonListener, C8oResponseListener, C8oResponseProgressListener} from "./c8oResponse.service";
import {C8oProgress} from "./c8oProgress.service";

export class C8oHttpInterface {
    c8o: C8o;
    timeout: number;
    firstCall: boolean = true;
    p1: Promise<Object>;
    private _isCordova = null;
    private _isPluginFile = null;

    constructor(c8o: C8o) {
        this.c8o = c8o;
        this.timeout = this.c8o.timeout;
    }

    checkFile(parameters: Object): number{
        for (let p in parameters) {
            if (parameters[p] instanceof Array) {
                for (let p1 in parameters[p]) {
                    //noinspection JSUnfilteredForInLoop
                    if(parameters[p][p1] instanceof FileList){
                        return 1;
                    }
                    else if(this.isCordova()){
                        if(parameters[p][p1] instanceof window["cordova"]["file"]){
                            return 2;
                        }
                    }
                }
            }
            else {
                if(parameters[p] instanceof FileList){
                    return 1;
                }
            }
        }
        return 0;
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
    transformRequestformdata(parameters: Object): FormData {
        let formdata : FormData=  new FormData();
        for (let p in parameters) {
            if (parameters[p] instanceof Array) {
                for (let p1 in parameters[p]) {
                    if(parameters[p][p1] instanceof FileList){
                        for (var i = 0; i < parameters[p][p1].length; i++) {
                            formdata.append(p, parameters[p][p1][i], parameters[p][p1][i].name);
                        }
                    }
                    else{
                        formdata.append(p, parameters[p][p1])
                    }
                }
            }
            else {
                if(parameters[p] instanceof FileList) {
                    for (var j = 0; j < parameters[p].length; j++) {
                        formdata.append(p, parameters[p][j], parameters[p][j].name);
                    }
                }
                else{
                    formdata.append(p, parameters[p]);
                }
            }
        }
        return formdata;
    }



    transformRequestfilecordova(parameters: Object): any {
        let formdata : FormData=  new FormData();
        for (let p in parameters) {
            if (parameters[p] instanceof Array) {
                for (let p1 in parameters[p]) {
                    if(parameters[p][p1] instanceof FileList){
                        for (var i = 0; i < parameters[p][p1].length; i++) {
                            formdata.append(p, parameters[p][p1][i], parameters[p][p1][i].name);
                        }
                    }
                    else{
                        formdata.append(p, parameters[p][p1])
                    }
                }
            }
            else {
                if(parameters[p] instanceof FileList) {
                    for (var j = 0; j < parameters[p].length; j++) {
                        formdata.append(p, parameters[p][j], parameters[p][j].name);
                    }
                }
                else{
                    formdata.append(p, parameters[p]);
                }
            }
        }
        return formdata;
    }

    private isCordova():boolean{
        if(this._isCordova == null){
            if(window["cordova"]!= undefined){
                this._isCordova = true;
            }
            else{
                this._isCordova = false;
            }
        }
        return this._isCordova;
    }

    private isPluginFile():boolean{
        if(this._isPluginFile == null){
            if(window["cordova"]["file"]!= undefined){
                this._isPluginFile = true;
            }
            else{
                this._isPluginFile = false;
            }
        }
        return this._isPluginFile;
    }

    private preHandleRequest(url:string, parameters: Object, headers: Headers) {
        // get rid of the optional trailing #RouteHint present in the sequence

    }

    async handleRequest(url: string, parameters: Object, c8oResponseListener?: C8oResponseListener): Promise<any> {

        if (parameters["__sequence"] !== undefined) {
            if (parameters["__sequence"].indexOf("#") !== -1) {
                parameters["__sequence"] = parameters["__sequence"].substring(0, parameters["__sequence"].indexOf("#"));
            }
        }
        switch (this.checkFile(parameters)){
            //Angular Http
            case 0: {
                parameters = this.transformRequest(parameters);
                let headers = new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded");
                if (this.firstCall) {
                    this.p1 = new Promise((resolve, reject) => {
                        this.firstCall = false;
                        this.c8o.httpPublic.post(url, parameters, {
                            headers: headers,
                            withCredentials: true
                        })
                            .retry(1)
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
                            this.c8o.httpPublic.post(url, parameters, {
                                headers: headers,
                                withCredentials: true
                            })
                                .retry(1)
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
            case 1: {
                let form = this.transformRequestformdata(parameters);
                let headers = new HttpHeaders().set('Accept', 'application/json');
                let progress: C8oProgress = new C8oProgress();
                progress.pull = false;
                let varNull: JSON = null;

                if (this.firstCall) {
                    this.p1 = new Promise((resolve) => {
                        this.firstCall = false;
                        const httpRequest = new HttpRequest('POST', url, form, {reportProgress: true, withCredentials: true, headers: headers});
                       this.c8o.httpPublic.request(httpRequest).subscribe(
                           event=>{
                               if (event.type === HttpEventType.UploadProgress) {
                                   this.handleProgress(event, progress, parameters, c8oResponseListener, varNull);
                               } else if (event instanceof HttpResponse) {
                                  resolve(event);
                               }
                               },
                           error => { resolve({"error" :(new C8oHttpRequestException(C8oExceptionMessage.runHttpRequest(), error))}); })

                    });
                    return this.p1;
                }
                else {
                    return new Promise((resolve, reject) => {
                        Promise.all([this.p1]).then(() => {
                            const httpRequest = new HttpRequest('POST', url, form, {reportProgress: true, withCredentials: true, headers: headers});
                            this.c8o.httpPublic.request(httpRequest).subscribe(
                                event=>{
                                    if (event.type === HttpEventType.UploadProgress) {
                                        this.handleProgress(event, progress, parameters, c8oResponseListener, varNull);

                                    } else if (event instanceof HttpResponse) {
                                        resolve(event);
                                    }
                                },
                                error => { reject((new C8oHttpRequestException(C8oExceptionMessage.runHttpRequest(), error))); })

                        });
                    });
                }

            }
            case 2: {

            }
        }

    }
    handleProgress(event: HttpProgressEvent, progress: C8oProgress, parameters: any, c8oResponseListener: C8oResponseListener, varNull: JSON){
        progress.current = event.loaded;
        progress.total = event.total;
        if(event.loaded != event.total){
            progress.finished = false;
        }
        else{
            progress.finished = true;
        }
        parameters[C8o.ENGINE_PARAMETER_PROGRESS] = progress;
        (c8oResponseListener as C8oResponseJsonListener).onJsonResponse(varNull, parameters);
    }

    /*handleC8oCallRequest(url: string, parameters: Object): Promise<any> {
        this.c8o.c8oLogger.logC8oCall(url, parameters);
        return this.handleRequest(url, parameters);
    }*/
}