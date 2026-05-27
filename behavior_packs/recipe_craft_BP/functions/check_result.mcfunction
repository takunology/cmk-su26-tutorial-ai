execute if score .output1 global matches 0 run title @s actionbar §e学習できませんでした...（プログラムをチェックしよう！）

execute if score .output1 global matches 1 if score .output2 global matches 4 if score .stage global matches 4 run function rc_learned_oak_planks
execute if score .output1 global matches 1 if score .output2 global matches 6 if score .stage global matches 6 run function rc_learned_crafting_table
execute if score .output1 global matches 1 if score .output2 global matches 5 if score .stage global matches 8 run function rc_learned_sticks
execute if score .output1 global matches 1 if score .output2 global matches 1 if score .stage global matches 10 run function rc_learned_wood
execute if score .output1 global matches 1 if score .output2 global matches 3 if score .stage global matches 14 run function rc_learned_furnace

execute if score .output1 global matches 1 unless score .stage global matches 4 unless score .stage global matches 6 unless score .stage global matches 8 unless score .stage global matches 10 unless score .stage global matches 14 run title @s actionbar §eいま教える作業と合っていないみたいです
