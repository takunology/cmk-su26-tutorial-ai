### @flyoutOnly true
### @explicitHints true

# エージェントにまとめてお願いしよう

木のつるはしとかまどの作り方を、エージェントはもう覚えました。最後は、2つの作業を順番につなげたプロンプトを組みます。

## ステップ 1

「レシピクラフト」カテゴリから ``||craft:プロンプトを実行||`` ブロックを取り出して、1つ目に ``||craft:木のつるはしをつくる||``、2つ目に ``||craft:かまどをつくる||`` をはめ込もう。準備ができたらゲーム画面で `run` とチャットしてね。

正しく組めていたら、エージェントが「かまどを作るところまで作業しますか？」と確認します。

#### ~ tutorialhint
順番は大事です。
- 1つ目: 木のつるはしをつくる
- 2つ目: かまどをつくる

```ghost
craft.runPrompt(craft.makeWoodPickaxe(), craft.makeFurnace())
craft.resetAnswer()
```

```template
player.onChat("run", function () {

})
```

```package
cmk-su26-tutorial-ai=github:takunology/cmk-su26-tutorial-ai
```
