
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const TextMeta: ComponentMetadata = {
  "componentName": "Text",
  "title": "Text",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "my_materials",
    "version": "0.1.0",
    "exportName": "Text",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        "title": "内容",
        "name": "content",
        "setter": "StringSetter",
      },
      {
        "title": "颜色",
        "name": "color",
        "setter": "ColorSetter",
      },
      {
        "title": "字号",
        "name": "fontSize",
        "setter": "NumberSetter",
        extraProps: {
          getValue: (target, value) => {
            return `${value}`;
          }
        }
      },
      {
        "title": "行高",
        "name": "lineHeight",
        "setter": "NumberSetter",
        extraProps: {
          getValue: (target, value) => {
            return `${value}`;
          }
        }
      }
    ],
    "component": {},
    "supports": {
      "loop": false,
      "condition": false,
    }
  }
};

const snippets: Snippet[] = [
  {
    "title": "Text",
    "screenshot": "https://img.alicdn.com/imgextra/i4/O1CN01E2PcPW1bKJV5QUVMg_!!6000000003446-55-tps-50-50.svg",
    "schema": {
      "componentName": "Text",
      "props": {
        "content": "Build high-quality desktop apps without compromising compatibility or performance.",
        "fontSize": "20",
        "lineHeight": "1.5",
        "color": "#000000",
      }
    }
  }
];

export default {
  ...TextMeta,
  snippets
};
