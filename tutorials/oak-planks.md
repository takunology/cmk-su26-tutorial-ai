### @flyoutOnly true
### @explicitHints true
### @next tutorials/sticks

# エージェントに板材の作り方を教えよう

集めたオークの原木から、オークの板材を作るレシピを教えます。

## ステップ 1

``||craft:このレシピは として である||`` ブロックを使って、3x3 のどこか1マスだけを塗り、結果に ``||craft:オークの板材||`` をはめ込もう。準備ができたら `run` とチャットしてね。

#### ~ tutorialhint
オークの板材の形:
- どこか1マスだけを塗る

```ghost
craft.classifyAs(craft.craftPattern(`
. . .
. . .
. . .
`), craft.oakPlanks())
craft.resetAnswer()
```

```template
player.onChat("run", function () {

})
```

```package
cmk-su26-tutorial-ai=github:takunology/cmk-su26-tutorial-ai
```
