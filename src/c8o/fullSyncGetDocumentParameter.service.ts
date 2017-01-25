export class FullSyncGetDocumentParameter {
    public static DOCID: FullSyncGetDocumentParameter = new FullSyncGetDocumentParameter("docid");

    public name: string;

    constructor(name: string) {
        this.name = name;
    }

}