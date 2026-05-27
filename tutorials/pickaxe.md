### @flyoutOnly true
### @hideIteration true
### @explicitHints true

# レシピクラフト - 木のツルハシ

## ステップ 1

「レシピクラフト」カテゴリから ``||craft:このレシピは として である||`` ブロックを取り出して、コードの中に入れよう。3x3 のマスをクリックして、木のツルハシのレシピになるように木の板を置いてみよう。

#### ~ tutorialhint
マスをクリックすると黒くなり、もう一度クリックすると消えます。結果のドロップダウンから **木のツルハシ** を選ぼう。

## ステップ 2

ツルハシは「上の段がぜんぶ木の板」「まん中の列を上から下まで木の板」にすると作れるよ。

#### ~ tutorialhint
シルエットの形は、上の段3マスと、まん中の縦1列を黒く塗ります。合計5マス。

## ステップ 3

ゲーム画面に戻って、チャットで ``go`` と打ち込んでみよう。正解なら緑色で **正解！** と表示されるよ。

#### ~ tutorialhint
わざと違う答えを選ぶと **違うみたい** が出ます。間違えたら ``||craft:答えをリセット||`` を使ってもう一度挑戦できます。

```ghost
craft.classifyAs(craft.craftPattern(`
. . .
. . .
. . .
`), craft.Result.Pickaxe)
craft.resetAnswer()
```

```template
player.onChat("go", function () {
    craft.classifyAs(craft.craftPattern(`
    . . .
    . . .
    . . .
    `), craft.Result.Pickaxe)
})
```

```package
recipe-craft=github:takunology/cmk-su26-tutorial-ai
```
