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

会在浏览器自动打开 `http://localhost:5556/`，界面如下
<img width="1059" alt="image" src="https://user-images.githubusercontent.com/1620674/227789056-151b0f56-09f7-4493-b092-de1797c5761b.png">

**启动低代码物料**
```sh
cd packages/my_materials
yarn start
```

会自动将上一步打开的链接跳转到 `http://localhost:5556/?debug`，并注入物料组件
<img width="1063" alt="image" src="https://user-images.githubusercontent.com/1620674/227789184-bb6911a9-db54-4dec-bb8c-398f5d9cb9a1.png">

如果没看红框效果，请刷新一下，可能有延迟。


**启动 Flutter App**
```sh
cd packages/my_app
flutter run
```

如果已经 `open -a simulator`，会在 simulator 中启动 flutter app，效果如下
<img width="762" alt="image" src="https://user-images.githubusercontent.com/1620674/227789537-ec2139db-1c89-4017-8bb4-d4e6889535ba.png">


## Step 3：调试看效果


![2023-03-27 00 34 28](https://user-images.githubusercontent.com/1620674/227790390-4c803c8e-52a0-4cc1-a7af-b3ce520f64db.gif)
