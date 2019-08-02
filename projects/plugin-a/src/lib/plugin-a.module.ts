import { NgModule } from '@angular/core';
import { PluginAComponent } from './plugin-a.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';

@NgModule({
  imports: [NgZorroAntdModule],
  declarations: [PluginAComponent],
  entryComponents: [PluginAComponent],
  exports: [PluginAComponent]
})
export class PluginAModule { }
