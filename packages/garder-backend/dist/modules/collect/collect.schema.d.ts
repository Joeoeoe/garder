/// <reference types="mongoose" />
import { ERROR_FIELD } from 'garder-common';
export declare type CollectDocument = Collect & Document;
export declare class Collect {
    [ERROR_FIELD.COL]: number;
    [ERROR_FIELD.MESSAGE]: string;
    [ERROR_FIELD.ROW]: number;
    [ERROR_FIELD.STACK]: string;
    [ERROR_FIELD.TIMESTAMP]: number;
}
export declare const CollectSchema: import("mongoose").Schema<import("mongoose").Document<Collect, any>, import("mongoose").Model<any, any, any>, undefined>;
