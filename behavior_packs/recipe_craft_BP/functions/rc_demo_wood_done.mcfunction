scoreboard players set .stage global 2
give @s oak_log 1
tellraw @s {"rawtext":[{"text":"エージェント: 木を集めました！"}]}
dialogue change @e[type=npc,tag=recipe_agent,c=1] rc_teach_cut_wood @s
dialogue open @e[type=npc,tag=recipe_agent,c=1] @s rc_teach_cut_wood
