module.exports=
[
    {
        text: '搭建博客',
        collapsable: true,
        children: [
            '/guide/搭建博客/搭建vuepress博客.md',
        ]
    },
    {
        text: '踩坑笔记',
        collapsable: true,
        children: [
            '/guide/踩坑笔记/notes/01踩坑.md',
        ]
    },
    {
        text: '黑科技',
        collapsable: true,//表示可以折叠
        children: [
            '/guide/黑科技/01获取地址.md',
        ]
    },
    {
        text: '破解大全',
        collapsable: true,
        children: [
            '/guide/破解大全/notes/first.md',
        ]
    },
    {
        text: '软件使用',
        collapsable: true,
        children:[
            {
                text: 'CSDN语法',
                collapsable: false,//表示可以折叠
                children: 
                [
                    '/guide/软件使用/CSDN/csdn语法.md',
                ]
            },
            {
                text: 'idea快捷键',
                collapsable: false,//表示可以折叠
                children: 
                [
                    '/guide/软件使用/idea/01快捷键.md',
                ]
            },
            {
                text: 'markdown使用',
                collapsable: false,//表示可以折叠
                children: 
                [
                    '/guide/软件使用/typora/md使用.md',
                ]
            },
            {
                text: 'UML语法',
                collapsable: false,//表示可以折叠
                children: 
                [
                    '/guide/软件使用/UML/01UML.md',
                ]
            },
            {
                text: 'webstrom简化操作',
                collapsable: false,//表示可以折叠
                children: 
                [
                    '/guide/软件使用/webstrom/01自动生成代码块.md',
                    '/guide/软件使用/webstrom/02快捷键.md',
                ]
            },
        ]
    }


]