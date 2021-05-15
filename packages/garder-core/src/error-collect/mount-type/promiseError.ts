import Store from '../../store';
import { ICommonError } from '../../types';
import { IPlugin } from '../constants';

export interface IPlugin_PROMISE_ERROR extends IPlugin {
  onError: (error: ICommonError, vanillaEvent: PromiseRejectionEvent, store: Store) => any;
}

// promise unhandle error
export const promiseErrorMount = function (plugin: IPlugin_PROMISE_ERROR, store: Store) {
  window.addEventListener('unhandledrejection', (event) => {
    const commonError: ICommonError = { message: event.reason };
    plugin.onError(commonError, event, store);
  });
};
