class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = "";

        for (const str of strs) {
            encoded += str.length + "#" + str;
        }

        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i = 0;

        while (i < str.length) {
            // Find the '#'
            let j = i;
            while (str[j] !== '#') {
                j++;
            }

            // Length of current string
            const length = Number(str.substring(i, j));

            // Extract actual string
            const word = str.substring(j + 1, j + 1 + length);
            result.push(word);

            // Move pointer to next encoded string
            i = j + 1 + length;
        }

        return result;
    }
}