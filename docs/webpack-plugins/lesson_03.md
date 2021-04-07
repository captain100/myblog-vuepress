---
title: webpack-plugins 学习03
nav:
  title: 博客
  path: '/bolg'
---### webpack 插件使用 HtmlWebpackPlugin 心得

```js
// 首先安装插件，并且调整 webpack.config.js 文件
npm install --save-dev html-webpack-plugin

// 在webpack.config.js 中添加
  const path = require('path');
+ const HtmlWebpackPlugin = require('html-webpack-plugin');

  module.exports = {
    entry: {
      app: './src/index.js',
      print: './src/print.js'
    },
+   plugins: [
+     new HtmlWebpackPlugin({
+       title: '管理输出'
+     })
+   ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  };
```
