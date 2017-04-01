export class FullSyncReplication {
    pull: boolean;
    replication: any;
    //noinspection JSUnusedGlobalSymbols
    public changeListener: Event;

    constructor(pull: boolean) {
        this.pull = pull;
    }
}