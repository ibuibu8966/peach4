import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: '合同会社ピーチのプライバシーポリシー。個人情報の取り扱いについて説明しています。',
};

export default function Privacy() {
  return (
    <div className="pt-28 pb-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 neon-text">
            <span className="text-cyber-500">PRIVACY</span> POLICY
          </h1>
          <div className="section-divider max-w-xs mx-auto mb-6"></div>
          <p className="text-cyber-300 text-lg">
            プライバシーポリシー
          </p>
        </div>

        <div className="cyber-card p-8 md:p-12">
          <div className="prose prose-invert max-w-none space-y-8 text-cyber-300">
            <p className="text-lg">
              合同会社ピーチ(以下、「当社」といいます。)は、本ウェブサイト上で提供するサービス(以下、「本サービス」といいます。)における、
              ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー(以下、「本ポリシー」といいます。)を定めます。
            </p>

            <section>
              <h2 className="text-2xl font-bold text-cyber-500 mb-4 flex items-center">
                <span className="w-1 h-8 bg-cyber-500 mr-3 shadow-neon-blue"></span>
                第1条(個人情報)
              </h2>
              <p>
                「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、
                当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報及び
                容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報(個人識別情報)を指します。
              </p>
            </section>

            <div className="section-divider opacity-30"></div>

            <section>
              <h2 className="text-2xl font-bold text-cyber-500 mb-4 flex items-center">
                <span className="w-1 h-8 bg-cyber-500 mr-3 shadow-neon-blue"></span>
                第2条(個人情報の収集方法)
              </h2>
              <p>
                当社は、ユーザーが利用登録をする際に氏名、生年月日、住所、電話番号、メールアドレス、銀行口座番号、
                クレジットカード番号、運転免許証番号などの個人情報をお尋ねすることがあります。
                また、ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や決済に関する情報を、
                当社の提携先(情報提供元、広告主、広告配信先などを含みます。以下、「提携先」といいます。)などから収集することがあります。
              </p>
            </section>

            <div className="section-divider opacity-30"></div>

            <section>
              <h2 className="text-2xl font-bold text-cyber-500 mb-4 flex items-center">
                <span className="w-1 h-8 bg-cyber-500 mr-3 shadow-neon-blue"></span>
                第3条(個人情報を収集・利用する目的)
              </h2>
              <p className="mb-4">当社が個人情報を収集・利用する目的は、以下のとおりです。</p>
              <ol className="list-decimal list-inside space-y-2 pl-4">
                <li>当社サービスの提供・運営のため</li>
                <li>ユーザーからのお問い合わせに回答するため(本人確認を行うことを含む)</li>
                <li>ユーザーが利用中のサービスの新機能、更新情報、キャンペーン等及び当社が提供する他のサービスの案内のメールを送付するため</li>
                <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
                <li>利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため</li>
                <li>ユーザーにご自身の登録情報の閲覧や変更、削除、ご利用状況の閲覧を行っていただくため</li>
                <li>上記の利用目的に付随する目的</li>
              </ol>
            </section>

            <div className="section-divider opacity-30"></div>

            <section>
              <h2 className="text-2xl font-bold text-cyber-500 mb-4 flex items-center">
                <span className="w-1 h-8 bg-cyber-500 mr-3 shadow-neon-blue"></span>
                第4条(利用目的の変更)
              </h2>
              <ol className="list-decimal list-inside space-y-2 pl-4">
                <li>当社は、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。</li>
                <li>利用目的の変更を行った場合には、変更後の目的について、当社所定の方法により、ユーザーに通知し、または本ウェブサイト上に公表するものとします。</li>
              </ol>
            </section>

            <div className="section-divider opacity-30"></div>

            <section>
              <h2 className="text-2xl font-bold text-cyber-500 mb-4 flex items-center">
                <span className="w-1 h-8 bg-cyber-500 mr-3 shadow-neon-blue"></span>
                第5条(個人情報の第三者提供)
              </h2>
              <ol className="list-decimal list-inside space-y-2 pl-4">
                <li>当社は、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。</li>
                <li className="ml-8">
                  <ol className="list-inside space-y-2 mt-2">
                    <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                    <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                    <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
                    <li>予め次の事項を告知あるいは公表し、かつ当社が個人情報保護委員会に届出をしたとき</li>
                  </ol>
                </li>
                <li>前項の定めにかかわらず、次に掲げる場合には、当該情報の提供先は第三者に該当しないものとします。</li>
              </ol>
            </section>

            <div className="section-divider opacity-30"></div>

            <section>
              <h2 className="text-2xl font-bold text-cyber-500 mb-4 flex items-center">
                <span className="w-1 h-8 bg-cyber-500 mr-3 shadow-neon-blue"></span>
                第6条(個人情報の開示)
              </h2>
              <ol className="list-decimal list-inside space-y-2 pl-4">
                <li>当社は、本人から個人情報の開示を求められたときは、本人に対し、遅滞なくこれを開示します。ただし、開示することにより次のいずれかに該当する場合は、その全部または一部を開示しないこともあり、開示しない決定をした場合には、その旨を遅滞なく通知します。</li>
                <li className="ml-8">
                  <ol className="list-inside space-y-2 mt-2">
                    <li>本人または第三者の生命、身体、財産その他の権利利益を害するおそれがある場合</li>
                    <li>当社の業務の適正な実施に著しい支障を及ぼすおそれがある場合</li>
                    <li>その他法令に違反することとなる場合</li>
                  </ol>
                </li>
              </ol>
            </section>

            <div className="section-divider opacity-30"></div>

            <section>
              <h2 className="text-2xl font-bold text-cyber-500 mb-4 flex items-center">
                <span className="w-1 h-8 bg-cyber-500 mr-3 shadow-neon-blue"></span>
                第7条(個人情報の訂正および削除)
              </h2>
              <ol className="list-decimal list-inside space-y-2 pl-4">
                <li>ユーザーは、当社の保有する自己の個人情報が誤った情報である場合には、当社が定める手続きにより、当社に対して個人情報の訂正、追加または削除(以下、「訂正等」といいます。)を請求することができます。</li>
                <li>当社は、ユーザーから前項の請求を受けてその請求に応じる必要があると判断した場合には、遅滞なく、当該個人情報の訂正等を行うものとします。</li>
              </ol>
            </section>

            <div className="section-divider opacity-30"></div>

            <section>
              <h2 className="text-2xl font-bold text-cyber-500 mb-4 flex items-center">
                <span className="w-1 h-8 bg-cyber-500 mr-3 shadow-neon-blue"></span>
                第8条(個人情報の利用停止等)
              </h2>
              <p>
                当社は、本人から、個人情報が、利用目的の範囲を超えて取り扱われているという理由、
                または不正の手段により取得されたものであるという理由により、その利用の停止または消去(以下、「利用停止等」といいます。)を求められた場合には、
                遅滞なく必要な調査を行います。
              </p>
            </section>

            <div className="section-divider opacity-30"></div>

            <section>
              <h2 className="text-2xl font-bold text-cyber-500 mb-4 flex items-center">
                <span className="w-1 h-8 bg-cyber-500 mr-3 shadow-neon-blue"></span>
                第9条(プライバシーポリシーの変更)
              </h2>
              <ol className="list-decimal list-inside space-y-2 pl-4">
                <li>本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく、変更することができるものとします。</li>
                <li>当社が別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。</li>
              </ol>
            </section>

            <div className="section-divider opacity-30"></div>

            <section>
              <h2 className="text-2xl font-bold text-cyber-500 mb-4 flex items-center">
                <span className="w-1 h-8 bg-cyber-500 mr-3 shadow-neon-blue"></span>
                第10条(お問い合わせ窓口)
              </h2>
              <p className="mb-4">本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。</p>
              <div className="bg-dark-bg p-6 rounded-lg border border-cyber-700">
                <p className="text-cyber-300">
                  合同会社ピーチ<br />
                  Eメールアドレス:{' '}
                  <a href="mailto:peach.2023.7.19@gmail.com" className="text-cyber-500 hover:text-cyber-300 transition-colors">
                    peach.2023.7.19@gmail.com
                  </a>
                </p>
              </div>
            </section>

            <div className="mt-12 text-right text-cyber-500">
              <p>制定日:2023年7月19日</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
