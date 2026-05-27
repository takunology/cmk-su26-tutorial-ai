//% color="#0096FF" weight=200 icon="" block="レシピクラフト"
namespace craft {

    export enum Result {
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

    //% blockId=craft_pattern block="3x3"
    //% imageLiteralColumns=3 imageLiteralRows=3 gridLiteral=1
    //% blockHidden=true
    export function craftPattern(pattern: string): string {
        return normalize(pattern);
    }

    //% blockId=craft_classify block="このレシピは %pattern として %result である"
    //% pattern.shadow=craft_pattern
    //% weight=100
    export function classifyAs(pattern: string, result: Result): void {
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
            if (c === "0" || c === ".") {
                out += "0";
            } else if (c === " " || c === "\n" || c === "\t") {
                // skip whitespace
            } else {
                out += "1";
            }
        }
        while (out.length < 9) out += "0";
        return out.substr(0, 9);
    }

    function matches(pattern: string, result: Result): boolean {
        const expected = expectedFor(result);
        return expected.length === 9 && pattern === expected;
    }

    function expectedFor(result: Result): string {
        switch (result) {
            case Result.Pickaxe: return "111" + "010" + "010";
            case Result.Sword:   return "010" + "010" + "010";
            case Result.Axe:     return "110" + "110" + "010";
            case Result.Shovel:  return "010" + "010" + "010";
            case Result.Hoe:     return "110" + "010" + "010";
            default:             return "";
        }
    }
}
