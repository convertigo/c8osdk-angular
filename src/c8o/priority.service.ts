import {C8o} from "./c8o.service";
/**
 * Defines whether the response should be retrieved from local cache or from Convertigo server when the device can access the network.<br/>
 * When the device has no network access, the local cache response is used, if existing.
 */
export class Priority {
    isAvailable: (c8o: C8o) => boolean;

    //noinspection JSUnusedLocalSymbols
    public static SERVER: Priority = new Priority((c8o) => {
        return true;
    });

    //noinspection JSUnusedLocalSymbols
    public static LOCAL: Priority = new Priority((c8o) => {
            return true;
        }
    );

    constructor(isAvailable: (c8o: C8o) => boolean) {
        this.isAvailable = isAvailable;

    }
}