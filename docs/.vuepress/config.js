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
            ['/', '首页'],
            ['/helloword', '使用vuepress'],
            // ['/startvuepress', '使用笔记'],
        ],
        displayAllHeaders: false,
        activeHeaderLinks: true,
        lastUpdated: '跟新时间',
        evergreen: true
    },
    serviceWorker: true, // 开启service work    

}