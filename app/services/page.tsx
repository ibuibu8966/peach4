import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'サービス',
  description: '合同会社ピーチが提供する物販事業、オンラインサロン、BUPPAN MOBILE(MVNO)の各サービスをご紹介します。',
};

export default function Services() {
  return (
    <div className="pt-28 pb-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 neon-text">
            <span className="text-cyber-500">OUR</span> SERVICES
          </h1>
          <div className="section-divider max-w-xs mx-auto mb-6"></div>
          <p className="text-cyber-300 text-lg">
            私たちが提供する3つのサービス
          </p>
        </div>

        {/* Service 1: 物販事業 */}
        <section id="buppan" className="mb-20 scroll-mt-20">
          <div className="cyber-card overflow-hidden">
            <div className="relative h-64 md:h-80">
              <Image
                src="/images/buppan.jpg"
                alt="物販事業"
                fill
                className="object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-dark-bg/80 to-transparent"></div>
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-cyber-500 neon-text-strong mb-2">
                    物販事業
                  </h2>
                  <p className="text-xl text-cyber-300">中古品・金券の買取販売</p>
                </div>
              </div>
            </div>
            <div className="p-8 md:p-12">
              <div className="space-y-6 text-cyber-300">
                <p className="text-lg leading-relaxed">
                  中古品や金券の買取・販売を通じて、お客様の資産を最大限に活用するお手伝いをしています。
                  幅広い商品を取り扱い、公正な価格での取引を心がけています。
                </p>
                <div className="border-l-4 border-cyber-500 pl-6 my-6 bg-dark-bg/50 py-4">
                  <h3 className="text-2xl font-bold text-cyber-500 mb-4">取扱商品</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-cyber-500 mr-3 mt-1">▸</span>
                      <span>ブランド品・貴金属</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyber-500 mr-3 mt-1">▸</span>
                      <span>商品券・ギフトカード</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyber-500 mr-3 mt-1">▸</span>
                      <span>電化製品・デジタル機器</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyber-500 mr-3 mt-1">▸</span>
                      <span>その他中古品全般</span>
                    </li>
                  </ul>
                </div>
                <div className="grid md:grid-cols-3 gap-4 mt-8">
                  <div className="bg-dark-bg p-6 rounded-lg border border-cyber-700 hover:border-cyber-500 transition-all">
                    <div className="text-3xl mb-3">💎</div>
                    <h4 className="text-lg font-bold text-cyber-500 mb-2">高価買取</h4>
                    <p className="text-sm">市場価格を踏まえた適正な査定を実施</p>
                  </div>
                  <div className="bg-dark-bg p-6 rounded-lg border border-cyber-700 hover:border-cyber-500 transition-all">
                    <div className="text-3xl mb-3">⚡</div>
                    <h4 className="text-lg font-bold text-cyber-500 mb-2">スピード対応</h4>
                    <p className="text-sm">迅速な査定と即日現金化が可能</p>
                  </div>
                  <div className="bg-dark-bg p-6 rounded-lg border border-cyber-700 hover:border-cyber-500 transition-all">
                    <div className="text-3xl mb-3">🔒</div>
                    <h4 className="text-lg font-bold text-cyber-500 mb-2">安心取引</h4>
                    <p className="text-sm">古物商許可取得済みで安全な取引</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service 2: オンラインサロン */}
        <section id="salon" className="mb-20 scroll-mt-20">
          <div className="cyber-card overflow-hidden">
            <div className="relative h-64 md:h-80">
              <Image
                src="/images/salon.jpg"
                alt="オンラインサロン"
                fill
                className="object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-dark-bg/80 to-transparent"></div>
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-cyber-500 neon-text-strong mb-2">
                    オンラインサロン
                  </h2>
                  <p className="text-xl text-cyber-300">物販副業サポートコミュニティ</p>
                </div>
              </div>
            </div>
            <div className="p-8 md:p-12">
              <div className="space-y-6 text-cyber-300">
                <p className="text-lg leading-relaxed">
                  実店舗を持つ方々向けの物販副業サポートコミュニティです。
                  物販のプロが直接指導し、会員同士で情報交換できる環境を提供しています。
                </p>
                <div className="border-l-4 border-neon-purple pl-6 my-6 bg-dark-bg/50 py-4">
                  <h3 className="text-2xl font-bold text-neon-purple mb-4">サロンの特徴</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-3 mt-1">▸</span>
                      <span>物販のプロによる直接指導・コンサルティング</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-3 mt-1">▸</span>
                      <span>会員同士の活発な情報交換・ネットワーキング</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-3 mt-1">▸</span>
                      <span>最新の物販トレンド・ノウハウの共有</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-3 mt-1">▸</span>
                      <span>定期的なオンラインセミナー・勉強会の開催</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-3 mt-1">▸</span>
                      <span>仕入れルート・販売チャネルの情報提供</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-neon-purple/10 to-cyber-500/10 p-8 rounded-lg border-2 border-neon-purple/30 mt-8">
                  <h3 className="text-2xl font-bold text-neon-purple mb-4 flex items-center">
                    <span className="mr-3">👥</span>
                    こんな方におすすめ
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-cyber-200">
                    <div className="flex items-start">
                      <span className="text-cyber-500 mr-2">✓</span>
                      <span>実店舗を経営されている方</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-cyber-500 mr-2">✓</span>
                      <span>物販で副収入を得たい方</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-cyber-500 mr-2">✓</span>
                      <span>在庫管理に課題を感じている方</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-cyber-500 mr-2">✓</span>
                      <span>販路拡大を目指している方</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service 3: BUPPAN MOBILE */}
        <section id="mvno" className="mb-12 scroll-mt-20">
          <div className="cyber-card overflow-hidden">
            <div className="relative h-64 md:h-80">
              <Image
                src="/images/mvno.jpg"
                alt="BUPPAN MOBILE"
                fill
                className="object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-dark-bg/80 to-transparent"></div>
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-cyber-500 neon-text-strong mb-2">
                    BUPPAN MOBILE
                  </h2>
                  <p className="text-xl text-cyber-300">高品質MVNOサービス</p>
                </div>
              </div>
            </div>
            <div className="p-8 md:p-12">
              <div className="space-y-6 text-cyber-300">
                <p className="text-lg leading-relaxed">
                  <span className="text-cyber-500 font-semibold">「仕入れの相棒。音声込みで"使うぶんだけ"に最適化」</span>
                  <br />
                  NTTドコモ網系MVNOで、音声通話とSMSが標準搭載。1GB/月880円から利用できる、シンプルで使いやすい格安通信サービスです。
                </p>

                {/* 料金プラン */}
                <div className="border-l-4 border-cyber-500 pl-6 my-8 bg-dark-bg/50 py-4">
                  <h3 className="text-2xl font-bold text-cyber-500 mb-6">料金プラン（音声＋SMS込み）</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-dark-surface border-2 border-cyber-700 rounded-lg p-6 hover:border-cyber-500 hover:shadow-neon-blue transition-all">
                      <div className="text-center">
                        <h4 className="text-lg font-bold text-cyber-500 mb-2">1GBプラン</h4>
                        <p className="text-3xl font-bold text-cyber-300 mb-1">¥880</p>
                        <p className="text-xs text-cyber-600 mb-4">/月</p>
                        <div className="text-sm space-y-1">
                          <p className="text-cyber-400">データ通信: 1GB</p>
                          <p className="text-cyber-400">音声通話込み</p>
                          <p className="text-cyber-400">SMS込み</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-dark-surface border-2 border-cyber-500 rounded-lg p-6 shadow-neon-blue relative">
                      <div className="absolute top-0 right-0 bg-cyber-500 text-dark-bg text-xs font-bold px-3 py-1 rounded-bl-lg">
                        人気
                      </div>
                      <div className="text-center">
                        <h4 className="text-lg font-bold text-cyber-500 mb-2">3GBプラン</h4>
                        <p className="text-3xl font-bold text-cyber-300 mb-1">¥1,380</p>
                        <p className="text-xs text-cyber-600 mb-4">/月</p>
                        <div className="text-sm space-y-1">
                          <p className="text-cyber-400">データ通信: 3GB</p>
                          <p className="text-cyber-400">音声通話込み</p>
                          <p className="text-cyber-400">3日500MB制御</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-dark-surface border-2 border-cyber-700 rounded-lg p-6 hover:border-cyber-500 hover:shadow-neon-blue transition-all">
                      <div className="text-center">
                        <h4 className="text-lg font-bold text-cyber-500 mb-2">7.5GBプラン</h4>
                        <p className="text-3xl font-bold text-cyber-300 mb-1">¥2,080</p>
                        <p className="text-xs text-cyber-600 mb-4">/月</p>
                        <div className="text-sm space-y-1">
                          <p className="text-cyber-400">データ通信: 7.5GB</p>
                          <p className="text-cyber-400">音声通話込み</p>
                          <p className="text-cyber-400">3日1GB制御</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-dark-surface border-2 border-cyber-700 rounded-lg p-6 hover:border-cyber-500 hover:shadow-neon-blue transition-all">
                      <div className="text-center">
                        <h4 className="text-lg font-bold text-cyber-500 mb-2">10GBプラン</h4>
                        <p className="text-3xl font-bold text-cyber-300 mb-1">¥2,680</p>
                        <p className="text-xs text-cyber-600 mb-4">/月</p>
                        <div className="text-sm space-y-1">
                          <p className="text-cyber-400">データ通信: 10GB</p>
                          <p className="text-cyber-400">音声通話込み</p>
                          <p className="text-cyber-400">3日1.5GB制御</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 通話オプション */}
                <div className="bg-dark-bg/50 p-6 rounded-lg border border-dark-border mt-8">
                  <h3 className="text-xl font-bold text-cyber-500 mb-4">通話オプション</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <span className="text-cyber-500 mr-3">📞</span>
                      <div>
                        <p className="font-semibold text-cyber-300">従量通話</p>
                        <p className="text-sm text-cyber-500">¥11/30秒</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-cyber-500 mr-3">⏱️</span>
                      <div>
                        <p className="font-semibold text-cyber-300">5分かけ放題</p>
                        <p className="text-sm text-cyber-500">+¥660/月</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-cyber-500 mr-3">⏰</span>
                      <div>
                        <p className="font-semibold text-cyber-300">10分かけ放題</p>
                        <p className="text-sm text-cyber-500">+¥880/月</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-cyber-500 mr-3">♾️</span>
                      <div>
                        <p className="font-semibold text-cyber-300">完全かけ放題</p>
                        <p className="text-sm text-cyber-500">+¥2,200/月</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3ヶ月パック */}
                <div className="bg-gradient-to-br from-neon-green/10 to-cyber-500/10 p-8 rounded-lg border-2 border-neon-green/30 mt-8">
                  <h3 className="text-2xl font-bold text-neon-green mb-4">🎁 3ヶ月パック（初回）</h3>
                  <p className="text-cyber-300 mb-6">
                    SIM登録・個別配送・MNP転出0円を含む、お得な初回パッケージ。
                    <br />
                    法人様・複数回線をご検討の方におすすめです。
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-dark-bg/50 p-4 rounded-lg border border-neon-green/30">
                      <p className="text-sm text-cyber-400 mb-1">50回線以上</p>
                      <p className="text-2xl font-bold text-neon-green">¥4,200<span className="text-sm text-cyber-500">/回線</span></p>
                    </div>
                    <div className="bg-dark-bg/50 p-4 rounded-lg border border-neon-green/30">
                      <p className="text-sm text-cyber-400 mb-1">50回線未満</p>
                      <p className="text-2xl font-bold text-neon-green">¥4,600<span className="text-sm text-cyber-500">/回線</span></p>
                    </div>
                  </div>
                </div>

                {/* 追加データ */}
                <div className="bg-dark-bg/50 p-6 rounded-lg border border-dark-border mt-8">
                  <h3 className="text-xl font-bold text-cyber-500 mb-4">追加データ</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center justify-between">
                      <span className="text-cyber-300">500MB追加</span>
                      <span className="text-cyber-500 font-bold">¥770</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-cyber-300">1GB追加</span>
                      <span className="text-cyber-500 font-bold">¥1,320</span>
                    </div>
                  </div>
                </div>

                {/* サービス特徴 */}
                <div className="grid md:grid-cols-3 gap-4 mt-8">
                  <div className="bg-dark-bg p-6 rounded-lg border border-cyber-700 hover:border-cyber-500 transition-all">
                    <div className="text-3xl mb-3">📡</div>
                    <h4 className="text-lg font-bold text-cyber-500 mb-2">高品質回線</h4>
                    <p className="text-sm">NTTドコモ回線で安定した通信</p>
                  </div>
                  <div className="bg-dark-bg p-6 rounded-lg border border-cyber-700 hover:border-cyber-500 transition-all">
                    <div className="text-3xl mb-3">💰</div>
                    <h4 className="text-lg font-bold text-cyber-500 mb-2">柔軟な料金</h4>
                    <p className="text-sm">使用量に合わせて選べるプラン</p>
                  </div>
                  <div className="bg-dark-bg p-6 rounded-lg border border-cyber-700 hover:border-cyber-500 transition-all">
                    <div className="text-3xl mb-3">🛡️</div>
                    <h4 className="text-lg font-bold text-cyber-500 mb-2">安心サポート</h4>
                    <p className="text-sm">充実したカスタマーサポート</p>
                  </div>
                </div>

                {/* External Link */}
                <div className="text-center mt-8">
                  <a
                    href="https://buppan-mobile.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cyber-button inline-flex items-center"
                  >
                    BUPPAN MOBILE公式サイト
                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 text-center">
          <div className="cyber-card p-12 bg-gradient-to-br from-dark-surface to-dark-bg">
            <h2 className="text-3xl font-bold text-cyber-500 mb-4 neon-text">
              サービスに関するお問い合わせ
            </h2>
            <p className="text-cyber-300 mb-8 text-lg">
              各サービスの詳細やご不明な点がございましたら、お気軽にお問い合わせください。
            </p>
            <Link href="/contact" className="cyber-button text-lg">
              お問い合わせはこちら
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
