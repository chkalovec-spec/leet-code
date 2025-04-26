//https://leetcode.com/problems/add-strings/description/

function addStrings(num1: string, num2: string): string {
    const maxLength = Math.max(num1.length, num2.length)

    const num1WithZero = num1.padStart(maxLength, '0')
    const num2WithZero = num2.padStart(maxLength, '0')

    let remain = 0
    let result = ''


    for (let i = maxLength - 1; i >= 0; i--) {
        const firsChar = num1WithZero[i]
        const secondChar = num2WithZero[i]

        const sum = Number(firsChar) + Number(secondChar) + remain

        if (sum >= 10) {
            remain = 1
            result = String(sum - 10) + result
        } else {
            remain = 0
            result = String(sum) + result
        }

    }

    return (remain || '') + result
};