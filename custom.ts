//% color="#0096FF" weight=200 icon="" block="AI学習"
namespace craft {

    //% blockId=tool_blank block=" "
    //% blockHidden=true
    export function blankResult(): number { return 0; }

    //% blockId=tool_wood_pickaxe block="木のつるはし"
    //% weight=88
    export function woodPickaxe(): number { return 1; }

    //% blockId=tool_stone_pickaxe block="石のつるはし"
    //% weight=87
    export function stonePickaxe(): number { return 2; }

    //% blockId=tool_furnace block="かまど"
    //% weight=86
    export function furnace(): number { return 3; }

    //% blockId=tool_oak_planks block="オークの板材"
    //% weight=85
    export function oakPlanks(): number { return 4; }

    //% blockId=tool_sticks block="木の棒"
    //% weight=84
    export function sticks(): number { return 5; }

    //% blockId=tool_crafting_table block="作業台"
    //% weight=83
    export function craftingTable(): number { return 6; }

    export enum AgentTask {
        //% block="オークの原木を切る"
        CutOakLog = 101,
        //% block="オークの板材をつくる"
        MakeOakPlanks = 102,
        //% block="作業台をつくる"
        MakeCraftingTable = 103,
        //% block="木の棒をつくる"
        MakeSticks = 104,
        //% block="木のつるはしをつくる"
        MakeWoodPickaxe = 105,
        //% block="丸石をほる"
        MineCobblestone = 106,
        //% block="かまどをつくる"
        MakeFurnace = 107,
    }

    //% blockId=craft_pattern_2x2 block="2x2"
    //% imageLiteralColumns=2 imageLiteralRows=2 gridLiteral=1
    //% blockHidden=true
    export function craftPattern2x2(pattern: string): string {
        return normalize(pattern);
    }

    //% blockId=craft_pattern block="3x3"
    //% imageLiteralColumns=3 imageLiteralRows=3 gridLiteral=1
    //% blockHidden=true
    export function craftPattern(pattern: string): string {
        return normalize(pattern);
    }

    //% blockId=craft_on_recipe block="レシピをこたえる"
    //% handlerStatement=true
    //% weight=130
    export function onAnswerRecipe(handler: () => void): void {
        player.execute("scoreboard players set .output1 global 0");
        player.execute("scoreboard players set .output2 global 0");
        handler();
        player.execute("function check_result");
    }

    //% blockId=craft_on_teach block="エージェントに学習させる"
    //% handlerStatement=true
    //% weight=129
    export function onTeachAgent(handler: () => void): void {
        player.execute("scoreboard players set .output2 global 0");
        handler();
        player.execute("function check_task");
    }

    //% blockId=craft_on_prompt block="プロンプトを実行する"
    //% handlerStatement=true
    //% weight=128
    export function onRunPrompt(handler: () => void): void {
        player.execute("scoreboard players set .prompt_idx global 0");
        player.execute("scoreboard players set .prompt1 global 0");
        player.execute("scoreboard players set .prompt2 global 0");
        player.execute("scoreboard players set .prompt3 global 0");
        player.execute("scoreboard players set .prompt4 global 0");
        player.execute("scoreboard players set .prompt5 global 0");
        player.execute("scoreboard players set .prompt6 global 0");
        player.execute("scoreboard players set .prompt7 global 0");
        handler();
        player.execute("function check_prompt");
    }

    //% blockId=craft_classify block="クラフト %pattern で %result をつくる"
    //% pattern.shadow=craft_pattern
    //% result.shadow=tool_blank
    //% weight=100
    export function classifyAs(pattern: string, result: number): void {
        const ok = matches(normalize(pattern), result) ? 1 : 0;
        player.execute("scoreboard players set .output1 global " + ok);
        player.execute("scoreboard players set .output2 global " + result);
    }

    //% blockId=agent_teach_task block="エージェントに %task をおしえる"
    //% weight=77
    export function teachTask(task: AgentTask): void {
        player.execute("scoreboard players set .output2 global " + task);
    }

    //% blockId=agent_prompt_step_cut_oak_log block="オークの原木を切る"
    //% weight=75
    export function promptCutOakLog(): void { appendPromptStep(101); }

    //% blockId=agent_prompt_step_make_oak_planks block="オークの板材をつくる"
    //% weight=74
    export function promptMakeOakPlanks(): void { appendPromptStep(102); }

    //% blockId=agent_prompt_step_make_crafting_table block="作業台をつくる"
    //% weight=73
    export function promptMakeCraftingTable(): void { appendPromptStep(103); }

    //% blockId=agent_prompt_step_make_sticks block="木の棒をつくる"
    //% weight=72
    export function promptMakeSticks(): void { appendPromptStep(104); }

    //% blockId=agent_prompt_step_make_wood_pickaxe block="木のつるはしをつくる"
    //% weight=71
    export function promptMakeWoodPickaxe(): void { appendPromptStep(105); }

    //% blockId=agent_prompt_step_mine_cobblestone block="丸石をほる"
    //% weight=70
    export function promptMineCobblestone(): void { appendPromptStep(106); }

    //% blockId=agent_prompt_step_make_furnace block="かまどをつくる"
    //% weight=69
    export function promptMakeFurnace(): void { appendPromptStep(107); }

    function appendPromptStep(id: number): void {
        player.execute("scoreboard players set .prompt_task global " + id);
        player.execute("function rc_prompt_append");
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
        if (result == 4) return countOnes(pattern) == 1; // オークの板材
        const expected = expectedFor(result);
        return expected.length == 9 && pattern == expected;
    }

    function countOnes(pattern: string): number {
        let count = 0;
        for (let i = 0; i < pattern.length; i++) {
            if (pattern.charAt(i) == "1") count++;
        }
        return count;
    }

    function expectedFor(result: number): string {
        if (result == 1) return "111" + "010" + "010"; // 木のつるはし
        if (result == 2) return "111" + "010" + "010"; // 石のつるはし (形はつるはしと同じ)
        if (result == 3) return "111" + "101" + "111"; // かまど (8マスのドーナツ型)
        if (result == 5) return "010" + "010" + "000"; // 木の棒
        if (result == 6) return "111" + "100" + "000"; // 作業台 (2x2)
        return "";
    }
}
