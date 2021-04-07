/*
 * @Author: your name
 * @Date: 2021-03-27 16:30:54
 * @LastEditTime: 2021-04-07 11:04:07
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
  base: '/myblog-dumi',
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
