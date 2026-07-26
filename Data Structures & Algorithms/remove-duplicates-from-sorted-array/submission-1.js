class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        if (nums.length == 0) return 0;
        let curr = nums[0],
            idx = 1;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] == curr) continue;
            else {
                curr = nums[i];
                nums[idx] = nums[i];
                idx++;
            }
        }
        return idx;
    }
}
