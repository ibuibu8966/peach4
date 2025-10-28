# クイックスタートガイド

## 🚀 すぐに始める

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 画像の準備

`public/images/` フォルダに以下の4つの画像を配置してください：

- **hero.jpg** - トップページのメイン背景画像
- **buppan.jpg** - 物販事業のイメージ画像
- **salon.jpg** - オンラインサロンのイメージ画像
- **mvno.jpg** - BUPPAN MOBILEのイメージ画像

※ 画像がなくても動作しますが、画像部分は表示されません

### 3. 開発サーバーを起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開きます

## 🎨 デザインの特徴

### サイバーブルーのネオンテーマ

- **メインカラー**: 電光ブルー (#00D9FF)
- **背景**: ダークブラック (#0A0E27)
- **エフェクト**: ネオングロー、パルスアニメーション
- **雰囲気**: 未来的、サイバーパンク、テクノロジー

### 主要なページ

1. **ホーム** (`/`) - ヒーローセクション + サービス概要 + 最新ニュース
2. **会社概要** (`/about`) - 代表挨拶、会社情報、沿革
3. **サービス** (`/services`) - 物販、オンラインサロン、BUPPAN MOBILE
4. **お問い合わせ** (`/contact`) - フォーム + 会社情報
5. **ニュース** (`/news`) - ニュース一覧 + 詳細ページ
6. **プライバシーポリシー** (`/privacy`)
7. **特定商取引法** (`/legal`)

## 📝 次にやること

### 必須タスク

- [ ] `public/images/` に画像を配置
- [ ] `app/sitemap.ts` のbaseURLを本番URLに変更
- [ ] `app/robots.ts` のbaseURLを本番URLに変更
- [ ] お問い合わせ機能にメール送信を実装 (`app/api/contact/route.ts`)

### オプション

- [ ] ニュース記事の追加・編集 (`lib/news.ts`)
- [ ] Google Analyticsの設定
- [ ] OGP画像の追加
- [ ] ファビコンの設定

## 🌐 デプロイ

### Vercelにデプロイ（推奨）

1. GitHubにプッシュ
2. Vercelでインポート
3. 自動デプロイ完了！

```bash
# ビルドテスト
npm run build
npm run start
```

## 🎨 カスタムCSSクラス

```tsx
// ネオンテキスト
<h1 className="neon-text">テキスト</h1>

// サイバーボタン
<button className="cyber-button">クリック</button>

// サイバーカード
<div className="cyber-card">コンテンツ</div>

// セクション区切り線
<div className="section-divider"></div>
```

## 💡 トラブルシューティング

### 画像が表示されない
→ `public/images/` フォルダに画像が配置されているか確認

### スタイルが反映されない
→ 開発サーバーを再起動してみてください

### TypeScriptエラー
→ `npm install` を実行してください

## 📞 サポート

質問がある場合は README.md を参照してください。
