import { IReportError } from 'garder-common';
import { Model } from 'mongoose';
import { CollectDocument } from './collect.schema';
export declare class CollectService {
    private collectModel;
    constructor(collectModel: Model<CollectDocument>);
    test(): string;
    addErrorCollect(errorList: Array<IReportError>): Promise<boolean>;
}
