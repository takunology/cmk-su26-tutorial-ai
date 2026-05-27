scoreboard players set .stage global 10
give @s stick 4
tellraw @s {"rawtext":[{"text":"エージェント: 木の棒をつくりました！"}]}
dialogue change @e[type=npc,tag=recipe_agent,c=1] rc_teach_wood @s
dialogue open @e[type=npc,tag=recipe_agent,c=1] @s rc_teach_wood
