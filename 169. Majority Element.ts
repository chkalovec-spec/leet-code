function majorityElement(nums: number[]): number {
    const majorityNumber = Math.round(nums.length / 2)

    const map = new Map()
    let result = nums[0]

    for (let i = 0; i < nums.length; i++) {
        const value = nums[i]
        const count = map[value] === undefined ? 1 : map[value] + 1

        if (count === majorityNumber) {
            result = value
            break
        }

        map[value] = count
    }

    return result
};
