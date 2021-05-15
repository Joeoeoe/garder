import { Core } from './core';
import { IPlugin_JS_ERROR } from './error-collect/mount-type/jsError';
import { IPlugin_PROMISE_ERROR } from './error-collect/mount-type/promiseError';
import { IPlugin_SOURCE_ERROR } from './error-collect/mount-type/sourceError';
import { IPlugin_XHR_AND_FETCH_ERROR } from './error-collect/mount-type/xhrAndFetchError';
import { IPlugin, ERROR_TYPE } from './error-collect/constants';
export { Core, IPlugin, ERROR_TYPE };
export { IPlugin_JS_ERROR, IPlugin_SOURCE_ERROR, IPlugin_PROMISE_ERROR, IPlugin_XHR_AND_FETCH_ERROR, };
