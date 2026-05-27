### @flyoutOnly true
### @explicitHints true

# エージェントにまとめてお願いしよう

ここまでの作業を、エージェントはぜんぶ覚えました。最後は、材料集めから設置までの作業を順番にならべたプロンプトを組みます。

## ステップ 1

「AI学習」カテゴリから ``||craft:プロンプトを実行する||`` ブロックを取り出して、その中に **作業ブロックを正しい順番に縦に積もう**。準備ができたら実行ボタンを押してね。

正しく組めていたら、エージェントが「かまどを作るところまで作業しますか？」と確認します。

#### ~ tutorialhint
順番は大事です。上から順に積もう。
- 1つ目: オークの原木を切る
- 2つ目: オークの板材をつくる
- 3つ目: 作業台をつくる
- 4つ目: 木の棒をつくる
- 5つ目: 木のつるはしをつくる
- 6つ目: 丸石をほる
- 7つ目: かまどをつくる

```ghost
craft.onRunPrompt(function () {
    craft.promptCutOakLog()
    craft.promptMakeOakPlanks()
    craft.promptMakeCraftingTable()
    craft.promptMakeSticks()
    craft.promptMakeWoodPickaxe()
    craft.promptMineCobblestone()
    craft.promptMakeFurnace()
})
```

```template
craft.onRunPrompt(function () {

})
```

```package
cmk-su26-tutorial-ai=github:takunology/cmk-su26-tutorial-ai
```
