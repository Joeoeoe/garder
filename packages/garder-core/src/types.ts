import { ERROR_FIELD } from 'garder-common';
export enum TABLE {
  ERROR = 'error_table',
}

export interface ICommonError {
  message: string;
}

export interface IStoreError {
  [ERROR_FIELD.TIMESTAMP]: number;
  [ERROR_FIELD.MESSAGE]: string;
  [ERROR_FIELD.STACK]: string;
  [ERROR_FIELD.COL]: number | null;
  [ERROR_FIELD.ROW]: number | null;
}

export interface IAddError {
  [ERROR_FIELD.MESSAGE]: string;
  [ERROR_FIELD.STACK]: string;
  [ERROR_FIELD.COL]: number | null;
  [ERROR_FIELD.ROW]: number | null;
}
