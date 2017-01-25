import {C8oBase} from "./c8oBase.service";
import {C8oLogLevel} from "./c8oLogLevel.service";

/**
 * Contains optional parameters of a C8o class instantiation.<br/>
 * Note that setters return the setting instance thereby C8oSettings can be instantiate like that:<br/>
 * new C8oSettings().setTimeout(5000).setTrustAllCetificates(true).setUseEncryption(true);
 *
 */
export class C8oSettings extends C8oBase {

    constructor(c8oSettings: C8oSettings = null) {
        super();
        if (c8oSettings != null) {
            if (c8oSettings != null) {
                this.copy(c8oSettings);
            }
        }
    }

    public clone(): C8oSettings {
        return new C8oSettings(this);
    }

    /**
     * Sets the endpoint (override env.json).<br/>
     * @param endpoint The endpoint.
     * @returns The current <b>C8oSettings</b>, for chaining.
     */
    public setEndPoint(endpoint: string): C8oSettings {
        this._endpointSettings = endpoint;
        return this;
    }

    /**
     * Gets the endpoint define in C8oSettings<br/>
     * @returns The current <b>endpoint</b>, if defined by c8oSettings.
     */
    public getEndPoint(): string {
        return this._endpointSettings;

    }

    /**
     * Sets the connection timeout to Convertigo in milliseconds. A value of zero means the timeout is not used.<br/>
     * Default is <b>0</b>.
     * @param timeout The timeout.
     * @returns The current <b>C8oSettings</b>, for chaining.
     */
    public setTimeout(timeout: number): C8oSettings {
        if (timeout <= 0) {
            timeout = -1;
        }
        this._timeout = timeout;
        return this;
    }

    /**
     * Sets a value indicating whether https calls trust all certificates or not.<br/>
     * Default is <b>false</b>.
     * @param trustAllCertificates <b>true</b> if https calls trust all certificates; otherwise, <b>false</b>.
     * @returns The current <b>C8oSettings</b>, for chaining.
     */
    public setTrustAllCertificates(trustAllCertificates: boolean): C8oSettings {
        this._trustAllCertificates = trustAllCertificates;
        return this;
    }


    public addClientCertificate(anyCertificate: string, password: string): C8oSettings;
    public addClientCertificate(anyCertificate: number, password: string): C8oSettings;
    public addClientCertificate(anyCertificate: any, password: string): C8oSettings {
        if (typeof anyCertificate == "string") {
            if (this._clientCertificateFiles == null) {
                this._clientCertificateFiles = new Object();
            }
            this._clientCertificateFiles[anyCertificate] = password;
        }
        else if (typeof anyCertificate == "number") {
            if (this._clientCertificateBinaries == null) {
                this._clientCertificateBinaries = new Object();
            }
            this._clientCertificateBinaries[anyCertificate] = password;
        }
        return this;
    }

    /**
     * Add a new cookie to the initial cookies send to the Convertigo server.
     * @param name The name of the new cookie.
     * @param value The value of the new cookie.
     * @returns The current <b>C8oSettings</b>, for chaining.
     */
    public addCookie(name: string, value: string): C8oSettings {
        if (this._cookies == null) {
            this._cookies = new Object();
        }
        this._cookies[name] = value;
        return this;
    }


    /**
     * Sets a value indicating if logs are sent to the Convertigo server.<br/>
     * Default is <b>true</b>.
     * @returns The current <b>C8oSettings</b>, for chaining.
     */
    public setLogRemote(logRemote: boolean): C8oSettings {
        this._logRemote = logRemote;
        return this;
    }

    /**
     * Sets a value indicating the log level you want in the device console
     * 0: ALL, 1: NONE, 2: TRACE, 3: DEBUG, 4: INFO, 5: WARN, 6: ERROR, 7: FATAL
     * or use the android.util.Log constants
     * Default is <b>0</b>.
     * @returns The current <b>C8oSettings</b>, for chaining.
     */
    public  setLogLevelLocal(logLevelLocal: C8oLogLevel): C8oSettings {
        this._logLevelLocal = logLevelLocal;
        return this;
    }

    public setLogC8o(logC8o: boolean): C8oSettings {
        this._logC8o = logC8o;
        return this;
    }

    public  setLogOnFail(logOnFail: (exception: Error, parameters: Object) => void): C8oSettings {
        this._logOnFail = logOnFail;
        return this;
    }

    /**
     * Specify the default FullSync database name. Must match a Convertigo Server
     * FullSync connector name
     *
     * @param defaultDatabaseName: string
     * @returns The current <b>C8oSettings</b>, for chaining.
     */
    public setDefaultDatabaseName(defaultDatabaseName: string): C8oSettings {
        this._defaultDatabaseName = defaultDatabaseName;
        return this;
    }

    public setAuthenticationCookieValue(authenticationCookieValue: string): C8oSettings {
        this._authenticationCookieValue = authenticationCookieValue;
        return this;
    }

    public  setFullSyncServerUrl(fullSyncServerUrl: string): C8oSettings {
        this._fullSyncServerUrl = fullSyncServerUrl;
        return this;
    }

    public  setFullSyncUsername(fullSyncUsername: string): C8oSettings {
        this._fullSyncUsername = fullSyncUsername;
        return this;
    }

    public  setFullSyncPassword(fullSyncPassword: string): C8oSettings {
        this._fullSyncPassword = fullSyncPassword;
        return this;
    }

    public  setFullSyncLocalSuffix(fullSyncLocalSuffix: string): C8oSettings {
        this._fullSyncLocalSuffix = fullSyncLocalSuffix;
        return this;
    }

    /**
     * Set if c8o calls variables are encrypted or not
     *
     * @param useEncryption
     * @returns The current <b>C8oSettings</b>, for chaining.
     */
    public  setUseEncryption(useEncryption: boolean): C8oSettings {
        this._useEncryption = useEncryption;
        return this;
    }
}