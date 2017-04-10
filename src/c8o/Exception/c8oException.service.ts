/**
 * Thrown specific exceptions to Convertigo.
 */
export class C8oException extends Error {

    public message: string;
    protected _cause: Error;

    constructor(message: string);
    constructor(message: string, cause: Error);
    constructor(message: string, cause: Error, all: boolean);
    //noinspection JSUnusedLocalSymbols
    constructor(message: string, cause: Error = null, all: boolean = false) {
        if (cause == null) {
            super(message);
            this.message = message;
            // Since typescript 2.1.1 we have to set the prototype explicitly.
            Object.setPrototypeOf(this, C8oException.prototype);
        }
        else {
            super(message);
            this.message = message;
            this._cause = cause;
            // Since typescript 2.1.1 we have to set the prototype explicitly.
            Object.setPrototypeOf(this, C8oException.prototype);
        }
    }
    public get cause(): Error{
        return this._cause;
    }
}