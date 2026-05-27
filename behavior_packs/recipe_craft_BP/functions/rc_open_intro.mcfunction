function init_score
execute unless entity @e[type=npc,tag=recipe_agent] run summon npc ~ ~ ~
tag @e[type=npc,c=1,r=8] add recipe_agent
dialogue open @e[type=npc,tag=recipe_agent,c=1] @p rc_intro
