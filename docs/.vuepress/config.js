module.exports = {
	title: '赵桓熠 · 博客',
	description: '一个有信念者所开发出的力量，大于99个只有兴趣者。',
	dest: './dist',//不配(注释掉)默认在.vuepress目录下
	port: '7777',
	// ==========================================================
	// ========如果是上传到GitHub请删除base或注释掉，上传到gitee取消注释=====
	// base: '/zhyboy/',// 设置站点根路径
	// repo: 'https://github.com/TaoXuSheng/mt-blog', // 添加 github 链接
	// =========================================================
	head: [
		['meta', { name: 'keywords', content: '赵桓熠，赵桓熠的博客，赵桓熠的前端博客'}],
		['meta', { name: 'baidu-site-verification', content: 'code-IioeV44pRa'}],
		['link', { rel: 'icon', href: '/img/logo.png' }],
		// ['link', { rel: 'icon', href: '/img/logo.favicon' }],
		// ['link', { rel: 'stylesheet', href: '/css/style.css' }],
		['script', { charset: 'utf-8', src: '/js/main.js' }],//添加js
],
	markdown: {
		lineNumbers: true
	},
	themeConfig: {
		nav: require("./nav.js"),
		sidebar: require("./sidebar.js"),
		sidebarDepth: 2,
		lastUpdated: 'last Updated',
		searchMaxSuggestoins: 10,
		serviceWorker: {
			UpdatePopup: {
				message: "有新的内容.",
				buttonText: '更新'
			}
		},
		editLinks: true,
		editLinkText: '在GitHub上编辑此页！'
	}
}