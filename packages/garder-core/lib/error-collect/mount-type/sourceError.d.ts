import { IPlugin } from '../..';
import Store from '../../store';
import { ICommonError } from '../../types';
export interface IPlugin_SOURCE_ERROR extends IPlugin {
    onError: (error: ICommonError, vanillaEvent: ErrorEvent, store: Store) => any;
}
export declare const sourceErrorMount: (plugin: IPlugin_SOURCE_ERROR, store: Store) => void;
