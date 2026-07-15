class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const r = s.replace(/[^A-Za-z0-9]/g,"");
        let i=0;
        let j=r.length-1;
        while(i<j) {
            if(r[i].toLowerCase() != r[j].toLowerCase()) return false;
            i++;
            j--;
        }
        return true;
    }
}
