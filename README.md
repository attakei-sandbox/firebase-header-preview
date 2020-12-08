# firebase-header-preview

## 概要

Firebase Hosting + Cloud Functions/Cloud RUNで、
Firebase Hostingから各サービスに渡っていくリクエストヘッダーを確認するサンプル。

## 環境

- 次のことが出来るローカル環境
    - Nodejs 12.x系
    - Docker CLI
    - Google CLoud SDKの`gcloud`コマンド
- Firebaseプロジェクトを1個
- クレジットカード

## 使い方

### 前提

Firebaseプロジェクトを用意して、以下の作業をしておくこと

- Blazeプランへの切り替え
- Cloud Run APIの有効化（Cloud Run画面でのサービス作成のふり）

### デプロイ

※CD系のスクリプトは書いてないので、手作業です。

1. Cloud Run向けにDockerイメージのpush

```
$ gcloud auth login
$ gcloud auth configure-docker
$ docker build -t gcr.io/YOUR_PROJECT/run .
$ docker push gcr.io/YOUR_PROJECT/run
```

2. Cloud Runでのサービス起動

- GCPコンソールでCloud Runの画面に移動
- 以下の条件でサービスを作成
    - リージョン: `us-central1`
    - サービス名: `run`

3. Firebaseへのデプロイ

```
$ yarn install
$ yarn build
$ yarn firebase login
$ yarn firebase use YOUR_PROJECT
$ yarn deploy
```

### 確認

次のURLが提供されます。

- Cloud Functions本体が保持しているURL
- Cloud Runが保持しているURL
- Firebase HostingのURL（それぞれ、`/fun`,`/run`がリライト構成として各サービスにフォワード）

アプリケーション構成上となるURLにアクセスすれば、次の情報をJSONでレスポンスします。

- リクエスト時のパス情報
- アプリケーションが受け取った全ヘッダー情報

## ライセンス

Apache 2.0
