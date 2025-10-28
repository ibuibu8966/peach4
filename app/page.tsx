import Link from 'next/link';
import Image from 'next/image';
import { getRecentNews } from '@/lib/news';

export default function Home() {
  const recentNews = getRecentNews(3);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden mt-0">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="Hero Background"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-bg/80 to-dark-bg"></div>
          {/* Cyber Grid Overlay */}
          <div className="absolute inset-0 bg-cyber-grid opacity-20"></div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-text-strong">
            <span className="text-cyber-500">未来</span>を<span className="text-neon-purple">創造</span>する
          </h1>
          <p className="text-xl md:text-2xl text-cyber-300 mb-8 max-w-3xl mx-auto">
            物販事業、オンラインサロン、MVNO事業を通じて
            <br />
            <span className="text-cyber-500 font-semibold">デジタル時代</span>の新しいビジネスをサポートします
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/services" className="cyber-button">
              サービス詳細
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 bg-neon-purple/20 text-neon-purple border-2 border-neon-purple font-bold uppercase tracking-wider hover:bg-neon-purple hover:text-white transition-all duration-300 rounded shadow-neon-purple"
            >
              お問い合わせ
            </Link>
          </div>
        </div>

        {/* Animated Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-cyber-500 rounded-full animate-pulse-neon opacity-50"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-neon-purple opacity-30 animate-spin-slow"></div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-dark-surface/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 neon-text">
            <span className="text-cyber-500">OUR</span> SERVICES
          </h2>
          <div className="section-divider mb-12 max-w-xs mx-auto"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Service 1: 物販事業 */}
            <div className="cyber-card p-6 group">
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/images/buppan.jpg"
                  alt="物販事業"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent opacity-80"></div>
              </div>
              <h3 className="text-2xl font-bold text-cyber-500 mb-3 group-hover:text-cyber-300 transition-colors">
                物販事業
              </h3>
              <p className="text-cyber-300 mb-4">
                中古品・金券の買取販売を通じて、お客様の資産を最大限に活用いたします。
              </p>
              <Link href="/services#buppan" className="text-cyber-500 hover:text-cyber-300 font-semibold inline-flex items-center group">
                詳しく見る
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 2: オンラインサロン */}
            <div className="cyber-card p-6 group">
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/images/salon.jpg"
                  alt="オンラインサロン"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent opacity-80"></div>
              </div>
              <h3 className="text-2xl font-bold text-cyber-500 mb-3 group-hover:text-cyber-300 transition-colors">
                オンラインサロン
              </h3>
              <p className="text-cyber-300 mb-4">
                実店舗を持つ方向けの物販副業サポートコミュニティを運営しています。
              </p>
              <Link href="/services#salon" className="text-cyber-500 hover:text-cyber-300 font-semibold inline-flex items-center group">
                詳しく見る
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 3: BUPPAN MOBILE */}
            <div className="cyber-card p-6 group">
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/images/mvno.jpg"
                  alt="BUPPAN MOBILE"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent opacity-80"></div>
              </div>
              <h3 className="text-2xl font-bold text-cyber-500 mb-3 group-hover:text-cyber-300 transition-colors">
                BUPPAN MOBILE
              </h3>
              <p className="text-cyber-300 mb-4">
                NTTドコモ回線を利用した高品質なMVNOサービスを提供しています。
              </p>
              <Link href="/services#mvno" className="text-cyber-500 hover:text-cyber-300 font-semibold inline-flex items-center group">
                詳しく見る
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-dark-surface via-dark-bg to-dark-surface relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-cyber-grid opacity-10"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-cyber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 neon-text">
            <span className="text-cyber-500">ビジネス</span>を共に<span className="text-neon-purple">成長</span>させませんか?
          </h2>
          <p className="text-xl text-cyber-300 mb-8 max-w-2xl mx-auto">
            お問い合わせやご相談はお気軽にどうぞ。
            <br />
            私たちがあなたの<span className="text-cyber-500 font-semibold">成功</span>をサポートします。
          </p>
          <Link href="/contact" className="cyber-button text-lg">
            今すぐ問い合わせる
          </Link>
        </div>
      </section>
    </div>
  );
}
