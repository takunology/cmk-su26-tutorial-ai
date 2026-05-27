execute if score .timer global matches 1.. run scoreboard players remove .timer global 1

execute if score .stage global matches 1 as @a[hasitem={item=oak_log}] at @s run function rc_player_has_oak_log

execute if score .stage global matches 3 if score .timer global matches 40 as @a run tellraw @s {"rawtext":[{"text":"エージェント: 教わった通りに、オークの原木を切ります。"}]}
execute if score .stage global matches 3 if score .timer global matches 0 as @a at @s run function rc_cut_wood_done

execute if score .stage global matches 5 if score .timer global matches 35 as @a run tellraw @s {"rawtext":[{"text":"エージェント: 原木をクラフト欄に置きます。"}]}
execute if score .stage global matches 5 if score .timer global matches 0 as @a at @s run function rc_oak_planks_done

execute if score .stage global matches 7 if score .timer global matches 35 as @a run tellraw @s {"rawtext":[{"text":"エージェント: 板材を2x2に並べて、作業台を作ります。"}]}
execute if score .stage global matches 7 if score .timer global matches 0 as @a at @s run function rc_crafting_table_done

execute if score .stage global matches 9 if score .timer global matches 35 as @a run tellraw @s {"rawtext":[{"text":"エージェント: 板材を縦に並べて、木の棒を作ります。"}]}
execute if score .stage global matches 9 if score .timer global matches 0 as @a at @s run function rc_sticks_done

execute if score .stage global matches 11 if score .timer global matches 35 as @a run tellraw @s {"rawtext":[{"text":"エージェント: 作業台で、木のつるはしを作ります。"}]}
execute if score .stage global matches 11 if score .timer global matches 0 as @a at @s run function rc_wood_pickaxe_done

execute if score .stage global matches 13 if score .timer global matches 35 as @a run tellraw @s {"rawtext":[{"text":"エージェント: 木のつるはしで丸石をほっています..."}]}
execute if score .stage global matches 13 if score .timer global matches 0 as @a at @s run function rc_cobblestone_done

execute if score .stage global matches 15 if score .timer global matches 35 as @a run tellraw @s {"rawtext":[{"text":"エージェント: 丸石を8個ならべて、かまどを作ります。"}]}
execute if score .stage global matches 15 if score .timer global matches 0 as @a at @s run function rc_furnace_done

execute if score .stage global matches 18 if score .timer global matches 160 as @a run tellraw @s {"rawtext":[{"text":"エージェント: オークの原木を切ります。"}]}
execute if score .stage global matches 18 if score .timer global matches 135 as @a run tellraw @s {"rawtext":[{"text":"エージェント: 原木からオークの板材を作ります。"}]}
execute if score .stage global matches 18 if score .timer global matches 110 as @a run tellraw @s {"rawtext":[{"text":"エージェント: 板材から作業台を作ります。"}]}
execute if score .stage global matches 18 if score .timer global matches 85 as @a run tellraw @s {"rawtext":[{"text":"エージェント: 板材から木の棒を作ります。"}]}
execute if score .stage global matches 18 if score .timer global matches 60 as @a run tellraw @s {"rawtext":[{"text":"エージェント: 作業台で木のつるはしを作ります。"}]}
execute if score .stage global matches 18 if score .timer global matches 35 as @a run tellraw @s {"rawtext":[{"text":"エージェント: 木のつるはしで丸石をほります。"}]}
execute if score .stage global matches 18 if score .timer global matches 10 as @a run tellraw @s {"rawtext":[{"text":"エージェント: 丸石を使ってかまどを作ります。"}]}
execute if score .stage global matches 18 if score .timer global matches 0 as @a at @s run function rc_prompt_done
