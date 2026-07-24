class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        if (!matrix || matrix.length === 0 || matrix[0].length === 0) return;

        const rows = matrix.length;
        const cols = matrix[0].length;

        // Initialize (rows + 1) x (cols + 1) DP table with zeros
        this.dp = Array.from({ length: rows + 1 }, () => new Array(cols + 1).fill(0));

        // Build 2D Prefix Sums
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                this.dp[r + 1][c + 1] = matrix[r][c] 
                    + this.dp[r][c + 1] 
                    + this.dp[r + 1][c] 
                    - this.dp[r][c];
            }
        }
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        return this.dp[row2 + 1][col2 + 1] 
            - this.dp[row1][col2 + 1] 
            - this.dp[row2 + 1][col1] 
            + this.dp[row1][col1];
    }
}

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */