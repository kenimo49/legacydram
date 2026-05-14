#!/usr/bin/env node
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const BLOG_ROOT = join(__dirname, '..', 'src', 'content', 'blog');

const errors = [];
const warnings = [];

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

function parseFrontmatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) return { fm: {}, body: text };
  const fm = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^(\w+):\s*(.*)$/);
    if (kv) fm[kv[1]] = kv[2].replace(/^["']|["']$/g, '');
  }
  return { fm, body: m[2] };
}

function stripMd(body) {
  return body
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/<aside[\s\S]*?<\/aside>/g, '')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/^#+ .*$/gm, '')
    .replace(/^\s*[-*]\s.*$/gm, '');
}

function lintFile(path) {
  const rel = path.replace(BLOG_ROOT + '/', '');
  const text = readFileSync(path, 'utf8');
  const { fm, body } = parseFrontmatter(text);

  // 1. Zenn専用記法の検出
  const zennMessage = body.match(/^:::(message|note|warn|alert)[\s\S]*?^:::/gm);
  if (zennMessage) {
    errors.push(`[${rel}] Zenn専用記法 ::: 検出 (Astroでは literal 表示される)。<aside class="callout-tldr"> を使ってください`);
  }

  // 2. craft 記事のTL;DR必須
  if (fm.category === 'craft' && !body.includes('callout-tldr')) {
    errors.push(`[${rel}] craft 記事に TL;DR ボックス(<aside class="callout-tldr">)がありません`);
  }

  // 3. 冒頭500字の認知負荷
  const opening = stripMd(body).trim().slice(0, 500);
  const properNouns = opening.match(/[A-Z][a-zA-Z]+(?:\s+[A-Z][a-zA-Z]+)?/g) || [];
  const uniqueProper = [...new Set(properNouns)];
  const years = opening.match(/(?:18|19|20)\d{2}年?/g) || [];
  const formulas = opening.match(/\([A-Z]+H?\d*\)\d*|CH3|H2O|DMS|DMTS/g) || [];

  if (uniqueProper.length > 5) {
    warnings.push(`[${rel}] 冒頭500字の固有名詞 ${uniqueProper.length}個 > 5 (${uniqueProper.slice(0, 8).join(', ')}...)`);
  }
  if (years.length > 3) {
    warnings.push(`[${rel}] 冒頭500字の年号 ${years.length}個 > 3 (${years.join(', ')})`);
  }
  if (formulas.length > 2) {
    warnings.push(`[${rel}] 冒頭500字の化学式 ${formulas.length}個 > 2 (${formulas.join(', ')})`);
  }

  // 4. category 必須
  if (!['people', 'craft', 'tasting'].includes(fm.category)) {
    errors.push(`[${rel}] frontmatter.category が people/craft/tasting のいずれでもない: "${fm.category}"`);
  }
}

const files = walk(BLOG_ROOT).filter((f) => f.endsWith('.md'));
for (const f of files) lintFile(f);

if (errors.length === 0 && warnings.length === 0) {
  console.log(`✅ ${files.length}件すべてパス`);
  process.exit(0);
}

if (warnings.length > 0) {
  console.log('\n⚠️  WARNINGS:');
  for (const w of warnings) console.log('  ' + w);
}
if (errors.length > 0) {
  console.log('\n❌ ERRORS:');
  for (const e of errors) console.log('  ' + e);
  process.exit(1);
}
process.exit(0);
