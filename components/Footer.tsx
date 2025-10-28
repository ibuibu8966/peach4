import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-surface border-t border-cyber-700/50 mt-16">
      {/* Neon Top Border Effect */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-cyber-500 to-transparent opacity-50"></div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 neon-text">
              <span className="text-cyber-500">PEACH</span>
              <span className="text-neon-purple ml-1">TECH</span>
            </h3>
            <p className="text-cyber-300 text-sm mb-2">合同会社ピーチ</p>
            <p className="text-cyber-400 text-sm">
              〒290-0255<br />
              千葉県市原市
            </p>
            <p className="text-cyber-400 text-sm mt-2">
              Email: <a href="mailto:peach.2023.7.19@gmail.com" className="hover:text-cyber-500 transition-colors">
                peach.2023.7.19@gmail.com
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyber-300">クイックリンク</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-cyber-400 hover:text-cyber-500 transition-colors flex items-center group">
                  <span className="mr-2 text-cyber-600 group-hover:text-cyber-500 transition-colors">▸</span>
                  ホーム
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-cyber-400 hover:text-cyber-500 transition-colors flex items-center group">
                  <span className="mr-2 text-cyber-600 group-hover:text-cyber-500 transition-colors">▸</span>
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-cyber-400 hover:text-cyber-500 transition-colors flex items-center group">
                  <span className="mr-2 text-cyber-600 group-hover:text-cyber-500 transition-colors">▸</span>
                  サービス
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-cyber-400 hover:text-cyber-500 transition-colors flex items-center group">
                  <span className="mr-2 text-cyber-600 group-hover:text-cyber-500 transition-colors">▸</span>
                  ニュース
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-cyber-400 hover:text-cyber-500 transition-colors flex items-center group">
                  <span className="mr-2 text-cyber-600 group-hover:text-cyber-500 transition-colors">▸</span>
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyber-300">法的情報</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-cyber-400 hover:text-cyber-500 transition-colors flex items-center group">
                  <span className="mr-2 text-cyber-600 group-hover:text-cyber-500 transition-colors">▸</span>
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="/legal" className="text-cyber-400 hover:text-cyber-500 transition-colors flex items-center group">
                  <span className="mr-2 text-cyber-600 group-hover:text-cyber-500 transition-colors">▸</span>
                  特定商取引法に基づく表記
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-dark-border text-center">
          <p className="text-cyber-500 text-sm">
            © {currentYear} <span className="font-semibold">合同会社ピーチ</span>. All rights reserved.
          </p>
          <div className="mt-2 flex justify-center items-center space-x-2">
            <div className="w-2 h-2 bg-cyber-500 rounded-full animate-pulse-neon"></div>
            <p className="text-cyber-600 text-xs">Powered by Cyber Technology</p>
            <div className="w-2 h-2 bg-neon-purple rounded-full animate-pulse-neon"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
