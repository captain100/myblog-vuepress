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
                collapsable: false,
                children: [
                    ['/使用vuePress笔记/配置文件', 'config.js配置注意事项'],

                ]
            },
            { 
                title: 'flutter开发笔记',
                collapsable: false,
                children: [
                    ['/flutter笔记/flutter_01', 'flutter for web 项目环境搭建'],
                ]
            },
            {
                title: 'webpack 插件开发',
                collapsable: false,
                children: [
                    ['/webpack-plugins/lesson_02', '手动搭建webpack'],
                    ['/webpack-plugins/lesson_03', 'HtmlwebpackPlugin 使用教程'],
                    ['/webpack-plugins/lesson_01', '开发webpack插件（一）'],
                ]
            },
            {
                title: '区块链笔记', 
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
                    ['/typescript/typescript_01', ' 使用typescript开发npm包'],
                ]
            },
        ],
        displayAllHeaders: false,
        activeHeaderLinks: true,
        lastUpdated: '更新时间',
        evergreen: true,

    },
    serviceWorker: true, // 开启service work    
    // 设置markdown 样式
    markdown: {
        lineNumbers: true,
    }
}