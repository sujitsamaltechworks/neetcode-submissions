class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let i = 0,
            j = 0;
        let str = "";
        while (i < word1.length || j < word2.length) {
            if (i < word1.length) {
                str += word1[i];
                i++;
            }
            if (j < word2.length) {
                str += word2[j];
                j++;
            }
        }

        return str;
    }
}
