import {C8o} from "./c8o.service";
import {C8oFullSyncCbl, C8oHttpInterfaceCore, C8oResponseJsonListener, C8oResponseListener, C8oProgress,C8oHttpRequestException,C8oExceptionMessage} from "../c8osdk-js-core/src/index";
import {HttpEventType, HttpHeaders, HttpRequest, HttpResponse} from "@angular/common/http";
import { Observable } from 'rxjs';
export class C8oHttpInterface extends C8oHttpInterfaceCore{
    
    constructor(c8o: C8o) {
        super(c8o);
        var a = HttpEventType.UploadProgress;
        console.log(HttpEventType.UploadProgress.toString())
    }

    /**
     * get headers;
     * @param object headers object
     */
    public getHeaders(object):any{
        return new HttpHeaders(object);
    }

    /**
     * Angular implementation to post with progress
     * @param url the url to post
     * @param form the form data to post
     * @param headersObject Headers to use
     * @param progress C8oprogress object
     * @param parameters Given parameters
     * @param c8oResponseListener ResponseListener
     * @param varNull null var
     * @param resolve parents header
     */
    public getuploadRequester(url:string, form: FormData, headersObject:any, progress: C8oProgress, parameters: Object, c8oResponseListener: C8oResponseListener, varNull:any, resolve:any) {
        let headers = new HttpHeaders(headersObject);
        const httpRequest = new HttpRequest('POST', url, form, {reportProgress: true, withCredentials: true, headers: headers});
        this.c8o.httpPublic.request(httpRequest)
        .subscribe(
            event=>{
                if (event.type === HttpEventType.UploadProgress) {
                    this.handleProgress(event, progress, parameters, c8oResponseListener, varNull);
                } else if (event instanceof HttpResponse) {
                    resolve(event);
                }
            },
            error => { 
                resolve({"error" :(new C8oHttpRequestException(C8oExceptionMessage.runHttpRequest(), error))
            });
        });
    }
    

    

    
}