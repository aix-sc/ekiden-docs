import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'EKIDEN.AI Docs',
  description: 'EKIDEN.AI v3 — workout interpretation, MCP and CLI',
  cleanUrls: true,
  appearance: 'dark',
  lastUpdated: true,
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Noto+Sans+JP:wght@400;500;700&display=swap' }],
  ],
  locales: {
    root: {
      label: '日本語',
      lang: 'ja',
      themeConfig: {
        nav: [
          { text: 'はじめに', link: '/#start' },
          { text: 'MCP', link: '/#mcp' },
          { text: 'CLI', link: '/#cli' },
          { text: 'v3.ekiden.ai', link: 'https://v3.ekiden.ai/' },
        ],
        outline: { level: [2, 3], label: 'このページの内容' },
        lastUpdated: { text: '最終更新' },
        docFooter: { prev: false, next: false },
      },
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Start', link: '/en/#start' },
          { text: 'MCP', link: '/en/#mcp' },
          { text: 'CLI', link: '/en/#cli' },
          { text: 'v3.ekiden.ai', link: 'https://v3.ekiden.ai/' },
        ],
        outline: { level: [2, 3] },
        docFooter: { prev: false, next: false },
      },
    },
  },
  themeConfig: {
    footer: { message: 'EKIDEN.AI v3 — a project of AIx<i>{ }</i>' },
  },
});
