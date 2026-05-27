### @flyoutOnly true
### @explicitHints true
### @next tutorials/oak-planks

# エージェントに木を切る作業を教えよう

あなたが集めたオークの原木を見て、エージェントが木を切る作業を知りたがっています。

## ステップ 1

「AI学習」カテゴリから ``||craft:エージェントに をおしえる||`` ブロックを取り出して、``||craft:オークの原木を切る||`` をはめ込もう。準備ができたらゲーム画面で `run` とチャットしてね。

正しく組めていたら、エージェントが木を切りに行きます。

```ghost
craft.teachTask(craft.cutOakLog())
craft.resetAnswer()
```

```template
player.onChat("run", function () {

})
```

```package
cmk-su26-tutorial-ai=github:takunology/cmk-su26-tutorial-ai
```
