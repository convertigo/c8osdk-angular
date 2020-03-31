
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http"
import {C8o, HttpXsrfInterceptor } from "c8osdkangular";
import {MatButtonModule} from '@angular/material/button';
/*

    */


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [C8o,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpXsrfInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
