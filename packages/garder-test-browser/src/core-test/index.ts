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
  onError: (error, vanillaEvent, store) => {
    console.log(error);
    console.log(vanillaEvent);
  },
};

const sourceErrorPlugin: IPlugin_SOURCE_ERROR = {
  type: ERROR_TYPE.SOURCE_ERROR,
  onError: (error, vanillaEvent) => {
    console.log(error);
    console.log(vanillaEvent);
  },
};

const promiseErrorPlugin: IPlugin_PROMISE_ERROR = {
  type: ERROR_TYPE.PROMISE_ERROR,
  onError: async (error, vanillaEvent, store) => {
    console.log(error);
    console.log(vanillaEvent);
    const result = await store.addError({
      stack: error.message,
      message: error.message,
      timestamp: new Date().getTime(),
      col: 0,
      row: 0,
    });
    console.log(result);
  },
};

const xhrErrorPlugin: IPlugin_XHR_AND_FETCH_ERROR = {
  type: ERROR_TYPE.XHR_AND_FETCH_ERROR,
  onError: (error, vanillaEvent) => {
    console.log(error);
    console.log(vanillaEvent);
  },
};

const sdk = new Core([
  jsErrorPlugin,
  sourceErrorPlugin,
  promiseErrorPlugin,
  xhrErrorPlugin,
]);

export { sdk };
