export declare enum ERROR_FIELD {
    ID = "id",
    TIMESTAMP = "timestamp",
    STACK = "stack",
    MESSAGE = "message",
    COL = "col",
    ROW = "row"
}
export interface IReportError {
    [ERROR_FIELD.TIMESTAMP]: number;
    [ERROR_FIELD.MESSAGE]: string;
    [ERROR_FIELD.STACK]: string;
    [ERROR_FIELD.COL]: number | null;
    [ERROR_FIELD.ROW]: number | null;
}
