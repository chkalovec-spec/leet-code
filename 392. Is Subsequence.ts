//https://leetcode.com/problems/is-subsequence/description/

function isSubsequence(s: string, t: string): boolean {
    let sPointer = 0

    for (let i = 0; i < t.length; i++) {
        const char = t[i]

        if (char === s[sPointer]) {
            sPointer++
        }
    }

    return sPointer === s.length
};