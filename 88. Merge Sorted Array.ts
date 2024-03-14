/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let firstPointer = m - 1
    let secondPointer = n - 1

    for (let i = m + n; i > 0; i--) {
        const firstValue = nums1[firstPointer]
        const secondValue = nums2[secondPointer]

        if (firstValue > secondValue || secondValue === undefined) {
            nums1[i - 1] = firstValue
            firstPointer--
        } else {
            nums1[i - 1] = secondValue
            secondPointer--
        }
    }
};
