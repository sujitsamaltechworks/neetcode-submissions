class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqMap = new Map();

        for (let num of nums) {
            freqMap.set(num, (freqMap.get(num) || 0) + 1);
        }

        // Create buckets
        const buckets = Array(nums.length + 1).fill(null).map(() => []);

        for (let [num, freq] of freqMap.entries()) {
            buckets[freq].push(num);
        }

        console.log(buckets)

        const results = [];

        for (let i = buckets.length - 1; i >= 0 && results.length < k; i--) {
            for (let num of buckets[i]) {
                if (buckets[i].length) {
                    results.push(num);
                    if (results.length == k) break;
                }
            }
        }

        return results;
    }
}
