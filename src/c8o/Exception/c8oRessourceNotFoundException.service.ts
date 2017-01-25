import {C8oException} from "./c8oException.service";

export class C8oRessourceNotFoundException extends C8oException {

    constructor(message: string);
    constructor(message: string, cause: Error);
    constructor(message: string, cause: Error = null) {
        super(message, cause);
    }
}