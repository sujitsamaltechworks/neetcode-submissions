class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        const bucket = [0, 0, 0];
        for (let i = 0; i < nums.length; i++) {
            bucket[nums[i]]++;
        }
        let count = 0;
        let bucketVal = 0;
        for (let i = 0; i < nums.length; i++) {
            if (count < bucket[bucketVal]) {
                nums[i] = bucketVal;
                count++;
            } else {
                bucketVal++;
                count = 0;
                i--;
            }
        }
    }
}
