class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let min = Number.MAX_VALUE;
        let profit = 0;
        let res = 0;
        for (let num of prices) {
            min = Math.min(num, min);
            profit = num - min;
            res = Math.max(profit, res);
        }
        return res;
    }
}
