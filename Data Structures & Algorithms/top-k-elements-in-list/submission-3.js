class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = {};
        for (let i = 0; i < nums.length; i++) {
            freq[nums[i]] = (freq[nums[i]] || 0) + 1;
        }

        //Creating buckets
        const buckets = Array.from({ length: nums.length + 1 }, () => []);
        for (let [num, freqV] of Object.entries(freq)) {
            buckets[freqV].push(num);
        }

        //Collecting the result based on the k value
        const results = [];
        for (let i = buckets.length - 1; i >= 0; i--) {
            if (buckets[i].length != 0) {
                results.push(...buckets[i]);
                if (results.length == k) return results;
            }
        }
        return results;
    }
}
