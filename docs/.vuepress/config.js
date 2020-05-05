// const fs = require('fs');
// const path = require('path');
// console.log(path.resolve('../css技巧'))
// console.log(fs.readdir(path.resolve('../css技巧')))

module.exports = {
    base: '/myblog/',
    title: '钰炫笔记',
    description: '记录前行的脚步👣',
    themeConfig: {
        nav: [{
            text: '主页',
            link: '/'
        }, {
            text: '分类',
            link: '/classification/'
        }, {
            text: 'leetcode',
            link: 'https://leetcode.com/problemset/all/'

        }],
        sidebar: [{
            title: 'vuepress开发笔记',
            collapsable: true,
            children: [
                ['/使用vuePress笔记/配置文件', 'config.js配置注意事项'],

            ]
        },
        {
            title: 'flutter开发笔记',
            collapsable: true,
            children: [
                ['/flutter笔记/flutter_01', 'flutter for web 项目环境搭建'],
            ]
        },
        {
            title: 'webpack 插件开发',
            collapsable: true,
            children: [
                ['/webpack-plugins/lesson_02', '手动搭建webpack'],
                ['/webpack-plugins/lesson_03', 'HtmlwebpackPlugin 使用教程'],
                ['/webpack-plugins/lesson_01', '开发webpack插件（一）'],
            ]
        },
        {
            title: '区块链笔记',
            collapsable: true,
            children: [
                ['./nodejs和区块链/bitcon01.md', '最初的想法'],
                ['./nodejs和区块链/bitcon02.md', '区块链架构设计和知识图谱'],
                ['./nodejs和区块链/bitcon03.md', '需求文档'],

            ]
        },
        {
            title: 'typescript笔记',
            collapsable: true,
            children: [
                ['/typescript/typescript_01', '使用typescript开发npm包'],
            ]
        },
        {
            title: 'css 技巧',
            collapsable: true,
            children: [
                ['/css/css 揭秘读书笔记', 'css 揭秘读书笔记']
            ]
        },
        {
            title: 'formily 文档',
            collapsable: true,
            children: [
                ['/formily/formily 简介文档', 'formily简介文档']
            ]
        },
        {
            title: 'tensorFlowJS 学习',
            collapsable: true,
            children: [
                ['/tensorFlowJs/learn_1', '前端学机器学习01']
            ]
        }, {
            title: '每天进步一点',
            collapsable: true,
            children: [
                ['/daybyday/js_pipeAsyncFns', 'JS pipeAsyncFns 实现和总结'],
                ['/daybyday/js_deepMapObj', 'JS 深拷贝 实现和总结'],
                ['/daybyday/js_getUrlParams', 'JS 正则实现字符串url解析 实现和总结']
            ]
        }
        ],
        displayAllHeaders: false,
        activeHeaderLinks: true,
        lastUpdated: '更新时间',
        evergreen: true,

    },
    serviceWorker: false, // 开启service work    
    // 设置markdown 样式
    markdown: {
        lineNumbers: true,
    }
}