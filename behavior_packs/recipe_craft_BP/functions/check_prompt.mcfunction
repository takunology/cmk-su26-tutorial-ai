execute if score .prompt_ok global matches 0 run title @s actionbar §c順番が違うみたい。もう一度組み直してみよう
execute if score .prompt_ok global matches 1 run dialogue open @e[type=npc,tag=recipe_agent,c=1] @s rc_prompt_confirm
