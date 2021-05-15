import { IPlugin } from '../..';
import { ICommonError } from '../types';
export interface IPlugin_SOURCE_ERROR extends IPlugin {
    onError: (error: ICommonError, vanillaEvent: ErrorEvent) => any;
}
export declare const sourceErrorMount: (plugin: IPlugin_SOURCE_ERROR) => void;
