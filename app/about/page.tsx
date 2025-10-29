import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '会社概要',
  description: '合同会社ピーチの会社概要、代表挨拶、会社情報をご紹介します。',
};

export default function About() {
  return (
    <div className="pt-28 pb-20">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Page Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-4 text-neutral-900">
            ABOUT US
          </h1>
          <div className="w-20 h-1 bg-brand-500 mx-auto mb-8"></div>
          <p className="text-neutral-600 text-xl font-light">
            合同会社ピーチについて
          </p>
        </div>

        {/* CEO Message */}
        <section className="mb-20">
          <div className="business-card p-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8">代表挨拶</h2>
            <div className="space-y-4 text-neutral-600 leading-relaxed">
              <p>
                合同会社ピーチのウェブサイトをご覧いただき、誠にありがとうございます。
              </p>
              <p>
                私たちは、<span className="text-brand-500 font-semibold">物販事業</span>、
                <span className="text-brand-500 font-semibold">オンラインサロン</span>、
                <span className="text-brand-500 font-semibold">MVNO事業</span>という3つの事業を通じて、
                お客様の生活をより豊かにし、ビジネスの成功をサポートすることを使命としています。
              </p>
              <p>
                物販事業では、中古品や金券の買取・販売を通じて、お客様の資産を最大限に活用するお手伝いをしています。
                オンラインサロンでは、実店舗を持つ方々向けに物販副業のノウハウを共有し、
                収益向上をサポートするコミュニティを提供しています。
              </p>
              <p>
                そして、BUPPAN MOBILEでは、NTTドコモの高品質な回線を利用したMVNOサービスを提供し、
                お客様に安心・安全な通信環境をお届けしています。
              </p>
              <p className="pt-4 font-medium text-neutral-700">
                これからも、お客様に寄り添い、共に成長していく企業であり続けます。
              </p>
              <div className="pt-8 border-t border-brand-500 mt-8">
                <p className="text-right text-neutral-700">
                  合同会社ピーチ<br />
                  代表社員 <span className="text-brand-500 font-bold text-xl">宮崎 忍</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Information */}
        <section className="mb-20">
          <div className="business-card p-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8">会社情報</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody className="divide-y divide-dark-border">
                  <tr className="hover:bg-neutral-white/50 transition-colors">
                    <td className="py-4 px-4 text-neutral-600 font-semibold w-1/3">会社名</td>
                    <td className="py-4 px-4 text-cyber-200">合同会社ピーチ</td>
                  </tr>
                  <tr className="hover:bg-neutral-white/50 transition-colors">
                    <td className="py-4 px-4 text-neutral-600 font-semibold">法人番号</td>
                    <td className="py-4 px-4 text-cyber-200">0400-03-023000</td>
                  </tr>
                  <tr className="hover:bg-neutral-white/50 transition-colors">
                    <td className="py-4 px-4 text-neutral-600 font-semibold">設立</td>
                    <td className="py-4 px-4 text-cyber-200">2023年7月19日</td>
                  </tr>
                  <tr className="hover:bg-neutral-white/50 transition-colors">
                    <td className="py-4 px-4 text-neutral-600 font-semibold">資本金</td>
                    <td className="py-4 px-4 text-cyber-200">500,000円</td>
                  </tr>
                  <tr className="hover:bg-neutral-white/50 transition-colors">
                    <td className="py-4 px-4 text-neutral-600 font-semibold">代表社員</td>
                    <td className="py-4 px-4 text-cyber-200">宮崎 忍</td>
                  </tr>
                  <tr className="hover:bg-neutral-white/50 transition-colors">
                    <td className="py-4 px-4 text-neutral-600 font-semibold">所在地</td>
                    <td className="py-4 px-4 text-cyber-200">
                      〒290-0255<br />
                      千葉県市原市
                    </td>
                  </tr>
                  <tr className="hover:bg-neutral-white/50 transition-colors">
                    <td className="py-4 px-4 text-neutral-600 font-semibold">メールアドレス</td>
                    <td className="py-4 px-4 text-cyber-200">
                      <a href="mailto:peach.2023.7.19@gmail.com" className="text-brand-500 hover:text-neutral-600 transition-colors">
                        peach.2023.7.19@gmail.com
                      </a>
                    </td>
                  </tr>
                  <tr className="hover:bg-neutral-white/50 transition-colors">
                    <td className="py-4 px-4 text-neutral-600 font-semibold">事業内容</td>
                    <td className="py-4 px-4 text-cyber-200">
                      <ul className="list-disc list-inside space-y-2">
                        <li>中古品及び金券の買取・販売業</li>
                        <li>インターネットを利用した通信販売業</li>
                        <li>不動産の売買、賃貸及び仲介業</li>
                        <li>オンラインコミュニティの運営</li>
                        <li>電気通信事業(MVNO)</li>
                        <li>前各号に附帯又は関連する一切の業務</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="hover:bg-neutral-white/50 transition-colors">
                    <td className="py-4 px-4 text-neutral-600 font-semibold">古物商許可番号</td>
                    <td className="py-4 px-4 text-cyber-200">第441260002400号</td>
                  </tr>
                  <tr className="hover:bg-neutral-white/50 transition-colors">
                    <td className="py-4 px-4 text-neutral-600 font-semibold">電気通信事業届出番号</td>
                    <td className="py-4 px-4 text-cyber-200">A-07-22969</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Company History */}
        <section>
          <div className="business-card p-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8">沿革</h2>
            <div className="space-y-8">
              <div className="flex gap-6 pb-6 border-b border-neutral-200">
                <div className="flex-shrink-0 w-32 text-brand-500 font-semibold text-lg">
                  2023年7月
                </div>
                <div className="flex-grow">
                  <p className="text-neutral-700">合同会社ピーチ設立</p>
                </div>
              </div>
              <div className="flex gap-6 pb-6 border-b border-neutral-200">
                <div className="flex-shrink-0 w-32 text-brand-500 font-semibold text-lg">
                  2023年8月
                </div>
                <div className="flex-grow">
                  <p className="text-neutral-700">オンラインサロン開設</p>
                </div>
              </div>
              <div className="flex gap-6 pb-6 border-b border-neutral-200">
                <div className="flex-shrink-0 w-32 text-brand-500 font-semibold text-lg">
                  2025年10月
                </div>
                <div className="flex-grow">
                  <p className="text-neutral-700">BUPPAN MOBILEサービス開始</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-32 text-brand-500 font-semibold text-lg">
                  2025年10月
                </div>
                <div className="flex-grow">
                  <p className="text-neutral-700">コーポレートサイトリニューアル</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
