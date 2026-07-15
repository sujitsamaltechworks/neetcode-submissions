class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        this.sortArr(nums, 0, nums.length-1);
        return nums;
    }
    sortArr(nums, l, r) {
        if (l == r) return;
        let mid = Math.floor((l + r) / 2); //divide the array in halves (incase large numbers use l+ (r-l)/2)
        this.sortArr(nums, l, mid);
        this.sortArr(nums, mid + 1, r);
        this.merge(nums, l, mid, r);
    }
    merge(A, l, mid, r) {
        let n = mid - l + 1; // l -> mid
        let m = r - mid; // mid+1 -> r
        let B = Array(n);
        let C = Array(m);
        for (let i = l; i <= mid; i++) {
            B[i - l] = A[i];
        }
        for (let i = mid + 1; i <= r; i++) {
            C[i - mid - 1] = A[i];
        }
        let i = 0,
            j = 0; //Used for array B and C respectively
        for (let k = l; k <= r; k++) {
            //If the arrays are travelled completely then move with the next array pointers
            if (i == n) {
                A[k] = C[j];
                j++;
            } else if (j == m || B[i] <= C[j]) {
                A[k] = B[i];
                i++;
            } else {
                A[k] = C[j];
                j++;
            }
        }
    }
}
