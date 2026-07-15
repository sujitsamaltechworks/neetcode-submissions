class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const freq = {};

        for(let i=0; i<nums.length; i++) {
            const val = nums[i];

            if(freq[val] != undefined) {
                return true;
            }

            freq[val] = 1;
        }

        return false;
    }
}
