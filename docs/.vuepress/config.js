module.exports = {
    title: '个人博客',
    themeConfig: {
        nav: [
            { text: '首页', link: '/blog/home.md' },
            { text: '处女作', link: '/blog/firstBlog.md' },
        ],
        sidebar: [
            '/blog/home.md', // 首页
            '/blog/firstBlog.md', // 第一篇博客
            '/blog/myVueDemo.md', // vuedemo
            '/blog/vue-vuex.md', // vuex
            '/blog/theGit.md', // 学习git
            '/blog/webpack.md', // 学习webpack
        ]
    }
}