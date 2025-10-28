import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description: '合同会社ピーチへのお問い合わせはこちらから。サービスに関するご質問、ご相談など、お気軽にご連絡ください。',
};

export default function Contact() {
  return (
    <div className="pt-28 pb-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-brand-500">
            <span className="text-brand-500">CONTACT</span> US
          </h1>
          <div className="section-divider max-w-xs mx-auto mb-6"></div>
          <p className="text-neutral-600 text-lg">
            お問い合わせ・ご相談はこちら
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-brand-500 mb-6 flex items-center">
              <span className="w-1 h-8 bg-cyber-500 mr-3 shadow-neon-blue"></span>
              お問い合わせフォーム
            </h2>
            <ContactForm />
          </div>

          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold text-brand-500 mb-6 flex items-center">
              <span className="w-1 h-8 bg-cyber-500 mr-3 shadow-neon-blue"></span>
              会社情報
            </h2>
            <div className="business-card p-8 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-neutral-600 mb-2">会社名</h3>
                <p className="text-cyber-200">合同会社ピーチ</p>
              </div>
              <div className="section-divider opacity-30"></div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-600 mb-2">所在地</h3>
                <p className="text-cyber-200">
                  〒290-0255<br />
                  千葉県市原市
                </p>
              </div>
              <div className="section-divider opacity-30"></div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-600 mb-2">メールアドレス</h3>
                <a
                  href="mailto:peach.2023.7.19@gmail.com"
                  className="text-brand-500 hover:text-neutral-600 transition-colors break-all"
                >
                  peach.2023.7.19@gmail.com
                </a>
              </div>
              <div className="section-divider opacity-30"></div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-600 mb-2">営業時間</h3>
                <p className="text-cyber-200">
                  平日 10:00 - 18:00<br />
                  (土日祝日は休業)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="max-w-4xl mx-auto">
          <div className="business-card p-8 bg-gradient-to-br from-cyber-500/10 to-neon-purple/10 border-2 border-cyber-500/30">
            <h3 className="text-xl font-bold text-brand-500 mb-4">お問い合わせについて</h3>
            <ul className="space-y-3 text-neutral-600">
              <li className="flex items-start">
                <span className="text-brand-500 mr-3 mt-1">▸</span>
                <span>お問い合わせ内容の確認後、2営業日以内に担当者よりご連絡させていただきます。</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-500 mr-3 mt-1">▸</span>
                <span>お問い合わせ内容によっては、お時間をいただく場合がございます。</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-500 mr-3 mt-1">▸</span>
                <span>土日祝日にいただいたお問い合わせは、翌営業日以降の対応となります。</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
