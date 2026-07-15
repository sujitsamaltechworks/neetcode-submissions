class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for (let str of strs) {
            const count = Array(26).fill(0);
            for (let char of str) {
                count[char.charCodeAt(0) - 97]++;
            }
            const key = count.join("#");
            if (!map.has(key)) map.set(key, []);
            map.get(key).push(str);
        }

        return Array.from(map.values());
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
