### @flyoutOnly true
### @hideIteration true
### @explicitHints true

# レシピクラフト - 木のツルハシ

## ステップ 1

「クラフト」カテゴリから ``||craft:このレシピは||`` ブロックをコードの中に入れよう。3x3 のマスをクリックして、木のツルハシのレシピになるように木の板を置いてみよう。

#### ~ tutorialhint
**クラフト** カテゴリを開いて、``||craft:このレシピは として である||`` ブロックを取り出そう。マスをクリックすると黒くなり、もう一度クリックすると消えます。

## ステップ 2

ツルハシは上の段がぜんぶ木の板、まん中の列を上から下まで木の板にすると作れるよ。結果のドロップダウンから **木のツルハシ** を選ぼう。

#### ~ tutorialhint
シルエットは こんな形:

```
■ ■ ■
. ■ .
. ■ .
```

## ステップ 3

ゲーム画面に戻って、チャットで ``go`` と打ち込んでみよう。正解なら緑色で **正解！** と表示されるよ。

#### ~ tutorialhint
わざと違う答えを選ぶと **違うみたい** が出ます。間違えたら ``||craft:答えをリセット||`` を使ってもう一度挑戦できます。

```ghost
craft.classifyAs(craft.craftPattern(``), craft.Result.Pickaxe)
craft.resetAnswer()
```

```template
player.onChat("go", function () {
    craft.classifyAs(craft.craftPattern(``), craft.Result.Pickaxe)
})
```

```package
recipe-craft=github:takunology/cmk-su26-tutorial-ai
```
