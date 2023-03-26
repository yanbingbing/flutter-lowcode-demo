
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const ContainerMeta: ComponentMetadata = {
  "componentName": "Container",
  "title": "Container",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "my_materials",
    "version": "0.1.0",
    "exportName": "Container",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        "title": "背景颜色",
        "name": "backgroundColor",
        "setter": "ColorSetter",
      },
      {
        "title": "外边距",
        "name": "margin",
        "setter": "NumberSetter",
      },
      {
        "title": "内边距",
        "name": "padding",
        "setter": "NumberSetter",
      },
      {
        "title": "方向",
        "name": "direction",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "options": [
              {
                "label": "垂直",
                "value": "vertical"
              },
              {
                "label": "水平",
                "value": "horizontal"
              }
            ]
          },
          "initialValue": "vertical"
        }
      }
    ],
    "component": {
      "isContainer": true,
    },
    "supports": {
      "loop": false,
      "condition": false,
    }
  }
};

const snippets: Snippet[] = [
  {
    "title": "Container",
    "screenshot": "https://img.alicdn.com/imgextra/i2/O1CN01B1NMW926IFrFxjqQT_!!6000000007638-55-tps-56-56.svg",
    "schema": {
      "componentName": "Container",
      "props": {
        "margin": "10",
        "padding": "10",
        "backgroundColor": "#ffffff",
        "direction": "vertical"
      }
    }
  }
];

export default {
  ...ContainerMeta,
  snippets
};
