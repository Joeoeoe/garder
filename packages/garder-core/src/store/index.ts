/**
 * 自动延时上报
 * 提供接口：存储
 * 当长度一定时自动上报并清空：队列
 * 存储空间：考虑后续rrweb，故将所有记录存在indexedDB中
 */
import Dexie, { Table } from 'dexie';
import { ERROR_FIELD } from 'garder-common';
import { report } from '../reporter';
import { IStoreError, TABLE } from '../types';

class Store {
  dbName: string;
  db: Dexie;
  // max record count, when equal, clear store and report errors in mass
  errorMaxCount: number;
  constructor(dbName: string) {
    this.dbName = dbName;
    this.db = new Dexie(dbName);
    this.db.version(1).stores({
      [TABLE.ERROR]: `
      ++${ERROR_FIELD.ID},
      ${ERROR_FIELD.STACK},
      ${ERROR_FIELD.TIMESTAMP},
      ${ERROR_FIELD.MESSAGE},
      ${ERROR_FIELD.COL},
      ${ERROR_FIELD.ROW}
      `,
    });

    console.log(this.db);
    this.errorMaxCount = 10;
  }

  async addError(error: IStoreError): Promise<number> {
    const pk: number = await this.db[TABLE.ERROR].add({
      [ERROR_FIELD.STACK]: error.stack,
      [ERROR_FIELD.MESSAGE]: error.message,
      [ERROR_FIELD.TIMESTAMP]: error.timestamp,
      [ERROR_FIELD.ROW]: error.row,
      [ERROR_FIELD.COL]: error.col,
    });
    const errorMaxCount = this.errorMaxCount;
    const errorList = await this.getErrorList();
    if (errorList.length >= errorMaxCount) {
      // 批量上报
      console.log('开始上报');
      report(errorList);
      this.clearErrorTable();
    }
    return pk;
  }

  async getErrorList(): Promise<Array<IStoreError>> {
    const db = this.db;
    const errorTable: Table = db[TABLE.ERROR];
    const errorList: Array<IStoreError> = await errorTable.toArray();
    return errorList;
  }

  // clear error table
  private async clearErrorTable() {
    const db = this.db;
    const errorTable: Table = db[TABLE.ERROR];
    return await errorTable.clear();
  }
}

export default Store;
