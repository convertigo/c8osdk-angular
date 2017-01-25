/**
 * Thrown specific exceptions to Convertigo.
 */
export class C8oException extends Error {

    public message: string;

    constructor(message: string);
    constructor(message: string, cause: Error);
    constructor(message: string, cause: Error = null) {
        if (cause == null) {
            super(message);
            this.message = message;
        }
        else {
            super(C8oException.filterMessage(message, cause));
        }
    }

    private static filterMessage(message: string, cause: Error): string {
        if (cause.message != undefined) {
            message = cause.message + " | " + message;
            return message;
        }
        else {
            return message;
        }
    }
}