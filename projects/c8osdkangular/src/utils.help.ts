//noinspection TsLint
/*import {C8oSettings} from "./c8osdk-js-core/src/c8o/c8oSettings";
import {C8oLogLevel} from "./c8osdk-js-core/src/c8o/c8oLogLevel";*/
import {C8oSettings,C8oLogLevel} from "../src/c8osdk-js-core/src/index";
import {C8o} from "./lib/c8o.service";
export class Info {
    // if you wants to use a proxy you mast change remote host and port please change configuration in Root/config/karama.conf.js

    // Set this property to use local studio for tests
    static local = false;

    // Remote infos
    static get http() {
        return "http://";
    }
    static get host() {
        return "c8o-dev.convertigo.net";
        //return "localhost";
    }
    static get port() {
        return "80";
        //return "8080"
    }
    static get project_path() {
        return "/cems/projects/ClientSDKtesting";
    }

    // Local infos
    static get httpLocal() {
        return "http://";
    }
    static get hostLocal() {
        return "localhost";
    }
    static get portLocal() {
        return "8080"
    }
    static get project_pathLocal() {
        return "/convertigo/projects/ClientSDKtesting";
    }
    static get endpoint() {
        if(!Info.local){
            return Info.http + Info.host + ":" + Info.port + Info.project_path;
        }
        else{
            return Info.httpLocal + Info.hostLocal + ":" + Info.portLocal + Info.project_pathLocal;
        }
        
    }
}

//noinspection TsLint
export class Stuff {
    static get C8o() : C8oSettings {
        let c8oSettings: C8oSettings = new C8oSettings();
        c8oSettings
            .setEndPoint(Info.endpoint)
            .setLogRemote(true)
            .setLogC8o(true)
            .setLogLevelLocal(C8oLogLevel.DEBUG)
            .addHeader("x-convertigo-mb", "7.5.0-beta")
            .setNormalizeParameters(true)
            .setKeepSessionAlive(false);
        return c8oSettings;
    }

    static get C8o_FS() {
        let c8oSettings: C8oSettings = new C8oSettings();
        c8oSettings
            .setDefaultDatabaseName("clientsdktesting")
            .setEndPoint(Info.endpoint)
            .setLogRemote(false)
            .setLogLevelLocal(C8oLogLevel.ERROR)
            .addHeader("x-convertigo-mb", "7.5.0-beta")
            .setKeepSessionAlive(false);
        return c8oSettings;
    }

    static get C8o_FS_PULL() {
        let c8oSettings: C8oSettings = new C8oSettings();
        c8oSettings
            .setEndPoint(Info.endpoint)
            .setDefaultDatabaseName("qa_fs_pull")
            .setLogRemote(true)
            .setLogC8o(true)
            .setLogLevelLocal(C8oLogLevel.DEBUG)
            .addHeader("x-convertigo-mb", "7.5.0-beta")
            .setNormalizeParameters(true)
            .setKeepSessionAlive(false);
        return c8oSettings;
    }
    static get C8o_FS_PUSH() {
        let c8oSettings: C8oSettings = new C8oSettings();
        c8oSettings
            .setDefaultDatabaseName("qa_fs_push")
            .setEndPoint(Info.endpoint)
            .setLogRemote(false)
            .setLogLevelLocal(C8oLogLevel.ERROR)
            .addHeader("x-convertigo-mb", "7.5.0-beta")
            .setKeepSessionAlive(false);
        return c8oSettings;
    }

    static get C8o_LC() {
        let c8oSettings: C8oSettings = new C8oSettings();
        c8oSettings
            .setEndPoint(Info.endpoint)
            .setLogRemote(false)
            .setLogLevelLocal(C8oLogLevel.ERROR)
            .addHeader("x-convertigo-mb", "7.5.0-beta")
            .setKeepSessionAlive(false);
        return c8oSettings;
    }
    static get C8o_FS_FILES() {
        const c8oSettings: C8oSettings = new C8oSettings();
        c8oSettings
            .setDefaultDatabaseName("qa_fs_files")
            .setEndPoint(Info.endpoint)
            .setLogRemote(false)
            .setLogLevelLocal(C8oLogLevel.DEBUG)
            .addHeader("x-convertigo-mb", "7.5.0-beta")
            .setKeepSessionAlive(false);
        return c8oSettings;
    }
}

//noinspection TsLint
export class Functions {
    static CheckLogRemoteHelper(c8o: C8o, lv: any, msg: string) {
        c8o.callJson(".GetLogs").then(
            (response: any) => {
                let sLine = response["document"]["line"];
                //qexpect(sLine != null).toBeTruthy();
                for (let lvl of lv) {
                    let line = JSON.parse(sLine);
                    expect(line[2]).toBe(lvl);
                    let newMsg = line[4];
                    newMsg = newMsg.substring(newMsg.indexOf("logID="));
                    expect(msg).toBe(newMsg);
                }
                return null;
            }
        );
    }
    static async pingasync(){

    }
}

export class PlainObjectA {
    public name: string;
    public bObjects: Array<any>;
    public bObject: PlainObjectB;
}

export class PlainObjectB {
    public name: string;
    public num: number;
    public enabled: boolean;
}