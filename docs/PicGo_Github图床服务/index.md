---
title: 利用PicGo + Github 搭建cdn服务
nav:
  path: '/bolg'

group:
  title: cdn
---

# 利用 PicGo + Github 搭建 cdn 服务

<Alert type="info">
  由于发布地址可以开发地址不一致，导致bolg使用本地图deloy发布后图片地址错误，所以搭建一个基于github的图床应用，将应用图片通过PicGo
</Alert>

# PicGo 配置 github 图床服务

![](https://cdn.jsdelivr.net/gh/captain100/mycdn/img/20210517110515.png)

# PicGo 上传图片操作

PicGo 下载地址 [https://github.com/Molunerfinn/PicGo/releases](https://github.com/Molunerfinn/PicGo/releases)

## 提供服务

![](https://raw.githubusercontent.com/captain100/mycdn/main/img/20210511105414.png)

## 上传图片

## ![](https://raw.githubusercontent.com/captain100/mycdn/main/img/20210511103709.png)

# jsdelivr cdn 加速

![](https://raw.githubusercontent.com/captain100/mycdn/main/img/20210511110553.png)

## 使用方法

jsDelivr 官网提供了 github、npm、wordpress 这三个直观例子，有兴趣的道友可以去官网了解
<Alert type="warning">
//加载资源(版本号不填的话，默认引用最新)

https://cdn.jsdelivr.net/gh/murenziwei/images/draw/01.png

//打开目录（后面的"/"是必要的，不然的话，打不开

https://cdn.jsdelivr.net/gh/murenziwei/images/
</Alert>

## github-plus

<Alert type="warning">
  支持github 图床删除和管理同步
</Alert>

# 参考文章

1. [使用 GitHub 搭建免费图床/网盘(CDN 加速)](https://www.jianshu.com/p/2097bef17cbe)
2. [PicGo 配置使用 github ](https://www.jianshu.com/p/9d91355e8418)
3. [安装 picgo github-plus 插件](https://www.pianshen.com/article/31341344211)
