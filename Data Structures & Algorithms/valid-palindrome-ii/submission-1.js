class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        const isPallindrome = (i,j) => {
            while(i<j) {
                if(s[i] != s[j]) return false;
                i++;
                j--;
            }
            return true;
        }
        let i=0;
        let j=s.length - 1;
        while(i<j) {
            if(s[i] != s[j]) {
                return isPallindrome(i+1, j) || isPallindrome(i, j-1);
            }
            i++;
            j--;
        }
        return true;
    }
}
