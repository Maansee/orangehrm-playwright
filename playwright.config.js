import { defineConfig } from "playwright/test";

export default defineConfig({
    testDir: './tests',
    timeout: 30000,
    retries: 1,
    reporter:  [['html', { open: 'never' }]],

    use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com',
    headless: false,
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
})