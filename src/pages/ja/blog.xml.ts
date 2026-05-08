import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: { site: URL }) {
  const posts = (await getCollection('blog'))
    .filter(p => p.data.lang === 'ja')
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: 'LegacyDram',
    description: 'ウィスキーを「人」で読む。エンジニアの視点で人物・技術・銘柄を結びつけるキュレーション・メディア。',
    site: context.site,
    xmlns: { atom: 'http://www.w3.org/2005/Atom' },
    customData: `<language>ja</language><atom:link href="${context.site}ja/blog.xml" rel="self" type="application/rss+xml" />`,
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/ja/blog/${post.id.replace('ja/', '')}/`,
      categories: post.data.tags,
    })),
  });
}
