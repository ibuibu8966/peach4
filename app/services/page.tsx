import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'サービス',
  description: '合同会社ピーチが提供する物販事業、オンラインサロン、BUPPAN MOBILE(MVNO)の各サービスをご紹介します。',
};

export default function Services() {
  return (
    <div className="pt-28 pb-20">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Page Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-4 text-neutral-900">
            サービス紹介
          </h1>
          <div className="w-20 h-1 bg-brand-500 mx-auto mb-8"></div>
          <p className="text-neutral-600 text-xl font-light max-w-3xl mx-auto">
            副業で収入を増やしたい方を全面サポート。<br />
            物販ノウハウ、実践の場、通信インフラを一貫して提供します。
          </p>
        </div>

        {/* Service 1: オンラインサロン */}
        <section id="salon" className="mb-16">
          <div className="business-card p-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              オンラインサロン
            </h2>
            <p className="text-neutral-600 text-lg mb-8 leading-relaxed">
              副業で収入を増やしたい方向けの物販実践コミュニティです。
              物販事業を行う中で「自分も物販を始めたい」という声を多くいただき、サロンを立ち上げました。
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">サロンの特徴</h3>
                <ul className="space-y-2 text-neutral-600">
                  <li>• 最新の物販情報をいち早く提供</li>
                  <li>• 市場のトレンドを逃さず、チャンスを掴める</li>
                  <li>• 初心者の方でも着実に収益を上げられる環境</li>
                  <li>• 実店舗を持つ方、副業を始めたい方など多様なメンバー</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">提供内容</h3>
                <ul className="space-y-2 text-neutral-600">
                  <li>• 物販ノウハウの共有</li>
                  <li>• メンバー同士の情報交換</li>
                  <li>• 個別サポート</li>
                  <li>• クローズドな買取サービスの利用権</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service 2: 物販事業 */}
        <section id="buppan" className="mb-16">
          <div className="business-card p-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              物販事業
            </h2>
            <p className="text-neutral-600 text-lg mb-8 leading-relaxed">
              オンラインサロン会員様向けに、電化製品を中心としたクローズドな買取サービスを提供しています。
              サロンで学んだノウハウを実践する場として、確実な買取ルートを確保しています。
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">取扱商品</h3>
                <ul className="space-y-2 text-neutral-600">
                  <li>• 電化製品・デジタル機器</li>
                  <li>• その他サロン会員が取り扱う商材</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">特徴</h3>
                <ul className="space-y-2 text-neutral-600">
                  <li>• サロン会員限定のクローズドサービス</li>
                  <li>• スムーズな取引と信頼関係</li>
                  <li>• 仕入れから販売までの実践の場</li>
                  <li>• 物販ビジネスの本質を体得できる環境</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service 3: BUPPAN MOBILE */}
        <section id="mvno" className="mb-16">
          <div className="business-card p-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              BUPPAN MOBILE
            </h2>
            <p className="text-neutral-600 text-lg mb-8 leading-relaxed">
              サロン運営の中で「物販に特化した格安SIMが欲しい」という要望を多くいただき、BUPPAN MOBILEを開始しました。
              NTTドコモ回線を利用した高品質な通信環境で、物販ビジネスに最適な料金プランとデータ容量を提供しています。
            </p>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">BUPPAN MOBILEの特徴</h3>
              <ul className="space-y-2 text-neutral-600">
                <li>• 物販ビジネスに最適化された料金プランとデータ容量</li>
                <li>• 複数端末での商品リサーチや在庫管理もコストを抑えて実現</li>
                <li>• NTTドコモ回線による高品質な通信環境</li>
                <li>• 外出先でも安心して仕入れ活動が可能</li>
                <li>• 事業拡大に伴う通信コストの増大を抑制</li>
              </ul>
            </div>

            <div className="space-y-6">
              {/* 料金プラン */}
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">料金プラン（音声＋SMS込み）</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="border border-neutral-200 rounded p-4 text-center">
                    <p className="font-bold text-brand-500 mb-2">1GB</p>
                    <p className="text-2xl font-bold text-neutral-900">¥880</p>
                    <p className="text-sm text-neutral-600">/月</p>
                  </div>
                  <div className="border-2 border-brand-500 rounded p-4 text-center bg-brand-50">
                    <p className="font-bold text-brand-500 mb-2">3GB</p>
                    <p className="text-2xl font-bold text-neutral-900">¥1,380</p>
                    <p className="text-sm text-neutral-600">/月</p>
                    <p className="text-xs text-brand-500 mt-1">人気</p>
                  </div>
                  <div className="border border-neutral-200 rounded p-4 text-center">
                    <p className="font-bold text-brand-500 mb-2">7.5GB</p>
                    <p className="text-2xl font-bold text-neutral-900">¥2,080</p>
                    <p className="text-sm text-neutral-600">/月</p>
                  </div>
                  <div className="border border-neutral-200 rounded p-4 text-center">
                    <p className="font-bold text-brand-500 mb-2">10GB</p>
                    <p className="text-2xl font-bold text-neutral-900">¥2,680</p>
                    <p className="text-sm text-neutral-600">/月</p>
                  </div>
                </div>
              </div>

              {/* 通話オプション */}
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">通話オプション</h3>
                <div className="grid md:grid-cols-2 gap-3 text-neutral-600">
                  <p>• 従量通話: ¥11/30秒</p>
                  <p>• 5分かけ放題: +¥660/月</p>
                  <p>• 10分かけ放題: +¥880/月</p>
                  <p>• 完全かけ放題: +¥2,200/月</p>
                </div>
              </div>

              {/* 外部リンク */}
              <div className="pt-4">
                <a
                  href="https://buppanmobile2.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-500 hover:text-brand-600 font-semibold inline-flex items-center"
                >
                  BUPPAN MOBILE公式サイトはこちら
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
