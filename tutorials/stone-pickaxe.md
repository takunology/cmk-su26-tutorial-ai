### @flyoutOnly true
### @explicitHints true
### @next tutorials/furnace

# ステップ 2: 石のツルハシを作ろう

石が集まったね！次は石を使って **石のツルハシ** を作って、もっと固いブロック ( 石炭 ) を掘れるようにしよう。

## ステップ 1

形は木のツルハシと同じだよ。``||craft:レシピをこたえる||`` の中の ``||craft:クラフト で をつくる||`` の結果スロットを ``||craft:石のツルハシ||`` に差し替えて、実行ボタンを押そう。

正解なら **石炭が5個もらえる** よ。

#### ~ tutorialhint
形は前と同じ:
- 1段目: 3マス全部を塗る
- 2段目: まん中の1マスだけ
- 3段目: まん中の1マスだけ

結果ブロックだけ ``||craft:石のツルハシ||`` に交換すればOK。

```ghost
craft.onAnswerRecipe(function () {
    craft.classifyAs(craft.craftPattern(`
. . .
. . .
. . .
`), craft.stonePickaxe())
})
```

```template
craft.onAnswerRecipe(function () {

})
```

```package
cmk-su26-tutorial-ai=github:takunology/cmk-su26-tutorial-ai
```
