function lengthOfLastWord(s: string): number {
    let max = 0

    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        const prevChar = s[i - 1]

        if (prevChar === ' ' && char !== ' ') {
            max = 1
        }
        if (char !== ' ' && prevChar !== ' ') {
            max += 1
        }
    }

    return max
};
