### @flyoutOnly true
### @hideIteration true
### @explicitHints true

# Recipe Craft - Wooden Pickaxe

## Step 1

Look at the silhouette in the 3x3 grid. Each filled square is a wooden plank, each empty square is air. Drag the ``||craft:pattern||`` block into your code to inspect what the pattern looks like.

#### ~ tutorialhint
Open the **Recipe Craft** category in the flyout and grab the ``||craft:pattern||`` block. Click cells in the grid to fill or clear them.

## Step 2

Use ``||craft:classify ... as wooden pickaxe||`` to tell the world what you think this recipe makes. The world will print **Correct!** or **Not quite** in the actionbar.

#### ~ tutorialhint
The classify block takes a pattern and a result. Fill the top row and the middle column going down (silhouette ``111 / 010 / 010``), and pick **wooden pickaxe** in the dropdown.

## Step 3

Try a wrong answer to see the feedback flip. Use ``||craft:reset answer||`` between attempts so a stale **Correct!** doesn't linger.

#### ~ tutorialhint
Change the result dropdown to **wooden sword** or **wooden axe** and run again. The actionbar should say **Not quite**.

```ghost
craft.craftPattern(`
. . .
. . .
. . .
`)
craft.classifyAs(craft.craftPattern(``), CraftResult.Pickaxe)
craft.resetAnswer()
```

```template
player.onChat("go", function () {
    craft.classifyAs(craft.craftPattern(``), CraftResult.Pickaxe)
})
```

```package
recipe-craft=github:takunology/recipe-craft
```
