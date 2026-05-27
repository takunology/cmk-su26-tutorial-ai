scoreboard players set .stage global 8
give @s crafting_table 1
tellraw @s {"rawtext":[{"text":"エージェント: 作業台をつくりました！"}]}
dialogue change @e[type=npc,tag=recipe_agent,c=1] rc_next_sticks @s
dialogue open @e[type=npc,tag=recipe_agent,c=1] @s rc_next_sticks
