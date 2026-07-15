class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let i = 0,
            j = nums.length - 1;

        while (i <= j) {
            if (nums[i] == val) {
                if (nums[j] == val) {
                    j--;
                    continue;
                }
                let temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
                i++;
                j--;
            } else {
                i++;
            }
        }

        return i;
    }
}
