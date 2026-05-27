### @flyoutOnly true
### @explicitHints true
### @next tutorials/crafting-table

# エージェントに板材の作り方を教えよう

集めたオークの原木から、オークの板材を作るレシピを教えます。

## ステップ 1

「AI学習」カテゴリから ``||craft:レシピをこたえる||`` ブロックを取り出して、その中に ``||craft:クラフト で をつくる||`` を入れよう。3x3 のどこか1マスだけを塗り、結果に ``||craft:オークの板材||`` をはめ込んだら、実行ボタンを押してね。

#### ~ tutorialhint
オークの板材の形:
- どこか1マスだけを塗る

```ghost
craft.onAnswerRecipe(function () {
    craft.classifyAs(craft.craftPattern(`
. . .
. . .
. . .
`), craft.oakPlanks())
})
```

```template
craft.onAnswerRecipe(function () {

})
```

```package
cmk-su26-tutorial-ai=github:takunology/cmk-su26-tutorial-ai
```
