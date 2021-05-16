/**
 * 自动延时上报
 * 提供接口：存储
 * 当长度一定时自动上报并清空：队列
 * 存储空间：考虑后续rrweb，故将所有记录存在indexedDB中
 */
import Dexie from 'dexie';
import { IAddError, IStoreError } from '../types';
declare class Store {
    dbName: string;
    db: Dexie;
    errorMaxCount: number;
    constructor(dbName: string);
    addError(error: IAddError): Promise<number>;
    getErrorList(): Promise<Array<IStoreError>>;
    private clearErrorTable;
}
export default Store;
