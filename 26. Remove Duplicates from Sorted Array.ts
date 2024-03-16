// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

function removeDuplicates(nums: number[]): number {
    let pointer = 0
    let tmpValue = undefined

    for (let i = 0; i < nums.length; i++) {
        const currentValue = nums[i]

        if (currentValue === tmpValue) {
            nums[i] = undefined
        } else {
            nums[pointer] = currentValue
            tmpValue = currentValue
            pointer++
        }
    }

    return pointer
};
