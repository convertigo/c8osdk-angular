import {FullSyncDefaultResponse, FullSyncAbstractResponse} from "./fullSyncResponse.service";
export class C8oFullSyncTranslator {
    static FULL_SYNC_RESPONSE_KEY_COUNT: string = "count";
    static FULL_SYNC_RESPONSE_KEY_ROWS: string = "rows";
    static FULL_SYNC_RESPONSE_KEY_CURRENT: string = "current";
    static FULL_SYNC_RESPONSE_KEY_DIRECTION: string = "direction";
    static FULL_SYNC_RESPONSE_KEY_TOTAL: string = "total";
    static FULL_SYNC_RESPONSE_KEY_OK: string = "ok";
    static FULL_SYNC_RESPONSE_KEY_STATUS: string = "status";

    static FULL_SYNC_RESPONSE_VALUE_DIRECTION_PUSH: string = "push";
    static FULL_SYNC_RESPONSE_VALUE_DIRECTION_PULL: string = "pull";

    static XML_KEY_DOCUMENT: string = "document";
    static XML_KEY_COUCHDB_OUTPUT: string = "couchdb_output";

    static fullSyncDocumentOperationResponseToJson(fullSyncDocumentOperationResponse: FullSyncAbstractResponse): JSON {
        return fullSyncDocumentOperationResponse.getProperties() as JSON;
    }

    static fullSyncDefaultResponseToJson(fullSyncDefaultResponse: FullSyncDefaultResponse): JSON {
        return fullSyncDefaultResponse.getProperties() as JSON;
    }


}