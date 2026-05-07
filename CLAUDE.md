# CLAUDE.md — legacydram

## このリポジトリについて

legacydram.com のソースコード。ウィスキー × エンジニア × 人物軸キュレーションメディア。Astro v6 + Tailwind v4 の静的サイト。Phase 0（手動執筆でボイス確立）→ Phase 1（harness-ops Observer 投入）→ Phase 2（半自動下書き）→ Phase 3（完全自律 PDCA）の段階導入で運用する。

サイト: https://legacydram.com/

## タスク別ナビゲーション

### 記事を書くとき

1. フロントマター仕様 → `src/content.config.ts`
2. 既存記事の例 → `src/content/blog/en/` または `src/content/blog/ja/`
3. EN は `src/content/blog/en/<slug>.md`、JA は `src/content/blog/ja/<slug>.md` に配置
4. 記事の一人称は **「私」**（kenimo49 名義のテキスト共通ルール）
5. **category フィールド必須**（`people` / `craft` / `tasting`）
   - `people`: 人物軸記事。蒸留所設計者・ブレンダー・所有者・エンジニアの決断とトレードオフを描く
   - `craft`: エンジニア視点の技術解説。蒸留化学・樽科学・ブレンド数理・発酵工学
   - `tasting`: 銘柄キュレーション。**人物ストーリー + 技術的根拠を必ず添える**。単なるテイスティングノートは載せない
6. 編集方針（必読）:
   - 人物が先。すべての瓶の裏に決断者がいる
   - 技術を曖昧にしない。化学・工程・トレードオフは説明する
   - 広告コピー禁止。スポンサード記事・「ベスト◯選」listicle 禁止

### デザインを変更するとき

1. カラーパレット（CSS変数） → `src/layouts/BaseLayout.astro` の `:root` / `[data-theme]`
2. フォント設定 → 同ファイル（Cormorant Garamond + Inter）
3. ブログ記事のスタイル → `src/layouts/BlogLayout.astro` の `.prose`
4. ナビゲーション → `src/components/Nav.astro`

### ページを追加するとき

- EN: `src/pages/` 直下に `.astro` ファイル作成
- JA: `src/pages/ja/` 以下に配置
- レイアウトは `BaseLayout` を使い、`Nav` コンポーネントを含める
- hreflang: EN/JA の対になるページを作り、`<link rel="alternate" hreflang>` を設定

### デプロイ・インフラを触るとき

- GitHub Actions → `.github/workflows/deploy.yml`
- ドメイン: legacydram.com、DNS → GitHub Pages
- 環境変数 → `.env`（gitignore済み）、`.env.sample` が参照テンプレート

## ディレクトリ構成

| パス | 役割 |
|------|------|
| `src/content/blog/{en,ja}/` | ブログ記事（Markdown、Content Collections） |
| `src/layouts/` | BaseLayout（全ページ共通）、BlogLayout（記事用） |
| `src/components/` | Nav（ナビゲーション） |
| `src/lib/alternates.ts` | hreflang 生成ヘルパ |
| `src/pages/` | EN ページ群 |
| `src/pages/ja/` | JA ページ群 |
| `public/` | 静的ファイル（favicon、llms.txt、CNAME） |
| `docs/` | 戦略・運用ドキュメント |

## 技術スタック

- Astro v6 + Tailwind CSS v4（`@tailwindcss/vite`）
- Content Collections: glob loader + Zod schema（`src/content.config.ts`）
- ホスティング: GitHub Pages（`deploy.yml` で自動デプロイ）
- SEO: sitemap自動生成（`@astrojs/sitemap`）、RSS（`@astrojs/rss`）、JSON-LD（BlogPosting / Person author）、hreflang
- LLMO: `public/llms.txt`、人物名・銘柄名を見出しで明示

## カテゴリ哲学（重要）

3カテゴリは独立した連載ではなく、**同じ視点の3つの角度**:

- People = 「誰が」
- Craft = 「どうやって（どのトレードオフで）」
- Tasting = 「結果として何が瓶に残ったか」

Tasting 記事を書くときは必ず People と Craft の要素を埋め込む。逆も同様。3カラムを縦割りにすると凡庸になる。

## 運用ロードマップ

| Phase | 期間 | やること |
|-------|------|---------|
| 0. ボイス確立 | Week 1-2 | 人物軸記事 2-3 本を ken が手動執筆 |
| 1. Observer 投入 | Week 3 | harness-ops で人物候補プール・記事ギャップ抽出 |
| 2. Strategist + Marketer 半自動 | Week 4-Month 2 | 下書き自動生成 → ken レビューで公開 |
| 3. 完全自律 PDCA | Month 2+ | kenimoto-dev-cycle 同等の cron 自動投稿 |

## コミットメッセージ規約

```
カテゴリ: 変更の要約

例:
  add: welcome article (EN/JA)
  design: navy + amber whisky palette
  content: people article on Frank Newlands
  docs: editorial stance and roadmap
```

## 関連リポジトリ

| リポジトリ | 連携内容 |
|-----------|---------|
| `iris-hub` | 戦略 Issue #104、活動ログ |
| `sns-operations` | harness-ops、legacydram-cycle skill（Phase 1 以降） |
| `kenimoto.dev` | 著者プロフィール、書籍カタログのオーソリティ元 |
| `whisky-knowledge-cospa`（Kindle） | ken のウィスキー Kindle 本、コンテンツ素材源 |
| `context-forge` | ウィスキー人物・銘柄ナレッジ DB 登録 |
