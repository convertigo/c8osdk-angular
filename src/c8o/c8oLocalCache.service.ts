import {Priority} from "./priority.service";
import {C8oException} from "./Exception/c8oException.service";

export class C8oLocalCache {
    static PARAM: string = "__localCache";
    public priority: Priority;
    ttl: number;
    enabled: boolean;

    constructor(priority: Priority, ttl: number = -1, enabled: boolean = true) {
        if (priority == null) {
            throw new C8oException("Local Cache priority cannot be null");
        }
        this.priority = priority;
        this.ttl = ttl;
        this.enabled = enabled;
    }

}