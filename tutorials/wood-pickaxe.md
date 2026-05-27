### @flyoutOnly true
### @explicitHints true
### @next tutorials/mine-cobblestone

# エージェントに木のつるはしを教えよう

板材と木の棒がそろいました。エージェントに木のつるはしの作り方を教えよう。

## ステップ 1

「レシピクラフト」カテゴリから ``||craft:このレシピは として である||`` ブロックを取り出して、コードの中に入れよう。3x3 のマスをつるはしの形に塗って、結果のスロットには ``||craft:木のつるはし||`` をはめ込んでね。準備ができたらゲーム画面で `run` とチャットしよう。

正解なら、エージェントが「おぼえました！」と返事をします。

#### ~ tutorialhint
木のつるはしの形 (5マス):
- 1段目: 3マス全部を塗る
- 2段目: まん中の1マスだけ
- 3段目: まん中の1マスだけ

```ghost
craft.classifyAs(craft.craftPattern(`
. . .
. . .
. . .
`), craft.woodPickaxe())
craft.resetAnswer()
```

```template
player.onChat("run", function () {

})
```

```package
cmk-su26-tutorial-ai=github:takunology/cmk-su26-tutorial-ai
```
