import Store from '../../store';
import { ICommonError } from '../../types';
import { IPlugin } from '../constants';
export interface IPlugin_PROMISE_ERROR extends IPlugin {
    onError: (error: ICommonError, vanillaEvent: PromiseRejectionEvent, store: Store) => any;
}
export declare const promiseErrorMount: (plugin: IPlugin_PROMISE_ERROR, store: Store) => void;
