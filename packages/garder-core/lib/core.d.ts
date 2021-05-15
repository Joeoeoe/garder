import { IPlugin } from './error-collect/constants';
export declare class Core {
    private plugins;
    constructor(plugins: Array<IPlugin>);
    init(): void;
}
