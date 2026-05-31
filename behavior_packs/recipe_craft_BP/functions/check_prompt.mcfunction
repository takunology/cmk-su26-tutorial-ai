scoreboard players set .prompt_check global 0
execute if score .prompt1 global matches 101 run scoreboard players add .prompt_check global 1
execute if score .prompt2 global matches 102 run scoreboard players add .prompt_check global 1
execute if score .prompt3 global matches 103 run scoreboard players add .prompt_check global 1
execute if score .prompt4 global matches 104 run scoreboard players add .prompt_check global 1
execute if score .prompt5 global matches 105 run scoreboard players add .prompt_check global 1
execute if score .prompt6 global matches 106 run scoreboard players add .prompt_check global 1
execute if score .prompt7 global matches 107 run scoreboard players add .prompt_check global 1
scoreboard players set .prompt_ok global 0
execute if score .prompt_check global matches 7 run scoreboard players set .prompt_ok global 1
execute if score .prompt_ok global matches 0 run title @s actionbar §e実行できませんでした...（プロンプトをチェックしよう！）
execute if score .prompt_ok global matches 1 run dialogue change @e[type=npc,tag=recipe_agent,c=1] rc_prompt_confirm @s
execute if score .prompt_ok global matches 1 run dialogue open @e[type=npc,tag=recipe_agent,c=1] @s rc_prompt_confirm
