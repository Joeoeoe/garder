import { ICommonError, IPlugin } from '../types';
export interface IPlugin_PROMISE_ERROR extends IPlugin {
    onError: (error: ICommonError, vanillaEvent: PromiseRejectionEvent) => any;
}
export declare const promiseErrorMount: (plugin: IPlugin_PROMISE_ERROR) => void;
