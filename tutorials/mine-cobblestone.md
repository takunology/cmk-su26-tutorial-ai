### @flyoutOnly true
### @explicitHints true
### @next tutorials/furnace

# エージェントに丸石をほる作業を教えよう

木のつるはしができたので、次は丸石をほる作業をエージェントに教えます。

## ステップ 1

``||craft:エージェントに をおしえる||`` ブロックに、``||craft:丸石をほる||`` をはめ込もう。準備ができたらゲーム画面で `run` とチャットしてね。

正しく組めていたら、エージェントが丸石をほりに行きます。

```ghost
craft.teachTask(craft.mineCobblestone())
craft.resetAnswer()
```

```template
player.onChat("run", function () {

})
```

```package
cmk-su26-tutorial-ai=github:takunology/cmk-su26-tutorial-ai
```
