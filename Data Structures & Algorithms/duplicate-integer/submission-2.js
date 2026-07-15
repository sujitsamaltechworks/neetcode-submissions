class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const freq = {};
        for (let i = 0; i < nums.length; i++) {
            if (freq[nums[i]] === undefined) {
                freq[nums[i]] = 1;
            } else if (freq[nums[i]]) return true;
        }
        return false;
    }
}
