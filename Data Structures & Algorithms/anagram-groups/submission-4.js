class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = {};

        for(let i=0; i<strs.length; i++) {
            const word = strs[i];

            const count = Array(26).fill(0);
            for(let j=0; j<word.length; j++) {
                count[word.charCodeAt(j) - 97]++;
            }

            const key = count.join(',');

            if(!groups[key]) {
                groups[key] = []
            }
            groups[key].push(word);
        }

        return Object.values(groups);
    }
}
