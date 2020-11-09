import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpXsrfTokenExtractor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import {C8o} from "./c8o.service";

@Injectable()
export class HttpXsrfInterceptor implements HttpInterceptor {
  private headerName: string = "x-xsrf-token";
  private fetch: string = "Fetch";
  constructor(private tokenExtractor: HttpXsrfTokenExtractor, private c8o: C8o) {
    this.c8o.xsrfUsed = true;
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // get stored headerValue or fetch if the is no stored headerValue
    const headerValue = window.localStorage.getItem(this.headerName) != undefined ? window.localStorage.getItem(this.headerName) : this.fetch;
    // clone request adding xsrf header
    req = req.clone({ headers: req.headers.set(this.headerName, headerValue)});
    // re-execute request, and get HttResponses or HttpErrorResponses
    return next.handle(req)
    .pipe(
      filter(event => event instanceof HttpResponse || event instanceof HttpErrorResponse),
      tap((event: HttpResponse<any>) => {
        // get and store new xsrf value
        const xsrfResponseHeader = event["headers"]["get"](this.headerName);
        xsrfResponseHeader != undefined ? window.localStorage.setItem(this.headerName, xsrfResponseHeader) : null;
      })
    );
  }
}
