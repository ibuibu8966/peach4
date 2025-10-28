import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'サービス',
  description: '合同会社ピーチが提供する物販事業、オンラインサロン、BUPPAN MOBILE(MVNO)の各サービスをご紹介します。',
};

export default function Services() {
  return (
    <div className="pt-28 pb-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-brand-500">
            サービス紹介
          </h1>
          <div className="section-divider max-w-xs mx-auto mb-6"></div>
          <p className="text-neutral-600 text-lg">
            私たちが提供する3つのサービス
          </p>
        </div>

        {/* Service 1: 物販事業 */}
        <section id="buppan" className="mb-12">
          <div className="business-card p-8">
            <h2 className="text-3xl font-bold text-brand-500 mb-4">
              物販事業
            </h2>
            <p className="text-neutral-600 text-lg mb-6">
              中古品や金券の買取・販売を通じて、お客様の資産を最大限に活用するお手伝いをしています。
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">取扱商品</h3>
                <ul className="space-y-2 text-neutral-600">
                  <li>• ブランド品・貴金属</li>
                  <li>• 商品券・ギフトカード</li>
                  <li>• 電化製品・デジタル機器</li>
                  <li>• その他中古品全般</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">特徴</h3>
                <ul className="space-y-2 text-neutral-600">
                  <li>• 市場価格を踏まえた適正な査定</li>
                  <li>• 迅速な査定と即日現金化</li>
                  <li>• 古物商許可取得済み</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service 2: オンラインサロン */}
        <section id="salon" className="mb-12">
          <div className="business-card p-8">
            <h2 className="text-3xl font-bold text-brand-500 mb-4">
              オンラインサロン
            </h2>
            <p className="text-neutral-600 text-lg mb-6">
              実店舗を持つ方々向けの物販副業サポートコミュニティです。
              物販のプロが直接指導し、会員同士で情報交換できる環境を提供しています。
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">提供内容</h3>
                <ul className="space-y-2 text-neutral-600">
                  <li>• 物販のプロによる直接指導</li>
                  <li>• 会員同士の情報交換</li>
                  <li>• 最新トレンドとノウハウの共有</li>
                  <li>• 定期的なオンラインセミナー</li>
                  <li>• 仕入れルート・販売チャネルの情報提供</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service 3: BUPPAN MOBILE */}
        <section id="mvno" className="mb-12">
          <div className="business-card p-8">
            <h2 className="text-3xl font-bold text-brand-500 mb-4">
              BUPPAN MOBILE
            </h2>
            <p className="text-neutral-600 text-lg mb-6">
              NTTドコモ回線を利用した格安通信サービスです。
              音声通話とSMSが標準搭載で、1GB/月880円から利用できます。
            </p>

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
                  href="https://buppan-mobile.com"
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

        {/* CTA Section */}
        <section className="mt-16 text-center">
          <div className="business-card p-8 bg-neutral-50">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              サービスに関するお問い合わせ
            </h2>
            <p className="text-neutral-600 mb-6">
              各サービスの詳細やご不明な点がございましたら、お気軽にお問い合わせください。
            </p>
            <Link href="/contact" className="btn-primary">
              お問い合わせはこちら
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
