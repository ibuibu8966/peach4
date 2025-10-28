import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getNewsById, getAllNews } from '@/lib/news';

export async function generateStaticParams() {
  const allNews = getAllNews();
  return allNews.map((news) => ({
    id: news.id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const news = getNewsById(params.id);

  if (!news) {
    return {
      title: 'ニュースが見つかりません',
    };
  }

  return {
    title: news.title,
    description: news.excerpt,
  };
}

export default function NewsDetail({ params }: { params: { id: string } }) {
  const news = getNewsById(params.id);

  if (!news) {
    notFound();
  }

  return (
    <div className="pt-28 pb-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center space-x-2 text-cyber-400">
            <li>
              <Link href="/" className="hover:text-cyber-500 transition-colors">
                ホーム
              </Link>
            </li>
            <li className="text-cyber-600">›</li>
            <li>
              <Link href="/news" className="hover:text-cyber-500 transition-colors">
                ニュース
              </Link>
            </li>
            <li className="text-cyber-600">›</li>
            <li className="text-cyber-500">{news.title}</li>
          </ol>
        </nav>

        {/* Article */}
        <article className="cyber-card p-8 md:p-12">
          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full ${
                  news.category === 'お知らせ'
                    ? 'bg-cyber-500/20 text-cyber-500 border border-cyber-500'
                    : news.category === 'プレスリリース'
                    ? 'bg-neon-purple/20 text-neon-purple border border-neon-purple'
                    : 'bg-neon-green/20 text-neon-green border border-neon-green'
                }`}
              >
                {news.category}
              </span>
              <span className="text-cyber-600 text-sm">{news.date}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-cyber-500 neon-text">
              {news.title}
            </h1>
          </div>

          <div className="section-divider mb-8"></div>

          {/* Article Content */}
          <div className="prose prose-invert prose-cyber max-w-none">
            <div className="text-cyber-300 leading-relaxed whitespace-pre-line">
              {news.content}
            </div>
          </div>
        </article>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <Link
            href="/news"
            className="inline-flex items-center cyber-button"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            ニュース一覧に戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
