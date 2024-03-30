function romanToInt(s: string): number {
    const romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }

    let result = 0

    for (let i = 0; i < s.length; i++) {
        const romanChar = s[i]
        const prevRomanChar = s[i - 1]
        const int = romanMap[romanChar]

        if (prevRomanChar === 'I') {
            if (romanChar === 'V' || romanChar === 'X') {
                result += int - 2 * romanMap.I
                continue
            }
        }

        if (prevRomanChar === 'X') {
            if (romanChar === 'L' || romanChar === 'C') {
                result += int - 2 * romanMap.X
                continue
            }
        }

        if (prevRomanChar === 'C') {
            if (romanChar === 'D' || romanChar === 'M') {
                result += int - 2 * romanMap.C
                continue
            }
        }

        result += int
    }

    return result
};
