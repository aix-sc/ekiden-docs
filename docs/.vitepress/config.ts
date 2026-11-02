import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'EKIDEN.AI Docs',
  description: 'EKIDEN.AI v3 — workout interpretation, MCP and CLI',
  cleanUrls: true,
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
          { text: 'はじめに', link: '/' },
          { text: 'MCP', link: '/mcp' },
          { text: 'CLI', link: '/cli' },
          { text: 'v3.ekiden.ai', link: 'https://v3.ekiden.ai/' },
        ],
        sidebar: [
          { text: 'ガイド', items: [
            { text: 'はじめに', link: '/' },
            { text: 'MCP（Claude Desktop）', link: '/mcp' },
            { text: 'ツール一覧', link: '/tools' },
            { text: 'CLI', link: '/cli' },
            { text: 'トレーニング図鑑', link: '/catalog' },
            { text: 'データの扱い', link: '/privacy' },
          ] },
        ],
      },
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Start', link: '/en/' },
          { text: 'v3.ekiden.ai', link: 'https://v3.ekiden.ai/' },
        ],
        sidebar: [{ text: 'Guide', items: [{ text: 'Start', link: '/en/' }] }],
      },
    },
  },
  themeConfig: {
    footer: { message: 'EKIDEN.AI v3 — a project of AIx<i>{ }</i>' },
  },
});
