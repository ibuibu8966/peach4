export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: 'お知らせ' | 'プレスリリース' | 'サービス情報';
  content: string;
  excerpt: string;
}

export const newsData: NewsItem[] = [
  {
    id: '1',
    title: '合同会社ピーチ設立のお知らせ',
    date: '2023-07-19',
    category: 'お知らせ',
    excerpt: '2023年7月19日、合同会社ピーチを設立いたしました。',
    content: `
      この度、2023年7月19日付けで合同会社ピーチを設立いたしました。

      当社は、物販事業、オンラインサロン運営、MVNO事業を通じて、
      お客様の生活をより豊かにするサービスを提供してまいります。

      今後とも、ご支援、ご愛顧のほど、よろしくお願い申し上げます。
    `,
  },
];

export function getAllNews(): NewsItem[] {
  return newsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getNewsById(id: string): NewsItem | undefined {
  return newsData.find((news) => news.id === id);
}

export function getRecentNews(limit: number = 3): NewsItem[] {
  return getAllNews().slice(0, limit);
}
