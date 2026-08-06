class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        let i = 0,
            j = people.length - 1,
            count = 0;
        people.sort();
        while (i <= j) {
            if (people[i] + people[j] <= limit) {
                i++;
            }
            j--;
            count++;
        }
        return count;
    }
}
