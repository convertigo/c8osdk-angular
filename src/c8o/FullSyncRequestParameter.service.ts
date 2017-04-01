export class FullSyncRequestParameter {
    private _name: string;
    private _type: string;

    private constructor(name: string, type: string) {
        this._name = name;
        this._type = type;
    }
    public get type(){
        return this._type;
    }

    public get name(){
        return this._name;
    }


    public static DESCENDING: FullSyncRequestParameter = new FullSyncRequestParameter("descending", "boolean");
    public static ENDKEY: FullSyncRequestParameter = new FullSyncRequestParameter("endkey", "Object");
    public static ENDKEY_DOCID: FullSyncRequestParameter = new FullSyncRequestParameter("endkey_docid", "string");
    public static GROUP_LEVEL: FullSyncRequestParameter = new FullSyncRequestParameter("group_level", "number");
    public static INCLUDE_DELETED: FullSyncRequestParameter = new FullSyncRequestParameter("include_deleted", "boolean");
    public static INDEX_UPDATE_MODE: FullSyncRequestParameter = new FullSyncRequestParameter("index_update_mode", "string");
    public static KEY: FullSyncRequestParameter = new FullSyncRequestParameter("key", "Array");
    public static KEYS: FullSyncRequestParameter = new FullSyncRequestParameter("keys", "Array");
    public static LIMIT: FullSyncRequestParameter = new FullSyncRequestParameter("limit", "number");
    public static INCLUDE_DOCS: FullSyncRequestParameter = new FullSyncRequestParameter("include_docs", "boolean");
    public static REDUCE: FullSyncRequestParameter = new FullSyncRequestParameter("reduce", "boolean");
    public static GROUP: FullSyncRequestParameter = new FullSyncRequestParameter("group", "boolean");
    public static SKIP: FullSyncRequestParameter = new FullSyncRequestParameter("skip", "number");
    public static STARTKEY: FullSyncRequestParameter = new FullSyncRequestParameter("startkey", "Object");
    public static STARTKEY_DOCID: FullSyncRequestParameter = new FullSyncRequestParameter("startkey_docid", "string");


    public static values(): Array<FullSyncRequestParameter> {
        return [FullSyncRequestParameter.DESCENDING, FullSyncRequestParameter.ENDKEY, FullSyncRequestParameter.ENDKEY_DOCID, FullSyncRequestParameter.GROUP_LEVEL, FullSyncRequestParameter.INCLUDE_DELETED, FullSyncRequestParameter.INDEX_UPDATE_MODE, FullSyncRequestParameter.KEY, FullSyncRequestParameter.KEYS, FullSyncRequestParameter.LIMIT, FullSyncRequestParameter.REDUCE, FullSyncRequestParameter.GROUP, FullSyncRequestParameter.SKIP, FullSyncRequestParameter.STARTKEY, FullSyncRequestParameter.STARTKEY_DOCID, FullSyncRequestParameter.INCLUDE_DOCS];
    }

    //noinspection JSUnusedGlobalSymbols
    public static getFullSyncRequestParameter(name: string) {
        if (name != null) {
            for (let fullSyncRequestParameter of FullSyncRequestParameter.values()){
                if (name === fullSyncRequestParameter.name) {
                    return fullSyncRequestParameter as FullSyncRequestParameter;
                }
            }
        }
    }
}