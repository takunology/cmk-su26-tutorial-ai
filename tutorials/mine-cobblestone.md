### @flyoutOnly true
### @explicitHints true
### @next tutorials/furnace

# エージェントに丸石をほる作業を教えよう

木のつるはしができたので、次は丸石をほる作業をエージェントに教えます。

## ステップ 1

「AI学習」カテゴリから ``||craft:エージェントに学習させる||`` ブロックを取り出して、その中に ``||craft:エージェントに をおしえる||`` を入れ、``||craft:丸石をほる||`` をはめ込もう。準備ができたら実行ボタンを押してね。

正しく組めていたら、エージェントが丸石をほりに行きます。

```ghost
craft.onTeachAgent(function () {
    craft.teachTask(craft.AgentTask.MineCobblestone)
})
```

```template
craft.onTeachAgent(function () {

})
```

```package
cmk-su26-tutorial-ai=github:takunology/cmk-su26-tutorial-ai
```
