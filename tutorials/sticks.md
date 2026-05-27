### @flyoutOnly true
### @explicitHints true
### @next tutorials/wood-pickaxe

# エージェントに木の棒の作り方を教えよう

木のつるはしには、木の棒が必要です。板材を縦に2つ並べるレシピを教えます。

## ステップ 1

「AI学習」カテゴリから ``||craft:レシピをこたえる||`` ブロックを取り出して、その中に ``||craft:クラフト で をつくる||`` を入れよう。まん中に縦2マスの形を作り、結果に ``||craft:木の棒||`` をはめ込んだら、実行ボタンを押してね。

#### ~ tutorialhint
木の棒の形:
- 1段目: まん中の1マス
- 2段目: まん中の1マス
- 3段目: 空

```ghost
craft.onAnswerRecipe(function () {
    craft.classifyAs(craft.craftPattern(`
. . .
. . .
. . .
`), craft.sticks())
})
```

```template
craft.onAnswerRecipe(function () {

})
```

```package
cmk-su26-tutorial-ai=github:takunology/cmk-su26-tutorial-ai
```
