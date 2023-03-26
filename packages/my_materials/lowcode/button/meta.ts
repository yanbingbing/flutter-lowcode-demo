
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const ButtonMeta: ComponentMetadata = {
  "componentName": "Button",
  "title": "Button",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "my_materials",
    "version": "0.1.0",
    "exportName": "Button",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        "title": "类型",
        "name": "type",
        "description": "类型",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "options": [
              {
                "label": "Elevated",
                "value": "primary"
              },
              {
                "label": "Outline",
                "value": "secondary"
              },
              {
                "label": "Text",
                "value": "normal"
              }
            ]
          },
          "initialValue": "primary"
        }
      },
      {
        "title": "内容",
        "name": "content",
        "setter": "StringSetter",
      }
    ],
    "supports": {
      "style": false,
    },
    "component": {}
  }
};

const snippets: Snippet[] = [
  {
    "title": "Button",
    "screenshot": "https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_button.png",
    "schema": {
      "componentName": "Button",
      "props": {
        "content": "Click Me"
      }
    }
  }
];

export default {
  ...ButtonMeta,
  snippets
};
