
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const ImageMeta: ComponentMetadata = {
  "componentName": "Image",
  "title": "Image",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "my_materials",
    "version": "0.1.0",
    "exportName": "Image",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        "title": "URL",
        "name": "src",
        "setter": "StringSetter",
      },
      {
        "title": "宽",
        "name": "width",
        "setter": "NumberSetter",
      },
      {
        "title": "高",
        "name": "height",
        "setter": "NumberSetter",
      }
    ],
    "component": {}
  }
};

const snippets: Snippet[] = [
  {
    "title": "Image",
    "screenshot": "https://img.alicdn.com/imgextra/i3/O1CN01tnhXhk1GUIFhsXwzA_!!6000000000625-55-tps-56-56.svg",
    "schema": {
      "componentName": "Image",
      "props": {
        "src": "https://img.alicdn.com/tps/TB16TQvOXXXXXbiaFXXXXXXXXXX-120-120.svg",
        "width": 200,
        "height": 200,
      }
    }
  }
];

export default {
  ...ImageMeta,
  snippets
};
