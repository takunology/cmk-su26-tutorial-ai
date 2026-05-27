### @flyoutOnly true
### @explicitHints true
### @next tutorials/sticks

# エージェントに作業台の作り方を教えよう

木のつるはしを作るには、3x3 のクラフトができる作業台が必要です。

## ステップ 1

「AI学習」カテゴリから ``||craft:レシピをこたえる||`` ブロックを取り出して、その中に ``||craft:クラフト で をつくる||`` を入れよう。2x2 のマスを全部塗り、結果に ``||craft:作業台||`` をはめ込んだら、実行ボタンを押してね。

#### ~ tutorialhint
作業台の形:
- 2x2 の4マス全部を塗る

```ghost
craft.onAnswerRecipe(function () {
    craft.classifyAs(craft.craftPattern2x2(`
. .
. .
`), craft.craftingTable())
})
```

```template
craft.onAnswerRecipe(function () {

})
```

```package
cmk-su26-tutorial-ai=github:takunology/cmk-su26-tutorial-ai
```
