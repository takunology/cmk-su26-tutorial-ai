### @flyoutOnly true
### @explicitHints true
### @next tutorials/furnace

# ステップ 2: 石のツルハシを作ろう

石が集まったね！次は石を使って **石のツルハシ** を作って、もっと固いブロック ( 石炭 ) を掘れるようにしよう。

## ステップ 1

形は木のツルハシと同じだよ。結果のスロットを ``||craft:石のツルハシ||`` に差し替えて、ゲーム画面で `run` とチャットしよう。

正解なら **石炭が5個もらえる** よ。

#### ~ tutorialhint
形は前と同じ:
- 1段目: 3マス全部を塗る
- 2段目: まん中の1マスだけ
- 3段目: まん中の1マスだけ

結果ブロックだけ ``||craft:石のツルハシ||`` に交換すればOK。

```ghost
craft.classifyAs(craft.craftPattern(`
. . .
. . .
. . .
`), craft.stonePickaxe())
craft.resetAnswer()
```

```template
player.onChat("run", function () {

})
```

```package
cmk-su26-tutorial-ai=github:takunology/cmk-su26-tutorial-ai
```
