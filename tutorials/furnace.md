### @flyoutOnly true
### @explicitHints true
### @next tutorials/agent-prompt

# エージェントにかまどを教えよう

今度は、エージェントに **かまど** の形を教えます。

## ステップ 1

形が変わるよ。``||craft:レシピをこたえる||`` の中の ``||craft:クラフト で をつくる||`` で、8マスのドーナツ型 (まん中だけ空) に塗って、結果スロットには ``||craft:かまど||`` をはめてね。準備ができたら実行ボタンを押そう。

正解なら、エージェントが「おぼえました！」と返事をします。

#### ~ tutorialhint
かまどの形 (8マス):
- 1段目: 3マス全部
- 2段目: 左と右の2マス (まん中は空)
- 3段目: 3マス全部

```ghost
craft.onAnswerRecipe(function () {
    craft.classifyAs(craft.craftPattern(`
. . .
. . .
. . .
`), craft.furnace())
})
```

```template
craft.onAnswerRecipe(function () {

})
```

```package
cmk-su26-tutorial-ai=github:takunology/cmk-su26-tutorial-ai
```
