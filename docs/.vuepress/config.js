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
        sidebar: [
            {
                title: 'vuepress开发笔记',
                collapsable: false,
                children: [
                    ['/使用vuePress笔记/配置文件', 'config.js配置注意事项'],
                
                ]
            },
            {
                title: 'webpack 插件开发',
                collapsable: false,
                children: [
                    ['/webpack-plugins/lesson_01', '开发webpack插件（一）'],
                
                ]
            },
            // {
            //     title: 'typescript笔记',
            //     collapsable: false,
            //     children: [ 
            //         ['/startvuepress/test', '使用vuepress'],
            //         ['/startvuepress/hahah', 'cece']
            //     ]
            // },
        ],
        displayAllHeaders: false,
        activeHeaderLinks: true,
        lastUpdated: '跟新时间',
        evergreen: true
    },
    serviceWorker: true, // 开启service work    

}