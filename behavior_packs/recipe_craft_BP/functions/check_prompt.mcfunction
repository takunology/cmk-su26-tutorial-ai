execute if score .prompt_ok global matches 0 run title @s actionbar §e実行できませんでした...（プロンプトをチェックしよう！）
execute if score .prompt_ok global matches 1 run dialogue change @e[type=npc,tag=recipe_agent,c=1] rc_prompt_confirm @s
execute if score .prompt_ok global matches 1 run dialogue open @e[type=npc,tag=recipe_agent,c=1] @s rc_prompt_confirm
