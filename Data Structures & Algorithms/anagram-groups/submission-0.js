class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = [[strs[0]]];
        for (let i = 1; i < strs.length; i++) {
            let found = false;
            for (let j = 0; j < result.length; j++) {
                if (strs[i].split("").sort().join("") == result[j][0].split("").sort().join("")) {
                    found = true;
                    result[j].push(strs[i]);
                    break;
                }
            }
            if (!found) {
                result.push([strs[i]]);
            }
        }

        return result;
    }
}
