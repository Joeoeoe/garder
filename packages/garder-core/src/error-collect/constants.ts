export interface IPlugin {
  type: ERROR_TYPE;
  onError: Function;
}



export enum ERROR_TYPE {
  JS_ERROR,
  SOURCE_ERROR,
  PROMISE_ERROR,
  XHR_AND_FETCH_ERROR,
}
