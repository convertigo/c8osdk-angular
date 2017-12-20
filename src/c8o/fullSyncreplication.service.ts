export class FullSyncReplication {
    pull: boolean;
    sync: boolean;
    replication: any;
    //noinspection JSUnusedGlobalSymbols
    public changeListener: Event;

    constructor(pull: boolean = null) {
        if(pull != null){
            this.pull = pull;
        }
        else{
            this.sync = true;
        }
    }
}