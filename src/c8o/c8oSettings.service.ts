import {C8oBase} from "./c8oBase.service";
import {C8oLogLevel} from "./c8oLogLevel.service";

/**
 * Contains optional parameters of a C8o class instantiation.<br/>
 * Note that setters return the setting instance thereby C8oSettings can be instantiate like that:<br/>
 * new C8oSettings().setTimeout(5000).setTrustAllCertificates(true).setUseEncryption(true);
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

    /**
     * Clone C8osettings object
     * @return {C8oSettings}
     */
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
     * Add a header
     * @param name The name of header.
     * @param value The value of header.
     * @returns The current <b>C8oSettings</b>, for chaining.
     */
    public addHeader(name: string, value: string) {
        this._headers[name] = value;
        return this;
    }

    /**
     * addClientCertificate
     * @param {string} anyCertificate
     * @param {string} password
     * @return {C8oSettings}
     */
    public addClientCertificate(anyCertificate: string, password: string): C8oSettings;

    /**
     * addClientCertificate
     * @param {number} anyCertificate
     * @param {string} password
     * @return {C8oSettings}
     */
    public addClientCertificate(anyCertificate: number, password: string): C8oSettings;

    /**
     * addClientCertificate
     * @param anyCertificate
     * @param {string} password
     * @return {C8oSettings}
     */
    public addClientCertificate(anyCertificate: any, password: string): C8oSettings {
        if (typeof anyCertificate === "string") {
            if (this._clientCertificateFiles == null) {
                this._clientCertificateFiles = {};
            }
            this._clientCertificateFiles[anyCertificate] = password;
        }
        else if (typeof anyCertificate === "number") {
            if (this._clientCertificateBinaries == null) {
                this._clientCertificateBinaries = {};
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
            this._cookies = {};
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

    /**
     * setLogC8o
     * @param {boolean} logC8o
     * @return {C8oSettings}
     */
    public setLogC8o(logC8o: boolean): C8oSettings {
        this._logC8o = logC8o;
        return this;
    }

    /**
     * setLogOnFail
     * @param {(exception: Error, parameters: Object) => void} logOnFail
     * @return {C8oSettings}
     */
    public setLogOnFail(logOnFail: (exception: Error, parameters: Object) => void): C8oSettings {
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

    /**
     * setAuthenticationCookieValue
     * @param {string} authenticationCookieValue
     * @return {C8oSettings}
     */
    public setAuthenticationCookieValue(authenticationCookieValue: string): C8oSettings {
        this._authenticationCookieValue = authenticationCookieValue;
        return this;
    }

    /**
     * setFullSyncServerUrl
     * @param {string} fullSyncServerUrl
     * @return {C8oSettings}
     */
    public setFullSyncServerUrl(fullSyncServerUrl: string): C8oSettings {
        this._fullSyncServerUrl = fullSyncServerUrl;
        return this;
    }

    /**
     * setFullSyncUsername
     * @param {string} fullSyncUsername
     * @return {C8oSettings}
     */
    public setFullSyncUsername(fullSyncUsername: string): C8oSettings {
        this._fullSyncUsername = fullSyncUsername;
        return this;
    }

    /**
     * setFullSyncPassword
     * @param {string} fullSyncPassword
     * @return {C8oSettings}
     */
    public setFullSyncPassword(fullSyncPassword: string): C8oSettings {
        this._fullSyncPassword = fullSyncPassword;
        return this;
    }

    /**
     * setFullSyncLocalSuffix
     * @param {string} fullSyncLocalSuffix
     * @return {C8oSettings}
     */
    public setFullSyncLocalSuffix(fullSyncLocalSuffix: string): C8oSettings {
        this._fullSyncLocalSuffix = fullSyncLocalSuffix;
        return this;
    }

    /**
     * Set if c8o calls variables are encrypted or not
     *
     * @param useEncryption
     * @returns The current <b>C8oSettings</b>, for chaining.
     */
    public setUseEncryption(useEncryption: boolean): C8oSettings {
        this._useEncryption = useEncryption;
        return this;
    }
}