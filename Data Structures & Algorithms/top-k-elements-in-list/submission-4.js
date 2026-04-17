class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numsToFreq = {};
        for (const num of nums) {
            numsToFreq[num] ??= 0;
            numsToFreq[num]++;
        }

        const buckets = Array.from({ length: nums.length + 1 }, () => []);
        for (const [num, freq] of Object.entries(numsToFreq)) {
            buckets[freq].push(num);
        }

        const result = [];
        for (let i = buckets.length - 1; i >= 0; i--) {
            const bucket = buckets[i];
            for (const num of bucket) {
                result.push(num);
                if (result.length === k) {
                    return result;
                }
            }
        }
    }
}
