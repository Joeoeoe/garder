import { ICommonError, IPlugin } from '../types';
export interface IPlugin_XHR_AND_FETCH_ERROR extends IPlugin {
    onError: (error: ICommonError, vanillaEvent: any) => any;
}
export declare const xhrAndFetchErrorMount: (plugin: IPlugin_XHR_AND_FETCH_ERROR) => void;
