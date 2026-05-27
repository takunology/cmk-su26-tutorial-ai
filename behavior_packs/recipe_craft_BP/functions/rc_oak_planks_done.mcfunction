scoreboard players set .stage global 6
give @s oak_planks 4
tellraw @s {"rawtext":[{"text":"エージェント: オークの板材をつくりました！"}]}
dialogue change @e[type=npc,tag=recipe_agent,c=1] rc_next_sticks @s
dialogue open @e[type=npc,tag=recipe_agent,c=1] @s rc_next_sticks
