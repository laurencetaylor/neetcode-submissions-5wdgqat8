class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numToFreq = {};
        const buckets = Array.from({ length: nums.length + 1 }, () => []);
        // keep pushing based on freq, increase length based on freq
        // return the most freq iterating from the last of the buckets
        // maintain dictionary of frequencies also for quick lookup

        for (const num of nums) {
            numToFreq[num] ??= 0;
            numToFreq[num]++;
            buckets[numToFreq[num]].push(num);
        }
        
        const result = [];

        let remaining = k;
        for (let i = buckets.length - 1; i >= 0; i--) {
            const bucket = buckets[i];
            for (let j = bucket.length - 1; j >= 0; j--) {
                const num = bucket[j];
                if (!result.includes(num)) {
                    result.push(num);
                    remaining--;
                }

                if (remaining === 0) {
                    return result;
                }
            }
        }
    }
}
