class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set([...nums]);
        let count = 0;
        for (let num of set) {
            // If the value is start of a sequence
            if (!set.has(num - 1)) {
                let sequence = 1;
                let curr = num;
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
