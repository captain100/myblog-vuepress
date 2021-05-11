/*
 * @Author: your name
 * @Date: 2021-03-27 16:30:54
 * @LastEditTime: 2021-04-07 13:49:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /myblog/.umirc.ts
 */
import { defineConfig } from 'dumi';

export default defineConfig({
  title: '钰炫的博客',
  favicon: 'https://avatars.githubusercontent.com/u/8043135?s=400&v=4',
  logo: 'https://avatars.githubusercontent.com/u/8043135?s=400&v=4',
  outputPath: 'docs-dist',
  mode: 'site',
  // 设置路由前缀，通常用于部署到非根目录。
  base: process.env.NODE_ENV === 'production' ? '/myblog-dumi/' : '/',
  publicPath: process.env.NODE_ENV === 'production' ? '/myblog-dumi/' : '/',
  runtimePublicPath: true,
  hash: true,
  navs: [
    null,
    // {
    //   title: '作品',
    //   path: '/examples'
    // },
    {
      title: 'GitHub',
      path: 'https://github.com/captain100',
    },
  ],
  // more config: https://d.umijs.org/config
});
