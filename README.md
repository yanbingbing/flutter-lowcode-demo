# 使用说明

## Step 1: 安装

在 `packages/my_materials` 和 `packages/my_editor` 中分别执行 yarn 安装
```sh
cd packages/my_materials
yarn
cd ../my_editor
yarn
```

在 `packages/my_app` 中执行 `flutter pub get` 安装依赖
```sh
cd packages/my_app
flutter pub get
```

## Step 2: 启动

**启动低代码编辑器**
```sh
cd packages/my_editor
yarn start
```

**启动低代码物料**
```sh
cd packages/my_materials
yarn start
```

**启动 Flutter App**
```sh
cd packages/my_app
flutter run
```
