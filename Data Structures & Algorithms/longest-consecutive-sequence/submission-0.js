class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set([...nums]);
        let count = 0;
        for (let i = 0; i < nums.length; i++) {
            // If the value is start of a sequence
            if (!set.has(nums[i] - 1)) {
                let sequence = 1;
                let curr = nums[i];
                while (set.has(curr + 1)) {
                    curr++;
                    sequence++;
                }
                if (sequence > count) count = sequence;
            }
        }
        return count;
    }
}
