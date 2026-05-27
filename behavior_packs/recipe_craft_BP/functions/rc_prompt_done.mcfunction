scoreboard players set .stage global 17
setblock ^ ^ ^2 minecraft:furnace keep
tellraw @s {"rawtext":[{"text":"エージェント: できました！必要な手順を順番に実行できました。"}]}
dialogue change @e[type=npc,tag=recipe_agent,c=1] rc_prompt_success @s
dialogue open @e[type=npc,tag=recipe_agent,c=1] @s rc_prompt_success
