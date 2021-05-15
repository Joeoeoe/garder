export interface IPlugin {
    type: ERROR_TYPE;
    onError: Function;
}
export declare enum ERROR_TYPE {
    JS_ERROR = 0,
    SOURCE_ERROR = 1,
    PROMISE_ERROR = 2,
    XHR_AND_FETCH_ERROR = 3
}
