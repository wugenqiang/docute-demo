const langs = [
    { title: '简体中文', path: '/home', matchPath: /^\/(home|plugin|cli|changelog)/ },
    { title: 'English', path: '/en/', matchPath: /^\/en/ }
]

docute.init({
    // 配置...
    // 项目根目录里的 README.md
    home: './README.md',
    // true 将会默认使用 `landing.html`
    landing: 'landing.html',
    debug: true,

    // slug for your github repo
    repo: 'wugenqiang/docute-demo/tree/master/docute-v4-demo',
    // twitter username
    twitter: 'enjoytoshare',
    // the link to source file of current page
    'edit-link': 'https://github.com/wugenqiang/docute-demo/blob/master/docute-v4-demo/docs/',

    //自定义侧边栏目录
    //toc: './toc.md',

    // 显示 h2 到 h4 的标题
    tocVisibleDepth: 3,
    nav: [
        // 首页
        {title: '首页', path: '/'},
        // 中文文档
        {title: '博客', path: 'https://wugenqiang.github.io/'},

    ],
    plugins: [

        function valine(context) {
            context.registerComponent('content:end',{
                template: '<div id="vcomments" style="padding: 50px;"></div>',
                mounted: function () {
                    new Valine({
                        el: '#vcomments',
                        appId: "KIlqXsCmzBUnovnvh5ih8mk9-gzGzoHsz",
                        appKey: "e0v6zIg2NGg44PM6MVLa7voo",
                        avatar: 'monsterid',
                        path: window.location.href,
                        placeholder: "你是我一生只会遇见一次的惊喜 ...",
                    })
                }
            })
        },
        evanyou(),
    ]
})