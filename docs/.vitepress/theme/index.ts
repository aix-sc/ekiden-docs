import DefaultTheme from 'vitepress/theme';
import { inBrowser, useRoute } from 'vitepress';
import { watch } from 'vue';
import './custom.css';

const localeOf = (path: string) => (path.startsWith('/en/') || path === '/en' ? 'en' : 'ja');

export default {
  extends: DefaultTheme,
  setup() {
    if (!inBrowser) return;
    const route = useRoute();
    // Remember the language only when the reader switches it inside the site,
    // so that the redirect on "/" (see config.ts) follows their choice next time.
    watch(
      () => localeOf(route.path),
      (now, before) => {
        if (now === before) return;
        try { localStorage.setItem('ekiden-docs-lang', now); } catch {}
      },
    );
  },
};
