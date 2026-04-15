class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numToFreq = {};
        for (const num of nums) {
            numToFreq[num] ??= 0;
            numToFreq[num]++;
        }

        const buckets = Array.from({ length: nums.length + 1 }, () => []);
        for (const [numStr, freq] of Object.entries(numToFreq)) {
            buckets[freq].push(parseInt(numStr));
        }

        const result = [];
        for (let i = buckets.length - 1; i >= 0; i--) { 
            for (const number of buckets[i]) {
                result.push(number);
                if (result.length === k) {
                    return result;
                }
            }
        }
    }
}
