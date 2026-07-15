class MyHashMap {
    constructor() {
        // A prime capacity distributes our hash values evenly across the table
        this.capacity = 769;
        // Each index will store an array of [key, value] pairs to handle collisions
        this.map = Array.from({ length: this.capacity }, () => []);
    }

    // Hash function to map any large key into our 0 to 768 boundary index range
    _hash(key) {
        return key % this.capacity;
    }

    /** 
     * @param {number} key 
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        const bucketIndex = this._hash(key);
        const bucket = this.map[bucketIndex];
        
        // Check if the key already exists in this bucket
        for (let pair of bucket) {
            if (pair[0] === key) {
                pair[1] = value; // Update the existing value and stop
                return;
            }
        }
        
        // If it's a completely new key, push the [key, value] pair into the bucket
        bucket.push([key, value]);
    }

    /** 
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const bucketIndex = this._hash(key);
        const bucket = this.map[bucketIndex];
        
        // Search the bucket for our key
        for (let pair of bucket) {
            if (pair[0] === key) {
                return pair[1]; // Return the found value
            }
        }
        
        // LeetCode requirement: return -1 if the key doesn't exist
        return -1;
    }

    /** 
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const bucketIndex = this._hash(key);
        const bucket = this.map[bucketIndex];
        
        // Find the index of the pair within the bucket array
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1); // Extract the pair out of the bucket
                return;
            }
        }
    }
}
/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
