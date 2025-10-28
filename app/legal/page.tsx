import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '特定商取引法に基づく表記',
  description: '合同会社ピーチの特定商取引法に基づく表記。事業者情報や販売条件について記載しています。',
};

export default function Legal() {
  return (
    <div className="pt-28 pb-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-brand-500">
            <span className="text-brand-500">LEGAL</span> NOTICE
          </h1>
          <div className="section-divider max-w-xs mx-auto mb-6"></div>
          <p className="text-neutral-600 text-lg">
            特定商取引法に基づく表記
          </p>
        </div>

        <div className="business-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody className="divide-y divide-dark-border">
                <tr className="hover:bg-neutral-white/50 transition-colors">
                  <td className="py-6 px-6 text-neutral-600 font-semibold align-top w-1/3">事業者名</td>
                  <td className="py-6 px-6 text-cyber-200">合同会社ピーチ</td>
                </tr>
                <tr className="hover:bg-neutral-white/50 transition-colors">
                  <td className="py-6 px-6 text-neutral-600 font-semibold align-top">法人番号</td>
                  <td className="py-6 px-6 text-cyber-200">0400-03-023000</td>
                </tr>
                <tr className="hover:bg-neutral-white/50 transition-colors">
                  <td className="py-6 px-6 text-neutral-600 font-semibold align-top">代表者</td>
                  <td className="py-6 px-6 text-cyber-200">宮崎 忍</td>
                </tr>
                <tr className="hover:bg-neutral-white/50 transition-colors">
                  <td className="py-6 px-6 text-neutral-600 font-semibold align-top">所在地</td>
                  <td className="py-6 px-6 text-cyber-200">
                    〒290-0255<br />
                    千葉県市原市荻作530番地4
                  </td>
                </tr>
                <tr className="hover:bg-neutral-white/50 transition-colors">
                  <td className="py-6 px-6 text-neutral-600 font-semibold align-top">連絡先</td>
                  <td className="py-6 px-6 text-cyber-200">
                    Eメール:{' '}
                    <a
                      href="mailto:peach.2023.7.19@gmail.com"
                      className="text-brand-500 hover:text-neutral-600 transition-colors"
                    >
                      peach.2023.7.19@gmail.com
                    </a>
                  </td>
                </tr>
                <tr className="hover:bg-neutral-white/50 transition-colors">
                  <td className="py-6 px-6 text-neutral-600 font-semibold align-top">事業内容</td>
                  <td className="py-6 px-6 text-cyber-200">
                    <ul className="list-disc list-inside space-y-2">
                      <li>中古品の買取及び販売業</li>
                      <li>金券の買取及び販売業</li>
                      <li>インターネットを利用した通信販売業</li>
                      <li>不動産の売買、賃貸及び仲介業</li>
                      <li>オンラインサロンの運営</li>
                      <li>電気通信事業(MVNO)</li>
                    </ul>
                  </td>
                </tr>
                <tr className="hover:bg-neutral-white/50 transition-colors">
                  <td className="py-6 px-6 text-neutral-600 font-semibold align-top">販売価格</td>
                  <td className="py-6 px-6 text-cyber-200">
                    各商品・サービスページに表示された価格(税込)
                  </td>
                </tr>
                <tr className="hover:bg-neutral-white/50 transition-colors">
                  <td className="py-6 px-6 text-neutral-600 font-semibold align-top">支払方法</td>
                  <td className="py-6 px-6 text-cyber-200">
                    <ul className="list-disc list-inside space-y-1">
                      <li>クレジットカード</li>
                      <li>銀行振込</li>
                      <li>その他、各サービスページに記載の方法</li>
                    </ul>
                  </td>
                </tr>
                <tr className="hover:bg-neutral-white/50 transition-colors">
                  <td className="py-6 px-6 text-neutral-600 font-semibold align-top">支払時期</td>
                  <td className="py-6 px-6 text-cyber-200">
                    各サービスの契約時または商品購入時に定める支払条件による
                  </td>
                </tr>
                <tr className="hover:bg-neutral-white/50 transition-colors">
                  <td className="py-6 px-6 text-neutral-600 font-semibold align-top">商品の引渡時期</td>
                  <td className="py-6 px-6 text-cyber-200">
                    各商品・サービスページに記載の期間内に提供いたします
                  </td>
                </tr>
                <tr className="hover:bg-neutral-white/50 transition-colors">
                  <td className="py-6 px-6 text-neutral-600 font-semibold align-top">返品・交換について</td>
                  <td className="py-6 px-6 text-cyber-200">
                    <div className="space-y-2">
                      <p>【物販事業】</p>
                      <p className="text-sm">
                        商品到着後7日以内に限り、不良品や配送中の破損があった場合は返品・交換を承ります。
                        お客様都合による返品は原則として受け付けておりません。
                      </p>
                      <p className="mt-4">【サービス契約】</p>
                      <p className="text-sm">
                        サービス開始後のキャンセル・返金は原則として承っておりません。
                        詳細は各サービスの利用規約をご確認ください。
                      </p>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-neutral-white/50 transition-colors">
                  <td className="py-6 px-6 text-neutral-600 font-semibold align-top">キャンセルについて</td>
                  <td className="py-6 px-6 text-cyber-200">
                    商品発送前、またはサービス提供開始前のキャンセルは承ります。
                    発送後・提供開始後のキャンセルはお受けできません。
                  </td>
                </tr>
                <tr className="hover:bg-neutral-white/50 transition-colors">
                  <td className="py-6 px-6 text-neutral-600 font-semibold align-top">その他費用</td>
                  <td className="py-6 px-6 text-cyber-200">
                    銀行振込の際の振込手数料はお客様負担となります。
                    返品時の送料は、不良品・配送中の破損の場合は当社負担、お客様都合の場合はお客様負担となります。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 business-card p-8 bg-gradient-to-br from-cyber-500/10 to-neon-purple/10 border-2 border-cyber-500/30">
          <h2 className="text-2xl font-bold text-brand-500 mb-4">お問い合わせ</h2>
          <p className="text-neutral-600 mb-4">
            表記内容に関するご質問やご不明な点がございましたら、下記までお問い合わせください。
          </p>
          <div className="bg-neutral-white p-6 rounded-lg border border-neutral-200">
            <p className="text-neutral-600">
              合同会社ピーチ<br />
              Eメールアドレス:{' '}
              <a
                href="mailto:peach.2023.7.19@gmail.com"
                className="text-brand-500 hover:text-neutral-600 transition-colors"
              >
                peach.2023.7.19@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
