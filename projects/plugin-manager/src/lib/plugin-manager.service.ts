import {Injectable, Type} from '@angular/core';
import {PluginManagerModule} from './plugin-manager.module';
import {COMMON_DEPS} from './common-deps';

const SystemJs = (window as any).System;

export function createPlugin(config: {
  name: string;
  module: Type<any>;
  component: Type<any>
}) {
  return new NgPlugin(config.name, config.module, config.component);
}

export class NgPlugin {
  constructor(
    public name: string,
    public module: Type<any>,
    public component: Type<any>) {
  }
}

@Injectable({
  providedIn: PluginManagerModule
})
export class PluginManagerService {

  depsDefined = false;

  constructor() { }

  defineDeps() {
    if (this.depsDefined) {
      return;
    }
    Object.keys(COMMON_DEPS).forEach(externalKey =>
      (window as any).define(externalKey, [], () => COMMON_DEPS[ externalKey ])
    );
    this.depsDefined = true;
  }

  loadModule(name: string): Promise<NgPlugin> {
    this.defineDeps();
    return SystemJs.import(`./assets/${name}.umd.js`)
      .then(() => SystemJs.import(name))
      .then(plugin => {
        if (plugin instanceof NgPlugin) {
          return Promise.resolve(plugin);
        } else {
          throw new TypeError('This module is not a valid plugin');
        }
      });
  }
}

