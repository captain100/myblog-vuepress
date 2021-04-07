---
title: webpack-plugins 学习01
nav:
  title: 博客
  path: '/bolg'

group:
  title: webpack 插件开发
---

# 开发 webpack 插件

> 一个偶然的机会，使用了 rax 的调试淘宝收货地址组建，对 rax 的构建流程印象深刻。webpack 的构架日志都是输出到控制台上，对于前端性能我们是很关注的构建的产物的大小和数量，以及相互之间的依赖，在控制台中展示不是很好看，没有一个整体的把控所以想实现一个 webpack 构架输出到前端页面中展示

之前使用 [webpack-dashboard](https://github.com/FormidableLabs/webpack-dashboard/blob/05e7589abb63f206fe7d29c39766eef2346e70b5/dashboard/index.js)
这是在控制台输出的 webpack plugin 所以借鉴它实现一个网页版的构建管理页面
