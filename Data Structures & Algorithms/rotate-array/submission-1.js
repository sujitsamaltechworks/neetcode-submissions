class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        if (nums.length == 1) return nums;
        function rotateArr(i, j) {
            while (i < j) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
                i++;
                j--;
            }
        }
        if (k >= nums.length) {
            k = k % nums.length;
        }
        rotateArr(0, nums.length - 1);
        rotateArr(0, k - 1);
        rotateArr(k, nums.length - 1);
    }
}
