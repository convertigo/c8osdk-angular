import { Component } from '@angular/core';
import {C8oSettings,C8oLogLevel, C8o,C8oException, C8oProgress } from "../../dist/c8osdkangular/fesm5/c8osdkangular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularWorkspace';
  constructor(private c8o: C8o){
    let c8oSettings: C8oSettings = new C8oSettings();
        c8oSettings
            .setEndPoint("http://localhost:8080/convertigo/projects/ClientSDKtesting")
            .setDefaultDatabaseName("qa_fs_pull")
            .setLogRemote(true)
            .setLogC8o(true)
            .setLogLevelLocal(C8oLogLevel.DEBUG)
            .addHeader("x-convertigo-mb", "7.6.0-beta")
            .setNormalizeParameters(true);
    c8o.init(c8oSettings)
    .catch((err: C8oException) => {
        console.error(err);
    });
    c8o.finalizeInit().then(()=>{



      c8o.handleSessionLost().subscribe((number) => {
        console.log("Subject");
        console.log(number);
        c8o.callJson(".LoginTesting")
        .then((response, paramrs)=>{
          this.c8o.reply().next({abc: 'salutmec'});
          console.log("relogged");
        });
    });




    
        c8o.callJson(".LoginTesting")
        .then((response, paramrs)=>{
          console.log(response);
            return this.c8o.callJson('fs://.sync',"continuous",true)
          })
          .then((response)=>{
            // Do stuff with response
          })
          .progress((progress)=>{
            // Do stuff with progress
          })
          .fail((err)=>{
            console.log(err);
          })
        /*
        .progress((c8oProgress: C8oProgress) => {
            console.log(c8oProgress.toString());
        })
        .then((response:any)=>{
            console.log(JSON.stringify(response));
            
            return null;
        })
        .fail((error) => {
        console.error(error);
      });

      c8o.callJson(".LoginTesting")
        .then((response, paramrs)=>{
            return c8o.callJson(".Ping");
        })
        .then((response: any) => {
                
                return c8o.callJson("fs://.replicate_pull");
        })
        .progress((c8oProgress: C8oProgress) => {
            console.log(c8oProgress.toString());
        })
        .then((response:any)=>{
            console.log(JSON.stringify(response));
            
            return null;
        })
        .fail((error) => {
        console.error(error);
    });




    /*c8o.callJson(".Ping", "var1", "val1")
            .then((resp)=>{
              console.log("resp ping var1" + JSON.stringify(resp.document.pong)); 
              return null; 
            });
            c8o.callJson(".Ping","var2", "val2")
            .then((resp)=>{
              console.log("resp ping var2" + JSON.stringify(resp.document.pong));
              return null;
            });
            c8o.callJson(".Ping", "mvar1", "mvar1")
            .then((resp)=>{
              console.log("resp ping mvar1" + JSON.stringify(resp.document.pong));  
              return null;
            });
            c8o.callJson(".Ping","mvar2", "mvar2")
            .then((resp)=>{
              console.log("resp ping mvar2" + JSON.stringify(resp.document.pong));
              return null;
            });
            c8o.callJson(".Ping", "var1", "val1")
            .then((resp)=>{
              console.log("resp ping var1" + JSON.stringify(resp.document.pong)); 
              return null; 
            });
            c8o.callJson(".Ping","var2", "val2")
            .then((resp)=>{
              console.log("resp ping var2" + JSON.stringify(resp.document.pong));
              return null;
            });
            c8o.callJson(".Ping", "mvar1", "mvar1")
            .then((resp)=>{
              console.log("resp ping mvar1" + JSON.stringify(resp.document.pong));  
              return null;
            });
            c8o.callJson(".Ping","mvar2", "mvar2")
            .then((resp)=>{
              console.log("resp ping mvar2" + JSON.stringify(resp.document.pong));
              return null;
            });*/
    
    });
  }
}
