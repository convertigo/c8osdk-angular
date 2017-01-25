import {C8oFullSyncCbl, C8oFullSync} from "./c8oFullSync.service";
import {
    C8oResponseListener,
    C8oResponseProgressListener,
    C8oResponseJsonListener,
    C8oResponseXmlListener
} from "./c8oResponse.service";
import {C8oUtils} from "./c8oUtils.service";
import {FullSyncPolicy, FullSyncPostDocumentParameter} from "./c8o.service";
import {FullSyncGetDocumentParameter} from "./fullSyncGetDocumentParameter.service";
import {FullSyncAttachmentParameter} from "./fullSyncAttachmentParameter.service";
import {FullSyncGetViewParameter} from "./fullSyncGetViewParameter.service";
/**
 * Created by charlesg on 10/01/2017.
 */
export class FullSyncRequestable {

    static GET: FullSyncRequestable = new FullSyncRequestable("get", (c8oFullSync: C8oFullSyncCbl, databaseName: string, parameters: Object, c8oResponseListener: C8oResponseListener) => {
        return new Promise((resolve) => {
            let docid: string = C8oUtils.peekParameterStringValue(parameters, FullSyncGetDocumentParameter.DOCID.name, true);
            resolve(c8oFullSync.handleGetDocumentRequest(databaseName, docid, parameters));
        }).catch((error) => {
            throw error;
        });
    });

    static DELETE: FullSyncRequestable = new FullSyncRequestable("delete", (c8oFullSync: C8oFullSyncCbl, databaseName: string, parameters: Object, c8oResponseListener: C8oResponseListener) => {
        return new Promise((resolve, reject) => {
            let docid: string = C8oUtils.peekParameterStringValue(parameters, FullSyncGetDocumentParameter.DOCID.name, true);
            c8oFullSync.handleDeleteDocumentRequest(databaseName, docid, parameters).then((result) => {
                resolve(result);
            }).catch((error) => {
                reject(error);
            });
        })
            .catch((error) => {
                throw error;
            });
    });

    static POST: FullSyncRequestable = new FullSyncRequestable("post", (c8oFullSync: C8oFullSyncCbl, databaseName: string, parameters: Object, c8oResponseListener: C8oResponseListener) => {
        return new Promise((resolve, reject) => {
            try {
                let fullSyncPolicyParameter: string = C8oUtils.peekParameterStringValue(parameters, FullSyncPostDocumentParameter.POLICY.name, false);
                let fullSyncPolicy: FullSyncPolicy = FullSyncPolicy.getFullSyncPolicy(fullSyncPolicyParameter);
                resolve(c8oFullSync.handlePostDocumentRequest(databaseName, fullSyncPolicy, parameters));
            }
            catch (error) {
                reject(error);
            }

        }).catch((error) => {
            throw error;
        });

    });

    static PUT_ATTACHMENT: FullSyncRequestable = new FullSyncRequestable("put_attachment", (c8oFullSync: C8oFullSyncCbl, databaseName: string, parameters: Object, c8oResponseListener: C8oResponseListener) => {
        return new Promise((resolve) => {
            let docid: string = C8oUtils.peekParameterStringValue(parameters, FullSyncGetDocumentParameter.DOCID.name, false);
            let name: string = C8oUtils.getParameterStringValue(parameters, FullSyncAttachmentParameter.NAME.name, false);
            let contentType: string = C8oUtils.getParameterStringValue(parameters, FullSyncAttachmentParameter.CONTENT_TYPE.name, false);
            let content = C8oUtils.getParameterObjectValue(parameters, FullSyncAttachmentParameter.CONTENT.name, false);
            resolve(c8oFullSync.handlePutAttachmentRequest(databaseName, docid, name, contentType, content));
        }).catch((error) => {
            throw error;
        });
    });

    static DELETE_ATTACHMENT: FullSyncRequestable = new FullSyncRequestable("delete_attachment", (c8oFullSync: C8oFullSyncCbl, databaseName: string, parameters: Object, c8oResponseListener: C8oResponseListener) => {
        return new Promise((resolve) => {
            let docid: string = C8oUtils.peekParameterStringValue(parameters, FullSyncGetDocumentParameter.DOCID.name, false);
            let name: string = C8oUtils.getParameterStringValue(parameters, FullSyncAttachmentParameter.DOCID.name, false);
            resolve(c8oFullSync.handleDeleteAttachmentRequest(databaseName, docid, name));
        }).catch((error) => {
            throw error;
        });
    });

    static ALL: FullSyncRequestable = new FullSyncRequestable("all", (c8oFullSync: C8oFullSyncCbl, databaseName: string, parameters: Object, c8oResponseListener: C8oResponseListener) => {
        return new Promise((resolve) => {
            c8oFullSync.handleAllDocumentsRequest(databaseName, parameters).then((result) => {
                resolve(result);
            });
        }).catch((error) => {
            throw error;
        });
    });

    static VIEW: FullSyncRequestable = new FullSyncRequestable("view", (c8oFullSync: C8oFullSyncCbl, databaseName: string, parameters: Object, c8oResponseListener: C8oResponseListener) => {
        return new Promise((resolve, reject) => {
            let ddoc: string = C8oUtils.peekParameterStringValue(parameters, FullSyncGetViewParameter.DDOC.name, false);
            let view: string = C8oUtils.peekParameterStringValue(parameters, FullSyncGetViewParameter.VIEW.name, false);
            c8oFullSync.handleGetViewRequest(databaseName, ddoc, view, parameters).then((result) => {
                resolve(result);
            }).catch((error) => {
                reject(error);
            });
        }).catch((error) => {
            throw error;
        });
    });


    static SYNC: FullSyncRequestable = new FullSyncRequestable("sync", (c8oFullSync: C8oFullSyncCbl, databaseName: string, parameters: Object, c8oResponseListener: C8oResponseListener) => {
        let pullFinish: boolean = false;
        let pushFinish: boolean = false;
        return new Promise((resolve, reject) => {
            c8oFullSync.handleSyncRequest(databaseName, parameters, new C8oResponseProgressListener((progress, parameters) => {
                if (!pullFinish && progress.pull && progress.finished) {
                    pullFinish = true;
                    c8oFullSync.c8o.log._debug("handleFullSyncRequest pullFinish = true: " + progress.toString());
                }
                if (!pushFinish && progress.push && progress.finished) {
                    pushFinish = true;
                    c8oFullSync.c8o.log._debug("handleFullSyncRequest pushFinish = true: " + progress.toString());
                }
                if (c8oResponseListener instanceof C8oResponseJsonListener) {
                    c8oFullSync.c8o.log._debug("handleFullSyncRequest onJsonResponse: " + progress.toString());
                    let varNull: JSON = null;
                    (c8oResponseListener as C8oResponseJsonListener).onJsonResponse(varNull, parameters);
                }
                else if (c8oResponseListener instanceof C8oResponseXmlListener) {
                    let varNull: JSON = null;
                    (c8oResponseListener as C8oResponseXmlListener).onXmlResponseresponse(varNull, parameters);
                }
                if (pullFinish || pushFinish) {
                    resolve({"ok": true});
                }
            })).catch((error) => {
                reject(error);
            });
        })
            .catch((error) => {
                throw error;
            });
    });


    static REPLICATE_PULL: FullSyncRequestable = new FullSyncRequestable("replicate_pull", (c8oFullSync: C8oFullSyncCbl, databaseName: string, parameters: Object, c8oResponseListener: C8oResponseListener) => {
        return new Promise((resolve, reject) => {
            c8oFullSync.handleReplicatePullRequest(databaseName, parameters, new C8oResponseProgressListener((progress, param) => {
                if (progress.finished) {
                    resolve({"ok": true});
                }
                if (c8oResponseListener instanceof C8oResponseJsonListener) {
                    let varNull: JSON = null;
                    (c8oResponseListener as C8oResponseJsonListener).onJsonResponse(varNull, param);
                }
                else if (c8oResponseListener instanceof C8oResponseXmlListener) {
                    let varNull: JSON = null;
                    (c8oResponseListener as C8oResponseXmlListener).onXmlResponseresponse(varNull, param);
                }
            })).catch((error) => {
                reject(error);
            });
        })
            .catch((error) => {
                throw error;
            });
    });


    static REPLICATE_PUSH: FullSyncRequestable = new FullSyncRequestable("replicate_push", (c8oFullSync: C8oFullSyncCbl, databaseName: string, parameters: Object, c8oResponseListener: C8oResponseListener) => {
        return new Promise((resolve, reject) => {
            c8oFullSync.handleReplicatePushRequest(databaseName, parameters, new C8oResponseProgressListener((progress, param) => {
                if (progress.finished) {
                    resolve({"ok": true});
                }
                if (c8oResponseListener instanceof C8oResponseJsonListener) {
                    let varNull: JSON = null;
                    (c8oResponseListener as C8oResponseJsonListener).onJsonResponse(varNull, param);
                }
                else if (c8oResponseListener instanceof C8oResponseXmlListener) {
                    let varNull: JSON = null;
                    (c8oResponseListener as C8oResponseXmlListener).onXmlResponseresponse(varNull, param);
                }
            })).catch((error) => {
                reject(error);
            });
        })
            .catch((error) => {
                throw error;
            });
    });

    static RESET: FullSyncRequestable = new FullSyncRequestable("reset", (c8oFullSync: C8oFullSyncCbl, databaseName: string, parameters: Object, c8oResponseListener: C8oResponseListener) => {
        return new Promise((resolve, reject) => {
            c8oFullSync.handleResetDatabaseRequest(databaseName).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            });
        }).catch((error) => {
            throw error;
        });
    });

    static CREATE: FullSyncRequestable = new FullSyncRequestable("create", (c8oFullSync: C8oFullSyncCbl, databaseName: string, parameters: Object, c8oResponseListener: C8oResponseListener) => {
        return new Promise((resolve) => {
            resolve(c8oFullSync.handleCreateDatabaseRequest(databaseName));
        }).catch((error) => {
            throw error;
        });
    });

    static DESTROY: FullSyncRequestable = new FullSyncRequestable("destroy", (c8oFullSync: C8oFullSyncCbl, databaseName: string, parameters: Object, c8oResponseListener: C8oResponseListener) => {
        return new Promise((resolve, reject) => {
            c8oFullSync.handleDestroyDatabaseRequest(databaseName).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            });
        }).catch((error) => {
            throw error;
        });

    });


    private value: string;
    private hanfleFullSncrequestOp: (c8oFullSyncCbl: C8oFullSync, string: string, dictionnary: Object, c8oResponseListener: C8oResponseListener) => any;

    constructor(value: string, hanfleFullSncrequestOp: (c8oFullSyncCbl: C8oFullSyncCbl, string: string, dictionnary: Object, c8oResponseListener: C8oResponseListener) => any) {
        this.value = value;
        this.hanfleFullSncrequestOp = hanfleFullSncrequestOp;
    }

    handleFullSyncRequest(c8oFullSync: C8oFullSync, databaseName: string, parameters: Object, c8oResponseListener: C8oResponseListener): Promise<any> {
        return new Promise((resolve, reject) => {
            this.hanfleFullSncrequestOp(c8oFullSync, databaseName, parameters, c8oResponseListener).then((result) => {
                resolve(result);
            }).catch((error) => {
                reject(error);
            });
        });


    }

    static getFullSyncRequestable(value: string): FullSyncRequestable {
        let fullSyncRequestableValues: Array<FullSyncRequestable> = FullSyncRequestable.values();
        for (let i = 0; i < fullSyncRequestableValues.length; i++) {
            if (fullSyncRequestableValues[i].value == value) {
                return fullSyncRequestableValues[i];
            }
        }
    }

    static values(): Array<FullSyncRequestable> {
        let array: [FullSyncRequestable] = [this.GET, this.DELETE, this.POST, this.ALL, this.VIEW, this.SYNC, this.REPLICATE_PULL, this.REPLICATE_PUSH, this.RESET, this.CREATE, this.DESTROY, this.PUT_ATTACHMENT, this.DELETE_ATTACHMENT];
        return array;

    }
}