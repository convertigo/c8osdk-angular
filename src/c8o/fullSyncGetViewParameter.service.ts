export class FullSyncGetViewParameter {
    public static VIEW: FullSyncGetViewParameter = new FullSyncGetViewParameter("view");
    public static DDOC: FullSyncGetViewParameter = new FullSyncGetViewParameter("ddoc");

    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}