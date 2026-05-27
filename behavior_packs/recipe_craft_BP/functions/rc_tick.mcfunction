execute if score .timer global matches 1.. run scoreboard players remove .timer global 1

execute if score .stage global matches 1 if score .timer global matches 40 as @a run tellraw @s {"rawtext":[{"text":"エージェント: まずは私がお手本を見せます。"}]}
execute if score .stage global matches 1 if score .timer global matches 20 as @a run tellraw @s {"rawtext":[{"text":"エージェント: オークの原木を切っています..."}]}
execute if score .stage global matches 1 if score .timer global matches 0 as @a at @s run function rc_demo_wood_done

execute if score .stage global matches 3 if score .timer global matches 40 as @a run tellraw @s {"rawtext":[{"text":"エージェント: 教わった通りに、オークの原木を切ります。"}]}
execute if score .stage global matches 3 if score .timer global matches 0 as @a at @s run function rc_cut_wood_done

execute if score .stage global matches 5 if score .timer global matches 35 as @a run tellraw @s {"rawtext":[{"text":"エージェント: 原木をクラフト欄に置きます。"}]}
execute if score .stage global matches 5 if score .timer global matches 0 as @a at @s run function rc_oak_planks_done

execute if score .stage global matches 7 if score .timer global matches 35 as @a run tellraw @s {"rawtext":[{"text":"エージェント: 板材を縦に並べて、木の棒を作ります。"}]}
execute if score .stage global matches 7 if score .timer global matches 0 as @a at @s run function rc_sticks_done

execute if score .stage global matches 9 if score .timer global matches 35 as @a run tellraw @s {"rawtext":[{"text":"エージェント: 板材と木の棒で、木のつるはしを作ります。"}]}
execute if score .stage global matches 9 if score .timer global matches 0 as @a at @s run function rc_wood_pickaxe_done

execute if score .stage global matches 11 if score .timer global matches 35 as @a run tellraw @s {"rawtext":[{"text":"エージェント: 木のつるはしで丸石をほっています..."}]}
execute if score .stage global matches 11 if score .timer global matches 0 as @a at @s run function rc_cobblestone_done

execute if score .stage global matches 13 if score .timer global matches 35 as @a run tellraw @s {"rawtext":[{"text":"エージェント: 丸石を8個ならべて、かまどを作ります。"}]}
execute if score .stage global matches 13 if score .timer global matches 0 as @a at @s run function rc_furnace_done

execute if score .stage global matches 16 if score .timer global matches 140 as @a run tellraw @s {"rawtext":[{"text":"エージェント: オークの原木を切ります。"}]}
execute if score .stage global matches 16 if score .timer global matches 115 as @a run tellraw @s {"rawtext":[{"text":"エージェント: 原木からオークの板材を作ります。"}]}
execute if score .stage global matches 16 if score .timer global matches 90 as @a run tellraw @s {"rawtext":[{"text":"エージェント: 板材から木の棒を作ります。"}]}
execute if score .stage global matches 16 if score .timer global matches 65 as @a run tellraw @s {"rawtext":[{"text":"エージェント: 木のつるはしを作ります。"}]}
execute if score .stage global matches 16 if score .timer global matches 40 as @a run tellraw @s {"rawtext":[{"text":"エージェント: 木のつるはしで丸石をほります。"}]}
execute if score .stage global matches 16 if score .timer global matches 15 as @a run tellraw @s {"rawtext":[{"text":"エージェント: 丸石を使ってかまどを作ります。"}]}
execute if score .stage global matches 16 if score .timer global matches 0 as @a at @s run function rc_prompt_done
