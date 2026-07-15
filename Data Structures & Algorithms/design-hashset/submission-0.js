class MyHashSet {
    constructor() {
        // Pick a prime capacity to reduce hash collisions
        this.capacity = 769;
        // Initialize an array of empty arrays (buckets)
        this.set = Array.from({ length: this.capacity }, () => []);
    }

    // Helper method to get the bucket index for a key
    _hash(key) {
        return key % this.capacity;
    }

    /** 
     * @param {number} key
     * @return {void}
     */
    add(key) {
        const bucketIndex = this._hash(key);
        const bucket = this.set[bucketIndex];
        
        // Only add the key if it doesn't already exist (Sets don't allow duplicates)
        if (!bucket.includes(key)) {
            bucket.push(key);
        }
    }

    /** 
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const bucketIndex = this._hash(key);
        const bucket = this.set[bucketIndex];
        const index = bucket.indexOf(key);
        
        // If the key exists in the bucket, cut it out
        if (index !== -1) {
            bucket.splice(index, 1);
        }
    }

    /** 
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        const bucketIndex = this._hash(key);
        const bucket = this.set[bucketIndex];
        
        // Returns true if the key is inside the bucket, false otherwise
        return bucket.includes(key);
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
