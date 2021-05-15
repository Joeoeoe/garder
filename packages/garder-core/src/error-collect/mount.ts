import { IPlugin_JS_ERROR, jsErrorMount } from './mount-type/jsError';
import { IPlugin_PROMISE_ERROR, promiseErrorMount } from './mount-type/promiseError';
import { IPlugin_SOURCE_ERROR, sourceErrorMount } from './mount-type/sourceError';
import { IPlugin_XHR_AND_FETCH_ERROR, xhrAndFetchErrorMount } from './mount-type/xhrAndFetchError';
import { ERROR_TYPE, IPlugin } from './constants';
import Store from '../store';

export const mount = function (plugin: IPlugin, store: Store) {
  switch (plugin.type) {
    case ERROR_TYPE.JS_ERROR:
      jsErrorMount(plugin as IPlugin_JS_ERROR, store);
      break;
    case ERROR_TYPE.SOURCE_ERROR:
      sourceErrorMount(plugin as IPlugin_SOURCE_ERROR, store);
      break;
    case ERROR_TYPE.PROMISE_ERROR:
      promiseErrorMount(plugin as IPlugin_PROMISE_ERROR, store);
      break;
    case ERROR_TYPE.XHR_AND_FETCH_ERROR:
      xhrAndFetchErrorMount(plugin as IPlugin_XHR_AND_FETCH_ERROR, store);
  }
};
