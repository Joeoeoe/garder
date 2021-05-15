import { IPlugin } from '../..';
import Store from '../../store';
import { ICommonError } from '../../types';

export interface IPlugin_SOURCE_ERROR extends IPlugin {
  onError: (error: ICommonError, vanillaEvent: ErrorEvent, store: Store) => any;
}

// source error
export const sourceErrorMount = function (plugin: IPlugin_SOURCE_ERROR, store: Store) {
  window.addEventListener(
    'error',
    (ev) => {
      // filter js error
      const target = ev.target;
      const isElementTarget =
        target instanceof HTMLScriptElement ||
        target instanceof HTMLLinkElement ||
        target instanceof HTMLImageElement;
      if (!isElementTarget) {
        return false;
      }

      // TODO: message
      const commonError: ICommonError = { message: 'source failed to load' };
      plugin.onError(commonError, ev, store);
    },
    true
  );
};
