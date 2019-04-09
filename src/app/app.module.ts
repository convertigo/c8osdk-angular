
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'
import {HttpClientModule} from "@angular/common/http"
import {C8o } from "c8osdkangular";
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
  providers: [C8o],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
