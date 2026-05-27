scoreboard players set .stage global 2
tellraw @s {"rawtext":[{"text":"エージェント: オークの原木を集めたんですね！"}]}
dialogue change @e[type=npc,tag=recipe_agent,c=1] rc_teach_cut_wood @s
dialogue open @e[type=npc,tag=recipe_agent,c=1] @s rc_teach_cut_wood
