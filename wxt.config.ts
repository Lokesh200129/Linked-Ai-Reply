import { defineConfig } from 'wxt';

export default defineConfig({
  manifest: {
    manifest_version: 3,
    name: 'Linkedin-Ai-Reply',
    version: '1.0.0',
    permissions: ['storage', 'tabs'],
    action: {
      default_popup: 'popup.html',
    },
    content_scripts: [
      {
        matches: ['https://www.linkedin.com'],
        js: ['src/content/contentScript.ts'],
      },
    ],
  },
});
