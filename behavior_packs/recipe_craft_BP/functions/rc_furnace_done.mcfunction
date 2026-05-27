scoreboard players set .stage global 15
setblock ^ ^ ^2 minecraft:furnace keep
tellraw @s {"rawtext":[{"text":"エージェント: できました！かまどを設置しました。"}]}
dialogue change @e[type=npc,tag=recipe_agent,c=1] rc_prompt_ready @s
dialogue open @e[type=npc,tag=recipe_agent,c=1] @s rc_prompt_ready
