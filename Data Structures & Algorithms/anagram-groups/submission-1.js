class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groupMap = new Map();

        for (let str of strs) {
            const sortedStr = str.split("").sort().join("");
            if (!groupMap.has(sortedStr)) {
                groupMap.set(sortedStr, [])
            }
            groupMap.get(sortedStr).push(str);
        }

        return Array.from(groupMap.values());
    }
}

//Time complexity : O(n^2 X k logk) k -> each string in the array. Very high
// const result = [[strs[0]]];
// for (let i = 1; i < strs.length; i++) {
//     let found = false;
//     for (let j = 0; j < result.length; j++) {
//         if (strs[i].split("").sort().join("") == result[j][0].split("").sort().join("")) {
//             found = true;
//             result[j].push(strs[i]);
//             break;
//         }
//     }
//     if (!found) {
//         result.push([strs[i]]);
//     }
// }

// return result;
