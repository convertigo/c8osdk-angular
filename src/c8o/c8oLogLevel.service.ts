export class C8oLogLevel {
    // private static JSON_KEY_REMOTE_LOG_LEVEL: string = "remoteLogLevel";

    public static NULL: C8oLogLevel = new C8oLogLevel("", 0);
    public static NONE: C8oLogLevel = new C8oLogLevel("none", 1);
    public static TRACE: C8oLogLevel = new C8oLogLevel("trace", 2);
    public static DEBUG: C8oLogLevel = new C8oLogLevel("debug", 3);
    public static INFO: C8oLogLevel = new C8oLogLevel("info", 4);
    public static WARN: C8oLogLevel = new C8oLogLevel("warn", 5);
    public static ERROR: C8oLogLevel = new C8oLogLevel("error", 6);
    public static FATAL: C8oLogLevel = new C8oLogLevel("fatal", 7);

    static C8O_LOG_LEVELS = [C8oLogLevel.NULL, C8oLogLevel.NONE, C8oLogLevel.TRACE, C8oLogLevel.DEBUG, C8oLogLevel.INFO, C8oLogLevel.WARN, C8oLogLevel.ERROR, C8oLogLevel.FATAL];

    public name: string;
    public priority: number;

    constructor(name: string, priority: number) {
        this.name = name;
        this.priority = priority;
    }

    static getC8oLogLevel(name: string): C8oLogLevel {
        for (let i = 0; i <= C8oLogLevel.C8O_LOG_LEVELS.length; i++) {
            if (C8oLogLevel.C8O_LOG_LEVELS[i].name === name) {
                return C8oLogLevel.C8O_LOG_LEVELS[i];
            }
        }
    }
}