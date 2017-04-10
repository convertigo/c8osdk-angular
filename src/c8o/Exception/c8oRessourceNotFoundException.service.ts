import {C8oException} from "./c8oException.service";

export class C8oRessourceNotFoundException extends C8oException {

    constructor(message: string);
    constructor(message: string, cause: Error);
    constructor(message: string, cause: Error = null) {
        super(message, cause);
        // Since typescript 2.1.1 we have to set the prototype explicitly.
        Object.setPrototypeOf(this, C8oRessourceNotFoundException.prototype);
    }
}