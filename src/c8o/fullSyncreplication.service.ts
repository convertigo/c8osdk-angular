export class FullSyncReplication {
    pull: boolean;
    replication: any;
    public changeListener: Event;

    constructor(pull: boolean) {
        this.pull = pull;
    }
}