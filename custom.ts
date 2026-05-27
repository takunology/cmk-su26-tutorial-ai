/**
 * recipe-craft: tutorial extension for "recipe inference".
 *
 * The student fills a 3x3 grid with the silhouette of a tool, then asks
 * the extension to classify it. The classifier compares the pattern
 * against known recipes and writes the result to the world via the
 * shared scoreboard convention `.output1 global 0|1`, then calls a
 * world-side mcfunction that surfaces feedback.
 */

enum CraftResult {
    //% block="wooden pickaxe"
    Pickaxe = 1,
    //% block="wooden sword"
    Sword = 2,
    //% block="wooden axe"
    Axe = 3,
    //% block="wooden shovel"
    Shovel = 4,
    //% block="wooden hoe"
    Hoe = 5
}

//% weight=200 color="#0096FF" icon="" block="Recipe Craft"
namespace craft {

    //% blockId=craft_pattern block="pattern $pattern"
    //% pattern.fieldEditor="sprite"
    //% pattern.fieldOptions.taggedTemplate="img"
    //% imageLiteralColumns=3 imageLiteralRows=3 gridLiteral=1
    //% weight=100
    export function craftPattern(pattern: string): string {
        return normalize(pattern);
    }

    //% blockId=craft_classify block="classify %pattern as %result"
    //% pattern.shadow=craft_pattern
    //% weight=90
    export function classifyAs(pattern: string, result: CraftResult): void {
        const ok = matches(normalize(pattern), result) ? 1 : 0;
        player.execute(`scoreboard players set .output1 global ${ok}`);
        player.execute(`function check_result`);
    }

    /**
     * Reset the answer flag. Use this between attempts so a stale 1
     * doesn't keep firing "Correct!".
     */
    //% blockId=craft_reset block="reset answer"
    //% weight=10
    export function resetAnswer(): void {
        player.execute(`scoreboard players set .output1 global 0`);
    }

    function normalize(pattern: string): string {
        let out = "";
        for (let i = 0; i < pattern.length; i++) {
            const c = pattern.charAt(i);
            if (c === "0" || c === "." || c === " " || c === "\n" || c === "\t") {
                if (c === "0" || c === ".") out += "0";
            } else {
                out += "1";
            }
        }
        while (out.length < 9) out += "0";
        return out.substr(0, 9);
    }

    function matches(pattern: string, result: CraftResult): boolean {
        const expected = expectedFor(result);
        return expected !== null && pattern === expected;
    }

    function expectedFor(result: CraftResult): string {
        // 3x3 row-major, "1" = material present, "0" = empty.
        switch (result) {
            case CraftResult.Pickaxe: return "111" + "010" + "010";
            case CraftResult.Sword:   return "010" + "010" + "010";
            case CraftResult.Axe:     return "110" + "110" + "010";
            case CraftResult.Shovel:  return "010" + "010" + "010";
            case CraftResult.Hoe:     return "110" + "010" + "010";
        }
        return null;
    }
}
