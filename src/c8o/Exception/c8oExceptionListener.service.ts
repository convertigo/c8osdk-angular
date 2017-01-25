export class C8oExceptionListener {
    /**
     * Called on thrown exceptions.
     *
     * @param exception - The thrown exception
     */
    public onException: (C8oException, Object) => void;

    constructor(onException: (C8oException, Object) => void) {
        this.onException = onException;
    }
}