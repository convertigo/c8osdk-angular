import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { C8o } from "c8osdkangular";
import { HttpClient } from 'selenium-webdriver/http';
import {HttpClientModule} from "@angular/common/http"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [C8o],
  bootstrap: [AppComponent]
})
export class AppModule { }
