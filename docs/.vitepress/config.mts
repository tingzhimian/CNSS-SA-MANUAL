import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/CNSS-SA-MANUAL/',
  title: "CNSS-SA-MANUAL",
  description: "一些SA相关知识",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docker', link: '/docker' },
      { text: 'Git', link: '/git' },
      { text: 'Markdown', link: '/markdown' },
      { text: 'About', link: '/about' }
    ],

    sidebar: {
        '/about': [
          {
            text: 'Guide',
            items: [
              { text: '碎碎念', link: '/about'}
            ]
          }
        ],
        '/markdown': [
          {
            text: '快速跳转',
            items: [
              { text: '标题', link: '/markdown#标题'},
              { text: '加粗与斜体', link: '/markdown#加粗与斜体'},
              { text: '删除线', link: '/markdown#删除线'},
              { text: '代码块', link: '/markdown#代码块'},
              { text: '列表', link: '/markdown#列表'},
              { text: '表格', link: '/markdown#表格'},
              { text: '分割线', link: '/markdown#分割线'},
              { text: '引用', link: '/markdown#引用'}
            ]
          }
        ],
        '/introduction': [
          {
            text: '?!',
            items: [
              { text: '简介你还想要侧边栏？我真得好好调教你了', link: '/introduction'}
            ]
          }
        ]
    },

    socialLinks: [
      {  }
    ]
  }
})
