// https://leetcode.com/problems/remove-element

function removeElement(nums: number[], val: number): number {
    let pointer = 0

    for (let i = 0; i < nums.length; i++) {
        const value = nums[i]

        if (value === val) {
            nums[i] = undefined
        } else {
            nums[pointer] = value
            pointer++
        }
    }

    return pointer
};
