import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  lang: "zh-CN",
  title: "独立开发者工作手册",
  description: "独立开发者工作手册 - 工程师加一",
  theme: defaultTheme({
    navbar: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "工程师加一",
        link: "https://blog.oonne.com",
      },
    ],
    contributors: false,
    sidebar: [
      {
        text: "目录",
        children: [
          "/pages/analysis-request/index.md",
          "/pages/technology/index.md",
          "/pages/development/index.md",
          "/pages/get-customer/index.md",
          "/pages/other/index.md",
        ],
      },
    ],
  }),
  bundler: viteBundler(),
  base: "/indie-developer-handbook/",
});
