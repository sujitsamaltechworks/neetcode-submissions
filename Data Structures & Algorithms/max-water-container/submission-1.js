class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0,
            i = 0,
            j = heights.length - 1;

        while (i < j) {
            const width = j - i;
            const area = width * Math.min(heights[i], heights[j]);
            maxArea = Math.max(maxArea, area);
            if(heights[i] > heights[j]) j--;
            else i++;
        }
        return maxArea;
    }
}
