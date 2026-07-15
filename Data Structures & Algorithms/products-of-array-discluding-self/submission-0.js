class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefix = [];
        prefix[0] = nums[0];
        for (let i = 1; i < nums.length; i++) {
            prefix[i] = prefix[i - 1] * nums[i];
        }

        const postfix = [];
        postfix[nums.length - 1] = nums[nums.length - 1];
        for (let i = nums.length - 2; i >= 0; i--) {
            postfix[i] = postfix[i + 1] * nums[i];
        }

        const result = [];
        for (let i = 0; i < nums.length; i++) {
            if (i === 0) result[i] = postfix[i + 1];
            else if (i === nums.length - 1) result[i] = prefix[i - 1];
            else result[i] = prefix[i - 1] * postfix[i + 1];
        }

        return result;
    }
}
