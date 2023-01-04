import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'

export default {
  title: 'Konmai Academy',
  description: '',
  head: [
    [
      "script",
      {
      crossorigin: "anonymous",
      async: true,
      src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9513404499526822"
      }
    ],
    ['link', { rel: 'icon', href: '/resources/icons/icon-head.png' }],
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  theme: defaultTheme ({
    locales: {
    '/': {
      logoDark: null,
      sidebarDepth: 1,
    },
    },
    logo: '/resources/icons/logo-konmai.png',
    sidebar: [
      '/',
      {title: 'Konmai博客站', path: 'https://616.sb/blog/'},
      '/tools/',
      '/updatelog/',
      '/about/',
      '/donate/',
      '/collecting-requirements/',
      {
	text: '友情链接',
	collapsible: true,
	children: [
	  {
	    text: 'Arcaea中文站',
	    link: 'https://arcaea.cn'
	  },
	  {
	    text: 'Arcaea维基百科',
	    link: 'https://wiki.arcaea.cn'
	  },
	  {
            text: '企鹅物流数据统计',
            link: 'https://penguin-stats.io'
          },
	  {
	    text: 'TunerGames',
	    link: 'https://paradigm.tunergames.com'
	  },
	  {
	    text: '616.sb博客',
	    link: 'https://616.sb/blog/'
	  }
	]
      },
      '/tos/',
      '/privacy/'
    ],
    smoothScroll: true
  }),
  plugins: [
    googleAnalyticsPlugin({
      id: 'G-QLNGNS0J3R',
    }),
    backToTopPlugin(),
    searchPlugin({
      // options
    }), 
  ],
  markdown: {
    externalLinks: { target:'_blank', rel:'noopener'}
  },
}
