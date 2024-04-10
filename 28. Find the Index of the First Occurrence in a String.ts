function strStr(haystack: string, needle: string): number {
    let firstHayStackPointer = -1
    let occurrences = 0

    for (let i = 0; i < haystack.length; i++) {
        if (occurrences === needle.length) {
            break
        }

        for (let j = 0; j < needle.length; j++) {
            const needleChar = needle[j]
            const haystackChar = haystack[i + j]

            if (haystackChar === needleChar) {
                occurrences++
                if (firstHayStackPointer === -1) {
                    firstHayStackPointer = i
                }
            } else {
                occurrences = 0
                firstHayStackPointer = -1
                break
            }
        }
    }

    return firstHayStackPointer
};
