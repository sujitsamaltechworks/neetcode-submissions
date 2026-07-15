class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let candidate = nums[0];
        let count = 0;
        for (let i = 0; i < nums.length; i++) {
            if (count == 0) {
                candidate = nums[i];
                count = 1;
                continue;
            }
            if (nums[i] == candidate) count++;
            else count--;
        }
        return candidate;
    }
}
