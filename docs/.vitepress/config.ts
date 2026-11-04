import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'EKIDEN.AI Docs',
  description: 'EKIDEN.AI v3 — workout interpretation, MCP and CLI',
  cleanUrls: true,
  appearance: 'dark',
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
    // Search engines: the two pages are the same guide in two languages.
    ['link', { rel: 'alternate', hreflang: 'ja', href: 'https://docs.ekiden.ai/' }],
    ['link', { rel: 'alternate', hreflang: 'en', href: 'https://docs.ekiden.ai/en/' }],
    ['link', { rel: 'alternate', hreflang: 'x-default', href: 'https://docs.ekiden.ai/' }],
    // First visit to "/": send browsers with no Japanese among their languages to "/en/".
    // A language chosen with the menu is remembered (see theme/index.ts). Crawlers are not redirected.
    ['script', {}, `(function () {
  try {
    var p = location.pathname;
    if (p !== '/' && p !== '/index.html') return;
    if (/bot|crawl|spider|slurp|preview/i.test(navigator.userAgent)) return;
    var saved = null;
    try { saved = localStorage.getItem('ekiden-docs-lang'); } catch (e) {}
    if (saved === 'ja') return;
    var langs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ''];
    var ja = false;
    for (var i = 0; i < langs.length; i++) if (/^ja(-|_|$)/i.test(langs[i])) ja = true;
    if (saved === 'en' || !ja) location.replace('/en/' + location.search + location.hash);
  } catch (e) {}
})();`],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Noto+Sans+JP:wght@400;500;700&display=swap' }],
  ],
  locales: {
    root: {
      label: '日本語',
      lang: 'ja',
      themeConfig: {
        logo: '/favicon.svg',
        nav: [
          { text: 'はじめに', link: '/#start' },
          { text: 'MCP', link: '/#mcp' },
          { text: 'CLI', link: '/#cli' },
          { text: 'v3.ekiden.ai', link: 'https://v3.ekiden.ai/' },
        ],
        outline: { level: [2, 3], label: 'このページの内容' },
        lastUpdated: { text: '最終更新' },
        docFooter: { prev: false, next: false },
        footer: { message: 'EKIDEN.AI v3 の品質向上のための研究エフォートを、<a href="https://lab.theekiden.com/" target="_blank" rel="noopener">藤原新 マラソン研究室</a>と AIx<i>{ }</i> のイニシアチブにより続けています。武蔵野大学アジアAI研究所や海外の提携機関とも連携をしています。' },
      },
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        logo: '/favicon.svg',
        nav: [
          { text: 'Start', link: '/en/#start' },
          { text: 'MCP', link: '/en/#mcp' },
          { text: 'CLI', link: '/en/#cli' },
          { text: 'v3.ekiden.ai', link: 'https://v3.ekiden.ai/' },
        ],
        outline: { level: [2, 3] },
        docFooter: { prev: false, next: false },
        footer: { message: 'Research to improve EKIDEN.AI v3 continues as an initiative of <a href="https://lab.theekiden.com/" target="_blank" rel="noopener">藤原新 マラソン研究室 (Arata Fujiwara Marathon Lab)</a> and AIx<i>{ }</i>, together with the Asia AI Institute at Musashino University and partner institutions abroad.' },
      },
    },
  },
});
