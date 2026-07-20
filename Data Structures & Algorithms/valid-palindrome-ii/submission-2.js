class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        const isPalindrome = (i, j) => {
            while (i < j) {
                if (s[i] !== s[j]) return false;
                i++;
                j--;
            }
            return true;
        };

        let i = 0,
            j = s.length - 1;
        while (i < j) {
            if (s[i] == s[j]) {
                i++;
                j--;
            } else {
                return isPalindrome(i + 1, j) || isPalindrome(i, j - 1);
            }
        }
        return true;
    }
}
