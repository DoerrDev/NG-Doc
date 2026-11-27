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
        { text: '界面导览', link: '/guide/interface' },
      ] },
      { text: '触发方式', items: [
        { text: '手势触发', link: '/guide/triggers/gesture' },
        { text: '滚轮触发', link: '/guide/triggers/wheel' },
        { text: '中键与侧键触发', link: '/guide/triggers/middle-button' },
        { text: '边角触发', link: '/guide/triggers/edge' },
        { text: '快捷键触发', link: '/guide/triggers/hotkey' },
      ] },
      { text: '动作', items: [
        { text: '发送按键', link: '/guide/actions/hotkey' },
        { text: '按键序列', link: '/guide/actions/key-sequence' },
        { text: '启动程序', link: '/guide/actions/launch-app' },
        { text: '打开网址', link: '/guide/actions/open-url' },
        { text: '区域截图', link: '/guide/actions/screenshot' },
        { text: '贴图', link: '/guide/actions/pin' },
        { text: '区域录屏', link: '/guide/actions/record' },
      ] },
      { text: 'AI 动作', items: [
        { text: '配置与使用', link: '/guide/ai/' },
        { text: '内置预设', link: '/guide/ai/presets' },
        { text: '自定义 AI 动作', link: '/guide/ai/custom' },
      ] },
      { text: '执行时机与配置组', items: [
        { text: '松手执行', link: '/guide/timing/on-release' },
        { text: '马上执行', link: '/guide/timing/immediate' },
        { text: 'Global 配置组', link: '/guide/profiles/global' },
        { text: '程序配置组', link: '/guide/profiles/apps' },
        { text: '交给程序自带手势', link: '/guide/profiles/passthrough' },
      ] },
      { text: '设置', items: [
        { text: '开关手势与快捷键', link: '/guide/settings/toggle' },
        { text: '轨迹与提示外观', link: '/guide/settings/appearance' },
        { text: '版本与更新', link: '/guide/settings/update' },
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
