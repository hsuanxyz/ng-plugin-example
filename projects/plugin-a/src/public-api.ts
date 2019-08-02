/*
 * Public API Surface of plugin-a
 */

import { createPlugin } from 'plugin-manager';
import { PluginAComponent } from './lib/plugin-a.component';
import { PluginAModule } from './lib/plugin-a.module';

export default createPlugin({
  name: 'plugin-a',
  module: PluginAModule,
  component: PluginAComponent
});
