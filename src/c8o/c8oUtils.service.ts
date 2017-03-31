import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class C8oUtils {

    /** FullSync parameters prefix. **/
    private static USE_PARAMETER_IDENTIFIER: string = "_use_";
    data: JSON;

    public constructor(private http: Http) {
        this.http = http;
    }

    /**
     * Returns the class name of the object as a String, if the object is null then returns the String "null".
     *
     * @param object
     * @returns string
     */
    static getObjectClassName(object: any) {
        return typeof object;
    }


    public static isValidUrl(url: string): boolean {
        let valid = /^(http|https):\/\/[^ "]+$/.test(url.toString());
        return valid;
    }


    public static getNewGUIDString(): string {
        let d = new Date().getTime();
        if (window.performance && typeof window.performance.now == "function") {
            d += performance.now(); // use high-precision timer if available
        }
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
            let r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == "x" ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }

    /** TAG Parameter **/

    public static getParameter(parameters: Object, name: string, useName: boolean): any {
        for (let _i = 0; _i < Object.keys(parameters).length; _i++) {
            let parameterName = Object.keys(parameters)[_i];
            if ((name == parameterName) || (useName && name == this.USE_PARAMETER_IDENTIFIER + parameterName)) {
                let obj = new Object();
                obj[Object.keys(parameters)[_i]] = parameters[Object.keys(parameters)[_i]];
                return obj;
            }
        }
        return null;
    }

    /**
     * Searches in the list the parameter with this specific name (or the same name with the prefix '_use_') and returns it.<br/>
     * Returns null if the parameter is not found.
     *
     * @param parameters
     * @param name
     * @returns string
     */
    public static getParameterStringValue(parameters: Object, name: string, useName: boolean): string {
        let parameter = C8oUtils.getParameter(parameters, name, useName);
        if (parameter != null) {
            return "" + parameter[name];
        }
        return null;
    }

    public static getParameterObjectValue(parameters: Object, name: string, useName: boolean = false): any {
        let parameters2 = parameters;
        let parameter = C8oUtils.getParameter(parameters2, name, useName);
        if (parameter != null) {
            return parameter[name];
        }
        else {
            return null;
        }

    }

    public static peekParameterStringValue(parameters: Object, name: string, exceptionIfMissing: boolean): string {
        let parameters2 = parameters;
        let value: string = this.getParameterStringValue(parameters2, name, false);
        if (value == null) {
            if (exceptionIfMissing) {
                console.log(JSON.stringify(parameters))
                console.log("exception if missing")
                throw new Error("The parameter '" + name + "' is missing");
            }
        }
        else {
            delete parameters[name];
        }
        return value;
    }

    public static peekParameterObjectValue(parameters: Object, name: string, exceptionIfMissing: boolean): string {
        let parameters2 = parameters;
        let value: string = this.getParameterObjectValue(parameters2, name, false);
        if (value == null) {
            if (exceptionIfMissing) {
                throw new Error("The parameter '" + name + "' is missing");
            }
        }
        else {
            delete parameters2[name];
        }
        return value;
    }

    /**
     * Serializes a c8o call request thanks to its parameters and response type.
     *
     * @param parameters
     * @param responseType
     * @returns string
     * @throws C8oException
     */
    static identifyC8oCallRequest(parameters: Object, responseType: string): string {
        return responseType + JSON.stringify(parameters);
    }
}

export class Queue<T> {
    _store: T[] = [];

    push(val: T) {
        this._store.push(val);
    }

    pop(): T {
        return this._store.shift();
    }

    count(): number {
        return this._store.length;
    }
}

