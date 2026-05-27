execute if score .output2 global matches 101 if score .stage global matches 2 run function rc_learned_cut_wood
execute if score .output2 global matches 106 if score .stage global matches 12 run function rc_learned_mine_cobblestone

execute unless score .output2 global matches 101 unless score .output2 global matches 106 run title @s actionbar §e実行できませんでした...（作業パズルをチェックしよう！）
execute if score .output2 global matches 101 unless score .stage global matches 2 run title @s actionbar §eいま教える作業と合っていないみたいです
execute if score .output2 global matches 106 unless score .stage global matches 12 run title @s actionbar §eいま教える作業と合っていないみたいです
