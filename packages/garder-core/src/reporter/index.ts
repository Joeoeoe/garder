import { IStoreError } from '../types';
import { request } from './request';

// TODO 批量上报、延时上报
export const report = function (errorList: Array<IStoreError>) {
  console.log(errorList);
  // TODO 用户直接关闭窗口如何处理
  request(errorList);
};
