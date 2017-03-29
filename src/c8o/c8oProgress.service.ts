import {C8oFullSyncTranslator} from "./c8oFullSyncTranslator.service";

export class C8oProgress {
    private _changed: boolean = false;
    private _continuous: boolean = false;
    private _finished: boolean = false;
    private _pull: boolean = true;
    private _current: number = -1;
    private _total: number = -1;
    private _status: string = "";
    private _taskInfo: string = "";
    private _raw: any;

    // Constructor overload in typescript...
    constructor();
    constructor(progress: C8oProgress);
    constructor(progress?: any) {
        if (progress instanceof C8oProgress) {
            this._changed = false;
            this._continuous = progress._continuous;
            this._finished = progress._finished;
            this._pull = progress._pull;
            this._current = progress._current;
            this._total = progress._total;
            this._status = progress._status;
            this._taskInfo = progress._taskInfo;
            this._raw = progress._raw;
        }
        else {
            if (progress === undefined) {
                this._raw = null;
            }
            else {
                throw new Error(`Expected C8oProgress or empty constructor, got '${progress}'.`);
            }

        }

    }

    public get changed(): boolean {
        return this._changed;
    }

    public set changed(value: boolean) {
        this._changed = value;
    }

    public get continuous(): boolean {
        return this._continuous;
    }

    public set continuous(value: boolean) {
        this._continuous = value;
        this._changed = true;
    }

    public get finished(): boolean {
        return this._finished;
    }

    public set finished(value: boolean) {
        this._finished = value;
        this._changed = true;
    }

    public get pull(): boolean {
        return this._pull;
    }

    public set pull(value: boolean) {
        this._pull = value;
        this._changed = true;
    }

    public get push(): boolean {
        return !this._pull;
    }

    public get current(): number {
        return this._current;
    }

    public set current(value: number) {
        this._current = value;
        this._changed = true;
    }

    public get total(): number {
        return this._total;
    }

    public set total(value: number) {
        this._total = value;
        this._changed = true;
    }

    public get direction(): string {
        return this._pull ? C8oFullSyncTranslator.FULL_SYNC_RESPONSE_VALUE_DIRECTION_PULL : C8oFullSyncTranslator.FULL_SYNC_RESPONSE_VALUE_DIRECTION_PUSH;
    }

    public get status(): string {
        return this._status;
    }

    public set status(value: string) {
        this._changed = true;
        this._status = value;
    }

    public get taskInfo(): string {
        return this._taskInfo;
    }

    public set taskInfo(value: string) {
        this._changed = true;
        this._taskInfo = value;
    }

    public get raw(): any {
        return this._raw;
    }

    public set raw(value: any) {
        this._changed = true;
        this._raw = value;
    }

    public toString(): string {
        return this.direction + ": " + this.current + "/" + this.total + " (" + (this.finished ? (this.continuous ? "live" : "done") : "running") + ")";
    }
}