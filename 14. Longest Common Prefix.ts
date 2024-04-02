function longestCommonPrefix(strs: string[]): string {
    let prefix = strs[0]
    let tmpPrefix = ''

    for (let i=1; i<strs.length; i++) {
        tmpPrefix = ''
        const currentString = strs[i]

        for (let i=0; i<prefix.length; i++) {
            const currentChar = currentString[i]
            const prefixChar = prefix[i]

            if (currentChar !== prefixChar) {
                prefix = tmpPrefix
            } else {
                tmpPrefix += currentChar
            }
        }
    }

    return prefix
};
