export class FullSyncAttachmentParameter {
    public static DOCID: FullSyncAttachmentParameter = new FullSyncAttachmentParameter("docid");
    public static NAME: FullSyncAttachmentParameter = new FullSyncAttachmentParameter("name");
    public static CONTENT_TYPE: FullSyncAttachmentParameter = new FullSyncAttachmentParameter("content_type");
    public static CONTENT: FullSyncAttachmentParameter = new FullSyncAttachmentParameter("content");

    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}