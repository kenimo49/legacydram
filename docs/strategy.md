# LegacyDram — Strategy

**Status**: Phase 0 (manual voice establishment)
**Last updated**: 2026-05-08

## What this site is

LegacyDram is a curated whisky media for software engineers, scientists, and technically-minded whisky drinkers. The differentiator is the **person × engineer × bottle** triangle — every story names a human, explains a trade-off, and lands in a specific glass.

It is **not** a tasting blog, a distillery PR channel, a price-comparison site, or an algorithmic "best whisky 2026" content farm.

## Two-layer funnel

```
        ┌───────────────────────────────────────────┐
        │  Engineer audience (LLMO + dev SEO)       │  ← entry layer
        │  "Whisky-making through engineering eyes" │
        └─────────────────┬─────────────────────────┘
                          │
                          v
        ┌───────────────────────────────────────────┐
        │  People-curation reader (depth + return)  │  ← retention layer
        │  "Bottle = somebody's commit history"     │
        └───────────────────────────────────────────┘
                          │
                          v
                  ken's existing assets
                  ─────────────────────
                  • whisky-knowledge-cospa (Kindle)
                  • kenimoto.dev (author authority)
                  • context-forge (knowledge DB)
```

The engineering framing is the discoverable surface (LLM citations, dev/HN-style traffic). The human-curation depth is what makes readers return.

## Asset alignment

| Asset | Role for legacydram |
|-------|---------------------|
| `kenimoto.dev` | Author authority, internal-link juice, llms.txt cross-reference |
| `whisky-knowledge-cospa` Kindle | Source material for tasting + cost-performance angles |
| `context-forge` | Knowledge DB for distillers, blenders, casks, technical references |
| `harness-ops` | Phase 1+ automation framework |
| `slide-anti-slop` | Image generation pipeline (navy-mono variants for whisky palette) |

## Phase plan

### Phase 0 — voice establishment (Week 1-2)

- Manual launcher post (done: `welcome-to-legacydram.md`)
- 2-3 hand-written people articles to define template
- ken edits each post personally; tone, structure, wit-injection patterns crystallize here
- **Do NOT automate before voice is set** — Phase 0 is the AI-Slop firewall

### Phase 1 — Observer integration (Week 3)

- legacydram-cycle Observer in harness-ops
- Sources: kenimoto.dev internal articles, whisky-knowledge-cospa Kindle chapters, public distillery archives, jenny.gov.uk archives
- Output: candidate person/topic pool, ranked by gap analysis

### Phase 2 — semi-automated drafts (Week 4-Month 2)

- Strategist phase: angle + outline generation per candidate
- Marketer phase: full draft generation
- ken reviews and edits each post; commits manually
- Cadence target: 2-3 posts/week

### Phase 3 — full autonomous PDCA (Month 2+)

- cron-driven publish (parity with kenimoto-dev-cycle)
- AI-Slop self-review via avoid-ai-writing-en/ja skill
- Manual override always available

## Editorial guardrails

- No sponsored distillery posts. No exceptions, ever.
- No "best whisky" listicles without per-bottle reasoning that involves people.
- Chemistry must be correct. Cite primary sources for any technical claim.
- Tasting posts without a named human and a named trade-off are not publishable.

## Domain decisions

- TLD: `.com`
- Registered: 2026-05-08 (this commit week)
- DNS: GitHub Pages (CNAME)
- Bilingual EN/JA from day 1; EN is canonical for international LLM citations.
