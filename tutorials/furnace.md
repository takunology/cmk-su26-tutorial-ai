### @flyoutOnly true
### @explicitHints true
### @next tutorials/agent-prompt

# エージェントにかまどを教えよう

今度は、エージェントに **かまど** の形を教えます。

## ステップ 1

今度は形が変わるよ。8マスのドーナツ型 (まん中だけ空) に塗って、結果のスロットには ``||craft:かまど||`` をはめてね。準備ができたら `run` とチャットしよう。

正解なら、エージェントが「おぼえました！」と返事をします。

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
