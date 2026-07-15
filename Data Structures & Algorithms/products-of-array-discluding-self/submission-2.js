class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // Best solution
        const res = [];
        res[0] = 1;
        // For computing the prefix
        for (let i = 1; i < nums.length; i++) {
            res[i] = res[i - 1] * nums[i - 1];
        }

        // For computing the postfix and multiplying with prefix array
        let postfix = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            res[i] = postfix * res[i];
            postfix *= nums[i];
        }

        return res;

        // const prefix = [];
        // prefix[0] = nums[0];
        // for (let i = 1; i < nums.length; i++) {
        //     prefix[i] = prefix[i - 1] * nums[i];
        // }

        // const postfix = [];
        // postfix[nums.length - 1] = nums[nums.length - 1];
        // for (let i = nums.length - 2; i >= 0; i--) {
        //     postfix[i] = postfix[i + 1] * nums[i];
        // }

        // const result = [];
        // for (let i = 0; i < nums.length; i++) {
        //     if (i === 0) result[i] = postfix[i + 1];
        //     else if (i === nums.length - 1) result[i] = prefix[i - 1];
        //     else result[i] = prefix[i - 1] * postfix[i + 1];
        // }

        // return result;
    }
}
