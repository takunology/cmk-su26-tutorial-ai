### @flyoutOnly true
### @explicitHints true

# ステップ 3: かまどを作ろう

石炭をゲットしたら、最後は **かまど** を作って料理や精錬の準備をしよう。

## ステップ 1

今度は形が変わるよ。8マスのドーナツ型 (まん中だけ空) に塗って、結果のスロットには ``||craft:かまど||`` をはめてね。準備ができたら `run` とチャットしよう。

正解すると **エージェントがプレイヤーの目の前にかまどを設置** してくれるよ。

#### ~ tutorialhint
かまどの形 (8マス):
- 1段目: 3マス全部
- 2段目: 左と右の2マス (まん中は空)
- 3段目: 3マス全部

```ghost
craft.classifyAs(craft.craftPattern(`
. . .
. . .
. . .
`), craft.furnace())
craft.resetAnswer()
```

```template
player.onChat("run", function () {

})
```

```package
cmk-su26-tutorial-ai=github:takunology/cmk-su26-tutorial-ai
```
