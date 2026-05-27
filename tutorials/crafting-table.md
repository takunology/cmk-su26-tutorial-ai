### @flyoutOnly true
### @explicitHints true
### @next tutorials/sticks

# エージェントに作業台の作り方を教えよう

木のつるはしを作るには、3x3 のクラフトができる作業台が必要です。

## ステップ 1

``||craft:クラフト で をつくる||`` ブロックを使って、2x2 のマスを全部塗り、結果に ``||craft:作業台||`` をはめ込もう。準備ができたら `run` とチャットしてね。

#### ~ tutorialhint
作業台の形:
- 2x2 の4マス全部を塗る

```ghost
craft.classifyAs(craft.craftPattern2x2(`
. .
. .
`), craft.craftingTable())
craft.resetAnswer()
```

```template
player.onChat("run", function () {

})
```

```package
cmk-su26-tutorial-ai=github:takunology/cmk-su26-tutorial-ai
```
