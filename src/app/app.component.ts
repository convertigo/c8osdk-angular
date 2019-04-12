import { Component } from '@angular/core';
import {C8oSettings,C8oLogLevel, C8o,C8oException, C8oProgress, C8oPromise } from "c8osdkangular";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Convertigo Workspace';


  constructor(private c8o: C8o){
    this.initAllLoginSync();
  }

  public callSequencePing(){
      this.c8o.callJson(".Ping")
      .then((response: any) => {
        console.log("response Ping");
        console.log(response);
        return null;
      })
      .fail((error) => {
        console.error("error");
        console.error(error);
      });


}
  public initAll():Promise<any> {
    return new Promise((resolve)=>{
      let c8oSettings: C8oSettings = new C8oSettings();
      c8oSettings
          .setEndPoint("http://localhost:8080/convertigo/projects/ClientSDKtesting")
          .setDefaultDatabaseName("qa_fs_pull")
          .setLogRemote(true)
          .setLogC8o(true)
          .setLogLevelLocal(C8oLogLevel.DEBUG)
          .addHeader("x-convertigo-mb", "7.6.0-beta")
          .setNormalizeParameters(true)
          .setKeepSessionAlive(true);
          
      this.c8o.init(c8oSettings)
      .catch((err: C8oException) => {
        this.c8o.log.debug("[app][initAll][init] error", err);
      });
      this.c8o.finalizeInit().then(()=>{
        this.c8o.log.debug("[app][initAll][finalizeInit] ok ");
        resolve("init");
      });
    });
    
  }


  public login(): C8oPromise<JSON>{
      return this.c8o.callJson(".LoginTesting")
      
  }

  public sync(): C8oPromise<JSON>{
    return this.c8o.callJson('fs://.sync',"continuous",true);
  }

  public initAllLoginSync(){
    //init all
    this.initAll()
    .then(()=>{
      this.login()
      .then((response: any, parameters: Object) =>{
        this.c8o.log.debug("[app][initAllLoginSync][then login]" + response.toString());
        return this.sync();
      })
      .then((response: any, parameters: Object) =>{
        this.c8o.log.debug("[app][initAllLoginSync][then Sync]" + response.toString());
        return null;
      })
      .progress((progress: C8oProgress)=>{
        this.c8o.log.debug("[app][initAllLoginSync][progress Sync]" + progress.toString());
      })
      .fail((error)=>{
        this.c8o.log.error("[app][initAllLoginSync][error]" + error.toString());
      });
    });
   
  }

  public notifs(){
    this.c8o.handleSessionLost()
    .subscribe((resp)=>{
      alert("Session Lost");
    });
  }

  public notifNet(){
    this.c8o.handleNetworkEvents()
    .subscribe((resp)=>{
      alert("Session Lost");
    });
  }

}
