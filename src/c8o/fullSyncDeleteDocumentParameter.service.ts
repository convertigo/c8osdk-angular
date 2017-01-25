export class FullSyncDeleteDocumentParameter {
    public static DOCID: FullSyncDeleteDocumentParameter = new FullSyncDeleteDocumentParameter("docid");
    public static REV: FullSyncDeleteDocumentParameter = new FullSyncDeleteDocumentParameter("rev");

    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}