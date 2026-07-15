class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        //Max of two elements can be there as majority elements
        let ele1,
            ele2,
            count1 = 0,
            count2 = 0;
        for (let i = 0; i < nums.length; i++) {
            if (count1 == 0 && ele2 != nums[i]) {
                count1 = 1;
                ele1 = nums[i];
            } else if (count2 == 0 && ele1 != nums[i]) {
                count2 = 1;
                ele2 = nums[i];
            } else if (nums[i] == ele1) {
                count1++;
            } else if (nums[i] == ele2) {
                count2++;
            } else {
                count1--;
                count2--;
            }
        }
        let countA = 0,
            countB = 0;
        for (let i = 0; i < nums.length; i++) {
            if (ele1 == nums[i]) countA++;
            else if (ele2 == nums[i]) countB++;
        }
        const maxOccurance = Math.floor(nums.length / 3);
        const results = [];
        if (countA > maxOccurance) results.push(ele1);
        if (countB > maxOccurance) results.push(ele2);

        return results;
    }
}
