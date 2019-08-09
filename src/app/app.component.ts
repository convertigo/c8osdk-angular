import { Component } from '@angular/core';
import {C8oAlldocsLocal,C8oSettings,C8oLogLevel, C8o,C8oException, C8oProgress, C8oPromise, C8oSessionStatus } from "c8osdkangular";
import PouchDB from "pouchdb-browser";
import { C8oNetworkStatus } from 'projects/c8osdkangular/src/public_api';
import { reject } from 'q';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mycolorvar = "#3880ff"
  title = 'Convertigo Workspace';
  someFunctionThatReturnStyleObject(){
    return { 'mycolorvar': '#3880ff'};
  }
/*
756 / 230 pas ok quand database attachment
756 / 230 ok quand pas attachement

760 / 230 pas ok quand database attachment
760 / 230 ok quand pas attachement
*/

  constructor(private c8o: C8o){
    ///this.initAllLoginSync();
    this.testCONV265()
    //this.c8o.network.status
    /*let a = new Promise((resolve, reject)=>{
      console.log("a");
      reject("woooooo")
    })
    let b = new Promise((resolve, reject)=>{
      console.log("a");
      reject("woooooo")
    })

    Promise.all([a])
    .then(()=>{
      console.log("b");
    })
    .catch((e)=>{
      console.log(e);
    })*/
  }
  getStatus(){
    switch(this.c8o.session.status){
      case C8oSessionStatus.Connected:
        return "Connected"
        break;
        case C8oSessionStatus.Disconnected:
            return "Disconnected"
            break;
        case C8oSessionStatus.HasBeenConnected:
        return "HasBeenConnected"
        break;
        case C8oSessionStatus.HasBeenDisconnected:
        return "HasBeenDisconnected"
        break;
        case C8oSessionStatus.Ignore:
        return "Ignore"
        break;
    }
  }
  getNetwork(){
    switch(this.c8o.network.status){
      case C8oNetworkStatus.Reachable:
        return "Reachable"
        break;
        case C8oNetworkStatus.NotReachable:
            return "NotReachable"
            break;
        case C8oNetworkStatus.Offline:
        return "Offline"
        break;
    }
  }
  getUser(){
    return "name: " + this.c8o.session.user.name+ " authenticated: " + this.c8o.session.user.authenticated+" sessionId: " + this.c8o.session.user.sessionId
  }
  getOldUser(){
    return "name: " + this.c8o.session.olduser.name+ " authenticated: " + this.c8o.session.olduser.authenticated+" sessionId: " + this.c8o.session.olduser.sessionId
  }
  public url756 = "http://192.168.99.100:28080/convertigo/projects/ClientSDKtesting2";
  public baseName756 = "testatt21";

  public url760 = "http://c8o-dev.convertigo.net:80/cems/projects/ClientSDKtesting";
  public baseName760 = "testatt21";



  public async deleteDB(){
    var dbDeleteRequest = window.indexedDB.deleteDatabase("_pouch_db_not_exist_device");
            dbDeleteRequest.onerror = (event)=> {
                console.log("Error while deleting database.", true);
            };
        
            dbDeleteRequest.onsuccess = (event)=> {
              new PouchDB("db_not_exist_device").on("error", ()=>{
                console.log("e"); 
              })
                /*console.log("Success while deleting database.", true);
                // Let us open our database
                var DBOpenRequest = window.indexedDB.open("_pouch_db_not_exist_device", 5);
        
                DBOpenRequest.onsuccess = (event)=> {
                  console.log('<li>Database initialised.</li>');
                };
        
                DBOpenRequest.onupgradeneeded = (event)=> {
                  console.log('<li>DBOpenRequest.onupgradeneeded</li>');
                };*/
            };
  }
  

  public async testCONV265(){
    this.c8o.init(new C8oSettings().setEndPoint("http://localhost:8080/convertigo/projects/ClientSDKtesting").setLogC8o(true).setLogLevelLocal(C8oLogLevel.TRACE).setKeepSessionAlive(true));
    this.c8o.finalizeInit()
    .then( async (data) => {

      this.c8o.handleSessionLost()
      .subscribe((res)=>{
        console.log("resUniq")
        console.log(res)
      })
      await this.c8o.callJson("ClientSDKtesting.login").async();

      this.c8o.callJson("fs://databasea1.sync", "continuous", true)
      .then((res)=>{
        console.log("res");
        return null;
      })
      .fail((err)=>{
        console.log("err");
      })

  })

}
/*
    try{

      window.onerror = function(message, source, lineno, colno, error) { 
        console.log("there" )
      }
      let db
try {
  db = new PouchDB("db_not_exist_device")
  db = new PouchDB("db_not_exist_device")
  db = new PouchDB("db_not_exist_device")
  db = new PouchDB("db_not_exist_device")
  db = new PouchDB("db_not_exist_device")
}
catch(err){

}
console.log("a")
db.info().then((res)=>{
  console.log("res");
})
.catch((err)=>{
  console.log("err")
})

      /*let req = window.indexedDB.open("_pouch_db_not_exist_device", 5);
            req.onsuccess = (event) => {
              console.log("event");
            }

            req.onerror = (event) => {
              console.log("error");
            }*/
      /*let p = new PouchDB("db_not_exist_device").on("error", ()=>{
        console.log("e"); 
      })
    }
    catch(err){
      console.log("e");
    }
    */
    abc(){
    this.c8o.init(new C8oSettings().setEndPoint("http://c8o-dev.convertigo.net:80/cems/projects/ClientSDKtesting").setLogC8o(true).setLogLevelLocal(C8oLogLevel.TRACE));
    this.c8o.finalizeInit()
    .then( async (data) => {
      Promise.all([
        this.c8o.callJsonObject('fs://db_not_exist.reset',
        { view: 'not-exist', ddoc: "FULL_SYNC_CONFIG" }
        ).async(),
        this.c8o.callJsonObject('fs://db_not_exist.all_local', {}).async(),
        this.c8o.callJsonObject('fs://db_not_exist.reset', {}).async(),
        this.c8o.callJsonObject('fs://db_not_exist.all_local', {}).async()
        ]).then(() =>
        
        { console.log('bbbb'); }
        ).catch((e) =>
          
        { // ne rentre jamais ici console.log('cccc', e); 
        console.log("catch")
        console.error(e)
      }
        ) 
    }).catch((e) =>{
        console.log("e")
        console.log(e)
         // ne rentre jamais ici console.log('cccc', e);
      })
/*      */

  
  
  
  
  
  
  
  
  
 }


  
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
              //let db = new PouchDB("_mabaseLoc_device");

              let c8oAlldocsLocal = new C8oAlldocsLocal(this.c8o);
              //c8oAlldocsLocal.alldocs({},db, baseName)
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
