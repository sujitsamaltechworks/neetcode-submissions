class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        if (nums.length == 1) return nums;
        const rotateArr = (start, end) => {
            let i = start;
            let j = end;
            while (i < j) {
                let temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
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

        return nums;
    }
}
