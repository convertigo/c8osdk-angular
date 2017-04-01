 export class C8oFullSyncChangeListener {
    private _onchange: (changes: Object) => void;
    constructor(change: (changes: Object) => void) {
        this._onchange = change;
    }
     public onChange(changes) {
         this._onchange(changes);
     }
 }