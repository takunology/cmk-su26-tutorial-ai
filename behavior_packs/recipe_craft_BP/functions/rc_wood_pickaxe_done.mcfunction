scoreboard players set .stage global 12
give @s wooden_pickaxe 1
tellraw @s {"rawtext":[{"text":"エージェント: 木のつるはしをつくりました！"}]}
dialogue change @e[type=npc,tag=recipe_agent,c=1] rc_next_mine_cobblestone @s
dialogue open @e[type=npc,tag=recipe_agent,c=1] @s rc_next_mine_cobblestone
