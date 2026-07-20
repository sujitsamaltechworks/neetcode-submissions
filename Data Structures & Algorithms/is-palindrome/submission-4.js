class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const isAlphanumeric = (s) => /[a-zA-Z0-9]/i.test(s);

        let i = 0,
            j = s.length - 1;
        while (i < j) {
            while (i < j && !isAlphanumeric(s[i])) i++;
            while (i < j && !isAlphanumeric(s[j])) j--;
            if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;
            i++;
            j--;
        }
        return true;
    }
}
