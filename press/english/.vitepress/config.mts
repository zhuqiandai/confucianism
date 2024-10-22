import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "English ALL IN ONE",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Documents", link: "/phrase/index" },
    ],

    sidebar: [
      {
        text: "Documents",
        items: [
          {
            text: "Phrase 短语",
            link: "/phrase/index",
            items: [
              { text: "work -", link: "/phrase/work" },
              { text: "drive -", link: "/phrase/drive" },
              { text: "knock -", link: "/phrase/knock" },
            ],
          },
          { text: "Paragraph 段落", link: "/paragraph/index" },
          { text: "Grammar 语法", link: "/grammar/index", items: [
						{ text: "noun clause 名词性从句", link: "/grammar/noun-clause" },
						{ text: "auxiliary 助动词", link: "/grammar/auxiliary" },
						{ text: "article 冠词", link: "/grammar/article" }
					] },
          {
            text: "Phonetic 音标",
            link: "/phonetic/index",
            items: [
              { text: "monophthong 单元音", link: "/phonetic/monophthong" },
              { text: "diphthong 双元音", link: "/phonetic/diphthong" },
            ],
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
