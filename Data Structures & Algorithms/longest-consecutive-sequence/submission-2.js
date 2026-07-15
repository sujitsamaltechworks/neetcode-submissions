class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let count = 0;
        for (let num of set) {
            if (!set.has(num - 1)) {
                let currentNum = num;
                let streak = 1;
                while (set.has(currentNum + 1)) {
                    currentNum++;
                    streak++;
                }
                count = Math.max(count, streak);
            }
        }
        return count;
    }
}
