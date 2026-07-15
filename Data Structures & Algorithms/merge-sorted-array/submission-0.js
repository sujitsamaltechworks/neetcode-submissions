class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let i = m - 1;
        let j = n - 1;
        let curr = m + n - 1;
        while(j>=0) {
            if(nums1[i] >= nums2[j]) {
                nums1[curr] = nums1[i];
                i--;
                curr--;
            } else {
                nums1[curr] = nums2[j];
                j--;
                curr--;
            }
        }
    }
}
