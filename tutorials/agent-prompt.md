### @flyoutOnly true
### @explicitHints true

# エージェントにまとめてお願いしよう

木のつるはしとかまどの作り方を、エージェントはもう覚えました。最後は、材料集めから設置までの作業を順番につなげたプロンプトを組みます。

## ステップ 1

「AI学習」カテゴリから ``||craft:プロンプトを実行||`` ブロックを取り出して、7つの作業パズルを正しい順番にはめ込もう。準備ができたらゲーム画面で `run` とチャットしてね。

正しく組めていたら、エージェントが「かまどを作るところまで作業しますか？」と確認します。

#### ~ tutorialhint
順番は大事です。
- 1つ目: オークの原木を切る
- 2つ目: オークの板材をつくる
- 3つ目: 作業台をつくる
- 4つ目: 木の棒をつくる
- 5つ目: 木のつるはしをつくる
- 6つ目: 丸石をほる
- 7つ目: かまどをつくる

```ghost
craft.runPrompt(craft.cutOakLog(), craft.makeOakPlanks(), craft.makeCraftingTable(), craft.makeSticks(), craft.makeWoodPickaxe(), craft.mineCobblestone(), craft.makeFurnace())
craft.resetAnswer()
```

```template
player.onChat("run", function () {

})
```

```package
cmk-su26-tutorial-ai=github:takunology/cmk-su26-tutorial-ai
```
