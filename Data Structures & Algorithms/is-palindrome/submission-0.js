class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const r = s.replace(/[^A-Za-z0-9]/g,"");
        const arr = r.split("");
        let i=0;
        let j=r.length-1;
        while(i<j) {
            if(arr[i].toLowerCase() != arr[j].toLowerCase()) return false;
            i++;
            j--;
        }
        return true;
    }
}
