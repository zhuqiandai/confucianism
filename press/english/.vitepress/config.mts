import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/phonetic/index' },
      { text: 'Examples', link: '/grammar/index' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Phrase 短语', link: '/phrase/index', items: [
						{ text: "work -", link: "/phrase/work"}
					] },
          { text: 'Paragraph 段落', link: '/paragraph/index' },
          { text: 'Grammar 语法', link: '/grammar/index', items: [
						{ text: "work -", link: "/grammar/work"}
					] },
          { text: 'Phonetic 音标', link: '/phonetic/index', 
						items: [
						{text: "time", link: '/markdown-examples' },
						{text: "time", link: '/markdown-examples' }
					]}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
