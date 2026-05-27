# recipe-craft

MakeCode Minecraft extension and tutorial for "recipe inference" — students
fill a 3x3 silhouette of a tool and ask the classifier to identify it.
The result is reported back into the world via the shared scoreboard
convention `.output1 global`, and a behavior-pack mcfunction surfaces
title/actionbar feedback.

## Use as Extension

* Open [https://minecraft.makecode.com/](https://minecraft.makecode.com/)
* **New Project** → gear icon → **Extensions**
* Paste `https://github.com/takunology/cmk-su26-tutorial-ai` and import

## Use as Tutorial

Set the world's `education.json` `codebuilder.defaulturi` to:

```
https://minecraft.makecode.com/#tutorial:github:takunology/cmk-su26-tutorial-ai/tutorials/cut-oak-log
```

The matching behavior pack source is in `behavior_packs/recipe_craft_BP`.
After adding it to the world, start the guided flow with:

```
/function rc_open_intro
```

## Blocks

- `pattern (3x3 grid)` — value block returning a normalized 9-char string of `0`/`1`.
- `classify <pattern> as <result>` — compares against the expected silhouette for the chosen result and sets `.output1 global` to `1` or `0`, then calls `/function check_result`.
- `teach agent <task>` — records a non-crafting task such as cutting logs or mining cobblestone and calls `/function check_task`.
- `run prompt <six tasks>` — checks whether the full agent prompt is composed in the intended order and calls `/function check_prompt`.
- `reset answer` — clears the scoreboard back to `0`.

## World-side contract

This extension assumes the host world ships a behavior pack that:

1. Adds a scoreboard objective named `global` (dummy).
2. Provides `functions/check_result.mcfunction` that reads `.output1 global` and surfaces feedback (e.g. via `title @s actionbar ...`).

A reference BP that does both is included alongside this repository's
intended host world; see the world's `behavior_packs/recipe_craft_BP/`
for the matching mcfunctions.
