module.exports = {
    base: '/myblog/',
    title: 'Hello VuePress',
    description: 'Just playing around',
    themeConfig: {
        nav: [{
            text: '主页',
            link: '/'
        }, {
            text: '分类',
            link: '/classification/'
        }],
        sidebar: [
            ['/', '首页'],
            '/helloword',
            
        ],
        displayAllHeaders: false,
        activeHeaderLinks: true,
        lastUpdated: '跟新时间',
        evergreen: true
    }
}