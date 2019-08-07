module.exports = {
  base: '/',
  dest: './dist', //打包后的文件
  title: '中原消费金融',
  description: ' 技术文档',
  path: 'https://www.hnzycfc.com/',
  themeConfig: {
    logo: '/hero.png',
    sidebar: 'auto',
    lastUpdated: 'Last Updated',
    nav: [
      { text: '首页', link: '/' },
      { text: '前端',
        items: [
          { text: '规范', link: '/pages/web/standard' },
        ]
      },
      { text: '后端',
        items: [
          { text: '规范', link: '/pages/backend/standard' },
        ]
      },
      { text: '测试',
        items: [
          { text: '规范', link: '/pages/ft/standard' },
        ]
      },
      { text: '博文', link: '/blog/' },
    ],
    sidebar: {
      '/pages/web/': [
        'standard',  /* /foo/one.html */
      ],
      '/pages/ft/': [
        'standard',  /* /foo/one.html */
      ],
      '/pages/backend/': [
        'standard',  /* /foo/one.html */
      ],
      '/pages/blog/': [
        '',     /* /foo/ */
      ],

    }
  }
}
