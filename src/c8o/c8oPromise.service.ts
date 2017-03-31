import {C8oProgress} from "./c8oProgress.service";
import {C8o} from "./c8o.service";
export interface C8oOnProgress {
    run(c8oProgress: C8oProgress);
}

export class C8oPromise<T> {
    private c8o: C8o;
    private c8oResponse: (response: T, parameters: Object) => C8oPromise<T>;
    private c8oProgress: (C8oProgress) => C8oPromise<T>;
    private c8oFail: (error: Error, parameters: Object) => C8oPromise<T>;
    private nextPromise: C8oPromise<T>;

    private lastResponse: T;
    private lastFailure: Error;
    private lastParameters: Object;

    constructor(c8o: C8o) {
        this.c8o = c8o;
    }

    then(c8oOnResponse: (response: T, parameters: Object) => C8oPromise<T>) {
        if (this.nextPromise != null) {
            return this.nextPromise.then(c8oOnResponse);
        }
        else {
            this.c8oResponse = c8oOnResponse;
            this.nextPromise = new C8oPromise<T>(this.c8o);
            if (this.lastFailure != null) {
                this.nextPromise.lastFailure = this.lastFailure;
                this.nextPromise.lastParameters = this.lastParameters;

            }
            if (this.lastResponse != null) {
                this._onResponse();
            }
            return this.nextPromise;
        }

    }

    progress(c8oOnProgress: (C8oProgress: C8oProgress) => C8oPromise<T>) {
        if (this.nextPromise != null) {
            return this.nextPromise.progress(c8oOnProgress);
        }
        else {
            this.c8oProgress = c8oOnProgress;
            this.nextPromise = new C8oPromise<T>(this.c8o);
            return this.nextPromise;
        }
    }

    fail(c8oOnFail: (error: Error, parameters: Object) => C8oPromise<T>) {
        if (this.nextPromise != null) {
            return this.nextPromise.fail(c8oOnFail);
        }
        else {
            this.c8oFail = c8oOnFail;
            this.nextPromise = new C8oPromise<T>(this.c8o);
            if (this.lastFailure != null) {
                this.onFailure(this.lastFailure, this.lastParameters);
            }
            return this.nextPromise;
        }
    }


    private _onResponse() {
        try {
            if (this.c8oResponse != null) {
                let promise: C8oPromise<T>[] = new Array<C8oPromise<T>>(0);
                promise.push(this.c8oResponse(this.lastResponse, this.lastParameters));
                if (promise[0] != null) {
                    if (this.nextPromise != null) {
                        let lastPromise: C8oPromise<T> = promise[0];
                        while (lastPromise.nextPromise != null) {
                            lastPromise = lastPromise.nextPromise;
                        }
                        lastPromise.nextPromise = this.nextPromise;
                    }
                    this.nextPromise = promise[0];
                }
                else if (this.nextPromise != null) {
                    this.nextPromise.onResponse(this.lastResponse, this.lastParameters);
                }
            }
            else if (this.nextPromise != null) {
                this.nextPromise.onResponse(this.lastResponse, this.lastParameters);
            }
            else {
                // Response received and no handler
            }
        }
        catch (error) {
            this.onFailure(error, this.lastParameters);
        }
    }

    onResponse(response: T, parameters: Object) {
        if ((this.lastResponse != null || this.lastResponse != undefined) && parameters[C8o.ENGINE_PARAMETER_FROM_LIVE] == undefined) {
            if (this.nextPromise != null || this.nextPromise != undefined) {
                this.nextPromise.onResponse(response, parameters);
            }
        }
        else {
            this.lastResponse = response;
            this.lastParameters = parameters;
            this._onResponse();
        }
    }

    onProgress(progress: C8oProgress) {
        if (this.c8oProgress != null) {
            this.c8oProgress(progress);
        }
        else if (this.nextPromise != null) {
            this.nextPromise.onProgress(progress);
        }
    }

    onFailure(error: Error, parameters: Object) {

        this.lastFailure = error;
        this.lastParameters = parameters;

        if (this.c8oFail != null) {
            this.c8oFail(this.lastFailure, parameters);
        }
        if (this.nextPromise != null) {
            this.nextPromise.onFailure(this.lastFailure, parameters);
        }
    }
}