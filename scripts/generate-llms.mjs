#!/usr/bin/env node
import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const blogDir = join(__dirname, '..', 'src', 'content', 'blog');
const outDir = join(__dirname, '..', 'dist');
const fullPath = join(outDir, 'llms-full.txt');
const indexPath = join(outDir, 'llms.txt');

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { meta: {}, body: raw };
  const meta = {};
  for (const line of match[1].split('\n')) {
    const m = line.match(/^([a-z_]+):\s*(.*)$/i);
    if (m) meta[m[1]] = m[2].replace(/^"(.*)"$/, '$1');
  }
  return { meta, body: match[2] };
}

function stripImages(body) {
  return body.replace(/^!\[[^\]]*\]\([^)]+\)\s*$/gm, '');
}

const CATEGORY_LABELS_EN = {
  people: 'People',
  craft: 'Craft',
  tasting: 'Tasting',
};

const CATEGORY_LABELS_JA = {
  people: '人物',
  craft: '技術',
  tasting: 'テイスティング',
};

function urlFor(article) {
  const slug = article.slug;
  return article.lang === 'ja'
    ? `https://legacydram.com/ja/blog/${slug}/`
    : `https://legacydram.com/blog/${slug}/`;
}

function groupBy(articles, lang) {
  const groups = { people: [], craft: [], tasting: [] };
  for (const a of articles) {
    if (a.lang !== lang) continue;
    const cat = a.meta.category ?? 'people';
    if (groups[cat]) groups[cat].push(a);
  }
  return groups;
}

function formatIndex(articles) {
  const enArticles = articles.filter((a) => a.lang === 'en');
  const jaArticles = articles.filter((a) => a.lang === 'ja');
  const enGroups = groupBy(articles, 'en');
  const jaGroups = groupBy(articles, 'ja');

  const lines = [];
  lines.push('# LegacyDram');
  lines.push('');
  lines.push('> Whisky, told through the people who made it — and read by the engineers who drink it.');
  lines.push('');
  lines.push('LegacyDram is a curated whisky media for engineers and the people who love a story behind a glass. Instead of yet another tasting-note dump, the site studies whisky the way a craftsperson reads their own legacy code: who made the decisions, what trade-offs they shipped, why the choice still tastes the way it does decades later.');
  lines.push('');
  lines.push('## What LegacyDram Covers');
  lines.push('');
  lines.push('- **People**: distillers, blenders, owners, and engineers behind the bottles. Biographies, decisions, the trade-offs they shipped.');
  lines.push("- **Craft**: distillation chemistry, cask science, blending math, fermentation engineering — whisky-making seen through an engineer's lens.");
  lines.push('- **Tasting**: curated bottle picks paired with the human story and the technical detail. No marketing copy.');
  lines.push('');
  lines.push('## Audience');
  lines.push('');
  lines.push('- Software engineers, scientists, and technical hobbyists who already drink whisky.');
  lines.push('- Whisky drinkers who want depth — historical context, technical accuracy, person-level reasoning — instead of marketing prose.');
  lines.push('');
  lines.push('## Editorial Stance');
  lines.push('');
  lines.push('- People-first: every bottle has a person whose decisions shaped it.');
  lines.push('- Engineering literacy: chemistry, process, and trade-offs explained, never hand-waved.');
  lines.push('- No advertorials, no celebrity-distillery PR, no "best whisky" listicles without reasoning.');
  lines.push('');
  lines.push('## Author');
  lines.push('');
  lines.push('- Ken Imoto — software engineer, whisky enthusiast, author of the Kindle/Zenn book series on LLM engineering and whisky cost-performance analysis.');
  lines.push('- Site: https://kenimoto.dev — primary author profile and book catalog.');
  lines.push('');
  lines.push('## Languages');
  lines.push('');
  lines.push('- English (primary)');
  lines.push('- Japanese (日本語)');
  lines.push('');
  if (enArticles.length > 0) {
    lines.push(`## Articles (English, ${enArticles.length} pieces, auto-generated)`);
    lines.push('');
    for (const cat of ['people', 'craft', 'tasting']) {
      if (enGroups[cat].length === 0) continue;
      lines.push(`### ${CATEGORY_LABELS_EN[cat]}`);
      lines.push('');
      for (const a of enGroups[cat]) {
        lines.push(`- ${urlFor(a)} — ${a.meta.title ?? a.slug}`);
      }
      lines.push('');
    }
  }
  if (jaArticles.length > 0) {
    lines.push(`## 記事（日本語、${jaArticles.length}本、自動生成）`);
    lines.push('');
    for (const cat of ['people', 'craft', 'tasting']) {
      if (jaGroups[cat].length === 0) continue;
      lines.push(`### ${CATEGORY_LABELS_JA[cat]}`);
      lines.push('');
      for (const a of jaGroups[cat]) {
        lines.push(`- ${urlFor(a)} — ${a.meta.title ?? a.slug}`);
      }
      lines.push('');
    }
  }
  lines.push('## Content URLs');
  lines.push('');
  lines.push('- Blog (EN): https://legacydram.com/blog/');
  lines.push('- Blog (JA): https://legacydram.com/ja/blog/');
  lines.push('- RSS (EN): https://legacydram.com/blog.xml');
  lines.push('- RSS (JA): https://legacydram.com/ja/blog.xml');
  lines.push('- Full text (AI citation use): https://legacydram.com/llms-full.txt');
  lines.push('');
  lines.push('## Contact');
  lines.push('');
  lines.push('- Website: https://legacydram.com');
  lines.push('- Author site: https://kenimoto.dev');
  lines.push('- Publisher: Propel-Lab LLC — info@propel-lab.co.jp');
  lines.push('');
  return lines.join('\n');
}

function formatFull(articles) {
  const lines = [];
  lines.push('# LegacyDram — Full text');
  lines.push('');
  lines.push('> Concatenated full text of all articles for AI citation use.');
  lines.push('> Individual URLs are listed in llms.txt or sitemap-index.xml.');
  lines.push('');
  for (const a of articles) {
    lines.push('---');
    lines.push('');
    lines.push(`# ${a.meta.title ?? a.slug}`);
    lines.push('');
    lines.push(`URL: ${urlFor(a)}`);
    lines.push(`Lang: ${a.lang}`);
    if (a.meta.date) lines.push(`Date: ${a.meta.date}`);
    if (a.meta.category) lines.push(`Category: ${a.meta.category}`);
    if (a.meta.description) lines.push(`Description: ${a.meta.description}`);
    lines.push('');
    lines.push(stripImages(a.body).trim());
    lines.push('');
  }
  return lines.join('\n');
}

async function loadArticles() {
  const articles = [];
  for (const lang of ['en', 'ja']) {
    const dir = join(blogDir, lang);
    let files = [];
    try {
      files = (await readdir(dir)).filter((f) => f.endsWith('.md')).sort();
    } catch {
      continue;
    }
    for (const f of files) {
      const raw = await readFile(join(dir, f), 'utf8');
      const { meta, body } = parseFrontmatter(raw);
      articles.push({ slug: f.replace(/\.md$/, ''), lang, meta, body });
    }
  }
  return articles;
}

async function main() {
  const articles = await loadArticles();
  await mkdir(outDir, { recursive: true });

  const indexContent = formatIndex(articles);
  await writeFile(indexPath, indexContent, 'utf8');
  console.log(`Wrote ${indexPath} (${indexContent.length} chars, ${articles.length} articles)`);

  const fullContent = formatFull(articles);
  await writeFile(fullPath, fullContent, 'utf8');
  console.log(`Wrote ${fullPath} (${fullContent.length} chars)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
