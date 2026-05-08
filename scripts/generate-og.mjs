#!/usr/bin/env node
import { chromium } from 'playwright';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const htmlPath = resolve(__dirname, 'generate-og.html');
const outPath = resolve(__dirname, '..', 'public', 'og-default.png');

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
const page = await ctx.newPage();
await page.goto('file://' + htmlPath);
await page.waitForLoadState('networkidle');
await page.screenshot({ path: outPath, fullPage: false, omitBackground: false });
await browser.close();
console.log('Wrote ' + outPath);
