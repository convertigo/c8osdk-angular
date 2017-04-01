export class FullSyncResponse {

    /**
     * The response key indicating the operation status.
     */
    static RESPONSE_KEY_OK: string = "ok";
    /**
     * The response key indicating the document ID.
     */
    static RESPONSE_KEY_DOCUMENT_ID: string = "id";
    /**
     * The response key indicating the document revision.
     */
    static RESPONSE_KEY_DOCUMENT_REVISION: string = "rev";
}

/**
 * Returned by a fullSync operation without return data.
 */
export class FullSyncAbstractResponse {
    private operationStatus: boolean;

    constructor(operationStatus: boolean) {
        this.operationStatus = operationStatus;
    }

    getProperties(): any {
        let properties: Object = {};
        properties[FullSyncResponse.RESPONSE_KEY_OK] = this.operationStatus;
        return properties;
    }
}

/**
 * Represents a default fullSync response.
 */
export class FullSyncDefaultResponse extends FullSyncAbstractResponse {
    constructor(operationStatus: boolean) {
        super(operationStatus);
    }
}

/**
 * Returned by a fullSync document operation without return data.
 */
export class FullSyncDocumentOperationResponse extends FullSyncAbstractResponse {
    documentId: string;
    documentRevision: string;

    constructor(documentId: string, documentRevision: string, operationStatus: boolean) {
        super(operationStatus);
        this.documentId = documentId;
        this.documentRevision = documentRevision;
    }

    getProperties(): Object {
        let properties: Object = super.getProperties();
        properties[FullSyncResponse.RESPONSE_KEY_DOCUMENT_ID] = this.documentId;
        properties[FullSyncResponse.RESPONSE_KEY_DOCUMENT_REVISION] = this.documentRevision;
        return properties;
    }

}