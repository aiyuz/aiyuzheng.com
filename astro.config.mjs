import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://aiyuzheng.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  redirects: {
    '/sample-page/': '/teaching/',
    '/category/research-highlights/': '/research-highlights/',
  },
});
