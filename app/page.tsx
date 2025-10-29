import Link from 'next/link';
import Image from 'next/image';
import { getRecentNews } from '@/lib/news';
import AnimatedSection from '@/components/AnimatedSection';

export default function Home() {
  const recentNews = getRecentNews(3);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-neutral-900">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpeg"
            alt="Hero Background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        {/* Hero Content */}
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-10 text-neutral-white tracking-tighter leading-tight animate-fade-in">
            未来を創造する
          </h1>
          <div className="w-24 h-1.5 bg-brand-500 mx-auto mb-10 animate-fade-in-delay-1"></div>
          <p className="text-2xl md:text-3xl text-neutral-white max-w-4xl mx-auto font-light leading-relaxed animate-fade-in-delay-2">
            物販事業、オンラインサロン、MVNO事業を通じて<br />
            <span className="text-brand-300 font-medium">副業で収入を増やしたい方を全面サポート</span>
          </p>
        </div>
      </section>

      {/* Detailed Description Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-neutral-700 leading-relaxed mb-16 text-center font-light">
              副業で収入を増やしたい方を全面サポート。最新の物販ノウハウの提供から、実践のためのコミュニティ運営、そして事業拡大に必要な通信インフラまで。<span className="text-brand-500 font-medium">3つの事業</span>を通じて、あなたの副業成功を一貫して支援します。
            </p>

            <div className="space-y-16 text-neutral-700">
              {/* オンラインサロン */}
              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                  <span className="text-brand-500">01.</span> オンラインサロン
                </h3>
                <p className="text-lg text-neutral-600 mb-4 font-light">物販で稼ぐための実践コミュニティ</p>
                <div className="space-y-4 text-neutral-600 leading-relaxed">
                  <p>物販事業を行う中で、「自分も物販を始めたい」という声を多くいただき、サロンを立ち上げました。</p>
                  <p>最新の物販情報をいち早くキャッチし、メンバーへ共有。市場のトレンドを逃さず、チャンスを掴むことができます。</p>
                  <p>物販ノウハウの提供、メンバー同士の情報交換、個別サポートを通じて、初心者の方でも着実に収益を上げられる環境を整えています。</p>
                </div>
              </div>

              {/* 物販事業 */}
              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                  <span className="text-brand-500">02.</span> 物販事業
                </h3>
                <p className="text-lg text-neutral-600 mb-4 font-light">サロン会員向けクローズド買取</p>
                <div className="space-y-4 text-neutral-600 leading-relaxed">
                  <p>オンラインサロン会員様向けに、電化製品を中心としたクローズドな買取サービスを提供しています。</p>
                  <p>サロンで学んだノウハウを実践する場として、確実な買取ルートを確保。</p>
                  <p>メンバー限定だからこそ実現できる、スムーズな取引と信頼関係を大切にしています。</p>
                </div>
              </div>

              {/* BUPPAN MOBILE */}
              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                  <span className="text-brand-500">03.</span> BUPPAN MOBILE
                </h3>
                <p className="text-lg text-neutral-600 mb-4 font-light">物販に最適化した格安SIM</p>
                <div className="space-y-4 text-neutral-600 leading-relaxed">
                  <p>サロン運営の中で、「物販に特化した格安SIMが欲しい」という要望を多くいただき、BUPPAN MOBILEを開始しました。</p>
                  <p>物販ビジネスに最適な料金プランとデータ容量を設計。複数端末での商品リサーチや在庫管理もコストを抑えて実現できます。</p>
                  <p>NTTドコモ回線を利用した高品質な通信環境で、外出先でも安心して仕入れ活動が可能です。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-neutral-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-neutral-900">
            サービス紹介
          </h2>
          <div className="w-20 h-1 bg-brand-500 mx-auto mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Service 1: 物販事業 */}
            <AnimatedSection delay={0}>
              <div className="business-card group">
                <div className="image-hover relative h-64">
                  <Image
                    src="/images/retail-business.jpeg"
                    alt="物販事業"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    物販事業
                  </h3>
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    電化製品を中心としたクローズド買取サービス
                  </p>
                  <Link href="/services#buppan" className="text-brand-500 hover:text-brand-600 font-medium inline-flex items-center group">
                    詳しく見る
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Service 2: オンラインサロン */}
            <AnimatedSection delay={100}>
              <div className="business-card group">
                <div className="image-hover relative h-64">
                  <Image
                    src="/images/salon.jpg"
                    alt="オンラインサロン"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    オンラインサロン
                  </h3>
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    物販で稼ぐための実践コミュニティ
                  </p>
                  <Link href="/services#salon" className="text-brand-500 hover:text-brand-600 font-medium inline-flex items-center group">
                    詳しく見る
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Service 3: BUPPAN MOBILE */}
            <AnimatedSection delay={200}>
              <div className="business-card group">
                <div className="image-hover relative h-64">
                  <Image
                    src="/images/buppan-mobile.jpeg"
                    alt="BUPPAN MOBILE"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    BUPPAN MOBILE
                  </h3>
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    物販に最適化した格安SIM
                  </p>
                  <Link href="/services#mvno" className="text-brand-500 hover:text-brand-600 font-medium inline-flex items-center group">
                    詳しく見る
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

    </div>
  );
}
