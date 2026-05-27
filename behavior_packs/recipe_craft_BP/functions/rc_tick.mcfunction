execute if score .stage global matches 1 as @a[hasitem={item=wooden_pickaxe,location=slot.weapon.mainhand}] run function rc_player_has_wood_pickaxe
execute if score .stage global matches 5 as @a[hasitem={item=furnace,location=slot.weapon.mainhand}] run function rc_player_has_furnace

execute if score .timer global matches 1.. run scoreboard players remove .timer global 1

execute if score .stage global matches 4 if score .timer global matches 60 as @a run tellraw @s {"rawtext":[{"text":"エージェント: 材料をたしかめています..."}]}
execute if score .stage global matches 4 if score .timer global matches 30 as @a run tellraw @s {"rawtext":[{"text":"エージェント: 木のつるはしを組み立てています..."}]}
execute if score .stage global matches 4 if score .timer global matches 0 as @a at @s run function rc_wood_done

execute if score .stage global matches 7 if score .timer global matches 60 as @a run tellraw @s {"rawtext":[{"text":"エージェント: 丸石を8個ならべています..."}]}
execute if score .stage global matches 7 if score .timer global matches 30 as @a run tellraw @s {"rawtext":[{"text":"エージェント: 真ん中を空けて、かまどの形にしています..."}]}
execute if score .stage global matches 7 if score .timer global matches 0 as @a at @s run function rc_furnace_done

execute if score .stage global matches 9 if score .timer global matches 140 as @a run tellraw @s {"rawtext":[{"text":"エージェント: オークの原木を切ります。"}]}
execute if score .stage global matches 9 if score .timer global matches 115 as @a run tellraw @s {"rawtext":[{"text":"エージェント: 原木からオークの板材を作ります。"}]}
execute if score .stage global matches 9 if score .timer global matches 90 as @a run tellraw @s {"rawtext":[{"text":"エージェント: 板材から木の棒を作ります。"}]}
execute if score .stage global matches 9 if score .timer global matches 65 as @a run tellraw @s {"rawtext":[{"text":"エージェント: 木のつるはしを作ります。"}]}
execute if score .stage global matches 9 if score .timer global matches 40 as @a run tellraw @s {"rawtext":[{"text":"エージェント: 木のつるはしで丸石をほります。"}]}
execute if score .stage global matches 9 if score .timer global matches 15 as @a run tellraw @s {"rawtext":[{"text":"エージェント: 丸石を使ってかまどを作ります。"}]}
execute if score .stage global matches 9 if score .timer global matches 0 as @a at @s run function rc_prompt_done
