#!/usr/bin/env sh
###
 # @Author: your name
 # @Date: 2021-04-07 14:25:01
 # @LastEditTime: 2021-04-07 14:25:01
 # @LastEditors: Please set LastEditors
 # @Description: In User Settings Edit
 # @FilePath: /myblog/deploy.sh
### 
###
 # @Author: your name
 # @Date: 2019-02-24 22:31:26
 # @LastEditTime: 2021-04-07 10:15:03
 # @LastEditors: your name
 # @Description: In User Settings Edit
 # @FilePath: /myblog/deploy.sh
### 
# 终止一个错误
set -e

# 构建
npm run docs:build

# 进入生成的构建文件夹
cd docs-dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:captain100/myblog.git master:gh-pages

cd -