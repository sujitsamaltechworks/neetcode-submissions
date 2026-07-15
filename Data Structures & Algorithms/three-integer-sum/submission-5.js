class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const res = [];
        nums.sort((a, b) => a - b);
        for (let i = 0; i < nums.length - 2; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) continue;
            let s = i + 1, e = nums.length - 1;
            const target = 0 - nums[i];
            while (s < e) {
                const sum = nums[s] + nums[e];
                if (sum == target) {
                    res.push([nums[i], nums[s], nums[e]]);
                    s++;
                    e--;
                    while (s < e && nums[s] === nums[s - 1]) s++;
                    while (s < e && nums[e] === nums[e + 1]) e--;
                } else if (sum > target) e--;
                else s++;
            }

            // else if (nums[0] == nums[1] && nums[1] == nums[2] && nums[2] == nums[1]) return nums;
        }
        return res;
    }
}
