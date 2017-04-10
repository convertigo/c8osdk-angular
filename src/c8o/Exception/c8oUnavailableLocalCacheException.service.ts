import {C8oException} from "./c8oException.service";

/**
 * This Exception is not thrown to the user, it is used to know if the requested response from the local cache is available or no.
 */
export class C8oUnavailableLocalCacheException extends C8oException {
    constructor(detailMessage: string);
    constructor(detailMessage: string, cause: Error);
    constructor(detailMessage: string, cause: Error = null) {
        super(detailMessage, cause);
        // Since typescript 2.1.1 we have to set the prototype explicitly.
        Object.setPrototypeOf(this, C8oUnavailableLocalCacheException.prototype);
    }
}