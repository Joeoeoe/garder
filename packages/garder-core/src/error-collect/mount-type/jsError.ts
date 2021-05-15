import Store from '../../store';
import { ICommonError } from '../../types';
import { IPlugin } from '../constants';

export interface IPlugin_JS_ERROR extends IPlugin {
  onError: (error: ICommonError, vanillaEvent: ErrorEvent, store: Store) => any;
}

// js runtime error
export const jsErrorMount = function (plugin: IPlugin_JS_ERROR, store: Store) {
  window.addEventListener('error', (ev) => {
    const commonError: ICommonError = { message: ev.message };
    plugin.onError(commonError, ev, store);
  });
};
