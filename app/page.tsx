import Link from 'next/link';
import Image from 'next/image';
import { getRecentNews } from '@/lib/news';

export default function Home() {
  const recentNews = getRecentNews(3);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-500 to-brand-700">
        {/* Hero Content */}
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-neutral-white">
            未来を創造する
          </h1>
          <p className="text-lg md:text-xl text-neutral-white mb-8 max-w-3xl mx-auto">
            物販事業、オンラインサロン、MVNO事業を通じて<br />
            デジタル時代の新しいビジネスをサポートします
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/services" className="px-6 py-3 bg-neutral-white text-brand-500 font-medium rounded hover:bg-neutral-50 transition-all duration-300">
              サービス詳細
            </Link>
            <Link href="/contact" className="px-6 py-3 bg-transparent text-neutral-white font-medium rounded border-2 border-neutral-white hover:bg-neutral-white hover:text-brand-500 transition-all duration-300">
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-neutral-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-neutral-900">
            サービス紹介
          </h2>
          <div className="section-divider mb-12 max-w-xs mx-auto"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Service 1: 物販事業 */}
            <div className="business-card group">
              <div className="image-hover relative h-48 mb-4">
                <Image
                  src="/images/buppan.jpg"
                  alt="物販事業"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-500 mb-3">
                  物販事業
                </h3>
                <p className="text-neutral-600 mb-4">
                  中古品・金券の買取販売を通じて、お客様の資産を最大限に活用いたします。
                </p>
                <Link href="/services#buppan" className="text-brand-500 hover:text-brand-600 font-semibold inline-flex items-center group">
                  詳しく見る
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Service 2: オンラインサロン */}
            <div className="business-card group">
              <div className="image-hover relative h-48 mb-4">
                <Image
                  src="/images/salon.jpg"
                  alt="オンラインサロン"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-500 mb-3">
                  オンラインサロン
                </h3>
                <p className="text-neutral-600 mb-4">
                  実店舗を持つ方向けの物販副業サポートコミュニティを運営しています。
                </p>
                <Link href="/services#salon" className="text-brand-500 hover:text-brand-600 font-semibold inline-flex items-center group">
                  詳しく見る
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Service 3: BUPPAN MOBILE */}
            <div className="business-card group">
              <div className="image-hover relative h-48 mb-4">
                <Image
                  src="/images/mvno.jpg"
                  alt="BUPPAN MOBILE"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-500 mb-3">
                  BUPPAN MOBILE
                </h3>
                <p className="text-neutral-600 mb-4">
                  NTTドコモ回線を利用した高品質なMVNOサービスを提供しています。
                </p>
                <Link href="/services#mvno" className="text-brand-500 hover:text-brand-600 font-semibold inline-flex items-center group">
                  詳しく見る
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-neutral-900">
            ビジネスを共に成長させませんか?
          </h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            お問い合わせやご相談はお気軽にどうぞ。<br />
            私たちがあなたの成功をサポートします。
          </p>
          <Link href="/contact" className="btn-primary text-lg">
            今すぐ問い合わせる
          </Link>
        </div>
      </section>
    </div>
  );
}
