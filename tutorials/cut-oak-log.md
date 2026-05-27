### @flyoutOnly true
### @explicitHints true
### @next tutorials/oak-planks

# エージェントに木を切る作業を教えよう

あなたが集めたオークの原木を見て、エージェントが木を切る作業を知りたがっています。

## ステップ 1

「AI学習」カテゴリから ``||craft:エージェントに学習させる||`` ブロックを取り出して、その中に ``||craft:エージェントに をおしえる||`` を入れ、``||craft:オークの原木を切る||`` をはめ込もう。準備ができたら実行ボタンを押してね。

正しく組めていたら、エージェントが木を切りに行きます。

```ghost
craft.onTeachAgent(function () {
    craft.teachTask(craft.cutOakLog())
})
```

```template
craft.onTeachAgent(function () {

})
```

```package
cmk-su26-tutorial-ai=github:takunology/cmk-su26-tutorial-ai
```
