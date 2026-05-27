//% color="#0096FF" weight=200 icon="" block="レシピクラフト"
namespace craft {

    //% blockId=tool_wood_pickaxe block="木のツルハシ"
    //% weight=88
    export function woodPickaxe(): number { return 1; }

    //% blockId=tool_stone_pickaxe block="石のツルハシ"
    //% weight=87
    export function stonePickaxe(): number { return 2; }

    //% blockId=tool_furnace block="かまど"
    //% weight=86
    export function furnace(): number { return 3; }

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

    //% blockId=craft_reset block="答えをリセット"
    //% weight=10
    export function resetAnswer(): void {
        player.execute("scoreboard players set .output1 global 0");
        player.execute("scoreboard players set .output2 global 0");
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
        if (result == 1) return "111" + "010" + "010"; // 木のツルハシ
        if (result == 2) return "111" + "010" + "010"; // 石のツルハシ (形はツルハシと同じ)
        if (result == 3) return "111" + "101" + "111"; // かまど (8マスのドーナツ型)
        return "";
    }
}
