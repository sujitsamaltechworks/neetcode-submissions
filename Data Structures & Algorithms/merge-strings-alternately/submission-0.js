class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let i = 0;
        let j = 0;
        const res = [];
        let cnt = true;
        while (i < word1.length || j < word2.length) {
            res.push(word1[i++]);
            res.push(word2[j++]);
            // if (cnt && i < word1.length) {
            //     res.push(word1[i++]);
            //     cnt = false;
            // } else if (!cnt && j < word2.length) {
            //     res.push(word2[j++]);
            //     cnt = true;
            // }
        }
        return res.join("");
    }
}
