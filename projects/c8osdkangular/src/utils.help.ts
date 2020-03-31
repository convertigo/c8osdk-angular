//noinspection TsLint
/*import {C8oSettings} from "./c8osdk-js-core/src/c8o/c8oSettings";
import {C8oLogLevel} from "./c8osdk-js-core/src/c8o/c8oLogLevel";*/
import { C8oSettings, C8oLogLevel } from "../src/c8osdk-js-core/src/index";
import { C8o } from "./lib/c8o.service";
import { HttpHeaders } from '@angular/common/http';
import { C8oCore } from "../src/c8osdk-js-core/src/index";
import { Utils } from 'handlebars';
/**
 * @class
 * @ignore
 */
export class Info {
    // if you wants to use a proxy you mast change remote host and port please change configuration in Root/config/karama.conf.js

    // Set this property to use local studio for tests
    static local = false;
    static remote: "T";

    // Remote infos
    static get http() {
        return "https://";
    }
    static get host() {
        //return "192.168.100.70"
        //return "c8o-dev.convertigo.net";
        //return "localhost";
        return "test-convertigo.convertigo.net"
        //return "test-convertigo.convertigo.net";
    }
    static get port() {
        //return "28080";
        //return "8080"
        return "443"
    }
    static get project_path() {
        //return "/cems/projects/ClientSDKtesting";
        return "/convertigo/projects/ClientSDKtesting";
    }

    // Local infos
    static get httpLocal() {
        return "http://";
    }
    static get hostLocal() {
        return "localhost";
    }
    static get portLocal() {
        return "18080"
    }
    static get project_pathLocal() {
        return "/convertigo/projects/ClientSDKtesting";
    }
    public static get endpoint() {
        if (!Info.local) {
            return Info.http + Info.host /*+ ":" + Info.port */ + Info.project_path;
        }
        else {
            return Info.httpLocal + Info.hostLocal + ":" + Info.portLocal + Info.project_pathLocal;
        }

    }

    public static get logLevelLocal(): C8oLogLevel {
        if (require("../package.json").test == "testing version") {
            return C8oLogLevel.ERROR
        }
        else {
            return C8oLogLevel.TRACE;
        }

    }
    public static get log(): boolean {
        if (require("../package.json").test == "testing version") {
            return false;
        }
        else {
            return true;
        }

    }
}

//noinspection TsLint
/**
 * @class
 * @ignore
 */
export class Stuff {
    static get C8o(): C8oSettings {
        let c8oSettings: C8oSettings = new C8oSettings();
        c8oSettings
            .setEndPoint(Info.endpoint)
            .setLogRemote(Info.log)
            .setLogC8o(Info.log)
            .setLogLevelLocal(Info.logLevelLocal)
            .addHeader("x-convertigo-mb", "7.5.0-beta")
            .setNormalizeParameters(true)
            .setKeepSessionAlive(false);
        return c8oSettings;
    }

    static get C8o_FS() {
        let c8oSettings: C8oSettings = new C8oSettings();
        c8oSettings
            .setEndPoint(Info.endpoint)
            .setDefaultDatabaseName("clientsdktesting")
            .setLogRemote(Info.log)
            .setLogC8o(Info.log)
            .setLogLevelLocal(Info.logLevelLocal)
            .addHeader("x-convertigo-mb", "7.5.0-beta")
            .setKeepSessionAlive(true);
        return c8oSettings;
    }

    static get C8o_FS_PULL() {
        let c8oSettings: C8oSettings = new C8oSettings();
        c8oSettings
            .setEndPoint(Info.endpoint)
            .setDefaultDatabaseName("qa_fs_pull")
            .setLogRemote(Info.log)
            .setLogC8o(Info.log)
            .setLogLevelLocal(Info.logLevelLocal)
            .addHeader("x-convertigo-mb", "7.5.0-beta")
            .setNormalizeParameters(true)
            .setKeepSessionAlive(false);
        return c8oSettings;
    }
    static get C8o_FS_PUSH() {
        let c8oSettings: C8oSettings = new C8oSettings();
        c8oSettings
            .setDefaultDatabaseName("qa_fs_push")
            .setLogRemote(Info.log)
            .setLogC8o(Info.log)
            .setLogLevelLocal(Info.logLevelLocal)
            .setLogLevelLocal(C8oLogLevel.TRACE)
            .addHeader("x-convertigo-mb", "7.5.0-beta")
            .setKeepSessionAlive(false)
            .setEndPoint(Info.endpoint);
        return c8oSettings;
    }

    static get C8o_LC() {
        let c8oSettings: C8oSettings = new C8oSettings();
        c8oSettings
            .setEndPoint(Info.endpoint)
            .setLogRemote(Info.log)
            .setLogC8o(Info.log)
            .setLogLevelLocal(Info.logLevelLocal)
            .addHeader("x-convertigo-mb", "7.5.0-beta")
            .setKeepSessionAlive(false);
        return c8oSettings;
    }
    static get C8o_FS_FILES() {
        const c8oSettings: C8oSettings = new C8oSettings();
        c8oSettings
            .setDefaultDatabaseName("qa_fs_files")
            .setEndPoint(Info.endpoint)
            .setLogRemote(Info.log)
            .setLogC8o(Info.log)
            .setLogLevelLocal(Info.logLevelLocal)
            .addHeader("x-convertigo-mb", "7.5.0-beta")
            .setKeepSessionAlive(false);
        return c8oSettings;
    }

    static get C8o_Sessions(): C8oSettings {
        let c8oSettings: C8oSettings = new C8oSettings();
        c8oSettings
            .setEndPoint(Info.endpoint)
            .setLogRemote(Info.log)
            .setLogC8o(Info.log)
            .setLogLevelLocal(Info.logLevelLocal)
            .addHeader("x-convertigo-mb", "7.5.0-beta")
            .setNormalizeParameters(true)
            .setKeepSessionAlive(false);
        return c8oSettings;
    }

    static get C8o_SessionsKeepAlive(): C8oSettings {
        let c8oSettings: C8oSettings = new C8oSettings();
        c8oSettings
            .setEndPoint(Info.endpoint)
            .setLogRemote(Info.log)
            .setLogC8o(Info.log)
            .setLogLevelLocal(Info.logLevelLocal)
            .addHeader("x-convertigo-mb", "7.5.0-beta")
            .setNormalizeParameters(true)
            .setKeepSessionAlive(true);
        return c8oSettings;
    }
}

//noinspection TsLint
/**
 * @class
 * @ignore
 */
export class Functions {
    /**
     * compare equality bettwen two arrays
     * @param a array 1
     * @param b array 2
     */
    static isEqual(a, b) {
        // if length is not equal 
        if (a.length != b.length)
            return "False";
        else {
            // comapring each element of array 
            for (var i = 0; i < a.length; i++)
                if (a[i] != b[i])
                    return "False";
            return "True";
        }
    }
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
    static async pingasync() {

    }

    static async wait(time) {
        console.log("Waiting for " + time + " ms");
        return await new Promise(resolve => setTimeout(resolve, time));
    }
    static async removesess(c8o, resolve) {
        console.log("Removing session");
        let params: any = { "__sequence": "RemoveSession", "__uuid": c8o.deviceUUID };
        params = c8o.httpInterface.transformRequest(params);
        let headersObject = { "Content-Type": "application/x-www-form-urlencoded", "x-convertigo-sdk": c8o.sdkVersion };
        Object.assign(headersObject, c8o.headers);
        let headers = new HttpHeaders(headersObject);
        await Functions.wait(5000);
        let a = await c8o.httpPublic.post(Info.endpoint + "/.json", params, {
            headers: headers,
            withCredentials: true
        });
        a.subscribe(async (re) => {
            await Functions.wait(10000);
            resolve();
        })

    }

}
/**
 * @class
 * @ignore
 */
export class PlainObjectA {
    public name: string;
    public bObjects: Array<any>;
    public bObject: PlainObjectB;
}
/**
 * @class
 * @ignore
 */
export class PlainObjectB {
    public name: string;
    public num: number;
    public enabled: boolean;
}