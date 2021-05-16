import {
  Core,
  ERROR_TYPE,
  IPlugin_JS_ERROR,
  IPlugin_PROMISE_ERROR,
  IPlugin_SOURCE_ERROR,
  IPlugin_XHR_AND_FETCH_ERROR,
} from "garder-core";

const jsErrorPlugin: IPlugin_JS_ERROR = {
  type: ERROR_TYPE.JS_ERROR,
  onError: async (error, vanillaEvent, store) => {
    await store.addError({
      stack: error.message,
      message: error.message,
      timestamp: new Date().getTime(),
      col: 0,
      row: 0,
    });
  },
};

const sourceErrorPlugin: IPlugin_SOURCE_ERROR = {
  type: ERROR_TYPE.SOURCE_ERROR,
  onError: async (error, vanillaEvent, store) => {
    await store.addError({
      stack: error.message,
      message: error.message,
      timestamp: new Date().getTime(),
      col: 0,
      row: 0,
    });
  },
};

const promiseErrorPlugin: IPlugin_PROMISE_ERROR = {
  type: ERROR_TYPE.PROMISE_ERROR,
  onError: async (error, vanillaEvent, store) => {
    console.log(error);
    console.log(vanillaEvent);
    await store.addError({
      stack: error.message,
      message: error.message,
      timestamp: new Date().getTime(),
      col: 0,
      row: 0,
    });
  },
};

const xhrErrorPlugin: IPlugin_XHR_AND_FETCH_ERROR = {
  type: ERROR_TYPE.XHR_AND_FETCH_ERROR,
  onError: async (error, vanillaEvent, store) => {
    const message = error.message;
    await store.addError({
      stack: message,
      message: message,
      timestamp: new Date().getTime(),
      col: 0,
      row: 0,
    });
  },
};

const sdk = new Core([
  jsErrorPlugin,
  sourceErrorPlugin,
  promiseErrorPlugin,
  xhrErrorPlugin,
]);

export { sdk };
