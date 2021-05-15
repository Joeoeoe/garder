import Store from '../../store';
import { ICommonError } from '../../types';
import { IPlugin } from '../constants';
export interface IPlugin_XHR_AND_FETCH_ERROR extends IPlugin {
    onError: (error: ICommonError, vanillaEvent: any, store: Store) => any;
}
export declare const xhrAndFetchErrorMount: (plugin: IPlugin_XHR_AND_FETCH_ERROR, store: Store) => void;
