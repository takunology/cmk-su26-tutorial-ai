### @flyoutOnly true
### @explicitHints true
### @next tutorials/mine-cobblestone

# エージェントに木のつるはしを教えよう

板材と木の棒がそろいました。エージェントに木のつるはしの作り方を教えよう。

## ステップ 1

「AI学習」カテゴリから ``||craft:レシピをこたえる||`` ブロックを取り出して、その中に ``||craft:クラフト で をつくる||`` を入れよう。3x3 のマスをつるはしの形に塗って、結果に ``||craft:木のつるはし||`` をはめ込んだら、実行ボタンを押してね。

正解なら、エージェントが「おぼえました！」と返事をします。

#### ~ tutorialhint
木のつるはしの形 (5マス):
- 1段目: 3マス全部を塗る
- 2段目: まん中の1マスだけ
- 3段目: まん中の1マスだけ

```ghost
craft.onAnswerRecipe(function () {
    craft.classifyAs(craft.craftPattern(`
. . .
. . .
. . .
`), craft.woodPickaxe())
})
```

```template
craft.onAnswerRecipe(function () {

})
```

```package
cmk-su26-tutorial-ai=github:takunology/cmk-su26-tutorial-ai
```
