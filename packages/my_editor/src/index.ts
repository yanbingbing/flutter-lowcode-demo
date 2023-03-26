import { init, plugins } from '@alilc/lowcode-engine';
import EditorInitPlugin from './plugins/plugin-editor-init';
import SchemaPlugin from '@alilc/lowcode-plugin-schema';
import InjectPlugin from '@alilc/lowcode-plugin-inject';
import SimulatorResizerPlugin from '@alilc/lowcode-plugin-simulator-select';
import ComponentPanelPlugin from './plugins/plugin-component-panel';
import DefaultSettersRegistryPlugin from './plugins/plugin-default-setters-registry';
import SaveSamplePlugin from './plugins/plugin-save-sample';
import LogoSamplePlugin from './plugins/plugin-logo-sample';
import './global.scss';

async function registerPlugins() {
  await plugins.register(InjectPlugin);

  await plugins.register(EditorInitPlugin, {
    scenarioName: 'general',
    displayName: 'Flutter Demo',
    info: {
      urls: [
        {
          key: '设计器',
          value: 'https://github.com/alibaba/lowcode-demo/tree/main/demo-general',
        }
      ],
    },
  });

  // 设置内置 setter 和事件绑定、插件绑定面板
  await plugins.register(DefaultSettersRegistryPlugin);

  await plugins.register(LogoSamplePlugin);

  await plugins.register(ComponentPanelPlugin);

  await plugins.register(SchemaPlugin, { isProjectSchema: true });

  await plugins.register(SimulatorResizerPlugin);

  await plugins.register(SaveSamplePlugin);
};

(async function main() {
  await registerPlugins();

  init(document.getElementById('lce-container')!, {
    locale: 'zh-CN',
    enableCondition: false,
    enableCanvasLock: true,
    // 默认绑定变量
    supportVariableGlobally: false,
  });
})();
