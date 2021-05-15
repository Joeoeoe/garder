import Store from '../../store';
import { ICommonError } from '../../types';
import { IPlugin } from '../constants';
export interface IPlugin_JS_ERROR extends IPlugin {
    onError: (error: ICommonError, vanillaEvent: ErrorEvent, store: Store) => any;
}
export declare const jsErrorMount: (plugin: IPlugin_JS_ERROR, store: Store) => void;
