### @flyoutOnly true
### @explicitHints true

# レシピクラフト

## ステップ 1: 木のツルハシを作ろう

サバイバルが始まったよ。最初の道具、**木のツルハシ** を作ろう。

「レシピクラフト」カテゴリから ``||craft:このレシピは として である||`` ブロックを取り出して、コードの中に入れよう。3x3 のマスをツルハシの形に塗って、結果のスロットには ``||craft:木のツルハシ||`` をはめ込んでね。準備ができたら ゲーム画面で `run` とチャットしよう。正解なら **石が手に入る** よ。

#### ~ tutorialhint
木のツルハシの形 (5マス):
- 1段目: 3マス全部を塗る
- 2段目: まん中の1マスだけ
- 3段目: まん中の1マスだけ

## ステップ 2: 石のツルハシを作ろう

石が集まったね。次は石を使って **石のツルハシ** を作って、もっと固いブロック ( 石炭 ) を掘れるようにしよう。

形は木のツルハシと同じだけど、結果のスロットを ``||craft:石のツルハシ||`` に差し替えてみよう。

#### ~ tutorialhint
形は前と同じ。結果ブロックだけ ``||craft:石のツルハシ||`` に交換しよう。正解なら **石炭が手に入る** よ。

## ステップ 3: かまどを作ろう

石炭をゲットしたら、最後は **かまど** を作って料理や精錬の準備をしよう。今度は形が変わるよ。結果のスロットには ``||craft:かまど||`` をはめてね。

#### ~ tutorialhint
かまどの形 (まん中だけ空いたドーナツ型 ・ 8マス):
- 1段目: 3マス全部
- 2段目: 左と右の2マス (まん中は空)
- 3段目: 3マス全部

正解すると **エージェントがかまどを設置** してくれるよ。

```ghost
craft.classifyAs(craft.craftPattern(`
. . .
. . .
. . .
`), craft.woodPickaxe())
craft.classifyAs(craft.craftPattern(`
. . .
. . .
. . .
`), craft.stonePickaxe())
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
