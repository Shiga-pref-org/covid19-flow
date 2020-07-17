# COVID19-flow

このリポジトリは[滋賀県新型コロナウィルス感染症対策サイト](https://stopcovid19.pref.shiga.jp/)（本サイト）の中の[新型コロナウイルス感染症に関する支援制度](https://stopcovid19.pref.shiga.jp/support/01_01/)のページを生成するためのものです。

## develop

開発には Node.js が必要です。

```shell
$ git clone git@github.com:kamataryo/covid19-flow.git
$ cd covid19-flow
$ npm install
$ npm run build # テンプレートからプレビュー用の HTML を生成
$ npm start     # 生成したプレビュー用の HTML をブラウザで表示
```

## Contributions

`/templates/contents` を修正することで文言修正などを行うことができます。

次の Wiki には、 Gitpod というクラウド IDE を使ってクラウド環境で修正を行う方法についてのメモがあります。
https://github.com/Shiga-pref-org/covid19-flow/wiki
