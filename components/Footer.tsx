import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-brand-500">
              合同会社ピーチ
            </h3>
            <p className="text-neutral-600 text-sm mb-2">
              〒290-0255<br />
              千葉県市原市荻作530番地4
            </p>
            <p className="text-neutral-600 text-sm mt-2">
              Email: <a href="mailto:peach.2023.7.19@gmail.com" className="text-brand-500 hover:text-brand-600 transition-colors">
                peach.2023.7.19@gmail.com
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-neutral-900">クイックリンク</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-neutral-600 hover:text-brand-500 transition-colors">
                  ホーム
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-600 hover:text-brand-500 transition-colors">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-neutral-600 hover:text-brand-500 transition-colors">
                  サービス
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-neutral-600 hover:text-brand-500 transition-colors">
                  ニュース
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-600 hover:text-brand-500 transition-colors">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-neutral-900">法的情報</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-neutral-600 hover:text-brand-500 transition-colors">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="/legal" className="text-neutral-600 hover:text-brand-500 transition-colors">
                  特定商取引法に基づく表記
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-neutral-200 text-center">
          <p className="text-neutral-600 text-sm">
            © {currentYear} 合同会社ピーチ All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
