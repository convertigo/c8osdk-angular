import { Component } from '@angular/core';
import {C8oAlldocsLocal,C8oSettings,C8oLogLevel, C8o,C8oException, C8oProgress, C8oPromise } from "c8osdkangular";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Convertigo Workspace';

/*
756 / 230 pas ok quand database attachment
756 / 230 ok quand pas attachement

760 / 230 pas ok quand database attachment
760 / 230 ok quand pas attachement
*/
  constructor(private c8o: C8o){
    ///this.initAllLoginSync();
  }
  public url756 = "http://192.168.99.100:28080/convertigo/projects/ClientSDKtesting2";
  public baseName756 = "testatt21";

  public url760 = "http://c8o-dev.convertigo.net:80/cems/projects/ClientSDKtesting";
  public baseName760 = "testatt21";

  public initAll(url):Promise<any> {
    return new Promise((resolve)=>{
      let c8oSettings: C8oSettings = new C8oSettings();
      c8oSettings
          .setEndPoint(url)
          .setLogRemote(true)
          .setLogC8o(true)
          .setLogLevelLocal(C8oLogLevel.TRACE)
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

  public integALLDOCSLOCAL(){
    let idLoc = "_local/"+new Date().getTime();
    this.initAll(this.url760)
    .then(()=>{
      this.c8o.callJson("fs://mabaseLoc.post", "_id", idLoc)
      .then((res)=>{
        console.log(JSON.stringify(res))
        return this.c8o.callJson("fs://mabaseLoc.post", "_id", "paslocal_"+new Date().getTime());
      })
      .then((res)=>{
        console.log(JSON.stringify(res))
        return this.c8o.callJson("fs://mabaseLoc.all");
      })
      .then((res)=>{
        console.log(JSON.stringify(res))
              console.log("starting test");
              let baseName = "_pouch_mabaseLoc_device"
              let db = new PouchDB("_mabaseLoc_device");

              let c8oAlldocsLocal = new C8oAlldocsLocal();
              c8oAlldocsLocal.alldocs({},db, baseName)
      })
      .fail((err)=>{
        console.log(JSON.stringify(err));
      })
    });
  }

  public test760(){
    this.initAll(this.url760)
    .then(()=>{
      this.c8o.callJson("ClientSDKtesting.LoginTesting")
      .then((res)=>{
        this.c8o.callJson("fs://"+ this.baseName760+".sync", "continuous", true)
        .then((res)=>{
          console.log("then 760")
          console.log(res)
          return this.c8o.callJson("fs://"+ this.baseName760+".info");
          //return this.c8o.callJson("fs://abcdef.get", "docid", "29bc3f5c56e270ad8ae627e8c40020b7", "attachments", true)
        })
        
        .then((res)=>{
          console.log(res);
        })
        .fail((err)=>{
          console.error(err);
        })
        return null;
      })
    })
    .then(()=>{
      console.log("before 760");
      
    })
  }
  public test756(){
    this.initAll(this.url756)
    .then(()=>{
      this.c8o.callJson("ClientSDKtesting2.login")
      .then((res)=>{
        console.log("before 756");
      this.c8o.callJson("fs://"+ this.baseName756+".sync")
      .then((res)=>{
        console.log("then 756")
        console.log(res)
        return this.c8o.callJson("fs://"+ this.baseName756+".info");
        //return this.c8o.callJson("fs://abcdef.get", "docid", "29bc3f5c56e270ad8ae627e8c40020b7", "attachments", true)
      })
      
      .then((res)=>{
        console.log(res);
      })
      .fail((err)=>{
        console.error(err);
      })
        return null;
      })
      
    })
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
