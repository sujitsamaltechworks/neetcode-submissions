class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        //Moore's voting alogorithm
        let count = 0;
        let candidate = null;

        for(let num of nums) {
            if(count == 0) {
                candidate = num;
            }
            count += (num === candidate) ? 1: -1;
        }

        return candidate;
    }
}
