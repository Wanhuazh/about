export default {
  // 站点语言
  lang: 'zh-CN',
  
  // 站点标题
  title: '万花',
  
  // 站点描述
  description: '万花文档站点',
  
  // 部署到GitHub Pages时的基础路径
  base: '/about/',
  
  // 主题配置
  themeConfig: {
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: 'Wiki', link: '/wiki/' },
      { text: '新闻', link: '/news/' },
      { text: 'GitHub', link: 'https://github.com/' }
    ],
    
    // 侧边栏
    sidebar: [
      {
        text: '关于',
        items: [
          { text: 'Linux 用户协会', link: '/about/' },
          { text: '关于我们', link: '/about/us' }
        ]
      },
      {
        text: '服务',
        items: [
          { text: '协会服务', link: '/services/' },
          { text: '开源镜像站', link: '/services/mirrors' }
        ]
      },
      {
        text: '活动',
        items: [
          { text: '协会活动', link: '/activities/' },
          { text: 'Linux 101', link: '/activities/linux101' }
        ]
      }
    ],
    
    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 Linux 用户协会'
    },
    
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/' }
    ]
  }
} 