import { mount } from './error-collect/mount';
import { IPlugin } from './error-collect/constants';
import Store from './store';

export class Core {
  private plugins: Array<IPlugin>;

  constructor(plugins: Array<IPlugin>) {
    this.plugins = plugins;
  }

  init() {
    const plugins = this.plugins;
    const store = new Store('garder');
    for (const plugin of plugins) {
      mount(plugin, store);
    }
    console.log('init finish');
  }
}
