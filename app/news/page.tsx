import { Metadata } from 'next';
import Link from 'next/link';
import { getAllNews } from '@/lib/news';

export const metadata: Metadata = {
  title: 'ニュース',
  description: '合同会社ピーチの最新ニュース、お知らせ、プレスリリースをご覧いただけます。',
};

export default function News() {
  const allNews = getAllNews();

  return (
    <div className="pt-28 pb-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-brand-500">
            <span className="text-brand-500">NEWS</span>
          </h1>
          <div className="section-divider max-w-xs mx-auto mb-6"></div>
          <p className="text-neutral-600 text-lg">
            最新情報・お知らせ
          </p>
        </div>

        {/* News List */}
        <div className="space-y-6">
          {allNews.map((news) => (
            <Link
              key={news.id}
              href={`/news/${news.id}`}
              className="block business-card p-6 hover:scale-[1.02] transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <div className="flex items-center gap-3 mb-2 md:mb-0">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      news.category === 'お知らせ'
                        ? 'bg-cyber-500/20 text-brand-500 border border-cyber-500'
                        : news.category === 'プレスリリース'
                        ? 'bg-neon-purple/20 text-brand-600 border border-neon-purple'
                        : 'bg-neon-green/20 text-neon-green border border-neon-green'
                    }`}
                  >
                    {news.category}
                  </span>
                  <span className="text-neutral-700 text-sm">{news.date}</span>
                </div>
              </div>
              <h2 className="text-xl font-bold text-neutral-600 mb-2 group-hover:text-brand-500 transition-colors">
                {news.title}
              </h2>
              <p className="text-neutral-600 line-clamp-2">{news.excerpt}</p>
              <div className="mt-4 text-brand-500 text-sm flex items-center group-hover:translate-x-2 transition-transform">
                続きを読む
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
