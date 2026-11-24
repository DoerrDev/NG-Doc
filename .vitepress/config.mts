import { defineConfig } from 'vitepress'

const base = '/NG-Doc/'

export default defineConfig({
  base,
  srcExclude: ['README.md'],
  lang: 'zh-CN',
  title: 'NextGestures',
  description: '轻量、可自由定制的 Windows 鼠标手势工具',
  appearance: false,
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: `${base}icon.png` }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Ma+Shan+Zheng&display=swap' }],
  ],
  themeConfig: {
    logo: '/icon.png',
    siteTitle: 'NextGestures',
    nav: [
      { text: '使用文档', link: '/guide/', activeMatch: '/guide/' },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/DoerrDev/NextGestures' }],
    sidebar: { '/guide/': [
      { text: '开始', items: [
        { text: '快速上手', link: '/guide/' },
      ] },
      { text: '触发方式', items: [
        { text: '边角触发', link: '/guide/triggers/edge' },
        { text: '手势触发', link: '/guide/triggers/gesture' },
        { text: '滚轮触发', link: '/guide/triggers/wheel' },
        { text: '鼠标中键触发', link: '/guide/triggers/middle-button' },
      ] },
      { text: '提供的动作', items: [
        { text: '快速打开程序', link: '/guide/actions/launch-app' },
        { text: '按下快捷键', link: '/guide/actions/hotkey' },
        { text: '录制键盘动作', link: '/guide/actions/key-sequence' },
        { text: '快速打开网页', link: '/guide/actions/open-url' },
        { text: '快速翻译', link: '/guide/actions/translate' },
        { text: '快速优化表达', link: '/guide/actions/polish' },
        { text: '粤拼转换', link: '/guide/actions/jyutping' },
        { text: '快速截屏与录屏', link: '/guide/actions/screenshot' },
      ] },
      { text: '触发时机与配置组', items: [
        { text: '马上执行', link: '/guide/timing/immediate' },
        { text: '松手执行', link: '/guide/timing/on-release' },
        { text: 'Global 配置组', link: '/guide/profiles/global' },
        { text: '其他配置组', link: '/guide/profiles/apps' },
        { text: '黑名单', link: '/guide/profiles/blacklist' },
      ] },
      { text: '设置', items: [
        { text: '快速开关手势', link: '/guide/settings/toggle' },
        { text: '快速反馈', link: '/guide/settings/feedback' },
      ] },
    ] },
    outline: { level: [2, 3], label: '本页目录' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '文档目录',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: {
            displayDetails: '显示详情',
            resetButtonTitle: '清除搜索',
            backButtonTitle: '返回',
            noResultsText: '没有找到相关文档',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
          },
        },
      },
    },
  },
})
