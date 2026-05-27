scoreboard players set .stage global 4
give @s oak_log 3
tellraw @s {"rawtext":[{"text":"エージェント: オークの原木を集めました！"}]}
dialogue change @e[type=npc,tag=recipe_agent,c=1] rc_next_oak_planks @s
dialogue open @e[type=npc,tag=recipe_agent,c=1] @s rc_next_oak_planks
