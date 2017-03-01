import {Injectable}                                                   from "@angular/core";
import {C8oLogLevel} from "./c8oLogLevel.service";


@Injectable()
export class C8oBase {
    /*HTTP*/
    protected _endpointSettings: string;
    protected _timeout: number = -1;
    // protected _trustAllCertificates: boolean = false;
    protected _cookies: Object = {};
    protected _clientCertificateFiles: Object;
    protected _clientCertificateBinaries: Object;

    /*Log*/
    protected _logRemote: boolean = true;
    protected _initialLogRemote: boolean = true;
    protected _logLevelLocal: C8oLogLevel = C8oLogLevel.NONE;
    protected _logC8o: boolean = true;
    protected _logOnFail: (exception: Error, parameters: Object) => void;

    /* FullSync */
    protected _defaultDatabaseName: string = null;
    protected _authenticationCookieValue: string = null;
    protected _fullSyncLocalSuffix: string = null;
    protected _fullSyncServerUrl: string = "http://localhost:5984";
    protected _fullSyncUsername: string;
    protected _fullSyncPassword: string;

    /* Encryption */
    protected _useEncryption: boolean = false;
    protected _disableSSL: boolean = false;
    protected _keyStorePassword: string;
    protected _trustStorePassword: string;

    /** Getters **/

    /**
     * Gets the connection timeout to Convertigo in milliseconds. A value of zero means the timeout is not used.<br/>
     * Default is <b>0</b>.
     * @returns The timeout.
     */
    public get timeout(): number {
        return this._timeout;
    }

    /**
     * Gets a value indicating whether https calls trust all certificates or not.<br/>
     * Default is <b>false</b>.
     * @returns <b>true</b> if https calls trust all certificates; otherwise, <b>false</b>.
     */
    /*public get trustAllCertificates(): boolean {
        return this._trustAllCertificates;
    }*/

    /**
     * Gets initial cookies to send to the Convertigo server.<br/>
     * Default is <b>null</b>.
     * @returns List of cookies.
     */
    public get cookies(): Object {
        return this._cookies;
    }

    /**
     * Gets a value indicating if logs are sent to the Convertigo server.<br/>
     * Default is <b>true</b>.
     * @returns <b>true</b> if logs are sent to the Convertigo server; otherwise, <b>false</b>.
     */
    public get logRemote(): boolean {
        return this._logRemote;
    }

    /**
     * Gets a value indicating logs level local
     *
     * @returns C8oLogLevel object
     */
    public get logLevelLocal(): C8oLogLevel {
        return this._logLevelLocal;
    }

    public get logC8o(): boolean {
        return this._logC8o;
    }

    public get defaultDatabaseName(): string {
        return this._defaultDatabaseName;
    }

    public get authenticationCookieValue(): string {
        return this._authenticationCookieValue;
    }

    public get fullSyncLocalSuffix(): string {
        return this._fullSyncLocalSuffix;
    }

    public get fullSyncServerUrl(): string {
        return this._fullSyncServerUrl;
    }

    public get fullSyncUsername(): string {
        return this._fullSyncUsername;
    }

    public get fullSyncPassword(): string {
        return this._fullSyncPassword;
    }

    public get logOnFail(): (exception: Error, parameters: Object) => void {
        return this._logOnFail;
    }

    public copy(c8oBase: C8oBase) {
        if (c8oBase !== undefined) {
            /** HTTP **/
            this._timeout = c8oBase._timeout;
            // this._trustAllCertificates = c8oBase._trustAllCertificates;
            if (this.cookies == null) {
                this._cookies = {};
            }
            if (c8oBase.cookies !== null) {
                this._cookies = c8oBase._cookies;
            }

            /** Log **/
            this._logRemote = c8oBase.logRemote;
            this._initialLogRemote = c8oBase.logRemote;
            this._logLevelLocal = c8oBase.logLevelLocal;
            this._logC8o = c8oBase.logC8o;
            this._logOnFail = c8oBase.logOnFail;

            /** FullSync **/
            this._defaultDatabaseName = c8oBase.defaultDatabaseName;
            this._authenticationCookieValue = c8oBase.authenticationCookieValue;
            this._fullSyncLocalSuffix = c8oBase.fullSyncLocalSuffix;
        }
    }
}