
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'
import {HttpClientModule} from "@angular/common/http"
import {C8oSettings, C8o } from "../../dist/c8osdkangular/fesm5/c8osdkangular";


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
export class AppModule { 
  
}
