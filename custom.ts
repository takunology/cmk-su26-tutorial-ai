//% color="#0096FF" weight=200 icon="" block="レシピクラフト"
namespace craft {

    //% blockId=tool_wood_pickaxe block="木のつるはし"
    //% weight=88
    export function woodPickaxe(): number { return 1; }

    //% blockId=tool_stone_pickaxe block="石のつるはし"
    //% weight=87
    export function stonePickaxe(): number { return 2; }

    //% blockId=tool_furnace block="かまど"
    //% weight=86
    export function furnace(): number { return 3; }

    //% blockId=agent_task_cut_oak_log block="オークの原木を切る"
    //% weight=84
    export function cutOakLog(): number { return 1; }

    //% blockId=agent_task_make_oak_planks block="オークの板材をつくる"
    //% weight=83
    export function makeOakPlanks(): number { return 2; }

    //% blockId=agent_task_make_sticks block="木の棒をつくる"
    //% weight=82
    export function makeSticks(): number { return 3; }

    //% blockId=agent_task_wood_pickaxe block="木のつるはしをつくる"
    //% weight=81
    export function makeWoodPickaxe(): number { return 4; }

    //% blockId=agent_task_mine_cobblestone block="丸石をほる"
    //% weight=80
    export function mineCobblestone(): number { return 5; }

    //% blockId=agent_task_furnace block="かまどをつくる"
    //% weight=79
    export function makeFurnace(): number { return 6; }

    //% blockId=craft_pattern block="3x3"
    //% imageLiteralColumns=3 imageLiteralRows=3 gridLiteral=1
    //% blockHidden=true
    export function craftPattern(pattern: string): string {
        return normalize(pattern);
    }

    //% blockId=craft_classify block="このレシピは %pattern として %result である"
    //% pattern.shadow=craft_pattern
    //% result.shadow=tool_wood_pickaxe
    //% weight=100
    export function classifyAs(pattern: string, result: number): void {
        const ok = matches(normalize(pattern), result) ? 1 : 0;
        player.execute("scoreboard players set .output1 global " + ok);
        player.execute("scoreboard players set .output2 global " + result);
        player.execute("function check_result");
    }

    //% blockId=agent_run_prompt block="プロンプトを実行 %step1 %step2 %step3 %step4 %step5 %step6"
    //% step1.shadow=agent_task_cut_oak_log
    //% step2.shadow=agent_task_make_oak_planks
    //% step3.shadow=agent_task_make_sticks
    //% step4.shadow=agent_task_wood_pickaxe
    //% step5.shadow=agent_task_mine_cobblestone
    //% step6.shadow=agent_task_furnace
    //% weight=78
    export function runPrompt(step1: number, step2: number, step3: number, step4: number, step5: number, step6: number): void {
        const ok = (step1 == 1 && step2 == 2 && step3 == 3 && step4 == 4 && step5 == 5 && step6 == 6) ? 1 : 0;
        player.execute("scoreboard players set .prompt_ok global " + ok);
        player.execute("scoreboard players set .prompt1 global " + step1);
        player.execute("scoreboard players set .prompt2 global " + step2);
        player.execute("scoreboard players set .prompt3 global " + step3);
        player.execute("scoreboard players set .prompt4 global " + step4);
        player.execute("scoreboard players set .prompt5 global " + step5);
        player.execute("scoreboard players set .prompt6 global " + step6);
        player.execute("function check_prompt");
    }

    //% blockId=craft_reset block="答えをリセット"
    //% weight=10
    export function resetAnswer(): void {
        player.execute("scoreboard players set .output1 global 0");
        player.execute("scoreboard players set .output2 global 0");
        player.execute("scoreboard players set .prompt_ok global 0");
        player.execute("scoreboard players set .prompt1 global 0");
        player.execute("scoreboard players set .prompt2 global 0");
        player.execute("scoreboard players set .prompt3 global 0");
        player.execute("scoreboard players set .prompt4 global 0");
        player.execute("scoreboard players set .prompt5 global 0");
        player.execute("scoreboard players set .prompt6 global 0");
    }

    function normalize(pattern: string): string {
        let out = "";
        for (let i = 0; i < pattern.length; i++) {
            const c = pattern.charAt(i);
            if (c == "0" || c == ".") {
                out = out + "0";
            } else if (c == " " || c == "\n" || c == "\t" || c == "\r") {
                // skip whitespace
            } else {
                out = out + "1";
            }
        }
        while (out.length < 9) {
            out = out + "0";
        }
        if (out.length > 9) {
            out = out.slice(0, 9);
        }
        return out;
    }

    function matches(pattern: string, result: number): boolean {
        const expected = expectedFor(result);
        return expected.length == 9 && pattern == expected;
    }

    function expectedFor(result: number): string {
        if (result == 1) return "111" + "010" + "010"; // 木のつるはし
        if (result == 2) return "111" + "010" + "010"; // 石のつるはし (形はつるはしと同じ)
        if (result == 3) return "111" + "101" + "111"; // かまど (8マスのドーナツ型)
        return "";
    }
}
