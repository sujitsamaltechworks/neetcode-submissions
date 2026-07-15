class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const output = new Array(nums.length);
        output[0] = 1;
        for (let i = 1; i < nums.length; i++) {
            output[i] = output[i - 1] * nums[i - 1];
        }
        let suffix = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            output[i] *= suffix;
            suffix *= nums[i];
        }
        return output;
    }
}
