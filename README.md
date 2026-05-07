# LegacyDram

**https://legacydram.com/**

Whisky, told through the people who made it — and read by the engineers who drink it.

## About

LegacyDram is a curated whisky media for engineers and the people who love a story behind a glass. Instead of yet another tasting-note dump, the site studies whisky the way a craftsperson reads their own legacy code: who made the decisions, what trade-offs they shipped, why the choice still tastes the way it does decades later.

## Tech Stack

- **Framework**: Astro v6 + Tailwind CSS v4
- **Hosting**: GitHub Pages
- **Languages**: Bilingual (EN / JA)
- **LLMO**: llms.txt, JSON-LD structured data, sitemap

## Project Structure

```
legacydram/
├── src/
│   ├── content/blog/
│   │   ├── en/          # English articles
│   │   └── ja/          # Japanese articles
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── BlogLayout.astro
│   ├── components/
│   │   └── Nav.astro
│   ├── lib/
│   │   └── alternates.ts
│   └── pages/
│       ├── index.astro       # EN homepage
│       ├── ja.astro          # JA homepage
│       ├── about.astro       # EN about
│       ├── 404.astro
│       ├── blog.xml.ts       # EN RSS feed
│       ├── blog/             # EN blog pages
│       └── ja/               # JA pages (about, blog, RSS)
├── public/
│   ├── llms.txt              # LLMO optimization
│   ├── favicon.svg
│   └── CNAME
└── astro.config.mjs
```

## Editorial Categories

| Category | Label (EN / JA) | Focus |
|----------|-----------------|-------|
| `people` | People / 人物 | The humans behind the bottles. Decisions, trade-offs, lives. |
| `craft` | Craft / 技術 | Whisky-making seen through the engineer's lens. Chemistry, math, process. |
| `tasting` | Tasting / テイスティング | Curated bottles paired with the human story and the technical detail. |

These are not three separate columns — they are three angles on the same column. A tasting post must carry the people story and the craft detail. A craft post must name the people whose decision it describes. A people post lands in the glass.

## Editorial Stance

- People-first: every bottle has a person whose decisions shaped it.
- Engineering literacy: chemistry, process, and trade-offs explained, never hand-waved.
- No advertorials, no sponsored distillery posts, no "best whisky" listicles without reasoning.

## Development

```sh
npm install
npm run dev       # Start dev server at localhost:4321
npm run build     # Build to ./dist/
npm run preview   # Preview production build
```

## Roadmap

- **Phase 0** (current): manual launcher posts to establish voice.
- **Phase 1**: harness-ops Observer integration for candidate pipeline.
- **Phase 2**: semi-automated drafts with editor review.
- **Phase 3**: full autonomous PDCA cycle (parity with kenimoto-dev-cycle).

## Related

- [Issue #104](https://github.com/kenimo49/iris-hub/issues/104) — Strategy document
- [kenimoto.dev](https://kenimoto.dev) — Author profile and book catalog
