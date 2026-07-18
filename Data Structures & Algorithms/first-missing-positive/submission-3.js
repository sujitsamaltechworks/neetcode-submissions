class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        const swap = (i, j) => {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        };

        for (let i = 0; i < nums.length; i++) {
            while (nums[i] != nums[nums[i] - 1] && nums[i] > 0 && nums[i] <= nums.length) {
                swap(i, nums[i] - 1);
            }
        }

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] != i + 1) return i + 1;
        }

        return nums.length + 1;
    }
}
