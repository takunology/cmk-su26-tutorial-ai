### @flyoutOnly true
### @explicitHints true
### @next tutorials/stone-pickaxe

# ステップ 1: 木のツルハシを作ろう

サバイバルが始まったよ！最初の道具、**木のツルハシ** を作って石を集めよう。

## ステップ 1

「レシピクラフト」カテゴリから ``||craft:このレシピは として である||`` ブロックを取り出して、コードの中に入れよう。3x3 のマスをツルハシの形に塗って、結果のスロットには ``||craft:木のツルハシ||`` をはめ込んでね。準備ができたら ゲーム画面で `run` とチャットしよう。

正解なら **石が5個もらえる** よ。

#### ~ tutorialhint
木のツルハシの形 (5マス):
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
