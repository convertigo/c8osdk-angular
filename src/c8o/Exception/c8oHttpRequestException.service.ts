import {C8oException} from "./c8oException.service";

/**
 * Thrown during an HTTP request.
 */
export class C8oHttpRequestException extends C8oException {
    public originalException: any;

    constructor(message: string);
    constructor(message: string, cause: Error);
    constructor(message: string, cause: any = null) {
        super(message, cause);
        this.originalException = cause;
    }
}