scoreboard players set .stage global 5
give @s cobblestone 8
tellraw @s {"rawtext":[{"text":"エージェント: できました！木のつるはしで丸石を掘りました。"}]}
dialogue change @e[type=npc,tag=recipe_agent,c=1] rc_next_furnace @s
dialogue open @e[type=npc,tag=recipe_agent,c=1] @s rc_next_furnace
