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
        }
        else {
            super(message);
            this.message = message;
            this._cause = cause;
        }
    }
    public get cause(): Error{
        return this._cause;
    }
}