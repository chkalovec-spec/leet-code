function imageSmoother(img: number[][]): number[][] {
    const result: number[][] = []

    for (let i = 0; i < img.length; i++) {
        const row = img[i]

        result[i] = []

        for (let j = 0; j < row.length; j++) {
            let sum = 0
            let count = 0

            const tl = img[i - 1]?.[j - 1]
            if (tl !== undefined) {
                count++
                sum += tl
            }

            const tc = img[i - 1]?.[j]
            if (tc !== undefined) {
                count++
                sum += tc
            }

            const tr = img[i - 1]?.[j + 1]
            if (tr !== undefined) {
                count++
                sum += tr
            }

            const l = img[i][j - 1]
            if (l !== undefined) {
                count++
                sum += l
            }

            const c = img[i][j]
            if (c !== undefined) {
                count++
                sum += c
            }

            const r = img[i][j + 1]
            if (r !== undefined) {
                count++
                sum += r
            }

            const bl = img[i + 1]?.[j - 1]
            if (bl !== undefined) {
                count++
                sum += bl
            }

            const bc = img[i + 1]?.[j]
            if (bc !== undefined) {
                count++
                sum += bc
            }

            const br = img[i + 1]?.[j + 1]
            if (br !== undefined) {
                count++
                sum += br
            }

            result[i][j] = Math.floor(sum / count)
        }
    }

    return result
};