### 搭建环境步骤
```do
// 创建文件
$ mkdir popeye-vue-popup
// 进入文件
$ cd popeye-vue-popup
// 初始化git
$ git init
// 初始化npm
$ npm init
// 引入webpack
$ npm i webpack webpack-dev-server -D
// 安装vue 
$ npm i vue -S
// 使用cnpm 加速
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
```

### webpack 配置

```do
<!-- 安装webpack plugin -->
cnpm i -D webpack-cli
cnpm i -D html-webpack-plugin webpack-bundle-analyzer 
cnpm i -D clean-webpack-plugin vue-style-loader
cnpm i -D vue-loader css-loader vue-style-loader sass-loader  vue-template-compiler

resolve: {

    extensions: ['.js', '.vue'] // 省略扩展名
}

```
### babel 配置
```
cnpm i -D @babel/core @babel/cli @babel/preset-env
``` 

### vue 依赖
```
cnpm i -S vue-template-compiler vue
```

### 设置npm 启动
```
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack-dev-server --open --hot",
    "build": "webpack --progress --hide-modules"
  },
```



### 参考文档
[从零开始搭建一个简单的基于webpack的vue开发环境](https://segmentfault.com/a/1190000012789253)