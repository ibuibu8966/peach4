import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const notoSansJP = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: '合同会社ピーチ | 物販・オンラインサロン・MVNO事業',
    template: '%s | 合同会社ピーチ',
  },
  description:
    '合同会社ピーチは、物販事業、オンラインサロン運営、MVNO事業(BUPPAN MOBILE)を展開する企業です。お客様の生活をより豊かにするサービスを提供しています。',
  keywords: ['合同会社ピーチ', '物販', 'オンラインサロン', 'MVNO', 'BUPPAN MOBILE', '副業サポート'],
  authors: [{ name: '合同会社ピーチ' }],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: '合同会社ピーチ',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
