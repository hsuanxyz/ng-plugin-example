import {Compiler, Component, Injector, NgModuleFactory, Type} from '@angular/core';
import { PluginManagerService } from 'plugin-manager';

interface PluginItem {
  moduleFactory: NgModuleFactory<any>;
  component: Type<any>;
  injector: Injector;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  plugins: PluginItem[] = [];

  constructor(
    private pluginManagerService: PluginManagerService,
    private compiler: Compiler,
    private injector: Injector
  ) { }

  loadModule(name: string): void {
    this.pluginManagerService.loadModule(name).then(plugin => {
      if (this.plugins.findIndex(p => p.name === plugin.name) === -1) {
        const moduleFactory = this.compiler.compileModuleSync(plugin.module);
        this.plugins = [...this.plugins, {
          moduleFactory,
          name: plugin.name,
          component: plugin.component,
          injector: this.injector
        }];
      }
    });
  }

}
