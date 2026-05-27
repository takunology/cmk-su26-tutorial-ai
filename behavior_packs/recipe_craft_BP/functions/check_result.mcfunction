execute if score .output1 global matches 0 run title @s actionbar §c違うみたい、もう一度よく見て

execute if score .output1 global matches 1 if score .output2 global matches 1 if score .stage global matches 3 run function rc_learned_wood
execute if score .output1 global matches 1 if score .output2 global matches 2 run function step2_stone_pickaxe
execute if score .output1 global matches 1 if score .output2 global matches 3 if score .stage global matches 6 run function rc_learned_furnace

execute if score .output1 global matches 1 if score .output2 global matches 1 unless score .stage global matches 3 run function step1_wood_pickaxe
execute if score .output1 global matches 1 if score .output2 global matches 3 unless score .stage global matches 6 run function step3_furnace
