import Store from '../../store';
import { ICommonError } from '../../types';
import { IPlugin } from '../constants';

export interface IPlugin_XHR_AND_FETCH_ERROR extends IPlugin {
  onError: (error: ICommonError, vanillaEvent: any, store: Store) => any;
}

export const xhrAndFetchErrorMount = function (plugin: IPlugin_XHR_AND_FETCH_ERROR, store: Store) {
  // xhr error
  const protocol = window.location.protocol;
  if (protocol === 'file') {
    return;
  }
  if (!window.XMLHttpRequest) {
    return;
  }
  const xmlhttp = window.XMLHttpRequest;
  const oldSend = xmlhttp.prototype.send;
  const handleEvent = function (event) {
    // TODO message
    plugin.onError({ message: 'xhr error' }, event, store);
  };
  xmlhttp.prototype.send = function () {
    this.addEventListener('error', handleEvent);
    return oldSend.apply(this, arguments);
  };

  // fetch error
  if (!window.fetch) {
    return;
  }
  const oldFetch = window.fetch;
  window.fetch = function () {
    return oldFetch
      .apply(this, arguments)
      .then((res) => {
        return res;
      })
      .catch((error) => {
        plugin.onError({ message: error }, error, store);
        throw error;
      });
  };
};
