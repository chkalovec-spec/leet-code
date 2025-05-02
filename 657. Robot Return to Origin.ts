//https://leetcode.com/problems/robot-return-to-origin/description/

function judgeCircle(moves: string): boolean {
    let xPosition = 0
    let yPosition = 0

    for (let i = 0; i < moves.length; i++) {
        const move = moves[i]

        if (move === 'U') {
            xPosition++
        }

        if (move === 'D') {
            xPosition--
        }

        if (move === 'R') {
            yPosition++
        }

        if (move === 'L') {
            yPosition--
        }
    }

    return xPosition === 0 && yPosition === 0
};