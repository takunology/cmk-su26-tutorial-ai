enum CraftResult {
    //% block="木のツルハシ"
    Pickaxe = 1,
    //% block="木のツルギ"
    Sword = 2,
    //% block="木のオノ"
    Axe = 3,
    //% block="木のシャベル"
    Shovel = 4,
    //% block="木のクワ"
    Hoe = 5
}

//% color="#0096FF" weight=200 icon="" block="レシピクラフト"
namespace craft {

    //% blockId=craft_pattern block="3x3"
    //% imageLiteralColumns=3 imageLiteralRows=3 gridLiteral=1
    //% blockHidden=true
    export function craftPattern(pattern: string): string {
        return normalize(pattern);
    }

    //% blockId=craft_classify block="このレシピは %pattern として %result である"
    //% pattern.shadow=craft_pattern
    //% weight=100
    export function classifyAs(pattern: string, result: CraftResult): void {
        const ok = matches(normalize(pattern), result) ? 1 : 0;
        player.execute(`scoreboard players set .output1 global ${ok}`);
        player.execute(`function check_result`);
    }

    //% blockId=craft_reset block="答えをリセット"
    //% weight=10
    export function resetAnswer(): void {
        player.execute(`scoreboard players set .output1 global 0`);
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

    function matches(pattern: string, result: CraftResult): boolean {
        const expected = expectedFor(result);
        return expected.length === 9 && pattern === expected;
    }

    function expectedFor(result: CraftResult): string {
        switch (result) {
            case CraftResult.Pickaxe: return "111" + "010" + "010";
            case CraftResult.Sword:   return "010" + "010" + "010";
            case CraftResult.Axe:     return "110" + "110" + "010";
            case CraftResult.Shovel:  return "010" + "010" + "010";
            case CraftResult.Hoe:     return "110" + "010" + "010";
            default:                  return "";
        }
    }
}
