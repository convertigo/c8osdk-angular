[c8osdkjscore](../README.md) › [FullSyncRequestable](fullsyncrequestable.md)

# Class: FullSyncRequestable

Created by charlesg on 10/01/2017.

## Hierarchy

* **FullSyncRequestable**

## Index

### Constructors

* [constructor](fullsyncrequestable.md#constructor)

### Properties

* [handleFullSyncRequestOp](fullsyncrequestable.md#private-handlefullsyncrequestop)
* [value](fullsyncrequestable.md#private-value)
* [ALL](fullsyncrequestable.md#static-all)
* [ALL_LOCAL](fullsyncrequestable.md#static-all_local)
* [BULK](fullsyncrequestable.md#static-bulk)
* [CREATE](fullsyncrequestable.md#static-create)
* [CREATEINDEX](fullsyncrequestable.md#static-createindex)
* [DELETE](fullsyncrequestable.md#static-delete)
* [DELETEINDEX](fullsyncrequestable.md#static-deleteindex)
* [DELETE_ATTACHMENT](fullsyncrequestable.md#static-delete_attachment)
* [DESTROY](fullsyncrequestable.md#static-destroy)
* [EXPLAIN](fullsyncrequestable.md#static-explain)
* [FIND](fullsyncrequestable.md#static-find)
* [GET](fullsyncrequestable.md#static-get)
* [GETINDEXES](fullsyncrequestable.md#static-getindexes)
* [GET_ATTACHMENT](fullsyncrequestable.md#static-get_attachment)
* [INFO](fullsyncrequestable.md#static-info)
* [POST](fullsyncrequestable.md#static-post)
* [PUT_ATTACHMENT](fullsyncrequestable.md#static-put_attachment)
* [REPLICATE_PULL](fullsyncrequestable.md#static-replicate_pull)
* [REPLICATE_PUSH](fullsyncrequestable.md#static-replicate_push)
* [RESET](fullsyncrequestable.md#static-reset)
* [SYNC](fullsyncrequestable.md#static-sync)
* [VIEW](fullsyncrequestable.md#static-view)

### Methods

* [handleFullSyncRequest](fullsyncrequestable.md#handlefullsyncrequest)
* [getFullSyncRequestable](fullsyncrequestable.md#static-getfullsyncrequestable)
* [values](fullsyncrequestable.md#static-values)

## Constructors

###  constructor

\+ **new FullSyncRequestable**(`value`: string, `handleFullSyncRequestOp`: function): *[FullSyncRequestable](fullsyncrequestable.md)*

*Defined in [c8osdk-js-core/src/c8o/fullSyncRequestable.ts:339](https://github.com/convertigo/c8osdk-angular/blob/0b97078/src/c8o/fullSyncRequestable.ts#L339)*

**Parameters:**

▪ **value**: *string*

▪ **handleFullSyncRequestOp**: *function*

▸ (`c8oFullSyncCbl`: [C8oFullSyncCbl](c8ofullsynccbl.md), `str`: string, `dictionary`: Object, `c8oResponseListener`: [C8oResponseListener](../interfaces/c8oresponselistener.md)): *any*

**Parameters:**

Name | Type |
------ | ------ |
`c8oFullSyncCbl` | [C8oFullSyncCbl](c8ofullsynccbl.md) |
`str` | string |
`dictionary` | Object |
`c8oResponseListener` | [C8oResponseListener](../interfaces/c8oresponselistener.md) |

**Returns:** *[FullSyncRequestable](fullsyncrequestable.md)*

## Properties

### `Private` handleFullSyncRequestOp

• **handleFullSyncRequestOp**: *function*

*Defined in [c8osdk-js-core/src/c8o/fullSyncRequestable.ts:339](https://github.com/convertigo/c8osdk-angular/blob/0b97078/src/c8o/fullSyncRequestable.ts#L339)*

#### Type declaration:

▸ (`c8oFullSyncCbl`: [C8oFullSync](c8ofullsync.md), `str`: string, `dictionary`: Object, `c8oResponseListener`: [C8oResponseListener](../interfaces/c8oresponselistener.md)): *any*

**Parameters:**

Name | Type |
------ | ------ |
`c8oFullSyncCbl` | [C8oFullSync](c8ofullsync.md) |
`str` | string |
`dictionary` | Object |
`c8oResponseListener` | [C8oResponseListener](../interfaces/c8oresponselistener.md) |

___

### `Private` value

• **value**: *string*

*Defined in [c8osdk-js-core/src/c8o/fullSyncRequestable.ts:338](https://github.com/convertigo/c8osdk-angular/blob/0b97078/src/c8o/fullSyncRequestable.ts#L338)*

___

### `Static` ALL

▪ **ALL**: *[FullSyncRequestable](fullsyncrequestable.md)* =  new FullSyncRequestable("all", (c8oFullSync: C8oFullSyncCbl, databaseName: string, parameters: Object, c8oResponseListener: C8oResponseListener) => {
        return new Promise((resolve) => {
            c8oFullSync.handleAllDocumentsRequest(databaseName, parameters)
            .then((result) => {
                resolve(result);
            });
        }).catch((error) => {
            throw error;
        });
    })

*Defined in [c8osdk-js-core/src/c8o/fullSyncRequestable.ts:107](https://github.com/convertigo/c8osdk-angular/blob/0b97078/src/c8o/fullSyncRequestable.ts#L107)*

___

### `Static` ALL_LOCAL

▪ **ALL_LOCAL**: *[FullSyncRequestable](fullsyncrequestable.md)* =  new FullSyncRequestable("all_local", (c8oFullSync: C8oFullSyncCbl, databaseName: string, parameters: Object, c8oResponseListener: C8oResponseListener) => {
        return new Promise((resolve) => {
            c8oFullSync.handleAllLocalDocumentsRequest(databaseName, parameters)
            .then((result) => {
                resolve(result);
            });
        }).catch((error) => {
            throw error;
        });
    })

*Defined in [c8osdk-js-core/src/c8o/fullSyncRequestable.ts:118](https://github.com/convertigo/c8osdk-angular/blob/0b97078/src/c8o/fullSyncRequestable.ts#L118)*

___

### `Static` BULK

▪ **BULK**: *[FullSyncRequestable](fullsyncrequestable.md)* =  new FullSyncRequestable("bulk", (c8oFullSync: C8oFullSyncCbl, databaseName: string, parameters: Object, c8oResponseListener: C8oResponseListener) => {
        return new Promise((resolve) => {
            resolve(c8oFullSync.handleBulkRequest(databaseName, parameters));
        }).catch((error) => {
            throw error;
        });
    })

*Defined in [c8osdk-js-core/src/c8o/fullSyncRequestable.ts:307](https://github.com/convertigo/c8osdk-angular/blob/0b97078/src/c8o/fullSyncRequestable.ts#L307)*

___

### `Static` CREATE

▪ **CREATE**: *[FullSyncRequestable](fullsyncrequestable.md)* =  new FullSyncRequestable("create", (c8oFullSync: C8oFullSyncCbl, databaseName: string, parameters: Object, c8oResponseListener: C8oResponseListener) => {
        return new Promise((resolve) => {
            resolve(c8oFullSync.handleCreateDatabaseRequest(databaseName));
        }).catch((error) => {
            throw error;
        });
    })

*Defined in [c8osdk-js-core/src/c8o/fullSyncRequestable.ts:298](https://github.com/convertigo/c8osdk-angular/blob/0b97078/src/c8o/fullSyncRequestable.ts#L298)*

___

### `Static` CREATEINDEX

▪ **CREATEINDEX**: *[FullSyncRequestable](fullsyncrequestable.md)* =  new FullSyncRequestable("createIndex", async (c8oFullSync: C8oFullSyncCbl, databaseName: string, parameters: Object, c8oResponseListener: C8oResponseListener) => {
            try{
                const fields: string = C8oUtilsCore.peekParameterObjectValue(parameters, FullSyncGetIndexParameter.FIELDS.name, false);
                let result = await c8oFullSync.handleCreateIndexRequest(databaseName, fields, parameters);
                return result;
            }
            catch(e){
                return e;
            }
    })

*Defined in [c8osdk-js-core/src/c8o/fullSyncRequestable.ts:145](https://github.com/convertigo/c8osdk-angular/blob/0b97078/src/c8o/fullSyncRequestable.ts#L145)*

___

### `Static` DELETE

▪ **DELETE**: *[FullSyncRequestable](fullsyncrequestable.md)* =  new FullSyncRequestable("delete", (c8oFullSync: C8oFullSyncCbl, databaseName: string, parameters: Object, c8oResponseListener: C8oResponseListener) => {
        return new Promise((resolve, reject) => {
            const docid: string = C8oUtilsCore.peekParameterStringValue(parameters, FullSyncGetDocumentParameter.DOCID.name, true);
            c8oFullSync.handleDeleteDocumentRequest(databaseName, docid, parameters).then((result) => {
                resolve(result);
            }).catch((error) => {
                reject(error);
            });
        })
            .catch((error) => {
                throw error;
            });
    })

*Defined in [c8osdk-js-core/src/c8o/fullSyncRequestable.ts:31](https://github.com/convertigo/c8osdk-angular/blob/0b97078/src/c8o/fullSyncRequestable.ts#L31)*

___

### `Static` DELETEINDEX

▪ **DELETEINDEX**: *[FullSyncRequestable](fullsyncrequestable.md)* =  new FullSyncRequestable("deleteIndex", async (c8oFullSync: C8oFullSyncCbl, databaseName: string, parameters: Object, c8oResponseListener: C8oResponseListener) => {
        try{
            let result = await c8oFullSync.handleDeleteIndexRequest(databaseName, parameters);
            return result;
        }
        catch(e){
            return e;
        }
    })

*Defined in [c8osdk-js-core/src/c8o/fullSyncRequestable.ts:192](https://github.com/convertigo/c8osdk-angular/blob/0b97078/src/c8o/fullSyncRequestable.ts#L192)*

___

### `Static` DELETE_ATTACHMENT

▪ **DELETE_ATTACHMENT**: *[FullSyncRequestable](fullsyncrequestable.md)* =  new FullSyncRequestable("delete_attachment", (c8oFullSync: C8oFullSyncCbl, databaseName: string, parameters: Object, c8oResponseListener: C8oResponseListener) => {
        return new Promise((resolve) => {
            const docid: string = C8oUtilsCore.peekParameterStringValue(parameters, FullSyncGetDocumentParameter.DOCID.name, false);
            const name: string = C8oUtilsCore.getParameterStringValue(parameters, FullSyncAttachmentParameter.NAME.name, false);
            resolve(c8oFullSync.handleDeleteAttachmentRequest(databaseName, docid, name));
        }).catch((error) => {
            throw error;
        });
    })

*Defined in [c8osdk-js-core/src/c8o/fullSyncRequestable.ts:96](https://github.com/convertigo/c8osdk-angular/blob/0b97078/src/c8o/fullSyncRequestable.ts#L96)*

___

### `Static` DESTROY

▪ **DESTROY**: *[FullSyncRequestable](fullsyncrequestable.md)* =  new FullSyncRequestable("destroy", (c8oFullSync: C8oFullSyncCbl, databaseName: string, parameters: Object, c8oResponseListener: C8oResponseListener) => {
        return new Promise((resolve, reject) => {
            c8oFullSync.handleDestroyDatabaseRequest(databaseName).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            });
        }).catch((error) => {
            throw error;
        });

    })

*Defined in [c8osdk-js-core/src/c8o/fullSyncRequestable.ts:325](https://github.com/convertigo/c8osdk-angular/blob/0b97078/src/c8o/fullSyncRequestable.ts#L325)*

___

### `Static` EXPLAIN

▪ **EXPLAIN**: *[FullSyncRequestable](fullsyncrequestable.md)* =  new FullSyncRequestable("explain", async (c8oFullSync: C8oFullSyncCbl, databaseName: string, parameters: Object, c8oResponseListener: C8oResponseListener) => {
        try{
            const selector: string = C8oUtilsCore.peekParameterObjectValue(parameters, FullSyncGetFindParameter.SELECTOR.name, false);
            let result = await c8oFullSync.handleExplainRequest(databaseName, selector, parameters);
            return result;
        }
        catch(e){
            return e;
        }
    })

*Defined in [c8osdk-js-core/src/c8o/fullSyncRequestable.ts:169](https://github.com/convertigo/c8osdk-angular/blob/0b97078/src/c8o/fullSyncRequestable.ts#L169)*

___

### `Static` FIND

▪ **FIND**: *[FullSyncRequestable](fullsyncrequestable.md)* =  new FullSyncRequestable("find", async (c8oFullSync: C8oFullSyncCbl, databaseName: string, parameters: Object, c8oResponseListener: C8oResponseListener) => {
        try{
            const selector: string = C8oUtilsCore.peekParameterObjectValue(parameters, FullSyncGetFindParameter.SELECTOR.name, false);
            let result = await c8oFullSync.handleGetFindRequest(databaseName, selector, parameters);
            return result;
        }
        catch(e){
            return e;
        }
    })

*Defined in [c8osdk-js-core/src/c8o/fullSyncRequestable.ts:157](https://github.com/convertigo/c8osdk-angular/blob/0b97078/src/c8o/fullSyncRequestable.ts#L157)*

___

### `Static` GET

▪ **GET**: *[FullSyncRequestable](fullsyncrequestable.md)* =  new FullSyncRequestable("get", (c8oFullSync: C8oFullSyncCbl, databaseName: string, parameters: Object, c8oResponseListener: C8oResponseListener) => {
        return new Promise((resolve, reject) => {
            const docid: string = C8oUtilsCore.peekParameterStringValue(parameters, FullSyncGetDocumentParameter.DOCID.name, true);
            resolve(c8oFullSync.handleGetDocumentRequest(databaseName, docid, parameters));
        }).catch((error) => {
            throw error;
        });
    })

*Defined in [c8osdk-js-core/src/c8o/fullSyncRequestable.ts:21](https://github.com/convertigo/c8osdk-angular/blob/0b97078/src/c8o/fullSyncRequestable.ts#L21)*

___

### `Static` GETINDEXES

▪ **GETINDEXES**: *[FullSyncRequestable](fullsyncrequestable.md)* =  new FullSyncRequestable("getIndexes", async (c8oFullSync: C8oFullSyncCbl, databaseName: string, parameters: Object, c8oResponseListener: C8oResponseListener) => {
        try{
            let result = await c8oFullSync.handleGetIndexesRequest(databaseName, parameters);
            return result;
        }
        catch(e){
            return e;
        }
    })

*Defined in [c8osdk-js-core/src/c8o/fullSyncRequestable.ts:181](https://github.com/convertigo/c8osdk-angular/blob/0b97078/src/c8o/fullSyncRequestable.ts#L181)*

___

### `Static` GET_ATTACHMENT

▪ **GET_ATTACHMENT**: *[FullSyncRequestable](fullsyncrequestable.md)* =  new FullSyncRequestable("get_attachment", (c8oFullSync: C8oFullSyncCbl, databaseName: string, parameters: Object, c8oResponseListener: C8oResponseListener) => {
        return new Promise((resolve) => {
            const docid: string = C8oUtilsCore.peekParameterStringValue(parameters, FullSyncGetDocumentParameter.DOCID.name, false);
            const name: string = C8oUtilsCore.getParameterStringValue(parameters, FullSyncAttachmentParameter.NAME.name, false);
            resolve(c8oFullSync.handleGetAttachmentRequest(databaseName, docid, name, parameters));
        }).catch((error) => {
            throw error;
        });
    })

*Defined in [c8osdk-js-core/src/c8o/fullSyncRequestable.ts:85](https://github.com/convertigo/c8osdk-angular/blob/0b97078/src/c8o/fullSyncRequestable.ts#L85)*

___

### `Static` INFO

▪ **INFO**: *[FullSyncRequestable](fullsyncrequestable.md)* =  new FullSyncRequestable("info", (c8oFullSync: C8oFullSyncCbl, databaseName: string, parameters: Object, c8oResponseListener: C8oResponseListener) => {
        return new Promise((resolve) => {
            resolve(c8oFullSync.handleInfoRequest(databaseName));
        }).catch((error) => {
            throw error;
        });
    })

*Defined in [c8osdk-js-core/src/c8o/fullSyncRequestable.ts:315](https://github.com/convertigo/c8osdk-angular/blob/0b97078/src/c8o/fullSyncRequestable.ts#L315)*

___

### `Static` POST

▪ **POST**: *[FullSyncRequestable](fullsyncrequestable.md)* =  new FullSyncRequestable("post", (c8oFullSync: C8oFullSyncCbl, databaseName: string, parameters: Object, c8oResponseListener: C8oResponseListener) => {
        return new Promise((resolve, reject) => {
            try {
                const fullSyncPolicyParameter: string = C8oUtilsCore.peekParameterStringValue(parameters, FullSyncPostDocumentParameter.POLICY.name, false);
                const fullSyncPolicy: FullSyncPolicy = FullSyncPolicy.getFullSyncPolicy(fullSyncPolicyParameter);
                let fullSyncPolicySubMerge = [];
                if(fullSyncPolicyParameter == "merge"){
                    for(let elem in parameters){
                        if(elem.indexOf("_use_merge") == 0){
                            let key = elem.substring(11);
                            let value = parameters[elem];
                            fullSyncPolicySubMerge.push({key:key, value: value});
                        }
                    }
                }
                resolve(c8oFullSync.handlePostDocumentRequest(databaseName, fullSyncPolicy, parameters, fullSyncPolicySubMerge));
            } catch (error) {
                reject(error);
            }

        }).catch((error) => {
            throw error;
        });

    })

*Defined in [c8osdk-js-core/src/c8o/fullSyncRequestable.ts:46](https://github.com/convertigo/c8osdk-angular/blob/0b97078/src/c8o/fullSyncRequestable.ts#L46)*

___

### `Static` PUT_ATTACHMENT

▪ **PUT_ATTACHMENT**: *[FullSyncRequestable](fullsyncrequestable.md)* =  new FullSyncRequestable("put_attachment", (c8oFullSync: C8oFullSyncCbl, databaseName: string, parameters: Object, c8oResponseListener: C8oResponseListener) => {
        return new Promise((resolve) => {
            const docid: string = C8oUtilsCore.peekParameterStringValue(parameters, FullSyncGetDocumentParameter.DOCID.name, false);
            const name: string = C8oUtilsCore.getParameterStringValue(parameters, FullSyncAttachmentParameter.NAME.name, false);
            const contentType: string = C8oUtilsCore.getParameterStringValue(parameters, FullSyncAttachmentParameter.CONTENT_TYPE.name, false);
            const content = C8oUtilsCore.getParameterObjectValue(parameters, FullSyncAttachmentParameter.CONTENT.name, false);
            resolve(c8oFullSync.handlePutAttachmentRequest(databaseName, docid, name, contentType, content));
        }).catch((error) => {
            throw error;
        });
    })

*Defined in [c8osdk-js-core/src/c8o/fullSyncRequestable.ts:73](https://github.com/convertigo/c8osdk-angular/blob/0b97078/src/c8o/fullSyncRequestable.ts#L73)*

___

### `Static` REPLICATE_PULL

▪ **REPLICATE_PULL**: *[FullSyncRequestable](fullsyncrequestable.md)* =  new FullSyncRequestable("replicate_pull", (c8oFullSync: C8oFullSyncCbl, databaseName: string, parameters: Object, c8oResponseListener: C8oResponseListener) => {
        return new Promise((resolve, reject) => {
            c8oFullSync.handleReplicatePullRequest(databaseName, parameters, new C8oResponseProgressListener((progress, param) => {
                if(parameters["cancel"] == true){
                    resolve({ok: true});
                }
                else{
                    if (progress.finished) {
                        resolve({ok: true});
                    }
                    if (c8oResponseListener instanceof C8oResponseJsonListener) {
                        const varNull: JSON = null;
                        (c8oResponseListener as C8oResponseJsonListener).onJsonResponse(varNull, param);
                    }
                }
            })).catch((error) => {
                reject(error);
            });
        })
            .catch((error) => {
                throw error;
            });
    })

*Defined in [c8osdk-js-core/src/c8o/fullSyncRequestable.ts:238](https://github.com/convertigo/c8osdk-angular/blob/0b97078/src/c8o/fullSyncRequestable.ts#L238)*

___

### `Static` REPLICATE_PUSH

▪ **REPLICATE_PUSH**: *[FullSyncRequestable](fullsyncrequestable.md)* =  new FullSyncRequestable("replicate_push", (c8oFullSync: C8oFullSyncCbl, databaseName: string, parameters: Object, c8oResponseListener: C8oResponseListener) => {
        return new Promise((resolve, reject) => {
            c8oFullSync.handleReplicatePushRequest(databaseName, parameters, new C8oResponseProgressListener((progress, param) => {
                if(parameters["cancel"] == true){
                    resolve({ok: true});
                }
                else{
                    if (progress.finished) {
                        resolve({ok: true});
                    }
                    if (c8oResponseListener instanceof C8oResponseJsonListener) {
                        const varNull: JSON = null;
                        (c8oResponseListener as C8oResponseJsonListener).onJsonResponse(varNull, param);
                    }
                }
            })).catch((error) => {
                reject(error);
            });
        })
            .catch((error) => {
                throw error;
            });
    })

*Defined in [c8osdk-js-core/src/c8o/fullSyncRequestable.ts:262](https://github.com/convertigo/c8osdk-angular/blob/0b97078/src/c8o/fullSyncRequestable.ts#L262)*

___

### `Static` RESET

▪ **RESET**: *[FullSyncRequestable](fullsyncrequestable.md)* =  new FullSyncRequestable("reset", (c8oFullSync: C8oFullSyncCbl, databaseName: string, parameters: Object, c8oResponseListener: C8oResponseListener) => {
        return new Promise((resolve, reject) => {
            c8oFullSync.handleResetDatabaseRequest(databaseName).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            });
        })
    })

*Defined in [c8osdk-js-core/src/c8o/fullSyncRequestable.ts:287](https://github.com/convertigo/c8osdk-angular/blob/0b97078/src/c8o/fullSyncRequestable.ts#L287)*

___

### `Static` SYNC

▪ **SYNC**: *[FullSyncRequestable](fullsyncrequestable.md)* =  new FullSyncRequestable("sync", (c8oFullSync: C8oFullSyncCbl, databaseName: string, parameters: Object, c8oResponseListener: C8oResponseListener) => {
        let pullFinish: boolean = false;
        let pushFinish: boolean = false;
        return new Promise((resolve, reject) => {
            c8oFullSync.handleSyncRequest(databaseName, parameters, new C8oResponseProgressListener((progress, parameters) => {
                if(parameters["cancel"] == true){
                    resolve({ok: true});
                }
                else{
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
                        const varNull: JSON = null;
                        (c8oResponseListener as C8oResponseJsonListener).onJsonResponse(varNull, parameters);
                    }
                    if (pullFinish || pushFinish) {
                        resolve({ok: true});
                    }
                }
            })).catch((error) => {
                reject(error);
            });
        })
            .catch((error) => {
                throw error;
            });
    })

*Defined in [c8osdk-js-core/src/c8o/fullSyncRequestable.ts:203](https://github.com/convertigo/c8osdk-angular/blob/0b97078/src/c8o/fullSyncRequestable.ts#L203)*

___

### `Static` VIEW

▪ **VIEW**: *[FullSyncRequestable](fullsyncrequestable.md)* =  new FullSyncRequestable("view", (c8oFullSync: C8oFullSyncCbl, databaseName: string, parameters: Object, c8oResponseListener: C8oResponseListener) => {
        return new Promise((resolve, reject) => {
            const ddoc: string = C8oUtilsCore.peekParameterStringValue(parameters, FullSyncGetViewParameter.DDOC.name, false);
            const view: string = C8oUtilsCore.peekParameterStringValue(parameters, FullSyncGetViewParameter.VIEW.name, false);
            c8oFullSync.handleGetViewRequest(databaseName, ddoc, view, parameters).then((result) => {
                resolve(result);
            }).catch((error) => {
                reject(error);
            });
        }).catch((error) => {
            throw error;
        });
    })

*Defined in [c8osdk-js-core/src/c8o/fullSyncRequestable.ts:130](https://github.com/convertigo/c8osdk-angular/blob/0b97078/src/c8o/fullSyncRequestable.ts#L130)*

## Methods

###  handleFullSyncRequest

▸ **handleFullSyncRequest**(`c8oFullSync`: [C8oFullSync](c8ofullsync.md), `databaseName`: string, `parameters`: Object, `c8oResponseListener`: [C8oResponseListener](../interfaces/c8oresponselistener.md)): *Promise‹any›*

*Defined in [c8osdk-js-core/src/c8o/fullSyncRequestable.ts:346](https://github.com/convertigo/c8osdk-angular/blob/0b97078/src/c8o/fullSyncRequestable.ts#L346)*

**Parameters:**

Name | Type |
------ | ------ |
`c8oFullSync` | [C8oFullSync](c8ofullsync.md) |
`databaseName` | string |
`parameters` | Object |
`c8oResponseListener` | [C8oResponseListener](../interfaces/c8oresponselistener.md) |

**Returns:** *Promise‹any›*

___

### `Static` getFullSyncRequestable

▸ **getFullSyncRequestable**(`value`: string): *[FullSyncRequestable](fullsyncrequestable.md)*

*Defined in [c8osdk-js-core/src/c8o/fullSyncRequestable.ts:357](https://github.com/convertigo/c8osdk-angular/blob/0b97078/src/c8o/fullSyncRequestable.ts#L357)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[FullSyncRequestable](fullsyncrequestable.md)*

___

### `Static` values

▸ **values**(): *[FullSyncRequestable](fullsyncrequestable.md)[]*

*Defined in [c8osdk-js-core/src/c8o/fullSyncRequestable.ts:366](https://github.com/convertigo/c8osdk-angular/blob/0b97078/src/c8o/fullSyncRequestable.ts#L366)*

**Returns:** *[FullSyncRequestable](fullsyncrequestable.md)[]*
