scoreboard players set .stage global 12
give @s cobblestone 8
tellraw @s {"rawtext":[{"text":"エージェント: 丸石を集めました！"}]}
dialogue change @e[type=npc,tag=recipe_agent,c=1] rc_teach_furnace @s
dialogue open @e[type=npc,tag=recipe_agent,c=1] @s rc_teach_furnace
