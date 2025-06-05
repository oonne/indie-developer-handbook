import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  lang: "zh-CN",
  title: "SEO 工作手册",
  description: "SEO 工作手册 - 工程师加一",
  theme: defaultTheme({
    nav: [
      { text: "首页", link: "/" },
      { text: "博客", link: "https://blog.oonne.com" },
    ],
    sidebar: [
      {
        text: "目录",
        children: [
          "/guide/analysis.md",
          "/guide/development.md",
          "/guide/backlinks.md",
          "/guide/tools.md",
        ],
      },
    ],
  }),
  bundler: viteBundler(),
});
