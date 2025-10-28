# 合同会社ピーチ コーポレートサイト (Cyber Edition)

ネオン系青色でサイバー感のあるデザインを採用した、合同会社ピーチの公式ウェブサイトです。

## 🎨 デザインテーマ

- **メインカラー**: ネオンサイバーブルー (#00D9FF)
- **アクセントカラー**: ネオンパープル (#8B5CF6)
- **背景**: ダークテーマ (#0A0E27)
- **コンセプト**: サイバーパンク、未来的、テクノロジー

## 🚀 技術スタック

- **Framework**: Next.js 15.2 (App Router)
- **Language**: TypeScript 5.9.3
- **Styling**: Tailwind CSS 3.4.18
- **Font**: Noto Sans JP
- **Form**: React Hook Form + Zod
- **Email**: Resend (optional)

## 📦 プロジェクト構成

```
peach1/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # ルートレイアウト
│   ├── page.tsx             # ホームページ
│   ├── globals.css          # グローバルスタイル
│   ├── about/               # 会社概要
│   ├── services/            # サービス紹介
│   ├── contact/             # お問い合わせ
│   ├── news/                # ニュース一覧・詳細
│   ├── privacy/             # プライバシーポリシー
│   ├── legal/               # 特定商取引法
│   ├── api/contact/         # お問い合わせAPI
│   ├── sitemap.ts           # サイトマップ生成
│   └── robots.ts            # robots.txt生成
├── components/              # Reactコンポーネント
│   ├── Header.tsx           # ヘッダーナビゲーション
│   ├── Footer.tsx           # フッター
│   └── ContactForm.tsx      # お問い合わせフォーム
├── lib/                     # ユーティリティ
│   └── news.ts              # ニュースデータ管理
├── public/images/           # 画像アセット
├── package.json             # 依存関係
├── tsconfig.json            # TypeScript設定
├── tailwind.config.ts       # Tailwind設定
└── next.config.ts           # Next.js設定
```

## 🛠️ セットアップ

### 1. 依存関係のインストール

```bash
npm install
# または
yarn install
# または
pnpm install
```

### 2. 画像の配置

`public/images/` ディレクトリに以下の画像を配置してください:

- `hero.jpg` - ヒーローセクション用背景画像
- `buppan.jpg` - 物販事業のイメージ
- `salon.jpg` - オンラインサロンのイメージ
- `mvno.jpg` - BUPPAN MOBILEのイメージ

推奨サイズ: 1920x1080px 以上

### 3. 開発サーバーの起動

```bash
npm run dev
# または
yarn dev
# または
pnpm dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

### 4. Webpackモード (Turbopackで問題がある場合)

```bash
npm run dev:webpack
```

## 🎨 カスタムデザイン要素

### ネオンエフェクト

```tsx
// ネオンテキスト
<h1 className="neon-text">テキスト</h1>
<h1 className="neon-text-strong">強調テキスト</h1>

// ネオンボーダー
<div className="neon-border">コンテンツ</div>

// サイバーボタン
<button className="cyber-button">ボタン</button>

// サイバーカード
<div className="cyber-card">カードコンテンツ</div>
```

### カラーパレット

```tsx
// Cyberブルー系
bg-cyber-50 ~ bg-cyber-900
text-cyber-50 ~ text-cyber-900
border-cyber-50 ~ border-cyber-900

// ネオンアクセント
bg-neon-blue, text-neon-blue
bg-neon-purple, text-neon-purple
bg-neon-pink, text-neon-pink
bg-neon-green, text-neon-green

// ダーク背景
bg-dark-bg (#0A0E27)
bg-dark-surface (#141B3D)
bg-dark-border (#1E2749)
```

### アニメーション

```tsx
// パルスネオン
<div className="animate-pulse-neon">...</div>

// グロー
<div className="animate-glow">...</div>

// スピンスロー
<div className="spin-slow">...</div>
```

## 📧 お問い合わせ機能の設定

お問い合わせフォームは現在、コンソールにログを出力します。
実際にメールを送信するには、`app/api/contact/route.ts` を編集してください。

### Resendを使用する場合

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'noreply@yourdomain.com',
  to: 'peach.2023.7.19@gmail.com',
  subject: `お問い合わせ: ${subject}`,
  html: `...`,
});
```

## 🌐 デプロイ

### Vercel (推奨)

1. GitHubリポジトリにプッシュ
2. [Vercel](https://vercel.com) でプロジェクトをインポート
3. 環境変数を設定 (必要に応じて)
4. デプロイ

### ビルド

```bash
npm run build
npm run start
```

## 📝 TODO

- [ ] `public/images/` に実際の画像を配置
- [ ] `app/sitemap.ts` と `app/robots.ts` の本番URLを更新
- [ ] お問い合わせAPIに実際のメール送信機能を実装
- [ ] SEOメタデータの最適化
- [ ] Google Analyticsの設定 (オプション)

## 📄 ライセンス

© 2023-2025 合同会社ピーチ. All rights reserved.

## 📞 サポート

お問い合わせ: peach.2023.7.19@gmail.com
