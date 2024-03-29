function maxProfit(prices: number[]): number {
    let min = prices[0]
    let max = prices[0]

    let profit = 0

    for (let i = 1; i < prices.length; i++) {
        const current = prices[i]

        if (current < min) {
            const newProfit = max - min
            console.log(newProfit)
            if (newProfit > profit) {
                profit = newProfit
            }

            min = current
            max = current
        }

        if (current > max) {
            max = current
        }
    }

    return Math.max(max - min, profit)
};
