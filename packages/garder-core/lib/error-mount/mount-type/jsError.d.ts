import { ICommonError, IPlugin } from '../types';
export interface IPlugin_JS_ERROR extends IPlugin {
    onError: (error: ICommonError, vanillaEvent: ErrorEvent) => any;
}
export declare const jsErrorMount: (plugin: IPlugin_JS_ERROR) => void;
